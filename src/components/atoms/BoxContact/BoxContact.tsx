import style from "./BoxContact.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Link } from "react-router-dom";

interface BoxContactData {
  type: "GitHub" | "LinkedIn" | "Email" | "WhatsApp";
}

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
  WhatsApp: WhatsAppIcon,
};

const titleMap = {
  GitHub: "GitHub",
  LinkedIn: "LinkedIn",
  Email: "Email",
  WhatsApp: "WhatsApp",
};

const contactMap = {
  GitHub: "ogabrielalves",
  LinkedIn: "gabriel-alves-ba0064192",
  Email: "gabrielalvessilva02@outlook.com",
  WhatsApp: "+55 11 91576-2851",
};

const linkMap = {
  GitHub: "https://github.com/ogabrielalves",
  LinkedIn: "https://www.linkedin.com/in/gabriel-alves-ba0064192/",
  Email: "mailto:gabrielalvessilva02@outlook.com",
  WhatsApp: "https://wa.me/5511915762851?text=Olá Gabriel, me chamo ",
};

function BoxContact({ type }: BoxContactData) {
  const Icon = iconMap[type];
  const title = titleMap[type];
  const contact = contactMap[type];
  const link = linkMap[type];

  return (
    <Link to={link} className={style.link}>
      <div className={style.container}>
        <div className={style.icon}>
          {Icon && <Icon sx={{ fontSize: 50 }} />}
        </div>
        <h2>{title}</h2>
        <span>{contact}</span>
      </div>
    </Link>
  );
}

export default BoxContact;
