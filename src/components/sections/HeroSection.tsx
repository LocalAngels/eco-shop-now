
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, ShoppingBag, Bike, Heart } from 'lucide-react';

export const HeroSection = () => {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/16c0332c-ab5f-4ccc-b67e-e7c7e00c5ba0.png" 
            alt="Local Angels Logo" 
            className="h-40 md:h-48 mx-auto drop-shadow-sm"
          />
        </div>

        {/* Hero Icons */}
        <div className="flex justify-center items-center gap-6 mb-12 animate-fade-in">
          <div className="p-4 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
            <ShoppingBag className="w-10 h-10 text-red-600" />
          </div>
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm">
            <Bike className="w-10 h-10 text-orange-600" />
          </div>
          <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100 shadow-sm">
            <Heart className="w-10 h-10 text-pink-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in leading-tight">
          Braunschweig,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            {' '}deine Läden
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
          Entdecke lokale Geschäfte in Braunschweig, bestelle online und lass dir alles am selben Tag 
          umweltfreundlich per Fahrrad liefern. Für eine lebendige, nachhaltige Stadt.
        </p>

        {/* Newsletter Button */}
        <div className="max-w-xl mx-auto mb-12 animate-fade-in">
          <Button 
            onClick={() => setShowNewsletterForm(!showNewsletterForm)}
            className="px-8 py-6 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
          >
            Für Launch-Updates eintragen
          </Button>
          
          {/* Newsletter Form (Mailchimp Embed) */}
          {showNewsletterForm && (
            <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
              {/* Hier wird der vollständige Mailchimp-Einbettungscode eingefügt */}
              <div id="mc_embed_signup">
                <form action="https://DEINE-MAILCHIMP-URL.us21.list-manage.com/subscribe/post?u=DEINE-USER-ID&amp;id=DEINE-LIST-ID" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll" className="space-y-4">
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL" className="block text-lg font-medium text-gray-800 mb-2">E-Mail Adresse *</label>
                      <input type="email" name="EMAIL" className="required email w-full text-lg py-3 px-4 border-2 border-gray-300 focus:border-red-500 rounded-xl" id="mce-EMAIL" placeholder="deine@email.de" required />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                      <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_DEINE-USER-ID_DEINE-LIST-ID" tabIndex={-1} defaultValue="" />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input type="submit" value="Anmelden" name="subscribe" id="mc-embedded-subscribe" className="button w-full py-3 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Du erhältst nur wichtige Updates zum Launch. Keine Spam-Mails! 
                <br />
                Abmeldung jederzeit möglich.
              </p>
            </div>
          )}
        </div>

        {/* Instagram Link */}
        <div className="animate-fade-in">
          <a 
            href="https://www.instagram.com/localangelapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 text-xl font-medium"
          >
            <Instagram className="w-7 h-7" />
            Folge uns auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
