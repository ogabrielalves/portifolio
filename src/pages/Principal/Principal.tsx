import style from "./Principal.module.scss";

import { Skills } from "../../components/molecules/Skills";
import { Experience } from "../../components/atoms/Experience";
import { Section } from "../../components/atoms/Section";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

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
        <img
          className={style.profileImg}
          src="https://avatars.githubusercontent.com/u/61751506?s=400&u=812d9b378fb822fcc6e33688b7768aa639830880&v=4"
          alt=""
        />
        <p className={style.title}>Olá, me chamo Gabriel Alves</p>
        <p className={style.subTitle}>Desenvolvedor Fullstack</p>

        <div className={style.socialMedia}>
          <div className={style.socialMediaItem}>
            <GitHubIcon />
            <p>GitHub</p>
          </div>
          <div className={style.socialMediaItem}>
            <LinkedInIcon />
            <p>LinkedIn</p>
          </div>
          <div className={style.socialMediaItem}>
            <EmailIcon />
            <p>Email</p>
          </div>
        </div>

        <div className={style.description}>
          <p className={style.titleDescription}>
            Sou Gabriel Alves, Desenvolvedor Fullstack e Web Developer.
          </p>
          <p className={style.subTitleDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere fugit nisi, ullam ipsa facilis modi sit iusto, praesentium a
            itaque commodi inventore perferendis atque numquam esse voluptatibus
            id voluptates!
          </p>
        </div>

        <div className={style.downloadCV}>
          <DownloadIcon />
          Baixar Currículo
        </div>

        <Section
          title="Habilidades"
          subtitle="Algumas de minhas habilidas mais destacadas."
        />

        <Skills />

        <Section
          title="Experiências"
          subtitle="Estas são algumas das minhas experiências profissionais."
        />

        <Experience />
        
      </div>
    </div>
  );
}

export default Principal;
