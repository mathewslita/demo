import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function EmbroideryShowcase({ onNavigate }) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Detalles que Enamoran</span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral mb-4">
                        Bordados para el Hogar
                    </h2>
                    <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                        Transformamos textiles cotidianos en piezas únicas de arte.
                        Toallas, sábanas y regalos personalizados con el cariño de lo hecho a mano.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-2xl h-96 shadow-lg cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1545642677-27a3c310fb46?q=80&w=1000&auto=format&fit=crop"
                            alt="Toallas Bordadas"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">Sets de Regalo</h3>
                                <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Sorprende con toallas bordadas para bodas, baby showers y ocasiones especiales.
                                </p>
                                <button
                                    onClick={() => onNavigate('catalog')}
                                    className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
                                >
                                    <Sparkles size={18} /> Ver Modelos
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Featured Center */}
                    <div className="group relative overflow-hidden rounded-2xl h-96 shadow-xl lg:-mt-8 border-4 border-primary/10">
                        <img
                            src="https://images.unsplash.com/photo-1629032355262-d758f5068224?q=80&w=1000&auto=format&fit=crop"
                            alt="Hogar Textil"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">Hogar & Confort</h3>
                            <p className="text-white/90">Dale un toque personal a tu habitación con lencería bordada.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-2xl h-96 shadow-lg cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=1000&auto=format&fit=crop"
                            alt="Arte en Hilo"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">Parches & Arte</h3>
                                <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Expresa tu identidad con parches únicos para tu ropa favorita.
                                </p>
                                <button
                                    onClick={() => onNavigate('catalog')}
                                    className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
                                >
                                    <Star size={18} /> Ver Diseños
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
