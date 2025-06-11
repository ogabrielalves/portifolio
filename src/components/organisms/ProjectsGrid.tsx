
import { Server, Database, Cloud, Zap, Lightbulb, Monitor, Shield } from "lucide-react";
import ProjectCard from "../molecules/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  features: string[];
  color: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const iconMap = {
    Server,
    Database,
    Cloud,
    Zap,
    Lightbulb,
    Monitor,
    Shield,
  };

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
      {projects.map((project, index) => {
        const IconComponent = iconMap[project.icon as keyof typeof iconMap];
        return (
          <ProjectCard 
            key={index} 
            project={project} 
            IconComponent={IconComponent} 
          />
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
