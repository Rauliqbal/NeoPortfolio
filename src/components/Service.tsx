import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'FULL STACK DEVELOPMENT',
    category: 'DEVELOPMENT',
    description:
      'Building scalable web applications from frontend to backend with a focus on performance, maintainability, and seamless user experience.',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000'
  },
  {
    id: 2,
    title: 'FRONTEND DEVELOPMENT',
    category: 'FRONTEND',
    description:
      'Crafting responsive and intuitive interfaces with React, transforming complex functionality into seamless digital experiences.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000'
  },
  {
    id: 3,
    title: 'BACKEND ARCHITECTURE',
    category: 'BACKEND',
    description:
      'Designing reliable and scalable backend systems using Java and modern frameworks. Built for security, performance, and long-term growth.',
    img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000'
  },
  {
    id: 4,
    title: 'ADMIN & DASHBOARD SYSTEMS',
    category: 'SYSTEMS',
    description:
      'Developing dashboards, management platforms, and internal business tools tailored to simplify workflows and improve operational efficiency.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000'
  },
];

export default function Service() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(services[0].img);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(revealRef.current, { xPercent: -50, yPercent: -50 });

      const items = listRef.current?.children;
      if (items) {
        Array.from(items).forEach((item) => {
          gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
              }
            }
          );
        });
      }

      const moveReveal = (e: MouseEvent) => {
        if (!revealRef.current) return;

        gsap.to(revealRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      window.addEventListener('mousemove', moveReveal);
      return () => window.removeEventListener('mousemove', moveReveal);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (img: string) => {
    setActiveImage(img);
    gsap.to(revealRef.current, { scale: 1, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(revealRef.current, { scale: 0, opacity: 0, duration: 0.3 });
  };

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-[#111] text-[#f4f4f4] relative z-10 overflow-hidden">

      <div
        ref={revealRef}
        className="fixed top-0 left-0 w-75 h-100 pointer-events-none z-50 opacity-0 scale-0 hidden md:block rounded-lg overflow-hidden mix-blend-exclusion"
        style={{ willChange: 'transform' }}
      >
        <img src={activeImage} alt="Service Preview" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20">
          <h2 className="text-6xl md:text-8xl font-bold">My <br />Expertise</h2>
          <p className="max-w-sm text-sm md:text-lg uppercase tracking-wide leading-relaxed text-gray-400 mt-8 md:mt-0">
            Crafting scalable digital solutions through thoughtful engineering, modern technologies, and seamless user experiences.
          </p>
        </div>

        <ul ref={listRef} className="border-t border-gray-700">
          {services.map((service) => (
            <li
              key={service.id}
              className="group border-b border-gray-700 relative overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(service.img)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative z-10 py-12 px-4 group-hover:px-8 transition-all duration-500">

                <div className="flex justify-between items-center">
                  <div className="flex items-baseline gap-8">
                    <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                      0{service.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-normal group-hover:text-white transition-colors group-hover:translate-x-4 duration-500 uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest opacity-0 md:opacity-100 group-hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                      {service.category}
                    </span>
                    <ArrowUpRight className="w-8 h-8 text-gray-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                  </div>
                </div>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-gray-400 mt-6 text-lg leading-relaxed group-hover:translate-x-12 transition-transform duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>

              </div>

              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}