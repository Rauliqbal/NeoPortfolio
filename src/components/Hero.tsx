import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type LoaderProps = {
  loading: boolean;
  loaderRef: React.RefObject<HTMLDivElement | null>;
};

const Loader = ({ loading, loaderRef }: LoaderProps) => {
  if (!loading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Glow background */}
      <div className="absolute h-[540px] w-[500px] rounded-full bg-linear-to-tr from-cyan-400/40 to-indigo-600/70 blur-[140px]" />

      {/* Text */}
      <h1 className="loader-text relative z-10 text-[10vw] font-black tracking-[0.2em] text-white md:text-[5vw]">
        RAULIQBAL
      </h1>
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Loader Animation
      tl.set('.loader-text', {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(40px)',
          letterSpacing: '0.5em',
        })

        .to('.loader-text', {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })

        .to(
          '.loader-text',
          {
            scale: 1,
            filter: 'blur(0px)',
            letterSpacing: '0.15em',
            duration: 1.4,
            ease: 'power4.out',
          },
          '<' 
        )
        .to('.loader-text', {
          scale: 1.05,
          duration: 0.6,
          ease: 'power2.inOut',
        })
        .to(loaderRef.current, {
          opacity: 0,
          scale: 1.82,
          filter: 'blur(8px)',
          duration: 1.3,
          ease: 'power4.inOut',
          onComplete: () => setLoading(false),
        });

      // Hero text animation
      gsap.set('.hero-char', {
        opacity: 0,
        yPercent: 120,
        rotateZ: 10,
      });

      tl.to('.hero-char', {
        opacity: 1,
        yPercent: 0,
        rotateZ: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.set('.gradient-1', { x: 0, y: 0 });
      gsap.set('.gradient-2', { x: 0, y: 0 });
      gsap.set('.gradient-3', { x: 0, y: 0 });

      // Floating ambient animation
      gsap.to('.gradient-1', {
        x: 150,
        y: -100,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: true,
      });

      gsap.to('.gradient-2', {
        x: -120,
        y: 80,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: true,
      });

      gsap.to('.gradient-3', {
        x: 100,
        y: -120,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        force3D: true,
      });

      // Entire ambient breathing effect
      gsap.to('.gradient-layer', {
        scale: 1.08,
        rotation: 1.5,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'center center',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = "SCALABILITY";

  return (
    <>
      <Loader loading={loading} loaderRef={loaderRef} />
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505] text-[#e1e1e1]">
        <div className="hero-bg absolute inset-0 z-0 overflow-hidden bg-[#030712]">

          {/* Base Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#274c77_0%,#0f2747_35%,#020617_100%)]" />

          {/* Main Blur Lights */}
          <div className="gradient-layer absolute inset-0">

            {/* Top Left Glow */}
            <div className="gradient-1 transform-gpu absolute will-change-transform pointer-events-none -top-[15%] -left-[10%] w-[900px] h-[900px] rounded-full bg-blue-700/20 blur-[60px]" />

            {/* Center Soft Light */}
            <div className="gradient-2 transform-gpu will-change-transform absolute top-[20%] left-[35%] w-[700px] h-[700px] rounded-full bg-sky-500/50 blur-[80px] " />

            {/* Bottom Right Glow */}
            <div className="gradient-3 transform-gpu will-change-transform absolute -bottom-[15%] -right-[10%] w-[900px] h-[900px] rounded-full bg-indigo-500/40 blur-[120px]" />

            {/* Extra cinematic dark blob */}
            <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-black/40 blur-[80px]" />
          </div>

          {/* Soft vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Premium grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
            style={{
              backgroundImage:
                'url("https://grainy-gradients.vercel.app/noise.svg")',
            }}
          />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-12">
          <div className="flex justify-between items-start hero-fade">
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-60">
                ( Est. 2022 )
              </div>
              <div className="hidden md:block text-xs font-mono uppercase tracking-wider opacity-40 max-w-[200px]">
                Full Stack Developer<br />
                <span className="text-white/60">& UI/UX Enthusiast</span>
              </div>
            </div>
            <div className="hidden md:flex text-right flex-col items-end gap-2 md:gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider opacity-50">Available for freelance</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
              <div className="text-xs font-mono uppercase tracking-wider opacity-50">
                Bekasi, Indonesian
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/Rauliqbal  " target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">
                  GIT
                </a>
                <a href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">
                  LIN
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements on right side - hidden on mobile */}
          <div className="hidden lg:flex absolute right-12 top-1/3 flex-col gap-8 opacity-30 hero-fade">
            <div className="flex flex-col items-end gap-2 text-xs font-mono">
              <div className="w-12 h-px bg-white/40"></div>
              <span className="text-white/60">001</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs font-mono">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="text-white/60">002</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs font-mono">
              <div className="w-16 h-px bg-white/40"></div>
              <span className="text-white/60">003</span>
            </div>
          </div>

          <div className="relative mb-8 md:mb-12">
            <h3 ref={titleRef} className="text-[10vw] sm:text-[8vw] md:text-[7vw] leading-[1.1] font-heading font-black tracking-tight text-white">
              <div className="flex flex-wrap">
                {title.split("").map((char, i) => (
                  <span key={i} className="hero-char inline-block origin-bottom will-change-transform">{char}</span>
                ))}
              </div>
            </h3>

            <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-12 border-t border-white/20 pt-4 md:pt-8 hero-fade gap-4 md:gap-6">
              <div className="flex-1 max-w-2xl">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-serif-italic text-gray-300 leading-snug mb-4 md:mb-6">
                  "Crafting scalable systems that merge performance, functionality, and exceptional user experience."
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-[10px] md:text-xs font-mono uppercase tracking-wider opacity-70">
                  <div>
                    <div className="text-white/40 mb-1">Stack</div>
                    <div>React • Spring </div>
                  </div>
                  <div>
                    <div className="text-white/40 mb-1">Focus</div>
                    <div>FULL STACK</div>
                  </div>
                  <div>
                    <div className="text-white/40 mb-1">Mobile</div>
                    <div>Kotlin • Flutter</div>
                  </div>
                  <div>
                    <div className="text-white/40 mb-1">AI/ML</div>
                    <div>TensorFlow</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-6 md:px-8 py-3 md:py-4 border border-white/30 rounded-full uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                  Scroll Down
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}