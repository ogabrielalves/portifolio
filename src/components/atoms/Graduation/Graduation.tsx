import style from "./Graduation.module.scss";

import SpTechIcon from '../../../assets/icons/sptech.png'

const graduations = [
    {
      name: "São Paulo Tech School",
      course: "Análise e Desenvolvimento de Sistemas",
      icon: SpTechIcon,
      year: "2021-2022",
    },
    
  ];

function Graduation() {
  return (
    <div className={style.container}>
      {graduations.map((graduation, index) => (
        <div key={index} className={style.box}>
          <div className={style.icon}>
            <img src={graduation.icon} alt={graduation.name} />
          </div>
          <div className={style.informations}>
            <p className={style.name}>{graduation.name}</p>
            <p className={style.office}>{graduation.course}</p>
            <p className={style.year}>{graduation.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Graduation;
