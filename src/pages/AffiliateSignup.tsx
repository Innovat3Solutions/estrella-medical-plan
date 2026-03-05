import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, ChevronRight, Stethoscope, Video, HeartPulse, Activity, Eye, Smile, Bus, Pill } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LocationsMap } from '../components/LocationsMap';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export function AffiliateSignup() {
    const { language } = useLanguage();
    const scriptLoaded = useRef(false);
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);
    const mobileCarouselRef = useRef<HTMLDivElement>(null);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Load GoHighLevel form embed script
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://link.msgsndr.com/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);
            scriptLoaded.current = true;
        }
    }, []);

    // Handle mobile carousel scroll
    useEffect(() => {
        const carousel = mobileCarouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            const scrollLeft = carousel.scrollLeft;
            const cardWidth = carousel.offsetWidth * 0.8 + 16;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setMobileActiveIndex(Math.min(newIndex, services.length - 1));
        };

        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToService = (index: number) => {
        const carousel = mobileCarouselRef.current;
        if (!carousel) return;
        const cardWidth = carousel.offsetWidth * 0.8 + 16;
        carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    };

    const services = [
        {
            id: 'primary-care',
            icon: Stethoscope,
            title: language === 'es' ? 'Cuidado Primario' : 'Primary Care',
            description: language === 'es'
                ? 'Visitas ilimitadas con médicos de atención primaria para mantener la salud en óptimas condiciones.'
                : 'Unlimited visits with primary care physicians to keep health in optimal condition.',
            details: language === 'es'
                ? ['Consultas médicas sin límite', 'Manejo de enfermedades crónicas', 'Exámenes físicos anuales', 'Coordinación de cuidado integral']
                : ['Unlimited medical consultations', 'Chronic disease management', 'Annual physical exams', 'Comprehensive care coordination'],
            image: '/assets/images/primary-care.webp'
        },
        {
            id: 'telemedicine',
            icon: Video,
            title: language === 'es' ? 'Telemedicina 24/7' : 'Telemedicine 24/7',
            description: language === 'es'
                ? 'Consultas médicas virtuales desde cualquier lugar, disponibles las 24 horas del día, los 7 días de la semana.'
                : 'Virtual medical consultations from anywhere, available 24 hours a day, 7 days a week.',
            details: language === 'es'
                ? ['Acceso inmediato a médicos', 'Consultas por video o teléfono', 'Recetas electrónicas', 'Disponible en cualquier momento']
                : ['Immediate access to doctors', 'Video or phone consultations', 'Electronic prescriptions', 'Available anytime'],
            image: '/assets/images/candid-moment-inside-modern-south-florida.webp'
        },
        {
            id: 'specialists',
            icon: HeartPulse,
            title: language === 'es' ? 'Especialistas' : 'Specialists',
            description: language === 'es'
                ? 'Acceso a una amplia red de especialistas con tarifas preferenciales y sin largos tiempos de espera.'
                : 'Access to a wide network of specialists with preferential rates and no long wait times.',
            details: language === 'es'
                ? ['Más de 15 especialidades', 'Tarifas preferenciales', 'Citas rápidas disponibles', 'Red de especialistas certificados']
                : ['Over 15 specialties', 'Preferential rates', 'Quick appointments available', 'Network of certified specialists'],
            image: '/assets/images/cardiologist-using-stethoscope-to-examine.webp'
        },
        {
            id: 'labs',
            icon: Activity,
            title: language === 'es' ? 'Laboratorios' : 'Labs',
            description: language === 'es'
                ? 'Pruebas de laboratorio anuales y preventivas incluidas sin costo adicional (copago $0).'
                : 'Annual and preventive laboratory tests included at no additional cost ($0 copay).',
            details: language === 'es'
                ? ['Análisis de sangre completos', 'Panel metabólico básico', 'Pruebas de colesterol', 'Resultados rápidos']
                : ['Complete blood analysis', 'Basic metabolic panel', 'Cholesterol tests', 'Fast results'],
            image: '/assets/images/lab-technician-drawing-blood.webp'
        },
        {
            id: 'dental',
            icon: Smile,
            title: language === 'es' ? 'Cuidado Dental' : 'Dental Care',
            description: language === 'es'
                ? 'Incluye dos limpiezas dentales al año, radiografías y descuentos en procedimientos mayores.'
                : 'Includes two dental cleanings per year, X-rays, and discounts on major procedures.',
            details: language === 'es'
                ? ['2 limpiezas anuales incluidas', 'Radiografías dentales', 'Descuentos en tratamientos', 'Odontología preventiva']
                : ['2 annual cleanings included', 'Dental X-rays', 'Treatment discounts', 'Preventive dentistry'],
            image: '/assets/images/dentist-performing-routine-dental-checkup.webp'
        },
        {
            id: 'vision',
            icon: Eye,
            title: language === 'es' ? 'Servicios de Visión' : 'Vision Services',
            description: language === 'es'
                ? 'Examen de la vista anual y descuentos en lentes y monturas.'
                : 'Annual eye exam and discounts on lenses and frames.',
            details: language === 'es'
                ? ['Examen de vista anual', 'Un par de lentes básicos', 'Descuentos en monturas', 'Detección de enfermedades oculares']
                : ['Annual eye exam', 'One pair of basic lenses', 'Frame discounts', 'Eye disease detection'],
            image: '/assets/images/female-optometrist-adjusting-phoropter.webp'
        },
        {
            id: 'transport',
            icon: Bus,
            title: language === 'es' ? 'Transporte Médico' : 'Medical Transport',
            description: language === 'es'
                ? 'Servicio de transporte gratuito a citas médicas para miembros elegibles.'
                : 'Free transportation service to medical appointments for eligible members.',
            details: language === 'es'
                ? ['Transporte a citas médicas', 'Servicio puerta a puerta', 'Para miembros elegibles', 'Coordinación incluida']
                : ['Transportation to appointments', 'Door-to-door service', 'For eligible members', 'Coordination included'],
            image: '/assets/images/medical-transport-van-in-south-florida-assisting.webp'
        },
        {
            id: 'pharmacy',
            icon: Pill,
            title: language === 'es' ? 'Descuentos en Farmacia' : 'Pharmacy Discounts',
            description: language === 'es'
                ? 'Precios reducidos en medicamentos en farmacias participantes.'
                : 'Reduced prices on medications at participating pharmacies.',
            details: language === 'es'
                ? ['Precios reducidos', 'Farmacias participantes', 'Medicamentos genéricos', 'Sin recargos']
                : ['Reduced prices', 'Participating pharmacies', 'Generic medications', 'No surcharges'],
            image: '/assets/images/pharmacy-delivery-staff-handing-prescript.webp'
        }
    ];

    const activeService = services[activeServiceIndex];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Header />
            <main>
                {/* Hero Section with Background Image */}
                <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-dark">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/images/Estrella_group.webp"
                            alt="Estrella Medical Team"
                            className="w-full h-full object-cover object-top opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-base/60 to-primary-light/40" />
                        <img
                            src="/assets/images/star-accent.webp"
                            alt=""
                            className="absolute top-10 left-5 w-40 md:w-72 opacity-15 pointer-events-none animate-float hidden sm:block"
                        />
                        <img
                            src="/assets/images/star-accent.webp"
                            alt=""
                            className="absolute bottom-5 right-10 w-32 md:w-56 opacity-10 pointer-events-none rotate-12 animate-float delay-500 hidden sm:block"
                        />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent-light font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-sm">
                                <span className="text-accent-light">★</span>
                                <span>{language === 'es' ? 'Programa de Afiliados' : 'Affiliate Program'}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                                {language === 'es' ? 'Únete a Nuestra Red de' : 'Join Our Network of'} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                    {language === 'es' ? 'Agentes Exitosos' : 'Successful Agents'}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                                {language === 'es'
                                    ? 'Ofrece el mejor plan médico del Sur de la Florida y genera excelentes ingresos recurrentes. Una oportunidad única de crecer con Estrella Medical Centers.'
                                    : 'Offer the best medical plan in South Florida and generate excellent recurring income. A unique opportunity to grow with Estrella Medical Centers.'}
                            </p>

                            <a href="#register">
                                <Button variant="accent" size="lg" className="px-8 py-4 text-lg font-bold shadow-xl">
                                    {language === 'es' ? 'Registrarme Ahora' : 'Register Now'}
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* What is the Plan Section */}
                <section id="about-plan" className="py-20 lg:py-28 bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-10 right-10 w-64 opacity-[0.08] pointer-events-none hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-base/10 text-primary-base font-semibold text-sm mb-6 border border-primary-base/20">
                                <AlertTriangle size={16} />
                                <span>{language === 'es' ? 'Importante Entender' : 'Important to Understand'}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                {language === 'es' ? '¿Qué es el Plan Médico Estrella?' : 'What is the Estrella Medical Plan?'}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {language === 'es' ? 'Información clave que todo agente debe conocer' : 'Key information every agent should know'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <div className="w-14 h-14 rounded-xl bg-primary-base/10 flex items-center justify-center mb-6">
                                    <AlertTriangle className="w-7 h-7 text-primary-base" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {language === 'es' ? 'NO Es un Seguro Médico' : 'NOT Health Insurance'}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {language === 'es'
                                        ? 'El Plan Médico Estrella NO es un seguro médico tradicional. Es un plan de membresía comunitario que brinda acceso directo a servicios médicos de calidad.'
                                        : 'The Estrella Medical Plan is NOT traditional health insurance. It is a community membership plan that provides direct access to quality medical services.'}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <div className="w-14 h-14 rounded-xl bg-primary-base/10 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {language === 'es' ? 'Es un Plan Comunitario' : "It's a Community Plan"}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {language === 'es'
                                        ? 'Diseñado para la comunidad del Sur de la Florida. Los miembros pagan una tarifa mensual fija y reciben atención médica directa en nuestros centros.'
                                        : 'Designed for the South Florida community. Members pay a fixed monthly fee and receive direct medical care at our centers.'}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <div className="w-14 h-14 rounded-xl bg-primary-base/10 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {language === 'es' ? 'Atención Médica Directa' : 'Direct Medical Care'}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {language === 'es'
                                        ? 'Sin intermediarios, sin reclamaciones complicadas, sin deducibles sorpresa. Los miembros visitan nuestros centros y reciben atención inmediata.'
                                        : 'No middlemen, no complicated claims, no surprise deductibles. Members visit our centers and receive immediate care.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Included - Interactive Like Features */}
                <section id="services" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-24 left-8 w-56 opacity-[0.08] pointer-events-none hidden md:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-16 right-8 w-44 opacity-[0.06] pointer-events-none rotate-12 hidden md:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                            <h2 className="text-primary-base font-semibold tracking-wide uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-3">
                                {language === 'es' ? 'Lo Que Ofrecerás' : 'What You\'ll Offer'}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                                {language === 'es' ? 'Servicios Incluidos en el Plan' : 'Services Included in the Plan'}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
                                {language === 'es'
                                    ? 'Conoce todos los beneficios que tus clientes recibirán con el Plan Médico Estrella'
                                    : 'Learn about all the benefits your clients will receive with the Estrella Medical Plan'}
                            </p>
                        </div>

                        {/* Mobile Carousel View */}
                        <div className="lg:hidden">
                            <div
                                ref={mobileCarouselRef}
                                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
                            >
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <div
                                            key={service.id}
                                            className="snap-start flex-shrink-0 w-[80%] sm:w-[70%] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                                        >
                                            <div className="relative h-40 overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                            <Icon size={16} className="text-white" />
                                                        </div>
                                                        <h4 className="text-lg font-bold text-white">
                                                            {service.title}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                                                    {service.description}
                                                </p>
                                                <div className="space-y-2">
                                                    {service.details.slice(0, 3).map((detail, i) => (
                                                        <div key={i} className="flex items-start gap-2">
                                                            <CheckCircle2 size={14} className="text-primary-base mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700 text-xs font-medium">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile Carousel Indicators */}
                            <div className="flex justify-center gap-2 mt-4">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToService(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            mobileActiveIndex === index
                                                ? 'bg-primary-base w-6'
                                                : 'bg-gray-300'
                                        }`}
                                        aria-label={`Go to service ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Desktop Interactive Display */}
                        <div className="hidden lg:block">
                            <div className="flex gap-6">
                                {/* Left Side - Service Menu */}
                                <div className="w-[260px] flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                            <h4 className="font-semibold text-gray-900 text-sm">{language === 'es' ? 'Servicios Incluidos' : 'Services Included'}</h4>
                                        </div>
                                        <nav className="divide-y divide-gray-50">
                                            {services.map((service, index) => {
                                                const Icon = service.icon;
                                                const isActive = index === activeServiceIndex;

                                                return (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => setActiveServiceIndex(index)}
                                                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-all duration-200 ${
                                                            isActive
                                                                ? 'bg-primary-base'
                                                                : 'hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                            isActive
                                                                ? 'bg-white/20'
                                                                : 'bg-primary-light/10'
                                                        }`}>
                                                            <Icon
                                                                size={16}
                                                                className={isActive ? 'text-white' : 'text-primary-base'}
                                                            />
                                                        </div>
                                                        <span className={`font-medium text-sm ${
                                                            isActive ? 'text-white' : 'text-gray-700'
                                                        }`}>
                                                            {service.title}
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className={`ml-auto flex-shrink-0 ${
                                                                isActive ? 'text-white' : 'text-gray-300'
                                                            }`}
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </div>

                                    {/* Pricing Card Below Menu */}
                                    <div className="mt-4 bg-gradient-to-br from-primary-base to-primary-dark rounded-2xl p-5 text-white">
                                        <div className="text-center mb-3">
                                            <span className="inline-block px-3 py-1 bg-accent-base/20 text-accent-light rounded-full text-xs font-semibold mb-2">
                                                {language === 'es' ? 'Membresía Mensual' : 'Monthly Membership'}
                                            </span>
                                            <div className="flex items-baseline justify-center gap-1">
                                                <span className="text-3xl font-bold">$59</span>
                                                <span className="text-white/70 text-sm">/{language === 'es' ? 'mes' : 'mo'}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-light flex-shrink-0" />
                                                <span className="text-white/90 text-xs">{language === 'es' ? 'Sin preguntas de salud' : 'No health questions'}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-light flex-shrink-0" />
                                                <span className="text-white/90 text-xs">{language === 'es' ? 'Activación inmediata' : 'Immediate activation'}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-light flex-shrink-0" />
                                                <span className="text-white/90 text-xs">{language === 'es' ? 'Cancela cuando quieras' : 'Cancel anytime'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Service Details */}
                                <div className="flex-1 rounded-2xl shadow-lg overflow-hidden relative min-h-[420px]">
                                    {/* Full Background Image */}
                                    <img
                                        key={activeService.id}
                                        src={activeService.image}
                                        alt={activeService.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Content Card - Bottom Right */}
                                    <div className="absolute bottom-4 right-4 max-w-[280px]">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-8 h-8 rounded-lg bg-primary-base/10 flex items-center justify-center">
                                                    <activeService.icon size={16} className="text-primary-base" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900">
                                                    {activeService.title}
                                                </h4>
                                            </div>

                                            <div className="space-y-1.5">
                                                {activeService.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 size={12} className="text-primary-base flex-shrink-0" />
                                                        <span className="text-gray-700 text-xs">
                                                            {detail}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Become an Agent - Combined Section */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-light via-primary-base to-primary-dark relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-10 left-10 w-72 opacity-15 pointer-events-none hidden lg:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-10 right-20 w-48 opacity-10 pointer-events-none rotate-45 hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-accent-light font-semibold tracking-wide uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-3">
                                {language === 'es' ? 'Para Agentes' : 'For Agents'}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                {language === 'es' ? 'Por Qué Unirte y Cómo Empezar' : 'Why Join & How to Get Started'}
                            </h3>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full" />
                        </div>

                        {/* Benefits Row */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: language === 'es' ? 'Comisiones Altas' : 'High Commissions',
                                    desc: language === 'es' ? 'Gana comisiones atractivas y recurrentes por cada miembro.' : 'Earn attractive, recurring commissions for every member.'
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: language === 'es' ? 'Sin Barreras' : 'No Barriers',
                                    desc: language === 'es' ? 'Sin preguntas de salud ni exclusiones preexistentes.' : 'No health questions or pre-existing exclusions.'
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: language === 'es' ? 'Activación Inmediata' : 'Immediate Activation',
                                    desc: language === 'es' ? 'Los miembros usan beneficios casi de inmediato.' : 'Members use benefits almost immediately.'
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    ),
                                    title: language === 'es' ? 'Ingresos Recurrentes' : 'Recurring Income',
                                    desc: language === 'es' ? 'Comisiones mensuales mientras el miembro esté activo.' : 'Monthly commissions while member is active.'
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-base/20 text-accent-light flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-16">
                            <div className="flex-1 h-px bg-white/20" />
                            <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                                {language === 'es' ? 'Proceso Simple' : 'Simple Process'}
                            </span>
                            <div className="flex-1 h-px bg-white/20" />
                        </div>

                        {/* Steps */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: '1', title: language === 'es' ? 'Regístrate' : 'Register', desc: language === 'es' ? 'Completa el formulario abajo' : 'Complete the form below' },
                                { step: '2', title: language === 'es' ? 'Capacitación' : 'Training', desc: language === 'es' ? 'Recibe tu kit de agente' : 'Receive your agent kit' },
                                { step: '3', title: language === 'es' ? 'Inscribe' : 'Enroll', desc: language === 'es' ? 'Inscribe miembros fácilmente' : 'Enroll members easily' },
                                { step: '4', title: language === 'es' ? 'Cobra' : 'Earn', desc: language === 'es' ? 'Recibe comisiones mensuales' : 'Receive monthly commissions' },
                            ].map((item, idx) => (
                                <div key={idx} className="relative">
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-white/20" />
                                    )}
                                    <div className="flex items-center gap-4 md:flex-col md:text-center">
                                        <div className="w-12 h-12 rounded-full bg-accent-base text-white font-bold text-lg flex items-center justify-center shadow-lg flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-white/60 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Registration Form Section */}
                <section id="register" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/5 opacity-50 transform -skew-x-12" />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-20 left-6 w-44 opacity-[0.07] pointer-events-none hidden lg:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-16 right-12 w-52 opacity-[0.05] pointer-events-none -rotate-12 hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-primary-base font-semibold tracking-wide uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-3">
                                {language === 'es' ? 'Únete Hoy' : 'Join Today'}
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {language === 'es' ? 'Regístrate como Agente' : 'Register as an Agent'}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'es'
                                    ? 'Completa tus datos y nuestro equipo se contactará contigo para iniciar el proceso.'
                                    : 'Fill in your details and our team will contact you to start the process.'}
                            </p>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full mt-6" />
                        </div>

                        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="p-6 md:p-10">
                                {/* GoHighLevel Form */}
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/1J17icYb7R4rb6vThibh"
                                    style={{
                                        width: '100%',
                                        height: '762px',
                                        border: 'none',
                                        borderRadius: '3px'
                                    }}
                                    id="inline-1J17icYb7R4rb6vThibh"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Affiliate Program OnBoarding"
                                    data-height="762"
                                    data-layout-iframe-id="inline-1J17icYb7R4rb6vThibh"
                                    data-form-id="1J17icYb7R4rb6vThibh"
                                    title="Affiliate Program OnBoarding"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Map Section */}
                <LocationsMap />
            </main>
            <Footer />
        </div>
    );
}
