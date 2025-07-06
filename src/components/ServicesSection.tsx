
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  hasAccent?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, hasAccent = false }) => {
  return (
    <div className="w-full md:w-[33%] max-md:min-w-[280px] max-md:flex-shrink-0">
      <div className="flex grow flex-col max-md:mt-3">
        {hasAccent && (
          <div className="bg-[rgba(0,170,170,1)] flex w-[194px] shrink-0 h-[194px]" />
        )}
        <article className={`bg-[rgba(246,246,246,1)] flex grow flex-col w-full ${hasAccent ? 'z-10 mt-[-170px] w-[392px] max-w-full px-10 py-[101px]' : 'mt-6 pt-[119px] pb-[53px] px-[73px] max-md:mt-9 max-md:pt-[100px] max-md:px-5'} rounded-[0px_0px_0px_60px] max-md:pt-[100px] max-md:px-5`}>
          <img
            src={icon}
            alt={`${title} icon`}
            className="aspect-[1] object-contain w-28 max-w-full"
          />
          <h3 className="text-[#030605] text-2xl md:text-[1.875rem] font-semibold leading-tight tracking-wide mt-[30px] max-md:text-[1.5rem]">
            {title}
          </h3>
          <p className="text-[#5D5D5D] text-base font-normal leading-relaxed tracking-wide mt-1.5">
            {description}
          </p>
        </article>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/e9919bf1848e6645aa32a896681f9d03a30069f5?placeholderIfAbsent=true",
      title: t.services.construction.title,
      description: t.services.construction.description
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/bc926ef4ae0c5677d6e42b5239e0d9da786e4093?placeholderIfAbsent=true",
      title: t.services.renovation.title,
      description: t.services.renovation.description
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/9d64c5ff06f4b08331663d9e0c131e525cfdbcf5?placeholderIfAbsent=true",
      title: t.services.interior.title,
      description: t.services.interior.description,
      hasAccent: true
    }
  ];

  return (
    <section id="services" className="self-center flex w-full max-w-[1224px] flex-col items-stretch ml-3 mt-[154px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <h2 className="text-black text-2xl md:text-[1.875rem] font-normal leading-tight tracking-wide ml-2.5 max-md:text-[1.5rem]">
        {t.services.title}
      </h2>
      <div className="mt-[11px] max-md:max-w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              hasAccent={service.hasAccent}
            />
          ))}
        </div>
        
        {/* Mobile Layout - Horizontal Scroll with improved visibility */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-8 pb-4 px-2" style={{ width: 'calc(280px * 3 + 32px + 100px)' }}>
            {services.map((service, index) => (
              <div key={index} className="relative">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  hasAccent={service.hasAccent}
                />
                {/* Visual indicator for next card */}
                {index < services.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-gradient-to-r from-transparent to-gray-300 opacity-60 rounded-r-lg"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
