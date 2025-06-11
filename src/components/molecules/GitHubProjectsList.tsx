import { useEffect, useState } from "react";
import GitHubProjectCard from "./GitHubProjectCard";
import { fetchPublicRepos } from "@/lib/github";

const languageToColor = (language: string): string => {
  const map: Record<string, string> = {
    JavaScript: "yellow",
    TypeScript: "blue",
    Python: "green",
    Java: "purple",
    'C#': "cyan",
    HTML: "orange",
  };
  return map[language] || "blue";
};

const GitHubProjectsList = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchPublicRepos("ogabrielalves");
        const filtered = data
          .filter((repo: any) => !repo.private)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "Sem descrição disponível.",
            language: repo.language || "Outro",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            color: languageToColor(repo.language),
            html_url: repo.html_url
          }));
        setRepos(filtered);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };
    getRepos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, idx) => (
        <GitHubProjectCard key={idx} project={repo} />
      ))}
    </div>
  );
};

export default GitHubProjectsList;