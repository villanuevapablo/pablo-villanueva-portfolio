import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, PROJECTS, SOCIAL_LINKS, UI_COPY } from '../data/portfolioData';

interface HeroProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectProject: (projectId: string) => void;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateSection,
  onSelectProject,
  onOpenCv,
}) => {
  const { language } = useLanguage();
  const leadProject = PROJECTS[0];
  const companionProjects = PROJECTS.slice(1, 3);

  const coverLinks = [
    {
      num: '02',
      label: { en: 'Projects', es: 'Proyectos' },
      meta: { en: '05 AI, Data & Software Case Studies', es: '05 Casos en IA, Datos y Software' },
      target: 'work',
    },
    {
      num: '03',
      label: { en: 'Areas of Interest', es: 'Áreas de Interés' },
      meta: { en: 'AI & ML · Data · Software Dev', es: 'IA y ML · Datos · Software' },
      target: 'interests',
    },
    {
      num: '04',
      label: { en: 'Profile & Toolkit', es: 'Perfil y Stack' },
      meta: { en: 'DAM 2023–2025 · BSc Hons 2025–2026', es: 'DAM 2023–2025 · Grado 2025–2026' },
      target: 'profile',
    },
    {
      num: '05',
      label: { en: 'Contact & CV', es: 'Contacto y CV' },
      meta: { en: 'Software · AI · Data Roles', es: 'Roles en Software · IA · Datos' },
      target: 'contact',
    },
  ];

  const btcPipelineStages =
    language === 'en'
      ? [
          'OHLCV Data Collection (yfinance)',
          'Preprocessing & Feature Engineering',
          'Linear Regression & Random Forest',
          '5-Fold TimeSeriesSplit Validation',
          'Error Evaluation & Plotly/Streamlit Viz',
        ]
      : [
          'Captura de datos OHLCV (yfinance)',
          'Limpieza e Ingeniería de Características',
          'Regresión Lineal y Random Forest',
          'Validación Temporal TimeSeriesSplit',
          'Evaluación y Visualización Plotly/Streamlit',
        ];

  return (
    <section
      id="overview"
      aria-label={language === 'en' ? 'Overview' : 'Presentación'}
      className="relative bg-[#F3F0E9] text-[#171918] border-b border-[#171918]"
    >
      {/* Top Info Rule — Ultra-compact single bar on Mobile */}
      <div className="border-b border-[#B9B7AF] bg-[#F3F0E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.11em] text-[#5D605C]">
          <div className="flex items-center gap-2 text-[#171918] font-medium">
            <span className="inline-block w-2 h-2 bg-[#D97745] shrink-0" aria-hidden="true" />
            <span className="sm:hidden">MADRID · AI · DATA</span>
            <span className="hidden sm:inline">{UI_COPY.cover.topTag[language]}</span>
          </div>
          <div className="flex items-center gap-x-3 shrink-0">
            <span className="hidden md:inline">{UI_COPY.cover.locationMeta[language]}</span>
            <span className="hidden md:inline text-[#B9B7AF]">|</span>
            <span className="text-[#526B9B] font-semibold">
              {UI_COPY.cover.credentialMeta[language]}
            </span>
          </div>
        </div>
      </div>

      {/* Main 12-Column Asymmetric Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-0 items-start">
          {/* Col 1: Vertical Spine Annotation (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-start justify-between h-full pr-4 border-r border-[#B9B7AF]">
            <span className="writing-vertical font-mono text-[10px] uppercase tracking-[0.18em] text-[#5D605C] select-none py-2">
              PABLO VILLANUEVA — SOFTWARE · AI · DATA
            </span>
            <span className="font-mono text-[10px] text-[#D97745] font-semibold pt-6">
              01
            </span>
          </div>

          {/* Col 2-8: Name, Role, Actions & Priority Matrix */}
          <div className="lg:col-span-7 lg:px-8 xl:px-10 flex flex-col">
            {/* Desktop Meta Line */}
            <div className="hidden sm:flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                01 / {language === 'en' ? 'PERSONAL PORTFOLIO' : 'PORTFOLIO PERSONAL'}
              </span>
              <span className="font-mono text-[11px] text-[#5D605C]">
                {PERSONAL_INFO.statusBadge[language]}
              </span>
            </div>

            {/* Mobile Identity Row (Name + Crisp Inline Portrait Stamp so Screen #1 shows face + name + CTAs!) */}
            <div className="flex items-start justify-between gap-4 mb-4 lg:block">
              <div className="min-w-0">
                <span className="sm:hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745] font-semibold block mb-1.5">
                  01 / {language === 'en' ? 'PORTFOLIO' : 'PORTFOLIO'}
                </span>
                <h1
                  className="font-serif text-[#171918] tracking-[-0.02em] leading-[0.94] sm:mb-5"
                  style={{ fontSize: 'clamp(2.55rem, 6.2vw, 5.25rem)' }}
                >
                  <span className="block">Pablo</span>
                  <span className="block italic text-[#171918]">Villanueva</span>
                </h1>
              </div>

              {/* Compact Portrait Only on Mobile/Tablet (< lg) */}
              <div className="lg:hidden shrink-0 border border-[#171918] bg-[#EAE6DC] p-1">
                <div className="w-[74px] sm:w-24 aspect-[3/4] overflow-hidden bg-[#171918]">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Role Positioning Rule */}
            <div className="border-y border-[#171918] py-2.5 sm:py-3 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <p className="text-[15px] sm:text-lg font-bold tracking-tight text-[#171918]">
                {PERSONAL_INFO.title[language]}
              </p>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#526B9B] font-medium">
                AI · ML · Data · Full Stack
              </span>
            </div>

            {/* Concrete Factual Introduction */}
            <p className="text-sm sm:text-[15px] text-[#3D403E] leading-relaxed max-w-2xl mb-4">
              {PERSONAL_INFO.editorialSummary[language]}
            </p>

            {/* Availability Notice — Single clean callout */}
            <p className="text-xs font-mono text-[#171918] bg-[#EAE6DC] border-l-2 border-[#D97745] px-3 py-2 mb-5 sm:mb-6">
              {PERSONAL_INFO.availability[language]}
            </p>

            {/* Primary Action Buttons: Positioned ABOVE Focus Grid on Mobile (< lg) for instant thumb reach, BELOW Focus Grid on Desktop (lg:) */}
            <div className="order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
                <button
                  onClick={() => onNavigateSection('work')}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
                >
                  <span>{UI_COPY.cover.readSelectedWork[language]}</span>
                  <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>

                <button
                  onClick={onOpenCv}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 border border-[#171918] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="sm:hidden">{language === 'en' ? 'Download CV' : 'Descargar CV'}</span>
                  <span className="hidden sm:inline">{UI_COPY.cover.openCv[language]}</span>
                </button>

                <div className="col-span-2 flex items-center gap-2 sm:col-span-1 xl:ml-auto font-mono text-xs">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-2 border border-[#B9B7AF] hover:border-[#171918] text-[#171918] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D97745]" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-2 border border-[#B9B7AF] hover:border-[#171918] text-[#171918] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#526B9B]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Priority Focus Specification Matrix (Below CTAs on Mobile, Above CTAs on Desktop) */}
            <div className="order-2 lg:order-1 border-t border-[#B9B7AF] pt-4 lg:mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5D605C] block mb-2.5">
                {UI_COPY.cover.interestHeading[language]}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#B9B7AF]">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <div
                    key={interest.id}
                    className={`p-2 sm:p-2.5 border-r border-b border-[#B9B7AF] bg-[#F3F0E9] ${
                      idx === PERSONAL_INFO.interests.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="text-xs font-bold text-[#171918] flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#D97745]">0{idx + 1}</span>
                      <span>{interest.label[language]}</span>
                    </div>
                    <div className="text-[11px] text-[#5D605C] mt-0.5 leading-snug hidden sm:block">
                      {interest.note[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 9-12: Desktop Portrait Dossier + Featured AI & Data Card */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-[#B9B7AF] flex flex-col gap-5">
            {/* Desktop Full Portrait Card */}
            <figure className="hidden lg:block border border-[#171918] bg-[#EAE6DC] p-3">
              <div className="flex items-stretch gap-3.5">
                <div className="w-28 aspect-[3/4] border border-[#171918] overflow-hidden bg-[#171918] shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between py-0.5 min-w-0 font-mono text-[10px]">
                  <div>
                    <span className="text-[#D97745] font-semibold uppercase tracking-[0.12em] block">
                      {UI_COPY.cover.portraitCaption[language]}
                    </span>
                    <span className="font-serif text-xl text-[#171918] block leading-tight mt-1">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="text-[#5D605C] block mt-1">
                      BSc Hons Software Eng. (2025–2026)
                    </span>
                    <span className="text-[#526B9B] font-semibold block">
                      First-Class Honours (9/10)
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#B9B7AF] text-[#3D403E] uppercase tracking-[0.06em]">
                    DAM NEBRIJA · 2023–2025<br />
                    MADRID, SPAIN
                  </div>
                </div>
              </div>
            </figure>

            {/* Dark Ink Featured AI & Data Card */}
            <div className="bg-[#171918] text-[#F3F0E9] p-4 sm:p-5 border border-[#171918] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#B9B7AF]/25">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745]">
                    {UI_COPY.cover.featuredBoxLabel[language]}
                  </span>
                  <span className="font-mono text-[10px] text-[#B9B7AF] shrink-0">
                    TFG · {leadProject.grade}
                  </span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl text-[#F3F0E9] leading-snug mb-2">
                  {leadProject.title}
                </h2>

                <ul className="space-y-1 text-[11px] font-mono text-[#B9B7AF] mb-4">
                  {btcPipelineStages.map((stage) => (
                    <li key={stage} className="flex items-start gap-2">
                      <span className="text-[#D97745]">•</span>
                      <span>{stage}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#B9B7AF]/20 pt-3 mb-4 space-y-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#B9B7AF]/80 block">
                    {language === 'en' ? 'MORE APPLIED AI & DATA WORK' : 'MÁS PROYECTOS EN IA Y DATOS'}
                  </span>
                  {companionProjects.map((comp) => (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={() => onSelectProject(comp.id)}
                      className="w-full text-left font-mono text-[11px] text-[#F3F0E9] hover:text-[#D97745] flex items-center justify-between py-0.5 transition-colors"
                    >
                      <span className="truncate pr-2">
                        {comp.projectNumber} · {comp.title}
                      </span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectProject(leadProject.id)}
                className="w-full py-2.5 px-3 bg-[#F3F0E9] text-[#171918] hover:bg-[#D97745] hover:text-[#171918] text-xs font-semibold uppercase tracking-[0.12em] flex items-center justify-between transition-colors"
              >
                <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4-Column Quick Section Links — Hidden on narrow mobile to eliminate repetitive boxes */}
      <div className="hidden sm:block border-t border-[#B9B7AF] bg-[#EAE6DC]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#B9B7AF]">
            {coverLinks.map((entry) => (
              <button
                key={entry.num}
                onClick={() => onNavigateSection(entry.target)}
                className="group text-left py-4 px-3 sm:px-5 hover:bg-[#171918] hover:text-[#F3F0E9] transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[#D97745] font-semibold">
                    SECTION {entry.num}
                  </span>
                  <span className="font-mono text-xs text-[#5D605C] group-hover:text-[#D97745] transition-colors">
                    ↓
                  </span>
                </div>
                <span className="font-serif text-base sm:text-lg block">
                  {entry.label[language]}
                </span>
                <span className="font-mono text-[10px] text-[#5D605C] group-hover:text-[#B9B7AF] mt-0.5 block">
                  {entry.meta[language]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
