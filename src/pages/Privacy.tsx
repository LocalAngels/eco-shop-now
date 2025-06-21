
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
          
          <p className="text-xl text-gray-600 mb-12">
            Wir freuen uns über dein Interesse an unserem Projekt. Der Schutz deiner Daten ist uns wichtig. 
            Hier erklären wir dir, welche Daten wir auf dieser Website verarbeiten.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Verantwortlich</h2>
            <p className="text-gray-700 leading-relaxed">
              Verantwortlich für die Datenverarbeitung ist:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Max Mustermann<br />
                Musterstraße 12<br />
                12345 Braunschweig<br />
                kontakt@lokal-app.de
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Erhobene Daten</h2>
            <p className="text-gray-700 leading-relaxed">
              Wenn du deine E-Mail-Adresse in unser Newsletterformular eingibst, speichern wir diese 
              zum Zweck der Kontaktaufnahme und Information über den Projektfortschritt.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Newsletter</h2>
            <p className="text-gray-700 leading-relaxed">
              Deine E-Mail-Adresse wird ausschließlich zur Versendung unseres Newsletters verwendet. 
              Du kannst dich jederzeit über einen Link im Newsletter oder per E-Mail bei uns abmelden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Social Media</h2>
            <p className="text-gray-700 leading-relaxed">
              Wir verlinken auf unseren Instagram-Account. Beim Anklicken des Links gelten die 
              Datenschutzbestimmungen von Instagram.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Hosting</h2>
            <p className="text-gray-700 leading-relaxed">
              Unsere Website wird bei [Anbietername, z. B. Netlify oder Vercel] gehostet. 
              Es gelten deren Datenschutzrichtlinien.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Deine Rechte</h2>
            <p className="text-gray-700 leading-relaxed">
              Du hast jederzeit das Recht auf Auskunft über die bei uns gespeicherten Daten, 
              deren Berichtigung, Löschung oder Einschränkung.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Kontakt</h2>
            <p className="text-gray-700 leading-relaxed">
              Für Datenschutzanfragen erreichst du uns unter: 
              <a href="mailto:kontakt@lokal-app.de" className="text-red-600 hover:text-red-700 ml-2">
                kontakt@lokal-app.de
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
