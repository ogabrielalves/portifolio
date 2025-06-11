
import { LucideIcon } from "lucide-react";
import ProjectIcon from "../atoms/ProjectIcon";
import ProjectFeature from "../atoms/ProjectFeature";
import TechnologyTag from "../atoms/TechnologyTag";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  features: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
  IconComponent: LucideIcon;
}

const ProjectCard = ({ project, IconComponent }: ProjectCardProps) => {
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

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border bg-gradient-to-br ${getColorClasses(project.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <ProjectIcon IconComponent={IconComponent} color={project.color} />
          <h3 className="text-xl font-semibold text-white ml-3">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Principais funcionalidades:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <ProjectFeature key={index} feature={feature} color={project.color} />
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <TechnologyTag key={index} technology={tech} color={project.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
