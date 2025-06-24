
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Wrench, Users, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const DevelopmentSection = () => {
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
      description: "Wir melden uns schnellstmöglich bei dir 🤝"
    });
    // Form wird durch Formspree verarbeitet, daher Reset nach Toast
    setTimeout(() => {
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex p-6 bg-orange-100 rounded-full mb-12 border-2 border-orange-200">
          <Wrench className="w-12 h-12 text-orange-600" />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Wir sind noch in der Entwicklung
        </h2>
        
        <div className="bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl mb-16">
          <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-light">
            Ganz transparent: Wir arbeiten gerade am ersten Prototypen und suchen 
            <strong className="text-red-600 font-semibold"> Pilot-Geschäfte in Braunschweig</strong>. 
            Wenn du ein Geschäft hast oder jemanden kennst – meld dich bei uns! 
            Gemeinsam gestalten wir die Zukunft des lokalen Shoppings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 px-6 py-4 rounded-2xl">
              <Users className="w-6 h-6 text-red-500" />
              <span className="text-lg">Erste Pilot-Partner in Braunschweig gesucht</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 px-6 py-4 rounded-2xl">
              <Mail className="w-6 h-6 text-orange-500" />
              <span className="text-lg">Launch Ende 2025 geplant</span>
            </div>
          </div>
        </div>

        {/* Partner Application Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Interesse an einer Pilot-Partnerschaft?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Melde dich unverbindlich für einen Info-Termin oder stelle deine Fragen direkt hier.
          </p>
          
          <form 
            action="https://formspree.io/f/DEIN_ENDPUNKT" 
            method="POST" 
            onSubmit={handleSubmit} 
            className="space-y-8"
          >
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
                  className="text-lg py-6 border-2 border-gray-300 focus:border-red-500 rounded-xl" 
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
                  className="text-lg py-6 border-2 border-gray-300 focus:border-red-500 rounded-xl" 
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
                className="text-lg py-6 border-2 border-gray-300 focus:border-red-500 rounded-xl" 
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
                placeholder="Erzähl uns kurz von deinem Geschäft oder stelle deine Fragen..." 
                rows={5} 
                className="text-lg border-2 border-gray-300 focus:border-red-500 resize-none rounded-xl" 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-8 text-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl text-slate-50"
            >
              Unverbindlich Interesse bekunden
            </Button>

            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_subject" value="Neue Pilot-Partner Anfrage" />
            <input type="hidden" name="_next" value={window.location.origin} />
          </form>
          
          <p className="text-lg text-gray-600 mt-6 font-medium">
            oder schreib uns direkt an local-angel@outlook.de
          </p>
        </div>
      </div>
    </section>
  );
};
