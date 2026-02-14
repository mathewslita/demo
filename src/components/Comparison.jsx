import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
    // Datos actualizados con las "Power Features" (Veo 2, NotebookLM, etc.)
    const features = [
        { name: 'Generación de Video IA', us: 'Whisk Animate (Veo 2)', others: 'No disponible', isText: true, highlight: true },
        { name: 'Investigación y Estudio', us: 'NotebookLM (Fuentes Ilimitadas)', others: 'Básico', isText: true, highlight: true },
        { name: 'Almacenamiento Google One', us: '2,000 GB (2 TB)', others: '15 GB', isText: true },
        { name: 'Asistente en Workspace', us: 'Gemini en Docs, Gmail y Slides', others: 'No incluido', isText: true },
        { name: 'Videollamadas Premium', us: 'Meet (Sin límites + IA)', others: 'Limitado', isText: true },
    ];

    const renderValue = (value, isText) => {
        if (isText) return <span className="font-semibold">{value}</span>;
        return value ? <Check className="w-6 h-6 text-cyan-400 mx-auto" /> : <X className="w-6 h-6 text-slate-600 mx-auto" />;
    };

    return (
        <Section id="comparison" className="bg-slate-900/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Por qué Turbomente?</h2>
            </div>
            <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/5">
                            <th className="p-6 text-slate-400 font-medium w-1/3">Características</th>
                            <th className="p-6 text-white font-bold text-lg text-center bg-cyan-500/10 w-1/3">Turbomente</th>
                            <th className="p-6 text-slate-400 font-medium text-center w-1/3">Otros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <td className="p-6 text-white font-medium">{feature.name}</td>
                                <td className="p-6 text-center bg-cyan-500/5 text-white">
                                    {renderValue(feature.us, feature.isText)}
                                </td>
                                <td className="p-6 text-center text-slate-400">
                                    {renderValue(feature.others, feature.isText)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
};
