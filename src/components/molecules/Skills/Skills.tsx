import style from "./Skills.module.scss";

import JavaIcon from "../../../assets/icons/java.png";
import SpringBootIcon from "../../../assets/icons/springboot.png";
import CSharpIcon from "../../../assets/icons/do-sustenido.png";
import MySqlIcon from "../../../assets/icons/mysql.png";
import PostgresIcon from "../../../assets/icons/postgres.png";
import FirebaseIcon from "../../../assets/icons/firebase.png";
import AwsIcon from "../../../assets/icons/aws.png";

import ReactIcon from "../../../assets/icons/react.png";
import VueIcon from "../../../assets/icons/vue.png";
import JavascriptIcon from "../../../assets/icons/javascript.png";
import TypescriptIcon from "../../../assets/icons/typescript.png";
import TailwindIcon from "../../../assets/icons/tailwind.png";
import SassIcon from "../../../assets/icons/sass.png";
import WordpressIcon from "../../../assets/icons/wordpress.png";

const backendSkills = [
  { name: "Java", icon: JavaIcon },
  { name: "Springboot", icon: SpringBootIcon },
  { name: "C#", icon: CSharpIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "AWS", icon: AwsIcon },
];

const frontendSkills = [
  { name: "ReactJS", icon: ReactIcon },
  { name: "VueJS", icon: VueIcon },
  { name: "Javascript", icon: JavascriptIcon },
  { name: "Typescript", icon: TypescriptIcon },
  { name: "Tailwindcss", icon: TailwindIcon },
  { name: "Sass", icon: SassIcon },
  { name: "Wordpress", icon: WordpressIcon },
];

function Skills() {
  return (
    <div className={style.container}>
      <u>Back-end</u>
      <div className={style.skillsBox}>
        {backendSkills.map((skill) => (
          <div key={skill.name} className={style.skillItem}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <u>Front-end</u>
      <div className={style.skillsBox}>
        {frontendSkills.map((skill) => (
          <div key={skill.name} className={style.skillItem}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;