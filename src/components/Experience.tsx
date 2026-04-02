export const Experience = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "experiência.",
      jobs: [
        {
          company: "FBM Brasil",
          date: "2023 — Atual",
          role: "Fullstack Developer",
          status: "EM ANDAMENTO",
          desc: "Desenvolvi e mantive uma aplicação web interna de configuração de servidores para o ambiente de cassinos, com comunicação de baixo nível baseada em protocolos binários (leitura e escrita de bits/bytes para controle de máquinas físicas). O servidor de comunicação era desenvolvido em C#, responsável por interpretar e transmitir comandos às máquinas físicas via protocolo proprietário. Implementei um sistema de monitoramento contínuo de logs em produção, com alertas automatizados para detecção precoce de falhas e anomalias. O frontend configurador foi construído com VueJS, integrado a um backend Java Spring Boot e banco de dados PostgreSQL.",
          tags: ["Java", "Spring Boot", "C#", "C++", "VueJS", "PostgreSQL", "MySQL", "Jasper Report"]
        },
        {
          company: "C6 Bank",
          date: "Jul 2022 — Dez 2023",
          role: "Frontend Developer",
          desc: "Atuei no time de Web Banking desenvolvendo componentes de interface em ReactJS para clientes pessoa jurídica (PJ), seguindo a metodologia Atomic Design para garantir consistência e reusabilidade em escala. Utilizei Storybook para documentação e catalogação dos componentes, facilitando a colaboração entre times de design e engenharia. Também contribuí na construção e manutenção de APIs REST em Java, participando do ciclo completo de desenvolvimento em um ambiente financeiro de alta criticidade.",
          tags: ["Kotlin", "Spring Boot", "ReactJS", "Storybook", "Atomic Design", "REST APIs"]
        },
        {
          company: "PayGo",
          date: "Jan 2021 — Jun 2022",
          role: "Fullstack Developer",
          desc: "Desenvolvi componentes e integrações para o painel de controle da plataforma de meios de pagamento, com foco em performance e escalabilidade. Trabalhei com C#, ReactJS e Docker, colaborando diretamente com o time de produto em melhorias de estabilidade e experiência do usuário.",
          tags: ["C#", "ReactJS", "Docker", "SQL Server"]
        }
      ]
    },
    en: {
      title: "experience.",
      jobs: [
        {
          company: "FBM Brasil",
          date: "2023 — Present",
          role: "Fullstack Developer",
          status: "CURRENT",
          desc: "Developed and maintained an internal web application for server configuration in casino environments, featuring low-level communication via binary protocols (bit/byte reading and writing for physical machine control). The communication server was built in C#, interpreting and transmitting commands via a proprietary protocol. Implemented a continuous production log monitoring system with automated alerts for early detection of failures and anomalies. The configurator frontend was built with VueJS, integrated with a Java Spring Boot backend and PostgreSQL database.",
          tags: ["Java", "Spring Boot", "C#", "C++", "VueJS", "PostgreSQL", "MySQL", "Jasper Report"]
        },
        {
          company: "C6 Bank",
          date: "Jul 2022 — Dec 2023",
          role: "Frontend Developer",
          desc: "Worked in the Web Banking team developing ReactJS interface components for corporate clients, following the Atomic Design methodology to ensure consistency and large-scale reusability. Used Storybook for documentation and component cataloging, bridging the gap between design and engineering teams. Also contributed to building and maintaining REST APIs in Java, participating in the full development lifecycle within a highly critical financial environment.",
          tags: ["Kotlin", "Spring Boot", "ReactJS", "Storybook", "Atomic Design", "REST APIs"]
        },
        {
          company: "PayGo",
          date: "Jan 2021 — Jun 2022",
          role: "Fullstack Developer",
          desc: "Developed components and integrations for the payment platform dashboard, focusing on performance and scalability. Worked with C#, ReactJS, and Docker, collaborating directly with the product team to improve stability and user experience.",
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
            <div className="pl-[40px] sm:pl-[60px] md:pl-[80px] relative z-10">
              
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
