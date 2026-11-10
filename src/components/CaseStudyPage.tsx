import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Github } from 'lucide-react';
import { PROJECTS, UI_COPY } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import {
  BtcForecastVisual,
  SrmsSecurityVisual,
  SmartOrganizerVisual,
  IotEdgeVisual,
  PreflopHeroVisual,
} from './ProjectVisuals';

interface CaseStudyPageProps {
  projectId: string;
  onSelectProject: (projectId: string) => void;
  onBackHome: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  projectId,
  onSelectProject,
  onBackHome,
}) => {
  const { language } = useLanguage();
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project: ProjectItem = PROJECTS[projectIndex >= 0 ? projectIndex : 0];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [projectId]);

  const renderVisual = (type: ProjectItem['visualType']) => {
    switch (type) {
      case 'btc-forecast':
        return <BtcForecastVisual />;
      case 'srms-security':
        return <SrmsSecurityVisual />;
      case 'smart-organizer':
        return <SmartOrganizerVisual />;
      case 'iot-edge':
        return <IotEdgeVisual />;
      case 'preflop-hero':
        return <PreflopHeroVisual />;
    }
  };

  const c = UI_COPY.caseStudyChapters;
  const cs = project.caseStudy;

  /* --------------------------------------------------------------------------
   * Distinct Top Header Composition per Project Editorial Variant
   * -------------------------------------------------------------------------- */
  const renderVariantHeader = () => {
    if (project.editorialVariant === 'dark-research') {
      // Research Paper Dark Ink Cover
      return (
        <header className="bg-[#171918] text-[#F3F0E9] border-b border-[#171918] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#B9B7AF]/25">
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#B9B7AF] hover:text-[#D97745] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{c.backToIndex[language]}</span>
              </button>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D97745]">
                MONOGRAPH {project.issueNumber} · RESEARCH DISSERTATION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                {project.grade && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D97745] text-[#D97745] font-mono text-xs mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>TFG GRADE: {project.grade}</span>
                  </div>
                )}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.98] mb-4">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg text-[#B9B7AF] leading-relaxed mb-6">
                  {project.subtitle[language]}
                </p>
                {project.academicContext && (
                  <p className="font-mono text-xs text-[#F3F0E9]/80 border-l-2 border-[#D97745] pl-3">
                    {project.academicContext[language]}
                  </p>
                )}
              </div>
              <div className="lg:col-span-5">{renderVisual(project.visualType)}</div>
            </div>
          </div>
        </header>
      );
    }

    if (project.editorialVariant === 'hardware-schematic') {
      // Hardware Schematic Split Header
      return (
        <header className="bg-[#EAE6DC] text-[#171918] border-b border-[#171918] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#171918]">
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#171918] hover:text-[#D97745] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{c.backToIndex[language]}</span>
              </button>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#526B9B] font-semibold">
                HARDWARE SCHEMATIC · MONOGRAPH {project.issueNumber}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="font-serif text-6xl text-[#D97745] block leading-none mb-2">
                  {project.issueNumber}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl text-[#171918] leading-tight mb-3">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-[#3D403E] leading-relaxed mb-4">
                  {project.subtitle[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 border border-[#171918] bg-[#F3F0E9] font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6">{renderVisual(project.visualType)}</div>
            </div>
          </div>
        </header>
      );
    }

    // Dossier Spec / Pipeline Monograph / Data Notebook Editorial Paper Headers
    return (
      <header className="bg-[#F3F0E9] text-[#171918] border-b border-[#171918] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-[#B9B7AF]">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#171918] hover:text-[#D97745] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{c.backToIndex[language]}</span>
            </button>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D97745] font-semibold">
              MONOGRAPH {project.issueNumber} / {project.categoryLabel[language]}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#171918] leading-[0.98] mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-[#3D403E] leading-relaxed max-w-3xl">
                {project.subtitle[language]}
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-[#B9B7AF] lg:pl-6 font-mono text-xs space-y-2">
              <div>
                <span className="text-[#5D605C] block text-[10px] uppercase">STATUS</span>
                <span className="text-[#171918] font-medium">{project.status[language]}</span>
              </div>
              <div>
                <span className="text-[#5D605C] block text-[10px] uppercase">STACK</span>
                <span className="text-[#526B9B] font-medium">{project.technologies.slice(0, 4).join(' · ')}</span>
              </div>
            </div>
          </div>

          {project.editorialVariant !== 'pipeline-monograph' && (
            <div className="mt-10">{renderVisual(project.visualType)}</div>
          )}
        </div>
      </header>
    );
  };

  /* --------------------------------------------------------------------------
   * Shared Chapters Block (Formatted Distinctly by Variant)
   * -------------------------------------------------------------------------- */
  const renderAllEightChapters = () => {
    const isStickyRail = project.editorialVariant === 'pipeline-monograph';
    const isNotebook = project.editorialVariant === 'data-notebook';
    const isDossier = project.editorialVariant === 'dossier-spec';

    const chapterList = [
      { id: 'ch-01', title: c.c01[language] },
      { id: 'ch-02', title: c.c02[language] },
      { id: 'ch-03', title: c.c03[language] },
      { id: 'ch-04', title: c.c04[language] },
      { id: 'ch-05', title: c.c05[language] },
      { id: 'ch-06', title: c.c06[language] },
      { id: 'ch-07', title: c.c07[language] },
      { id: 'ch-08', title: c.c08[language] },
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Optional Sticky Sidebar TOC (Used on Pipeline Monograph Variant) */}
          {isStickyRail && (
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 border-r border-[#B9B7AF] pr-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D97745] block mb-4 font-semibold">
                CHAPTER INDEX
              </span>
              <ul className="space-y-2.5 font-mono text-[11px]">
                {chapterList.map((ch) => (
                  <li key={ch.id}>
                    <a
                      href={`#${ch.id}`}
                      className="text-[#5D605C] hover:text-[#171918] transition-colors block py-1 border-b border-[#B9B7AF]/50"
                    >
                      {ch.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Main Story Body */}
          <div className={isStickyRail ? 'lg:col-span-9 space-y-14' : 'lg:col-span-12 space-y-14'}>
            {/* 01 — INTRODUCTION */}
            <section id="ch-01" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#B9B7AF]">
              <div className="lg:col-span-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                  {c.c01[language]}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg text-[#171918] leading-relaxed font-medium">
                  {cs.introduction[language]}
                </p>
              </div>
            </section>

            {/* 02 & 03 — THE CHALLENGE & THE SOLUTION */}
            <section
              id="ch-02"
              className={
                isDossier
                  ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10 border-b border-[#B9B7AF]'
                  : 'space-y-10 pb-10 border-b border-[#B9B7AF]'
              }
            >
              <div className={isDossier ? 'p-6 border border-[#171918] bg-[#EAE6DC]/60' : 'grid grid-cols-1 lg:grid-cols-12 gap-6'}>
                <div className={isDossier ? 'mb-3' : 'lg:col-span-4'}>
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                    {c.c02[language]}
                  </h2>
                </div>
                <div className={isDossier ? '' : 'lg:col-span-8'}>
                  <p className="text-sm sm:text-base text-[#3D403E] leading-relaxed">
                    {cs.theChallenge[language]}
                  </p>
                </div>
              </div>

              <div
                id="ch-03"
                className={isDossier ? 'p-6 border border-[#171918] bg-[#F3F0E9]' : 'grid grid-cols-1 lg:grid-cols-12 gap-6'}
              >
                <div className={isDossier ? 'mb-3' : 'lg:col-span-4'}>
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#526B9B] font-semibold">
                    {c.c03[language]}
                  </h2>
                </div>
                <div className={isDossier ? '' : 'lg:col-span-8'}>
                  <p className="text-sm sm:text-base text-[#3D403E] leading-relaxed">
                    {cs.theSolution[language]}
                  </p>
                </div>
              </div>
            </section>

            {/* Pipeline Visual Inline for Pipeline Variant */}
            {isStickyRail && <div>{renderVisual(project.visualType)}</div>}

            {/* 04 — ARCHITECTURE */}
            <section id="ch-04" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#B9B7AF]">
              <div className="lg:col-span-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold mb-2">
                  {c.c04[language]}
                </h2>
                <p className="text-xs text-[#5D605C] leading-relaxed">
                  {cs.architecture.summary[language]}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="border-t border-l border-[#B9B7AF] grid grid-cols-1 sm:grid-cols-2">
                  {cs.architecture.modules.map((mod) => (
                    <div key={mod.name} className="p-4 border-r border-b border-[#B9B7AF] bg-[#F3F0E9]">
                      <span className="font-mono text-xs font-bold text-[#171918] block mb-1">
                        {mod.name}
                      </span>
                      <p className="text-xs text-[#3D403E] leading-relaxed">
                        {mod.role[language]}
                      </p>
                    </div>
                  ))}
                </div>

                {cs.architecture.codeSnippet && (
                  <div className={isNotebook ? 'border-l-4 border-l-[#526B9B] bg-[#171918] text-[#F3F0E9] p-5' : 'bg-[#171918] text-[#F3F0E9] border border-[#171918] p-5'}>
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#B9B7AF] pb-2 mb-3 border-b border-[#B9B7AF]/20">
                      <span>{cs.architecture.codeSnippet.filename}</span>
                      <span className="uppercase text-[#D97745]">{cs.architecture.codeSnippet.language}</span>
                    </div>
                    <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-[#F3F0E9]">
                      <code>{cs.architecture.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </section>

            {/* 05 — ENGINEERING DECISIONS */}
            <section id="ch-05" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#B9B7AF]">
              <div className="lg:col-span-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                  {c.c05[language]}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {cs.engineeringDecisions.map((ed, idx) => (
                  <div key={idx} className="p-5 border border-[#B9B7AF] bg-[#EAE6DC]/40">
                    <h3 className="text-sm font-bold text-[#171918] mb-1.5">
                      {ed.decision[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D403E] leading-relaxed">
                      {ed.rationale[language]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 06 — CHALLENGES */}
            <section id="ch-06" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#B9B7AF]">
              <div className="lg:col-span-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                  {c.c06[language]}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-3">
                {cs.challenges[language].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-[#B9B7AF]/60 last:border-b-0">
                    <span className="font-mono text-xs font-semibold text-[#526B9B] pt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-[#3D403E] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 07 — RESULTS & LEARNINGS */}
            <section id="ch-07" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#B9B7AF]">
              <div className="lg:col-span-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[#D97745] font-semibold">
                  {c.c07[language]}
                </h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 border border-[#171918] bg-[#F3F0E9]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#526B9B] font-semibold block mb-3">
                    {c.achievedLabel[language]}
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#171918]">
                    {cs.resultsAndLearnings.results[language].map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#D97745] font-bold">■</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 border border-[#B9B7AF] bg-[#EAE6DC]/60">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5D605C] font-semibold block mb-3">
                    {c.limitationsLabel[language]}
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D403E]">
                    {cs.resultsAndLearnings.limitations[language].map((lim, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#5D605C] font-bold">–</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 08 — SOURCE CODE */}
            <section id="ch-08" className="bg-[#171918] text-[#F3F0E9] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] block mb-1">
                  {c.c08[language]}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E9]">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[#B9B7AF] block mt-1 break-all">
                  {project.githubUrl}
                </span>
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F3F0E9] text-[#171918] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors shrink-0"
              >
                <Github className="w-4 h-4" />
                <span>{UI_COPY.selectedWork.viewRepo[language]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </section>
          </div>
        </div>

        {/* Previous / Next Monograph Footer Navigation */}
        <nav
          aria-label="Case study pagination"
          className="mt-16 pt-8 border-t border-[#171918] grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="text-left p-5 border border-[#B9B7AF] hover:border-[#171918] hover:bg-[#EAE6DC]/60 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5D605C] flex items-center gap-1.5 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{c.prevStory[language]}</span>
            </span>
            <span className="font-serif text-xl text-[#171918] block">
              {prevProject.issueNumber} — {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="text-left sm:text-right p-5 border border-[#B9B7AF] hover:border-[#171918] hover:bg-[#EAE6DC]/60 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745] flex items-center sm:justify-end gap-1.5 mb-1">
              <span>{c.nextStory[language]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-serif text-xl text-[#171918] block">
              {nextProject.issueNumber} — {nextProject.title}
            </span>
          </button>
        </nav>
      </div>
    );
  };

  return (
    <article className="bg-[#F3F0E9] text-[#171918] min-h-screen">
      {renderVariantHeader()}
      {renderAllEightChapters()}
    </article>
  );
};
