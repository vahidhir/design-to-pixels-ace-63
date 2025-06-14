import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nimi on pakollinen';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Sähköposti on pakollinen';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Virheellinen sähköpostiosoite';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Viesti on pakollinen';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Kiitos viestistäsi! Otamme yhteyttä pian.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Viestin lähetys epäonnistui. Yritä uudelleen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[rgba(246,246,246,1)] flex w-full items-center gap-[31px] flex-wrap mt-[169px] pr-20 py-[74px] max-md:max-w-full max-md:mt-10 max-md:pr-5">
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
          Puhelin
        </h3>
        <a href="tel:+358401225544" className="text-[#5D5D5D] mt-2.5 hover:text-black transition-colors">
          Mobile: +(358) 040 122 5544
        </a>
        <h3 className="text-black text-3xl font-semibold leading-none tracking-[1px] self-stretch mt-6 max-md:mr-1.5">
          Working Time
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
          Ota yhteyttä
        </h2>
        <p className="text-[#5D5D5D] text-center text-2xl leading-8 tracking-[1px] mt-[15px] max-md:max-w-full">
          Ota rohkeasti yhteyttä saadaksesi lisätietoja palveluistamme ja
          projekteistamme.
        </p>
        <form onSubmit={handleSubmit} className="flex w-[530px] max-w-full flex-col items-stretch text-3xl mt-[52px] max-md:mt-10">
          <div className="mb-5">
            <label htmlFor="name" className="font-semibold leading-none tracking-[1px] ml-8 max-md:ml-2.5 block">
              Sinun nimesi
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Abc"
              className={`bg-white border text-base mt-2 px-[30px] py-[26px] rounded-[40px] border-solid max-md:max-w-full max-md:px-5 w-full ${
                errors.name ? 'border-red-500' : 'border-[rgba(159,159,159,1)]'
              } focus:outline-none focus:border-[rgba(18,3,92,1)] transition-colors`}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1 ml-8 max-md:ml-2.5">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="font-semibold leading-none tracking-[1px] ml-8 max-md:ml-2.5 block">
              Sähköpostiosoite
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Abc@def.com"
              className={`bg-white border text-base mt-2 px-[30px] py-[26px] rounded-[40px] border-solid max-md:max-w-full max-md:px-5 w-full ${
                errors.email ? 'border-red-500' : 'border-[rgba(159,159,159,1)]'
              } focus:outline-none focus:border-[rgba(18,3,92,1)] transition-colors`}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1 ml-8 max-md:ml-2.5">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="subject" className="font-semibold leading-none tracking-[1px] ml-9 max-md:ml-2.5 block">
              Aihe
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Tämä on valinnainen"
              className="bg-white border text-base border-[rgba(159,159,159,1)] mt-2 px-[30px] py-[26px] rounded-[40px] border-solid max-md:max-w-full max-md:px-5 w-full focus:outline-none focus:border-[rgba(18,3,92,1)] transition-colors"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="font-semibold leading-none tracking-[1px] ml-[30px] max-md:ml-2.5 block">
              Viesti
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Hei! haluaisin tiedustella"
              rows={4}
              className={`bg-white border text-base mt-2 pt-[26px] pb-[26px] px-[30px] rounded-[40px] border-solid max-md:max-w-full max-md:mr-[3px] max-md:px-5 w-full resize-none ${
                errors.message ? 'border-red-500' : 'border-[rgba(159,159,159,1)]'
              } focus:outline-none focus:border-[rgba(18,3,92,1)] transition-colors`}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1 ml-[30px] max-md:ml-2.5">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[rgba(18,3,92,1)] flex items-center overflow-hidden text-[22px] text-white whitespace-nowrap leading-none justify-center mt-[22px] px-10 py-4 rounded-[41px] max-md:mr-[3px] max-md:px-5 hover:bg-[rgba(18,3,92,0.9)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <div className="self-stretch flex w-[67px] flex-col items-stretch justify-center my-auto">
              <div className="text-white w-full">
                {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
              </div>
            </div>
          </button>

          {submitMessage && (
            <p className={`text-center mt-4 ${submitMessage.includes('Kiitos') ? 'text-green-600' : 'text-red-600'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
