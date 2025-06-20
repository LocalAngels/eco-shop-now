
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Eye, TrendingUp, Truck, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const partnerBenefits = [
  {
    icon: Eye,
    title: 'Mehr Sichtbarkeit',
    description: 'Erreiche neue Kunden in deiner Nachbarschaft',
    color: 'text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Zusätzlicher Verkaufskanal',
    description: 'Ohne Mehraufwand – wir kümmern uns um alles',
    color: 'text-green-600'
  },
  {
    icon: Truck,
    title: 'Same-Day-Lieferung inklusive',
    description: 'Professionelle Fahrradkuriere übernehmen die Zustellung',
    color: 'text-purple-600'
  },
  {
    icon: Star,
    title: 'Früh dabei = exklusive Vorteile',
    description: 'Kostenloses Onboarding und Pilot-Partner-Status',
    color: 'text-orange-600'
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
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Für lokale Geschäfte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Werde Teil unseres Netzwerks und profitiere vom digitalen Wandel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white hover:scale-105 transition-all duration-300 border border-gray-100 shadow-md"
            >
              <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4 ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Application Form */}
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Jetzt Partner werden
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name des Geschäfts *
                </label>
                <Input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="z.B. Blumen Müller"
                  required
                  className="border-2 border-gray-200 focus:border-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ansprechpartner *
                </label>
                <Input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Dein Name"
                  required
                  className="border-2 border-gray-200 focus:border-green-400"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="kontakt@deinladen.de"
                required
                className="border-2 border-gray-200 focus:border-green-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nachricht (optional)
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Erzähl uns kurz von deinem Geschäft..."
                rows={4}
                className="border-2 border-gray-200 focus:border-green-400 resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Unverbindlich Partner werden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
