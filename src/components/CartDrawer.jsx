"use client";
import React, { useMemo } from 'react';
import { X, Trash2, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer({ isOpen, onClose, cartItems, removeFromCart, updateQuantity }) {
    const total = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cartItems]);

    const whatsappLink = useMemo(() => {
        if (cartItems.length === 0) return '#';

        const targetNumber = "593991234567";

        let message = "Hola! Quisiera cotizar los siguientes productos corporativos:\n\n";
        cartItems.forEach(item => {
            const sizeText = item.selectedSize && item.selectedSize !== 'N/A' ? `(${item.selectedSize})` : '';
            message += `- ${item.quantity}x ${item.name} ${sizeText}: $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        message += `\nTotal Estimado: $${total.toFixed(2)}`;
        message += `\n\nQuedo atento a su respuesta para confirmar detalles del logo.`;

        return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    }, [cartItems, total]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-md bg-secondary h-full shadow-2xl flex flex-col transform transition-transform duration-300 animate-slide-in-right">
                <div className="p-5 flex items-center justify-between border-b border-neutral/10 bg-white shadow-sm z-10">
                    <h2 className="text-xl font-bold text-neutral font-serif">Tu Cotización</h2>
                    <button onClick={onClose} className="p-2 hover:bg-neutral/10 rounded-full transition-colors text-neutral/60 hover:text-neutral">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-secondary/30">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-neutral/50 space-y-4">
                            <MessageCircle size={48} className="opacity-20" />
                            <p className="text-lg font-medium">No has seleccionado productos.</p>
                            <p className="text-sm text-center max-w-xs opacity-70">Agrega prendas del catálogo para solicitar tu cotización.</p>
                            <button onClick={onClose} className="text-primary hover:underline font-bold mt-2">
                                Ir al Catálogo
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral/5 hover:shadow-md transition-shadow">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="object-cover rounded-lg bg-neutral/5"
                                />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-neutral text-sm">{item.name}</h3>
                                        <p className="text-xs text-neutral/60 mt-1 uppercase tracking-wider">Talla: {item.selectedSize || 'N/A'}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-neutral/20 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                                                className="px-2 py-1 hover:bg-neutral/10 text-neutral transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 text-sm font-bold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                                                className="px-2 py-1 hover:bg-neutral/10 text-neutral transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                                    className="text-red-400 hover:text-red-600 transition-colors p-1 self-start -mt-1 -mr-1"
                                    title="Eliminar"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-neutral/10 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
                        <div className="flex justify-between mb-2 text-sm text-neutral/60">
                            <span>Subtotal</span>
                            <span>Ref. ${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-6 text-xl font-bold text-neutral">
                            <span>Total Estimado</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/30"
                        >
                            <MessageCircle size={24} />
                            Solicitar Cotización
                        </a>
                        <p className="text-xs text-center text-neutral/50 mt-3 px-4">
                            Te redirigiremos a WhatsApp para finalizar los detalles de tu pedido corporativo.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

