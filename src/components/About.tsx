export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-sand-100 via-sand-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20L110 60L140 40L120 80L160 90L120 100L140 140L100 120L90 160L80 120L50 140L70 100L30 90L70 80L50 40L100 20Z" fill="currentColor" className="text-gold-500"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-forest-100 text-forest-700 rounded-full text-sm font-semibold mb-4">
                Since 1999
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6 leading-tight">
              Our Story
            </h2>

            <div className="space-y-6 text-lg text-forest-700 leading-relaxed">
              <p>
                For over two decades, Pacific Outdoor Living has been transforming outdoor spaces across the Pacific Northwest. What started as a passion for creating beautiful landscapes has grown into a full-service outdoor living company.
              </p>

              <p>
                We believe that your outdoor space should be an extension of your home—a place where memories are made, where families gather, and where life is truly lived. Every project we undertake is approached with creativity, craftsmanship, and an unwavering commitment to quality.
              </p>

              <p>
                From intimate garden patios to expansive outdoor entertainment areas, our team brings decades of experience and a genuine love for what we do. We're not just building landscapes; we're crafting experiences that will be enjoyed for generations to come.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-forest-600 mb-2">20+</div>
                <div className="text-sm text-forest-700 font-medium">Years</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-forest-600 mb-2">1000+</div>
                <div className="text-sm text-forest-700 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-forest-600 mb-2">100%</div>
                <div className="text-sm text-forest-700 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful outdoor living space"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-gold-400 to-terracotta-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-bl from-forest-400 to-forest-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
