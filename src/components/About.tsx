export const About = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "sobre mim.",
      p1: "Apaixonado por resolver problemas reais e facilitar processos que antes eram manuais, lentos ou quebravam em produção. Tenho experiência sólida com Java e Spring Boot no backend, .NET/C# em sistemas de comunicação de baixo nível, e React e VueJS no frontend.",
      p2: "Já desenvolvi desde ERPs completos até sistemas embarcados com protocolo binário e integração com hardware físico. Também tenho passagens por Python e Node.js quando o problema pedia.",
      p3: "Atualmente na FBM Brasil, onde desenvolvo e mantenho um servidor de comunicação com máquinas de jogos de cassino baseado em protocolo proprietário hexadecimal, faço review de código, implemento novas features, corrijo bugs e monitoro logs em produção para garantir estabilidade do sistema. Gosto de novos desafios onde possa crescer tecnicamente e aprender algo novo.",
      exp: "anos exp.",
      comp: "empresas",
      tech: "tecnologias"
    },
    en: {
      title: "about me.",
      p1: "Passionate about solving real-world problems and streamlining processes that used to be manual, slow, or prone to breaking in production. I have solid experience with Java and Spring Boot in the backend, .NET/C# in low-level communication systems, and React and VueJS in the frontend.",
      p2: "I've developed everything from complete ERPs to embedded systems using binary protocols and hardware integration. I've also worked with Python and Node.js whenever the problem required it.",
      p3: "Currently at FBM Brasil, where I develop and maintain a communication server for casino gaming machines based on a proprietary hexadecimal protocol. I conduct code reviews, implement new features, fix bugs, and monitor logs in production to ensure system stability. I enjoy new challenges where I can grow technically and learn something new.",
      exp: "years exp.",
      comp: "companies",
      tech: "technologies"
    }
  };
  const t = dict[lang];

  return (
    <section id="about" className="w-full relative pt-[80px] md:pt-[120px]">
      
      {/* Section Title */}
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-[40px] md:gap-[64px] items-start">
        
        {/* Left Column: Code Block */}
        <div className="rounded-[2px] bg-[#0D0D0D] border border-[#1A1A1A] font-mono text-xs sm:text-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-[#1A1A1A]">
            <div className="flex space-x-2 mr-4">
              {/* SVG Dots */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#ff5f56"/></svg>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#ffbd2e"/></svg>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#27c93f"/></svg>
            </div>
            <div className="px-3 bg-[#0D0D0D] rounded-t-[2px] text-gray-300 font-semibold flex items-center space-x-2 border border-[#1A1A1A] border-b-0 pt-1 pb-[2px] translate-y-[1px]">
              <span className="text-[#facc15] text-[10px]">☕</span>
              <span className="text-[12px]">AboutMe.java</span>
            </div>
          </div>
          {/* Body */}
          <div className="p-4 sm:p-6 md:p-8 overflow-x-auto text-gray-300 leading-relaxed max-w-full w-full">
            <pre className="text-[11px] sm:text-xs md:text-sm whitespace-pre">
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

        {/* Right Column: Text & Metrics */}
        <div className="flex flex-col justify-center">
          <p className="font-sans text-[15px] text-white leading-[1.9] mb-8 md:mb-12">
            {t.p1}<br/><br/>
            {t.p2}<br/><br/>
            {t.p3}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[28px] lg:text-[36px] text-accent leading-none font-bold mb-2">4+</span>
              <span className="font-sans text-[11px] sm:text-[12px] text-muted leading-tight">{t.exp}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[28px] lg:text-[36px] text-accent leading-none font-bold mb-2">3</span>
              <span className="font-sans text-[11px] sm:text-[12px] text-muted leading-tight">{t.comp}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[28px] lg:text-[36px] text-accent leading-none font-bold mb-2">8+</span>
              <span className="font-sans text-[11px] sm:text-[12px] text-muted leading-tight">{t.tech}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
