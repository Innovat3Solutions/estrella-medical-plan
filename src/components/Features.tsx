import { useState } from 'react';
import { Stethoscope, Video, HeartPulse, Activity, Eye, Smile, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();

    const features = [
        {
            id: 'primary-care',
            icon: Stethoscope,
            title: t('feature.primaryCare.title'),
            description: t('feature.primaryCare.desc'),
            details: [
                "Consultas médicas sin límite",
                "Manejo de enfermedades crónicas",
                "Exámenes físicos anuales",
                "Coordinación de cuidado integral"
            ],
            detailsEn: [
                "Unlimited medical consultations",
                "Chronic disease management",
                "Annual physical exams",
                "Comprehensive care coordination"
            ],
            image: "/assets/images/nside-a-south-florida-primary-care.png"
        },
        {
            id: 'telemedicine',
            icon: Video,
            title: t('feature.telemedicine.title'),
            description: t('feature.telemedicine.desc'),
            details: [
                "Acceso inmediato a médicos",
                "Consultas por video o teléfono",
                "Recetas electrónicas",
                "Disponible en cualquier momento"
            ],
            detailsEn: [
                "Immediate access to doctors",
                "Video or phone consultations",
                "Electronic prescriptions",
                "Available anytime"
            ],
            image: "/assets/images/candid-moment-inside-modern-south-florida.png"
        },
        {
            id: 'specialists',
            icon: HeartPulse,
            title: t('feature.specialists.title'),
            description: t('feature.specialists.desc'),
            details: [
                "Más de 15 especialidades",
                "Tarifas preferenciales",
                "Citas rápidas disponibles",
                "Red de especialistas certificados"
            ],
            detailsEn: [
                "Over 15 specialties",
                "Preferential rates",
                "Quick appointments available",
                "Network of certified specialists"
            ],
            image: "/assets/images/cardiologist-using-stethoscope-to-examine.png"
        },
        {
            id: 'labs',
            icon: Activity,
            title: t('feature.labs.title'),
            description: t('feature.labs.desc'),
            details: [
                "Análisis de sangre completos",
                "Panel metabólico básico",
                "Pruebas de colesterol",
                "Resultados rápidos"
            ],
            detailsEn: [
                "Complete blood analysis",
                "Basic metabolic panel",
                "Cholesterol tests",
                "Fast results"
            ],
            image: "/assets/images/lab-technician-drawing-blood.png"
        },
        {
            id: 'dental',
            icon: Smile,
            title: t('feature.dental.title'),
            description: t('feature.dental.desc'),
            details: [
                "2 limpiezas anuales incluidas",
                "Radiografías dentales",
                "Descuentos en tratamientos",
                "Odontología preventiva"
            ],
            detailsEn: [
                "2 annual cleanings included",
                "Dental X-rays",
                "Treatment discounts",
                "Preventive dentistry"
            ],
            image: "/assets/images/dentist-performing-routine-dental-checkup.png"
        },
        {
            id: 'vision',
            icon: Eye,
            title: t('feature.vision.title'),
            description: t('feature.vision.desc'),
            details: [
                "Examen de vista anual",
                "Un par de lentes básicos",
                "Descuentos en monturas",
                "Detección de enfermedades oculares"
            ],
            detailsEn: [
                "Annual eye exam",
                "One pair of basic lenses",
                "Frame discounts",
                "Eye disease detection"
            ],
            image: "/assets/images/female-optometrist-adjusting-phoropter.png"
        }
    ];

    const activeFeature = features[activeIndex];
    const { language } = useLanguage();
    const currentDetails = language === 'es' ? activeFeature.details : activeFeature.detailsEn;

    return (
        <section id="features" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-20">
            {/* Decorative star accents */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-24 left-8 w-56 opacity-[0.08] pointer-events-none"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-16 right-8 w-44 opacity-[0.06] pointer-events-none rotate-12"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary-base font-semibold tracking-wide uppercase text-sm md:text-base mb-3">
                        {t('features.badge')}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {t('features.title')}
                    </h3>
                    <p className="text-lg text-gray-600">
                        {t('features.subtitle')}
                    </p>
                </div>

                {/* Interactive Feature Display */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-12">

                        {/* Left Menu */}
                        <div className="lg:col-span-4 border-r border-gray-100">
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <h4 className="font-semibold text-gray-900">{t('features.servicesIncluded')}</h4>
                                <p className="text-sm text-gray-500">{t('features.selectDetails')}</p>
                            </div>
                            <nav className="divide-y divide-gray-100">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    const isActive = index === activeIndex;

                                    return (
                                        <button
                                            key={feature.id}
                                            onClick={() => setActiveIndex(index)}
                                            className={`w-full flex items-center gap-4 p-5 text-left transition-all duration-300 group ${
                                                isActive
                                                    ? 'bg-primary-base text-white'
                                                    : 'hover:bg-gray-50 text-gray-700 hover:text-primary-base'
                                            }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                                                isActive
                                                    ? 'bg-white/20'
                                                    : 'bg-primary-light/10 group-hover:bg-primary-light/20'
                                            }`}>
                                                <Icon
                                                    size={24}
                                                    className={isActive ? 'text-white' : 'text-primary-base'}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h5 className={`font-semibold truncate ${
                                                    isActive ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                    {feature.title}
                                                </h5>
                                                <p className={`text-sm truncate ${
                                                    isActive ? 'text-white/70' : 'text-gray-500'
                                                }`}>
                                                    {feature.description.slice(0, 40)}...
                                                </p>
                                            </div>
                                            <ChevronRight
                                                size={20}
                                                className={`flex-shrink-0 transition-transform ${
                                                    isActive
                                                        ? 'text-white translate-x-1'
                                                        : 'text-gray-400 group-hover:translate-x-1'
                                                }`}
                                            />
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Right Content - Image and Details */}
                        <div className="lg:col-span-8 flex flex-col">
                            {/* Image Section - Square aspect ratio */}
                            <div className="relative aspect-square max-h-[400px] overflow-hidden bg-gray-100">
                                <img
                                    key={activeFeature.id}
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover object-center transition-opacity duration-500 animate-fade-in"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <activeFeature.icon size={24} className="text-white" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white">
                                            {activeFeature.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 p-8">
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {activeFeature.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {currentDetails.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 rounded-full p-1 bg-green-50 text-green-500 flex-shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="#enrollment">
                                        <Button variant="primary" size="lg">
                                            {t('features.enrollNow')}
                                        </Button>
                                    </a>
                                    <a href={`#${activeFeature.id}`}>
                                        <Button variant="outline" size="lg">
                                            {t('features.moreInfo')}
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="mt-16 text-center bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-gray-100 relative overflow-hidden max-w-5xl mx-auto">
                    <div className="absolute -right-24 -top-24 w-64 h-64 bg-accent-light/20 blur-3xl rounded-full" />
                    <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary-light/20 blur-3xl rounded-full" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center text-left">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {t('features.cta.title')}
                            </h4>
                            <p className="text-gray-600 mb-0">
                                {t('features.cta.subtitle')}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
                            <a href="#enrollment">
                                <Button variant="accent" size="lg" className="whitespace-nowrap">
                                    {t('features.enrollNow')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
