
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
            src="/lovable-uploads/7c3c6d86-2926-4aa4-a83b-eec3061e6698.png" 
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
            <div className="mt-4 p-4 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
              
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
      <div id="mc_embed_signup_scroll">
        <h2 className="text-base">Abonnieren</h2>
        <div className="indicates-required text-xs">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL" className="text-xs">
            E-Mail-Adresse <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
            defaultValue=""
          />
        </div>
        <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
          <div className="content__gdpr">
            <label className="text-xs">Datenschutz &amp; Einwilligung</label>
            <p className="text-xs">
              Wir verwenden deine E-Mail-Adresse ausschließlich, um dir Updates rund um
              unsere App sowie gelegentliche Informationen zu lokalen Angeboten zu senden.
            </p>
            <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
              <label className="checkbox subfield text-xs" htmlFor="gdpr220810">
                <input type="checkbox" id="gdpr_220810" name="gdpr[220810]" className="gdpr" value="Y" />
                <span>Ich möchte über neue Funktionen und Fortschritte bei der App-Entwicklung informiert werden</span>
              </label>
            </fieldset>
            <p className="text-xs">
              Du kannst dich jederzeit abmelden, indem du auf den Link in der Fußzeile unserer
              E-Mails klickst. Informationen zu unseren Datenschutzpraktiken findest du auf unserer Website.
            </p>
          </div>
          <div className="content__gdprLegal">
            <p className="text-xs">
              We use Mailchimp as our marketing platform. By clicking below to subscribe, you
              acknowledge that your information will be transferred to Mailchimp for processing.{' '}
              <a href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's privacy practices.
            </p>
          </div>
        </div>
        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <input type="text" name="b_929bf5738acacbfc061ffcca7_3f22f16241" tabIndex={-1} defaultValue="" />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              value="Subscribe"
            />
            <p style={{ margin: '0px auto' }}>
              <a href="http://eepurl.com/jhNA4k" title="Mailchimp - email marketing made easy and fun">
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    borderRadius: '4px',
                  }}
                >
                  <img
                    className="refferal_badge"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    style={{
                      width: '200px',
                      height: '36px',
                      display: 'flex',
                      padding: '2px 0px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </span>
              </a>
            </p>
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
