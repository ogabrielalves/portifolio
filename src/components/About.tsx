
import { Award, Coffee, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: "05", label: t('about.yearsExp'), color: "blue" },
    { icon: Coffee, value: "04+", label: t('about.projectsCompleted'), color: "purple" },
    { icon: Clock, value: "24/7", label: t('about.availability'), color: "cyan" },
    { icon: Users, value: "03+", label: t('about.clients'), color: "pink" },
  ];

  const getGlowClass = (color: string) => {
    const glowStyles = {
      blue: "shadow-blue-500/25 border-blue-400/30",
      purple: "shadow-purple-500/25 border-purple-400/30",
      cyan: "shadow-cyan-500/25 border-cyan-400/30",
      pink: "shadow-pink-500/25 border-pink-400/30"
    };
    return glowStyles[color as keyof typeof glowStyles] || glowStyles.blue;
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
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-60 md:w-72 h-60 md:h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-60 md:w-72 h-60 md:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('about.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* About Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {t('about.heading')}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {t('about.description1')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {t('about.description2')}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["WebBanking", "Sistemas ERP", "Cloud Computing", "WordPress"].map((skill, index) => (
                <span key={skill} className={`px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30' 
                    : 'from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-400/30'
                } rounded-full text-xs md:text-sm font-medium backdrop-blur-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border ${getGlowClass(stat.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg`}>
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-700/50 rounded-lg mb-3 md:mb-4 border ${getGlowClass(stat.color)}`}>
                  <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${getIconColor(stat.color)}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
