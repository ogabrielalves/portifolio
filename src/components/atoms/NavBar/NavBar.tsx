import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

function NavBar() {
  return (
      <nav>
        <div className={style.left}>
          <span className={style.details}>&#123; </span>
          Gabriel Alves
          <span className={style.details}> &#125;</span>
        </div>
        <div className={style.right}>
          <Link to={"/"}>Quem sou eu</Link>
          <Link to={"/projects"}>Projetos</Link>
          <Link to={"/contact"}>Contato</Link>
        </div>
      </nav>
  );
}

export default NavBar;
