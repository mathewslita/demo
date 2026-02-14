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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral text-lg">Ubicación</h3>
                                    <p className="text-neutral/60 mt-1">Av. Amazonas y Naciones Unidas<br />Quito, Ecuador</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral text-lg">Teléfono</h3>
                                    <a href="https://wa.me/593991234567" className="text-neutral/60 mt-1 hover:text-primary transition-colors">
                                        +593 99 123 4567
                                    </a>
                                    <p className="text-xs text-neutral/40">(Solo WhatsApp)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral/5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral text-lg">Email</h3>
                                    <p className="text-neutral/60 mt-1">info@modacalida.demo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-neutral/5">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral mb-2">Nombre</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/30 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-secondary/30 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all" placeholder="tucorreo@ejemplo.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral mb-2">Asunto</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/30 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all" placeholder="¿En qué podemos ayudarte?" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral mb-2">Mensaje</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-secondary/30 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all" placeholder="Escribe tu mensaje aquí..."></textarea>
                            </div>
                            <button className="w-full bg-neutral text-white font-bold py-4 rounded-lg hover:bg-primary transition-colors shadow-lg">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
