
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Eye, TrendingUp, Truck, Star, DollarSign, Shield } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const partnerBenefits = [
  {
    icon: DollarSign,
    title: '100% kostenlos starten',
    description: 'Keine Gebühren, keine versteckten Kosten – du zahlst nur bei erfolgreichem Verkauf',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  {
    icon: Shield,
    title: 'Null Risiko',
    description: 'Kein zusätzlicher Umsatz = keine Kosten. Du gehst kein finanzielles Risiko ein',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  {
    icon: Eye,
    title: 'Mehr Sichtbarkeit',
    description: 'Erreiche neue Kunden in deiner Nachbarschaft ohne Marketingaufwand',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  {
    icon: TrendingUp,
    title: 'Zusätzlicher Verkaufskanal',
    description: 'Ohne Mehraufwand – wir kümmern uns um Technik und Lieferung',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  {
    icon: Truck,
    title: 'Same-Day-Lieferung inklusive',
    description: 'Professionelle Fahrradkuriere übernehmen die komplette Zustellung',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  {
    icon: Star,
    title: 'Früh dabei = exklusive Vorteile',
    description: 'Kostenloses Onboarding, Pilot-Partner-Status und bevorzugte Platzierung',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  }
];

export const BusinessPartners = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner application:', formData);
    toast({
      title: "Danke für dein Interesse!",
      description: "Wir melden uns schnellstmöglich bei dir 🤝",
    });
    setFormData({ businessName: '', contactName: '', email: '', message: '' });
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partnerBenefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-2 ${benefit.borderColor} shadow-lg hover:shadow-xl`}
            >
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

        {/* Partner Application Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Jetzt kostenlos Partner werden
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Name des Geschäfts *
                </label>
                <Input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="z.B. Blumen Müller"
                  required
                  className="text-lg py-6 border-2 border-gray-300 focus:border-green-500 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Ansprechpartner *
                </label>
                <Input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Dein Name"
                  required
                  className="text-lg py-6 border-2 border-gray-300 focus:border-green-500 rounded-xl"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-3">
                E-Mail *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="kontakt@deinladen.de"
                required
                className="text-lg py-6 border-2 border-gray-300 focus:border-green-500 rounded-xl"
              />
            </div>
            
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-3">
                Nachricht (optional)
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Erzähl uns kurz von deinem Geschäft..."
                rows={5}
                className="text-lg border-2 border-gray-300 focus:border-green-500 resize-none rounded-xl"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-8 text-xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              Unverbindlich & kostenlos Partner werden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
