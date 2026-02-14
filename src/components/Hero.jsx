import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-32 pb-20">

      {/* ELEMENTOS DE FONDO (Blobs de luz) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] -z-10" />

      <div className="text-center max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-cyan-400 mb-4"
        >
          <Zap className="w-3 h-3" />
          <span>La nueva era de la productividad creativa</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Crea sin límites. <br />
          <span className="text-gradient">Produce a velocidad Turbo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
        >
          Desata tu potencial con la IA más avanzada para generar imágenes y video,
          e intégrala en tus documentos y correos diarios. Incluye 2TB de almacenamiento para todo tu trabajo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            Probar Turbomente <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto h-12 px-8 text-base">
            <Play className="w-4 h-4 mr-2" /> Ver la IA en acción
          </Button>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 sm:mt-24 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm"
        >
          <div className="aspect-[16/9] w-full bg-slate-900 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent z-10"></div>
            <video
              src="/Turbo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
              poster="/dashboard-mockup.png"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
