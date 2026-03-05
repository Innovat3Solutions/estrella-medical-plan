import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const locations = [
  {
    name: 'Estrella Medical Center - Flagler',
    type: 'Miami-Dade Center',
    address: '4795 W Flagler St, Miami, FL 33134',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm',
    comingSoon: false,
    mapQuery: 'Estrella+Medical+Center,+4795+W+Flagler+St,+Miami,+FL+33134',
  },
  {
    name: 'Estrella Medical Center - Kendall',
    type: 'Miami-Dade Center',
    address: '13980 SW 47th St, Miami, FL 33175',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm | Sat: 8am-3pm',
    comingSoon: false,
    mapQuery: 'Estrella+Medical+Center,+13980+SW+47th+St,+Miami,+FL+33175',
  },
  {
    name: 'Estrella Medical Center - Plantation',
    type: 'Broward Center',
    address: '1860 N Pine Island Rd, Plantation, FL 33322',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm',
    comingSoon: false,
    mapQuery: 'Estrella+Medical+Center,+1860+N+Pine+Island+Rd,+Plantation,+FL+33322',
  },
  {
    name: 'Estrella Medical Center - Pembroke Pines',
    type: 'Broward Center',
    address: '1806 N Flamingo Rd Suite 280, Pembroke Pines, FL 33028',
    phone: '(305) 982-8810',
    hours: 'Mon-Fri: 7:30am-5pm',
    comingSoon: false,
    mapQuery: 'Estrella+Medical+Center,+1806+N+Flamingo+Rd,+Pembroke+Pines,+FL+33028',
  },
  {
    name: 'Estrella Medical Center - Doral',
    type: 'Miami-Dade Center',
    address: '10305 NW 41st St Suite 227, Doral, FL 33178',
    phone: '(305) 982-8810',
    hours: 'Mon-Sat: 8am-4:30pm',
    comingSoon: false,
    mapQuery: 'Estrella+Medical+Center,+10305+NW+41st+St,+Doral,+FL+33178',
  },
  {
    name: 'Estrella Medical Center - Hialeah',
    type: 'Miami-Dade Center',
    address: '4305 E 8th Ave, Hialeah, FL 33013',
    phone: '(305) 982-8810',
    hours: '',
    comingSoon: true,
    mapQuery: '4305+E+8th+Ave,+Hialeah,+FL+33013',
  },
];

export function LocationsMap() {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(0);

  const currentLocation = locations[selectedLocation];

  // Dynamic map URL that shows the selected location with a pin (no API key required)
  const mapSrc = `https://www.google.com/maps?q=${currentLocation.mapQuery}&output=embed&z=15`;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Star Background */}
      <img
        src="/assets/images/star-accent.webp"
        alt=""
        className="absolute -left-32 top-20 w-[400px] h-[400px] object-contain pointer-events-none -rotate-12 opacity-[0.03]"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary-base font-semibold tracking-wide uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-3">
            {language === 'es' ? 'Nuestras Ubicaciones' : 'Our Locations'}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Centros Médicos Estrella' : 'Estrella Medical Centers'}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            {language === 'es'
              ? 'Encuentra el centro más cercano a tu comunidad. Estamos expandiéndonos para servirte mejor.'
              : 'Find the center closest to your community. We are expanding to serve you better.'}
          </p>
          <div className="w-24 h-1.5 bg-accent-base mx-auto rounded-full mt-6" />
        </div>

        {/* Map and Locations Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Map Side */}
          <div className="lg:w-[55%] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:min-h-[480px] w-full bg-gray-100">
            <iframe
              key={selectedLocation}
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentLocation.name} Map`}
              className="absolute inset-0"
            ></iframe>

            {/* Map Overlay with Location Indicator */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="bg-gradient-to-br from-primary-base to-primary-dark p-1.5 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-primary-base text-xs truncate">{currentLocation.name}</p>
                  <p className="text-[10px] text-gray-500 truncate">{currentLocation.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Locations List */}
          <div className="lg:w-[45%] w-full">
            <div className="space-y-3 max-h-[400px] lg:max-h-[480px] overflow-y-auto pr-2 scrollbar-thin">
              {locations.map((loc, index) => {
                const isSelected = selectedLocation === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedLocation(index)}
                    className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      loc.comingSoon
                        ? 'border-dashed border-gray-300 opacity-75 bg-gray-50'
                        : isSelected
                        ? 'border-primary-base bg-primary-light/20 shadow-md'
                        : 'border-gray-100 bg-white hover:border-primary-light hover:shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <div className="min-w-0">
                        <h4 className={`font-bold transition-colors text-sm sm:text-base ${
                          isSelected ? 'text-primary-base' : 'text-gray-900'
                        }`}>
                          {loc.name}
                        </h4>
                        <p className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                          {loc.type}
                        </p>
                      </div>
                      {loc.comingSoon && (
                        <span className="bg-gradient-to-r from-accent-base to-accent-dark text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap shrink-0">
                          {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 mb-2.5">
                      <div className="flex items-start gap-2 text-gray-600 text-xs">
                        <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary-base" />
                        <p>{loc.address}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-xs">
                        <Phone className="w-3.5 h-3.5 shrink-0 text-primary-base" />
                        <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary-base transition-colors">
                          {loc.phone}
                        </a>
                      </div>
                      {loc.hours && (
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                          <Clock className="w-3.5 h-3.5 shrink-0 text-primary-base" />
                          <p>{loc.hours}</p>
                        </div>
                      )}
                    </div>

                    {!loc.comingSoon && (
                      <div className="flex gap-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-gray-50 hover:bg-primary-light/20 text-primary-base py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-gray-100 hover:border-primary-light"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          {language === 'es' ? 'Direcciones' : 'Directions'}
                        </a>
                        <a
                          href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-gradient-to-r from-primary-base to-primary-dark hover:shadow-md text-white py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {language === 'es' ? 'Llamar' : 'Call'}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
