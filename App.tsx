import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import InternationalSection from './components/InternationalSection';
import PricingSection from './components/PricingSection';
import MainFunctions from './components/MainFunctions';
import FuelSection from './components/FuelSection';
import CameraSection from './components/CameraSection';
import RadioSection from './components/RadioSection';
import Extras from './components/Extras';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <MainFunctions />
        <PricingSection />
        <InternationalSection />
        <CameraSection />
        <RadioSection />
        <FuelSection />
        <Extras />
        <Testimonials />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
};

export default App;