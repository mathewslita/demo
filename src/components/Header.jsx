import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header({ cartCount, onCartClick, onNavigate }) {
    return (
        <header className="sticky top-0 z-40 bg-secondary/90 backdrop-blur-md border-b border-neutral/10 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Mobile Menu Button - Visual Only for now */}
                    <div className="flex items-center sm:hidden">
                        <button className="p-2 text-neutral hover:bg-neutral/10 rounded-md">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onNavigate('hero')}>
                        <img src="/logo.png" alt="F-IRST Logo" className="h-28 w-auto object-contain transition-transform group-hover:scale-105" />
                        {/* Text removed to avoid duplication with logo */}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex space-x-8">
                        <button onClick={() => onNavigate('hero')} className="text-neutral hover:text-primary px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors">Inicio</button>
                        <button onClick={() => onNavigate('catalog')} className="text-neutral hover:text-primary px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors">Catálogo</button>
                        <button onClick={() => onNavigate('custom')} className="text-neutral hover:text-primary px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors">Empresas</button>
                        <button onClick={() => onNavigate('contact')} className="text-neutral hover:text-primary px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors">Contacto</button>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-neutral hover:text-primary transition-colors hidden sm:block">
                            <Search size={20} />
                        </button>

                        <div className="relative">
                            <button
                                onClick={onCartClick}
                                className="p-2 text-neutral hover:text-primary transition-colors"
                                aria-label="Abrir carrito"
                            >
                                <ShoppingBag size={24} />
                            </button>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full animate-pulse-fast shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
