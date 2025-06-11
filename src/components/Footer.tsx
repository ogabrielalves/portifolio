
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Desenvolvimento Full Stack",
    "Sistemas ERP",
    "WebBanking",
    "Cloud Computing",
    "Consultoria Técnica"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ogabrielalves", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:gabriel@exemplo.com", color: "hover:text-cyan-400" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-12 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              Gabriel<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Alves</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Desenvolvedor fullstack apaixonado por criar soluções escaláveis e eficientes que alimentam aplicações modernas. 
              Sempre aprendendo, sempre crescendo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50 ${social.color}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 text-purple-400 mr-2" />
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gabriel Alves - Desenvolvedor Fullstack. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Feito com <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> e muito código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
