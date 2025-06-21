
import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Mission */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Local Angels
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Für eine lebendige Stadt Braunschweig mit starken lokalen Geschäften 
              und nachhaltigen Einkaufserlebnissen.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Made with love für Braunschweig</span>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a href="mailto:local-angel@outlook.de" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-lg">
                <Mail className="w-5 h-5" />
                local-angel@outlook.de
              </a>
              <a href="https://www.instagram.com/localangelapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors text-lg">
                <Instagram className="w-5 h-5" />
                @localangelapp
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Rechtliches</h4>
            <div className="space-y-3">
              <Link 
                to="/impressum" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                Datenschutz
              </Link>
              <Link 
                to="/agb" 
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-12 text-center">
          <p className="text-gray-400 text-lg">© 2025 Local Angels. Bald in Braunschweig verfügbar.</p>
        </div>
      </div>
    </footer>
  );
};
