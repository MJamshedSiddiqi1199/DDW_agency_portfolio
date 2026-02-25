import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
];

const Collaborators = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const ctx = gsap.context(() => {
            // Entry animation for title
            gsap.from(".collab-title", {
                x: -50,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".collab-title",
                    start: "top 90%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            // Entry animation for marquee area
            gsap.from(".marquee-container", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".marquee-container",
                    start: "top 90%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            // Seamless Loop Logic
            const totalWidth = marquee.scrollWidth;
            const singleSetWidth = totalWidth / 3;

            gsap.to(marquee, {
                x: -singleSetWidth,
                duration: 6, // Adjusted for a more balanced high-speed feel
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % singleSetWidth)
                },
                force3D: true
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-bg-surface border-y border-white/5 py-10 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

                {/* Left Side: Title */}
                <div className="lg:w-1/4 w-full text-center lg:text-left collab-title">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tighter">
                        Our <br /> Collaborators
                    </h3>
                </div>

                {/* Right Side: Marquee Logos */}
                <div className="lg:w-3/4 w-full relative overflow-hidden h-12 flex items-center marquee-container">
                    {/* Vertical Separator Line */}
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10 hidden lg:block"></div>

                    {/* Removed pl-10 to ensure seamless alignment */}
                    <div ref={marqueeRef} className="flex items-center gap-20 whitespace-nowrap">
                        {/* Content ko triple render kiya taake infinite loop bina gap ke chale */}
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Partner"
                                    className="h-7 md:h-9 object-contain cursor-pointer transition-transform hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Collaborators;