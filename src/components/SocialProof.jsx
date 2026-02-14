import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Star, Zap, HardDrive, Video, MessageSquare, Plus, User } from 'lucide-react';

const initialReviews = [
    {
        title: "Ahorro Brutal de Tiempo",
        content: "Antes tardaba días en editar videos para mis clientes. Con Veo 3.1 y la integración en Workspace, literalmente he duplicado mi capacidad de entrega.",
        author: "Marcos D.",
        role: "Agencia Creativa",
        icon: Video,
        color: "text-blue-400"
    },
    {
        title: "El ahorro es ridículo",
        content: "El plan oficial de Google cuesta $240 al año. Aquí tengo lo mismo (2TB + Gemini Advanced) por solo $10. Me ahorré $230 dólares al instante. Es una locura.",
        author: "Sarah J.",
        role: "Arquitecta",
        icon: HardDrive,
        color: "text-purple-400"
    },
    {
        title: "Calidad de Imagen Superior",
        content: "He probado Midjourney y Dall-E, pero la consistencia que logro aquí para mis campañas de marketing es otro nivel. Y todo integrado en mis Docs.",
        author: "David L.",
        role: "Marketing Digital",
        icon: Zap,
        color: "text-yellow-400"
    }
];

export const SocialProof = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newComment, setNewComment] = useState({ name: '', text: '' });
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.name || !newComment.text) return;

        // Construimos el mensaje de WhatsApp
        const message = `Hola Turbomente, quiero enviar mi testimonio para la web:%0A%0ANombre: ${encodeURIComponent(newComment.name)}%0AOpinión: ${encodeURIComponent(newComment.text)}`;
        const whatsappUrl = `https://wa.me/593984854258?text=${message}`;

        // Abrimos WhatsApp
        window.open(whatsappUrl, '_blank');

        // Limpiamos y cerramos
        setNewComment({ name: '', text: '' });
        setShowForm(false);
    };

    return (
        <Section className="relative overflow-hidden py-20">
            {/* Background Decorativo Sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-950 -z-20"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Lo que dicen los miembros <span className="text-yellow-400">Gold</span></h2>
                <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-slate-500 text-sm">Valoración promedio de 4.9/5 por profesionales.</p>
            </div>

            {/* Grid de Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-12">
                {reviews.map((review, i) => (
                    <Card key={i} className={`hover:border-white/20 transition-all duration-500 group hover:-translate-y-1 ${review.isNew ? 'animate-pulse border-cyan-500/50 bg-cyan-900/10' : ''}`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-white/5 ${review.color} group-hover:scale-110 transition-transform`}>
                                <review.icon className="w-6 h-6" />
                            </div>
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 fill-slate-700 text-slate-700 group-hover:fill-yellow-500 group-hover:text-yellow-500 transition-colors delay-[50ms]" />
                                ))}
                            </div>
                        </div>

                        <h3 className="font-bold text-lg text-white mb-2">{review.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 pt-2 border-t border-white/5">
                            "{review.content}"
                        </p>

                        <div className="mt-auto flex items-center justify-between text-xs">
                            <div>
                                <span className="font-semibold text-white block">{review.author}</span>
                                <span className="text-slate-600">{review.role}</span>
                            </div>
                            <div className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                Verificado
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Zona Interactiva: Agregar Comentario */}
            <div className="max-w-2xl mx-auto text-center">
                {!showForm ? (
                    <Button onClick={() => setShowForm(true)} variant="secondary" className="gap-2">
                        <MessageSquare className="w-4 h-4" /> Comparte tu experiencia
                    </Button>
                ) : (
                    <Card className="animate-in fade-in slide-in-from-bottom-4 duration-300 border-dashed border-slate-700 bg-slate-900/50">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Plus className="w-5 h-5 text-cyan-400" /> Nuevo Comentario
                            </h3>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Tu Nombre"
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                                    value={newComment.name}
                                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="¿Qué es lo que más te gusta de Turbomente?"
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors h-24 resize-none"
                                    value={newComment.text}
                                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="flex gap-3 justify-end">
                                <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>Cancelar</Button>
                                <Button type="submit" variant="whatsapp">Enviar a Revisión (WhatsApp)</Button>
                            </div>
                        </form>
                    </Card>
                )}
            </div>
        </Section>
    );
};
