import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    { title: "Transforming Customer Experience", category: "Web Development", img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" },
    { title: "Scaling Agile Development", category: "Web Development", img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" },
    { title: "Optimizing IT Operations", category: "Web Development", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" },
    { title: "Maximizing Efficiency With DevOps", category: "Web Development", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" },
    { title: "Streamlining IT Infrastructure", category: "Web Development", img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" }
];

const HomePortfolio = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".portfolio-header", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Header Section */}
                <div className="portfolio-header flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Completed Projects</h2>
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                            Services are professional offerings provided by businesses to meet specific needs or solve
                            problems for their customers. Services can range from your budget.
                        </p>
                    </div>
                    <a href="/projects" className="bg-brand-primary text-bg-base px-6 py-3 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm whitespace-nowrap">
                        View All Project
                    </a>
                </div>

                {/* Swiper Slider */}
                <div className="portfolio-slider-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={900}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="home-portfolio-swiper !pb-20"
                    >
                        {projectsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative bg-[#151a1d] rounded-none overflow-hidden cursor-pointer flex flex-col h-[400px] border border-white/5 shadow-xl transition-all duration-500">

                                    {/* Image Area */}
                                    <div className="flex-1 overflow-hidden relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Box (Absolute Bottom) */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-[#1a1d20]/95 backdrop-blur-sm p-5 border border-white/10 flex justify-between items-center transition-all duration-300 group-hover:-translate-y-2">
                                        <div>
                                            <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest block mb-1 border-b border-brand-primary inline-block pb-0.5">
                                                {item.category}
                                            </span>
                                            <h4 className="text-lg md:text-xl font-bold leading-tight group-hover:text-brand-primary transition-colors line-clamp-1">
                                                {item.title}
                                            </h4>
                                        </div>

                                        {/* Arrow Button */}
                                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-primary flex items-center justify-center text-bg-base font-bold text-lg group-hover:-rotate-45 transition-transform duration-300">
                                            ↗
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* Global Styles for Swiper Pagination Dots */}
            <style jsx global>{`
        .home-portfolio-swiper .swiper-pagination {
          bottom: 0px !important;
        }
        .home-portfolio-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: transparent;
          border: 1px solid var(--color-text-muted);
          opacity: 0.5;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .home-portfolio-swiper .swiper-pagination-bullet-active {
          background: var(--color-brand-primary);
          border-color: var(--color-brand-primary);
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default HomePortfolio;