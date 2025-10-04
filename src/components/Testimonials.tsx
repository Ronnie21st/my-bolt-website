import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Pacific Outdoor Living transformed our backyard into a stunning oasis. The attention to detail and craftsmanship exceeded our expectations. We now spend every evening enjoying our new outdoor kitchen and fire pit.",
      author: "Sarah & Michael Thompson",
      location: "Portland, OR",
    },
    {
      quote: "From design to completion, the team was professional, creative, and responsive. Our pool and landscaping have become the centerpiece of our home. We couldn't be happier with the results.",
      author: "Jennifer Martinez",
      location: "Seattle, WA",
    },
    {
      quote: "The quality of work is exceptional. They took our vision and elevated it beyond what we imagined. Our outdoor living space has truly become an extension of our home where we create lasting memories.",
      author: "David & Linda Chen",
      location: "Vancouver, WA",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-forest-50 via-sand-50 to-forest-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 100C200 100 220 120 240 130C260 140 280 140 280 160C280 180 260 180 240 190C220 200 200 220 200 240C200 220 180 200 160 190C140 180 120 180 120 160C120 140 140 140 160 130C180 120 200 100 200 100Z" fill="currentColor" className="text-gold-500"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="100" fill="currentColor" className="text-terracotta-500"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-forest-700">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-sand-200">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-br from-gold-400 to-terracotta-500 rounded-2xl">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="relative min-h-[240px] sm:min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <blockquote className="text-center">
                    <p className="text-lg sm:text-xl text-forest-800 leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <footer>
                      <p className="font-semibold text-forest-900 text-lg mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-forest-600">
                        {testimonial.location}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-2 hover:bg-sand-100 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-forest-700" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-forest-600 w-8'
                        : 'bg-forest-300 hover:bg-forest-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 hover:bg-sand-100 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-forest-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,90 720,100 1080,80 C1200,75 1320,65 1440,70 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </section>
  );
}
