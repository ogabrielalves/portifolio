
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, me chamo',
    'hero.name': 'Gabriel Alves',
    'hero.title': 'Desenvolvedor Fullstack',
    'hero.description': 'Desenvolvedor Full Stack com experiência sólida em ReactJS, VueJS, C# e Java Spring Boot. Especializado no desenvolvimento de soluções web, sistemas ERP, plataformas bancárias, cloud computing e WordPress. Apaixonado por tecnologia, performance e experiências digitais escaláveis.', 'hero.viewProjects': 'Ver Projetos',
    'hero.downloadCV': 'Baixar Currículo',
    'hero.downloading': 'Baixando...',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor fullstack apaixonado por criar soluções escaláveis e inovadoras',
    'about.heading': 'Construindo Soluções Digitais Completas',
    'about.description1': 'Sou Gabriel Alves, Desenvolvedor Fullstack e Web Developer com mais de 3 anos de experiência no desenvolvimento de aplicações web robustas e escaláveis.',
    'about.description2': 'Tenho especialização em ReactJS, VueJS, C# e Java SpringBoot, com vasta experiência em WebBanking, sistemas ERP, desenvolvimento de software, Cloud, WordPress e servidores para análise de bingo.',
    'about.yearsExp': 'Anos de Experiência',
    'about.projectsCompleted': 'Projetos Concluídos',
    'about.availability': 'Disponibilidade',
    'about.clients': 'Clientes Satisfeitos',

    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Algumas de minhas skills',

    // Experience
    'experience.title': 'Experiências',
    'experience.subtitle': 'Estas são minhas experiências profissionais',
    'experience.professional': 'Experiência Profissional',
    'experience.education': 'Formação',

    // Projects
    'projects.title': 'Projetos Freelance',
    'projects.subtitle': 'Projetos realizados de forma autônoma para empresas e clientes, com foco em soluções escaláveis e aplicadas a demandas reais.',

    // Github
    'github.title': 'Projetos do GitHub',
    'github.showRep': 'Ver no GitHub',

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para discutir seu próximo projeto? Vamos construir algo incrível juntos',
    'contact.conversation': 'Vamos Iniciar uma Conversa',
    'contact.description': 'Estou sempre interessado em discutir novas oportunidades e projetos desafiadores. Se você precisa de um desenvolvedor fullstack, consultor técnico ou arquiteto de software, adoraria ouvir sobre seu projeto.',
    'contact.socialMedia': 'Redes Sociais',
    'contact.availableFor': 'Disponível para',
    'contact.fulltime': 'Oportunidades full-time',
    'contact.freelance': 'Projetos freelance',
    'contact.consulting': 'Consultoria técnica',
    'contact.mentoring': 'Code reviews & mentoria',
    'contact.name': 'Nome',
    'contact.lastName': 'Sobrenome',
    'contact.email': 'Email',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',

    // Footer
    'footer.description': 'Desenvolvedor fullstack apaixonado por criar soluções escaláveis e eficientes que alimentam aplicações modernas. Sempre aprendendo, sempre crescendo.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.rights': 'Gabriel Alves - Desenvolvedor Fullstack. Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    'footer.andCode': 'e muito código'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Gabriel Alves',
    'hero.title': 'Fullstack Developer',
'hero.description': 'Full Stack Developer with solid experience in ReactJS, VueJS, C#, and Java Spring Boot. Specialized in building web solutions, ERP systems, banking platforms, cloud computing, and WordPress. Passionate about technology, performance, and creating scalable digital experiences.',    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download Resume',
    'hero.downloading': 'Downloading...',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Fullstack developer passionate about creating scalable and innovative solutions',
    'about.heading': 'Building Complete Digital Solutions',
    'about.description1': 'I\'m Gabriel Alves, Fullstack Developer and Web Developer with over 3 years of experience in developing robust and scalable web applications.',
    'about.description2': 'I specialize in ReactJS, VueJS, C# and Java SpringBoot, with extensive experience in WebBanking, ERP systems, software development, Cloud, WordPress and bingo analysis servers.',
    'about.yearsExp': 'Years of Experience',
    'about.projectsCompleted': 'Projects Completed',
    'about.availability': 'Availability',
    'about.clients': 'Satisfied Clients',

    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Some of my skills',

    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'These are my professional experiences',
    'experience.professional': 'Professional Experience',
    'experience.education': 'Education',

    // Projects
    'projects.title': 'Freelance Projects',
    'projects.subtitle': 'Freelance and contract-based projects developed for companies and individual clients, focused on delivering tailored and scalable solutions for real business needs.',

    // Github
    'github.title': 'GitHub Projects',
    'github.showRep': 'See on GitHub',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to discuss your next project? Let\'s build something amazing together',
    'contact.conversation': 'Let\'s Start a Conversation',
    'contact.description': 'I\'m always interested in discussing new opportunities and challenging projects. If you need a fullstack developer, technical consultant or software architect, I\'d love to hear about your project.',
    'contact.socialMedia': 'Social Media',
    'contact.availableFor': 'Available for',
    'contact.fulltime': 'Full-time opportunities',
    'contact.freelance': 'Freelance projects',
    'contact.consulting': 'Technical consulting',
    'contact.mentoring': 'Code reviews & mentoring',
    'contact.name': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Footer
    'footer.description': 'Fullstack developer passionate about creating scalable and efficient solutions that power modern applications. Always learning, always growing.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.rights': 'Gabriel Alves - Fullstack Developer. All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.andCode': 'and lots of code'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
