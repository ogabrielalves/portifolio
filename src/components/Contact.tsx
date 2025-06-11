
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailForm } from "@/hooks/useEmailForm";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const { isSubmitting, submitStatus, submitForm, setSubmitStatus } = useEmailForm();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gabrielalvessilva02@outlook.com",
      link: "gabrielalvessilva02@outlook.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (11) 91576-2851",
      link: "https://wa.me/5511915762851",
      color: "green"
    },
    {
      icon: MapPin,
      title: "São Paulo, SP",
      value: "Brasil",
      link: "#",
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/ogabrielalves",
      color: "cyan"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      link: "https://www.linkedin.com/in/gabriel-alves-ba0064192/",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-blue-500/25",
      green: "from-green-500/20 to-green-600/20 border-green-400/30 shadow-green-500/25",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-400/30 shadow-purple-500/25",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 shadow-cyan-500/25"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
      cyan: "text-cyan-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    
    if (success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('contact.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
                {t('contact.conversation')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border bg-gradient-to-r ${getColorClasses(info.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg`}>
                  <div className={`p-2 md:p-3 rounded-lg border backdrop-blur-sm ${getColorClasses(info.color)} shadow-lg`}>
                    <info.icon className={`w-5 h-5 md:w-6 md:h-6 ${getIconColor(info.color)}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">{info.title}</h4>
                    <a href={info.link} className={`hover:opacity-80 transition-colors ${getIconColor(info.color)} text-sm md:text-base`}>
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold text-white">{t('contact.socialMedia')}</h4>
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-2 md:p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border bg-gradient-to-r ${getColorClasses(social.color)} hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg ${getIconColor(social.color)}`}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border bg-gradient-to-r ${getColorClasses("blue")} shadow-lg`}>
              <h4 className="font-semibold text-white mb-2">{t('contact.availableFor')}</h4>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                  {t('contact.fulltime')}
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                  {t('contact.freelance')}
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  {t('contact.consulting')}
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
                  {t('contact.mentoring')}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-lg">
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                <p className="text-red-400 text-center">Erro ao enviar mensagem. Tente novamente.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    type="text" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('contact.name')} 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.lastName')}
                  </label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    type="text" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t('contact.lastName')} 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400" 
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com" 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400" 
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.subject')}
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  type="text" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t('contact.subject')} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400" 
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.message')}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center space-x-2 border border-blue-400/30 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
