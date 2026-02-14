import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 relative">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Comparison />
                <SocialProof />
                <Pricing />
            </main>
            <Footer />

            {/* Global Background Glow for Ambiance */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}

export default App;
