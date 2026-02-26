import { CheckCircle2, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export function ThankYou() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Header />
            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Decorative star accents */}
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute top-24 right-12 w-56 opacity-[0.08] pointer-events-none"
                />
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute bottom-20 left-8 w-44 opacity-[0.06] pointer-events-none rotate-12"
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="mb-8 inline-flex items-center justify-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                                <CheckCircle2 size={48} className="text-green-500" />
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 animate-fade-in-up">
                            {language === 'es' ? '¡Gracias por Inscribirse!' : 'Thank You for Enrolling!'}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-100">
                            {language === 'es'
                                ? 'Gracias por inscribirse en nuestro Plan Médico Estrella. Las instrucciones y el manual de su plan serán enviados a su correo electrónico.'
                                : 'Thank you so much for enrolling in our Estrella Medical Plan. The directions and your plan manual will be sent to you via email.'}
                        </p>

                        {/* Question prompt */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8 animate-fade-in-up delay-200">
                            <p className="text-lg text-gray-700 mb-6">
                                {language === 'es'
                                    ? 'Si tiene alguna pregunta, no dude en comunicarse con nosotros:'
                                    : 'If you have any questions, please do not hesitate to contact us:'}
                            </p>

                            {/* Contact Information */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="tel:+13059828810"
                                    className="flex items-center gap-3 px-6 py-4 bg-primary-base/5 rounded-xl hover:bg-primary-base/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-primary-base rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500 font-medium">
                                            {language === 'es' ? 'Llámenos' : 'Call Us'}
                                        </p>
                                        <p className="text-lg font-bold text-primary-dark">(305) 982-8810</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:info@estrellamedical.com"
                                    className="flex items-center gap-3 px-6 py-4 bg-accent-light/10 rounded-xl hover:bg-accent-light/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={20} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500 font-medium">
                                            {language === 'es' ? 'Escríbanos' : 'Email Us'}
                                        </p>
                                        <p className="text-lg font-bold text-primary-dark">info@estrellamedical.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Back to Home Button */}
                        <Link to="/" className="inline-block animate-fade-in-up delay-300">
                            <Button variant="outline" size="lg" className="group">
                                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
}
