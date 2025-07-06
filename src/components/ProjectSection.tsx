
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const ProjectSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const { language } = useLanguage();
  const t = translations[language];

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  // Portfolio items data
  const portfolioItems = {
    1: {
      title: language === 'FI' ? 'Moderni keittiöremontti' : 'Modern kitchen renovation',
      description: language === 'FI' 
        ? 'Keittiöremontti etenee suunnittelusta ja materiaalivalinnasta purkuun, asennukseen ja viimeistelyyn – lopputuloksena toimiva ja tyylikäs keittiö!'
        : 'Kitchen renovation progresses from planning and material selection to demolition, installation and finishing – resulting in a functional and stylish kitchen!',
      image: "https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/68951222a70d97f96264a2a61a556faeb1a325e1?placeholderIfAbsent=true"
    },
    2: {
      title: language === 'FI' ? 'Kylpyhuoneen täysremontti' : 'Complete bathroom renovation',
      description: language === 'FI'
        ? 'Kylpyhuoneen täysremontti laatoituksista ja kalustuksesta valaistukseen ja LVI-töihin. Luomme toimivan ja kauniin tilan koko perheelle.'
        : 'Complete bathroom renovation from tiling and furnishing to lighting and plumbing. We create a functional and beautiful space for the whole family.',
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    3: {
      title: language === 'FI' ? 'Olohuoneen sisustussuunnittelu' : 'Living room interior design',
      description: language === 'FI'
        ? 'Olohuoneen kokonaisvaltainen sisustussuunnittelu ja toteutus. Yhdistämme toimivuuden ja estetiikan luoden viihtyisän kokoontumispaikan.'
        : 'Comprehensive interior design and implementation of the living room. We combine functionality and aesthetics to create a cozy gathering place.',
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    4: {
      title: language === 'FI' ? 'Terassin rakentaminen ja suunnittelu' : 'Terrace construction and design',
      description: language === 'FI'
        ? 'Terassin suunnittelu ja rakentaminen perustuksista kaiteisiin. Laadukas ulkotila, joka kestää Suomen sääolosuhteet vuodesta toiseen.'
        : 'Terrace design and construction from foundations to railings. A quality outdoor space that withstands Finnish weather conditions year after year.',
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  };

  return (
    <section id="project" className="w-full max-w-[1320px] mt-[113px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-black max-md:max-w-full max-md:mt-10">
            <div className="flex items-center gap-5 text-[1.875rem] md:text-[2.25rem] leading-tight font-normal tracking-wide max-md:text-[1.5rem]">
              <h2 className="grow shrink-0 basis-auto max-md:max-w-full">
                {t.project.title}
              </h2>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex w-[300px] max-w-full items-stretch gap-2 text-[#424242] whitespace-nowrap leading-none mt-[29px]" aria-label="Project steps">
              {Array.from({ length: totalSteps }, (_, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                return (
                  <button
                    key={stepNumber}
                    onClick={() => handleStepClick(stepNumber)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-[#424242] border-[#E5E5E5] hover:border-black hover:text-black'
                    }`}
                    aria-label={`Go to project ${stepNumber}`}
                    aria-current={isActive ? 'true' : 'false'}
                  >
                    {stepNumber}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Carousel Navigation */}
            <div className="md:hidden mt-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {Object.entries(portfolioItems).map(([key, item]) => {
                    const stepNumber = parseInt(key);
                    return (
                      <CarouselItem key={stepNumber} className="basis-full">
                        <div className="p-1">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-black text-[1.5rem] font-semibold leading-tight tracking-wide">
                                {item.title}
                              </h3>
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">
                                {stepNumber}
                              </div>
                            </div>
                            <p className="text-[#5D5D5D] leading-relaxed text-base">
                              {item.description}
                            </p>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="aspect-[1.68] object-cover w-full rounded-[0px_20px_20px_20px] transition-opacity duration-300"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Desktop Content */}
            <div className="hidden md:block w-[454px] max-w-full flex-col text-base tracking-wide mt-[42px]">
              <h3 className="text-black text-2xl md:text-[1.875rem] font-semibold leading-tight tracking-wide max-md:text-[1.5rem]">
                {portfolioItems[currentStep as keyof typeof portfolioItems].title}
              </h3>
              <p className="text-[#5D5D5D] leading-relaxed self-stretch mt-[26px] max-w-full">
                {portfolioItems[currentStep as keyof typeof portfolioItems].description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Image */}
        <div className="hidden md:block w-[55%] ml-5">
          <img
            src={portfolioItems[currentStep as keyof typeof portfolioItems].image}
            alt={portfolioItems[currentStep as keyof typeof portfolioItems].title}
            className="aspect-[1.68] object-cover w-full grow mt-[106px] rounded-[0px_60px_60px_60px] transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};
