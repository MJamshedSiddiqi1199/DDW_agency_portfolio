import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        // Use a slight delay to ensure the DOM is ready but start from a safe state
        const ctx = gsap.context(() => {
            gsap.fromTo(navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
            );
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-[100] bg-bg-base/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <img src="/logo.jpeg" alt="DDW Agency Logo" className="h-10 w-auto rounded-lg object-contain transition-transform group-hover:scale-105" />
                    <span className="text-white font-bold tracking-tight text-lg">DDW Agency</span>
                </Link>

                <ul className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
                    <li className="hover:text-brand-primary cursor-pointer transition-all duration-300 hover:tracking-[0.3em]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-brand-primary cursor-pointer transition-all duration-300 hover:tracking-[0.3em]">
                        <a href="/#solutions">Services</a>
                    </li>
                    <li className="hover:text-brand-primary cursor-pointer transition-all duration-300 hover:tracking-[0.3em]">
                        <Link to="/projects">Portfolio</Link>
                    </li>
                    {/* <li className="hover:text-brand-primary cursor-pointer transition-all duration-300 hover:tracking-[0.3em]">
                        <a href="https://ddwstudio.com" target="_blank" rel="noopener noreferrer">Studio</a>
                    </li> */}
                </ul>

                {/* Empty div to maintain spacing logic if needed, or just let flex handle it */}
                <div className="hidden md:block w-[40px]"></div>
            </div>
        </nav>
    );
};

export default Navbar;