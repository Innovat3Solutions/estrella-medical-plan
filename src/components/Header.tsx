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
                <div className="flex items-center justify-between">
                    <div className="flex z-50">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/assets/logos/Logo_estrella.png"
                                alt="Estrella Medical Centers"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

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

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-600 hover:text-primary-base transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col gap-4">
                    {/* 1. About Estrella Medical Centers */}
                    <a
                        href={MAIN_SITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent-base border-b pb-2"
                    >
                        {language === 'es' ? 'Sobre Estrella Medical Centers' : 'About Estrella Medical Centers'}
                    </a>

                    {/* 2. Plan Benefits */}
                    <a href={getHref('#features')} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b pb-2">
                        {language === 'es' ? 'Beneficios del Plan' : 'Plan Benefits'}
                    </a>

                    {/* 3. Locations */}
                    <a href={getHref('#locations')} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b pb-2 flex items-center gap-2">
                        <MapPin size={18} />
                        {language === 'es' ? 'Ubicaciones' : 'Locations'}
                    </a>

                    {/* 4. About Us */}
                    <a href={getHref('#about')} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b pb-2">
                        {t('nav.about')}
                    </a>

                    {/* 5. Contact */}
                    <a href={getHref('#contact')} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b pb-2">
                        {t('nav.contact')}
                    </a>
                </nav>
                <div className="mt-auto mb-10 pb-10 flex flex-col gap-4">
                    <a href={getHref('#enrollment')} onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                        <Button variant="primary" fullWidth>{t('nav.schedule')}</Button>
                    </a>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center gap-2 text-gray-600 py-3 mx-auto w-fit hover:text-primary-base transition-colors"
                    >
                        <Globe size={18} />
                        <span className="font-medium">
                            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
