import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
    const { t } = useLanguage();

    const features = [
        t('hero.feature1'),
        t('hero.feature2'),
        t('hero.feature3'),
        t('hero.feature4'),
        t('hero.feature5')
    ];

    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-dark">
            {/* Background Image with Elegant Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/candid-supportive-conversation-inside-modern.png"
                    alt="Estrella Medical Center Care"
                    className="w-full h-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/50 via-primary-base/40 to-primary-light/30" />
                {/* Decorative star accents in hero background - hidden on mobile */}
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute top-10 left-5 w-40 md:w-72 opacity-15 pointer-events-none animate-float hidden sm:block"
                />
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute bottom-5 right-10 w-32 md:w-56 opacity-10 pointer-events-none rotate-12 animate-float delay-500 hidden sm:block"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Mobile: Stack vertically with card first, Desktop: Side by side */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* Text Content - Order 1 on mobile (above card), Order 1 on desktop */}
                    <div className="max-w-2xl order-1 lg:order-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-light font-medium text-xs sm:text-sm mb-4 md:mb-6 border border-white/20 backdrop-blur-sm shadow-sm animate-fade-in-down">
                            <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
                            <span>{t('hero.badge')}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 md:mb-6 animate-fade-in-up">
                            {t('hero.title1')} <br />
                            <span className="animate-underline text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                {t('hero.title2')}
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-row gap-2 sm:gap-4 animate-fade-in-up delay-300 justify-center lg:justify-start">
                            <a href="#enrollment" className="flex-1 sm:flex-none">
                                <Button variant="accent" size="lg" className="animate-pulse-glow w-full sm:w-auto text-xs sm:text-base px-3 sm:px-6">
                                    {t('hero.cta1')}
                                </Button>
                            </a>
                            <a href="#about" className="flex-1 sm:flex-none">
                                <Button variant="outline-white" size="lg" className="w-full sm:w-auto text-xs sm:text-base px-3 sm:px-6">
                                    {t('hero.cta2')}
                                </Button>
                            </a>
                        </div>

                        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 font-medium animate-fade-in-up delay-400">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-accent-light sm:w-4 sm:h-4" />
                                <span>{t('hero.benefit1')}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 size={14} className="text-accent-light sm:w-4 sm:h-4" />
                                <span>{t('hero.benefit2')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card - Order 2 on mobile (below text), Order 2 on desktop */}
                    <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none lg:ml-auto xl:w-[500px] order-2 lg:order-2 animate-slide-in-right delay-200 mx-auto lg:mx-0">
                        {/* The Pricing Card matching the inspiration */}
                        <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 z-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">

                            <div className="absolute top-0 inset-x-0 h-36 sm:h-44 bg-gradient-to-br from-primary-light via-primary-base to-primary-dark overflow-hidden">
                                {/* Star accents in card header */}
                                <img
                                    src="/assets/images/star-accent.png"
                                    alt=""
                                    className="absolute -top-6 -right-10 w-32 sm:w-44 opacity-25 pointer-events-none"
                                />
                                <img
                                    src="/assets/images/star-accent.png"
                                    alt=""
                                    className="absolute top-6 -left-8 w-24 sm:w-32 opacity-20 pointer-events-none rotate-45"
                                />
                            </div>

                            <div className="relative pt-6 sm:pt-8 pb-10 sm:pb-12 px-6 sm:px-8 text-center">
                                <div className="bg-white/20 backdrop-blur-sm w-fit mx-auto px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-5 inline-block">
                                    {t('hero.membership')}
                                </div>
                                <div className="flex items-center justify-center text-white">
                                    <span className="text-2xl sm:text-3xl font-semibold -translate-y-3 sm:-translate-y-4">$</span>
                                    <span className="text-5xl sm:text-7xl font-bold tracking-tighter">59</span>
                                    <span className="text-sm sm:text-lg font-medium text-white/80 self-end mb-2 sm:mb-3 ml-1">{t('hero.perMonth')}</span>
                                </div>
                            </div>

                            <div className="relative bg-white pt-6 sm:pt-8 pb-8 sm:pb-10 px-5 sm:px-8 rounded-t-[1.5rem] sm:rounded-t-[2rem] -mt-4">
                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 sm:gap-3 transition-transform duration-300 hover:translate-x-1">
                                            <div className="mt-0.5 rounded-full p-0.5 sm:p-1 bg-green-50 text-green-500 flex-shrink-0">
                                                <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="text-gray-700 font-medium text-xs sm:text-sm leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#enrollment" className="block">
                                    <Button variant="primary" fullWidth size="lg" className="shadow-primary-base/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] text-sm sm:text-base">
                                        {t('hero.startNow')}
                                    </Button>
                                </a>
                                <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4">{t('hero.terms')}</p>
                            </div>
                        </div>

                        {/* Logo badge element - hidden on mobile */}
                        <div className="absolute -bottom-6 -left-16 w-28 h-28 drop-shadow-2xl z-20 hidden lg:flex rounded-full border-4 border-white bg-white items-center justify-center pointer-events-none overflow-hidden p-[2px] animate-scale-in delay-500">
                            <img
                                src="/assets/images/Estrella_Favicon.png"
                                alt="Estrella Medical"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Decorative dots - hidden on mobile */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle_at_center,_#cbd5e1_2px,_transparent_2px)] bg-[length:12px_12px] opacity-60 pointer-events-none hidden md:block" />
                    </div>

                </div>
            </div>
        </section>
    );
}
