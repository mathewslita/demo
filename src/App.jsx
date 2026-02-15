import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CustomService from './components/CustomService';
import Contact from './components/Contact';
import ServicesShowcase from './components/ServicesShowcase';
import { products as initialProducts } from './data/products';

function App() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    // Extract categories dynamically
    const categories = [...new Set(initialProducts.map(p => p.category))];

    // Filter products
    const filteredProducts = selectedCategory === "Todos"
        ? initialProducts
        : initialProducts.filter(p => p.category === selectedCategory);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id && item.selectedSize === product.selectedSize);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedSize === product.selectedSize
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        if (selectedProduct) setSelectedProduct(null);
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, size) => {
        setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.selectedSize === size)));
    };

    const updateQuantity = (productId, size, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === productId && item.selectedSize === size) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const handleNavigate = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Offset for sticky header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-secondary font-sans text-neutral selection:bg-primary/30">
            <Header
                cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
                onNavigate={handleNavigate}
            />

            {/* Cart Drawer */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                addToCart={addToCart}
            />

            {/* Hero Section */}
            <section id="hero" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                    backgroundImage: "url('/portada.jpg')" // Local hero image provided by user
                }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-neutral mix-blend-multiply"></span>
                </div>

                <div className="container relative mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                            <div className="animate-fade-in-up">
                                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                                    Uniformes & Personalización
                                </span>
                                <h1 className="text-white font-serif font-bold text-5xl sm:text-6xl md:text-7xl drop-shadow-2xl leading-tight mb-6">
                                    Eleva la Imagen <br /> de tu Empresa & Hogar
                                </h1>
                                <p className="mt-4 text-xl text-secondary/90 drop-shadow-md font-medium leading-relaxed max-w-3xl mx-auto">
                                    Desde uniformes corporativos premium hasta bordados artísticos para tu hogar. Calidad que se ve y se siente.
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                                    <button
                                        onClick={() => handleNavigate('catalog')}
                                        className="bg-primary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-accent hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        Ver Catálogo <ArrowRight size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleNavigate('custom')}
                                        className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300"
                                    >
                                        Servicios Corporativos
                                    </button>
                                </div>

                                <div className="mt-12 flex justify-center gap-8 text-white/80 text-sm font-bold tracking-wider uppercase">
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Calidad Garantizada</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Bordados HD</div>
                                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Envíos Nacionales</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Section */}
            <main>
                {/* Custom Services (Corporate) */}
                <CustomService />

                {/* Catalog */}
                <Catalog
                    products={filteredProducts}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    onProductClick={setSelectedProduct}
                    addToCart={addToCart}
                />

                {/* Services Showcase (Replaces Embroidery) */}
                <ServicesShowcase addToCart={addToCart} />

                {/* Contact Section */}
                <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-neutral text-secondary py-16 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 font-serif tracking-tighter">F-IRST<span className="text-primary"> CORP</span></h3>
                        <p className="text-secondary/60 max-w-sm leading-relaxed mb-6">
                            Expertos en imagen corporativa y dotación industrial. Calidad que define tu marca.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Explora</h4>
                        <ul className="space-y-4 text-secondary/60">
                            <li><button onClick={() => handleNavigate('catalog')} className="hover:text-primary transition-colors">Catálogo Completo</button></li>
                            <li><button onClick={() => handleNavigate('custom')} className="hover:text-primary transition-colors">Servicios Empresas</button></li>
                            <li><button onClick={() => handleNavigate('contact')} className="hover:text-primary transition-colors">Contacto</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Contáctanos</h4>
                        <p className="text-secondary/60 mb-2">Quito, Ecuador</p>
                        <p className="text-secondary/60 mb-4">+593 99 123 4567</p>
                        <p className="text-xs text-secondary/30 mt-4">
                            © 2024 Moda Cálida Corporativo.<br />Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
