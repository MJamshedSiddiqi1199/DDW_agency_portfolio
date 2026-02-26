import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Entrance animation for navbar
        const ctx = gsap.context(() => {
            gsap.fromTo(navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
            );
        }, navRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Mobile menu animation
        const ctx = gsap.context(() => {
            if (isMenuOpen) {
                const tl = gsap.timeline();

                tl.set(mobileMenuRef.current, { display: 'flex' })
                    .fromTo(mobileMenuRef.current,
                        { x: '100%', opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
                    )
                    .fromTo(".menu-bg-glow",
                        { opacity: 0, scale: 0.5 },
                        { opacity: 0.3, scale: 1, duration: 1.5, ease: "power2.out" },
                        "-=0.4"
                    )
                    .fromTo(".mobile-link-text",
                        { y: 100, rotate: 5 },
                        { y: 0, rotate: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" },
                        "-=1"
                    )
                    .fromTo(".mobile-link-line",
                        { scaleX: 0 },
                        { scaleX: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
                        "-=0.8"
                    );
            } else {
                gsap.to(mobileMenuRef.current, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.6,
                    ease: "power4.in",
                    onComplete: () => {
                        gsap.set(mobileMenuRef.current, { display: 'none' });
                    }
                });
            }
        });
        return () => ctx.revert();
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 0);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/#solutions', isAnchor: true },
        { name: 'Portfolio', path: '/projects' },
    ];

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 w-full z-[100] bg-bg-base/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.jpeg" alt="DDW Agency Logo" className="h-10 w-auto rounded-lg object-contain transition-transform group-hover:scale-105" />
                        <span className="text-white font-bold tracking-tight text-lg">DDW Agency</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
                        {navLinks.map((link) => (
                            <li key={link.name} className="hover:text-brand-primary cursor-pointer transition-all duration-300 hover:tracking-[0.3em]">
                                {link.isAnchor ? (
                                    <a href={link.path}>{link.name}</a>
                                ) : (
                                    <Link to={link.path}>{link.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col gap-2 focus:outline-none z-[110] relative group px-2 py-1"
                        aria-label="Toggle Menu"
                    >
                        <span className={`w-6 h-0.5 bg-brand-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5 w-7' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-brand-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5 w-7' : ''}`}></span>
                    </button>

                    <div className="hidden md:block w-[40px]"></div>
                </div>
            </nav>

            {/* Backdrop for side menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[102] md:hidden transition-opacity duration-500"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Side Menu Overlay */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 bottom-0 w-[80%] z-[105] bg-bg-surface/98 backdrop-blur-2xl flex-col items-center justify-center hidden md:hidden overflow-hidden border-l border-white/5 shadow-2xl"
                style={{ transform: 'translateX(100%)', opacity: 0 }}
            >
                {/* Cinematic Background Elements */}
                <div className="menu-bg-glow absolute top-[20%] right-[-20%] w-[100%] h-[40%] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

                <ul className="flex flex-col items-center gap-10 text-2xl font-bold uppercase tracking-[0.3em] text-white relative z-10 w-full px-8">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mobile-link group w-full text-center">
                            <div className="overflow-hidden mb-1">
                                {link.isAnchor ? (
                                    <a
                                        href={link.path}
                                        className="mobile-link-text hover:text-brand-primary transition-colors inline-block py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="mobile-link-text hover:text-brand-primary transition-colors inline-block py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                            <div className="mobile-link-line h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent w-full scale-x-0 origin-center"></div>
                        </li>
                    ))}
                </ul>

                {/* Bottom Branding */}
                <div className="absolute bottom-10 text-center z-10 opacity-30 w-full">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-text-muted">DDW Agency</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;
