"use client";
import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
            <button
                onClick={() => onSelectCategory('Todos')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
          ${selectedCategory === 'Todos'
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-white border-neutral/10 text-neutral hover:bg-secondary hover:border-primary/30'}
        `}
            >
                Todos
            </button>

            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
            ${selectedCategory === category
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                            : 'bg-white border-neutral/10 text-neutral hover:bg-secondary hover:border-primary/30'}
          `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

