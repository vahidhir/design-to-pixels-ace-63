
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectSection } from '@/components/ProjectSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch pb-[52px]">
      {/* Hero section - full width */}
      <HeroSection />
      
      {/* Main content with desktop margins */}
      <main className="max-md:px-0">
        <div className="max-w-none md:max-w-[calc(100%-240px)] md:mx-[120px]">
          <AboutSection />
          <ServicesSection />
          <ProjectSection />
        </div>
        {/* Contact section - full width background */}
        <ContactSection />
        <div className="max-w-none md:max-w-[calc(100%-240px)] md:mx-[120px]">
          <Footer />
        </div>
      </main>
    </div>
  );
}
