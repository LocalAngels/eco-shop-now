
import React from 'react';
import { MapPin, Clock, Leaf, Smartphone } from 'lucide-react';
import { AppMockup } from '@/components/ui/AppMockup';

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

        {/* App Mockup */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            So einfach geht's
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Entdecke lokale Geschäfte, bestelle deine Lieblingssachen und lass sie dir bequem liefern
          </p>
          <AppMockup />
        </div>
      </div>
    </section>
  );
};
