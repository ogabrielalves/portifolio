
import { Calendar, MapPin, Building, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {

  const { t } = useLanguage();

  const experiences = [
    {
      company: "FBM Brasil",
      position: "Fullstack Developer",
      period: "2023-Atual",
      location: "Brasil",
      description: "Desenvolvi e aprimorei uma aplicação web interna para configuração de servidores dos cassinos que utilizava Java Springboot, VueJS e PostgreSQL.",
      technologies: ["Java", "Spring Boot", "VueJS", "PostgreSQL"],
      color: "blue"
    },
    {
      company: "C6 Bank",
      position: "Front End Developer",
      period: "2022-2023",
      location: "Brasil",
      description: "Desenvolvi como frontend no setor de Web-Banking, inovando nas funcionalidades do Pix PJ com ReactJS.",
      technologies: ["ReactJS", "WebBanking", "Pix PJ", "Frontend"],
      color: "purple"
    },
    {
      company: "PayGo",
      position: "Fullstack Developer",
      period: "2021-2022",
      location: "Brasil",
      description: "Reconstruí o site de backoffice da empresa com ReactJS, alterando a interface e deixando com um visual mais moderno.",
      technologies: ["ReactJS", "Backoffice", "UI/UX", "Frontend"],
      color: "cyan"
    }
  ];

  const education = [
    {
      institution: "São Paulo Tech School",
      course: "Análise e Desenvolvimento de Sistemas",
      period: "2021-2022",
      location: "São Paulo, SP",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-blue-500/25",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-400/30 shadow-purple-500/25",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 shadow-cyan-500/25",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-400/30 shadow-pink-500/25"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      cyan: "text-cyan-400",
      pink: "text-pink-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('experience.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Building className="w-6 h-6 text-blue-400 mr-3" />
            {t('experience.professional')}
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border bg-gradient-to-r ${getColorClasses(exp.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.company}</h4>
                    <h5 className={`text-lg font-medium mb-2 ${getIconColor(exp.color)}`}>{exp.position}</h5>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end">
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border bg-gradient-to-r backdrop-blur-sm ${getColorClasses(exp.color)} ${getIconColor(exp.color)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            {t('experience.education')}
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border bg-gradient-to-r ${getColorClasses(edu.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                    <h5 className={`text-lg font-medium ${getIconColor(edu.color)}`}>{edu.course}</h5>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>41
    </section>
  );
};

export default Experience;
