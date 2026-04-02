import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export const Navbar = ({ lang, setLang, t }: { lang: 'pt' | 'en', setLang: (l: 'pt' | 'en') => void, t: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    setTimeout(() => {
      window.location.href = "https://www.dropbox.com/scl/fi/p18hlxisxcqm2z6wztf7b/Curr-culo-Fullstack-Gabriel-Alves.pdf?rlkey=bjwncwyjcj7sgkwt81qtmavyx&st=85raedw2&dl=1";
      setTimeout(() => setIsDownloading(false), 1000);
    }, 1500);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-[1100px] w-full mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-white text-xl hover:text-accent transition-colors duration-150 tracking-tighter w-24">
          GA
        </a>

        {/* Links Centered */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          <a href="#about" className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150">{t.nav.about}</a>
          <a href="#experience" className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150">{t.nav.experience}</a>
          <a href="#education" className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150">{t.nav.education}</a>
          <a href="#skills" className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150">{t.nav.skills}</a>
          <a href="#projects" className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150">{t.nav.projects}</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 w-auto justify-end">
          {/* PT/EN Selector */}
          <button 
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="font-mono text-[12px] text-muted hover:text-white transition-colors duration-150 flex items-center"
          >
            <span className={lang === 'pt' ? 'text-white' : ''}>PT</span>
            <span className="mx-1.5 opacity-30">/</span>
            <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
          </button>

          {/* Resume CTA */}
          <a 
            href="#" 
            onClick={handleDownload}
            className={`hidden md:flex items-center justify-center font-sans text-[14px] text-white outline outline-1 outline-border-mid px-5 h-9 rounded-[2px] hover:outline-accent hover:text-accent transition-colors duration-150 ${isDownloading ? 'opacity-80 cursor-wait' : ''}`}
          >
            {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : (lang === 'pt' ? 'Currículo' : 'Resume')}
          </a>
        </div>
      </div>
    </nav>
  );
};
