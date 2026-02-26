import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Locations() {
    const { language } = useLanguage();

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

    return (
        <section id="locations" className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden scroll-mt-20">
            {/* Decorative star accents */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-16 right-12 w-48 opacity-[0.08] pointer-events-none"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-12 left-8 w-36 opacity-[0.06] pointer-events-none rotate-12"
            />
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {language === 'es' ? 'Nuestras Ubicaciones' : 'Our Locations'}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        {language === 'es'
                            ? 'Encuentre su centro Estrella Medical Center más cercano. Estamos expandiendo nuestra red en los condados de Miami-Dade y Broward para servirle mejor.'
                            : 'Find your nearest Estrella Medical Center. We are expanding our network in Miami-Dade and Broward counties to serve you better.'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column: Map */}
                    <div className="h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 relative">
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

                    {/* Right Column: Scrollable List */}
                    <div className="flex flex-col h-[400px] lg:h-[600px]">
                        <div className="overflow-y-auto pr-2 pb-4 space-y-4 rounded-xl custom-scrollbar" style={{ maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)' }}>

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
