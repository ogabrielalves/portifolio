import { useState, useEffect, useRef, ReactNode } from "react";
import { Linkedin, Loader2 } from "lucide-react";

// --- i18n Dictionary ---
const translations = {
  pt: {
    nav: { about: "Sobre Mim", experience: "Experiência", education: "Educação", skills: "Habilidades", projects: "Freelance", resume: "Currículo" },
    hero: { title: "Construindo Soluções Digitais Completas", desc: "Sou Gabriel Alves, Desenvolvedor Fullstack e Web Developer com mais de 4 anos de experiência no desenvolvimento de aplicações web robustas e escaláveis. Tenho especialização em ReactJS, VueJS, C# e Java SpringBoot, com vasta experiência em WebBanking, sistemas ERP, desenvolvimento de software, Cloud, WordPress e servidores para análise de bingo." },
    about: { title: "Sobre Mim" },
    experience: { title: "Experiência", present: "Atual", fbm: "Desenvolvi e aprimorei uma aplicação web interna para configuração de servidores dos cassinos que utilizava Java Springboot, VueJS e PostgreSQL.", c6: "Atuei como estagiário em Web Banking, apoiando a construção de APIs REST e features em ReactJS para melhorar a experiência de clientes PJ.", paygo: "Desenvolvi componentes e integrações para o painel de controle da plataforma, colaborando com a equipe em melhorias de performance." },
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
    }
  },
  en: {
    nav: { about: "About Me", experience: "Experience", education: "Education", skills: "Skills", projects: "Freelance", resume: "Resume" },
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
    }
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
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
  if (t.includes('java') || t.includes('spring')) return { border: '#7C3AED', bg: 'rgba(124, 58, 237, 0.1)', text: '#C4B5FD' };
  if (t.includes('react')) return { border: '#06B6D4', bg: 'rgba(6, 182, 212, 0.1)', text: '#67E8F9' };
  if (t.includes('vue')) return { border: '#10B981', bg: 'rgba(16, 185, 129, 0.1)', text: '#6EE7B7' };
  if (t.includes('postgre') || t.includes('rest')) return { border: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)', text: '#93C5FD' };
  if (t.includes('c#') || t.includes('docker')) return { border: '#EC4899', bg: 'rgba(236, 72, 153, 0.1)', text: '#F9A8D4' };
  return { border: '#333333', bg: '#111111', text: '#D1D5DB' };
};

// --- Main Component ---
const Index = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [isDownloading, setIsDownloading] = useState(false);
  const t = translations[lang];

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    
    setTimeout(() => {
      window.location.href = "https://www.dropbox.com/scl/fi/p18hlxisxcqm2z6wztf7b/Curr-culo-Fullstack-Gabriel-Alves.pdf?rlkey=bjwncwyjcj7sgkwt81qtmavyx&st=85raedw2&dl=1";
      setTimeout(() => setIsDownloading(false), 1000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#040404] text-white w-full font-['Inter'] selection:bg-gray-700 selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 lg:p-12">
        <div className="text-xl md:text-2xl font-bold tracking-tighter z-10 w-24">GA</div>
        
        {/* Centered Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.nav.experience}</a>
          <a href="#education" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.nav.education}</a>
          <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.nav.skills}</a>
          <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t.nav.projects}</a>
        </nav>
        
        <div className="flex items-center justify-end space-x-4 md:space-x-8 z-10 w-auto">
          {/* Lang Toggle */}
          <button 
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="flex items-center bg-[#111] hover:bg-[#222] border border-[#333] rounded-md px-2 py-1 transition-colors text-xs font-semibold"
          >
            <span className={`${lang === 'pt' ? 'text-white' : 'text-gray-500'}`}>PT</span>
            <span className="mx-1 text-gray-600">|</span>
            <span className={`${lang === 'en' ? 'text-white' : 'text-gray-500'}`}>EN</span>
          </button>

          <a 
            href="#" 
            onClick={handleDownload}
            className={`hidden md:flex text-sm px-5 py-2.5 border border-[#333] rounded-md text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all items-center space-x-2 ${isDownloading ? 'bg-white text-black opacity-80 cursor-wait' : ''}`}
          >
            <span>{isDownloading ? (lang === 'pt' ? 'Baixando...' : 'Downloading...') : t.nav.resume}</span>
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            )}
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative w-full h-auto min-h-[100svh] flex flex-col md:flex-row overflow-hidden border-b border-[#0a0a0a] pt-24 md:pt-0">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 z-20 pb-12 md:pb-0 md:absolute md:top-0 md:bottom-0">
          <FadeIn>
            <div className="max-w-xl mt-8 md:mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-6">
                GABRIEL<br className="hidden md:block"/> ALVES
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-wide mb-6 md:mb-10">
                {t.hero.title}
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-12 max-w-lg">
                {t.hero.desc}
              </p>

              <div className="flex items-center space-x-6">
                <a href="https://www.linkedin.com/in/gabriel-alves-ba0064192" target="_blank" rel="noreferrer noopener" className="text-white hover:text-[#0077B5] transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/ogabrielalves" target="_blank" rel="noreferrer noopener" className="text-white hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Portrait Image with Fade */}
        <div className="relative md:absolute bottom-0 right-0 w-full md:w-5/12 h-[50vh] md:h-[90vh] z-10 flex items-end justify-center md:justify-center mt-12 md:mt-0 opacity-80 md:opacity-100">
          <img 
            src="/src/img/gabriel-profile.png" 
            alt="Gabriel Alves Profile" 
            className="w-full h-full object-cover md:object-contain object-bottom md:object-bottom grayscale mix-blend-luminosity opacity-80 md:opacity-90 max-h-[85vh] md:max-h-[90vh]"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/50 to-transparent w-[30%]" />
        </div>
        
        {/* Universal Bottom Fade -> Fades the Hero out into the main black body */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-transparent z-30 pointer-events-none" />
      </section>

      {/* MAIN CONTENT FEED (Scrollable, centered) */}
      <main className="w-full max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-32 flex flex-col space-y-24 md:space-y-32 z-40 relative">
        
        {/* Skills Section (Moved Here) */}
        <section id="skills">
          <FadeIn>
            <div className="flex items-center space-x-4 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.skills.title}</h2>
              <div className="h-px flex-1 bg-[#1e1e1e]"></div>
            </div>
            
            <div className="flex flex-col space-y-8">
              {[
                {
                  title: "Back-end",
                  color: "#7C3AED",
                  skills: [
                    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                    { name: "Springboot", icon: "https://cdn.simpleicons.org/springboot/white" },
                    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
                    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
                    { name: "Typescript", icon: "https://cdn.simpleicons.org/typescript/white" },
                    { name: "ASP.NET", icon: "https://cdn.simpleicons.org/dotnet/white" }
                  ]
                },
                {
                  title: "Databases",
                  color: "#06B6D4",
                  skills: [
                    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/white" },
                    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
                    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/white" },
                    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
                  ]
                },
                {
                  title: "Cloud & DevOps",
                  color: "#3B82F6",
                  skills: [
                    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
                    { name: "NGINX", icon: "https://cdn.simpleicons.org/nginx/white" },
                    { name: "Load Balance" }
                  ]
                },
                {
                  title: "Front-end",
                  color: "#EC4899",
                  skills: [
                    { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/white" },
                    { name: "VueJS", icon: "https://cdn.simpleicons.org/vuedotjs/white" },
                    { name: "Javascript", icon: "https://cdn.simpleicons.org/javascript/white" },
                    { name: "Tailwindcss", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
                    { name: "Sass", icon: "https://cdn.simpleicons.org/sass/white" }
                  ]
                },
                {
                  title: "CMS & Tools",
                  color: "#F59E0B",
                  skills: [
                    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/white" },
                    { name: "Maven", icon: "https://cdn.simpleicons.org/apachemaven/white" },
                    { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/white" }
                  ]
                },
                {
                  title: "Outras",
                  color: "#10B981",
                  skills: [
                    { name: "ERP Systems" },
                    { name: "Web Banking" },
                    { name: "PDV" },
                    { name: "Monitoramento" }
                  ]
                }
              ].map((category, idx) => (
                <FadeIn key={category.title} delay={idx * 100}>
                  <div className="flex flex-col">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">
                      {lang === 'pt' && category.title === 'Outras' ? 'Outras' : category.title === 'Outras' ? 'Others' : category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {category.skills.map((skill, i) => (
                        <div 
                          key={skill.name} 
                          className="px-3 py-1.5 md:px-5 md:py-2.5 transition-all duration-300 rounded-lg flex items-center justify-center space-x-2 cursor-default hover:scale-105 hover:brightness-125"
                          style={{ 
                            border: `1px solid ${category.color}`, 
                            boxShadow: `0 0 12px ${category.color}90, 0 0 24px ${category.color}60, inset 0 0 8px ${category.color}40`,
                            backgroundColor: `${category.color}15`
                          }}
                        >
                          {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-100 drop-shadow-md" style={skill.icon.includes('devicon') ? { filter: 'brightness(0) invert(1)' } : {}} />}
                          {!skill.icon && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-100 drop-shadow-md"><path d="m14.5 9-3-3-3 3"/><path d="m14.5 15-3 3-3-3"/><path d="M11.5 6v12"/></svg>
                          )}
                          <span 
                            className="text-xs md:text-sm font-bold text-white tracking-wide" 
                            style={{ textShadow: `0 0 10px ${category.color}` }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* About Me */}
        <section id="about">
          <FadeIn>
            <div className="flex items-center space-x-4 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.about.title}</h2>
              <div className="h-px flex-1 bg-[#1e1e1e]"></div>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-[#2d3139] shadow-2xl font-['JetBrains_Mono',_monospace] text-xs sm:text-sm">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-[#2d3139]">
                <div className="hidden sm:flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="px-3 py-1 bg-[#0d1117] rounded-md text-gray-300 font-semibold flex items-center space-x-2 border border-[#2d3139] border-b-0 translate-y-[1px]">
                   <span className="text-[#facc15]">☕</span>
                   <span>AboutMe.java</span>
                </div>
              </div>
              <div className="p-3 sm:p-5 md:p-8 overflow-x-auto text-gray-300 leading-relaxed max-w-full w-full">
                <pre className="text-[10px] sm:text-xs md:text-sm whitespace-pre overflow-x-auto overflow-y-hidden">
                  <code>
  <span className="text-[#c084fc]">public class</span> <span className="text-[#facc15]">AboutMe</span> {'{\n\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span> <span className="text-white">name</span>      = <span className="text-[#4ade80]">"Gabriel"</span>;{'\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span> <span className="text-white">lastname</span>  = <span className="text-[#4ade80]">"Alves"</span>;{'\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span> <span className="text-white">gender</span>    = <span className="text-[#4ade80]">"Male"</span>;{'\n\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span>[] <span className="text-white">hobbies</span> = {'{\n'}
  {'        '}<span className="text-[#4ade80]">"Volleyball"</span>, <span className="text-[#4ade80]">"Cycling"</span>, <span className="text-[#4ade80]">"Gym"</span>, <span className="text-[#4ade80]">"Coding"</span>, <span className="text-[#4ade80]">"Horror"</span>{'\n'}
  {'    }'};{'\n\n'}
  {'    '}<span className="text-[#c084fc]">public static</span> <span className="text-[#60a5fa]">int</span> <span className="text-[#fde68a]">getAge</span>() {'{\n'}
  {'        '}<span className="text-[#60a5fa]">LocalDate</span> <span className="text-white">birthday</span> = <span className="text-[#60a5fa]">LocalDate</span>.<span className="text-[#7dd3fc]">of</span>(<span className="text-[#fdba74]">2000</span>, <span className="text-[#fdba74]">3</span>, <span className="text-[#fdba74]">4</span>);{'\n'}
  {'        '}<span className="text-[#c084fc]">return</span> <span className="text-[#60a5fa]">Period</span>.<span className="text-[#7dd3fc]">between</span>(<span className="text-white">birthday</span>, <span className="text-[#60a5fa]">LocalDate</span>.<span className="text-[#7dd3fc]">now</span>()).<span className="text-[#7dd3fc]">getYears</span>();{'\n'}
  {'    }'}{'\n\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span> <span className="text-white">education</span> = <span className="text-[#4ade80]">"ADS — SPTech School"</span>;{'\n'}
  {'    '}<span className="text-[#c084fc]">private static final</span> <span className="text-[#60a5fa]">String</span> <span className="text-white">email</span>     = <span className="text-[#4ade80]">"gabrielalvessilva02@outlook.com"</span>;{'\n'}
  {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <FadeIn>
            <div className="flex items-center space-x-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.experience.title}</h2>
              <div className="h-px flex-1 bg-[#1e1e1e]"></div>
            </div>

            <div className="relative space-y-10 pl-2 md:pl-4">
              {/* Continuous Gradient Timeline Line */}
              <div className="absolute left-[8px] md:left-[16px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] to-transparent"></div>

              {[
                { company: "FBM Brasil", date: `2023 — ${t.experience.present}`, role: "Fullstack Developer", desc: t.experience.fbm, tags: ["Java", "Spring Boot", "VueJS", "PostgreSQL"] },
                { company: "C6 Bank", date: "Jul 2022 — Dez 2023", role: lang === 'pt' ? "Frontend Developer" : "Frontend Developer", desc: t.experience.c6, tags: ["Java", "ReactJS", "REST APIs"] },
                { company: "PayGo", date: "Jan 2021 — Jun 2022", role: lang === 'pt' ? "Fullstack Developer" : "Fullstack Developer", desc: t.experience.paygo, tags: ["C#", "ReactJS", "Docker"] }
              ].map((exp, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="group relative -ml-[2px] py-1 pl-6 md:pl-8 transition-all duration-300 border-l-[2px] border-transparent hover:border-[#7C3AED] hover:translate-x-1 hover:bg-[rgba(124,58,237,0.04)] rounded-r-xl">
                    <div className={`absolute -left-[6.5px] top-2.5 w-[11px] h-[11px] rounded-full border-[2px] transition-all duration-300 z-10 ${i === 0 ? 'bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]' : 'bg-[#040404] border-[#555] group-hover:border-[#7C3AED]'}`}></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 md:mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">{exp.company}</h3>
                      <span className="text-xs md:text-sm text-gray-500 font-mono mt-0.5 md:mt-0">{exp.date}</span>
                    </div>
                    <h4 className="text-sm md:text-base text-gray-300 mb-2 md:mb-3 font-medium">{exp.role}</h4>
                    <p className="text-gray-400 leading-relaxed mb-4 text-xs md:text-sm">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => {
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
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Education Section */}
        <section id="education">
          <FadeIn>
            <div className="flex items-center space-x-4 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.education.title}</h2>
              <div className="h-px flex-1 bg-[#1e1e1e]"></div>
            </div>

            <div className="pl-1 md:pl-2">
              <div 
                className="group relative bg-[#080808] p-6 md:p-8 rounded-r-xl transition-all duration-300"
                style={{
                  borderLeft: '3px solid #7C3AED',
                  boxShadow: '-8px 0 15px -3px rgba(124, 58, 237, 0.15)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 md:mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">São Paulo Tech School</h3>
                  <span className="text-xs md:text-sm text-gray-500 font-mono mt-0.5 md:mt-0">2021 — 2022</span>
                </div>
                <h4 className="text-sm md:text-base text-gray-300 font-medium">{t.education.ads}</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-1 mb-0">São Paulo, SP</p>
              </div>
            </div>
          </FadeIn>
        </section>



        {/* Freelance Projects Section */}
        <section id="projects">
          <FadeIn>
            <div className="flex items-center space-x-4 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{t.projects.title}</h2>
              <div className="h-px flex-1 bg-[#1e1e1e]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: t.projects.p1_title, desc: t.projects.p1_desc, feats: t.projects.p1_feat, tags: ["Java", "ReactJS", "Azure", "AWS"], color: "#7C3AED" },
                { title: t.projects.p2_title, desc: t.projects.p2_desc, feats: t.projects.p2_feat, tags: ["Java 8", "ReactJS", "Maven", "Azure"], color: "#06B6D4" },
                { title: t.projects.p3_title, desc: t.projects.p3_desc, feats: t.projects.p3_feat, tags: ["Java", "Spring Security", "PostgreSQL", "AWS"], color: "#3B82F6" },
                { title: t.projects.p4_title, desc: t.projects.p4_desc, feats: t.projects.p4_feat, tags: ["Node.js", "ReactJS", "Azure", "Arduino"], color: "#10B981" },
              ].map((proj, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div 
                    className="flex flex-col h-full p-6 md:p-8 rounded-b-xl rounded-tr-xl transition-all duration-300 hover:-translate-y-[3px] group relative z-0"
                    style={{ 
                      backgroundColor: '#080808',
                      borderTop: `2px solid ${proj.color}`,
                      borderRight: '1px solid #222',
                      borderBottom: '1px solid #222',
                      borderLeft: '1px solid #222'
                    }}
                  >
                    {/* Hover Dynamic Layers */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-[-1] rounded-b-xl" 
                      style={{ backgroundColor: `${proj.color}0A` }}
                    ></div>
                    <div 
                      className="absolute top-0 bottom-0 left-[-1px] w-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" 
                      style={{ backgroundColor: proj.color }}
                    ></div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">{proj.desc}</p>
                    
                    <div className="mb-6">
                      <ul className="text-xs md:text-sm text-gray-500 space-y-1.5">
                        {proj.feats.map((feat, j) => (
                          <li key={j} className="flex items-center space-x-2">
                            <span className="text-[#555] font-bold">—</span>
                            <span className="group-hover:text-gray-300 transition-colors">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tags.map(tag => (
                        <span key={tag} className="text-[10px] md:text-xs text-gray-500 font-mono bg-[#111] px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="w-full text-center py-8 text-xs text-gray-600 border-t border-[#111] z-40 bg-black">
        <p>© {new Date().getFullYear()} Gabriel Alves. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
