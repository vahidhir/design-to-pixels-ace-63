
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [language, setLanguage] = useState<'FI' | 'EN'>('FI');

  const toggleLanguage = () => {
    setLanguage(language === 'FI' ? 'EN' : 'FI');
  };

  return (
    <footer className="self-center flex w-full max-w-[1200px] flex-col items-stretch mt-[61px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <div className="flex w-full items-center justify-between max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/fcb43816f745ff4295fe209acbb55debd996aea1?placeholderIfAbsent=true"
          alt="ROYS REMONTTI logo"
          className="aspect-[3.25] object-contain w-[107px] self-stretch my-auto"
        />
        <div className="flex items-center gap-2 text-base text-black">
          <button
            onClick={toggleLanguage}
            className={`px-2 py-1 rounded transition-colors ${
              language === 'FI' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            FI
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={toggleLanguage}
            className={`px-2 py-1 rounded transition-colors ${
              language === 'EN' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            EN
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-base text-black font-normal mt-[61px] pb-1.5 rounded-[0px_0px_0px_0px] max-md:mt-10">
        <hr className="border z-10 shrink-0 h-px border-[rgba(217,217,217,1)] border-solid max-md:max-w-full" />
        <p className="mt-8">
          2025 Roys Remontti. Kaikki oikeudet pidätetään
        </p>
      </div>
    </footer>
  );
};
