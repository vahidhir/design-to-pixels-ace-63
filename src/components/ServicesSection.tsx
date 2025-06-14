import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  hasAccent?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, hasAccent = false }) => {
  return (
    <div className="w-[33%] max-md:w-full max-md:ml-0">
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
          <h3 className="text-[#030605] text-3xl font-semibold leading-none tracking-[1px] mt-[30px]">
            {title}
          </h3>
          <p className="text-[#5D5D5D] text-[22px] font-normal leading-[30px] tracking-[0.44px] mt-1.5">
            {description}
          </p>
        </article>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/e9919bf1848e6645aa32a896681f9d03a30069f5?placeholderIfAbsent=true",
      title: "Rakentaminen",
      description: "Rakennamme kestävät ja laadukkaat ratkaisut toiveidesi mukaan, olipa kyseessä uudisrakennus tai laajennus."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/bc926ef4ae0c5677d6e42b5239e0d9da786e4093?placeholderIfAbsent=true",
      title: "Remontointi",
      description: "Toteutamme ammattitaitoiset remontit kotiisi tai liiketilaasi, aina laadukkaasti ja huolella."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/9d64c5ff06f4b08331663d9e0c131e525cfdbcf5?placeholderIfAbsent=true",
      title: "Sisustussuunnittelu",
      description: "Luomme toimivia ja tyylikkäitä tiloja, jotka yhdistävät estetiikan ja käytännöllisyyden.",
      hasAccent: true
    }
  ];

  return (
    <section id="services" className="self-center flex w-full max-w-[1224px] flex-col items-stretch ml-3 mt-[154px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-black text-[52px] font-normal leading-none tracking-[-1.5px] ml-2.5 max-md:text-[40px]">
        Palvelumme
      </h2>
      <div className="mt-[11px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
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
      </div>
    </section>
  );
};
