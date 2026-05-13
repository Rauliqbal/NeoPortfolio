import CustomCursor from './components/CustomCursor'
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true,
      syncTouch: false,
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
    <>
      <Helmet>
        <title>Rauliqbal - Fullstack Engineer</title>
        <meta
          name="description"
          content="Fullstack Engineer focused on building scalable systems, high-performance applications, and seamless digital experiences using modern technologies."
        />
        <meta
          name="keywords"
          content="Rauliqbal, Muhamad Raul Iqbal, Fullstack Engineer, Full Stack Developer Indonesia, React Developer, Spring Boot Developer, Kotlin Developer, Flutter Developer, Portfolio Developer"
        />
        <meta name="author" content="Muhamad Raul Iqbal" />
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://rauliqbal.my.id/" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Rauliqbal - Fullstack Engineer"
        />
        <meta
          property="og:description"
          content="Fullstack Engineer focused on building scalable systems, high-performance applications, and seamless digital experiences using modern technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rauliqbal.my.id/" />
        <meta
          property="og:image"
          content="https://rauliqbal.my.id/og-image.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rauliqbal - Fullstack Engineer"
        />
        <meta
          name="twitter:description"
          content="Fullstack Engineer focused on building scalable systems, high-performance applications, and seamless digital experiences using modern technologies."
        />
        <meta
          name="twitter:image"
          content="https://rauliqbal.my.id/og-image.png"
        />
        <meta name="theme-color" content="#050505" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Muhamad Raul Iqbal',
            alternateName: 'Rauliqbal',
            url: 'https://rauliqbal.my.id',
            jobTitle: 'Fullstack Engineer',
            sameAs: [
              'https://github.com/Rauliqbal',
              'https://www.linkedin.com/in/muhamad-raul-iqbal/',
            ],
            knowsAbout: [
              'React',
              'Spring Boot',
              'Java',
              'Kotlin',
              'Flutter',
              'Node.js',
              'Fullstack Engineering',
            ],
          })}
        </script>
      </Helmet>
      <CustomCursor />
      <main className="w-full min-h-screen">
        <div className="noise-overlay"></div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
