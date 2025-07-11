
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const HeroSection: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full max-md:max-w-full">
      {/* Desktop Navigation Bar */}
      <nav className="hidden md:block w-full bg-white px-[120px] max-md:px-5 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/aca98719-3220-4ed9-8a17-20c2f95f28bc.png"
              alt="ROYS REMONTTI logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation links in center */}
          <div className="flex items-center gap-12 text-black text-base font-normal">
            <a href="#about" className="hover:text-gray-600 transition-colors border-b-2 border-black pb-1">
              {t.nav.about}
            </a>
            <a href="#services" className="hover:text-gray-600 transition-colors">
              {t.nav.services}
            </a>
            <a href="#project" className="hover:text-gray-600 transition-colors">
              {t.nav.project}
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              {t.nav.contact}
            </a>
          </div>
          
          {/* Desktop Language toggle on the right */}
          <div className="flex items-center gap-2 text-base">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'FI' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              FI
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'EN' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Redesigned based on the image */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex">
          {/* Left sidebar menu */}
          <div className="w-80 bg-white shadow-lg flex flex-col">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img
                src="/lovable-uploads/aca98719-3220-4ed9-8a17-20c2f95f28bc.png"
                alt="ROYS REMONTTI logo"
                className="h-10 w-auto object-contain"
              />
              <button 
                onClick={toggleMobileMenu} 
                className="w-12 h-12 bg-[#2D1B69] rounded-full flex items-center justify-center"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            
            {/* Navigation items */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                <a 
                  href="#about" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#2D1B69] text-2xl font-medium leading-relaxed hover:text-gray-600 transition-colors"
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#services" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#2D1B69] text-2xl font-medium leading-relaxed hover:text-gray-600 transition-colors"
                >
                  {t.nav.services}
                </a>
                <a 
                  href="#project" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#2D1B69] text-2xl font-medium leading-relaxed hover:text-gray-600 transition-colors"
                >
                  {t.nav.project}
                </a>
                <a 
                  href="#contact" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#2D1B69] text-2xl font-medium leading-relaxed hover:text-gray-600 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>
            
            {/* Language toggle at bottom */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleLanguage}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    language === 'FI' ? 'bg-[#2D1B69] text-white' : 'text-gray-600 hover:text-[#2D1B69]'
                  }`}
                >
                  FI
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={toggleLanguage}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    language === 'EN' ? 'bg-[#2D1B69] text-white' : 'text-gray-600 hover:text-[#2D1B69]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side overlay - clickable area to close menu */}
          <div 
            className="flex-1 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />
        </div>
      )}

      {/* Hero Content */}
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch px-[120px] max-md:px-0 mt-8 max-md:mt-0">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-[43%]">
          <div className="z-10 flex mr-[-153px] flex-col items-stretch font-normal max-md:max-w-full">
            <div className="border-neutral-200 border z-10 flex shrink-0 h-[460px] rounded-[0px_0px_45px_0px] border-solid max-md:max-w-full" />
            <div className="w-[552px] max-w-full max-md:mr-[7px]">
              <h1 className="text-black text-4xl md:text-[2.25rem] leading-tight tracking-wide max-md:max-w-full">
                {t.hero.title}
              </h1>
              <p className="text-black text-lg md:text-xl leading-relaxed mt-4 max-md:max-w-full">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex w-[57%] ml-5">
          <div className="border flex w-full flex-col rounded-[0px_0px_0px_40px] border-[rgba(203,203,203,1)] border-solid max-md:max-w-full">
            <div className="flex flex-col relative min-h-[517px] w-full rounded-[0px_0px_35px_0px] max-md:pt-[100px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/4ac91c378795973bad1afcd345bd043d0ae3a4b1?placeholderIfAbsent=true"
                alt="Construction site"
                className="absolute h-full w-full object-cover inset-0 rounded-[0px_0px_35px_0px]"
              />
              <div className="relative flex flex-col items-center justify-end h-full pt-[22px] pb-[39px] px-20 max-md:max-w-full max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/e1a21c182c61ec16b30f14a0b04cebfae0761f65?placeholderIfAbsent=true"
                  alt="Company logo"
                  className="aspect-[1] object-contain w-[70px] rounded-[0px_0px_0px_0px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Banner with overlay elements */}
        <div className="md:hidden w-full">
          <div className="relative w-full h-[100vh] min-h-[500px]">
            {/* Background Image */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/4ac91c378795973bad1afcd345bd043d0ae3a4b1?placeholderIfAbsent=true"
              alt="Construction site"
              className="absolute h-full w-full object-cover inset-0"
            />
            
            {/* Black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Top overlay with logo and hamburger */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5 z-20">
              <img
                src="/lovable-uploads/aca98719-3220-4ed9-8a17-20c2f95f28bc.png"
                alt="ROYS REMONTTI logo"
                className="h-12 w-auto object-contain"
              />
              <button
                onClick={toggleMobileMenu}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
            
            {/* Text content over the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <h1 className="text-[1.875rem] leading-tight tracking-wide font-normal mb-4">
                {t.hero.title}
              </h1>
              <p className="text-[1.125rem] leading-relaxed font-normal">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
