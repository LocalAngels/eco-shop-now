
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, ShoppingBag, Bike, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Danke für dein Interesse!",
        description: "Wir melden uns, sobald es in Braunschweig losgeht 🚀",
      });
      // Form wird durch Formspree verarbeitet, daher Reset nach Toast
      setTimeout(() => setEmail(''), 1000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/16c0332c-ab5f-4ccc-b67e-e7c7e00c5ba0.png" 
            alt="Local Angels Logo" 
            className="h-40 md:h-48 mx-auto drop-shadow-sm"
          />
        </div>

        {/* Hero Icons */}
        <div className="flex justify-center items-center gap-6 mb-12 animate-fade-in">
          <div className="p-4 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
            <ShoppingBag className="w-10 h-10 text-red-600" />
          </div>
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm">
            <Bike className="w-10 h-10 text-orange-600" />
          </div>
          <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100 shadow-sm">
            <Heart className="w-10 h-10 text-pink-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in leading-tight">
          Braunschweig,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            {' '}deine Läden
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
          Entdecke lokale Geschäfte in Braunschweig, bestelle online und lass dir alles am selben Tag 
          umweltfreundlich per Fahrrad liefern. Für eine lebendige, nachhaltige Stadt.
        </p>

        {/* Newsletter Signup */}
        <form 
          action="https://formspree.io/f/DEIN_ENDPUNKT" 
          method="POST" 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto mb-12 animate-fade-in"
        >
          <div className="flex gap-4 p-2 bg-white rounded-2xl border-2 border-gray-200 shadow-lg focus-within:border-red-400 transition-colors">
            <Input
              type="email"
              name="email"
              placeholder="Deine E-Mail für Launch-Updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-lg py-6 border-0 focus:ring-0 bg-transparent placeholder:text-gray-500"
              required
            />
            <Button 
              type="submit" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              Dabei sein!
            </Button>
          </div>
          <input type="hidden" name="_subject" value="Neue Newsletter-Anmeldung" />
          <input type="hidden" name="_next" value={window.location.origin} />
        </form>

        {/* Instagram Link */}
        <div className="animate-fade-in">
          <a 
            href="https://www.instagram.com/localangelapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 text-xl font-medium"
          >
            <Instagram className="w-7 h-7" />
            Folge uns auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
