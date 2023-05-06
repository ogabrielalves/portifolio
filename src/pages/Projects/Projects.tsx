import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../../components/atoms/NavBar";
import { RepositoryCard } from "../../components/atoms/RepositoryCard";
import style from "./Project.module.scss";

interface RepositoryData {
  name: string;
  description: string;
  html_url: string;
  language: string;
  id: number;
}

function Projects() {
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ogabrielalves/repos")
      .then((response) => {
        const filteredData = response.data.filter(
          (obj: RepositoryData) => obj.id !== 394039119 && obj.id !== 348400601
        );
        setRepositories(filteredData);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
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
