import React from 'react';
import { ArrowUp, Github, Linkedin, Heart, Terminal } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-[#06080F] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/80">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Software Engineer | Full Stack & AI Enthusiast
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#0D1220] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#0D1220] border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label={UI_TRANSLATIONS.footer.backToTop[language]}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0D1220] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs font-mono transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
              <span>{UI_TRANSLATIONS.footer.backToTop[language]}</span>
            </button>
          </div>
        </div>

        {/* Bottom line: Copyright & Tech statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. {UI_TRANSLATIONS.footer.rightsReserved[language]}
          </div>

          <div className="text-slate-500 flex items-center gap-1">
            <span>{UI_TRANSLATIONS.footer.craftedWith[language]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
