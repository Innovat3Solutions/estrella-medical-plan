import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const INPUT_DIR = './public/assets/images';
const OUTPUT_DIR = './public/assets/images-optimized';
const MAX_WIDTH = 1920; // Max width for large images
const QUALITY_WEBP = 80;
const QUALITY_JPG = 85;

async function ensureDir(dir) {
    if (!existsSync(dir)) {
        await mkdir(dir, { recursive: true });
    }
}

async function getFileSizeInMB(filePath) {
    const stats = await stat(filePath);
    return (stats.size / (1024 * 1024)).toFixed(2);
}

async function optimizeImage(inputPath, outputDir) {
    const ext = extname(inputPath).toLowerCase();
    const name = basename(inputPath, ext);

    // Skip non-image files
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        return null;
    }

    const inputSize = await getFileSizeInMB(inputPath);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Resize if larger than max width
        const resizeOptions = metadata.width > MAX_WIDTH
            ? { width: MAX_WIDTH, withoutEnlargement: true }
            : {};

        // Create WebP version (best compression)
        const webpPath = join(outputDir, `${name}.webp`);
        await image
            .clone()
            .resize(resizeOptions)
            .webp({ quality: QUALITY_WEBP })
            .toFile(webpPath);

        const webpSize = await getFileSizeInMB(webpPath);

        // Also create optimized JPG fallback for older browsers
        const jpgPath = join(outputDir, `${name}.jpg`);
        await image
            .clone()
            .resize(resizeOptions)
            .jpeg({ quality: QUALITY_JPG, mozjpeg: true })
            .toFile(jpgPath);

        const jpgSize = await getFileSizeInMB(jpgPath);

        console.log(`✓ ${name}${ext}: ${inputSize}MB → WebP: ${webpSize}MB, JPG: ${jpgSize}MB`);

        return {
            original: inputPath,
            originalSize: parseFloat(inputSize),
            webpSize: parseFloat(webpSize),
            jpgSize: parseFloat(jpgSize)
        };
    } catch (error) {
        console.error(`✗ Error processing ${inputPath}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('\n🖼️  Image Optimization Script');
    console.log('================================\n');

    await ensureDir(OUTPUT_DIR);

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(f =>
        ['.png', '.jpg', '.jpeg', '.webp'].includes(extname(f).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    let totalOriginal = 0;
    let totalWebp = 0;
    let totalJpg = 0;
    let processed = 0;

    for (const file of imageFiles) {
        const result = await optimizeImage(join(INPUT_DIR, file), OUTPUT_DIR);
        if (result) {
            totalOriginal += result.originalSize;
            totalWebp += result.webpSize;
            totalJpg += result.jpgSize;
            processed++;
        }
    }

    console.log('\n================================');
    console.log('📊 Summary:');
    console.log(`   Processed: ${processed} images`);
    console.log(`   Original total: ${totalOriginal.toFixed(2)} MB`);
    console.log(`   WebP total: ${totalWebp.toFixed(2)} MB (${((1 - totalWebp/totalOriginal) * 100).toFixed(1)}% smaller)`);
    console.log(`   JPG total: ${totalJpg.toFixed(2)} MB (${((1 - totalJpg/totalOriginal) * 100).toFixed(1)}% smaller)`);
    console.log('\n✅ Optimized images saved to:', OUTPUT_DIR);
    console.log('\n📝 Next steps:');
    console.log('   1. Review the optimized images');
    console.log('   2. Run: npm run replace-images (to replace originals)');
    console.log('   3. Update your components to use .webp with .jpg fallback\n');
}

main().catch(console.error);
