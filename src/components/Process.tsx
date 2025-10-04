import { MessageCircle, Palette, Hammer, Leaf } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Consultation',
      description: 'We start with a comprehensive consultation to understand your vision, lifestyle, and budget. Our team visits your property to assess the space and discuss possibilities.',
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design',
      description: 'Our designers create detailed plans and 3D renderings of your future outdoor space. We collaborate with you to refine every detail until it\'s perfect.',
    },
    {
      icon: Hammer,
      number: '03',
      title: 'Installation',
      description: 'Our skilled craftsmen bring the design to life with precision and care. We use premium materials and proven techniques to ensure lasting quality.',
    },
    {
      icon: Leaf,
      number: '04',
      title: 'Maintenance',
      description: 'We provide ongoing support and seasonal maintenance services to keep your outdoor space looking beautiful year after year.',
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-white">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            From concept to completion, we guide you through every step of the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-forest-300 to-forest-200 z-0"></div>
                )}

                <div className="relative bg-gradient-to-br from-sand-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sand-200 h-full">
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 text-8xl font-display font-bold text-sand-200 opacity-50 pointer-events-none">
                      {step.number}
                    </div>

                    <div className="relative inline-flex p-4 bg-gradient-to-br from-forest-500 to-forest-700 rounded-2xl shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-forest-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-forest-700 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`h-1 rounded-full flex-1 ${i === 0 ? 'bg-gold-400' : 'bg-sand-200'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-forest-100 rounded-full">
            <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-forest-800 font-semibold">Free consultations available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
