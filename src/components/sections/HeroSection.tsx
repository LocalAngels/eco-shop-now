

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, ShoppingBag, Bike, Heart } from 'lucide-react';

export const HeroSection = () => {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-18 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          <img 
            src="/lovable-uploads/e94959c3-9792-4691-84a9-20521a6b6f4d.png" 
            alt="Local Angels Logo" 
            className="h-72 md:h-80 mx-auto drop-shadow-sm"
          />
        </div>

        {/* Hero Icons */}
        <div className="flex justify-center items-center gap-4 mb-9 animate-fade-in">
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
            <ShoppingBag className="w-7 h-7 text-red-600" />
          </div>
          <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm">
            <Bike className="w-7 h-7 text-orange-600" />
          </div>
          <div className="p-3 bg-pink-50 rounded-2xl border border-pink-100 shadow-sm">
            <Heart className="w-7 h-7 text-pink-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
          Braunschweig,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            {' '}deine Läden
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-9 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
          Entdecke lokale Geschäfte in Braunschweig, bestelle online und lass dir alles am selben Tag 
          umweltfreundlich per Fahrrad liefern. Für eine lebendige, nachhaltige Stadt.
        </p>

        {/* Newsletter Button */}
        <div className="max-w-lg mx-auto mb-9 animate-fade-in">
          <Button 
            onClick={() => setShowNewsletterForm(!showNewsletterForm)}
            className="px-6 py-4 text-sm bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
          >
            Für Launch-Updates eintragen
          </Button>
          
          {/* Newsletter Form (Mailchimp Embed) */}
          {showNewsletterForm && (
            <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-xl animate-fade-in">
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form
                    action="https://gmx.us17.list-manage.com/subscribe/post?u=929bf5738acacbfc061ffcca7&amp;id=3f22f16241&amp;v_id=4483&amp;f_id=0058e9e3f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll" className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Newsletter abonnieren</h2>
                      <div className="text-sm text-gray-600 mb-4">
                        <span className="text-red-500">*</span> Pflichtfeld
                      </div>
                      
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-2">
                          E-Mail-Adresse <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="required email w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:ring-0 outline-none transition-colors"
                          id="mce-EMAIL"
                          required
                          defaultValue=""
                          placeholder="deine@email.de"
                        />
                      </div>
                      
                      <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                        <div className="content__gdpr">
                          <label className="block text-sm font-medium text-gray-700 mb-3">Datenschutz & Einwilligung</label>
                          <p className="text-sm text-gray-600 mb-4">
                            Wir verwenden deine E-Mail-Adresse ausschließlich, um dir Updates rund um
                            unsere App sowie gelegentliche Informationen zu lokalen Angeboten zu senden.
                          </p>
                          <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                            <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer" htmlFor="gdpr220810">
                              <input 
                                type="checkbox" 
                                id="gdpr_220810" 
                                name="gdpr[220810]" 
                                className="gdpr mt-1 w-4 h-4 text-red-500 rounded focus:ring-red-500" 
                                value="Y" 
                              />
                              <span>Ich möchte über neue Funktionen und Fortschritte bei der App-Entwicklung informiert werden</span>
                            </label>
                          </fieldset>
                          <p className="text-xs text-gray-500 mt-3">
                            Du kannst dich jederzeit abmelden, indem du auf den Link in der Fußzeile unserer
                            E-Mails klickst. Informationen zu unseren Datenschutzpraktiken findest du auf unserer Website.
                          </p>
                        </div>
                        <div className="content__gdprLegal mt-4">
                          <p className="text-xs text-gray-500">
                            We use Mailchimp as our marketing platform. By clicking below to subscribe, you
                            acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                            <a href="https://mailchimp.com/legal/terms" className="text-red-500 hover:underline">Learn more</a> about Mailchimp's privacy practices.
                          </p>
                        </div>
                      </div>
                      
                      <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                      </div>
                      
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_929bf5738acacbfc061ffcca7_3f22f16241" tabIndex={-1} defaultValue="" />
                      </div>
                      
                      <div className="optionalParent">
                        <div className="clear foot">
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                            value="Jetzt anmelden"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instagram Link */}
        <div className="animate-fade-in">
          <a 
            href="https://www.instagram.com/localangelapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 text-base font-medium"
          >
            <Instagram className="w-5 h-5" />
            Folge uns auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
