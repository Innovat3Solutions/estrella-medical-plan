import { readdir, copyFile, rm, rename } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = './public/assets/images';
const OPTIMIZED_DIR = './public/assets/images-optimized';
const BACKUP_DIR = './public/assets/images-backup';

async function main() {
    console.log('\n🔄 Replacing Original Images with Optimized Versions');
    console.log('=====================================================\n');

    if (!existsSync(OPTIMIZED_DIR)) {
        console.error('❌ Optimized images directory not found. Run npm run optimize-images first.');
        process.exit(1);
    }

    // Create backup of originals
    if (!existsSync(BACKUP_DIR)) {
        console.log('📦 Creating backup of original images...');
        await rename(IMAGES_DIR, BACKUP_DIR);
        await rename(OPTIMIZED_DIR, IMAGES_DIR);
        console.log('✅ Original images backed up to:', BACKUP_DIR);
        console.log('✅ Optimized images are now in:', IMAGES_DIR);
    } else {
        console.log('⚠️  Backup already exists. Removing old optimized folder and replacing...');
        await rm(IMAGES_DIR, { recursive: true, force: true });
        await rename(OPTIMIZED_DIR, IMAGES_DIR);
        console.log('✅ Images replaced successfully!');
    }

    // List what's in the new images folder
    const files = await readdir(IMAGES_DIR);
    const webpCount = files.filter(f => extname(f) === '.webp').length;
    const jpgCount = files.filter(f => extname(f) === '.jpg').length;

    console.log(`\n📊 New images folder contains:`);
    console.log(`   ${webpCount} WebP files`);
    console.log(`   ${jpgCount} JPG fallback files`);
    console.log('\n✅ Done! Your site should now load much faster.\n');
}

main().catch(console.error);
