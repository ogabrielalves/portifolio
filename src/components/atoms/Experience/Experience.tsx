import style from "./Experience.module.scss";

import PaygoIcon from "../../../assets/icons/paygo.png";
import C6Icon from "../../../assets/icons/c6.png";
import FbmIcon from "../../../assets/icons/fbm.png";

const experiences = [
  {
    name: "PayGo",
    icon: PaygoIcon,
    office: "Fullstack Developer",
    year: "2021-2022",
    description:
      "Reconstruí o site de backoffice da empresa com ReactJS, alterando a interface e deixando com um visual mais moderno.",
  },
  {
    name: "C6 Bank",
    icon: C6Icon,
    office: "Front End Developer",
    year: "2022-2023",
    description: "Desenvolvi como frontend no setor de Web-Banking, inovando nas funcionalidades do Pix PJ com ReactJS.",
  },
  {
    name: "FBM Brasil",
    icon: FbmIcon,
    office: "Fullstack Developer",
    year: "2023-Atual",
    description: "Desenvolvi e aprimorei uma aplicação web interna para configuração de servidores dos cassinos que utilizava Java Springboot, VueJS e PostgreSQL",
  },
];

function Experience() {
  return (
    <div className={style.container}>
      {experiences.map((experience, index) => (
        <div key={index} className={style.box}>
          <div className={style.icon}>
            <img src={experience.icon} alt={experience.name} />
          </div>
          <div className={style.informations}>
            <p className={style.name}>{experience.name}</p>
            <p className={style.office}>{experience.office}</p>
            <p className={style.year}>{experience.year}</p>
            <p className={style.description}>{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
