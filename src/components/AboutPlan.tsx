import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutPlan() {
    const { t } = useLanguage();

    const items = [
        { title: t('about.personalizedCare'), desc: t('about.personalizedCareDesc') },
        { title: t('about.technology'), desc: t('about.technologyDesc') },
        { title: t('about.transparency'), desc: t('about.transparencyDesc') }
    ];

    return (
        <section id="about" className="py-12 sm:py-16 lg:py-32 bg-white overflow-hidden relative">
            {/* Decorative star accents - hidden on mobile */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-16 right-8 w-48 opacity-[0.09] pointer-events-none hidden md:block"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-24 left-5 w-36 opacity-[0.07] pointer-events-none rotate-12 hidden md:block"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    <div className="relative">
                        {/* Main Image */}
                        <img
                            src="/assets/images/candid-moment-inside-modern-south-florida.png"
                            alt="Medical Team"
                            className="rounded-2xl sm:rounded-[2rem] shadow-xl sm:shadow-2xl relative z-10 w-full object-cover h-[300px] sm:h-[400px] lg:h-[650px]"
                        />
                        {/* Decorative Offset Image */}
                        <img
                            src="/assets/images/estrella-building.png"
                            alt="Estrella Medical Center"
                            className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-[2rem] border-8 border-white shadow-xl z-20 hidden md:block"
                        />
                        {/* Background Blob decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-light/10 rounded-full blur-3xl -z-10 hidden sm:block" />

                        {/* Dynamic floating stat card */}
                        <div className="absolute top-12 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-30 hidden md:flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary-dark">20+</div>
                                <div className="text-sm text-gray-500 font-medium">{t('about.yearsExcellence')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light/20 text-accent-dark font-medium text-xs sm:text-sm mb-4 sm:mb-6 border border-accent-light/30">
                            {t('about.badge')}
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 sm:mb-6 leading-[1.2]">
                            {t('about.title1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-base to-accent-dark">
                                {t('about.title2')}
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed">
                            {t('about.description')}
                        </p>

                        <ul className="space-y-5 sm:space-y-8">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex gap-3 sm:gap-4 group">
                                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-primary-base group-hover:text-white transition-colors duration-300">
                                            <CheckCircle2 size={20} className="sm:w-6 sm:h-6 text-primary-base group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl tracking-tight mb-1">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
