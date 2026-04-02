import { Github, Linkedin } from 'lucide-react';

export const Hero = ({ t, lang }: { t: any, lang: 'pt' | 'en' }) => {
  return (
    <section id="hero" className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden border-b border-border">
      
      {/* Absolute "01" Background Number */}
      <div className="absolute left-[10%] top-[40%] -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="font-mono font-bold leading-none text-[#0D0D0D] text-[300px]">
          01
        </span>
      </div>

      {/* Image Container - Strict Rules Applied */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:bottom-0 w-full md:w-[40%] h-full opacity-15 md:opacity-100 pointer-events-none z-0">
        
        {/* SVG Pattern Dots Background */}
        <div className="absolute inset-0 right-[-100px] top-[-50px] opacity-60 z-[-1]" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1A1A1A 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>

        <img 
          src="/img/gabriel-profile.png" 
          alt="Gabriel Alves" 
          className="w-full h-full object-cover select-none"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            objectPosition: 'top center'
          }}
        />
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col md:flex-row items-center relative z-10 pt-20">
        
        {/* Left Column 65% / Text Layer */}
        <div className="w-full md:w-[65%] flex flex-col justify-center pb-20 md:pb-0 relative z-20">
          
          {/* Status Tag */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-[pulse_1s_infinite]"></span>
              {lang === 'pt' ? 'Disponível para oportunidades' : 'Available for opportunities'}
            </span>
          </div>

          {/* Name */}
          <h1 className="font-mono font-bold uppercase text-white leading-[0.9] tracking-[-0.02em] text-[clamp(72px,12vw,160px)] relative z-20">
            GABRIEL<br/>ALVES
          </h1>

          {/* Accent Line */}
          <div className="w-[80px] h-px bg-accent mt-6 mb-4"></div>

          {/* Role */}
          <h2 className="font-sans text-[18px] text-muted font-normal relative z-20">
            Fullstack Developer
          </h2>

          {/* Bio */}
          <p className="font-sans text-[15px] text-muted mt-8 max-w-[500px] leading-[1.8] relative z-20">
            {lang === 'pt' 
              ? '4+ anos construindo sistemas robustos em Java e React. Do protocolo binário ao pixel.' 
              : '4+ years building robust systems in Java and React. From binary protocol to pixel.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-12 relative z-20">
            <a 
              href="#"
              className="bg-accent hover:bg-accent-dim text-bg px-[28px] py-[12px] rounded-[2px] font-mono text-[13px] font-medium transition-colors duration-150 inline-flex"
            >
              {lang === 'pt' ? 'ver currículo' : 'view resume'}
            </a>
            <a 
              href="#contact"
              className="border border-border-mid text-white hover:border-accent hover:text-accent px-[28px] py-[12px] rounded-[2px] font-mono text-[13px] font-medium transition-colors duration-150 inline-flex"
            >
              {lang === 'pt' ? 'entrar em contato' : 'get in touch'}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-12 relative z-20">
            <a href="https://github.com/ogabrielalves" target="_blank" rel="noreferrer" className="text-muted-mid hover:text-accent transition-colors duration-150 pointer-events-auto">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-alves-ba0064192" target="_blank" rel="noreferrer" className="text-muted-mid hover:text-accent transition-colors duration-150 pointer-events-auto">
              <Linkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
