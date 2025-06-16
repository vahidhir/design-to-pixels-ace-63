
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <header className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch px-[120px] max-md:px-5">
        <div className="w-[43%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex mr-[-153px] flex-col items-stretch font-normal max-md:max-w-full">
            <div className="border-neutral-200 border z-10 flex shrink-0 h-[460px] rounded-[0px_0px_45px_0px] border-solid max-md:max-w-full" />
            <div className="w-[552px] max-w-full max-md:mr-[7px]">
              <h1 className="text-black text-[97px] leading-[89px] tracking-[2.91px] max-md:max-w-full max-md:text-[40px] max-md:leading-[41px]">
                ROYS
                <br />
                REMONTTI
              </h1>
              <p className="text-black text-[38px] leading-[51px] mt-4 max-md:max-w-full">
                Rakennus- ja remonttipalvelut Varsinais-Suomessa
              </p>
            </div>
          </div>
        </div>
        <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
          <div className="border flex w-full flex-col pt-8 pb-[17px] rounded-[0px_0px_0px_40px] border-[rgba(203,203,203,1)] border-solid max-md:max-w-full">
            <nav className="flex items-stretch gap-[37px] text-lg font-normal whitespace-nowrap flex-wrap max-md:max-w-full">
              <div className="flex flex-col items-stretch text-black grow shrink-0 basis-0 w-fit pb-6 max-md:max-w-full">
                <div className="z-10 flex items-center justify-between">
                  <div className="self-stretch flex min-w-60 h-3.5 w-[443px] items-center gap-[40px_65px] justify-between my-auto">
                    <a href="#about" className="self-stretch my-auto hover:text-gray-600 transition-colors">
                      meistä
                    </a>
                    <a href="#services" className="self-stretch my-auto hover:text-gray-600 transition-colors">
                      palvelua
                    </a>
                    <a href="#project" className="self-stretch my-auto hover:text-gray-600 transition-colors">
                      hanke
                    </a>
                    <a href="#contact" className="self-stretch my-auto hover:text-gray-600 transition-colors">
                      yhteyttä
                    </a>
                  </div>
                </div>
                <div className="bg-black self-center flex mt-[-26px] w-[52px] shrink-0 h-0.5 ml-[183px] rounded-[1px]" />
              </div>
              <div className="text-white mt-2.5">
                FI
              </div>
            </nav>
            <div className="flex flex-col relative min-h-[517px] w-[714px] max-w-full mt-[7px] pt-[386px] rounded-[0px_0px_35px_0px] max-md:pt-[100px]">
              <img
                src="/lovable-uploads/b8e402e4-07ee-4cf2-a43c-cda750060c05.png"
                alt="Modern house construction"
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative flex flex-col items-center pt-[22px] pb-[39px] px-20 rounded-[35px_0px_0px_0px] max-md:max-w-full max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/25f45d5e31b44bdd9067a3d1419748f2/e1a21c182c61ec16b30f14a0b04cebfae0761f65?placeholderIfAbsent=true"
                  alt="Company logo"
                  className="aspect-[1] object-contain w-[70px] rounded-[0px_0px_0px_0px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
