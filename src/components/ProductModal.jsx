import React, { useState } from 'react';
import { X, ShoppingBag, Check } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, addToCart }) {
    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = ['S', 'M', 'L', 'XL'];

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] animate-fade-in-up">
                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full md:hidden"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative bg-neutral/5">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="inline-block px-3 py-1 bg-secondary text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                {product.category}
                            </span>
                            <h2 className="text-3xl font-bold text-neutral mb-2">{product.name}</h2>
                            <span className="text-2xl font-bold text-primary">${product.price}</span>
                        </div>
                        {/* Close Button Desktop */}
                        <button
                            onClick={onClose}
                            className="hidden md:block p-2 hover:bg-neutral/10 rounded-full transition-colors text-neutral/50 hover:text-neutral"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <p className="mt-6 text-neutral/70 leading-relaxed">
                        {product.description}
                        <br className="mb-4" />
                        Confeccionado con materiales de alta calidad para asegurar durabilidad y confort. Ideal para combinar con tu estilo único.
                    </p>

                    {/* Size Selector */}
                    <div className="mt-8">
                        <h3 className="text-sm font-bold text-neutral uppercase mb-3">Selecciona tu Talla</h3>
                        <div className="flex gap-3">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                    w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-all border-2
                    ${selectedSize === size
                                            ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'border-neutral/20 text-neutral hover:border-primary/50'}
                  `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <button
                            onClick={() => {
                                addToCart({ ...product, selectedSize });
                                onClose();
                            }}
                            className="w-full py-4 bg-neutral text-white rounded-xl font-bold text-lg hover:bg-neutral/90 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={24} />
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
