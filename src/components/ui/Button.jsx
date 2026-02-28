"use client";
import React from 'react';
import { cn } from '../../lib/utils';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-medium transition-all rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95";

    const variants = {
        // Primary: Cian brillante standard
        primary: "bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",

        // Gold: Para ofertas premium/flash
        gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold hover:brightness-110 shadow-[0_0_20px_rgba(234,179,8,0.4)] border border-yellow-300/50",

        // WhatsApp: Verde oficial
        whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.4)]",

        // Secondary: Transparente con borde sutil
        secondary: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/30",

        // Ghost: Solo texto
        ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
    };

    return (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
};

