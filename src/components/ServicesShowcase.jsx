import React from 'react';
import { Scissors, Palette, PenTool, ArrowRight } from 'lucide-react';

export default function ServicesShowcase({ addToCart }) {
    // Service IDs from products.js (Used here just for reference/content)
    const services = [
        {
            id: 701,
            title: "Bordado Computarizado",
            description: "Personaliza tus uniformes con logotipos de alta precisión. Hilos resistentes y acabados premium.",
            icon: <PenTool size={32} />,
            image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000&auto=format&fit=crop", // Embroidery machine
            price: 5.00
        },
        {
            id: 702,
            title: "Estampado & Serigrafía",
            description: "Dale vida a tu marca con impresiones DTF y serigrafía de alta durabilidad y colores vibrantes.",
            icon: <Palette size={32} />,
            image: "https://images.unsplash.com/photo-1562184552-e0a539726da2?q=80&w=1000&auto=format&fit=crop", // Printing
            price: 4.50
        },
        {
            id: 703,
            title: "Taller de Sastrería",
            description: "Ajuste perfecto garantizado. Servicio de bastas, entalle y composturas post-venta.",
            icon: <Scissors size={32} />,
            image: "https://images.unsplash.com/photo-1598380604169-c09e05f63d09?q=80&w=1000&auto=format&fit=crop", // Tailoring
            price: 3.50
        }
    ];

    const scrollToCatalog = () => {
        const catalogSection = document.getElementById('catalog');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Valor Añadido</span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral mb-6 leading-tight">
                        Centro de Personalización & Acabados
                    </h2>
                    <p className="text-lg text-neutral/70 leading-relaxed">
                        Tu imagen corporativa no termina en la prenda. Elevamos tu marca con bordados de alta definición,
                        estampados duraderos y un talle perfecto para cada colaborador.
                        <br /><span className="text-sm font-bold text-primary mt-2 block">Disponibles al seleccionar tus productos.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral/5 flex flex-col">
                            {/* Image Header */}
                            <div className="h-64 relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral/20 group-hover:bg-neutral/0 transition-colors z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-primary">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral/70 mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-neutral/10 flex items-center justify-between">
                                    {/* Changed action to scroll to catalog instead of Add */}
                                    <button
                                        onClick={scrollToCatalog}
                                        className="w-full text-center py-2 text-primary font-bold hover:bg-neutral-50 rounded-lg transition-colors border border-primary/20 hover:border-primary"
                                    >
                                        Ver disponibles en catálogo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
