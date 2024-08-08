import style from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
}

function Section({title, subtitle}: SectionProps) {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        {subtitle}
      </p>

      <div className={style.divider}></div>
    </div>
  );
}

export default Section;
