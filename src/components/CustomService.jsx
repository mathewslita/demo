"use client";
import React from 'react';
import { MessageCircle, Layers, PenTool, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function CustomService() {
    const whatsappNumber = "593991234567";
    const message = "Hola! Quisiera cotizar uniformes personalizados para mi empresa.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const steps = [
        {
            icon: <Layers size={32} />,
            title: "1. Elige tu Uniforme",
            desc: "Selecciona entre polos, camisas, chalecos y más. Todo listo para tu marca."
        },
        {
            icon: <PenTool size={32} />,
            title: "2. Envía tu Logo",
            desc: "Compartenos tu logotipo en alta resolución. Nosotros nos encargamos de la digitalización."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "3. Recibe Calidad Premium",
            desc: "Bordados precisos y telas duraderas que elevarán la imagen de tu equipo."
        }
    ];

    return (
        <section id="custom" className="py-20 bg-neutral text-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in flex items-center gap-2">
                            <span className="w-8 h-1 bg-accent rounded-full"></span>
                            Soluciones Corporativas
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                            Tu Marca, <br />
                            <span className="text-primary">Llevada al Siguiente Nivel</span>
                        </h2>
                        <p className="text-lg text-secondary/80 mb-10 leading-relaxed max-w-xl">
                            Sabemos que la imagen lo es todo. Transformamos prendas de alta calidad en herramientas de branding poderosas para tu empresa.
                            Desde bordados de alta definición hasta estampados duraderos.
                        </p>

                        <div className="grid gap-6">
                            {steps.map((step, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mt-1">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-secondary/60 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-accent transition-all hover:scale-105 shadow-lg shadow-primary/20"
                            >
                                <MessageCircle size={24} />
                                Cotizar Personalización
                            </a>
                            <button
                                onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                            >
                                Ver Catálogo
                            </button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[500px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group">
                        <Image
                            src="/tumarca.png"
                            alt="Personalización de Uniformes"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-transparent opacity-60"></div>

                        <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-white font-bold text-sm">Disponibilidad Inmediata</span>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-neutral/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                                <div className="flex items-center gap-2 mb-3 text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                </div>
                                <p className="text-white italic text-lg font-medium leading-snug">
                                    &quot;La calidad del bordado es impecable. Nuestros uniformes nunca se vieron tan profesionales.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">GR</div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Gerente de Recursos Humanos</p>
                                        <p className="text-white/50 text-xs">Empresa de Logística</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

