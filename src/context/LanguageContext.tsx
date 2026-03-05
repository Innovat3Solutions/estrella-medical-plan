import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations = {
    es: {
        // Header
        'nav.plan': 'Plan Médico Estrella',
        'nav.primaryCare': 'Cuidado Primario',
        'nav.specialties': 'Especialidades',
        'nav.dental': 'Dental y Visión',
        'nav.becomeAgent': 'Conviértete en Agente',
        'nav.about': 'Sobre Nosotros',
        'nav.contact': 'Contacto',
        'nav.schedule': 'Inscribirse Hoy',
        'nav.language': 'ES',

        // Agents Page
        'agents.hero.badge': 'Oportunidad de Negocio',
        'agents.hero.title1': 'Unete a Nuestra Red',
        'agents.hero.title2': 'de Agentes Exitosos',
        'agents.hero.subtitle': 'Ofrece el mejor plan médico en el Sur de la Florida y genera excelentes ingresos. Una oportunidad única de crecer con Estrella Medical Centers.',
        'agents.hero.cta': 'Registrate Ahora',
        'agents.benefits.title': '¿Por qué convertirte en agente?',
        'agents.benefits.1.title': 'Altas Comisiones',
        'agents.benefits.1.desc': 'Gana comisiones atractivas y recurrentes por cada miembro que afilies a nuestro plan.',
        'agents.benefits.2.title': 'Fácil Inscripción',
        'agents.benefits.2.desc': 'Procesos optimizados para que puedas afiliar a tus clientes de manera rápida y sin complicaciones.',
        'agents.benefits.3.title': 'Producto Premium',
        'agents.benefits.3.desc': 'Ofrece servicios de alta calidad, desde atención primaria hasta telemedicina 24/7.',
        'agents.form.title': 'Registrate como Agente',
        'agents.form.subtitle': 'Completa tus datos y nuestro equipo se contactará contigo para iniciar el proceso.',
        'agents.form.experience': 'Años de Experiencia en Ventas',
        'agents.form.submit': 'Enviar Solicitud',
        'agents.form.success': '¡Gracias por tu interés! Nos comunicaremos contigo pronto.',

        // Agents - What is the Plan
        'agents.whatIs.badge': 'Importante Entender',
        'agents.whatIs.title': '¿Qué es el Plan Médico Estrella?',
        'agents.whatIs.subtitle': 'Información clave que todo agente debe conocer',
        'agents.whatIs.notInsurance.title': 'NO Es un Seguro Médico',
        'agents.whatIs.notInsurance.desc': 'El Plan Médico Estrella NO es un seguro médico tradicional. Es un plan de membresía comunitario que brinda acceso directo a servicios médicos de calidad en nuestras instalaciones a un precio mensual asequible.',
        'agents.whatIs.community.title': 'Es un Plan Comunitario',
        'agents.whatIs.community.desc': 'Somos un programa de membresía diseñado para la comunidad hispana del Sur de la Florida. Los miembros pagan una tarifa mensual fija y reciben atención médica directa en los centros Estrella Medical Centers.',
        'agents.whatIs.direct.title': 'Atención Médica Directa',
        'agents.whatIs.direct.desc': 'Sin intermediarios, sin reclamaciones complicadas, sin deducibles sorpresa. Los miembros visitan nuestros centros y reciben atención inmediata con tarifas transparentes.',
        'agents.whatIs.disclaimer': 'Este plan de membresía no cumple con los requisitos mínimos de cobertura esencial bajo la Ley de Cuidado de Salud Asequible (ACA). No es un sustituto del seguro médico tradicional.',

        // Agents - Services Section
        'agents.services.title': 'Servicios que Ofrecerás a tus Clientes',
        'agents.services.subtitle': 'Conoce todos los beneficios incluidos en el Plan Médico Estrella',
        'agents.services.primary.title': 'Cuidado Primario Ilimitado',
        'agents.services.primary.desc': 'Visitas sin límite con médicos de atención primaria en cualquiera de nuestras ubicaciones.',
        'agents.services.telemedicine.title': 'Telemedicina 24/7',
        'agents.services.telemedicine.desc': 'Consultas virtuales disponibles las 24 horas, los 7 días de la semana desde cualquier lugar.',
        'agents.services.specialists.title': 'Red de Especialistas',
        'agents.services.specialists.desc': 'Acceso a cardiólogos, neurólogos, endocrinólogos, podólogos y más con tarifas preferenciales.',
        'agents.services.labs.title': 'Laboratorios Incluidos',
        'agents.services.labs.desc': 'Análisis de sangre, pruebas de diagnóstico y laboratorios preventivos con $0 copago.',
        'agents.services.dental.title': 'Cuidado Dental',
        'agents.services.dental.desc': 'Dos limpiezas anuales, radiografías y descuentos en procedimientos dentales.',
        'agents.services.vision.title': 'Servicios de Visión',
        'agents.services.vision.desc': 'Examen de la vista anual y descuentos en lentes y monturas.',
        'agents.services.transport.title': 'Transporte Médico',
        'agents.services.transport.desc': 'Servicio de transporte gratuito a citas médicas para miembros elegibles.',
        'agents.services.pharmacy.title': 'Descuentos en Farmacia',
        'agents.services.pharmacy.desc': 'Precios reducidos en medicamentos en farmacias participantes.',

        // Agents - Why Sell Section
        'agents.whySell.title': '¿Por Qué Vender Este Plan?',
        'agents.whySell.subtitle': 'Ventajas competitivas que hacen la diferencia',
        'agents.whySell.affordable.title': 'Precio Accesible',
        'agents.whySell.affordable.desc': 'Solo $59/mes por membresía individual. Fácil de vender porque es asequible para la mayoría de las familias.',
        'agents.whySell.noBarriers.title': 'Sin Barreras de Entrada',
        'agents.whySell.noBarriers.desc': 'No hay preguntas de salud, no hay exclusiones por condiciones preexistentes, no hay períodos de espera largos.',
        'agents.whySell.immediate.title': 'Activación Inmediata',
        'agents.whySell.immediate.desc': 'Los miembros pueden comenzar a usar sus beneficios casi inmediatamente después de inscribirse.',
        'agents.whySell.recurring.title': 'Ingresos Recurrentes',
        'agents.whySell.recurring.desc': 'Gana comisiones cada mes mientras el miembro permanezca activo en el plan.',

        // Agents - How It Works
        'agents.howItWorks.title': 'Cómo Funciona para el Agente',
        'agents.howItWorks.step1.title': 'Regístrate',
        'agents.howItWorks.step1.desc': 'Completa el formulario y recibe capacitación sobre el plan y sus beneficios.',
        'agents.howItWorks.step2.title': 'Recibe tus Materiales',
        'agents.howItWorks.step2.desc': 'Obtén acceso a materiales de marketing, folletos y tu código de agente único.',
        'agents.howItWorks.step3.title': 'Inscribe Miembros',
        'agents.howItWorks.step3.desc': 'Usa nuestro sistema fácil para inscribir nuevos miembros en minutos.',
        'agents.howItWorks.step4.title': 'Cobra tus Comisiones',
        'agents.howItWorks.step4.desc': 'Recibe pagos puntuales por cada inscripción y comisiones recurrentes mensuales.',

        // Hero
        'hero.badge': 'Plan de Cuidado Premium',
        'hero.title1': 'El Plan Médico',
        'hero.title2': 'Que Brilla Más',
        'hero.subtitle': 'Atención médica integral y asequible para usted y su familia. Acceso exclusivo a nuestros servicios de primera clase sin necesidad de seguro médico tradicional.',
        'hero.cta1': 'Inscribirse Hoy',
        'hero.cta2': 'Más Información',
        'hero.benefit1': 'Sin deducibles',
        'hero.benefit2': 'Aprobación rápida',
        'hero.membership': 'Membresía Individual',
        'hero.perMonth': '/ mes',
        'hero.feature1': 'Visitas de atención primaria ilimitadas',
        'hero.feature2': 'Telemedicina 24/7',
        'hero.feature3': 'Copago de $0 en laboratorios básicos',
        'hero.feature4': 'Descuentos en especialistas',
        'hero.feature5': 'Transporte a citas médicas',
        'hero.startNow': 'Comienza Ahora',
        'hero.terms': '* Aplican términos y condiciones.',

        // Features
        'features.badge': 'Beneficios Exclusivos',
        'features.title': '¿Qué incluye el Plan Médico Estrella?',
        'features.subtitle': 'Nuestro objetivo es proporcionarle a usted y a su familia acceso a los mejores servicios médicos en el Sur de la Florida, todo por una tarifa mensual predecible.',
        'features.servicesIncluded': 'Servicios Incluidos',
        'features.selectDetails': 'Seleccione para ver detalles',
        'features.enrollNow': 'Inscribirse Ahora',
        'features.moreInfo': 'Más Información',
        'features.cta.title': 'Proteja a su familia hoy mismo',
        'features.cta.subtitle': 'Inscribirse es fácil y toma menos de 5 minutos. Disfrute de la tranquilidad de saber que su salud está en las mejores manos.',

        // Feature items
        'feature.primaryCare.title': 'Cuidado Primario',
        'feature.primaryCare.desc': 'Visitas ilimitadas con su médico de atención primaria para mantener su salud en óptimas condiciones.',
        'feature.telemedicine.title': 'Telemedicina 24/7',
        'feature.telemedicine.desc': 'Consultas médicas virtuales desde la comodidad de su hogar, disponibles las 24 horas del día, los 7 días de la semana.',
        'feature.specialists.title': 'Especialistas',
        'feature.specialists.desc': 'Acceso a una amplia red de especialistas con tarifas descontadas y sin largos tiempos de espera.',
        'feature.labs.title': 'Laboratorios Básicos',
        'feature.labs.desc': 'Pruebas de laboratorio anuales y preventivas incluidas sin costo adicional (copago $0).',
        'feature.dental.title': 'Cuidado Dental',
        'feature.dental.desc': 'Incluye dos limpiezas dentales al año, radiografías y descuentos en procedimientos mayores.',
        'feature.vision.title': 'Cobertura de Visión',
        'feature.vision.desc': 'Examen de la vista anual y un par de lentes básicos incluidos en su plan.',

        // About
        'about.badge': 'Sobre Nuestro Plan',
        'about.title1': 'Más que un Seguro,',
        'about.title2': 'Es Familia',
        'about.description': 'En Estrella Medical Centers, entendemos que la salud es lo más importante. Por eso hemos diseñado un plan médico directo, sin complicaciones, sin deducibles ocultos y enfocado 100% en brindarte atención de calidad suprema en nuestras facilidades.',
        'about.yearsExcellence': 'Años de Excelencia',
        'about.personalizedCare': 'Atención Personalizada',
        'about.personalizedCareDesc': 'Médicos que realmente se toman el tiempo de conocerte y entender tus necesidades de salud, sin la prisa de las clínicas tradicionales.',
        'about.technology': 'Tecnología de Punta',
        'about.technologyDesc': 'Acceso a centros médicos equipados con las facilidades más modernas de diagnóstico y tratamiento en el Sur de la Florida.',
        'about.transparency': 'Transparencia Total',
        'about.transparencyDesc': 'Disfruta de la tranquilidad mental con una sola tarifa mensual predecible, cubriendo integralmente tus necesidades primarias.',

        // Services
        'services.badge': 'Más Allá del Plan',
        'services.title': 'Nuestros Servicios Médicos',
        'services.viewAll': 'Ver todos los servicios',
        'services.learnMore': 'Conoce Más',

        // Enrollment
        'enrollment.title': 'Inicie su Inscripción Hoy',
        'enrollment.subtitle': 'Complete el formulario a continuación para dar el primer paso hacia una mejor salud. Nuestro equipo lo contactará en breve.',
        'enrollment.step1': 'Llene el formulario',
        'enrollment.step1Desc': 'Toma menos de 2 minutos',
        'enrollment.step2': 'Reciba confirmación',
        'enrollment.step2Desc': 'Activación casi inmediata',
        'enrollment.step3': 'Disfrute sus beneficios',
        'enrollment.step3Desc': 'Visite nuestros centros',
        'enrollment.formTitle': 'Formulario de Inscripción',
        'enrollment.firstName': 'Nombre',
        'enrollment.lastName': 'Apellido',
        'enrollment.phone': 'Teléfono',
        'enrollment.email': 'Correo Electrónico (Opcional)',
        'enrollment.planType': 'Tipo de Plan de Interés',
        'enrollment.individual': 'Membresía Individual ($59/mes)',
        'enrollment.family': 'Membresía Familiar',
        'enrollment.senior': 'Plan Senior',
        'enrollment.submit': 'Enviar Solicitud',
        'enrollment.disclaimer': 'Al enviar, acepta ser contactado por Estrella Medical Centers para procesar su membresía.',
        'enrollment.success': '¡Solicitud Recibida!',
        'enrollment.successMsg': 'Gracias por su interés en el Plan Médico Estrella. Hemos recibido sus datos y un representante lo contactará dentro de las próximas 24 horas para finalizar su inscripción.',
        'enrollment.backToForm': 'Volver al Formulario',

        // Footer
        'footer.tagline': 'Donde su Salud Brilla Más. Comprometidos con su bienestar a través de atención médica integral y personalizada en el Sur de la Florida.',
        'footer.services': 'Nuestros Servicios',
        'footer.contact': 'Contáctenos',
        'footer.mainOffice': 'Oficina Principal:',
        'footer.hours': 'Lunes a Viernes:',
        'footer.clinics': 'Nuestras Clínicas',
        'footer.viewLocations': 'Ver Todas Las Ubicaciones',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos de Uso',
        'footer.hipaa': 'Aviso HIPAA',
    },
    en: {
        // Header
        'nav.plan': 'Estrella Medical Plan',
        'nav.primaryCare': 'Primary Care',
        'nav.specialties': 'Specialties',
        'nav.dental': 'Dental & Vision',
        'nav.becomeAgent': 'Become an Agent',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'nav.schedule': 'Enroll Today',
        'nav.language': 'EN',

        // Agents Page
        'agents.hero.badge': 'Business Opportunity',
        'agents.hero.title1': 'Join Our Network of',
        'agents.hero.title2': 'Successful Agents',
        'agents.hero.subtitle': 'Offer the best medical plan in South Florida and generate excellent income. A unique opportunity to grow with Estrella Medical Centers.',
        'agents.hero.cta': 'Register Now',
        'agents.benefits.title': 'Why become an agent?',
        'agents.benefits.1.title': 'High Commissions',
        'agents.benefits.1.desc': 'Earn attractive, recurring commissions for every member you enroll in our plan.',
        'agents.benefits.2.title': 'Easy Enrollment',
        'agents.benefits.2.desc': 'Optimized processes so you can enroll your clients quickly and without hassle.',
        'agents.benefits.3.title': 'Premium Product',
        'agents.benefits.3.desc': 'Offer high-quality services, from primary care to 24/7 telemedicine.',
        'agents.form.title': 'Register as an Agent',
        'agents.form.subtitle': 'Fill out your details and our team will contact you to start the process.',
        'agents.form.experience': 'Years of Sales Experience',
        'agents.form.submit': 'Submit Application',
        'agents.form.success': 'Thank you for your interest! We will contact you soon.',

        // Agents - What is the Plan
        'agents.whatIs.badge': 'Important to Understand',
        'agents.whatIs.title': 'What is the Estrella Medical Plan?',
        'agents.whatIs.subtitle': 'Key information every agent should know',
        'agents.whatIs.notInsurance.title': 'NOT Health Insurance',
        'agents.whatIs.notInsurance.desc': 'The Estrella Medical Plan is NOT traditional health insurance. It is a community membership plan that provides direct access to quality medical services at our facilities for an affordable monthly price.',
        'agents.whatIs.community.title': 'It\'s a Community Plan',
        'agents.whatIs.community.desc': 'We are a membership program designed for the Hispanic community in South Florida. Members pay a fixed monthly fee and receive direct medical care at Estrella Medical Centers locations.',
        'agents.whatIs.direct.title': 'Direct Medical Care',
        'agents.whatIs.direct.desc': 'No middlemen, no complicated claims, no surprise deductibles. Members visit our centers and receive immediate care with transparent pricing.',
        'agents.whatIs.disclaimer': 'This membership plan does not meet the minimum essential coverage requirements under the Affordable Care Act (ACA). It is not a substitute for traditional health insurance.',

        // Agents - Services Section
        'agents.services.title': 'Services You\'ll Offer Your Clients',
        'agents.services.subtitle': 'Learn about all the benefits included in the Estrella Medical Plan',
        'agents.services.primary.title': 'Unlimited Primary Care',
        'agents.services.primary.desc': 'Unlimited visits with primary care physicians at any of our locations.',
        'agents.services.telemedicine.title': 'Telemedicine 24/7',
        'agents.services.telemedicine.desc': 'Virtual consultations available 24 hours a day, 7 days a week from anywhere.',
        'agents.services.specialists.title': 'Specialist Network',
        'agents.services.specialists.desc': 'Access to cardiologists, neurologists, endocrinologists, podiatrists and more at preferred rates.',
        'agents.services.labs.title': 'Labs Included',
        'agents.services.labs.desc': 'Blood tests, diagnostic tests and preventive labs with $0 copay.',
        'agents.services.dental.title': 'Dental Care',
        'agents.services.dental.desc': 'Two annual cleanings, X-rays and discounts on dental procedures.',
        'agents.services.vision.title': 'Vision Services',
        'agents.services.vision.desc': 'Annual eye exam and discounts on lenses and frames.',
        'agents.services.transport.title': 'Medical Transport',
        'agents.services.transport.desc': 'Free transportation service to medical appointments for eligible members.',
        'agents.services.pharmacy.title': 'Pharmacy Discounts',
        'agents.services.pharmacy.desc': 'Reduced prices on medications at participating pharmacies.',

        // Agents - Why Sell Section
        'agents.whySell.title': 'Why Sell This Plan?',
        'agents.whySell.subtitle': 'Competitive advantages that make the difference',
        'agents.whySell.affordable.title': 'Affordable Price',
        'agents.whySell.affordable.desc': 'Only $59/month for individual membership. Easy to sell because it\'s affordable for most families.',
        'agents.whySell.noBarriers.title': 'No Entry Barriers',
        'agents.whySell.noBarriers.desc': 'No health questions, no pre-existing condition exclusions, no long waiting periods.',
        'agents.whySell.immediate.title': 'Immediate Activation',
        'agents.whySell.immediate.desc': 'Members can start using their benefits almost immediately after enrolling.',
        'agents.whySell.recurring.title': 'Recurring Income',
        'agents.whySell.recurring.desc': 'Earn commissions every month while the member remains active in the plan.',

        // Agents - How It Works
        'agents.howItWorks.title': 'How It Works for Agents',
        'agents.howItWorks.step1.title': 'Register',
        'agents.howItWorks.step1.desc': 'Complete the form and receive training on the plan and its benefits.',
        'agents.howItWorks.step2.title': 'Get Your Materials',
        'agents.howItWorks.step2.desc': 'Get access to marketing materials, brochures and your unique agent code.',
        'agents.howItWorks.step3.title': 'Enroll Members',
        'agents.howItWorks.step3.desc': 'Use our easy system to enroll new members in minutes.',
        'agents.howItWorks.step4.title': 'Collect Your Commissions',
        'agents.howItWorks.step4.desc': 'Receive timely payments for each enrollment and recurring monthly commissions.',

        // Hero
        'hero.badge': 'Premium Care Plan',
        'hero.title1': 'The Medical Plan',
        'hero.title2': 'That Shines Brightest',
        'hero.subtitle': 'Comprehensive and affordable medical care for you and your family. Exclusive access to our first-class services without the need for traditional health insurance.',
        'hero.cta1': 'Enroll Today',
        'hero.cta2': 'Learn More',
        'hero.benefit1': 'No deductibles',
        'hero.benefit2': 'Fast approval',
        'hero.membership': 'Individual Membership',
        'hero.perMonth': '/ month',
        'hero.feature1': 'Unlimited primary care visits',
        'hero.feature2': '24/7 Telemedicine',
        'hero.feature3': '$0 copay on basic labs',
        'hero.feature4': 'Specialist discounts',
        'hero.feature5': 'Medical appointment transport',
        'hero.startNow': 'Start Now',
        'hero.terms': '* Terms and conditions apply.',

        // Features
        'features.badge': 'Exclusive Benefits',
        'features.title': 'What does the Estrella Medical Plan include?',
        'features.subtitle': 'Our goal is to provide you and your family access to the best medical services in South Florida, all for a predictable monthly fee.',
        'features.servicesIncluded': 'Services Included',
        'features.selectDetails': 'Select to view details',
        'features.enrollNow': 'Enroll Now',
        'features.moreInfo': 'More Info',
        'features.cta.title': 'Protect your family today',
        'features.cta.subtitle': 'Enrolling is easy and takes less than 5 minutes. Enjoy the peace of mind knowing your health is in the best hands.',

        // Feature items
        'feature.primaryCare.title': 'Primary Care',
        'feature.primaryCare.desc': 'Unlimited visits with your primary care physician to keep your health in optimal condition.',
        'feature.telemedicine.title': 'Telemedicine 24/7',
        'feature.telemedicine.desc': 'Virtual medical consultations from the comfort of your home, available 24 hours a day, 7 days a week.',
        'feature.specialists.title': 'Specialists',
        'feature.specialists.desc': 'Access to a wide network of specialists with discounted rates and no long wait times.',
        'feature.labs.title': 'Basic Labs',
        'feature.labs.desc': 'Annual and preventive laboratory tests included at no additional cost ($0 copay).',
        'feature.dental.title': 'Dental Care',
        'feature.dental.desc': 'Includes two dental cleanings per year, X-rays, and discounts on major procedures.',
        'feature.vision.title': 'Vision Coverage',
        'feature.vision.desc': 'Annual eye exam and a pair of basic lenses included in your plan.',

        // About
        'about.badge': 'About Our Plan',
        'about.title1': 'More Than Insurance,',
        'about.title2': "It's Family",
        'about.description': 'At Estrella Medical Centers, we understand that health is the most important thing. That\'s why we\'ve designed a straightforward medical plan, without complications, without hidden deductibles, and 100% focused on providing you with supreme quality care at our facilities.',
        'about.yearsExcellence': 'Years of Excellence',
        'about.personalizedCare': 'Personalized Care',
        'about.personalizedCareDesc': 'Doctors who truly take the time to know you and understand your health needs, without the rush of traditional clinics.',
        'about.technology': 'Cutting-Edge Technology',
        'about.technologyDesc': 'Access to medical centers equipped with the most modern diagnostic and treatment facilities in South Florida.',
        'about.transparency': 'Total Transparency',
        'about.transparencyDesc': 'Enjoy peace of mind with a single predictable monthly fee, comprehensively covering your primary needs.',

        // Services
        'services.badge': 'Beyond the Plan',
        'services.title': 'Our Medical Services',
        'services.viewAll': 'View all services',
        'services.learnMore': 'Learn More',

        // Enrollment
        'enrollment.title': 'Start Your Enrollment Today',
        'enrollment.subtitle': 'Complete the form below to take the first step towards better health. Our team will contact you shortly.',
        'enrollment.step1': 'Fill out the form',
        'enrollment.step1Desc': 'Takes less than 2 minutes',
        'enrollment.step2': 'Receive confirmation',
        'enrollment.step2Desc': 'Almost immediate activation',
        'enrollment.step3': 'Enjoy your benefits',
        'enrollment.step3Desc': 'Visit our centers',
        'enrollment.formTitle': 'Enrollment Form',
        'enrollment.firstName': 'First Name',
        'enrollment.lastName': 'Last Name',
        'enrollment.phone': 'Phone',
        'enrollment.email': 'Email (Optional)',
        'enrollment.planType': 'Plan Type of Interest',
        'enrollment.individual': 'Individual Membership ($59/month)',
        'enrollment.family': 'Family Membership',
        'enrollment.senior': 'Senior Plan',
        'enrollment.submit': 'Submit Application',
        'enrollment.disclaimer': 'By submitting, you agree to be contacted by Estrella Medical Centers to process your membership.',
        'enrollment.success': 'Application Received!',
        'enrollment.successMsg': 'Thank you for your interest in the Estrella Medical Plan. We have received your information and a representative will contact you within the next 24 hours to finalize your enrollment.',
        'enrollment.backToForm': 'Back to Form',

        // Footer
        'footer.tagline': 'Where Your Health Shines Brightest. Committed to your well-being through comprehensive and personalized medical care in South Florida.',
        'footer.services': 'Our Services',
        'footer.contact': 'Contact Us',
        'footer.mainOffice': 'Main Office:',
        'footer.hours': 'Monday to Friday:',
        'footer.clinics': 'Our Clinics',
        'footer.viewLocations': 'View All Locations',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.hipaa': 'HIPAA Notice',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['es']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
