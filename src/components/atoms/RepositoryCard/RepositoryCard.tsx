import style from "./RepositoryCard.module.scss";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

interface RepositoryCardData {
  name: string;
  description: string;
  htmlUrl: string;
  language: string;
}

function RepositoryCard({
  name,
  description,
  htmlUrl,
  language,
}: RepositoryCardData) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>{name}</h1>
        <span>{description}</span>
      </div>
      {language == null ? (
        <></>
      ) : (
        <div>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip className={style.chip} label={language} />
            </Stack>
          </Stack>
        </div>
      )}
      <Link to={htmlUrl}>
        <GitHubIcon fontSize="large" />
      </Link>
    </div>
  );
}

export default RepositoryCard;
