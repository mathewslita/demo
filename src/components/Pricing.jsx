import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Check, Flame, MessageCircle, AlertTriangle } from 'lucide-react';

export const Pricing = () => {
    // Enlace de WhatsApp placeholder - El usuario deberá proveer el número real
    const whatsappLink = "https://wa.me/593984854258?text=Hola,%20quiero%20reservar%20mi%20cupo%20de%20Turbomente%20Gold%20con%20la%20oferta%20de%20$10";

    return (
        <Section id="pricing">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-bold text-sm mb-4">
                    <Flame className="w-4 h-4 fill-cyan-400" /> PROPÓSITO 2026: TU AÑO MÁS PRODUCTIVO
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Potencia tu Futuro. <span className="text-yellow-400">Sin Gastar de Más.</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Accede a un <strong>Plan Familiar Oficial de Google</strong> de forma compartida.
                    Mismos beneficios Premium (2TB + Gemini), precio dividido inteligentemente.
                </p>
            </div>

            <div className="max-w-md mx-auto relative">
                {/* Glow effect distinctivo para Gold */}
                <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full -z-10"></div>

                <Card className="flex flex-col relative border-yellow-500/50 bg-slate-900/80 shadow-[0_0_40px_rgba(234,179,8,0.2)] overflow-hidden">

                    {/* Badge superior */}
                    <div className="absolute top-0 right-0">
                        <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            OFERTA FIN DE AÑO
                        </div>
                    </div>

                    <div className="p-2 text-center border-b border-white/5">
                        <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                            Turbomente <span className="text-yellow-400">Gold</span>
                        </h3>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-center mb-6">
                            <span className="text-slate-500 line-through text-sm">Precio Individual Google: $240/año</span>
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <span className="text-6xl font-black text-white">$10</span>
                                <span className="text-xl font-bold text-yellow-400">.00</span>
                            </div>
                            <div className="inline-block px-3 py-1 mt-2 rounded bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wide">
                                Pago Único • Acceso 12 Meses
                            </div>
                        </div>

                        {/* Barra de Progreso de Escasez - Más sobria y profesional */}
                        <div className="bg-slate-950/50 rounded-lg p-3 border border-white/10 mb-6">
                            <div className="flex justify-between text-xs font-medium mb-2">
                                <span className="text-slate-300">Cupos en el Grupo Familiar Actual:</span>
                                <span className="text-yellow-400 font-bold">Quedan 2 espacios</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 w-[85%]"></div>
                            </div>
                        </div>

                        <div className="h-px bg-white/10 mb-6"></div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-slate-200">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span><strong>Gemini Advanced</strong> (Modelo 3.0) y 1M Tokens</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-200">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span><strong>2 TB (2,000 GB)</strong> Limpios para ti + 1,000 Créditos</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-200">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span>IA integrada en Docs, Gmail, Meet y Calendar</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-200">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span><strong>Privacidad Total:</strong> Tus datos son privados</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-200">
                                <div className="bg-green-500/20 rounded-full p-0.5 mt-0.5">
                                    <Check className="w-4 h-4 text-green-400" />
                                </div>
                                <span className="text-green-200 font-medium">Garantía de Funcionamiento 1 Año</span>
                            </li>
                        </ul>

                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-auto">
                            <Button variant="gold" className="w-full text-lg py-4 shadow-lg hover:brightness-110 transition-all">
                                <MessageCircle className="w-5 h-5 mr-2" /> Reservar mi Cupo Ahora
                            </Button>
                        </a>

                        <div className="mt-4 flex items-center justify-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder visual de seguridad/bancos si los hubiera, por ahora texto de confianza */}
                            <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> Compra segura vía Banco Pichincha / Guayaquil
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    );
};
