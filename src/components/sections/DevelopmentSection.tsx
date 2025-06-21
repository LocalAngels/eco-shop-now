import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Users, Mail } from 'lucide-react';
export const DevelopmentSection = () => {
  return <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex p-6 bg-orange-100 rounded-full mb-12 border-2 border-orange-200">
          <Wrench className="w-12 h-12 text-orange-600" />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Wir sind noch in der Entwicklung
        </h2>
        
        <div className="bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
          <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-light">
            Ganz transparent: Wir arbeiten gerade am ersten Prototypen und suchen 
            <strong className="text-red-600 font-semibold"> Pilot-Geschäfte in Braunschweig</strong>. 
            Wenn du ein Geschäft hast oder jemanden kennst – meld dich bei uns! 
            Gemeinsam gestalten wir die Zukunft des lokalen Shoppings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 px-6 py-4 rounded-2xl">
              <Users className="w-6 h-6 text-red-500" />
              <span className="text-lg">Erste Pilot-Partner in Braunschweig gesucht</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 bg-gray-50 px-6 py-4 rounded-2xl">
              <Mail className="w-6 h-6 text-orange-500" />
              <span className="text-lg">Launch Ende 2025 geplant</span>
            </div>
          </div>
          
          <div>
            <Button onClick={() => window.location.href = 'mailto:hallo@localangels.de?subject=Interesse an Pilot-Partnerschaft Braunschweig'} className="px-12 py-8 text-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl">
              Pilot-Partner werden
            </Button>
            <p className="text-lg text-gray-600 mt-6 font-medium">oder schreib uns direkt an local-angel@outlook.de</p>
          </div>
        </div>
      </div>
    </section>;
};