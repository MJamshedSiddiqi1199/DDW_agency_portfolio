import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            tl.from(".about-header", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
                .from(".about-left", {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.4")
                .from(".about-content", {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-bg-base text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Area */}
                <div className="mb-16 about-header">
                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-brand-primary">Our DNA</h4>
                    <p className="text-text-muted max-w-2xl">
                        Bridging The Gap Between Vision And Execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Large Image */}
                    <div className="lg:col-span-4 relative about-left">
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                                alt="Team collaboration"
                                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Middle Content Area */}
                    <div className="lg:col-span-5 about-content pt-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            Bridging The Gap Between Vision And Execution.
                        </h2>
                        <p className="text-text-muted mb-12">
                            DDW Agency provides high-level technical services and infrastructure. We operate separately from DDW Studio to ensure your business gets tailored, production-ready solutions that scale with your goals.
                        </p>

                        {/* Features Row */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                            <div className="flex-1 min-w-[200px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_#14cf93]"></div>
                                    <h3 className="text-lg font-bold">Strategic Advisory</h3>
                                </div>
                                <p className="text-sm text-text-muted leading-relaxed">High-margin consulting and architectural oversight.</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_#14cf93]"></div>
                                    <h3 className="text-lg font-bold">Execution Excellence</h3>
                                </div>
                                <p className="text-sm text-text-muted leading-relaxed">Building robust, enterprise-grade systems.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Area + Badge */}
                    <div className="lg:col-span-3 flex flex-col items-center gap-12 about-content reveal-up">
                        <div className="rounded-[2rem] overflow-hidden border border-white/10 w-full">
                            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" alt="Discussion" className="w-full h-auto object-cover" />
                        </div>

                        {/* Neon Spinning Badge */}
                        <div className="relative w-40 h-40 bg-brand-primary rounded-full flex items-center justify-center text-bg-base overflow-hidden group">
                            <div className="absolute inset-0 border-[2px] border-dashed border-bg-base/30 rounded-full animate-spin-slow"></div>
                            <div className="text-center z-10">
                                <div className="text-4xl font-black leading-none">10</div>
                                <div className="text-xs font-bold uppercase tracking-widest mt-1">Years</div>
                            </div>
                            {/* Rotating Text Plate (SVG logic simplified) */}
                            <div className="absolute inset-2 border border-bg-base/20 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;