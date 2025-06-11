import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface GitHubProject {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  color: string;
  html_url: string;
}

interface GitHubProjectCardProps {
  project: GitHubProject;
}

const GitHubProjectCard = ({ project }: GitHubProjectCardProps) => {

    const { t } = useLanguage();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-blue-500/25",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-400/30 shadow-purple-500/25",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 shadow-cyan-500/25",
      yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-400/30 shadow-yellow-500/25",
      green: "from-green-500/20 to-green-600/20 border-green-400/30 shadow-green-500/25"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      cyan: "text-cyan-400",
      yellow: "text-yellow-400",
      green: "text-green-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border bg-gradient-to-r ${getColorClasses(project.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg flex flex-col justify-between`}>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{project.description || "Sem descrição disponível."}</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className={`flex items-center ${getIconColor(project.color)}`}>
            <div className={`w-3 h-3 rounded-full mr-2 ${getIconColor(project.color).replace('text-', 'bg-')}`}></div>
            {project.language || "N/A"}
          </span>
          <span className="flex items-center">
            ⭐ {project.stars}
          </span>
          <span className="flex items-center">
            🍴 {project.forks}
          </span>
        </div>
      </div>

      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
        <Button
          variant="ghost"
          size="sm"
          className="w-full border border-white/30 text-white hover:border-white hover:shadow-[0_0_8px_white] transition-all"
        >
           {t('github.showRep')}
        </Button>
      </a>
    </div>
  );
};

export default GitHubProjectCard;
