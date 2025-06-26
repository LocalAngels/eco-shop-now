

import React, { useState } from 'react';
import { MapPin, Clock, Leaf, Smartphone } from 'lucide-react';
import { AppMockup } from '@/components/ui/AppMockup';
import { Button } from '@/components/ui/button';

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
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7">
            Was du bekommst
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Lokales Shopping war noch nie so einfach und nachhaltig
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-2 ${benefit.borderColor} shadow-lg hover:shadow-xl`}
            >
              <div className={`inline-flex p-4 rounded-2xl ${benefit.bgColor} mb-6 ${benefit.color}`}>
                <benefit.icon className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* App Mockup */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            So einfach geht's
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Entdecke lokale Geschäfte, bestelle deine Lieblingssachen und lass sie dir bequem liefern
          </p>
          <AppMockup />
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center bg-white rounded-3xl p-10 shadow-lg border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-5">
            Willst du der Erste sein, der unsere App testet?
          </h3>
          <p className="text-lg text-gray-600 mb-7 max-w-2xl mx-auto">
            Melde dich jetzt für den Newsletter an und erfahre als Erstes, 
            wann Local Angels in Braunschweig startet!
          </p>
          
          <Button 
            onClick={() => setShowNewsletterForm(!showNewsletterForm)}
            className="px-7 py-5 text-base bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
          >
            Jetzt für Newsletter anmelden
          </Button>

          {/* Newsletter Form (Mailchimp Embed) */}
          {showNewsletterForm && (
            <div className="mt-7 p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 shadow-lg animate-fade-in">
              <div id="mc_embed_signup">
                <form action="DEINE-MAILCHIMP-URL" method="post" id="mc-embedded-subscribe-form-2" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll" className="space-y-5">
                    <h3 className="text-xl font-semibold text-gray-900">Newsletter abonnieren</h3>
                    
                    <div className="mc-field-group text-left">
                      <label htmlFor="mce-EMAIL-2" className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail Adresse <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="EMAIL" 
                        className="required email w-full text-base py-3 px-4 border-2 border-gray-300 focus:border-red-500 focus:ring-0 rounded-xl outline-none transition-colors" 
                        id="mce-EMAIL-2" 
                        placeholder="deine@email.de" 
                        required 
                      />
                    </div>
                    
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                      <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                    </div>
                    
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="HONEYPOT_FIELD_NAME" tabIndex={-1} defaultValue="" />
                    </div>
                    
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input 
                          type="submit" 
                          value="Jetzt anmelden" 
                          name="subscribe" 
                          id="mc-embedded-subscribe-2" 
                          className="w-full py-3 px-6 text-base bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl" 
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Du erhältst nur wichtige Updates zum Launch. Keine Spam-Mails! 
                <br />
                Abmeldung jederzeit möglich.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
