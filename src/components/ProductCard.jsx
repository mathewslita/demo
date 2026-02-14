import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="card-base overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral/10 group-hover:bg-neutral/0 transition-colors duration-300" />
            </div>

            <div className="p-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{product.category}</span>
                <h3 className="mt-1 text-lg font-medium text-neutral">{product.name}</h3>
                <p className="mt-2 text-sm text-neutral/70 line-clamp-2">{product.description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>

                    <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-neutral text-white rounded-full hover:bg-primary transition-colors duration-300"
                        aria-label="Agregar al carrito"
                    >
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
