import style from "./Banner.module.scss";
import Typewriter from "typewriter-effect";
import { Skills } from "../../atoms/Skills";

function Banner() {
  const currentAge = () => {
    const today = new Date();
    const birthDate = new Date("2000-04-03");
    let age = today.getFullYear() - birthDate.getFullYear();
    const currentMouth = today.getMonth();
    const birthMouth = birthDate.getMonth();

    if (
      birthMouth > currentMouth ||
      (birthMouth === currentMouth && birthDate.getDate() > today.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className={style.container}>
      <h1 className={style.myName}>Gabriel Alves</h1>
      <span className={style.describe}>
        <Typewriter
          options={{
            strings: ["Software Developer", "Web Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <div className={style.aboutMe}>
        <p>
          Sou formado em <span>Análise e Desenvolvimento de Sistemas</span>,
          tenho {currentAge()} anos e sou apaixonado por tecnologia.
        </p>
        <p>
          Possuo conhecimento em <span>Desenvolvimento Web</span> e{" "}
          <span>Desenvolvimento de Softwares.</span>
        </p>
        <p>
          Tenho habilidades em diversas linguagens e ferramentas, estou sempre
          em busca de aprendizados e atualizações.
        </p>
        <p>
          Sou comprometido em entregar soluções de alta qualidade e gosto de
          trabalhar em equipe.
        </p>
      </div>

      <div className={style.skills}>
        <Skills />
      </div>
    </div>
  );
}

export default Banner;
