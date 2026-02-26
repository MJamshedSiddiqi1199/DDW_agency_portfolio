import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    { title: "Transforming Customer Experience", category: "Web Development", img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg", link: "/projects" },
    { title: "Scaling Agile Development", category: "Web Development", img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", link: "/projects" },
    { title: "Optimizing IT Operations", category: "Web Development", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", link: "/projects" },
    { title: "Maximizing Efficiency With DevOps", category: "Web Development", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", link: "/projects" },
    { title: "Streamlining IT Infrastructure", category: "Web Development", img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", link: "/projects" }
];

// Sub-component for smooth image loading
const ImageWithLoader = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="w-full h-full relative bg-[#1a1d21]">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
                </div>
            )}
            <img
                src={`${src}?auto=compress&cs=tinysrgb&w=1200`} // Requesting optimized size
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'}`}
            />
        </div>
    );
};

const HomePortfolio = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Preload images to browser cache
        projectsData.forEach(project => {
            const img = new Image();
            img.src = `${project.img}?auto=compress&cs=tinysrgb&w=1200`;
        });

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
                            Solutions delivered with architectural precision. Explore how we help enterprise brands scale their technical presence and drive verified outcomes.
                        </p>
                    </div>
                    <Link to="/projects" className="bg-brand-primary text-bg-base px-6 py-3 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm whitespace-nowrap">
                        View All Projects
                    </Link>
                </div>

                {/* Swiper Slider */}
                <div className="portfolio-slider-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={1000} // Smoother transition speed
                        autoplay={{
                            delay: 4000, // Longer delay for readability
                            disableOnInteraction: false
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="home-portfolio-swiper !pb-20"
                    >
                        {projectsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={item.link} className="block group">
                                    <div className="relative bg-[#151a1d] rounded-none overflow-hidden cursor-pointer flex flex-col h-[400px] border border-white/5 shadow-xl transition-all duration-700">

                                        {/* Image Area with Smooth Reveal */}
                                        <div className="flex-1 overflow-hidden relative">
                                            <ImageWithLoader src={item.img} alt={item.title} />
                                        </div>

                                        {/* Content Box (Absolute Bottom) */}
                                        <div className="absolute bottom-6 left-6 right-6 bg-[#1a1d20]/95 backdrop-blur-md p-5 border border-white/10 flex justify-between items-center transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-primary/30 shadow-2xl">
                                            <div className="flex-1 pr-4">
                                                <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest block mb-1 border-b border-brand-primary/30 inline-block pb-0.5">
                                                    {item.category}
                                                </span>
                                                <h4 className="text-lg md:text-xl font-bold leading-tight group-hover:text-brand-primary transition-colors line-clamp-1">
                                                    {item.title}
                                                </h4>
                                            </div>

                                            {/* Arrow Button */}
                                            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-primary flex items-center justify-center text-bg-base font-bold text-lg group-hover:-rotate-45 transition-all duration-500 shadow-[0_0_15px_rgba(20,207,147,0.3)]">
                                                ↗
                                            </div>
                                        </div>

                                    </div>
                                </Link>
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