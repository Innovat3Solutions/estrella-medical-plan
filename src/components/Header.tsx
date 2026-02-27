import { useState, useEffect } from 'react';
import { Menu, X, Globe, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const MAIN_SITE_URL = 'https://estrella-medical-centers.vercel.app';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Helper to create proper href - if on home page use hash, otherwise link to home with hash
    const getHref = (hash: string) => isHomePage ? hash : `/${hash}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
                isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
            }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between lg:justify-between">
                    {/* Mobile: Hamburger on left */}
                    <div className="lg:hidden flex z-50 w-10">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 text-gray-600 hover:text-primary-base transition-all ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                        >
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Logo - Centered on mobile, left on desktop */}
                    <div className={`flex z-50 lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 transition-opacity duration-200 ${isMobileMenuOpen ? 'lg:opacity-100 opacity-0' : 'opacity-100'}`}>
                        <Link to="/" className="flex items-center">
                            <img
                                src="/assets/logos/Logo_estrella.png"
                                alt="Estrella Medical Centers"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Mobile: Empty spacer for balance */}
                    <div className="lg:hidden w-10" />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {/* 1. About Estrella Medical Centers */}
                        <a
                            href={MAIN_SITE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-accent-light to-accent-dark text-white hover:shadow-lg hover:scale-105 transition-all"
                        >
                            {language === 'es' ? 'Sobre Estrella Medical Centers' : 'About Estrella Medical Centers'}
                        </a>

                        {/* 2. Plan Benefits */}
                        <a
                            href={getHref('#features')}
                            className="text-sm font-medium text-gray-700 hover:text-primary-base transition-colors py-2"
                        >
                            {language === 'es' ? 'Beneficios del Plan' : 'Plan Benefits'}
                        </a>

                        {/* 3. Locations */}
                        <a
                            href={getHref('#locations')}
                            className="text-sm font-medium text-gray-700 hover:text-primary-base transition-colors py-2 flex items-center gap-1.5"
                        >
                            <MapPin size={16} />
                            {language === 'es' ? 'Ubicaciones' : 'Locations'}
                        </a>

                        {/* 4. About Us */}
                        <a
                            href={getHref('#about')}
                            className="text-sm font-medium text-gray-700 hover:text-primary-base transition-colors py-2"
                        >
                            {t('nav.about')}
                        </a>

                        {/* 5. Contact */}
                        <a
                            href={getHref('#contact')}
                            className="text-sm font-medium text-gray-700 hover:text-primary-base transition-colors py-2"
                        >
                            {t('nav.contact')}
                        </a>
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-600 hover:text-primary-base hover:bg-gray-100 transition-colors"
                        >
                            <Globe size={18} />
                            <span className="text-sm font-semibold uppercase">
                                {language === 'es' ? 'EN' : 'ES'}
                            </span>
                        </button>
                        <a href={getHref('#enrollment')}>
                            <Button variant="primary">
                                {t('nav.schedule')}
                            </Button>
                        </a>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-gradient-to-br from-primary-dark via-primary-base to-primary-light z-40 lg:hidden flex flex-col transition-transform duration-300 ease-out shadow-2xl ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Decorative star accents */}
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute top-20 right-4 w-24 opacity-15 pointer-events-none"
                />
                <img
                    src="/assets/images/star-accent.png"
                    alt=""
                    className="absolute bottom-32 left-4 w-20 opacity-10 pointer-events-none rotate-12"
                />

                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <img
                        src="/assets/logos/Logo_estrella_transparent.png"
                        alt="Estrella Medical"
                        className="h-10 object-contain brightness-0 invert"
                    />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6 px-6">
                    <div className="space-y-2">
                        {/* 1. About Estrella Medical Centers */}
                        <a
                            href={MAIN_SITE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent-base/20 text-accent-light font-semibold text-sm hover:bg-accent-base/30 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-accent-base/30 flex items-center justify-center">
                                <span className="text-xs">★</span>
                            </div>
                            {language === 'es' ? 'Sobre Estrella Medical Centers' : 'About Estrella Medical Centers'}
                        </a>

                        {/* 2. Plan Benefits */}
                        <a
                            href={getHref('#features')}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-xs">✓</span>
                            </div>
                            {language === 'es' ? 'Beneficios del Plan' : 'Plan Benefits'}
                        </a>

                        {/* 3. Locations */}
                        <a
                            href={getHref('#locations')}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <MapPin size={14} />
                            </div>
                            {language === 'es' ? 'Ubicaciones' : 'Locations'}
                        </a>

                        {/* 4. About Us */}
                        <a
                            href={getHref('#about')}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-xs">ℹ</span>
                            </div>
                            {t('nav.about')}
                        </a>

                        {/* 5. Contact */}
                        <a
                            href={getHref('#contact')}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-xs">✉</span>
                            </div>
                            {t('nav.contact')}
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-white/10" />

                    {/* Language Toggle */}
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 font-medium text-sm hover:bg-white/10 transition-colors w-full"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                            <Globe size={14} />
                        </div>
                        {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    </button>
                </nav>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-white/10 bg-black/10">
                    <a href={getHref('#enrollment')} onClick={() => setIsMobileMenuOpen(false)} className="block">
                        <Button variant="accent" fullWidth size="lg" className="shadow-lg">
                            {t('nav.schedule')}
                        </Button>
                    </a>
                    <p className="text-center text-white/50 text-xs mt-3">
                        {language === 'es' ? 'Inscripción rápida y fácil' : 'Quick and easy enrollment'}
                    </p>
                </div>
            </div>
        </header>
    );
}
