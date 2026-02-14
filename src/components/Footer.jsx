import React from 'react';
import { Facebook, MessageCircle, Video } from 'lucide-react'; // Usamos Video como placeholder para TikTok si no está disponible, o SVG custom

export const Footer = () => {
    // Definimos enlaces de placeholder
    const facebookLink = "https://www.facebook.com/profile.php?id=61584751915893&sfnsn=wa";
    const tiktokLink = "https://www.tiktok.com/@turbomente8?_r=1&_t=ZM-926ylqpQt2K";
    const whatsappLink = "https://wa.me/593984854258";

    // Icono SVG personalizado para TikTok porque puede no estar en versiones viejas de Lucide
    const TikTokIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" /></svg>
    );

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 text-sm z-10 relative">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500">
                    © 2024 Turbomente Inc. Todos los derechos reservados.
                </div>
                <div className="flex items-center gap-6">
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors transform hover:scale-110">
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a href={tiktokLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors transform hover:scale-110">
                        <TikTokIcon className="w-6 h-6" />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-500 transition-colors transform hover:scale-110">
                        <MessageCircle className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
