import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      const lines = gsap.utils.toArray('.intro-line-wrap');

      lines.forEach((line: any) => {
        gsap.fromTo(
          line.querySelectorAll('.char'),
          {
            y: 120,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.03,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
            },
          }
        );
      });

      // Profile reveal
      gsap.fromTo(
        '.profile-card',
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.profile-card',
            start: 'top 85%',
          },
        }
      );

      // Profile image scale
      gsap.fromTo(
        '.profile-image',
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.profile-image',
            start: 'top 85%',
          },
        }
      );

      // Metadata stagger
      gsap.fromTo(
        '.meta-item',
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.meta-wrapper',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-56 bg-[#0a0a0a] text-[#f4f4f4] overflow-hidden px-4"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-[7vw] md:text-[6vw] leading-[1.05] font-heading uppercase font-bold tracking-tight">
          <div className="intro-line-wrap overflow-hidden flex flex-wrap items-baseline gap-4">
            <span className="char">I</span>
            <span className="char font-serif italic font-light text-gray-400 lowercase">
              don't just
            </span>
            <span className="char">build</span>
          </div>

          <div className="intro-line-wrap overflow-hidden flex flex-wrap items-baseline gap-4 pl-[5vw]">
            <span className="char stroke-text text-transparent">
              WEB
            </span>
            <span className="char">APPLICATIONS.</span>
          </div>

          <div className="intro-line-wrap overflow-hidden flex flex-wrap items-baseline gap-4">
            <span className="char">I</span>
            <span className="char font-serif italic font-light text-white lowercase">
              engineer
            </span>
            <span className="char">
              SCALABLE SYSTEMS.
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Profile */}
          <div className="profile-card flex flex-col md:flex-row items-start gap-6">
            
            <div className="profile-image mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-zinc-800 shrink-0">
              <img
                src="./avatar.jpeg"
                alt="Raul Iqbal"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <span className="uppercase tracking-[0.2em] text-zinc-500 text-sm">
                Profile
              </span>

              <h1 className="mt-2 text-3xl font-semibold text-white">
                Raul Iqbal
              </h1>

              <p className="mt-5 text-zinc-400 leading-relaxed max-w-lg text-lg">
                Software Engineer focused on building scalable web applications
                with
                <span className="text-white italic font-serif">
                   {" "}
                  Java
                </span>
                   {" "}
                and
                   {" "}
                <span className="text-white italic font-serif">
                   {" "}
                  React
                </span>.
                Passionate about clean architecture, performance, and creating
                systems designed for long-term growth.
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end w-full border-l border-zinc-800 pl-8">
            <p className="text-lg md:text-xl font-light text-zinc-400 font-mono leading-relaxed">
              Specialized in
              <span className="text-white italic font-serif">
                {' '}Java & React development
              </span>.
              Building scalable systems designed for performance, usability, and
              seamless digital experiences.
            </p>

            {/* Metadata */}
            <div className="meta-wrapper mt-12 flex flex-wrap gap-10 uppercase tracking-widest text-sm">
              
              <div className="meta-item">
                <p className="text-zinc-600 mb-2">
                  Stack
                </p>
                <p className="text-white">
                  Java • React
                </p>
              </div>

              <div className="meta-item">
                <p className="text-zinc-600 mb-2">
                  Focus
                </p>
                <p className="text-white">
                  Full Stack
                </p>
              </div>

              <div className="meta-item">
                <p className="text-zinc-600 mb-2">
                  Experience
                </p>
                <p className="text-white">
                  4 Years
                </p>
              </div>

              <div className="meta-item">
                <p className="text-zinc-600 mb-2">
                  Status
                </p>
                <p className="text-green-400">
                  Available For Freelance
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}