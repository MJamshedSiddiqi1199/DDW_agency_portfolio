import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ end, suffix, label }) => {
    const countRef = useRef(null);

    useEffect(() => {
        const obj = { value: 0 };
        gsap.to(obj, {
            value: end,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: countRef.current,
                start: "top 85%",
            },
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = Math.floor(obj.value) + suffix;
                }
            }
        });
    }, [end, suffix]);

    return (
        <div className="stat-item text-center p-8 rounded-3xl bg-bg-base border border-white/5">
            <div ref={countRef} className="text-5xl font-bold text-brand-primary mb-2">0{suffix}</div>
            <div className="text-text-muted uppercase text-xs tracking-widest">{label}</div>
        </div>
    );
};

const Stats = () => {
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-item", {
                x: (i) => i % 2 === 0 ? -100 : 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                    preventOverlaps: true
                }
            });
        }, statsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={statsRef} className="py-20 bg-bg-surface border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatItem end={150} suffix="+" label="Enterprise Projects" />
                <StatItem end={50} suffix="M+" label="Client Revenue Growth" />
                <StatItem end={10} suffix="+" label="Years of Leadership" />
            </div>
        </section>
    );
};

export default Stats;
