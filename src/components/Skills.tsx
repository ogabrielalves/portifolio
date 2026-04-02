const SkillRow = ({ name, score, levelPt, levelEn, lang }: { name: string, score: number, levelPt: string, levelEn: string, lang: 'pt' | 'en' }) => {
  const filled = '█'.repeat(score);
  const empty = '░'.repeat(10 - score);

  return (
    <div className="flex items-center space-x-4 py-2 px-3 -mx-3 hover:bg-surface transition-colors duration-150 cursor-default rounded-[2px]">
      <span className="font-mono text-[13px] text-white w-[100px] md:w-[120px] truncate">{name}</span>
      <span className="font-mono text-[11px] md:text-[13px] tracking-widest flex-1">
        <span className="text-accent">{filled}</span>
        <span className="text-border">{empty}</span>
      </span>
      <span className="font-mono text-[10px] md:text-[11px] text-muted-mid w-[80px] md:w-[100px] text-right">
        {lang === 'pt' ? levelPt : levelEn}
      </span>
    </div>
  );
};

export const Skills = ({ lang }: { lang: 'pt' | 'en' }) => {
  return (
    <section id="skills" className="w-full relative pt-[80px] md:pt-[120px]">
      
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">
          {lang === 'pt' ? 'habilidades.' : 'skills.'}
        </h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
        
        {/* Left Column */}
        <div className="flex flex-col gap-[48px]">
          {/* Back-end */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] whitespace-nowrap mr-4">Back-end</h3>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="flex flex-col">
              <SkillRow lang={lang} name="JAVA" score={9} levelPt="avançado" levelEn="advanced" />
              <SkillRow lang={lang} name="SPRING BOOT" score={8} levelPt="avançado" levelEn="advanced" />
              <SkillRow lang={lang} name="C#" score={8} levelPt="avançado" levelEn="advanced" />
              <SkillRow lang={lang} name="NODE.JS" score={6} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="TYPESCRIPT" score={6} levelPt="intermediário" levelEn="intermediate" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] whitespace-nowrap mr-4">Databases</h3>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="flex flex-col">
              <SkillRow lang={lang} name="POSTGRESQL" score={6} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="MYSQL" score={6} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="SQL SERVER" score={6} levelPt="intermediário" levelEn="intermediate" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[32px] md:gap-[48px]">
          {/* Front-end */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] whitespace-nowrap mr-4">Front-end</h3>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="flex flex-col">
              <SkillRow lang={lang} name="REACTJS" score={6} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="VUEJS" score={6} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="JAVASCRIPT" score={9} levelPt="avançado" levelEn="advanced" />
              <SkillRow lang={lang} name="TAILWIND CSS" score={6} levelPt="intermediário" levelEn="intermediate" />
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] whitespace-nowrap mr-4">Cloud & DevOps</h3>
              <div className="w-full h-px bg-border"></div>
            </div>
            <div className="flex flex-col">
              <SkillRow lang={lang} name="DOCKER" score={7} levelPt="avançado" levelEn="advanced" />
              <SkillRow lang={lang} name="AZURE" score={5} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="AWS" score={5} levelPt="intermediário" levelEn="intermediate" />
              <SkillRow lang={lang} name="NGINX" score={7} levelPt="avançado" levelEn="advanced" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
