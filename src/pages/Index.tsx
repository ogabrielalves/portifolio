import { useState, useEffect, useRef, ReactNode } from "react";
import { Linkedin, Loader2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

// --- i18n Dictionary ---
const translations = {
  pt: {
    nav: { about: "Sobre Mim", experience: "Experiência", education: "Educação", skills: "Habilidades", projects: "Freelance", resume: "Currículo", contact: "Contato" },
    hero: { title: "Construindo Soluções Digitais Completas", desc: "Sou Gabriel Alves, Desenvolvedor Fullstack e Web Developer com mais de 4 anos de experiência no desenvolvimento de aplicações web robustas e escaláveis. Tenho especialização em ReactJS, VueJS, C# e Java SpringBoot, com vasta experiência em WebBanking, sistemas ERP, desenvolvimento de software, Cloud, WordPress e servidores para análise de bingo." },
    about: { title: "Sobre Mim" },
    experience: { 
      title: "Experiência", 
      present: "Atual", 
      fbm: "Desenvolvi e mantive uma aplicação web interna de configuração de servidores para o ambiente de cassinos, com comunicação de baixo nível baseada em protocolos binários (leitura e escrita de bits/bytes para controle de máquinas físicas). O servidor de comunicação era desenvolvido em C#, responsável por interpretar e transmitir comandos às máquinas físicas via protocolo proprietário. Implementei um sistema de monitoramento contínuo de logs em produção, com alertas automatizados para detecção precoce de falhas e anomalias. O frontend configurador foi construído com VueJS, integrado a um backend Java Spring Boot e banco de dados PostgreSQL.", 
      c6: "Atuei no time de Web Banking desenvolvendo componentes de interface em ReactJS para clientes pessoa jurídica (PJ), seguindo a metodologia Atomic Design para garantir consistência e reusabilidade em escala. Utilizei Storybook para documentação e catalogação dos componentes, facilitando a colaboração entre times de design e engenharia. Também contribuí na construção e manutenção de APIs REST em Java, participando do ciclo completo de desenvolvimento em um ambiente financeiro de alta criticidade.", 
      paygo: "Desenvolvi componentes e integrações para o painel de controle da plataforma de meios de pagamento, com foco em performance e escalabilidade. Trabalhei com C#, ReactJS e Docker, colaborando diretamente com o time de produto em melhorias de estabilidade e experiência do usuário." 
    },
    education: { title: "Formação", ads: "Análise e Desenvolvimento de Sistemas" },
    skills: { title: "Habilidades" },
    projects: {
      title: "Projetos Freelance",
      p1_title: "ERP Web para Microempreendedores",
      p1_desc: "Desenvolvi um ERP focado na gestão, abrangendo produtos, clientes e fornecedores. Implementei PDV rápido e ferramentas de análise de vendas com gráficos.",
      p1_feat: ["Controle de produtos", "Gestão de clientes", "PDV rápido", "Análise de vendas"],
      p2_title: "Monitoramento de Hardware",
      p2_desc: "Aplicação desktop para monitoramento em tempo real de recursos. Notifica o usuário via Slack sobre CPU, RAM, disco e GPU.",
      p2_feat: ["Em tempo real", "Alertas", "Integração Slack", "Performance"],
      p3_title: "Sistema de Vigilância com IA",
      p3_desc: "Back-end integrado com IA para gestão de empresas/unidades, planos comerciais e geração automática de contratos.",
      p3_feat: ["Gestão de empresas", "Planos comerciais", "Contratos", "Controle de acesso"],
      p4_title: "Monitoramento de Consumo de Energia",
      p4_desc: "Monitora energia e otimiza o uso de eletricidade, controlando brilho de lâmpadas com base na luz natural.",
      p4_feat: ["Monitoramento", "Otimização automática", "Iluminação", "Integração IoT"]
    },
    contact: { title: "Contato", copied: "Copiado!" }
  },
  en: {
    nav: { about: "About Me", experience: "Experience", education: "Education", skills: "Skills", projects: "Freelance", resume: "Resume", contact: "Contact" },
    hero: { title: "Fullstack Developer", desc: "Full Stack Developer with solid experience in ReactJS, VueJS, C# and Java Spring Boot. Specialized in web solutions, ERP systems, banking platforms, cloud and WordPress." },
    about: { title: "About Me" },
    experience: { title: "Experience", present: "Present", fbm: "Developed and enhanced an internal web application for configuring casino servers using Java Springboot, VueJS, and PostgreSQL.", c6: "Worked as a Web Banking intern, supporting the construction of REST APIs and ReactJS features to improve the corporate client experience.", paygo: "Developed components and integrations for the platform's control panel, collaborating with the team on performance improvements." },
    education: { title: "Education", ads: "Systems Analysis and Development" },
    skills: { title: "Skills" },
    projects: {
      title: "Freelance Projects",
      p1_title: "Web ERP for Microentrepreneurs",
      p1_desc: "Developed a Web ERP focused on management, covering products, clients, and suppliers. Implemented a fast POS and sales analysis tools with charts.",
      p1_feat: ["Products Control", "Clients Management", "Fast POS", "Sales Analysis"],
      p2_title: "Hardware Monitoring App",
      p2_desc: "Desktop application for real-time hardware monitoring. Notifies the user via Slack about CPU, RAM, disk space, and GPU usage.",
      p2_feat: ["Real-time", "Alerts", "Slack Integration", "Performance"],
      p3_title: "Surveillance System with AI",
      p3_desc: "Back-end of a surveillance system integrated with AI, responsible for company management, commercial plans, and automated contract generation.",
      p3_feat: ["Company Management", "Commercial Plans", "Contracts", "Access Control"],
      p4_title: "Energy Consumption Monitoring",
      p4_desc: "Monitors energy consumption and optimizes electricity usage, including controlling smart bulb brightness based on natural light.",
      p4_feat: ["Monitoring", "Auto Optimization", "Lighting", "IoT Integration"]
    },
    contact: { title: "Contact", copied: "Copied!" }
  }
};

// --- Animations (Intersection Observer) ---
const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    // capture the ref to cleanup safely
    const el = domRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Helpers ---
const getTagColors = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes('kotlin')) return { border: '#22C55E', bg: 'rgba(34, 197, 94, 0.1)', text: '#86EFAC' };
  if (t.includes('sql server') || t.includes('mysql')) return { border: '#EF4444', bg: 'rgba(239, 68, 68, 0.1)', text: '#FCA5A5' };
  if (t.includes('jasper')) return { border: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)', text: '#FCD34D' };
  if (t.includes('c++')) return { border: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)', text: '#93C5FD' };
  if (t.includes('java') || t.includes('spring')) return { border: '#7C3AED', bg: 'rgba(124, 58, 237, 0.1)', text: '#C4B5FD' };
  if (t.includes('react')) return { border: '#06B6D4', bg: 'rgba(6, 182, 212, 0.1)', text: '#67E8F9' };
  if (t.includes('vue')) return { border: '#10B981', bg: 'rgba(16, 185, 129, 0.1)', text: '#6EE7B7' };
  if (t.includes('postgre') || t.includes('rest')) return { border: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)', text: '#93C5FD' };
  if (t.includes('c#') || t.includes('docker')) return { border: '#EC4899', bg: 'rgba(236, 72, 153, 0.1)', text: '#F9A8D4' };
  return { border: '#333333', bg: '#111111', text: '#D1D5DB' };
};

// --- Experience Component ---
const ExperienceItem = ({ exp, isFirst }: { exp: any; isFirst: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative -ml-[2px] py-1 pl-6 md:pl-8 transition-all duration-300 border-l-[2px] border-transparent hover:border-[#7C3AED] hover:translate-x-1 hover:bg-[rgba(124,58,237,0.04)] rounded-r-xl">
      <div className={`absolute -left-[6.5px] top-2.5 w-[11px] h-[11px] rounded-full border-[2px] transition-all duration-300 z-10 ${isFirst ? 'bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]' : 'bg-[#040404] border-[#555] group-hover:border-[#7C3AED]'}`}></div>

      <div className="flex flex-col mb-2 text-left">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">{exp.company}</h3>
        <h4 className="text-sm md:text-base text-[#3B82F6] font-semibold mt-1">{exp.role}</h4>
        <span className="text-xs md:text-sm text-gray-400 mt-1">{exp.date}</span>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex md:hidden items-center space-x-2 text-sm text-[#3B82F6] hover:text-[#60A5FA] transition-colors mb-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#040404] rounded-md px-1 -ml-1 py-0.5"
      >
        <span>Ver detalhes</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 mb-0'} md:grid-rows-[1fr] md:opacity-100 md:mb-4`}>
        <div className="overflow-hidden">
          <p className="text-gray-400 leading-relaxed text-xs md:text-sm">{exp.desc}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag: string) => {
          const colors = getTagColors(tag);
          return (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wide cursor-default transition-all"
              style={{
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.bg,
                color: colors.text
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// --- Main Component ---
const Index = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = translations[lang];

  return (
    <div className="flex flex-col min-h-screen bg-bg text-white w-full font-sans selection:bg-accent selection:text-bg">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />
      {/* MAIN CONTENT FEED */}
      <main className="w-full max-w-[1100px] mx-auto px-6 flex flex-col z-40 relative">
        <About lang={lang} />
        <Skills lang={lang} />

        <Experience lang={lang} />
        <Education lang={lang} />



        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default Index;
