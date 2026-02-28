"use client";
import React from 'react';
import Image from 'next/image';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function ServicesShowcase() {
    const portfolioItems = [
        {
            id: 1,
            title: "Bordado Computarizado 3D",
            description: "Hilos de alta tenacidad que no pierden color. Ideal para dar relieve y presencia a marcas corporativas.",
            image: "/uniforme_bordado_pro.png",
            colSpan: "md:col-span-2",
            rowSpan: "md:row-span-2"
        },
        {
            id: 2,
            title: "Taller de Sastrería",
            description: "Talle perfecto garantizado. Entalles, bastas y composturas con acabados de alta costura.",
            image: "/sastreria_ajustes_detalle.png",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        },
        {
            id: 3,
            title: "Estampado DTF Premium",
            description: "Colores vibrantes y alta durabilidad sin límite cromático para logos modernos.",
            image: "/uniforme_estampado_dtf.png",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1"
        }
    ];

    const benefits = [
        "Durabilidad Garantizada",
        "Diseños a Medida",
        "Muestras Previas",
        "Asesoría de Imagen"
    ];

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6">
                            <Sparkles size={16} />
                            <span>SERVICIOS DE VALOR AÑADIDO</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral mb-6 leading-tight">
                            Tu marca merece el <br />
                            <span className="text-primary">Mejor Acabado</span>
                        </h2>
                        <p className="text-lg text-neutral/70 leading-relaxed mb-8">
                            Nuestra responsabilidad no termina en la entrega de la prenda.
                            Garantizamos que tu imagen corporativa destaque a través de
                            nuestros centros de personalización y sastrería in-house.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-accent" size={20} />
                                    <span className="text-neutral font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-auto hidden lg:block">
                        {/* Elemento decorativo o espacio para layout asimétrico del lado derecho si es necesario */}
                        <div className="absolute inset-0 bg-neutral-50 rounded-3xl p-8 border border-neutral/10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-neutral mb-4">El arte del detalle</h3>
                            <p className="text-neutral/70 italic">
                                &quot;Un uniforme bien cuidado e identificado eleva el sentido de pertenencia y la confianza de quien lo porta y de quien lo observa.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Galería tipo Bento / Masonry */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-3xl overflow-hidden shadow-lg ${item.colSpan} ${item.rowSpan} bg-neutral-100 flex flex-col`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            <div className="relative z-20 mt-auto p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-bold text-2xl mb-2 flex items-center gap-3">
                                    {item.title}
                                    <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                </h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 md:line-clamp-none">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-neutral/50 text-sm font-medium">
                    Servicios disponibles al cotizar tus prendas en nuestro catálogo de productos.
                </div>
            </div>
        </section>
    );
}

