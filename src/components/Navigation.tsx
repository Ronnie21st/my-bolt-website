import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-800 shadow-xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'bg-gold-500'
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Leaf className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-bold leading-tight transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Pacific Outdoor
              </span>
              <span className={`text-xs font-semibold tracking-wider transition-colors ${
                isScrolled ? 'text-gold-400' : 'text-gold-300'
              }`}>
                LIVING
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'text-white hover:bg-white/10 hover:text-gold-400'
                    : 'text-white hover:bg-white/20 backdrop-blur-sm'
                } hover:scale-105 border-2 border-transparent hover:border-gold-400/50`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className={`hidden md:flex px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 ${
              isScrolled
                ? 'bg-gold-500 text-forest-900 border-gold-500 hover:bg-gold-400'
                : 'bg-white text-forest-900 border-white hover:bg-gold-400 hover:border-gold-400'
            }`}
          >
            Get Started
          </button>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden lg:hidden mt-4 pb-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(link.id);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 text-left ${
                  isScrolled
                    ? 'text-white hover:bg-white/10 bg-white/5'
                    : 'text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('contact');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className={`px-5 py-3 rounded-full font-bold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gold-500 text-forest-900'
                  : 'bg-white text-forest-900'
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
