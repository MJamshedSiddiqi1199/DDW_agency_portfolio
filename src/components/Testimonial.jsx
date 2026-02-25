// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// // Swiper base styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const testimonialData = [
//     {
//         name: "Thomas J. Smith",
//         role: "CEO OF TECHFLOW",
//         comment: "The team provided an exceptional level of service. Their attention to detail and innovative approach transformed our business digital presence entirely.",
//         img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     {
//         name: "Sarah Jenkins",
//         role: "MARKETING DIRECTOR",
//         comment: "Working with this agency was a game-changer. The customized solutions they delivered exceeded our expectations in every possible way.",
//         img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
//     },
//     {
//         name: "Michael Chen",
//         role: "PRODUCT MANAGER",
//         comment: "Their expertise in Cyber Security and Web Development is unmatched. Highly professional team that delivers on their promises every single time.",
//         img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
// ];

// const Testimonials = () => {
//     return (
//         <section className="py-32 bg-bg-base text-white relative overflow-hidden">
//             {/* Background Mesh Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

//             <div className="max-w-[1440px] mx-auto px-6 relative z-10">

//                 {/* Header Area */}
//                 <div className="text-center mb-20">
//                     <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Happy Customers</h2>
//                     <div className="flex justify-center gap-1">
//                         {[...Array(5)].map((_, i) => (
//                             <span key={i} className="text-brand-primary text-xl">★</span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Swiper Configuration for 3 Slides Visibility */}
//                 <Swiper
//                     modules={[Pagination, Autoplay, Navigation]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     centeredSlides={true}
//                     loop={true}
//                     autoplay={{ delay: 5000, disableOnInteraction: false }}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         1024: {
//                             slidesPerView: 3, // Desktop par 3 slides dikhengi
//                             spaceBetween: 50,
//                         }
//                     }}
//                     className="testimonial-swiper !pb-24"
//                 >
//                     {testimonialData.map((item, index) => (
//                         <SwiperSlide key={index} className="transition-all duration-500">
//                             {/* Card Container */}
//                             <div className="bg-bg-surface p-12 md:p-16 rounded-[3rem] border border-border-subtle text-center relative h-full flex flex-col justify-between testimonial-card">

//                                 {/* SVG Quote Icon */}
//                                 <div className="mb-10 flex justify-center opacity-20">
//                                     <svg width="50" height="38" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M15.4 0L24 7.6C16 14.6 14.2 21.6 14.2 27.2H27.6V45H0V27.2C0 14 6.8 4.6 15.4 0ZM47.8 0L56.4 7.6C48.4 14.6 46.6 21.6 46.6 27.2H60V45H32.4V27.2C32.4 14 39.2 4.6 47.8 0Z" fill="white" />
//                                     </svg>
//                                 </div>

//                                 <p className="text-lg md:text-xl font-medium leading-relaxed text-text-main mb-12 italic">
//                                     "{item.comment}"
//                                 </p>

//                                 {/* Profile Information */}
//                                 <div className="mt-auto">
//                                     <div className="flex justify-center mb-6">
//                                         <div className="w-20 h-20 rounded-full border-2 border-brand-primary p-1 shadow-[0_0_15px_rgba(20,207,147,0.3)]">
//                                             <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
//                                         </div>
//                                     </div>
//                                     <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
//                                     <p className="text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">{item.role}</p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* Custom Styling for Active Slide Scaling */}
//             <style jsx global>{`
//         /* Side slides ko dim aur small karne ke liye */
//         .swiper-slide {
//           opacity: 0.4;
//           transform: scale(0.85);
//           transition: all 0.5s ease;
//         }
//         /* Middle (Active) slide ko highlight karne ke liye */
//         .swiper-slide-active {
//           opacity: 1;
//           transform: scale(1);
//         }
//         .swiper-pagination-bullet {
//           background: oklch(28% 0.02 160) !important;
//           opacity: 1;
//           width: 10px;
//           height: 10px;
//         }
//         .swiper-pagination-bullet-active {
//           background: var(--color-brand-primary) !important;
//           width: 30px;
//           border-radius: 5px;
//         }
//       `}</style>
//         </section>
//     );
// };

// export default Testimonials;


import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonialData = [
    {
        name: "James Davidson",
        role: "VP of Ops — TechCorp Inc.",
        comment: "They Built What We Couldn't Find Anywhere. DDW Agency built exactly what we needed — a custom dispatch system. It’s now the backbone of our operations.",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
        name: "Sarah Mitchell",
        role: "CMO — Meridian Health Group",
        comment: "Our Marketing Infrastructure Partner. They built a unified system — CRM, automation, analytics — all connected. Our team is now 3x more efficient.",
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
        name: "Michael Chen",
        role: "CEO — Apex Logistics",
        comment: "Strategic Partner, Not Just a Vendor. Their technical advisory saved us from a $200K mistake and executed the right solution in half the time.",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
];

const Testimonials = () => {
    const testiRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testi-left", {
                x: -100,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".testi-left",
                    start: "top 85%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });

            gsap.from(".testi-right", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".testi-right",
                    start: "top 85%",
                    toggleActions: "play none none none",
                    fastScrollEnd: true,
                }
            });
        }, testiRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={testiRef} className="py-24 bg-[#111111] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Side: Title & Ratings */}
                    <div className="lg:col-span-4 pr-0 lg:pr-8 testi-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#14cf93]/20 rounded mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14cf93]"></span>
                            <span className="text-[#a1a1aa] text-xs font-bold tracking-widest uppercase">Client Review</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14cf93]"></span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Happy Client</h2>

                        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-10">
                            Integer purus odio, placerat nec rhoncus in, ullamcorperon nec doloroei. aptent taciti sociosqu ad litora torquent pero conubia nostra persento.
                        </p>

                        <h6 className="text-white font-semibold mb-4">Review On</h6>
                        <div className="flex gap-4">
                            {/* Trustpilot Review Box */}
                            <div className="flex-1 bg-bg-base border border-white/5 p-4 rounded-lg flex flex-col items-center justify-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#00b67a] text-xl">★</span> {/* Trustpilot Star */}
                                    <span className="font-bold text-sm">Trustpilot</span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    <span className="text-[#a1a1aa] ml-1 font-semibold">5.0/5.0</span>
                                </div>
                            </div>

                            {/* Google Review Box */}
                            <div className="flex-1 bg-bg-base border border-white/5 p-4 rounded-lg flex flex-col items-center justify-center">
                                <div className="flex items-center gap-1 mb-2 font-bold text-sm">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    <span className="text-[#a1a1aa] ml-1 font-semibold">5.0/5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Vertical Swiper Slider */}
                    <div className="lg:col-span-8 relative pl-0 lg:pl-16 h-[380px] testi-right">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            direction={'vertical'}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            speed={800}
                            navigation={{
                                prevEl: '.testi-prev',
                                nextEl: '.testi-next',
                            }}
                            className="h-full pr-20" // Further padding for arrows
                        >
                            {testimonialData.map((item, index) => (
                                <SwiperSlide key={index} className="flex flex-col justify-center">
                                    <div className="relative">
                                        {/* Top User Info & Trustpilot Rating */}
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="flex items-center gap-1 mb-1">
                                                    <span className="text-[#00b67a] text-sm">★</span>
                                                    <span className="text-white text-xs font-bold">Trustpilot</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className="bg-[#00b67a] w-5 h-5 flex items-center justify-center text-white text-[10px]">★</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-xl md:text-2xl leading-[1.6] text-white font-medium mb-10 relative z-10 pr-10">
                                            "{item.comment}"
                                        </p>

                                        {/* Bottom User Name & Big Quote Icon */}
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
                                                <span className="text-[#14cf93] text-xs font-bold uppercase tracking-wide">{item.role}</span>
                                            </div>
                                            <div className="text-8xl text-white/5 font-serif leading-none absolute right-4 bottom-0 pointer-events-none select-none">
                                                ”
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Arrows (Up/Down) placed on the right */}
                        <div className="absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
                            <button className="testi-prev w-12 h-12 rounded-full border border-[#14cf93]/30 flex items-center justify-center text-[#14cf93] hover:bg-[#14cf93] hover:text-bg-base transition-all duration-300 shadow-[0_0_15px_rgba(20,207,147,0.1)]">
                                ↑
                            </button>
                            <button className="testi-next w-12 h-12 rounded-full border border-[#14cf93]/30 flex items-center justify-center text-[#14cf93] hover:bg-[#14cf93] hover:text-bg-base transition-all duration-300 shadow-[0_0_15px_rgba(20,207,147,0.1)]">
                                ↓
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;