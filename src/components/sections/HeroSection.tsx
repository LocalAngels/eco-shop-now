
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
      console.log('Newsletter signup:', email);
      toast({
        title: "Danke für dein Interesse!",
        description: "Wir melden uns, sobald es in Braunschweig losgeht 🚀",
      });
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/16c0332c-ab5f-4ccc-b67e-e7c7e00c5ba0.png" 
            alt="Local Angels Logo" 
            className="h-24 md:h-32 mx-auto"
          />
        </div>

        {/* Hero Icons */}
        <div className="flex justify-center items-center gap-4 mb-8 animate-fade-in">
          <div className="p-3 bg-red-100 rounded-full">
            <ShoppingBag className="w-8 h-8 text-red-600" />
          </div>
          <div className="p-3 bg-orange-100 rounded-full">
            <Bike className="w-8 h-8 text-orange-600" />
          </div>
          <div className="p-3 bg-pink-100 rounded-full">
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Braunschweig,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            {' '}deine Läden
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Entdecke lokale Geschäfte in Braunschweig, bestelle online und lass dir alles am selben Tag 
          umweltfreundlich per Fahrrad liefern. Für eine lebendige, nachhaltige Stadt.
        </p>

        {/* Newsletter Signup */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 animate-fade-in">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Deine E-Mail für Launch-Updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-lg py-6 border-2 border-gray-200 focus:border-red-400"
              required
            />
            <Button 
              type="submit" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
              Dabei sein!
            </Button>
          </div>
        </form>

        {/* Instagram Link */}
        <div className="animate-fade-in">
          <a 
            href="https://www.instagram.com/localangelapp/?igsh=MXFtOTR1N2syOXE0cg%3D%3D#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors duration-300 text-lg"
          >
            <Instagram className="w-6 h-6" />
            Folge uns auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
