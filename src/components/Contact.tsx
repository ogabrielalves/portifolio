import { useState } from 'react';

const ContactRow = ({ label, value, mainActionLabel, mainActionHref, copiedOption = null, copiedText, copyText }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copiedOption) return;
    navigator.clipboard.writeText(copiedOption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-6 border-b border-[#0F0F0F] group hover:bg-[#060606] transition-colors sm:-mx-4 sm:px-4">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <span className="font-mono text-[11px] text-[#333333] uppercase w-full sm:w-[120px] mb-1 sm:mb-0">{label}</span>
        <span className="font-sans text-[14px] text-white">{value}</span>
      </div>
      <div className="flex items-center space-x-4 mt-3 sm:mt-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        {copiedOption && (
          <button 
            onClick={handleCopy}
            className={`font-mono text-[11px] transition-colors ${copied ? 'text-accent' : 'text-muted-mid hover:text-accent'}`}
          >
            [{copied ? copiedText : copyText}]
          </button>
        )}
        <a 
          href={mainActionHref}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] text-muted-mid hover:text-accent transition-colors"
        >
          [{mainActionLabel}]
        </a>
      </div>
    </div>
  );
};

export const Contact = ({ lang }: { lang: 'pt' | 'en' }) => {
  const dict = {
    pt: {
      title: "contato.",
      desc: "Aberto a oportunidades full stack — backend Java, frontend React ou os dois. Também aceito projetos freelance. Respondo rápido.",
      copy: "copiar",
      copied: "copiado",
      send: "enviar →",
      msg: "mensagem →",
      open: "abrir →"
    },
    en: {
      title: "contact.",
      desc: "Open to full stack opportunities — Java backend, React frontend or both. Open to freelance projects as well. Fast replies.",
      copy: "copy",
      copied: "copied",
      send: "email →",
      msg: "message →",
      open: "open →"
    }
  };
  const t = dict[lang];

  return (
    <section id="contact" className="w-full relative pt-[80px] md:pt-[120px]">
      
      <div className="mb-[40px] md:mb-[64px]">
        <h2 className="font-mono text-[36px] md:text-[48px] text-white font-normal lowercase leading-none">{t.title}</h2>
        <div className="w-full h-px bg-border mt-6"></div>
      </div>

      <p className="font-sans text-[16px] md:text-[18px] text-muted max-w-[560px] mb-[40px] md:mb-[64px] leading-relaxed">
        {t.desc}
      </p>

      <div className="flex flex-col">
        <ContactRow 
          label="Email" 
          value="gabrielalvessilva02@outlook.com" 
          copiedOption="gabrielalvessilva02@outlook.com"
          mainActionLabel={t.send}
          mainActionHref="mailto:gabrielalvessilva02@outlook.com"
          copyText={t.copy}
          copiedText={t.copied}
        />
        <ContactRow 
          label="Whatsapp" 
          value="+55 11 91576-2851" 
          copiedOption="11915762851"
          mainActionLabel={t.msg}
          mainActionHref="https://wa.me/5511915762851"
          copyText={t.copy}
          copiedText={t.copied}
        />
        <ContactRow 
          label="Linkedin" 
          value="linkedin.com/in/ogabrielalves" 
          mainActionLabel={t.open}
          mainActionHref="https://www.linkedin.com/in/ogabrielalves"
        />
        <ContactRow 
          label="GitHub" 
          value="github.com/ogabrielalves" 
          mainActionLabel={t.open}
          mainActionHref="https://github.com/ogabrielalves"
        />
      </div>

    </section>
  );
};
