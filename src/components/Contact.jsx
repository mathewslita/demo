import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral sm:text-4xl font-serif mb-4">Contáctanos</h2>
                    <p className="text-lg text-neutral/70">
                        Estamos aquí para ayudarte. Visítanos o escríbenos.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto">

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                                <MapPin size={32} />
                            </div>
                            <h3 className="font-bold text-neutral text-lg mb-2">Ubicación</h3>
                            <p className="text-neutral/60">Av. Amazonas y Naciones Unidas<br />Quito, Ecuador</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                                <Phone size={32} />
                            </div>
                            <h3 className="font-bold text-neutral text-lg mb-2">Teléfono</h3>
                            <a href="https://wa.me/593991234567" className="text-neutral/60 hover:text-primary transition-colors font-medium">
                                +593 99 123 4567
                            </a>
                            <p className="text-xs text-neutral/40 mt-1">(WhatsApp)</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                                <Mail size={32} />
                            </div>
                            <h3 className="font-bold text-neutral text-lg mb-2">Email</h3>
                            <a href="mailto:info@f-irst.com" className="text-neutral/60 hover:text-primary transition-colors">
                                info@f-irst.com
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-neutral/5 text-center max-w-2xl">
                        <h3 className="font-bold text-xl text-neutral mb-4">¿Listo para renovar la imagen de tu empresa?</h3>
                        <p className="text-neutral/70 mb-6">
                            Escríbenos directamente a WhatsApp para una atención personalizada y cotizaciones inmediatas.
                        </p>
                        <a
                            href="https://wa.me/593991234567"
                            className="inline-flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                        >
                            <Phone size={20} />
                            Chat en WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
