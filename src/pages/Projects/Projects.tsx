import { NavBar } from "../../components/atoms/NavBar";
import { useState, useEffect } from "react";
import { RepositoryCard } from "../../components/atoms/RepositoryCard";
import style from "./Project.module.scss";

interface RepositoryData {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

function Projects() {
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ogabrielalves/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <>
      <NavBar />
      <div className={style.container}>
        {repositories.map((repository) => {
          return (
            <div>
              <RepositoryCard
                name={repository.name}
                description={repository.description}
                htmlUrl={repository.html_url}
                language={repository.language}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
