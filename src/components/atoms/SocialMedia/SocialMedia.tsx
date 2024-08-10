import style from "./SocialMedia.module.scss";
import { SvgIconComponent } from "@mui/icons-material";

interface SocialMediaProps {
  name: string;
  icon: SvgIconComponent;
  link: string;
}

function SocialMedia({ name, icon: Icon, link }: SocialMediaProps) {
  // Map names to class names
  const iconClass = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`${style.icon} ${style[iconClass]}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span>
          <Icon />
        </span>
        <div className={style.tooltip}>{name}</div>
      </a>
    </div>
  );
}

export default SocialMedia;
