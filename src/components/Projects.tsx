import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Award } from 'lucide-react';
import { PROJECTS, UI_COPY } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import {
  BtcForecastVisual,
  SrmsSecurityVisual,
  SmartOrganizerVisual,
  IotEdgeVisual,
  PreflopHeroVisual,
} from './ProjectVisuals';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: UI_COPY.selectedWork.filterAll[language] },
    { id: 'ai-ml', label: UI_COPY.selectedWork.filterAiMl[language] },
    { id: 'data', label: UI_COPY.selectedWork.filterData[language] },
    { id: 'backend-security', label: UI_COPY.selectedWork.filterSoftware[language] },
    { id: 'iot', label: UI_COPY.selectedWork.filterIot[language] },
  ];

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const renderVisual = (visualType: ProjectItem['visualType']) => {
    switch (visualType) {
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

  const renderProjectSpread = (project: ProjectItem) => {
    // 01 — Lead Dark Ink Research Spread (BTC ML & Time Series)
    if (project.id === 'bitcoin-price-forecasting') {
      return (
        <article
          key={project.id}
          className="bg-[#171918] text-[#F3F0E9] border border-[#171918] p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#B9B7AF]/25">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-5xl sm:text-6xl text-[#D97745] leading-none">
                      {project.projectNumber}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#B9B7AF] block">
                        {project.categoryLabel[language]}
                      </span>
                      <span className="font-mono text-[11px] text-[#F3F0E9] font-medium">
                        {project.status[language]}
                      </span>
                    </div>
                  </div>
                  {project.grade && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#D97745] text-[#D97745] font-mono text-[11px]">
                      <Award className="w-3.5 h-3.5" />
                      <span>TFG {project.grade}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#F3F0E9] leading-tight mb-3">
                  {project.title}
                </h3>

                {project.academicContext && (
                  <p className="font-mono text-[11px] text-[#B9B7AF] mb-4">
                    {project.academicContext[language]}
                  </p>
                )}

                <p className="text-sm sm:text-base text-[#F3F0E9]/85 leading-relaxed mb-6">
                  {project.shortDescription[language]}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-[#B9B7AF]/30 text-[#F3F0E9] font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#B9B7AF]/20">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#F3F0E9] text-[#171918] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 border border-[#B9B7AF]/40 text-[#F3F0E9] hover:border-[#F3F0E9] text-xs font-mono uppercase tracking-[0.1em] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D97745]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">{renderVisual(project.visualType)}</div>
          </div>
        </article>
      );
    }

    // 02 — Reversed Paper Spread (Visual Left : Narrative Right) — Local AI Organizer
    if (project.id === 'smart-file-organizer') {
      return (
        <article
          key={project.id}
          className="border-y border-[#171918] py-10 sm:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6 order-2 lg:order-1">
              {renderVisual(project.visualType)}
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-[#B9B7AF]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745] font-semibold block">
                    {project.categoryLabel[language]}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#171918] leading-tight mt-1">
                    {project.title}
                  </h3>
                </div>
                <span className="font-serif text-5xl text-[#526B9B] leading-none shrink-0">
                  {project.projectNumber}
                </span>
              </div>

              <div className="font-mono text-[11px] text-[#5D605C] mb-3">
                {project.status[language]}
              </div>

              <p className="text-sm sm:text-base text-[#3D403E] leading-relaxed mb-6">
                {project.shortDescription[language]}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-7">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[#EAE6DC] border border-[#B9B7AF] text-[#171918] font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#B9B7AF]">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 border border-[#171918] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] text-xs font-mono uppercase tracking-[0.1em] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>
      );
    }

    // 03 — Three-Column Spine Spread — Preflop Hero Data Parsing & Analytics
    if (project.id === 'preflop-hero') {
      return (
        <article
          key={project.id}
          className="bg-[#EAE6DC]/70 border border-[#B9B7AF] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-2 flex lg:flex-col justify-between lg:border-r lg:border-[#B9B7AF] lg:pr-4 h-full">
              <div>
                <span className="font-serif text-5xl sm:text-6xl text-[#171918] leading-none block">
                  {project.projectNumber}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#526B9B] font-semibold mt-2 block">
                  {project.categoryLabel[language]}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#5D605C]">
                {project.year}
              </span>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171918] leading-tight mb-2">
                {project.title}
              </h3>
              <p className="font-mono text-[11px] text-[#5D605C] mb-4">
                {project.status[language]}
              </p>
              <p className="text-sm text-[#3D403E] leading-relaxed mb-5">
                {project.shortDescription[language]}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[#F3F0E9] border border-[#B9B7AF] text-[#171918] font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3.5 py-2.5 border border-[#171918] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] text-xs font-mono transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">{renderVisual(project.visualType)}</div>
          </div>
        </article>
      );
    }

    // 04 (Go Systems Light Plate) & 05 (Embedded IoT Dark Plate)
    const isIot = project.id === 'iot-edge-security';
    return (
      <article
        key={project.id}
        className={
          isIot
            ? 'bg-[#171918] text-[#F3F0E9] border border-[#171918] p-6 sm:p-8 flex flex-col justify-between'
            : 'bg-[#F3F0E9] text-[#171918] border-t-4 border-t-[#526B9B] border-x border-b border-[#171918] p-6 sm:p-8 flex flex-col justify-between'
        }
      >
        <div>
          <div
            className={`flex items-start justify-between gap-4 pb-4 mb-5 border-b ${
              isIot ? 'border-[#B9B7AF]/25' : 'border-[#B9B7AF]'
            }`}
          >
            <div>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.14em] block ${
                  isIot ? 'text-[#D97745]' : 'text-[#526B9B] font-semibold'
                }`}
              >
                {project.categoryLabel[language]}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight mt-1">
                {project.title}
              </h3>
            </div>
            <span
              className={`font-serif text-4xl sm:text-5xl leading-none shrink-0 ${
                isIot ? 'text-[#D97745]' : 'text-[#171918]'
              }`}
            >
              {project.projectNumber}
            </span>
          </div>

          <p className={`font-mono text-[11px] mb-3 ${isIot ? 'text-[#B9B7AF]' : 'text-[#5D605C]'}`}>
            {project.status[language]}
          </p>

          <p className={`text-sm leading-relaxed mb-6 ${isIot ? 'text-[#F3F0E9]/85' : 'text-[#3D403E]'}`}>
            {project.shortDescription[language]}
          </p>

          <div className="mb-6">{renderVisual(project.visualType)}</div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 font-mono text-[11px] border ${
                  isIot
                    ? 'border-[#B9B7AF]/30 text-[#F3F0E9]'
                    : 'border-[#B9B7AF] bg-[#EAE6DC] text-[#171918]'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center gap-3 pt-4 border-t ${
            isIot ? 'border-[#B9B7AF]/20' : 'border-[#B9B7AF]'
          }`}
        >
          <button
            onClick={() => onSelectProject(project.id)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
              isIot
                ? 'bg-[#F3F0E9] text-[#171918] hover:bg-[#D97745]'
                : 'bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745]'
            }`}
          >
            <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-3.5 py-2.5 border text-xs font-mono transition-colors ${
              isIot
                ? 'border-[#B9B7AF]/40 text-[#F3F0E9] hover:border-[#F3F0E9]'
                : 'border-[#171918] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9]'
            }`}
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    );
  };

  const leadSpreads = filtered.filter((p) =>
    ['bitcoin-price-forecasting', 'smart-file-organizer', 'preflop-hero'].includes(p.id)
  );
  const bottomPair = filtered.filter((p) =>
    ['srms-medical', 'iot-edge-security'].includes(p.id)
  );

  return (
    <section
      id="work"
      aria-label={UI_COPY.selectedWork.sectionTitle[language]}
      className="bg-[#F3F0E9] text-[#171918] border-b border-[#171918] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 mb-10 border-b border-[#171918] items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
              {UI_COPY.selectedWork.sectionKicker[language]}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171918] tracking-tight leading-[1.02]">
              {UI_COPY.selectedWork.sectionTitle[language]}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-[#3D403E] leading-relaxed">
              {UI_COPY.selectedWork.sectionSubtitle[language]}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#B9B7AF]"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] border transition-colors ${
                  isActive
                    ? 'bg-[#171918] text-[#F3F0E9] border-[#171918] font-semibold'
                    : 'bg-transparent text-[#5D605C] border-[#B9B7AF] hover:border-[#171918] hover:text-[#171918]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Project Layouts */}
        <div className="space-y-12">
          {leadSpreads.map((proj) => renderProjectSpread(proj))}

          {bottomPair.length > 0 && (
            <div
              className={`grid grid-cols-1 ${
                bottomPair.length === 2 ? 'lg:grid-cols-12' : ''
              } gap-8 items-stretch`}
            >
              {bottomPair.map((proj) => (
                <div
                  key={proj.id}
                  className={
                    bottomPair.length === 2 ? 'lg:col-span-6 flex' : 'w-full'
                  }
                >
                  <div className="w-full flex [&>article]:w-full">
                    {renderProjectSpread(proj)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
