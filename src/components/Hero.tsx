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
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-dark">
            {/* Background Image with Elegant Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/candid-supportive-conversation-inside-modern.png"
                    alt="Estrella Medical Center Care"
                    className="w-full h-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/50 via-primary-base/40 to-primary-light/30" />
                {/* Decorative star accents in hero background */}
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute top-10 left-5 w-72 opacity-15 pointer-events-none animate-float"
                />
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute bottom-5 right-10 w-56 opacity-10 pointer-events-none rotate-12 animate-float delay-500"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-light font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-sm animate-fade-in-down">
                            <ShieldCheck size={16} />
                            <span>{t('hero.badge')}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 animate-fade-in-up">
                            {t('hero.title1')} <br />
                            <span className="animate-underline text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white inline-block pb-2">
                                {t('hero.title2')}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed animate-fade-in-up delay-200">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <a href="#enrollment">
                                <Button variant="accent" size="lg" className="animate-pulse-glow">
                                    {t('hero.cta1')}
                                </Button>
                            </a>
                            <a href="#about">
                                <Button variant="outline-white" size="lg">
                                    {t('hero.cta2')}
                                </Button>
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-6 text-sm text-white/70 font-medium animate-fade-in-up delay-400">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 size={16} className="text-accent-light" />
                                <span>{t('hero.benefit1')}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 size={16} className="text-accent-light" />
                                <span>{t('hero.benefit2')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:ml-auto xl:w-[500px] animate-slide-in-right delay-200">
                        {/* The Pricing Card matching the inspiration */}
                        <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 z-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">

                            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-br from-primary-light via-primary-base to-primary-dark overflow-hidden">
                                {/* Star accents in card header */}
                                <img
                                    src="/assets/images/star-accent.png"
                                    alt=""
                                    className="absolute -top-6 -right-10 w-44 opacity-25 pointer-events-none"
                                />
                                <img
                                    src="/assets/images/star-accent.png"
                                    alt=""
                                    className="absolute top-6 -left-8 w-32 opacity-20 pointer-events-none rotate-45"
                                />
                            </div>

                            <div className="relative pt-8 pb-12 px-8 text-center">
                                <div className="bg-white/20 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-5 inline-block">
                                    {t('hero.membership')}
                                </div>
                                <div className="flex items-center justify-center text-white">
                                    <span className="text-3xl font-semibold -translate-y-4">$</span>
                                    <span className="text-7xl font-bold tracking-tighter">59</span>
                                    <span className="text-lg font-medium text-white/80 self-end mb-3 ml-1">{t('hero.perMonth')}</span>
                                </div>
                            </div>

                            <div className="relative bg-white pt-8 pb-10 px-8 rounded-t-[2rem] -mt-4">
                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                                            <div className="mt-0.5 rounded-full p-1 bg-green-50 text-green-500 flex-shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#enrollment" className="block">
                                    <Button variant="primary" fullWidth size="lg" className="shadow-primary-base/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                                        {t('hero.startNow')}
                                    </Button>
                                </a>
                                <p className="text-center text-xs text-gray-400 mt-4">{t('hero.terms')}</p>
                            </div>
                        </div>

                        {/* Logo badge element */}
                        <div className="absolute -bottom-6 -left-16 w-28 h-28 drop-shadow-2xl z-20 hidden md:block rounded-full border-4 border-white bg-white flex items-center justify-center pointer-events-none overflow-hidden p-[2px] animate-scale-in delay-500">
                            <img
                                src="/assets/images/Estrella_Favicon.png"
                                alt="Estrella Medical"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle_at_center,_#cbd5e1_2px,_transparent_2px)] bg-[length:12px_12px] opacity-60 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
