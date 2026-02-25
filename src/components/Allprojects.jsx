import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    { title: "Enterprise Dispatch System", category: "Custom Software", img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Financial Intelligence Dashboard", category: "Custom Software", img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Supply Chain ERP Architecture", category: "Custom Software", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Healthcare Data Infrastructure", category: "Custom Software", img: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Legal Case Management Suite", category: "Custom Software", img: "https://images.pexels.com/photos/1181333/pexels-photo-1181333.jpeg?auto=compress&cs=tinysrgb&w=800" },

    { title: "SaaS Growth & SEO Strategy", category: "SEO & Marketing Infrastructure", img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Marketing Automation Hub", category: "SEO & Marketing Infrastructure", img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Omni-channel CRM Integration", category: "SEO & Marketing Infrastructure", img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Enterprise Content Authority", category: "SEO & Marketing Infrastructure", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Data-Driven Ad-Tech System", category: "SEO & Marketing Infrastructure", img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const AllProjects = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".proj-card");

        const ctx = gsap.context(() => {
            cards.forEach((card) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Once images are loaded, refresh ScrollTrigger to ensure correct trigger positions
            window.addEventListener('load', () => ScrollTrigger.refresh());
            setTimeout(() => ScrollTrigger.refresh(), 1000);
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={gridRef} className="py-24 bg-bg-base text-white min-h-screen">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projectsData.map((item, index) => (
                        <div key={index} className="proj-card group relative bg-bg-surface rounded-2xl overflow-hidden cursor-pointer flex flex-col min-h-[420px] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 shadow-xl">

                            {/* Image Area */}
                            <div className="flex-1 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Bottom Content Box */}
                            <div className="bg-[#1a1d20] p-6 relative z-10 flex justify-between items-center border-t border-white/5">
                                <div>
                                    <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2 border-l-2 border-brand-primary pl-2">
                                        {item.category}
                                    </span>
                                    <h4 className="text-xl font-bold leading-tight group-hover:text-brand-primary transition-colors max-w-[250px]">
                                        {item.title}
                                    </h4>
                                </div>

                                {/* Arrow Button */}
                                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-bg-base font-bold text-lg group-hover:-rotate-45 transition-transform duration-300 shadow-[0_0_15px_rgba(20,207,147,0.4)]">
                                    ↗
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Pagination Section */}
                <div className="flex justify-center items-center gap-2">
                    <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-bg-base hover:border-brand-primary transition-all">
                        ←
                    </button>
                    <button className="w-10 h-10 rounded bg-brand-primary text-bg-base font-bold flex items-center justify-center">
                        1
                    </button>
                    <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-bg-base hover:border-brand-primary transition-all">
                        2
                    </button>
                    <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-bg-base hover:border-brand-primary transition-all">
                        3
                    </button>
                    <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-bg-base hover:border-brand-primary transition-all">
                        →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AllProjects;