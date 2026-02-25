import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Web Development",
    desc: "Web development is the process of creating websites and web applications for the internet or intranet.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <path d="M9 15l-3-3 3-3"></path>
        <path d="M15 9l3 3-3 3"></path>
      </svg>
    )
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        <path d="M12 12v6"></path>
        <path d="M9 15l3 3 3-3"></path>
      </svg>
    )
  },
  {
    title: "Cyber Security",
    desc: "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <rect x="9" y="9" width="6" height="6" rx="1"></rect>
      </svg>
    )
  },
  {
    title: "Data Analytics",
    desc: "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  },
  {
    title: "Software Development",
    desc: "Software development is the process of creating computer software programs that perform specific functions or tasks.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <path d="M2 12h4l3-9 5 18 3-9h5"></path>
      </svg>
    )
  },
  {
    title: "Digital Marketing",
    desc: "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-6">
        <path d="M12 20v-6M6 20V10M18 20V4"></path>
      </svg>
    )
  }
];

const ServicesGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-box", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0d1012] text-white"> {/* Adjusted BG color based on screenshot */}
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Solutions We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Bring The Revolution With <br />
            The <span className="text-brand-primary">Diligence</span> Service
          </h2>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-box bg-[#151a1d] p-12 rounded-lg border border-transparent hover:border-brand-primary/20 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {service.icon}
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{service.title}</h3>
                <p className="text-[#889299] text-sm leading-relaxed mb-10">
                  {service.desc}
                </p>
              </div>

              {/* Star Badge Button (Learn More) */}
              <a href="#learn-more" className="inline-flex items-center gap-3 group/btn w-max">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Star shape background (CSS or SVG) */}
                  <div className="absolute inset-0 bg-brand-primary rounded-[40%] rotate-45 transition-transform duration-500 group-hover/btn:rotate-90"></div>
                  <span className="relative z-10 text-bg-base text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                    Learn<br />More
                  </span>
                </div>
                <span className="text-[#a1a1aa] group-hover/btn:text-white transition-colors duration-300 ml-2">
                  ↗
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a href="#all-services" className="bg-brand-primary text-bg-base px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm">
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;