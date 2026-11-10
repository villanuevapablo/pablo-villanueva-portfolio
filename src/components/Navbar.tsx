import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_COPY } from '../data/portfolioData';

interface NavbarProps {
  currentView: 'home' | 'case-study';
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onBackHome: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeSection,
  onNavigateSection,
  onBackHome,
  onOpenCv,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navItems = [
    { id: 'overview', label: UI_COPY.nav.overview[language] },
    { id: 'work', label: UI_COPY.nav.work[language] },
    { id: 'interests', label: UI_COPY.nav.interests[language] },
    { id: 'profile', label: UI_COPY.nav.profile[language] },
    { id: 'contact', label: UI_COPY.nav.contact[language] },
  ];

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F3F0E9]/95 backdrop-blur-sm border-b border-[#B9B7AF]">
        <div className="h-[2px] w-full bg-[#B9B7AF]/30 relative">
          <div
            className="h-full bg-[#D97745] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="h-14 sm:h-16 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {currentView !== 'home' ? (
                <button
                  onClick={onBackHome}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#171918] hover:text-[#D97745] transition-colors py-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'en' ? 'Overview' : 'Inicio'}</span>
                </button>
              ) : (
                <button
                  onClick={() => handleItemClick('overview')}
                  className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745]"
                  aria-label="Pablo Villanueva — Return to top"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#171918] font-semibold block truncate">
                    {PERSONAL_INFO.name.toUpperCase()}
                    <span className="text-[#5D605C] font-normal hidden sm:inline">
                      {' · '}
                      {PERSONAL_INFO.brandSubtitle}
                    </span>
                  </span>
                </button>
              )}
            </div>

            <nav
              aria-label="Primary Portfolio Navigation"
              className="hidden lg:flex items-center gap-1"
            >
              {navItems.map((item) => {
                const isActive =
                  currentView === 'home'
                    ? activeSection === item.id
                    : item.id === 'work';

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`px-3 py-2 font-mono text-[11px] tracking-[0.1em] transition-colors border-b-2 ${
                      isActive
                        ? 'text-[#171918] border-[#D97745] font-semibold'
                        : 'text-[#5D605C] border-transparent hover:text-[#171918] hover:border-[#B9B7AF]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLanguage}
                aria-label={
                  language === 'en'
                    ? 'Switch language to Spanish'
                    : 'Cambiar idioma a inglés'
                }
                className="font-mono text-[11px] uppercase tracking-[0.12em] px-2.5 py-1.5 border border-[#B9B7AF] hover:border-[#171918] text-[#171918] transition-colors"
              >
                <span className={language === 'en' ? 'font-bold text-[#D97745]' : 'text-[#5D605C]'}>
                  EN
                </span>
                <span className="mx-1 text-[#B9B7AF]">/</span>
                <span className={language === 'es' ? 'font-bold text-[#D97745]' : 'text-[#5D605C]'}>
                  ES
                </span>
              </button>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] font-mono text-[11px] uppercase tracking-[0.1em] transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CV.PDF</span>
                <span className="sm:hidden">CV</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-1.5 border border-[#B9B7AF] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#171918] text-[#F3F0E9] flex flex-col justify-between p-6 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between border-b border-[#B9B7AF]/30 pb-4 mb-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745]">
                {PERSONAL_INFO.name.toUpperCase()} · {PERSONAL_INFO.brandSubtitle}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-[#B9B7AF]/40 text-[#F3F0E9]"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = currentView === 'home' && activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left py-4 border-b border-[#B9B7AF]/20 flex items-center justify-between font-serif text-2xl transition-colors ${
                      isActive ? 'text-[#D97745]' : 'text-[#F3F0E9] hover:text-[#D97745]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#B9B7AF]">→</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-3.5 bg-[#D97745] text-[#171918] font-semibold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>{UI_COPY.cover.openCv[language]}</span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 border border-[#B9B7AF]/30 text-center text-[#F3F0E9] flex items-center justify-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 border border-[#B9B7AF]/30 text-center text-[#F3F0E9] flex items-center justify-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
