import { useState } from "react";

const SnippetBg = ({ code }: { code: string }) => (
  <pre className="absolute inset-0 p-4 text-[#1E1E1E] text-[11px] font-mono leading-tight overflow-hidden pointer-events-none select-none break-all whitespace-pre-wrap">
    {code}
  </pre>
);

export const Projects = ({ lang }: { lang: 'pt' | 'en' }) => {
  const [showAll, setShowAll] = useState(false);

  const dict = {
    pt: {
      title: "freelances.",
      view: "acessar site →",
      emptyBtn: "projeto privado",
      showMore: "ver mais projetos ↓",
      showLess: "ver menos ↑",
      projects: [
        {
          category: "FULL-STACK / WEB",
          number: "PROJETO 01",
          title: "Rebox Assistência",
          desc: "Plataforma de gestão e operação para uma empresa de assistência veicular 24/7 (carros, motos e SUVs), conectando clientes, despachadores e mecânicos em tempo real. Atuei como Full-Stack Engineer em manutenção, migração de infraestrutura e novas features: migrei a aplicação para AWS (Amplify + Route 53), reforcei a segurança do backend Next.js e redesenhei o site institucional com foco em UX e Core Web Vitals.",
          features: ["Migração completa para AWS Amplify com pipeline de CI/CD", "Auditoria e correção de vulnerabilidades críticas no backend", "Redesenho do site institucional com Next.js + React", "Chatbot no WhatsApp para atendimento e agendamento automatizado", "Redução de ~40% nas chamadas telefônicas manuais", "Otimização de queries MySQL e backup automatizado na AWS"],
          tags: ["React", "Next.js", "TypeScript", "MySQL", "AWS Amplify", "WhatsApp API"],
          code: `export async function POST(req: Request) {\n  const { phone, message } = await req.json();\n  await whatsappClient.sendMessage(phone, message);\n  return NextResponse.json({ status: 'sent' });\n}`,
          link: "http://rebox.com.br"
        },
        {
          category: "FULLSTACK / WEB",
          number: "PROJETO 02",
          title: "Sistema de Vigilância com IA",
          desc: "Backend robusto em Spring Boot para gestão empresarial de operações de vigilância, com arquitetura escalável na AWS e integração de múltiplos serviços externos. Automatiza fluxos completos de cobrança, contratos e notificações em tempo real, com autenticação JWT, controle de acesso granular (RBAC) e isolamento de dados por tenant.",
          features: ["Cobrança automatizada via Asaas, com webhooks e retry automático", "Assinatura digital de contratos via Autentique", "Notificações transacionais de e-mail e SMS via Brevo", "Atualizações em tempo real com Server-Sent Events (SSE)", "Gestão multi-empresa/multi-unidade com isolamento por tenant", "Auditoria completa e circuit breaker para APIs externas"],
          tags: ["Spring Boot 3", "Java 17", "PostgreSQL", "React", "AWS", "JWT", "Asaas", "Autentique", "Brevo"],
          code: `@PreAuthorize("hasRole('ADMIN')")\n@PostMapping("/billing")\npublic ResponseEntity<BillingResult> processBilling(@RequestBody BillingRequest req) {\n  return ResponseEntity.ok(asaasService.generateInvoice(req));\n}`,
          link: "https://vigya.com.br"
        },
        {
          category: "ERP / GESTÃO",
          number: "PROJETO 03",
          title: "ERP Web para Microempreendedores",
          desc: "Sistema ERP web completo voltado para microempreendedores, com módulos de gestão de produtos, clientes e fornecedores. Implementei um PDV otimizado para operações rápidas, painel de análise de vendas com gráficos em tempo real e controle de estoque integrado. Arquitetura fullstack com Java no backend, ReactJS no frontend e deploy em cloud Azure e AWS.",
          features: ["Gestão de produtos, clientes e fornecedores", "PDV rápido com fluxo de caixa integrado", "Dashboard de análise de vendas com gráficos", "Controle de estoque em tempo real"],
          tags: ["Java", "ReactJS", "Azure", "AWS"],
          code: `public interface TransactionRepository extends JpaRepository<Transaction, Long> {\n  @Query("SELECT t FROM Transaction t WHERE t.accountId = :accountId AND t.status = 'COMPLETED'")\n  List<Transaction> findCompletedByAccount(@Param("accountId") Long accountId);\n}`,
          link: null
        },
        {
          category: "DESKTOP / DEVOPS",
          number: "PROJETO 04",
          title: "Monitoramento de Hardware",
          desc: "Aplicação desktop para monitoramento contínuo de recursos de hardware em tempo real. Coleta métricas de CPU, RAM, disco e GPU e envia notificações automáticas via Slack quando os limites definidos são ultrapassados. Desenvolvida com foco em performance e baixo consumo de recursos do próprio sistema monitorado.",
          features: ["Coleta de métricas em tempo real (CPU, RAM, disco, GPU)", "Alertas automáticos via Slack", "Configuração de thresholds por recurso", "Interface desktop leve e responsiva"],
          tags: ["Java 8", "ReactJS", "Maven", "Azure"],
          code: `const collectMetrics = async () => {\n  const cpu = await getCPUUsage();\n  const ram = await getRAMUsage();\n  if (cpu > THRESHOLD || ram > THRESHOLD) {\n    sendSlackAlert({ cpu, ram });\n  }\n};`,
          link: null
        },
        {
          category: "IOT / AUTOMAÇÃO",
          number: "PROJETO 05",
          title: "Monitoramento de Consumo de Energia",
          desc: "Solução IoT para monitoramento e otimização do consumo de energia elétrica em ambientes residenciais e comerciais. O sistema lê a luminosidade ambiente em tempo real e ajusta automaticamente o brilho das lâmpadas, reduzindo o desperdício energético. Integração com sensores físicos via Arduino e dashboard web para visualização do consumo histórico.",
          features: ["Leitura de luminosidade via sensores Arduino", "Ajuste automático de brilho das lâmpadas", "Dashboard de consumo histórico", "Integração IoT com Node.js como middleware"],
          tags: ["Node.js", "ReactJS", "Azure", "Arduino"],
          code: `void loop() {\n  float lightLevel = readLightSensor();\n  adjustBulbBrightness(lightLevel);\n  \n  sendDataToMiddleware(lightLevel);\n  delay(2000);\n}`,
          link: null
        }
      ]
    },
    en: {
      title: "freelances.",
      view: "visit site →",
      emptyBtn: "private project",
      showMore: "show more projects ↓",
      showLess: "show less ↑",
      projects: [
        {
          category: "FULL-STACK / WEB",
          number: "PROJECT 01",
          title: "Rebox Assistência",
          desc: "Management and operations platform for a 24/7 vehicle roadside assistance company (cars, motorcycles, SUVs), connecting customers, dispatchers, and mechanics in real time. Worked as a Full-Stack Engineer on maintenance, infrastructure migration, and new features: migrated the application to AWS (Amplify + Route 53), hardened the Next.js backend, and redesigned the institutional website with a focus on UX and Core Web Vitals.",
          features: ["Full migration to AWS Amplify with a CI/CD pipeline", "Audited and fixed critical backend vulnerabilities", "Redesigned the institutional website with Next.js + React", "WhatsApp chatbot for automated support and scheduling", "~40% reduction in manual phone support calls", "MySQL query optimization and automated AWS backups"],
          tags: ["React", "Next.js", "TypeScript", "MySQL", "AWS Amplify", "WhatsApp API"],
          code: `export async function POST(req: Request) {\n  const { phone, message } = await req.json();\n  await whatsappClient.sendMessage(phone, message);\n  return NextResponse.json({ status: 'sent' });\n}`,
          link: "http://rebox.com.br"
        },
        {
          category: "FULLSTACK / WEB",
          number: "PROJECT 02",
          title: "AI-Powered Surveillance System",
          desc: "Robust Spring Boot backend for managing surveillance operations, built on a scalable AWS architecture and integrated with multiple external services. Automates end-to-end billing, contract, and real-time notification workflows, with JWT authentication, granular RBAC access control, and per-tenant data isolation.",
          features: ["Automated billing via Asaas, with webhooks and automatic retry", "Digital contract signing through Autentique", "Transactional email and SMS notifications via Brevo", "Real-time updates via Server-Sent Events (SSE)", "Multi-tenant management with per-company data isolation", "Full audit logging and circuit breaker for external APIs"],
          tags: ["Spring Boot 3", "Java 17", "PostgreSQL", "React", "AWS", "JWT", "Asaas", "Autentique", "Brevo"],
          code: `@PreAuthorize("hasRole('ADMIN')")\n@PostMapping("/billing")\npublic ResponseEntity<BillingResult> processBilling(@RequestBody BillingRequest req) {\n  return ResponseEntity.ok(asaasService.generateInvoice(req));\n}`,
          link: "https://vigya.com.br"
        },
        {
          category: "ERP / MANAGEMENT",
          number: "PROJECT 03",
          title: "Web ERP for Micro-entrepreneurs",
          desc: "Complete web ERP system primarily for micro-entrepreneurs, featuring product, customer, and supplier management modules. I implemented a POS optimized for fast operations, a sales analysis dashboard with real-time charts, and integrated inventory tracking. Fullstack architecture with Java backend, ReactJS frontend, deployed on Azure and AWS cloud.",
          features: ["Product, customer, and supplier management", "Fast POS with integrated cash flow", "Sales analysis dashboard with charts", "Real-time inventory tracking"],
          tags: ["Java", "ReactJS", "Azure", "AWS"],
          code: `public interface TransactionRepository extends JpaRepository<Transaction, Long> {\n  @Query("SELECT t FROM Transaction t WHERE t.accountId = :accountId AND t.status = 'COMPLETED'")\n  List<Transaction> findCompletedByAccount(@Param("accountId") Long accountId);\n}`,
          link: null
        },
        {
          category: "DESKTOP / DEVOPS",
          number: "PROJECT 04",
          title: "Hardware Resource Monitoring",
          desc: "Desktop application for continuous real-time hardware resource monitoring. Collects CPU, RAM, disk, and GPU metrics and sends automated Slack notifications when user-defined limits are exceeded. Developed prioritizing performance and low resource footprint on the monitored system.",
          features: ["Real-time hardware metrics (CPU, RAM, disk, GPU)", "Automated Slack alerts", "Per-resource threshold configurations", "Lightweight, responsive desktop UI"],
          tags: ["Java 8", "ReactJS", "Maven", "Azure"],
          code: `const collectMetrics = async () => {\n  const cpu = await getCPUUsage();\n  const ram = await getRAMUsage();\n  if (cpu > THRESHOLD || ram > THRESHOLD) {\n    sendSlackAlert({ cpu, ram });\n  }\n};`,
          link: null
        },
        {
          category: "IOT / AUTOMATION",
          number: "PROJECT 05",
          title: "Energy Consumption Management",
          desc: "IoT solution for monitoring and optimizing electricity consumption in residential and commercial environments. The system reads ambient luminance in real-time and automatically adjusts lighting brightness, reducing energy waste. Integrated with physical sensors via Arduino and features a centralized web dashboard for historical consumption analytics.",
          features: ["Ambient luminance sensing via Arduino", "Automated lighting brightness controls", "Historical energy consumption dashboard", "Middleware IoT integration with Node.js"],
          tags: ["Node.js", "ReactJS", "Azure", "Arduino"],
          code: `void loop() {\n  float lightLevel = readLightSensor();\n  adjustBulbBrightness(lightLevel);\n  \n  sendDataToMiddleware(lightLevel);\n  delay(2000);\n}`,
          link: null
        }
      ]
    }
  };
  const t = dict[lang];
  const visibleProjects = showAll ? t.projects : t.projects.slice(0, 2);

  return (
    <section id="projects" className="w-full relative pt-[80px] md:pt-[120px]">

      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {visibleProjects.map((proj, idx) => (
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
              <span className="font-mono text-[11px] text-muted-mid">{proj.number}</span>
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

      {t.projects.length > 2 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(v => !v)}
            className="font-mono text-[12px] text-muted-mid hover:text-accent border border-border hover:border-border-mid px-[20px] py-[10px] rounded-[2px] transition-colors duration-150"
          >
            {showAll ? t.showLess : t.showMore}
          </button>
        </div>
      )}

    </section>
  );
};
