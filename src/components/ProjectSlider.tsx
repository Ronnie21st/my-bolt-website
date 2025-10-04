import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Modern Backyard Oasis',
      description: 'Complete outdoor transformation with pool, fire pit, and custom stone patio.',
      image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Elegant Garden Retreat',
      description: 'Lush landscaping with meandering pathways and water features.',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Outdoor Kitchen Paradise',
      description: 'Complete outdoor kitchen with dining area and custom pergola.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Luxury Pool & Spa',
      description: 'Resort-style pool with integrated spa and stone deck.',
      image: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Contemporary Courtyard',
      description: 'Modern minimalist design with native plantings and clean lines.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Natural Stone Terraces',
      description: 'Multi-level terracing with natural stone and integrated lighting.',
      image: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Woodland Garden Design',
      description: 'Shade garden with native plants and naturalistic stone features.',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Explore our portfolio of stunning outdoor transformations
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent"></div>

                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="currentColor" className="text-white"/>
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <div className="max-w-2xl">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-forest-900 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-forest-900 group-hover:scale-110 transition-transform" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex px-10 py-5 bg-forest-600 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-forest-700 transition-all duration-300 hover:scale-105"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
