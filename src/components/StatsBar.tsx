import { Award, Briefcase, Users, Sparkles } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: Award, label: '20+ Years Experience', value: '20+' },
    { icon: Briefcase, label: '1000+ Projects', value: '1000+' },
    { icon: Sparkles, label: 'Award-Winning Designs', value: 'Award' },
    { icon: Users, label: 'Full Outdoor Solutions', value: 'Full' },
  ];

  return (
    <section id="stats" className="relative py-16 bg-gradient-to-br from-sand-100 to-sand-50">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-sand-200">
                  <Icon className="w-8 h-8 text-forest-600" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-forest-800 leading-tight">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
