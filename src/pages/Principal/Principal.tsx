import style from "./Principal.module.scss";

import { Skills } from "../../components/molecules/Skills";
import { Experience } from "../../components/atoms/Experience";
import { Section } from "../../components/atoms/Section";
import { Graduation } from "../../components/atoms/Graduation";
import { Projects } from "../../components/atoms/Projects";

import { Header } from "../../components/molecules/Header";

function Principal() {
  return (
    <div className={style.absolute}>
      <div
        className={`${style.absolute} ${style.inset0} ${style.justifyCenter}`}
      >
        <div
          className={`${style.bgShape1} ${style.bgTeal} ${style.opacity50} ${style.bgBlur}`}
        ></div>
        <div
          className={`${style.bgShape2} ${style.bgPrimary} ${style.opacity50} ${style.bgBlur}`}
        ></div>
        <div
          className={`${style.bgShape1} ${style.bgPurple} ${style.opacity50} ${style.bgBlur}`}
        ></div>
      </div>

      {/* DAQUI PRA BAIXO É CONTEUDO */}
      <div className={style.container}>
        <Header />

        <Section
          title="Habilidades"
          subtitle="Algumas de minhas skills."
        />

        <Skills />

        <Section
          title="Experiências"
          subtitle="Estas são minhas experiências profissionais."
        />

        <Experience />

        <Section title="Formação" subtitle="Esta é minha formação." />

        <Graduation />

        <Section
          title="Projetos"
          subtitle="Projetos nos quais atuei diretamente."
        />

       <Projects />

      </div>
    </div>
  );
}

export default Principal;
