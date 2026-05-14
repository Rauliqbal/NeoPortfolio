import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { projects, type Project } from '../utils/data/works';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link to={`${project.slug}`} target='_blank' className="group cursor-pointer">
      <div className="work-card-inner relative overflow-hidden aspect-4/5 mb-6">
        <img
          src={`/images/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>
      <div className="flex justify-between items-end border-b border-white/20 pb-4">
        <div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-1">{project.title}</h3>
          <span className="text-sm font-mono text-gray-400">{project.cat}</span>
        </div>
        <span className="text-sm font-mono">{project.year}</span>
      </div>
    </Link>
  );
};

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    if (window.innerWidth > 768) {
      gsap.to(leftColRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(rightColRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    gsap.utils
      .toArray<HTMLElement>('.work-card-inner')
      .forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.9,
            opacity: 0.5,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1, 
            },
          }
        );
      });
  }, sectionRef);

  return () => {
    ctx.revert();

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

    gsap.killTweensOf('*');
  };
}, []);

  return (
    <section ref={sectionRef} id="work" className="relative bg-background text-white py-24 overflow-hidden">
      <div className="container mb-32">
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="text-[12vw] leading-[0.8] font-heading font-black mix-blend-exclusion z-10">
            SELECTED
          </span>
          <h2 className="text-[12vw] leading-[0.8] font-heading font-black text-transparent stroke-text z-10 -mt-4 md:-mt-10">
            WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 px-4 md:px-12">

          {/* Left Column - Starts normal, moves down slowly */}
          <div ref={leftColRef} className="flex flex-col gap-16 md:gap-32 pt-0 md:pt-24">
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Right Column - Starts lower, moves up faster */}
          <div ref={rightColRef} className="flex flex-col gap-16 md:gap-32 md:translate-y-24">
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}