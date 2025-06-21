
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Hinweise</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              Diese Website dient ausschließlich zur Information über ein in Entwicklung befindliches Projekt. 
              Es finden keine Verkäufe oder Vertragsabschlüsse über diese Seite statt.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
