
import { Menu, X, Github, Linkedin, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-white">
            Gabriel<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Alves</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.skills')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.experience')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.projects')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors relative group text-sm">
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Language Selector & Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  language === 'pt' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <a href="https://github.com/ogabrielalves" className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-alves-ba0064192/" className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50">
              <Linkedin size={18} />
            </a>
            <a href="mailto:gabrielalvessilva02@outlook.com" className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50">
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50 bg-gray-900/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3 mb-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.home')}</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.about')}</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.skills')}</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.experience')}</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.projects')}</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors px-2 py-1" onClick={toggleMenu}>{t('nav.contact')}</a>
            </nav>
            
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center space-x-3">
                <a href="https://github.com/ogabrielalves" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-alves-ba0064192/" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:gabrielalvessilva02@outlook.com" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                  <Mail size={20} />
                </a>
              </div>
              
              <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    language === 'pt' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
