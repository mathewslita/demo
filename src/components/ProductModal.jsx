"use client";
import React, { useState } from 'react';
import { X, ShoppingBag, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ProductModal({ product, isOpen, onClose, addToCart }) {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedServices, setSelectedServices] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sizes = ['S', 'M', 'L', 'XL'];
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
        }
    }, [isOpen, product]);

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        if (product?.images?.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        if (product?.images?.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
        }
    };

    const toggleService = (serviceId) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    if (!isOpen || !product) return null;

    const sizeCharts = {
        tops: {
            title: "Guía de Medidas (Estándar Aproximado)",
            headers: ["Talla", "Ancho (Pecho)", "Largo"],
            rows: [
                ["S", "48-50 cm", "68-70 cm"],
                ["M", "51-53 cm", "71-72 cm"],
                ["L", "54-57 cm", "73-75 cm"],
                ["XL", "58-61 cm", "76-78 cm"],
            ]
        },
        bottoms: {
            title: "Guía de Medidas (Pantalones)",
            headers: ["Talla", "Cintura (Aprox)", "Largo Pantalón"],
            rows: [
                ["S  (30)", "76-80 cm", "100 cm"],
                ["M  (32)", "81-85 cm", "102 cm"],
                ["L  (34)", "86-90 cm", "104 cm"],
                ["XL (36)", "91-95 cm", "106 cm"],
            ]
        }
    };

    const getChartType = () => {
        const lowerName = product.name.toLowerCase();
        if (lowerName.includes("pantalón") || lowerName.includes("falda")) return "bottoms";
        return "tops";
    };

    const currentChart = sizeCharts[getChartType()];

    const allServices = [
        { id: 701, name: "Bordado de Logo", price: 5.00, allowedCategories: 'all' },
        {
            id: 702,
            name: "Estampado (DTF/Serigrafía)",
            price: 4.50,
            allowedCategories: ["Sector Industrial/Operativo", "Sector Escolar", "Básicos y Complementos"]
        }
    ];

    const availableServices = allServices.filter(service => {
        const isCategoryAllowed = service.allowedCategories === 'all' || service.allowedCategories.includes(product.category);

        if (service.name.includes("Estampado")) {
            const forbiddenKeywords = ['falda', 'pantalón', 'gorro'];
            const productNameLower = product.name.toLowerCase();
            const hasForbiddenKeyword = forbiddenKeywords.some(keyword => productNameLower.includes(keyword));

            if (hasForbiddenKeyword) return false;
        }

        return isCategoryAllowed;
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] animate-fade-in-up">
                {showSizeGuide && (
                    <div className="absolute inset-0 z-20 bg-white/95 flex items-center justify-center p-6 animate-fade-in">
                        <div className="w-full max-w-md">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-neutral">{currentChart.title}</h3>
                                <button onClick={() => setShowSizeGuide(false)} className="p-2 hover:bg-neutral/10 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral/10">
                                <table className="w-full text-sm text-left">
                                    <thead className="uppercase text-neutral/50 font-bold border-b border-neutral/10">
                                        <tr>
                                            {currentChart.headers.map(h => <th key={h} className="py-2 px-2">{h}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody className="text-neutral">
                                        {currentChart.rows.map((row, i) => (
                                            <tr key={i} className="border-b border-neutral/5 last:border-0 hover:bg-neutral/5">
                                                {row.map((cell, j) => <td key={j} className={`py-3 px-2 ${j === 0 ? 'font-bold' : ''}`}>{cell}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-neutral/50 mt-4 text-center">
                                * Medidas aproximadas. Pueden variar +/- 1cm según producción.
                            </p>
                        </div>
                    </div>
                )}


                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full md:hidden"
                >
                    <X size={24} />
                </button>

                <div className="w-full md:w-1/2 flex flex-col min-h-[300px] md:min-h-[500px] relative bg-neutral/5">
                    <div
                        className={`relative flex-grow w-full min-h-[250px] md:min-h-[400px] bg-neutral/5 group ${product?.images?.length > 1 ? 'cursor-pointer' : ''}`}
                        onClick={product?.images?.length > 1 ? nextImage : undefined}
                        title={product?.images?.length > 1 ? "Clic para ver la siguiente imagen" : ""}
                    >
                        <Image
                            src={product.images?.[currentImageIndex] || product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain transition-opacity duration-300"
                        />
                        {product?.images?.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-md text-neutral opacity-0 group-hover:opacity-100 transition-all md:flex hidden hover:scale-110"
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow-md text-neutral opacity-0 group-hover:opacity-100 transition-all md:flex hidden hover:scale-110"
                                    aria-label="Siguiente imagen"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Indicadores (dots) para móviles y PC */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    {product.images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === i ? 'bg-primary w-4' : 'bg-neutral/40'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div className="flex gap-3 p-4 overflow-x-auto bg-white border-t border-neutral/10 shrink-0 hide-scrollbar">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === i ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <Image src={img} alt={`${product.name} ángulo ${i + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="inline-block px-3 py-1 bg-secondary text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                {product.category}
                            </span>
                            <h2 className="text-3xl font-bold text-neutral mb-2">{product.name}</h2>
                            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                        </div>
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

                    {product.category !== "Servicios de Personalización" && (
                        <div className="mt-8">
                            <div className="flex justify-between items-end mb-3">
                                <h3 className="text-sm font-bold text-neutral uppercase">Selecciona tu Talla</h3>
                                <button
                                    onClick={() => setShowSizeGuide(true)}
                                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                >
                                    <span className="text-lg">📏</span> Guía de Tallas
                                </button>
                            </div>
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
                    )}

                    {product.category !== "Servicios de Personalización" && (
                        <div className="mt-6 p-4 bg-neutral/5 rounded-xl border border-neutral/10">
                            <h3 className="text-sm font-bold text-neutral uppercase mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span> Perzonalización
                            </h3>
                            <div className="space-y-2">
                                {availableServices.map(service => (
                                    <label key={service.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral/10 cursor-pointer hover:border-primary/30 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedServices.includes(service.id) ? 'bg-primary border-primary text-white' : 'border-neutral/30'}`}>
                                                {selectedServices.includes(service.id) && <Check size={14} />}
                                            </div>
                                            <span className="font-medium text-neutral">{service.name}</span>
                                        </div>
                                        <span className="text-sm font-bold text-accent">+${service.price.toFixed(2)}</span>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => toggleService(service.id)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-8">
                        <button
                            onClick={() => {
                                addToCart({ ...product, selectedSize });
                                selectedServices.forEach(serviceId => {
                                    const serviceInfo = availableServices.find(s => s.id === serviceId);
                                    addToCart({
                                        id: serviceInfo.id,
                                        name: serviceInfo.name,
                                        price: serviceInfo.price,
                                        image: "/placeholder.svg",
                                        category: "Servicios de Personalización",
                                        selectedSize: "N/A"
                                    });
                                });
                                onClose();
                                setSelectedServices([]);
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

