import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-800/50 to-forest-900/80"></div>
      </div>

      <div className="absolute top-32 right-12 opacity-15 pointer-events-none animate-float">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30C100 30 115 50 135 55C155 60 170 55 175 75C180 95 165 100 145 110C125 120 110 135 100 155C100 135 85 120 65 110C45 100 30 95 35 75C40 55 55 60 75 55C95 50 100 30 100 30Z" fill="currentColor" className="text-gold-400"/>
          <circle cx="100" cy="100" r="5" fill="currentColor" className="text-gold-300"/>
          <circle cx="120" cy="80" r="3" fill="currentColor" className="text-terracotta-400"/>
          <circle cx="80" cy="90" r="4" fill="currentColor" className="text-gold-500"/>
        </svg>
      </div>

      <div className="absolute bottom-40 left-16 opacity-15 pointer-events-none animate-float-delayed">
        <svg width="140" height="140" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 30L78 45L90 40L85 55L100 58L85 63L90 78L75 73L72 88L69 73L57 78L62 63L47 58L62 55L57 40L75 30Z" fill="currentColor" className="text-terracotta-400"/>
          <path d="M75 50C75 50 80 60 90 62C100 64 105 60 107 70C109 80 100 82 90 87C80 92 75 100 75 110C75 100 70 92 60 87C50 82 41 80 43 70C45 60 50 64 60 62C70 60 75 50 75 50Z" fill="currentColor" className="text-gold-500" opacity="0.6"/>
        </svg>
      </div>

      <div className="absolute top-1/4 left-12 opacity-10 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-white"/>
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" className="text-white" opacity="0.5"/>
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.3"/>
        </svg>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-white font-semibold text-sm tracking-wide">Award-Winning Excellence Since 1999</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight text-balance">
          Transform Your Outdoors into a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-terracotta-400">
            Living Masterpiece
          </span>
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Award-winning landscaping and outdoor living spaces for over 20 years
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-forest-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Get a Free Estimate</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-terracotta-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="group px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 hover:border-gold-400 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            View Our Work
            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold">1000+ Happy Clients</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('stats')}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-gold-400 transition-colors z-10"
        aria-label="Scroll down"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all">
          <ChevronDown size={28} />
        </div>
      </button>

      <svg
        className="absolute bottom-0 left-0 w-full h-32 sm:h-40 pointer-events-none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C320,90 640,100 960,80 C1120,70 1280,50 1440,60 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-sand-50"
        />
      </svg>
    </section>
  );
}
