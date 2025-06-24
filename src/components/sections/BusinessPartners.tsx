
import React from 'react';
import { Eye, TrendingUp, Truck, Star, DollarSign, Shield } from 'lucide-react';

const partnerBenefits = [
  {
    icon: DollarSign,
    title: '100% kostenlos starten',
    description: 'Keine Gebühren, keine versteckten Kosten – du zahlst nur bei erfolgreichem Verkauf',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  }, {
    icon: Shield,
    title: 'Null Risiko',
    description: 'Kein zusätzlicher Umsatz = keine Kosten. Du gehst kein finanzielles Risiko ein',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  }, {
    icon: Eye,
    title: 'Mehr Sichtbarkeit',
    description: 'Erreiche neue Kunden in deiner Nachbarschaft ohne Marketingaufwand',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  }, {
    icon: TrendingUp,
    title: 'Zusätzlicher Verkaufskanal',
    description: 'Ohne Mehraufwand – wir kümmern uns um Technik und Lieferung',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  }, {
    icon: Truck,
    title: 'Same-Day-Lieferung inklusive',
    description: 'Professionelle Fahrradkuriere übernehmen die komplette Zustellung',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  }, {
    icon: Star,
    title: 'Früh dabei = exklusive Vorteile',
    description: 'Kostenloses Onboarding, Pilot-Partner-Status und bevorzugte Platzierung',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  }
];

export const BusinessPartners = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Für lokale Geschäfte
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light mb-4">
            Werde Teil unseres Netzwerks und profitiere vom digitalen Wandel
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-xl font-semibold">
            <DollarSign className="w-6 h-6" />
            Komplett kostenlos – nur Gebühr bei Verkäufen
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className={`bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-2 ${benefit.borderColor} shadow-lg hover:shadow-xl`}>
              <div className={`inline-flex p-4 rounded-2xl ${benefit.bgColor} mb-6 ${benefit.color}`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
