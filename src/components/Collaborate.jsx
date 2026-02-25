import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Collaborate = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background slow scale in
            gsap.from(".collab-bg", {
                scale: 1.2,
                duration: 2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            // Text from left
            gsap.from(".collab-text", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 w-full overflow-hidden bg-bg-base border-y border-border-subtle">

            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg"
                    alt="Collaboration"
                    className="collab-bg w-full h-full object-cover object-right"
                />
            </div>
            {/* Dark Gradient: Left side solid dark, right side faded */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg-base via-bg-base/90 to-bg-base/40 md:to-transparent"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-20">
                <div className="max-w-2xl">

                    {/* Badge / Label */}
                    <div className="collab-text inline-flex items-center gap-3 px-5 py-2 border border-brand-primary/30 mb-8 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#14cf93]"></span>
                        <span className="text-text-muted text-[11px] font-bold tracking-[0.2em] uppercase">
                            Let's Collaborate
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#14cf93]"></span>
                    </div>

                    {/* Heading with Outline Text Effect */}
                    <h2 className="collab-text text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] mb-12 tracking-tight text-white">
                        Ready to <br />
                        <span className="text-transparent [-webkit-text-stroke:2px_#a1a1aa] hover:[-webkit-text-stroke:2px_#14cf93] transition-colors duration-500">
                            work with us?
                        </span>
                    </h2>

                    {/* Sharp CTA Button */}
                    <div className="collab-text">
                        <a
                            href="https://calendly.com/digi-dreamworks/onboarding-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-primary text-bg-base font-bold text-sm uppercase tracking-wider px-10 py-5 hover:bg-white hover:text-bg-base transition-colors duration-300"
                        >
                            Book a call
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Collaborate;