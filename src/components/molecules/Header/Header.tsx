import style from "./Header.module.scss";

import { SocialMedia } from "../../atoms/SocialMedia";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { DownloadButton } from "../../atoms/DownloadButton";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img
          className={style.profileImg}
          src="https://avatars.githubusercontent.com/u/61751506?s=400&u=812d9b378fb822fcc6e33688b7768aa639830880&v=4"
          alt=""
        />
        <p className={style.title}>Olá, me chamo Gabriel Alves</p>
        <p className={style.subTitle}>Desenvolvedor Fullstack</p>
      </div>

      <div className={style.socialMedia}>
        <SocialMedia
          icon={GitHubIcon}
          name="GitHub"
          link="https://github.com/ogabrielalves"
        />
        <SocialMedia
          icon={LinkedInIcon}
          name="LinkedIn"
          link="https://www.linkedin.com/in/gabriel-alves-ba0064192/"
        />
        <SocialMedia
          icon={EmailIcon}
          name="Email"
          link="mailto:gabrielalvessilva02@outlook.com"
        />
        <SocialMedia
          icon={WhatsAppIcon}
          name="WhatsApp"
          link="https://wa.me/5511915762851"
        />
      </div>

      <div className={style.description}>
        <p className={style.titleDescription}>
          Sou Gabriel Alves, Desenvolvedor Fullstack e Web Developer.
        </p>
        <p className={style.subTitleDescription}>
          Desenvolvedor Full Stack especializado em ReactJS, VueJS, C# e Java
          SpringBoot, com vasta experiência em WebBanking, sistemas ERP,
          desenvolvimento de software, Cloud, WordPress e servidores para
          análise de bingo.
        </p>
      </div>

      <DownloadButton/>
    </div>
  );
}

export default Header;
