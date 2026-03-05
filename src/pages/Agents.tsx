import { ShieldCheck, TrendingUp, Handshake, Award, CheckCircle2, AlertTriangle, Heart, Users, Stethoscope, Video, FlaskConical, Smile, Eye, Bus, Pill, DollarSign, Zap, RefreshCw, ClipboardList, Package, UserPlus, Wallet } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export function Agents() {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app we'd send the form data to an API
        setIsSubmitted(true);
    };

    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: t('agents.benefits.1.title'),
            desc: t('agents.benefits.1.desc')
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: t('agents.benefits.2.title'),
            desc: t('agents.benefits.2.desc')
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: t('agents.benefits.3.title'),
            desc: t('agents.benefits.3.desc')
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-dark">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/images/Estrella_group.webp"
                            alt="Estrella Medical Team"
                            className="w-full h-full object-cover object-top opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-base/80 to-primary-light/50" />
                        {/* Decorative star accents in hero */}
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
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-light font-medium text-xs sm:text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-sm animate-fade-in-down">
                                <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
                                <span>{t('agents.hero.badge')}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 animate-fade-in-up">
                                {t('agents.hero.title1')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                    {t('agents.hero.title2')}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                                {t('agents.hero.subtitle')}
                            </p>

                            <div className="animate-fade-in-up delay-300">
                                <a href="#register">
                                    <Button variant="accent" size="lg" className="animate-pulse-glow px-8 py-4 text-lg">
                                        {t('agents.hero.cta')}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                    {/* Decorative star accents */}
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-16 right-8 w-48 opacity-[0.06] pointer-events-none hidden md:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-10 left-4 w-36 opacity-[0.05] pointer-events-none rotate-45 hidden md:block"
                    />
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('agents.benefits.title')}</h2>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                    <div className="w-14 h-14 rounded-xl bg-primary-base/10 text-primary-base flex items-center justify-center mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What is the Plan Section - IMPORTANT DISCLAIMER */}
                <section className="py-20 lg:py-28 bg-primary-dark relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-base rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-10 right-10 w-64 opacity-10 pointer-events-none hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-base/20 text-accent-light font-semibold text-sm mb-6 border border-accent-base/30">
                                <AlertTriangle size={16} />
                                <span>{t('agents.whatIs.badge')}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t('agents.whatIs.title')}</h2>
                            <p className="text-lg text-white/70">{t('agents.whatIs.subtitle')}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-14 h-14 rounded-xl bg-red-500/20 text-red-300 flex items-center justify-center mb-6">
                                    <AlertTriangle className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{t('agents.whatIs.notInsurance.title')}</h3>
                                <p className="text-white/70 leading-relaxed">{t('agents.whatIs.notInsurance.desc')}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-14 h-14 rounded-xl bg-accent-base/20 text-accent-light flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{t('agents.whatIs.community.title')}</h3>
                                <p className="text-white/70 leading-relaxed">{t('agents.whatIs.community.desc')}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-14 h-14 rounded-xl bg-green-500/20 text-green-300 flex items-center justify-center mb-6">
                                    <Heart className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{t('agents.whatIs.direct.title')}</h3>
                                <p className="text-white/70 leading-relaxed">{t('agents.whatIs.direct.desc')}</p>
                            </div>
                        </div>

                        {/* Important Disclaimer */}
                        <div className="max-w-4xl mx-auto bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                            <p className="text-yellow-200/90 text-sm leading-relaxed">
                                <AlertTriangle className="inline w-4 h-4 mr-2 -mt-0.5" />
                                {t('agents.whatIs.disclaimer')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Included Section */}
                <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-20 left-8 w-40 opacity-[0.05] pointer-events-none hidden md:block"
                    />
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute bottom-16 right-6 w-52 opacity-[0.04] pointer-events-none rotate-12 hidden md:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('agents.services.title')}</h2>
                            <p className="text-lg text-gray-600">{t('agents.services.subtitle')}</p>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full mt-6" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Stethoscope className="w-6 h-6" />, title: t('agents.services.primary.title'), desc: t('agents.services.primary.desc'), color: 'bg-blue-500' },
                                { icon: <Video className="w-6 h-6" />, title: t('agents.services.telemedicine.title'), desc: t('agents.services.telemedicine.desc'), color: 'bg-purple-500' },
                                { icon: <Users className="w-6 h-6" />, title: t('agents.services.specialists.title'), desc: t('agents.services.specialists.desc'), color: 'bg-indigo-500' },
                                { icon: <FlaskConical className="w-6 h-6" />, title: t('agents.services.labs.title'), desc: t('agents.services.labs.desc'), color: 'bg-green-500' },
                                { icon: <Smile className="w-6 h-6" />, title: t('agents.services.dental.title'), desc: t('agents.services.dental.desc'), color: 'bg-cyan-500' },
                                { icon: <Eye className="w-6 h-6" />, title: t('agents.services.vision.title'), desc: t('agents.services.vision.desc'), color: 'bg-teal-500' },
                                { icon: <Bus className="w-6 h-6" />, title: t('agents.services.transport.title'), desc: t('agents.services.transport.desc'), color: 'bg-orange-500' },
                                { icon: <Pill className="w-6 h-6" />, title: t('agents.services.pharmacy.title'), desc: t('agents.services.pharmacy.desc'), color: 'bg-pink-500' },
                            ].map((service, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                                    <div className={`w-12 h-12 rounded-lg ${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Sell This Plan Section */}
                <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                    <img
                        src="/assets/images/star-accent.webp"
                        alt=""
                        className="absolute top-24 right-12 w-56 opacity-[0.06] pointer-events-none hidden lg:block"
                    />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('agents.whySell.title')}</h2>
                            <p className="text-lg text-gray-600">{t('agents.whySell.subtitle')}</p>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full mt-6" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <DollarSign className="w-7 h-7" />, title: t('agents.whySell.affordable.title'), desc: t('agents.whySell.affordable.desc'), gradient: 'from-green-500 to-emerald-600' },
                                { icon: <CheckCircle2 className="w-7 h-7" />, title: t('agents.whySell.noBarriers.title'), desc: t('agents.whySell.noBarriers.desc'), gradient: 'from-blue-500 to-indigo-600' },
                                { icon: <Zap className="w-7 h-7" />, title: t('agents.whySell.immediate.title'), desc: t('agents.whySell.immediate.desc'), gradient: 'from-amber-500 to-orange-600' },
                                { icon: <RefreshCw className="w-7 h-7" />, title: t('agents.whySell.recurring.title'), desc: t('agents.whySell.recurring.desc'), gradient: 'from-purple-500 to-violet-600' },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center group">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works for Agents */}
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
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('agents.howItWorks.title')}</h2>
                            <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: <ClipboardList className="w-8 h-8" />, step: '1', title: t('agents.howItWorks.step1.title'), desc: t('agents.howItWorks.step1.desc') },
                                { icon: <Package className="w-8 h-8" />, step: '2', title: t('agents.howItWorks.step2.title'), desc: t('agents.howItWorks.step2.desc') },
                                { icon: <UserPlus className="w-8 h-8" />, step: '3', title: t('agents.howItWorks.step3.title'), desc: t('agents.howItWorks.step3.desc') },
                                { icon: <Wallet className="w-8 h-8" />, step: '4', title: t('agents.howItWorks.step4.title'), desc: t('agents.howItWorks.step4.desc') },
                            ].map((step, idx) => (
                                <div key={idx} className="relative">
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-white/20" />
                                    )}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center relative hover:bg-white/20 transition-colors">
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-base text-white font-bold text-sm flex items-center justify-center shadow-lg">
                                            {step.step}
                                        </div>
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mx-auto mb-5 mt-2">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Registration Form Section */}
                <section id="register" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/5 opacity-50 transform -skew-x-12" />
                    {/* Decorative star accents */}
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
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                            {/* Left Side: Info */}
                            <div className="md:w-5/12 bg-primary-dark p-10 text-white flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-base rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-4">{t('agents.form.title')}</h3>
                                    <p className="text-white/80 mb-8 leading-relaxed">
                                        {t('agents.form.subtitle')}
                                    </p>

                                    <ul className="space-y-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent-light" />
                                                <span className="text-sm font-medium">Premium Support</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="md:w-7/12 p-10 lg:p-12">
                                {isSubmitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                                        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('agents.form.success')}</h3>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('enrollment.firstName')}</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-base focus:border-primary-base transition-all bg-gray-50 focus:bg-white" placeholder="Juan" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('enrollment.lastName')}</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-base focus:border-primary-base transition-all bg-gray-50 focus:bg-white" placeholder="Pérez" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('enrollment.email')}</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-base focus:border-primary-base transition-all bg-gray-50 focus:bg-white" placeholder="juan@email.com" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('enrollment.phone')}</label>
                                                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-base focus:border-primary-base transition-all bg-gray-50 focus:bg-white" placeholder="(305) 555-0123" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">{t('agents.form.experience')}</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-base focus:border-primary-base transition-all bg-gray-50 focus:bg-white text-gray-700">
                                                <option value="">Selecciona...</option>
                                                <option value="0-1">0 - 1 años</option>
                                                <option value="1-3">1 - 3 años</option>
                                                <option value="3-5">3 - 5 años</option>
                                                <option value="5+">Más de 5 años</option>
                                            </select>
                                        </div>

                                        <Button type="submit" variant="primary" fullWidth size="lg" className="mt-8 text-lg font-semibold shadow-lg shadow-primary-base/20 hover:shadow-xl">
                                            {t('agents.form.submit')}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
