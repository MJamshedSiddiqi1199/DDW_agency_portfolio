// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Hero = () => {
//     const textRef = useRef(null);
//     const imgRef = useRef(null);
//     const circleRef = useRef(null);
//     const satisfactionRef = useRef(null);

//     useEffect(() => {
//         gsap.set(".gsap-reveal", { autoAlpha: 0 });

//         const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//         tl.to(textRef.current, {
//             autoAlpha: 1,
//             x: 0,
//             duration: 1.5,
//             startAt: { x: -150 }
//         })
//             .to(imgRef.current, {
//                 autoAlpha: 1,
//                 x: 0,
//                 duration: 1.5,
//                 startAt: { x: 150 }
//             }, "-=1.2")
//             .to(circleRef.current, {
//                 rotation: 360,
//                 duration: 20,
//                 repeat: -1,
//                 ease: "none"
//             });

//         // Satisfaction counter animation
//         const obj = { value: 0 };
//         gsap.to(obj, {
//             value: 100,
//             duration: 2.5,
//             delay: 1.5,
//             ease: "power2.out",
//             onUpdate: () => {
//                 if (satisfactionRef.current) {
//                     satisfactionRef.current.innerText = Math.floor(obj.value) + "%";
//                 }
//             }
//         });
//     }, []);

//     return (
//         <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
//             {/* Background Decorative Mesh/Glow */}
//             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10"></div>

//             <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">

//                 {/* Left: Text Content */}
//                 <div className="flex-1 text-center lg:text-left gsap-reveal z-10" ref={textRef}>
//                     <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8">
//                         Strategic Software <br />
//                         Consulting & <br />
//                         <span className="text-brand-primary">Marketing Systems.</span>
//                     </h1>
//                     <p className="text-text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
//                         We empower enterprise brands with custom software architecture, AI integration, and high-performance marketing infrastructure.
//                     </p>
//                     <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
//                         <a
//                             href="https://calendly.com/digi-dreamworks/onboarding-call"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn-primary flex items-center gap-2 group cursor-pointer"
//                         >
//                             Book a Strategy Call
//                             <span className="group-hover:translate-x-1 transition-transform">→</span>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right: Image Layout */}
//                 <div ref={imgRef} className="flex-1 relative gsap-reveal">
//                     <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">

//                         {/* 1. Main Circular Image - Agency Team */}
//                         <div className="absolute inset-0 rounded-full overflow-hidden border-[12px] border-white/5 z-20">
//                             <img
//                                 src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                                 alt="Modern Agency Team"
//                                 className="w-full h-full object-cover"
//                                 loading="eager"
//                             />
//                         </div>

//                         {/* 2. Rotating Text Circle Border */}
//                         <div ref={circleRef} className="absolute -inset-4 border border-dashed border-brand-primary/40 rounded-full z-10"></div>

//                         {/* 3. Small Floating Image 1 (Top Right) - Tech/Meeting */}
//                         <div className="absolute -top-4 -right-4 w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-4 border-bg-base z-30 shadow-2xl hidden md:block">
//                             <img
//                                 src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
//                                 alt="Small Business Meeting"
//                                 className="w-full h-full object-cover"
//                                 loading="eager"
//                             />
//                         </div>

//                         {/* 4. Small Floating Image 2 (Bottom Left) - Design/Creative */}
//                         <div className="absolute -bottom-6 -left-10 w-40 h-40 md:w-56 md:h-48 rounded-3xl overflow-hidden border-4 border-bg-base z-30 shadow-2xl hidden md:block">
//                             <img
//                                 src="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=600"
//                                 alt="Creative Designer"
//                                 className="w-full h-full object-cover"
//                                 loading="eager"
//                             />
//                         </div>

//                         {/* 5. Success Badge (Bottom Right) */}
//                         <div className="absolute bottom-10 -right-12 bg-brand-primary p-4 md:p-6 rounded-full z-40 shadow-xl flex flex-col items-center justify-center text-bg-base leading-tight">
//                             <span ref={satisfactionRef} className="text-xl md:text-2xl font-black">0%</span>
//                             <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-center">Satisfaction</span>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Hero;



import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const circleRef = useRef(null);
    const satisfactionRef = useRef(null);

    // Particles Initialize Function
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        gsap.set(".gsap-reveal", { autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(textRef.current, {
            autoAlpha: 1,
            x: 0,
            duration: 1.5,
            startAt: { x: -150 }
        })
            .to(imgRef.current, {
                autoAlpha: 1,
                x: 0,
                duration: 1.5,
                startAt: { x: 150 }
            }, "-=1.2")
            .to(circleRef.current, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });

        // Satisfaction counter animation
        const obj = { value: 0 };
        gsap.to(obj, {
            value: 100,
            duration: 2.5,
            delay: 1.5,
            ease: "power2.out",
            onUpdate: () => {
                if (satisfactionRef.current) {
                    satisfactionRef.current.innerText = Math.floor(obj.value) + "%";
                }
            }
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">

            {/* --- NEW: Interactive Particles Background --- */}
            <Particles
                id="hero-particles"
                init={particlesInit}
                className="absolute inset-0 z-0 pointer-events-auto" // Added pointer-events for hover interaction
                options={{
                    fullScreen: { enable: false }, // zaroori hai taaki sirf is section mein rahay
                    background: {
                        color: { value: "transparent" },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble", // Hover effect jo text ko disturb nahi karta
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 4,
                                opacity: 0.8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#14cf93", "#ffffff"], // Green and White
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.05, // Bohot light rakha hai taaki text parha jaye
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: true,
                            speed: 0.5, // Slow movement
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 1000 },
                            value: 40, // Kam particles taaki clutter na ho
                        },
                        opacity: {
                            value: 0.3, // Overall low opacity
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 }, // Chotay dots
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Existing Background Decorative Mesh/Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pointer-events-none">

                {/* Important: Humne uper div mein pointer-events-none lagaya hai, 
                    isliye neeche text content aur buttons par pointer-events-auto lagana hoga 
                    taaki button click ho sake aur mouse hover particles par bhi kaam kare. 
                */}

                {/* Left: Text Content */}
                <div className="flex-1 text-center lg:text-left gsap-reveal pointer-events-auto" ref={textRef}>
                    {/* Added a subtle text shadow for extra readability over particles */}
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.05] mb-8 drop-shadow-lg">
                        Strategic Software <br />
                        Consulting & <br />
                        <span className="text-brand-primary">Marketing Systems.</span>
                    </h1>
                    <p className="text-text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-md bg-bg-base/30 backdrop-blur-[2px] rounded-lg p-2 -ml-2">
                        We empower enterprise brands with custom software architecture, AI integration, and high-performance marketing infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                        <a
                            href="https://calendly.com/digi-dreamworks/onboarding-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2 group cursor-pointer shadow-[0_0_20px_rgba(20,207,147,0.3)]"
                        >
                            Book a Strategy Call
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                {/* Right: Image Layout */}
                <div ref={imgRef} className="flex-1 relative gsap-reveal pointer-events-auto">
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">

                        {/* 1. Main Circular Image */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-[12px] border-white/5 z-20 shadow-2xl">
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Modern Agency Team"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* 2. Rotating Text Circle Border */}
                        <div ref={circleRef} className="absolute -inset-4 border border-dashed border-brand-primary/40 rounded-full z-10"></div>

                        {/* 3. Small Floating Image 1 (Top Right) */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-4 border-bg-base z-30 shadow-2xl hidden md:block">
                            <img
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Small Business Meeting"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* 4. Small Floating Image 2 (Bottom Left) */}
                        <div className="absolute -bottom-6 -left-10 w-40 h-40 md:w-56 md:h-48 rounded-3xl overflow-hidden border-4 border-bg-base z-30 shadow-2xl hidden md:block">
                            <img
                                src="https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Creative Designer"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* 5. Success Badge (Bottom Right) */}
                        <div className="absolute bottom-10 -right-12 bg-brand-primary p-4 md:p-6 rounded-full z-40 shadow-xl flex flex-col items-center justify-center text-bg-base leading-tight">
                            <span ref={satisfactionRef} className="text-xl md:text-2xl font-black">0%</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-center">Satisfaction</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;