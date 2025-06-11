
import { ArrowDown, Code, Server, Database, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { t } = useLanguage();

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.open(
      "https://www.dropbox.com/scl/fi/p18hlxisxcqm2z6wztf7b/Curr-culo-Fullstack-Gabriel-Alves.pdf?rlkey=bjwncwyjcj7sgkwt81qtmavyx&st=g2qly5s8&dl=1",
      "_blank"
    )
    setIsDownloading(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 relative overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-72 h-60 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
            <div className="p-2 md:p-3 bg-blue-500/20 backdrop-blur-sm rounded-full animate-bounce delay-100 border border-blue-400/30 shadow-lg shadow-blue-500/25">
              <Server className="w-6 h-6 md:w-8 md:h-8 text-blue-400 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px #60a5fa)' }} />
            </div>
            <div className="p-2 md:p-3 bg-purple-500/20 backdrop-blur-sm rounded-full animate-bounce delay-200 border border-purple-400/30 shadow-lg shadow-purple-500/25">
              <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-400 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px #a78bfa)' }} />
            </div>
            <div className="p-2 md:p-3 bg-cyan-500/20 backdrop-blur-sm rounded-full animate-bounce delay-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/25">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px #22d3ee)' }} />
            </div>
          </div>

          <h1 className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-2">
            {t('hero.greeting')}
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            {t('hero.name')}
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse"
              style={{ filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))' }}>
              {t('hero.title')}
            </span>
          </h3>

          <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg border border-blue-400/30 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
            >
              {t('hero.viewProjects')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-500 bg-gray-800/80 text-white hover:bg-gray-700 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDownloadCV}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('hero.downloading')}
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  {t('hero.downloadCV')}
                </>
              )}
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mx-auto" style={{ filter: 'drop-shadow(0 0 4px #9ca3af)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
