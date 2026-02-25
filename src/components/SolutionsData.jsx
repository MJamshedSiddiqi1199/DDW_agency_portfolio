// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';

// // Swiper styles import karein
// import 'swiper/css';
// import 'swiper/css/navigation';

// const solutionsData = [
//     {
//         title: "Cyber Security",
//         desc: "Protecting computer systems, networks, and data from theft, damage, or unauthorized access with advanced protocols.",
//         features: ["Threat Detection", "Secure Infrastructure"],
//         image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//             </svg>
//         )
//     },
//     {
//         title: "Data Analytics",
//         desc: "Extracting insights from large datasets to drive informed business decisions and strategic planning.",
//         features: ["Predictive Analysis", "Big Data Insights"],
//         image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
//             </svg>
//         )
//     },
//     {
//         title: "Web Development",
//         desc: "Creating high-performance websites and web applications tailored to modern digital needs.",
//         features: ["Full-stack Solutions", "Responsive Design"],
//         image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" />
//             </svg>
//         )
//     },
//     {
//         title: "UI/UX Design",
//         desc: "Designing intuitive and visually stunning user interfaces that provide exceptional user experiences.",
//         features: ["User Research", "Prototyping"],
//         image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
//             </svg>
//         )
//     },
//     {
//         title: "Cloud Solutions",
//         desc: "Scalable cloud infrastructure management to optimize performance and reduce operational costs.",
//         features: ["AWS/Azure Setup", "Serverless Architecture"],
//         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17.5 19a5.5 5.5 0 0 0 2.5-10.5 8.5 8.5 0 1 0-15 4.5 4.5 4.5 0 0 0 2.5 8.5h10z" />
//             </svg>
//         )
//     },
//     {
//         title: "Digital Marketing",
//         desc: "Boosting brand visibility and engagement through strategic digital marketing and SEO campaigns.",
//         features: ["SEO Optimization", "Social Media Growth"],
//         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
//         icon: (
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 20v-6M6 20V10M18 20V4" />
//             </svg>
//         )
//     }
// ];

// const Solutions = () => {
//     return (
//         <section className="py-24 bg-bg-base text-white overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//                     <div className="max-w-2xl">
//                         <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Solutions</h2>
//                         <p className="text-text-muted text-lg leading-relaxed">
//                             Empowering your digital journey with state-of-the-art technology services tailored for growth and security.
//                         </p>
//                     </div>

//                     {/* Custom Swiper Buttons */}
//                     <div className="flex gap-4">
//                         <button className="prev-btn w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-bg-base transition-all duration-300">
//                             <span className="text-2xl">←</span>
//                         </button>
//                         <button className="next-btn w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-bg-base transition-all duration-300">
//                             <span className="text-2xl">→</span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Swiper Slider */}
//                 <Swiper
//                     modules={[Navigation, Autoplay]}
//                     navigation={{
//                         prevEl: '.prev-btn',
//                         nextEl: '.next-btn',
//                     }}
//                     autoplay={{
//                         delay: 1,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true
//                     }}
//                     loop={true}
//                     speed={5000}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     className="solution-slider overflow-hidden rounded-[2.5rem]"
//                 >
//                     {solutionsData.map((item, index) => (
//                         <SwiperSlide key={index} className="!h-auto">
//                             <div className="relative h-full flex flex-col items-start bg-bg-surface p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden premium-shadow">

//                                 {/* Background Image with Enhanced Visibility */}
//                                 <div className="absolute inset-0 z-0">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-20 group-hover:opacity-40"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/80 to-transparent"></div>
//                                 </div>

//                                 {/* Content Layer */}
//                                 <div className="relative z-10 w-full flex flex-col h-full">
//                                     {/* Icon Container */}
//                                     <div className="mb-8 w-16 h-16 bg-bg-base/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-primary/50 group-hover:bg-brand-primary/20 transition-all duration-500 text-brand-primary">
//                                         {item.icon}
//                                     </div>

//                                     {/* Title & Desc */}
//                                     <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
//                                         {item.title}
//                                     </h4>
//                                     <p className="text-text-muted mb-8 text-sm md:text-base leading-relaxed flex-grow">
//                                         {item.desc}
//                                     </p>

//                                     {/* Features List */}
//                                     <ul className="space-y-4 mb-10">
//                                         {item.features.map((feature, idx) => (
//                                             <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-medium text-text-muted group-hover:text-text-main transition-colors">
//                                                 <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_var(--color-brand-primary)]"></div>
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary group/link mt-auto">
//                                         Read More
//                                         <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// };

// export default Solutions;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutionsData = [
    {
        title: "Custom Software Development",
        desc: "High-performance web applications and bespoke architecture tailored for high-stakes enterprise operations.",
        features: ["Scalable Architecture", "Bespoke System Design"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" />
            </svg>
        )
    },
    {
        title: "AI Development & Integration",
        desc: "Seamlessly integrating Large Language Models and automation into your existing enterprise workflows.",
        features: ["LLM Infrastructure", "Workflow Automation"],
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12L2.1 12.3" /><path d="M12 2a10 10 0 0 0-10 10h10V2z" /><path d="M12 12l9.9-.3" />
            </svg>
        )
    },
    {
        title: "Cloud Infrastructure & DevOps",
        desc: "Secure, scalable cloud environments and automated pipelines to drive continuous deployment and absolute stability.",
        features: ["Automated Pipelines", "Secure Cloud Scaling"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19a5.5 5.5 0 0 0 2.5-10.5 8.5 8.5 0 1 0-15 4.5 4.5 4.5 0 0 0 2.5 8.5h10z" />
            </svg>
        )
    },
    {
        title: "Strategic Consulting",
        desc: "Fractional CTO services and high-level technical audits to guide your architectural roadmap and avoid costly mistakes.",
        features: ["Technical Audits", "Architectural Roadmap"],
        image: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        )
    },
    {
        title: "Marketing Systems & Automation",
        desc: "Unified marketing infrastructure connecting CRM, email service providers, and analytics into a single growth engine.",
        features: ["CRM Integration", "Unified Data Engine"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20v-6M6 20V10M18 20V4" />
            </svg>
        )
    },
    {
        title: "SEO & Content Strategy",
        desc: "Data-backed Technical SEO and authoritative content strategy to build long-term market authority and drive organic growth.",
        features: ["Technical SEO", "Market Authority"],
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        )
    }
];

const Solutions = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header side reveal
            gsap.from(".solutions-header", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".solutions-header",
                    start: "top 85%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            // Cards staggered reveal from right
            gsap.from(".art-card", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                    preventOverlaps: true
                }
            });
        }, gridRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="solutions" className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Elegant Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-primary)_0%,_transparent_20%)] opacity-5 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10" ref={gridRef}>

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto solutions-header">
                    <span className="inline-block py-1 px-3 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 shadow-[0_0_15px_rgba(20,207,147,0.15)]">
                        Enterprise Solutions
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                        Enterprise-Grade Solutions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-300">
                            for Modern
                        </span> Brands
                    </h2>
                    <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed">
                        Empowering your digital journey with state-of-the-art technology services tailored for growth, innovation, and absolute security.
                    </p>
                </div>

                {/* Artistic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutionsData.map((item, index) => (
                        <div
                            key={index}
                            className="art-card group relative h-[450px] bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
                        >
                            {/* 1. Background Image (Reveals on hover) */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={`${item.image}?auto=compress&cs=tinysrgb&w=800`}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover scale-110 opacity-90 grayscale group-hover:scale-100 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                {/* Overlay Gradient to keep text readable */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>

                            {/* 2. Content Container */}
                            <div className="relative z-10 p-10 h-full flex flex-col justify-between">

                                {/* Top: Icon that shrinks & shifts */}
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary border border-white/10 group-hover:scale-75 group-hover:bg-brand-primary group-hover:text-[#0a0a0a] group-hover:shadow-[0_0_20px_var(--color-brand-primary)] origin-top-left transition-all duration-500">
                                        {item.icon}
                                    </div>

                                    {/* Subtle Index Number */}
                                    <span className="text-white/90 text-4xl font-black font-serif group-hover:text-brand-primary/30 transition-colors duration-500">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Bottom: Title, Desc, and Features */}
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h4 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-brand-primary transition-colors duration-300">
                                        {item.title}
                                    </h4>

                                    <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                        {item.desc}
                                    </p>

                                    {/* Features (Fade in on hover) */}
                                    <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-white/80">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Floating "Explore" Arrow (Appears on Hover) */}
                            <div className="absolute right-8 bottom-8 w-12 h-12 rounded-full bg-brand-primary text-[#0a0a0a] flex items-center justify-center text-xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 z-20 shadow-lg">
                                ↗
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;