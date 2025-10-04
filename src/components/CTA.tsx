export default function CTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/85 via-forest-800/80 to-forest-900/85"></div>
      </div>

      <div className="absolute top-10 right-10 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" className="text-white"/>
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" className="text-white"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" className="text-white"/>
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20L110 60L140 40L120 80L160 90L120 100L140 140L100 120L90 160L80 120L50 140L70 100L30 90L70 80L50 40L100 20Z" fill="currentColor" className="text-gold-400"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="mb-8">
          <svg className="inline-block w-16 h-16 text-gold-400" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5L35 20L45 15L40 30L55 35L40 40L45 55L30 50L25 65L20 50L10 55L15 40L5 35L20 30L15 15L30 5Z" fill="currentColor"/>
          </svg>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Outdoors?
        </h2>

        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Let's bring your vision to life. Schedule your free consultation today and discover the possibilities.
        </p>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex px-12 py-6 bg-white text-forest-900 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Book a Free Consultation</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 to-terracotta-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-20">
            Book a Free Consultation
          </span>
        </button>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Free Estimates</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">2-Year Warranty</span>
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
          d="M0,64 C360,95 720,105 1080,85 C1200,78 1320,68 1440,72 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-sand-50"
        />
      </svg>
    </section>
  );
}
