import { useLanguage } from '../context/LanguageContext';

const MAIN_SITE_URL = 'https://estrella-medical-centers.vercel.app';

export function Services() {
    const { t, language } = useLanguage();

    const services = [
        {
            title: language === 'es' ? "Cuidado Primario" : "Primary Care",
            image: "/assets/images/primary-care.jpg",
            description: language === 'es'
                ? "Atención médica preventiva y manejo de enfermedades crónicas con nuestros doctores primarios."
                : "Preventive medical care and chronic disease management with our primary care doctors.",
            link: `${MAIN_SITE_URL}/services/primary-care`
        },
        {
            title: language === 'es' ? "Servicios Dentales" : "Dental Services",
            image: "/assets/images/dental.jpg",
            description: language === 'es'
                ? "Cuidado oral completo incluyendo limpiezas, extracciones, y odontología cosmética para toda la familia."
                : "Complete oral care including cleanings, extractions, and cosmetic dentistry for the whole family.",
            link: `${MAIN_SITE_URL}/services/dental`
        },
        {
            title: language === 'es' ? "Especialidades Médicas" : "Medical Specialties",
            image: "/assets/images/specialists.jpg",
            description: language === 'es'
                ? "Más de 15 especialidades médicas disponibles en nuestras clínicas para cuidado avanzado."
                : "Over 15 medical specialties available at our clinics for advanced care.",
            link: `${MAIN_SITE_URL}/services/specialties`
        },
        {
            title: language === 'es' ? "Centro de Diagnóstico" : "Diagnostic Center",
            image: "/assets/images/diagnostics.jpg",
            description: language === 'es'
                ? "Rayos X, ultrasonidos, EKGs y otros servicios diagnósticos con tecnología de última generación."
                : "X-rays, ultrasounds, EKGs and other diagnostic services with cutting-edge technology.",
            link: `${MAIN_SITE_URL}/services/diagnostics`
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative star accents */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-12 right-6 w-44 opacity-[0.08] pointer-events-none"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-8 left-12 w-36 opacity-[0.06] pointer-events-none -rotate-12"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary-base font-semibold tracking-wide uppercase text-sm md:text-base mb-3">
                            {t('services.badge')}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {t('services.title')}
                        </h3>
                    </div>
                    <a
                        href={MAIN_SITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-base font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-1 group"
                    >
                        {t('services.viewAll')}
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary-base/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-base transition-colors">{service.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                    {service.description}
                                </p>
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm font-semibold text-accent-dark hover:text-accent-base transition-colors mt-auto uppercase tracking-wide"
                                >
                                    {t('services.learnMore')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
