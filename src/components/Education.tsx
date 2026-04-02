export const Education = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "formação.",
      school: "São Paulo Tech School",
      course: "Análise e Desenvolvimento de Sistemas",
      location: "São Paulo, SP"
    },
    en: {
      title: "education.",
      school: "São Paulo Tech School",
      course: "Systems Analysis and Development",
      location: "São Paulo, SP"
    }
  };
  const t = dict[lang];

  return (
    <section id="education" className="w-full relative pt-[80px] md:pt-[120px]">
      
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="relative w-full">
        
        {/* Big Number Background */}
        <div className="absolute left-0 top-[-20px] pointer-events-none select-none z-0">
          <span className="font-mono font-bold leading-none text-[#1A1A1A] text-[clamp(64px,8vw,96px)]">
            04
          </span>
        </div>

        {/* Content Container */}
        <div className="pl-[40px] sm:pl-[60px] md:pl-[80px] relative z-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-sans text-[18px] md:text-[22px] font-medium text-white">{t.school}</h3>
            <span className="font-mono text-[11px] sm:text-[13px] text-muted-mid mt-2 sm:mt-0">2021 — 2022</span>
          </div>

          {/* Role & Location */}
          <div className="flex flex-col mt-1">
            <span className="font-sans text-[15px] text-accent">{t.course}</span>
            <span className="font-sans text-[14px] text-muted mt-2">{t.location}</span>
          </div>

        </div>

      </div>

    </section>
  );
};
