import { Award, Shield, Users, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Custom Designs',
      description: 'Every project is uniquely tailored to your vision, lifestyle, and property. No cookie-cutter solutions.',
    },
    {
      icon: Shield,
      title: 'Premium Materials',
      description: 'We use only the highest quality materials that stand the test of time and weather.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified designers and craftsmen bring decades of combined experience to every project.',
    },
    {
      icon: Wrench,
      title: 'End-to-End Service',
      description: 'From initial design through installation and maintenance, we handle every detail.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-sand-100 via-white to-sand-50">
      <div className="absolute top-1/2 right-0 w-96 h-96 opacity-5 pointer-events-none transform translate-x-1/2">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 50L220 150L300 120L240 200L340 220L240 260L300 340L200 280L180 380L160 280L80 340L140 260L40 220L140 200L80 120L200 50Z" fill="currentColor" className="text-forest-600"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            We're committed to excellence in every aspect of your outdoor transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-200"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-gold-400 to-terracotta-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-forest-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none overflow-hidden rounded-br-3xl">
                  <Icon size={128} className="text-forest-600" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-forest-600 to-forest-700 rounded-3xl p-10 shadow-xl text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Fully Licensed & Insured
          </h3>
          <p className="text-forest-50 text-lg max-w-2xl mx-auto">
            With over 20 years in business and 1,000+ completed projects, you can trust us to deliver exceptional results backed by comprehensive warranties.
          </p>
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
          d="M0,50 C320,80 640,90 960,75 C1120,68 1280,55 1440,60 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </section>
  );
}
