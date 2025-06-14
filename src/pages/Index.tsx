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
      <HeroSection />
      <main>
        <AboutSection />
        <ServicesSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
