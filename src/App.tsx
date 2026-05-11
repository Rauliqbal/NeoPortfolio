import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './components/Intro';
import Work from './components/Work';
import Process from './components/Process';
import Manifesto from './components/Manifesto';
import Service from './components/Service';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
  return (
    <div className="w-full min-h-screen">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <main>
        <Hero />
        <Intro/>
        <Work/>
        <Process/>
        <Manifesto/>
        <Service/>
        <Marquee/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
