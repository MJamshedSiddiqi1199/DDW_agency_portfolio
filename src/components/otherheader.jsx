import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageHeader = ({ title, breadcrumb }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(".header-anim",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section ref={headerRef} className="relative pt-40 pb-24 bg-bg-base overflow-hidden border-b border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Left: Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="header-anim text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            {title}
                        </h1>
                        <div className="header-anim flex items-center justify-center md:justify-start gap-2 text-sm font-semibold uppercase tracking-widest text-text-muted">
                            <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
                            <span className="text-brand-primary">→</span>
                            <span className="text-white">{breadcrumb}</span>
                        </div>
                    </div>

                    {/* Right: Arched Image (as seen in screenshot) */}
                    <div className="header-anim hidden md:block">
                        <div className="w-64 h-48 rounded-t-full rounded-b-xl overflow-hidden border-4 border-white/5 shadow-2xl">
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                                alt="Header Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PageHeader;