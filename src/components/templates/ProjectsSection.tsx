
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectsGrid from "../organisms/ProjectsGrid";
import GitHubProjectsGrid from "../organisms/GitHubProjectsGrid";
import projectsData from "@/data/projects.json";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             {t('projects.subtitle')}
          </p>
        </div>

        {/* Main Projects */}
        <ProjectsGrid projects={projectsData.projects} />

        {/* GitHub Projects */}
        <GitHubProjectsGrid projects={projectsData.githubProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
