import { TreePine, Waves, Flame, Flower2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TreePine,
      title: 'Custom Patios & Hardscaping',
      description: 'Beautiful stone patios, walkways, and retaining walls that blend form and function.',
      color: 'from-sand-400 to-sand-600',
    },
    {
      icon: Waves,
      title: 'Pools & Water Features',
      description: 'Stunning swimming pools, fountains, and ponds that become your backyard oasis.',
      color: 'from-forest-400 to-forest-600',
    },
    {
      icon: Flame,
      title: 'Outdoor Kitchens & Fire Features',
      description: 'Complete outdoor living spaces with kitchens, fire pits, and entertainment areas.',
      color: 'from-terracotta-400 to-terracotta-600',
    },
    {
      icon: Flower2,
      title: 'Gardens & Planting',
      description: 'Lush gardens and thoughtful plantings that bring color and life to your landscape.',
      color: 'from-gold-400 to-gold-600',
    },
  ];

  const scrollToServices = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 50C200 50 250 100 300 100C350 100 400 100 400 150C400 200 350 200 300 250C250 300 200 350 200 350C200 350 150 300 100 250C50 200 0 200 0 150C0 100 50 100 100 100C150 100 200 50 200 50Z" fill="currentColor" className="text-forest-600"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Comprehensive outdoor living solutions tailored to your lifestyle and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-sand-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5 transform translate-x-12 -translate-y-12 pointer-events-none">
                  <Icon size={192} />
                </div>

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-forest-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-forest-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    onClick={scrollToServices}
                    className="inline-flex items-center text-forest-600 font-semibold hover:text-forest-800 transition-colors group"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,70 480,80 720,70 C960,60 1200,30 1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-sand-100"
        />
      </svg>
    </section>
  );
}
