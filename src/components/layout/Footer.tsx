
import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Lokal Shopping
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Für eine lebendige Stadt mit starken lokalen Geschäften 
              und nachhaltigen Einkaufserlebnissen.
            </p>
            <div className="flex items-center gap-2 mt-4 text-gray-300">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Made with love für deine Stadt</span>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hallo@lokalshopping.de" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hallo@lokalshopping.de
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @lokalshopping
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Lokal Shopping. Bald in deiner Stadt verfügbar.
          </p>
        </div>
      </div>
    </footer>
  );
};
