export const Footer = ({ lang }: { lang: 'pt' | 'en' }) => {
  const text = lang === 'pt' ? 'Construído com Next.js' : 'Built with Next.js';
  
  return (
    <footer className="w-full relative">
      <div className="w-full h-px bg-border"></div>
      <div className="max-w-[1100px] mx-auto px-6 py-[32px] flex justify-center items-center">
        <span className="font-sans text-[13px] text-[#333333]">Gabriel Alves © {new Date().getFullYear()} — {text}</span>
      </div>
    </footer>
  );
};
