import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
    const { t, language } = useLanguage();

    const serviceLinks = language === 'es'
        ? ['Cuidado Primario', 'Cuidado Dental', 'Centro de Diagnóstico', 'Farmacia', 'Transporte Médico', 'Especialidades']
        : ['Primary Care', 'Dental Care', 'Diagnostic Center', 'Pharmacy', 'Medical Transport', 'Specialties'];

    return (
        <footer className="bg-gradient-to-br from-primary-dark via-primary-base to-primary-light text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative star accents */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-8 right-8 w-56 opacity-15 pointer-events-none"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-16 left-5 w-44 opacity-10 pointer-events-none rotate-12"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-1/2 right-1/4 w-32 opacity-8 pointer-events-none -rotate-12"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand Info */}
                    <div>
                        <img
                            src="/assets/logos/Logo_estrella_transparent.png"
                            alt="Estrella Medical Centers"
                            className="h-16 mb-6 object-contain brightness-0 invert"
                        />
                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-base hover:text-primary-dark transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-base hover:text-primary-dark transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-base hover:text-primary-dark transition-all">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-sans">{t('footer.services')}</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-white/70 hover:text-accent-light transition-colors text-sm flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-base" /> {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-sans">{t('footer.contact')}</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-white/70 text-sm">
                                <MapPin size={18} className="text-accent-light flex-shrink-0 mt-0.5" />
                                <span>{t('footer.mainOffice')}<br />4410 W 16th Ave Suite 42<br />Hialeah, FL 33012</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Phone size={18} className="text-accent-light flex-shrink-0" />
                                <span>(305) 982-8810</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Mail size={18} className="text-accent-light flex-shrink-0" />
                                <span>info@estrellamedical.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70 text-sm">
                                <Clock size={18} className="text-accent-light flex-shrink-0 mt-0.5" />
                                <span>{t('footer.hours')}<br />8:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter / Locations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-sans">{t('footer.clinics')}</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Hialeah</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Doral</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Kendall</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Flagler</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Plantation</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Coral Way</span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium border border-white/5">Homestead</span>
                        </div>
                        <div className="mt-8">
                            <a href="#" className="uppercase text-xs font-bold tracking-widest text-accent-light hover:text-white transition-colors border-b border-accent-light pb-1">{t('footer.viewLocations')} →</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Estrella Medical Centers. {t('footer.rights')}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.hipaa')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
