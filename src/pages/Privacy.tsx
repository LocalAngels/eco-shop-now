
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="text-gray-700 leading-relaxed">
              Wir, die Bollhorst, Heuer, Mavrin GbR, nehmen den Schutz deiner persönlichen Daten sehr ernst. 
              Nachfolgend informieren wir dich über die wichtigsten Aspekte der Datenverarbeitung auf unserer Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-gray-700 leading-relaxed">
              Beim Besuch unserer Website werden automatisch Informationen wie IP-Adresse, Datum und Uhrzeit der Anfrage, 
              Browsertyp und Betriebssystem vom Webserver protokolliert. Diese Daten sind anonymisiert und dienen nur zur 
              Sicherstellung des Betriebs und zur Verbesserung unseres Angebots.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Kontaktformular</h2>
            <p className="text-gray-700 leading-relaxed">
              Wenn du uns über das Kontaktformular Nachrichten sendest, werden deine Angaben (Name, E-Mail-Adresse, Nachricht) 
              zur Bearbeitung deiner Anfrage bei uns gespeichert. Die Daten werden über den Dienst Formspree verarbeitet, 
              der in unserem Auftrag handelt. Deine Daten werden nicht ohne deine Einwilligung weitergegeben.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Newsletter</h2>
            <p className="text-gray-700 leading-relaxed">
              Zur Anmeldung zu unserem Newsletter verwenden wir den Dienst Mailchimp. Dabei werden deine E-Mail-Adresse 
              und gegebenenfalls weitere freiwillige Angaben an Mailchimp übertragen und dort gespeichert. Mailchimp 
              verwendet deine Daten ausschließlich für den Versand unseres Newsletters und gemäß den geltenden 
              Datenschutzbestimmungen. Du kannst dich jederzeit vom Newsletter abmelden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Rechtsgrundlage der Verarbeitung</h2>
            <p className="text-gray-700 leading-relaxed">
              Die Verarbeitung deiner Daten erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
              oder zur Erfüllung unserer vertraglichen Pflichten (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Deine Rechte</h2>
            <p className="text-gray-700 leading-relaxed">
              Du hast das Recht, jederzeit Auskunft über deine gespeicherten personenbezogenen Daten zu erhalten, 
              deren Berichtigung oder Löschung zu verlangen sowie der Verarbeitung zu widersprechen. Kontaktiere uns 
              dazu gerne unter 
              <a href="mailto:local-angel@outlook.de" className="text-red-600 hover:text-red-700 ml-1">
                local-angel@outlook.de
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Änderungen der Datenschutzerklärung</h2>
            <p className="text-gray-700 leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie aktuellen rechtlichen 
              Anforderungen anzupassen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Bollhorst, Heuer, Mavrin GbR<br />
                Höpskamp 24<br />
                29633 Munster<br />
                E-Mail: 
                <a href="mailto:local-angel@outlook.de" className="text-red-600 hover:text-red-700 ml-1">
                  local-angel@outlook.de
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
