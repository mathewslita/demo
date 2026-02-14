import React from 'react';
import { Section } from './ui/Section';
import { Video, Palette, Files, Calendar } from 'lucide-react';

export const Features = () => {
    return (
        <Section id="features">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu Estudio Creativo Completo</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Todo lo que necesitas para crear, gestionar y trabajar en un solo workspace.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: Estudio de Imágenes - Magenta Gradient */}
                {/* Visual actualizado: Imagen de Arte/Cerebro provista */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-fuchsia-700 to-purple-800 h-[320px] shadow-2xl hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="absolute inset-0">
                        {/* Usamos object-contain/cover para mostrar la imagen artística */}
                        <img
                            src="/feature-art.png"
                            alt="Arte Generativo con IA"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-overlay"
                        />
                        {/* Fallback de imagen por si la mezcla no se ve bien, usamos la imagen real como contenido principal sutil */}
                        <img
                            src="/feature-art.png"
                            alt="Arte Generativo"
                            className="absolute right-0 bottom-0 w-3/4 h-auto object-contain translate-y-12 translate-x-12 opacity-80"
                        />
                    </div>

                    <div className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 text-white shadow-lg">
                            <Palette className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">Estudio de <br />Imágenes con IA</h3>
                        {/* Texto Nano Banana Pro eliminado a petición */}
                    </div>
                </div>

                {/* Card 2: Generación de Video - Blue/Indigo Gradient */}
                {/* Visual actualizado: Interfaz Veo 3.1 provista */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 h-[320px] shadow-2xl hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="absolute inset-0 flex items-center justify-center pt-20 pl-20">
                        {/* Mostramos la UI de video saliendo de la esquina */}
                        <img
                            src="/feature-video.png"
                            alt="Interfaz Generación Video"
                            className="w-[120%] max-w-none shadow-2xl rounded-tl-lg transform rotate-[-5deg] hover:rotate-0 transition-all duration-500"
                        />
                    </div>

                    <div className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 text-white shadow-lg">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">Generación <br />de Video Avanzada</h3>
                    </div>
                </div>

                {/* Card 3: Integración Total - Cyan/Teal Gradient */}
                {/* Visual actualizado: Iconos de Google provistos */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 h-[320px] shadow-2xl hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="absolute inset-0 flex items-center justify-center pt-24">
                        <img
                            src="/feature-integration.png"
                            alt="Integración Google Workspace"
                            className="w-[90%] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 text-white shadow-lg">
                            <Files className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">Integración <br />Total en tu Flujo</h3>
                    </div>
                </div>

                {/* Card 4: Videollamadas - Emerald Gradient */}
                {/* Visual actualizado: Imagen Meet provista (Con recorte para evitar duplicidad de texto) */}
                {/* Card 4: Videollamadas - Emerald Gradient */}
                {/* Visual actualizado: Nueva imagen limpia provista sin texto duplicado */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 h-[320px] shadow-2xl hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="absolute inset-0 flex items-center justify-end">
                        {/* Mostramos la imagen completa desplazada ligeramente a la derecha para dar espacio al texto */}
                        {/* Ya no necesitamos recortar el texto antiguo porque la nueva imagen viene limpia */}
                        <img
                            src="/feature-meet.png"
                            alt="Google Meet UI"
                            className="h-[110%] w-auto object-contain translate-x-12 group-hover:translate-x-8 transition-transform duration-700"
                        />
                    </div>

                    <div className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 text-white shadow-lg">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">Videollamadas <br />y Agenda Premium</h3>
                    </div>
                </div>
            </div>
        </Section>
    );
};
