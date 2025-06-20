
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Users, Mail } from 'lucide-react';

export const DevelopmentSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex p-4 bg-yellow-100 rounded-full mb-8">
          <Wrench className="w-8 h-8 text-yellow-600" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Wir sind noch in der Entwicklung
        </h2>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Ganz transparent: Wir arbeiten gerade am ersten Prototypen und suchen 
            <strong className="text-green-600"> Pilot-Geschäfte in deiner Stadt</strong>. 
            Wenn du ein Geschäft hast oder jemanden kennst – meld dich bei uns! 
            Gemeinsam gestalten wir die Zukunft des lokalen Shoppings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-500" />
              <span>Erste Pilot-Partner gesucht</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-green-500" />
              <span>Launch Anfang 2025 geplant</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              onClick={() => window.location.href = 'mailto:hallo@lokalshopping.de?subject=Interesse an Pilot-Partnerschaft'}
              className="px-8 py-6 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
            >
              Pilot-Partner werden
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              oder schreib uns direkt an hallo@lokalshopping.de
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
