
import React from 'react';
import { MapPin, Clock, Leaf, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Produkte aus deiner Nachbarschaft',
    description: 'Entdecke versteckte Schätze und Lieblingssachen von Läden um die Ecke',
    color: 'text-green-600'
  },
  {
    icon: Smartphone,
    title: 'Online bestellen, lokal kaufen',
    description: 'Einfach per App stöbern, bestellen und lokale Geschäfte unterstützen',
    color: 'text-blue-600'
  },
  {
    icon: Clock,
    title: 'Lieferung am selben Tag',
    description: 'Bestellt bis 15 Uhr, geliefert bis zum Abend – frisch und schnell',
    color: 'text-purple-600'
  },
  {
    icon: Leaf,
    title: 'Nachhaltig & fair',
    description: 'CO₂-neutral per Fahrrad, faire Preise, starke lokale Wirtschaft',
    color: 'text-emerald-600'
  }
];

export const CustomerBenefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Was du bekommst
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lokales Shopping war noch nie so einfach und nachhaltig
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white hover:scale-105 transition-all duration-300 border border-gray-100 shadow-lg"
            >
              <div className={`inline-flex p-4 rounded-full bg-gray-50 mb-6 ${benefit.color}`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional App Mockup Placeholder */}
        <div className="mt-20 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200">
            <div className="w-32 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-gray-500 mt-4 italic">App-Mockup folgt bald...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
