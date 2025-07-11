
import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CustomerBenefits } from '../components/sections/CustomerBenefits';
import { BusinessPartners } from '../components/sections/BusinessPartners';
import { DevelopmentSection } from '../components/sections/DevelopmentSection';
import { Footer } from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CustomerBenefits />
      <BusinessPartners />
      <DevelopmentSection />
      <Footer />
    </div>
  );
};

export default Index;
