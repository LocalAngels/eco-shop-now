import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-18 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex p-6 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
          Vielen Dank!
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed animate-fade-in font-light">
          Du hast dich erfolgreich für unseren Newsletter angemeldet. Du erhältst in wenigen Minuten eine 
          Bestätigungs-E-Mail. Bitte klicke auf den Link in der E-Mail, um deine Anmeldung zu bestätigen.
        </p>

        {/* Additional Message */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-lg font-semibold text-gray-900">Was passiert als Nächstes?</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Du erhältst eine Bestätigungs-E-Mail und wirst als Erstes informiert, sobald unsere App 
            verfügbar ist. Folge uns auch gerne auf Instagram für Behind-the-Scenes Updates!
          </p>
        </div>

        {/* Back to Homepage Button */}
        <div className="animate-fade-in">
          <Link to="/">
            <Button className="px-8 py-4 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl">
              Zurück zur Startseite
            </Button>
          </Link>
        </div>

        {/* Instagram Link */}
        <div className="mt-8 animate-fade-in">
          <a 
            href="https://www.instagram.com/localangelsapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 text-base font-medium"
          >
            <Heart className="w-5 h-5" />
            Folge uns auf Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;