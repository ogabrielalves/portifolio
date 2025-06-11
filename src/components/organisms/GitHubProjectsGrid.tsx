
import { Github } from "lucide-react";
import GitHubProjectsList from "../molecules/GitHubProjectsList";
import { useLanguage } from "@/contexts/LanguageContext";

interface GitHubProject {
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  color: string;
}

interface GitHubProjectsGridProps {
  projects: GitHubProject[];
}

const GitHubProjectsGrid = ({ projects }: GitHubProjectsGridProps) => {

    const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
        <Github className="w-6 h-6 text-purple-400 mr-3" />
        {t('github.title')}
      </h3>
        <GitHubProjectsList/>
    </div>
  );
};

export default GitHubProjectsGrid;
