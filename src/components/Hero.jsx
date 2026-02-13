"use client";

import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-grid-white">
            {/* Radial Gradient for Spotlight Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <div className="container-wide relative z-10 flex flex-col justify-center h-full">

                {/* Intro Tag */}
                <div className="animate-fade-in-up mb-4">
                    <span className="text-[var(--accent)] font-mono text-xs md:text-sm tracking-[0.3em] uppercase border border-[var(--accent)]/30 px-3 py-1 rounded-full bg-[var(--accent)]/5">
                        Open to Work
                    </span>
                </div>

                {/* Main Name - The Protagonist */}
                <div className="relative">
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-difference">
                        <span className="block text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            Uday
                        </span>
                        <span className="block text-outline text-white/5 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            Meka
                        </span>
                    </h1>

                    {/* Decorative "Ghost" Text for Depth */}
                    <h1 className="absolute top-0 left-1 text-[12vw] leading-[0.85] font-black tracking-tighter uppercase opacity-5 pointer-events-none select-none" aria-hidden="true">
                        <span className="block text-transparent">Uday</span>
                        <span className="block text-white">Meka</span>
                    </h1>
                </div>

                {/* Supporting Slogan - Secondary */}
                <div className="mt-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <p className="text-xl md:text-2xl text-[var(--muted)] font-light leading-relaxed">
                        Building <span className="text-white font-medium">Digital Systems</span> that matter.
                        Merging scalable architecture with agentic intelligence.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs overflow-hidden">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                        <div className="absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/5 transition-colors duration-300">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest vertical-text" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <div className="h-12 w-[1px] bg-white/20"></div>
            </div>
        </section>
    );
};

export default Hero;
