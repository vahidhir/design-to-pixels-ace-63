import React, { useState } from 'react';

export const ProjectSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <section id="project" className="w-full max-w-[1320px] mt-[113px] max-md:max-w-full max-md:mt-10 px-[120px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] max-md:w-full max-md:ml-0">
          <article className="flex flex-col font-normal max-md:max-w-full max-md:mt-10">
            <div className="border w-[411px] max-w-full text-[52px] text-black tracking-[-1.5px] leading-none pt-[88px] pb-4 px-[70px] rounded-[200px] border-[rgba(195,195,195,1)] border-solid max-md:text-[40px] max-md:pr-[-13px] max-md:pl-5">
              Meidän hanke
            </div>
            <div className="flex w-[454px] max-w-full flex-col text-[22px] tracking-[0.44px] mt-[42px] max-md:mt-10">
              <h3 className="text-black text-3xl font-semibold leading-none tracking-[1px]">
                Keittiön remonttiprojekti
              </h3>
              <p className="text-[#5D5D5D] leading-[30px] self-stretch mt-[26px] max-md:max-w-full">
                Keittiöremontti etenee suunnittelusta ja materiaalivalinnasta
                purkuun, asennukseen ja viimeistelyyn – lopputuloksena toimiva
                ja tyylikäs keittiö!
              </p>
              <nav className="flex w-[300px] max-w-full items-stretch gap-2 text-[#424242] whitespace-nowrap leading-none mt-[29px]" aria-label="Project steps">
                {Array.from({ length: totalSteps }, (_, index) => {
                  const step = index + 1;
                  const isActive = step === currentStep;
                  return (
                    <button
                      key={step}
                      onClick={() => handleStepClick(step)}
                      className={`w-9 h-9 pb-1.5 px-3.5 rounded-[50%] transition-colors ${
                        isActive
                          ? 'bg-[rgba(18,3,92,1)] text-white'
                          : 'border border-[rgba(220,220,220,1)] border-solid hover:bg-gray-100'
                      }`}
                      aria-label={`Step ${step}`}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      {step}
                    </button>
                  );
                })}
              </nav>
            </div>
          </article>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/68951222a70d97f96264a2a61a556faeb1a325e1?placeholderIfAbsent=true"
            alt="Kitchen renovation project"
            className="aspect-[1.68] object-contain w-full grow mt-[106px] rounded-[0px_60px_60px_60px] max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
