import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const PAYMENT_LINK = 'https://link.fastpaydirect.com/payment-link/69a0bf797819e367cb917544';

export function EnrollmentForm() {
    const { language } = useLanguage();

    const handleClick = () => {
        window.location.href = PAYMENT_LINK;
    };

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden" id="enrollment">
            {/* Decorative star accents - Left side */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-12 left-4 sm:left-8 md:left-16 w-24 sm:w-32 md:w-44 opacity-[0.12] pointer-events-none z-0"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-1/3 left-8 sm:left-16 md:left-24 w-16 sm:w-24 md:w-32 opacity-[0.08] pointer-events-none rotate-12 z-0"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-16 left-4 sm:left-12 md:left-20 w-20 sm:w-28 md:w-36 opacity-[0.10] pointer-events-none -rotate-6 z-0"
            />

            {/* Decorative star accents - Right side */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-16 right-4 sm:right-8 md:right-16 w-20 sm:w-28 md:w-40 opacity-[0.10] pointer-events-none rotate-45 z-0"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-12 right-8 sm:right-16 md:right-24 w-16 sm:w-24 md:w-32 opacity-[0.08] pointer-events-none -rotate-12 z-0"
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-dark font-medium text-sm mb-8 border border-primary-100">
                        <Shield size={16} className="text-primary-base" />
                        <span>{language === 'es' ? 'Solo $59/mes' : 'Only $59/month'}</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                        {language === 'es' ? '¿Listo para Comenzar?' : 'Ready to Get Started?'}
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {language === 'es'
                            ? 'Inscríbase hoy y comience a disfrutar de todos los beneficios del Plan Médico Estrella. Atención médica de calidad para usted y su familia.'
                            : 'Enroll today and start enjoying all the benefits of the Estrella Medical Plan. Quality medical care for you and your family.'}
                    </p>

                    {/* Features Row */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span className="text-sm sm:text-base">{language === 'es' ? 'Sin deducibles' : 'No deductibles'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span className="text-sm sm:text-base">{language === 'es' ? 'Activación inmediata' : 'Immediate activation'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Clock size={20} className="text-primary-base" />
                            <span className="text-sm sm:text-base">{language === 'es' ? 'Telemedicina 24/7' : '24/7 Telemedicine'}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col items-center gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleClick}
                            className="px-10 py-5 text-lg sm:text-xl font-bold shadow-xl shadow-primary-base/20 hover:shadow-2xl hover:shadow-primary-base/30 transition-all group"
                        >
                            {language === 'es' ? 'Inscríbase Ahora' : 'Enroll Now'}
                            <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <p className="text-gray-400 text-sm">
                            {language === 'es'
                                ? 'Pago seguro. Cancele en cualquier momento.'
                                : 'Secure payment. Cancel anytime.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
