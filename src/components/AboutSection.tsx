
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="flex w-full max-w-[1334px] gap-5 justify-between mt-[54px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <div className="bg-[rgba(0,170,170,1)] flex w-[47px] shrink-0 h-[829px] rounded-[0px_150px_150px_0px] max-md:hidden" />
      <div className="font-normal mt-[26px] max-md:max-w-full">
        <article className="flex max-w-full w-[793px] flex-col items-stretch pr-[72px] pb-3 rounded-[0px_0px_0px_0px] max-md:pr-5">
          <h2 className="text-black text-[52px] leading-none tracking-[-1.5px] max-md:text-[40px]">
            {t.about.title}
          </h2>
          <p className="text-[#5D5D5D] text-[28px] leading-10 tracking-[0.56px] max-md:max-w-full">
            {t.about.description}
          </p>
        </article>
        <article className="flex max-w-full w-[796px] flex-col items-stretch mt-[30px] pr-11 pb-3 rounded-[0px_0px_0px_0px] max-md:pr-5">
          <h2 className="text-black text-[52px] leading-none tracking-[-1.5px] max-md:text-[40px]">
            {t.about.servicesTitle}
          </h2>
          <p className="text-[#5D5D5D] text-[28px] leading-10 tracking-[0.56px] max-md:max-w-full">
            {t.about.servicesDescription}
          </p>
        </article>
        <article className="flex max-w-full w-[793px] flex-col mt-[30px] pr-20 pb-2 rounded-[0px_0px_0px_0px] max-md:pr-5">
          <h2 className="text-black text-[52px] leading-none tracking-[-1.5px] max-md:text-[40px]">
            {t.about.strengthsTitle}
          </h2>
          <div className="text-[#5D5D5D] text-[28px] leading-10 tracking-[0.56px] max-md:max-w-full">
            {t.about.strengths.map((strength, index) => (
              <div key={index}>✔ {strength}</div>
            ))}
          </div>
        </article>
      </div>
      <aside className="flex flex-col items-center mt-[69px] max-md:mt-10">
        <div className="border self-stretch pb-[43px] px-[3px] rounded-[200px] border-[rgba(195,195,195,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/1dc3ef58ac4bbf241cd5eca7687004713b21cc60?placeholderIfAbsent=true"
            alt="Company team"
            className="aspect-[2.02] object-contain w-full z-10 mt-[-43px] rounded-[0px_0px_0px_0px] max-md:mr-[-3px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/b4b56794d48819e1b43b6f2fa5bbcc79350c2aa9?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[0.09] object-contain w-1.5 mt-2"
        />
        <div className="flex w-44 max-w-full flex-col items-stretch font-normal whitespace-nowrap text-center">
          <div className="w-full">
            <div className="text-black text-[90px] leading-none tracking-[-1px] max-md:text-[40px]">
              +100
            </div>
            <div className="text-[#5D5D5D] text-2xl leading-8 tracking-[1px]">
              {t.about.stats.projects}
            </div>
          </div>
          <div className="self-center w-[103px] max-w-full mt-[17px]">
            <div className="text-black text-[90px] leading-none tracking-[-1px] max-md:text-[40px]">
              17
            </div>
            <div className="text-[#5D5D5D] text-2xl leading-8 tracking-[1px]">
              {t.about.stats.experience}
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/b4b56794d48819e1b43b6f2fa5bbcc79350c2aa9?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[0.09] object-contain w-1.5 mt-6"
        />
        <a
          href="#contact"
          className="bg-[rgba(18,3,92,1)] flex w-[201px] max-w-full items-center overflow-hidden text-[22px] text-white font-normal leading-none justify-center mt-6 px-10 py-4 rounded-[41px] max-md:px-5 hover:bg-[rgba(18,3,92,0.9)] transition-colors"
        >
          <div className="self-stretch flex w-[121px] flex-col items-stretch justify-center my-auto">
            <div className="text-white w-full">
              {t.about.contactButton}
            </div>
          </div>
        </a>
      </aside>
    </section>
  );
};
