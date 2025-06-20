
import React from 'react';
import { MapPin, Clock, Leaf, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Produkte aus deiner Nachbarschaft',
    description: 'Entdecke versteckte Schätze und Lieblingssachen von Läden um die Ecke',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  {
    icon: Smartphone,
    title: 'Online bestellen, lokal kaufen',
    description: 'Einfach per App stöbern, bestellen und lokale Geschäfte unterstützen',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  {
    icon: Clock,
    title: 'Lieferung am selben Tag',
    description: 'Bestellt bis 15 Uhr, geliefert bis zum Abend – frisch und schnell',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  {
    icon: Leaf,
    title: 'Nachhaltig & fair',
    description: 'CO₂-neutral per Fahrrad, faire Preise, starke lokale Wirtschaft',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  }
];

export const CustomerBenefits = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Was du bekommst
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Lokales Shopping war noch nie so einfach und nachhaltig
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300 border-2 ${benefit.borderColor} shadow-lg hover:shadow-xl`}
            >
              <div className={`inline-flex p-5 rounded-2xl ${benefit.bgColor} mb-8 ${benefit.color}`}>
                <benefit.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional App Mockup Placeholder */}
        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl p-16 border-2 border-gray-200 shadow-lg">
            <div className="w-40 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-xl">
              <Smartphone className="w-20 h-20 text-gray-400" />
            </div>
            <p className="text-gray-500 mt-6 italic text-xl">App-Mockup folgt bald...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
