import style from "./Principal.module.scss";

import { Skills } from "../../components/molecules/Skills";
import { Experience } from "../../components/atoms/Experience";
import { Section } from "../../components/atoms/Section";

import DownloadIcon from "@mui/icons-material/Download";
import { Graduation } from "../../components/atoms/Graduation";
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
          subtitle="Algumas de minhas habilidas mais destacadas."
        />

        <Skills />

        <Section
          title="Experiências"
          subtitle="Estas são minhas experiências profissionais."
        />

        <Experience />

        <Section title="Formação" subtitle="Estas é minha formação." />

        <Graduation />
      </div>
    </div>
  );
}

export default Principal;
