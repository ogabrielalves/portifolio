
import { Server, Database, Cloud, Code, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {

  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Back-end",
      icon: Server,
      skills: ["Java", "Springboot", "C#", "Node.js", "Typescript", "ASP.NET"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Azure", "NGINX", "Load Balance"],
      color: "cyan"
    },
    {
      title: "Front-end",
      icon: Code,
      skills: ["ReactJS", "VueJS", "Javascript", "Tailwindcss", "Sass"],
      color: "pink"
    },
    {
      title: "CMS & Tools",
      icon: Shield,
      skills: ["WordPress", "Maven", "Arduino"],
      color: "green"
    },
    {
      title: "Outras",
      icon: Zap,
      skills: ["ERP Systems", "WebBanking", "PDV", "Monitoramento"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-400/30",
      purple: "from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-400/30",
      cyan: "from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-400/30",
      pink: "from-pink-500/20 to-pink-600/20 text-pink-300 border-pink-400/30",
      green: "from-green-500/20 to-green-600/20 text-green-300 border-green-400/30",
      yellow: "from-yellow-500/20 to-yellow-600/20 text-yellow-300 border-yellow-400/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-400/30 shadow-blue-500/25",
      purple: "bg-purple-500/20 text-purple-400 border-purple-400/30 shadow-purple-500/25",
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30 shadow-cyan-500/25",
      pink: "bg-pink-500/20 text-pink-400 border-pink-400/30 shadow-pink-500/25",
      green: "bg-green-500/20 text-green-400 border-green-400/30 shadow-green-500/25",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30 shadow-yellow-500/25"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('skills.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg border backdrop-blur-sm shadow-lg ${getIconColorClasses(category.color)}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border bg-gradient-to-r backdrop-blur-sm ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
