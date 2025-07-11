
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG:</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Bollhorst, Heuer, Mavrin GbR<br />
                Höpskamp 24<br />
                29633 Munster<br />
                Deutschland
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt:</h2>
            <p className="text-gray-700">
              Telefon: +49 15161053344<br />
              E-Mail: 
              <a href="mailto:local-angels@outlook.de" className="text-red-600 hover:text-red-700 ml-2">
                local-angels@outlook.de
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertreten durch die Gesellschafter:</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Jan Bollhorst<br />
                Lauritz Heuer<br />
                Max Mavrin
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Jan Bollhorst
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
