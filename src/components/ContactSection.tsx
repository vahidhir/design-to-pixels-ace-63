
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="bg-[rgba(246,246,246,1)] flex w-full items-center gap-[31px] flex-wrap mt-[169px] py-[74px] max-md:max-w-full max-md:mt-10">
      <div className="w-full max-w-none md:max-w-[calc(100%-240px)] md:mx-[120px] px-5 md:px-0 flex items-center gap-[31px] flex-wrap">
        <div className="border self-stretch flex w-32 shrink-0 h-[796px] my-auto rounded-[250px_0px_0px_250px] border-[rgba(195,195,195,1)] border-solid" />
        <aside className="self-stretch my-auto max-md:hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/e2ddc2234ad06dade30a8c851f565c8c78b596ed?placeholderIfAbsent=true"
            alt="Contact icon"
            className="aspect-[1] object-contain w-[30px]"
          />
          <div className="flex flex-col mt-[119px] pl-1.5 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/c0f1f54c316afb2f9be4182e06c5c5369e9b49dc?placeholderIfAbsent=true"
              alt="Location icon"
              className="aspect-[1] object-contain w-[23px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/9307094a18483e563e8d919ee361e5a77616c39f?placeholderIfAbsent=true"
              alt="Time icon"
              className="aspect-[0.79] object-contain w-[22px] mt-[185px] max-md:mt-10"
            />
          </div>
        </aside>
        <address className="self-stretch flex flex-col text-[28px] text-[#5D5D5D] font-normal tracking-[0.56px] leading-10 my-auto not-italic">
          <h3 className="text-black text-3xl font-semibold leading-none tracking-[1px]">
            {t.contact.phone}
          </h3>
          <a href="tel:+358401225544" className="text-[#5D5D5D] mt-2.5 hover:text-black transition-colors">
            Mobile: +(358) 040 122 5544
          </a>
          <h3 className="text-black text-3xl font-semibold leading-none tracking-[1px] self-stretch mt-6 max-md:mr-1.5">
            {t.contact.workingTime}
          </h3>
          <div className="text-[#5D5D5D] mt-2.5">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </div>
          <div className="text-[#5D5D5D] mt-2.5">
            Serkunkuja 7, 20900 Turku
          </div>
        </address>
        <div className="self-stretch flex flex-col text-black font-normal max-md:max-w-full">
          <h2 className="text-[52px] leading-none tracking-[-1.5px] ml-[97px] max-md:text-[40px] max-md:ml-2.5">
            {t.contact.title}
          </h2>
          <p className="text-[#5D5D5D] text-center text-2xl leading-8 tracking-[1px] mt-[15px] max-md:max-w-full">
            {t.contact.subtitle}
          </p>
          <div className="text-center mt-[52px] max-md:mt-10">
            <a 
              href="mailto:info@roysremontti.com" 
              className="text-[28px] text-[rgba(18,3,92,1)] font-semibold hover:underline transition-colors"
            >
              info@roysremontti.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
