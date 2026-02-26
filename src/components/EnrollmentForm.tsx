import { useState } from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const PAYMENT_LINK = 'https://link.fastpaydirect.com/payment-link/69a0bf797819e367cb917544';

export function EnrollmentForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: ''
    });
    const { language } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Store form data if needed (localStorage, send to backend, etc.)
        // Then redirect to payment link
        window.location.href = PAYMENT_LINK;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-16 md:py-24 bg-primary-dark relative overflow-hidden text-white" id="enrollment">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-base/50 to-transparent z-0" />
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent-base/10 rounded-full blur-3xl z-0 hidden sm:block" />
            {/* Decorative star accents - hidden on mobile */}
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-12 right-12 w-56 opacity-20 pointer-events-none z-0 hidden md:block"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute bottom-16 left-8 w-44 opacity-15 pointer-events-none rotate-12 z-0 hidden md:block"
            />
            <img
                src="/assets/images/star-accent.png"
                alt=""
                className="absolute top-1/2 left-1/4 w-32 opacity-10 pointer-events-none -rotate-6 z-0 hidden md:block"
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
                    <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">

                        <div className="md:col-span-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                {language === 'es' ? 'Inscríbase Hoy' : 'Enroll Today'}
                            </h2>
                            <p className="text-primary-light/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {language === 'es'
                                    ? 'Complete el formulario y continúe al pago para activar su membresía.'
                                    : 'Complete the form and proceed to payment to activate your membership.'}
                            </p>

                            {/* Steps - horizontal on mobile, vertical on md+ */}
                            <div className="flex md:flex-col gap-4 overflow-x-auto scrollbar-hide pb-2 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
                                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 min-w-[140px] md:min-w-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent-light text-sm md:text-base">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm md:text-base">
                                            {language === 'es' ? 'Complete sus datos' : 'Fill in your details'}
                                        </h4>
                                        <p className="text-xs md:text-sm text-white/60 hidden sm:block">
                                            {language === 'es' ? 'Información básica de contacto' : 'Basic contact information'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 min-w-[140px] md:min-w-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent-light text-sm md:text-base">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm md:text-base">
                                            {language === 'es' ? 'Realice el pago' : 'Make payment'}
                                        </h4>
                                        <p className="text-xs md:text-sm text-white/60 hidden sm:block">
                                            {language === 'es' ? 'Pago seguro en línea' : 'Secure online payment'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0 min-w-[140px] md:min-w-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent-light text-sm md:text-base">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm md:text-base">
                                            {language === 'es' ? 'Reciba su membresía' : 'Receive your membership'}
                                        </h4>
                                        <p className="text-xs md:text-sm text-white/60 hidden sm:block">
                                            {language === 'es' ? 'Manual enviado por email' : 'Manual sent via email'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                                    {language === 'es' ? 'Información Personal' : 'Personal Information'}
                                </h3>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="firstName" className="text-xs sm:text-sm font-medium text-gray-700">
                                            {language === 'es' ? 'Nombre' : 'First Name'}
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                            placeholder="Juan"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="lastName" className="text-xs sm:text-sm font-medium text-gray-700">
                                            {language === 'es' ? 'Apellido' : 'Last Name'}
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                            placeholder="Pérez"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="dateOfBirth" className="text-xs sm:text-sm font-medium text-gray-700">
                                        {language === 'es' ? 'Fecha de Nacimiento' : 'Date of Birth'}
                                    </label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        required
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                                        {language === 'es' ? 'Correo Electrónico' : 'Email Address'}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
                                        {language === 'es' ? 'Teléfono' : 'Phone Number'}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                        placeholder="(305) 555-0123"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="address" className="text-xs sm:text-sm font-medium text-gray-700">
                                        {language === 'es' ? 'Dirección' : 'Home Address'}
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-base focus:ring-2 focus:ring-primary-base/20 outline-none transition-all text-sm sm:text-base"
                                        placeholder={language === 'es' ? '123 Calle Principal, Miami, FL 33125' : '123 Main Street, Miami, FL 33125'}
                                    />
                                </div>

                                <div className="pt-3 sm:pt-4">
                                    <Button type="submit" variant="primary" fullWidth size="lg">
                                        {language === 'es' ? 'Continuar al Pago' : 'Continue to Payment'}
                                    </Button>
                                    <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-3 sm:mt-4">
                                        {language === 'es'
                                            ? 'Al continuar, acepta nuestros términos y condiciones.'
                                            : 'By continuing, you agree to our terms and conditions.'}
                                    </p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
