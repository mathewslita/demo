import React from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-xl text-gradient tracking-tighter cursor-pointer">TURBOMENTE</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
                    <a href="#features" className="hover:text-white transition-colors">Características</a>
                    <a href="#comparison" className="hover:text-white transition-colors">Comparación</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="whatsapp" className="h-9 px-4 text-sm" onClick={() => window.open('https://wa.me/593984854258', '_blank')}>
                        Contactar Asesor
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-slate-950 border-b border-white/5 p-4 flex flex-col gap-4">
                    <a href="#features" className="text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>Características</a>
                    <a href="#comparison" className="text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>Comparación</a>
                    <a href="#pricing" className="text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>Precios</a>
                    <div className="h-px bg-white/5 my-2"></div>
                    <Button variant="whatsapp" className="w-full" onClick={() => window.open('https://wa.me/593984854258', '_blank')}>
                        Contactar vía WhatsApp
                    </Button>
                </div>
            )}
        </nav>
    );
};
