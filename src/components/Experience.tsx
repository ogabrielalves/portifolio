import { FBMLogo, C6BankLogo, PaygoLogo } from './logos/CompanyLogos';

export const Experience = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "experiência.",
      jobs: [
        {
          company: "FBM Brasil",
          logo: FBMLogo,
          date: "2023 — Atual",
          role: "Fullstack Developer",
          status: "AINDA NA EMPRESA",
          desc: "Desenvolvi e mantive o configurador web que permitia criar e personalizar estabelecimentos de cassino, servindo como painel de administração em VueJS para o servidor de comunicação com as máquinas físicas. Esse servidor, desenvolvido em .NET/C#, interpretava e transmitia comandos às máquinas via protocolo proprietário hexadecimal. Também mantive uma aplicação separada em Java Spring Boot com PostgreSQL, responsável por capturar e exibir logs de produção, permitindo identificar erros com antecedência. Participei ainda da integração de um novo meio de pagamento instantâneo para os cassinos da rede FBM nas Filipinas, similar ao PIX brasileiro, com backend em Spring Boot utilizando Server-Sent Events (SSE) para comunicação rápida com as máquinas.",
          tags: ["Java", "Spring Boot", "C#", "C++", "VueJS", "PostgreSQL", "MySQL", "Jasper Report"]
        },
        {
          company: "C6 Bank",
          logo: C6BankLogo,
          date: "Jul 2022 — Dez 2023",
          role: "Frontend Developer",
          desc: "Atuei no time de Web Banking do C6, desenvolvendo componentes de interface em ReactJS para clientes pessoa jurídica seguindo a metodologia Atomic Design, o que garantia consistência visual e reusabilidade em escala entre os produtos. Documentei e cataloguei os componentes no Storybook, facilitando a colaboração entre os times de design e engenharia. Também contribuí na construção e manutenção de APIs REST em Java, participando do ciclo completo de desenvolvimento em um ambiente financeiro de alta criticidade.",
          tags: ["Kotlin", "Spring Boot", "ReactJS", "Storybook", "Atomic Design", "REST APIs"]
        },
        {
          company: "PayGo",
          logo: PaygoLogo,
          date: "Jan 2021 — Jun 2022",
          role: "Fullstack Developer",
          desc: "Desenvolvi componentes e integrações para o painel de controle da plataforma de meios de pagamento da PayGo, com foco em performance e escalabilidade. Trabalhando com C#, ReactJS e Docker, colaborei diretamente com o time de produto em melhorias contínuas de estabilidade, confiabilidade e experiência do usuário.",
          tags: ["C#", "ReactJS", "Docker", "SQL Server"]
        }
      ]
    },
    en: {
      title: "experience.",
      jobs: [
        {
          company: "FBM Brasil",
          logo: FBMLogo,
          date: "2023 — Present",
          role: "Fullstack Developer",
          status: "CURRENT",
          desc: "I developed and maintained the web configurator used to create and customize casino establishment setups, an administration panel built in VueJS for the server that communicated with the physical machines. That server, built in .NET/C#, interpreted and transmitted commands to the machines through a proprietary hexadecimal protocol. I also maintained a separate Java Spring Boot application with PostgreSQL, responsible for capturing and displaying production logs so errors could be caught early. I additionally took part in integrating a new instant payment method for FBM's casino network in the Philippines, similar to Brazil's PIX, with a Spring Boot backend using Server-Sent Events (SSE) for fast communication with the machines.",
          tags: ["Java", "Spring Boot", "C#", "C++", "VueJS", "PostgreSQL", "MySQL", "Jasper Report"]
        },
        {
          company: "C6 Bank",
          logo: C6BankLogo,
          date: "Jul 2022 — Dec 2023",
          role: "Frontend Developer",
          desc: "I worked on C6's Web Banking team, building ReactJS interface components for corporate clients using the Atomic Design methodology to keep the product suite visually consistent and reusable at scale. I documented and cataloged components in Storybook, bridging design and engineering teams. I also contributed to building and maintaining REST APIs in Java, taking part in the full development lifecycle within a highly critical financial environment.",
          tags: ["Kotlin", "Spring Boot", "ReactJS", "Storybook", "Atomic Design", "REST APIs"]
        },
        {
          company: "PayGo",
          logo: PaygoLogo,
          date: "Jan 2021 — Jun 2022",
          role: "Fullstack Developer",
          desc: "I developed components and integrations for PayGo's payment platform dashboard, focusing on performance and scalability. Working with C#, ReactJS, and Docker, I collaborated directly with the product team on continuous improvements to stability, reliability, and user experience.",
          tags: ["C#", "ReactJS", "Docker", "SQL Server"]
        }
      ]
    }
  };
  const t = dict[lang];

  return (
    <section id="experience" className="w-full relative pt-[80px] md:pt-[120px]">
      
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="flex flex-col">
        {t.jobs.map((job, idx) => (
          <div key={idx} className="relative w-full">
            
            {/* Big Number Background */}
            <div className="absolute left-0 top-[-20px] pointer-events-none select-none z-0">
              <span className="font-mono font-bold leading-none text-[#1A1A1A] text-[clamp(64px,8vw,96px)]">
                0{idx + 1}
              </span>
            </div>

            {/* Content Container */}
            <div className="pl-[40px] sm:pl-[60px] md:pl-[80px] relative z-10 flex gap-5 md:gap-7">

              {/* Logo Badge */}
              <div className="shrink-0 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-surface border border-border rounded-[2px]">
                <job.logo className="h-8 md:h-11 w-auto max-w-[75%] object-contain" />
              </div>

              <div className="flex-1 min-w-0">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-sans text-[18px] md:text-[22px] font-medium text-white leading-tight">{job.company}</h3>
                  <span className="font-mono text-[11px] sm:text-[13px] text-muted-mid mt-2 sm:mt-0">{job.date}</span>
                </div>

                {/* Role & Status */}
                <div className="flex items-center space-x-4 mt-1">
                  <span className="font-sans text-[15px] text-accent">{job.role}</span>
                  {job.status && (
                    <span className="font-mono text-[10px] bg-surface border border-accent text-accent px-2 py-[2px] rounded-[2px] uppercase">
                      {job.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-sans text-[14px] text-muted leading-[1.8] mt-4 max-w-[680px]">
                  {job.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] bg-surface text-muted border border-border px-[10px] py-[4px] rounded-[2px] transition-colors duration-150 hover:border-border-mid hover:text-white cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* Divider (skip on last) */}
            {idx !== t.jobs.length - 1 && (
              <div className="w-full h-px bg-border my-[32px] md:my-[48px]"></div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
