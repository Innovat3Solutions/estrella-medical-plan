import { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Locations() {
    const { language } = useLanguage();
    const [selectedLocationId, setSelectedLocationId] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const locations = [
        {
            id: 1,
            name: 'Estrella Medical Center - Flagler',
            type: 'MIAMI-DADE CENTER',
            address: '4795 W Flagler St, Miami, FL 33134',
            phone: '(305) 982-8810',
            hours: language === 'es'
                ? 'Lunes a Viernes: 7:30am - 5:00pm\nSábados: 8:00am - 3:00pm'
                : 'Monday - Friday: 7:30am - 5:00pm\nSaturday: 8:00am - 3:00pm',
            link: '#'
        },
        {
            id: 2,
            name: 'Estrella Medical Center - Kendall',
            type: 'MIAMI-DADE CENTER',
            address: '13980 SW 47th St, Miami, FL 33175',
            phone: '(305) 982-8810',
            hours: language === 'es'
                ? 'Lunes a Viernes: 7:30am - 5:00pm\nSábados: 8:00am - 3:00pm'
                : 'Monday - Friday: 7:30am - 5:00pm\nSaturday: 8:00am - 3:00pm',
            link: '#'
        },
        {
            id: 3,
            name: 'Estrella Medical Center - Plantation',
            type: 'BROWARD CENTER',
            address: '1860 N Pine Island Rd, Plantation, FL 33322',
            phone: '(305) 982-8810',
            hours: language === 'es'
                ? 'Lunes a Viernes: 7:30am - 5:00pm'
                : 'Monday - Friday: 7:30am - 5:00pm',
            link: '#'
        },
        {
            id: 4,
            name: 'Estrella Medical Center - Pembroke Pines',
            type: 'BROWARD CENTER',
            address: '1806 N Flamingo Rd Suite 280, Pembroke Pines, FL 33028',
            phone: '(305) 982-8810',
            hours: language === 'es'
                ? 'Lunes a Viernes: 7:30am - 5:00pm'
                : 'Monday - Friday: 7:30am - 5:00pm',
            link: '#'
        },
        {
            id: 5,
            name: 'Estrella Medical Center - Doral',
            type: 'MIAMI-DADE CENTER',
            address: '10305 NW 41st St Suite 227, Doral, FL 33178',
            phone: '(305) 982-8810',
            hours: language === 'es'
                ? 'Lunes a Sábado: 8:00am - 4:30pm'
                : 'Monday - Saturday: 8:00am - 4:30pm',
            link: '#'
        },
        {
            id: 6,
            name: 'Estrella Medical Center - Hialeah',
            type: language === 'es' ? 'PRÓXIMAMENTE' : 'COMING SOON',
            address: '4305 E 8th Ave, Hialeah, FL 33013',
            phone: '(305) 982-8810',
            hours: language === 'es' ? 'Próxima apertura' : 'Opening soon',
            link: '#',
            comingSoon: true
        }
    ];

    const selectedLocation = locations.find(loc => loc.id === selectedLocationId) || locations[0];

    return (
        <section id="locations" className="py-12 sm:py-16 md:py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden scroll-mt-20">
            {/* Decorative star accents - hidden on mobile */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-16 right-12 w-48 opacity-[0.08] pointer-events-none hidden md:block"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-12 left-8 w-36 opacity-[0.06] pointer-events-none rotate-12 hidden md:block"
            />
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

                <div className="mb-6 sm:mb-8 md:mb-12 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        {language === 'es' ? 'Nuestras Ubicaciones' : 'Our Locations'}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                        {language === 'es'
                            ? 'Encuentre su centro Estrella Medical Center más cercano. Estamos expandiendo nuestra red en los condados de Miami-Dade y Broward para servirle mejor.'
                            : 'Find your nearest Estrella Medical Center. We are expanding our network in Miami-Dade and Broward counties to serve you better.'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">

                    {/* Left Column: Map */}
                    <div className="h-[250px] sm:h-[300px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920000002!3d25.7823907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1709068000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={language === 'es' ? 'Mapa de ubicaciones en Miami' : 'Miami locations map'}
                            className="absolute inset-0"
                        />
                    </div>

                    {/* Right Column: Dropdown on mobile, vertical scroll on desktop */}
                    <div className="lg:flex lg:flex-col lg:h-[600px]">
                        {/* Mobile Dropdown Selector */}
                        <div className="lg:hidden">
                            {/* Dropdown Button */}
                            <div className="relative mb-4">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                                            <MapPin size={18} className="text-primary-base" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 line-clamp-1">{selectedLocation.name}</p>
                                            <p className="text-xs text-gray-500">{selectedLocation.type}</p>
                                        </div>
                                    </div>
                                    <ChevronDown size={20} className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto">
                                        {locations.map((loc) => (
                                            <button
                                                key={loc.id}
                                                onClick={() => {
                                                    setSelectedLocationId(loc.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                                                    selectedLocationId === loc.id ? 'bg-primary-50' : ''
                                                }`}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                    loc.comingSoon ? 'bg-orange-100' : 'bg-primary-50'
                                                }`}>
                                                    <MapPin size={14} className={loc.comingSoon ? 'text-orange-600' : 'text-primary-base'} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">{loc.name}</p>
                                                    <p className={`text-[10px] font-bold uppercase ${loc.comingSoon ? 'text-orange-600' : 'text-gray-500'}`}>{loc.type}</p>
                                                </div>
                                                {selectedLocationId === loc.id && (
                                                    <div className="w-2 h-2 rounded-full bg-primary-base" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Selected Location Details Card */}
                            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md ${selectedLocation.comingSoon ? 'bg-orange-100 text-orange-600' : 'bg-primary-50 text-primary-base'}`}>
                                        {selectedLocation.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-primary-dark mb-4">{selectedLocation.name}</h3>
                                <div className="space-y-3 mb-5">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm leading-tight">{selectedLocation.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-gray-400 flex-shrink-0" />
                                        <a href={`tel:${selectedLocation.phone.replace(/[^0-9]/g, '')}`} className="text-gray-600 text-sm font-medium hover:text-primary-base transition-colors">
                                            {selectedLocation.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm whitespace-pre-line leading-tight">{selectedLocation.hours}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <a href={selectedLocation.link} className="flex-1 text-center py-3 px-4 rounded-lg text-sm font-semibold text-primary-base bg-primary-50 hover:bg-primary-100 transition-colors">
                                        {language === 'es' ? 'Direcciones' : 'Directions'}
                                    </a>
                                    <a href="#enrollment" className="flex-1 text-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary-dark to-primary-base shadow-md hover:opacity-90 transition-opacity">
                                        {language === 'es' ? 'Reservar' : 'Book'}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Desktop vertical scroll */}
                        <div className="hidden lg:block overflow-y-auto pr-2 pb-4 space-y-4 rounded-xl custom-scrollbar h-full" style={{ maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)' }}>
                            {locations.map((loc) => (
                                <div key={loc.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md ${loc.comingSoon ? 'bg-orange-100 text-orange-600' : 'bg-primary-50 text-primary-base'}`}>
                                            {loc.type}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-primary-dark mb-4">{loc.name}</h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-3">
                                            <MapPin size={18} className="text-gray-400 mt-0.5" />
                                            <span className="text-gray-600 text-sm leading-tight">{loc.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} className="text-gray-400" />
                                            <span className="text-gray-600 text-sm font-medium">{loc.phone}</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock size={18} className="text-gray-400 mt-0.5" />
                                            <span className="text-gray-600 text-sm whitespace-pre-line leading-tight">{loc.hours}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2 border-t border-gray-50">
                                        <a href={loc.link} className="flex-1 text-center py-2 px-4 rounded-lg text-sm font-semibold text-primary-base bg-primary-50 hover:bg-primary-100 transition-colors">
                                            {language === 'es' ? 'Direcciones' : 'Directions'}
                                        </a>
                                        <a href="#enrollment" className="flex-1 text-center py-2 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary-dark to-primary-base hover:opacity-90 transition-opacity shadow-md">
                                            {language === 'es' ? 'Reservar Visita' : 'Book Visit'}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
