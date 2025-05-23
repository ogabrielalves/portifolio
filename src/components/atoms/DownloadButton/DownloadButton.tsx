import { useState } from "react";
import style from "./DownloadButton.module.scss";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function DownloadButton() {
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setActive(true);

    setTimeout(() => {
      setActive(false);
      setCompleted(true);
      window.location.href = "https://www.dropbox.com/scl/fi/p18hlxisxcqm2z6wztf7b/Curr-culo-Fullstack-Gabriel-Alves.pdf?rlkey=bjwncwyjcj7sgkwt81qtmavyx&st=g2qly5s8&dl=1";
      
    }, 6000);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.button} ${active ? style.active : ""}`}
        onClick={handleClick}
      >
        <div className={style.content}>
          {completed ? <CheckCircleIcon className={style.icon} /> : <DownloadIcon className={style.icon} />}
          <span className={style.buttonText}>
            {completed ? 'Concluído!' : 'Baixar Currículo'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DownloadButton;
