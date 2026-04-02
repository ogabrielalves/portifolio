const SnippetBg = ({ code }: { code: string }) => (
  <pre className="absolute inset-0 p-4 text-[#1E1E1E] text-[11px] font-mono leading-tight overflow-hidden pointer-events-none select-none break-all whitespace-pre-wrap">
    {code}
  </pre>
);

export const Projects = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "projetos.",
      view: "ver projeto →",
      emptyBtn: "projeto privado",
      projects: [
        {
          category: "ERP / GESTÃO",
          number: "PROJETO 01",
          title: "ERP Web para Microempreendedores",
          desc: "Sistema ERP web completo voltado para microempreendedores, com módulos de gestão de produtos, clientes e fornecedores. Implementei um PDV otimizado para operações rápidas, painel de análise de vendas com gráficos em tempo real e controle de estoque integrado. Arquitetura fullstack com Java no backend, ReactJS no frontend e deploy em cloud Azure e AWS.",
          features: ["Gestão de produtos, clientes e fornecedores", "PDV rápido com fluxo de caixa integrado", "Dashboard de análise de vendas com gráficos", "Controle de estoque em tempo real"],
          tags: ["Java", "ReactJS", "Azure", "AWS"],
          code: `public interface TransactionRepository extends JpaRepository<Transaction, Long> {\n  @Query("SELECT t FROM Transaction t WHERE t.accountId = :accountId AND t.status = 'COMPLETED'")\n  List<Transaction> findCompletedByAccount(@Param("accountId") Long accountId);\n}`,
          link: null
        },
        {
          category: "DESKTOP / DEVOPS",
          number: "PROJETO 02",
          title: "Monitoramento de Hardware",
          desc: "Aplicação desktop para monitoramento contínuo de recursos de hardware em tempo real. Coleta métricas de CPU, RAM, disco e GPU e envia notificações automáticas via Slack quando os limites definidos são ultrapassados. Desenvolvida com foco em performance e baixo consumo de recursos do próprio sistema monitorado.",
          features: ["Coleta de métricas em tempo real (CPU, RAM, disco, GPU)", "Alertas automáticos via Slack", "Configuração de thresholds por recurso", "Interface desktop leve e responsiva"],
          tags: ["Java 8", "ReactJS", "Maven", "Azure"],
          code: `const collectMetrics = async () => {\n  const cpu = await getCPUUsage();\n  const ram = await getRAMUsage();\n  if (cpu > THRESHOLD || ram > THRESHOLD) {\n    sendSlackAlert({ cpu, ram });\n  }\n};`,
          link: null
        },
        {
          category: "IOT / AUTOMAÇÃO",
          number: "PROJETO 03",
          title: "Monitoramento de Consumo de Energia",
          desc: "Solução IoT para monitoramento e otimização do consumo de energia elétrica em ambientes residenciais e comerciais. O sistema lê a luminosidade ambiente em tempo real e ajusta automaticamente o brilho das lâmpadas, reduzindo o desperdício energético. Integração com sensores físicos via Arduino e dashboard web para visualização do consumo histórico.",
          features: ["Leitura de luminosidade via sensores Arduino", "Ajuste automático de brilho das lâmpadas", "Dashboard de consumo histórico", "Integração IoT com Node.js como middleware"],
          tags: ["Node.js", "ReactJS", "Azure", "Arduino"],
          code: `void loop() {\n  float lightLevel = readLightSensor();\n  adjustBulbBrightness(lightLevel);\n  \n  sendDataToMiddleware(lightLevel);\n  delay(2000);\n}`,
          link: null
        },
        {
          category: "BACKEND / IA",
          number: "PROJETO 04",
          title: "Sistema de Vigilância com IA",
          desc: "Backend robusto para sistema de gestão de empresas e unidades de vigilância, com integração de IA para automação de processos internos. Inclui cobrança automatizada via Asaas, assinatura digital de contratos com Autentique e envio de notificações por e-mail e SMS via Brevo. Controle de acesso por perfil com Spring Security e autenticação JWT.",
          features: ["Gestão multi-empresa e multi-unidade", "Cobranças automatizadas integradas ao Asaas", "Assinatura digital de contratos via Autentique", "Notificações de e-mail e SMS via Brevo", "Controle de acesso por perfil com Spring Security + JWT"],
          tags: ["Java", "Spring Security", "PostgreSQL", "AWS", "Asaas", "Autentique", "Brevo"],
          code: `@PreAuthorize("hasRole('ADMIN')")\n@PostMapping("/billing")\npublic ResponseEntity<BillingResult> processBilling(@RequestBody BillingRequest req) {\n  return ResponseEntity.ok(asaasService.generateInvoice(req));\n}`,
          link: null
        }
      ]
    },
    en: {
      title: "projects.",
      view: "view project →",
      emptyBtn: "private project",
      projects: [
        {
          category: "ERP / MANAGEMENT",
          number: "PROJECT 01",
          title: "Web ERP for Micro-entrepreneurs",
          desc: "Complete web ERP system primarily for micro-entrepreneurs, featuring product, customer, and supplier management modules. I implemented a POS optimized for fast operations, a sales analysis dashboard with real-time charts, and integrated inventory tracking. Fullstack architecture with Java backend, ReactJS frontend, deployed on Azure and AWS cloud.",
          features: ["Product, customer, and supplier management", "Fast POS with integrated cash flow", "Sales analysis dashboard with charts", "Real-time inventory tracking"],
          tags: ["Java", "ReactJS", "Azure", "AWS"],
          code: `public interface TransactionRepository extends JpaRepository<Transaction, Long> {\n  @Query("SELECT t FROM Transaction t WHERE t.accountId = :accountId AND t.status = 'COMPLETED'")\n  List<Transaction> findCompletedByAccount(@Param("accountId") Long accountId);\n}`,
          link: null
        },
        {
          category: "DESKTOP / DEVOPS",
          number: "PROJECT 02",
          title: "Hardware Resource Monitoring",
          desc: "Desktop application for continuous real-time hardware resource monitoring. Collects CPU, RAM, disk, and GPU metrics and sends automated Slack notifications when user-defined limits are exceeded. Developed prioritizing performance and low resource footprint on the monitored system.",
          features: ["Real-time hardware metrics (CPU, RAM, disk, GPU)", "Automated Slack alerts", "Per-resource threshold configurations", "Lightweight, responsive desktop UI"],
          tags: ["Java 8", "ReactJS", "Maven", "Azure"],
          code: `const collectMetrics = async () => {\n  const cpu = await getCPUUsage();\n  const ram = await getRAMUsage();\n  if (cpu > THRESHOLD || ram > THRESHOLD) {\n    sendSlackAlert({ cpu, ram });\n  }\n};`,
          link: null
        },
        {
          category: "IOT / AUTOMATION",
          number: "PROJECT 03",
          title: "Energy Consumption Management",
          desc: "IoT solution for monitoring and optimizing electricity consumption in residential and commercial environments. The system reads ambient luminance in real-time and automatically adjusts lighting brightness, reducing energy waste. Integrated with physical sensors via Arduino and features a centralized web dashboard for historical consumption analytics.",
          features: ["Ambient luminance sensing via Arduino", "Automated lighting brightness controls", "Historical energy consumption dashboard", "Middleware IoT integration with Node.js"],
          tags: ["Node.js", "ReactJS", "Azure", "Arduino"],
          code: `void loop() {\n  float lightLevel = readLightSensor();\n  adjustBulbBrightness(lightLevel);\n  \n  sendDataToMiddleware(lightLevel);\n  delay(2000);\n}`,
          link: null
        },
        {
          category: "BACKEND / AI",
          number: "PROJECT 04",
          title: "AI-Powered Surveillance System",
          desc: "Robust backend system for managing companies and surveillance units alongside AI integration for internal process automation. Features automated billing through Asaas, digital contract signing via Autentique, and automated status notifications via Brevo (Email/SMS). Built with fine-grained access control using Spring Security and JWT authentication.",
          features: ["Multi-tenant organizational management", "Automated billing via Asaas integration", "Digital contract signing through Autentique", "Multi-channel notifications using Brevo", "Role-based access control with Spring Security + JWT"],
          tags: ["Java", "Spring Security", "PostgreSQL", "AWS", "Asaas", "Autentique", "Brevo"],
          code: `@PreAuthorize("hasRole('ADMIN')")\n@PostMapping("/billing")\npublic ResponseEntity<BillingResult> processBilling(@RequestBody BillingRequest req) {\n  return ResponseEntity.ok(asaasService.generateInvoice(req));\n}`,
          link: null
        }
      ]
    }
  };
  const t = dict[lang];

  return (
    <section id="projects" className="w-full relative pt-[80px] md:pt-[120px]">
      
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {t.projects.map((proj, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-[2px] flex flex-col overflow-hidden">
            
            {/* Top Area - Snippet Background */}
            <div className="relative h-[200px] w-full bg-black border-b border-border overflow-hidden">
              <SnippetBg code={proj.code} />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 px-[10px] py-[4px] bg-black border border-accent text-accent font-mono text-[10px] uppercase">
                {proj.category}
              </div>
            </div>

            {/* Body */}
            <div className="p-[24px] flex-1">
              <span className="font-mono text-[11px] text-[#333333]">{proj.number}</span>
              <h3 className="font-sans text-[20px] font-medium text-white mt-2">{proj.title}</h3>
              <p className="font-sans text-[14px] text-muted leading-[1.7] mt-3">
                {proj.desc}
              </p>
              
              <ul className="mt-4 space-y-1">
                {proj.features.map((feat, fIdx) => (
                  <li key={fIdx} className="font-mono text-[12px] text-muted-mid">
                    — {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-[16px] px-[24px] flex items-center justify-between">
              
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="font-mono text-[11px] bg-surface text-muted border border-border px-[10px] py-[4px] rounded-[2px] transition-colors duration-150 hover:border-border-mid hover:text-white cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={proj.link || "#"} 
                className={`font-mono text-[12px] whitespace-nowrap ml-4 ${proj.link ? 'text-muted-mid hover:text-accent transition-colors' : 'text-border-mid cursor-not-allowed'}`}
                target={proj.link ? "_blank" : undefined}
                rel={proj.link ? "noreferrer" : undefined}
                onClick={e => !proj.link && e.preventDefault()}
              >
                {proj.link ? t.view : `[ ${t.emptyBtn} ]`}
              </a>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
