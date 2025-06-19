
export const translations = {
  FI: {
    nav: {
      about: 'Meistä',
      services: 'Palvelua',
      project: 'Hanke',
      contact: 'Yhteyttä'
    },
    hero: {
      title: 'ROYS\nREMONTTI',
      subtitle: 'Rakennus- ja remonttipalvelut Varsinais-Suomessa'
    },
    about: {
      title: 'Tietoa meistä',
      description: 'Tarjoamme laadukkaita ja monipuolisia rakennus- sekä remontointipalveluita yli 17 vuoden kokemuksella.',
      servicesTitle: 'Palvelut',
      servicesDescription: 'Palveluihimme kuuluvat kodin remontit, kylpyhuoneremontit, uudisrakentaminen sekä maksuton konsultointi- ja kustannusarviopalvelu. Toteutamme työt sisätiloissa lattiasta kattoon ja ulkona perustuksista vesikattoon. Käytämme tarvittaessa luotettavia aliurakoitsijoita varmistaaksemme sujuvan toteutuksen ja aikatauluissa pysymisen.',
      strengthsTitle: 'Vahvuutemme',
      strengths: [
        'Laadukas ja huolellinen työnjälki',
        'Aikatauluissa pysyminen',
        'Ystävällinen ja asiakaslähtöinen palvelu'
      ],
      stats: {
        projects: 'Projektit\nvalmistuneet',
        experience: 'Vuosien\nkokemus'
      },
      contactButton: 'Ota yhteyttä'
    },
    services: {
      title: 'Palvelumme',
      construction: {
        title: 'Rakentaminen',
        description: 'Rakennamme kestävät ja laadukkaat ratkaisut toiveidesi mukaan, olipa kyseessä uudisrakennus tai laajennus.'
      },
      renovation: {
        title: 'Remontointi',
        description: 'Toteutamme ammattitaitoiset remontit kotiisi tai liiketilaasi, aina laadukkaasti ja huolella.'
      },
      interior: {
        title: 'Sisustussuunnittelu',
        description: 'Luomme toimivia ja tyylikkäitä tiloja, jotka yhdistävät estetiikan ja käytännöllisyyden.'
      }
    },
    project: {
      title: 'Meidän hanke',
      projectTitle: 'Keittiön remonttiprojekti',
      description: 'Keittiöremontti etenee suunnittelusta ja materiaalivalinnasta purkuun, asennukseen ja viimeistelyyn – lopputuloksena toimiva ja tyylikäs keittiö!'
    },
    contact: {
      title: 'Ota yhteyttä',
      subtitle: 'Ota rohkeasti yhteyttä saadaksesi lisätietoja palveluistamme ja projekteistamme.',
      phone: 'Puhelin',
      workingTime: 'Working Time',
      form: {
        name: 'Sinun nimesi',
        email: 'Sähköpostiosoite',
        subject: 'Aihe',
        message: 'Viesti',
        send: 'Lähetä',
        sending: 'Lähetetään...',
        namePlaceholder: 'Abc',
        emailPlaceholder: 'Abc@def.com',
        subjectPlaceholder: 'Tämä on valinnainen',
        messagePlaceholder: 'Hei! haluaisin tiedustella',
        successMessage: 'Kiitos viestistäsi! Otamme yhteyttä pian.',
        errorMessage: 'Viestin lähetys epäonnistui. Yritä uudelleen.',
        validation: {
          nameRequired: 'Nimi on pakollinen',
          emailRequired: 'Sähköposti on pakollinen',
          emailInvalid: 'Virheellinen sähköpostiosoite',
          messageRequired: 'Viesti on pakollinen'
        }
      }
    },
    footer: {
      copyright: '2025 Roys Remontti. Kaikki oikeudet pidätetään'
    }
  },
  EN: {
    nav: {
      about: 'About',
      services: 'Services',
      project: 'Project',
      contact: 'Contact'
    },
    hero: {
      title: 'ROYS\nREMONTTI',
      subtitle: 'Construction and renovation services in Southwest Finland'
    },
    about: {
      title: 'About us',
      description: 'We offer high-quality and versatile construction and renovation services with over 17 years of experience.',
      servicesTitle: 'Services',
      servicesDescription: 'Our services include home renovations, bathroom renovations, new construction, and free consultation and cost estimation services. We carry out work indoors from floor to ceiling and outdoors from foundations to roof. We use reliable subcontractors when necessary to ensure smooth implementation and staying on schedule.',
      strengthsTitle: 'Our strengths',
      strengths: [
        'High-quality and careful workmanship',
        'Staying on schedule',
        'Friendly and customer-oriented service'
      ],
      stats: {
        projects: 'Projects\ncompleted',
        experience: 'Years of\nexperience'
      },
      contactButton: 'Get in touch'
    },
    services: {
      title: 'Our services',
      construction: {
        title: 'Construction',
        description: 'We build durable and high-quality solutions according to your wishes, whether it\'s new construction or extension.'
      },
      renovation: {
        title: 'Renovation',
        description: 'We carry out professional renovations for your home or business premises, always with quality and care.'
      },
      interior: {
        title: 'Interior design',
        description: 'We create functional and stylish spaces that combine aesthetics and practicality.'
      }
    },
    project: {
      title: 'Our project',
      projectTitle: 'Kitchen renovation project',
      description: 'Kitchen renovation progresses from planning and material selection to demolition, installation and finishing – resulting in a functional and stylish kitchen!'
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Feel free to contact us for more information about our services and projects.',
      phone: 'Phone',
      workingTime: 'Working Time',
      form: {
        name: 'Your name',
        email: 'Email address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'john@example.com',
        subjectPlaceholder: 'This is optional',
        messagePlaceholder: 'Hello! I would like to inquire',
        successMessage: 'Thank you for your message! We will contact you soon.',
        errorMessage: 'Message sending failed. Please try again.',
        validation: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email address',
          messageRequired: 'Message is required'
        }
      }
    },
    footer: {
      copyright: '2025 Roys Remontti. All rights reserved'
    }
  }
};

export type TranslationKey = keyof typeof translations.FI;
