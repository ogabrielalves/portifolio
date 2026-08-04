import { useEffect, useState } from "react";

type Skill = {
  category: string;
  name: string;
  score: number;
  levelPt: string;
  levelEn: string;
};

const SKILLS: Skill[] = [
  { category: "Back-end", name: "JAVA", score: 9, levelPt: "avançado", levelEn: "advanced" },
  { category: "Back-end", name: "SPRING BOOT", score: 8, levelPt: "avançado", levelEn: "advanced" },
  { category: "Back-end", name: "C#", score: 8, levelPt: "avançado", levelEn: "advanced" },
  { category: "Back-end", name: "NODE.JS", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Back-end", name: "TYPESCRIPT", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Databases", name: "POSTGRESQL", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Databases", name: "MYSQL", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Databases", name: "SQL SERVER", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Front-end", name: "REACTJS", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Front-end", name: "VUEJS", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Front-end", name: "JAVASCRIPT", score: 9, levelPt: "avançado", levelEn: "advanced" },
  { category: "Front-end", name: "TAILWIND CSS", score: 6, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Cloud & DevOps", name: "DOCKER", score: 7, levelPt: "avançado", levelEn: "advanced" },
  { category: "Cloud & DevOps", name: "AZURE", score: 5, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Cloud & DevOps", name: "AWS", score: 5, levelPt: "intermediário", levelEn: "intermediate" },
  { category: "Cloud & DevOps", name: "NGINX", score: 7, levelPt: "avançado", levelEn: "advanced" },
];

const STEP_MS = 26;
const ROW_GAP_MS = 90;
const HOLD_MS = 10000;

const SkillRow = ({ name, filledCount, levelPt, levelEn, lang }: { name: string, filledCount: number, levelPt: string, levelEn: string, lang: 'pt' | 'en' }) => {
  const filled = '█'.repeat(filledCount);
  const empty = '░'.repeat(10 - filledCount);

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
  const [filled, setFilled] = useState<number[]>(() => SKILLS.map(() => 0));

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    const runCycle = () => {
      if (cancelled) return;
      setFilled(SKILLS.map(() => 0));

      let rowIndex = 0;
      const fillNextRow = () => {
        if (cancelled) return;
        if (rowIndex >= SKILLS.length) {
          schedule(runCycle, HOLD_MS);
          return;
        }
        const target = SKILLS[rowIndex].score;
        let count = 0;
        const currentRow = rowIndex;
        const step = () => {
          if (cancelled) return;
          count++;
          setFilled(prev => {
            const next = [...prev];
            next[currentRow] = count;
            return next;
          });
          if (count < target) {
            schedule(step, STEP_MS);
          } else {
            rowIndex++;
            schedule(fillNextRow, ROW_GAP_MS);
          }
        };
        step();
      };
      fillNextRow();
    };

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const renderCategory = (title: string) => {
    const items = SKILLS
      .map((skill, idx) => ({ skill, idx }))
      .filter(({ skill }) => skill.category === title);

    return (
      <div key={title}>
        <div className="flex items-center mb-4">
          <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] whitespace-nowrap mr-4">{title}</h3>
          <div className="w-full h-px bg-border"></div>
        </div>
        <div className="flex flex-col">
          {items.map(({ skill, idx }) => (
            <SkillRow
              key={skill.name}
              lang={lang}
              name={skill.name}
              filledCount={filled[idx] ?? 0}
              levelPt={skill.levelPt}
              levelEn={skill.levelEn}
            />
          ))}
        </div>
      </div>
    );
  };

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
          {renderCategory("Back-end")}
          {renderCategory("Databases")}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[32px] md:gap-[48px]">
          {renderCategory("Front-end")}
          {renderCategory("Cloud & DevOps")}
        </div>

      </div>
    </section>
  );
};
