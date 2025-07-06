
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

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

  const currentItem = portfolioItems[currentStep as keyof typeof portfolioItems];

  return (
    <section id="project" className="w-full max-w-[1320px] mt-[113px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-black max-md:max-w-full max-md:mt-10">
            <div className="flex items-center gap-5 text-[70px] leading-[63px] font-normal tracking-[2.1px] max-md:text-[40px] max-md:leading-[36px] max-md:tracking-[1.2px]">
              <h2 className="grow shrink-0 basis-auto max-md:max-w-full">
                {t.project.title}
              </h2>
            </div>
            <div className="flex w-[454px] max-w-full flex-col text-[22px] max-md:text-[16px] tracking-[0.44px] max-md:tracking-[0.32px] mt-[42px] max-md:mt-6">
              <h3 className="text-black text-3xl max-md:text-xl font-semibold leading-none tracking-[1px] max-md:tracking-[0.6px]">
                {currentItem.title}
              </h3>
              <p className="text-[#5D5D5D] leading-[30px] max-md:leading-[24px] max-md:text-sm self-stretch mt-[26px] max-md:mt-4 max-md:max-w-full">
                {currentItem.description}
              </p>
              
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

              {/* Mobile Navigation - Horizontal scrollable */}
              <div className="md:hidden mt-6">
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {Array.from({ length: totalSteps }, (_, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    return (
                      <button
                        key={stepNumber}
                        onClick={() => handleStepClick(stepNumber)}
                        className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 text-sm ${
                          isActive
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-[#424242] border-[#E5E5E5]'
                        }`}
                        aria-label={`Go to project ${stepNumber}`}
                        aria-current={isActive ? 'true' : 'false'}
                      >
                        {stepNumber}
                      </button>
                    );
                  })}
                </div>
                
                {/* Mobile step indicator */}
                <div className="flex justify-center mt-3 gap-2">
                  {Array.from({ length: totalSteps }, (_, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    return (
                      <div
                        key={stepNumber}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-black' : 'bg-gray-300'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0 max-md:mt-6">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="aspect-[1.68] object-cover w-full grow mt-[106px] max-md:mt-0 rounded-[0px_60px_60px_60px] max-md:rounded-[0px_30px_30px_30px] max-md:max-w-full transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};
