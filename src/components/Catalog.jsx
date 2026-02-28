"use client";
import React from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

export default function Catalog({ products, onProductClick, addToCart, selectedCategory, onSelectCategory, categories }) {
    return (
        <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-neutral sm:text-4xl font-serif mb-4">Nuestra Colección</h2>
                <p className="text-lg text-neutral/80 max-w-2xl mx-auto mb-8">
                    Descubre prendas diseñadas con calidez y estilo para acompañarte en cada momento.
                </p>

                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={onSelectCategory}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    // We pass a modified addToCart that simply opens the modal or adds directly.
                    // Based on plan: "Click product -> Modal".
                    // So clicking card image/title should open modal. Button can still add directly or open modal.
                    // Let's make the card clickable.
                    <div key={product.id} onClick={() => onProductClick(product)} className="cursor-pointer">
                        <ProductCard
                            product={product}
                            addToCart={(e) => {
                                e.stopPropagation(); // Prevent opening modal if clicking the button directly
                                onProductClick(product); // actually let's just open modal regardless to select size
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

