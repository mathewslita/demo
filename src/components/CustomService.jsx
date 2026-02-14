import React from 'react';
import { MessageCircle, Layers, PenTool, CheckCircle } from 'lucide-react';

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
        <section id="custom" className="py-20 bg-neutral text-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-2 lg:order-1">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block animate-fade-in">Soluciones Corporativas</span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                            Tu Marca, <br />Llevada al Siguiente Nivel
                        </h2>
                        <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
                            Sabemos que la imagen lo es todo. Por eso ofrecemos servicios de bordado industrial y confección de uniformes que proyectan profesionalismo y confianza.
                            Desde una docena hasta miles de unidades.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 text-white">{step.title}</h3>
                                        <p className="text-secondary/60">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-accent transition-all hover:scale-105 shadow-lg shadow-primary/20"
                            >
                                <MessageCircle size={24} />
                                Cotizar para mi Empresa
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                            alt="Corporate team branding"
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral to-transparent opacity-80"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                                <p className="text-white italic text-lg font-serif">
                                    "La calidad del bordado superó nuestras expectativas. Nuestros uniformes nunca se vieron mejor."
                                </p>
                                <p className="text-primary mt-4 font-bold text-sm uppercase tracking-wide">
                                    — Cliente Satisfecho
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
