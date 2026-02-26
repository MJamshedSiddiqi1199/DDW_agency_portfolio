import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LoadingScreen = ({ isLoading }) => {
    const [shouldRender, setShouldRender] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setShouldRender(true);
            }, 0);
        }
    }, [isLoading]);

    // Lock scroll when loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
            // Scroll to top to ensure entry animation is consistent
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLoading]);

    // Fade out logic: Stay in DOM until opacity transition ends
    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 1000); // Increased to match longer translate transition
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    // Particles initialize function
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#02020c] flex items-center justify-center overflow-hidden transition-transform duration-1000 ease-in-out ${isLoading ? 'translate-y-0' : 'translate-y-[-100%]'
                }`}
        >

            {/* --- 1. The Interactive Particle Network --- */}
            <Particles
                id="tsparticles-loading"
                init={particlesInit}
                className="absolute inset-0"
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.8,
                                    color: "#14cf93" // Using brand color
                                }
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#14cf93", "#3a7bd5"],
                        },
                        links: {
                            color: "#14cf93",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.6,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* --- 2. Center Loading Text/Spinner with Glow --- */}
            <div className={`relative z-10 flex flex-col items-center justify-center`}>
                {/* Glowing Spinner */}
                <div className="w-20 h-20 mb-8 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-t-[#14cf93] border-r-transparent border-b-[#3a7bd5] border-l-transparent animate-spin shadow-[0_0_30px_rgba(20,207,147,0.3)]"></div>
                    <div className="absolute inset-2 rounded-full border border-t-white/20 border-r-transparent border-b-white/20 border-l-transparent animate-spin-slow opacity-50"></div>
                </div>

                {/* Text */}
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-white tracking-[0.4em] uppercase animate-pulse relative">
                        Loading
                        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#14cf93] to-transparent blur-[2px]"></span>
                    </h2>
                    <p className="mt-6 text-white/40 text-xs tracking-[0.2em] uppercase font-light">Digital Dream Works</p>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
