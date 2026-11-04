import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types/portfolio';
import { PROJECTS, UI_TRANSLATIONS, SOCIAL_LINKS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';
import { BtcForecastVisual, FullstackArchVisual, DataAnalyticsVisual } from './ProjectVisuals';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: UI_TRANSLATIONS.projects.filterAll[language] },
    { id: 'ai-ml', label: UI_TRANSLATIONS.projects.filterAi[language] },
    { id: 'fullstack', label: UI_TRANSLATIONS.projects.filterFullstack[language] },
    { id: 'data', label: UI_TRANSLATIONS.projects.filterData[language] },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const renderVisual = (type: ProjectItem['visualType']) => {
    switch (type) {
      case 'btc-forecast':
        return <BtcForecastVisual />;
      case 'fullstack-arch':
        return <FullstackArchVisual />;
      case 'data-analytics':
        return <DataAnalyticsVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-900 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // {UI_TRANSLATIONS.projects.title[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.projects.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            {UI_TRANSLATIONS.projects.subtitle[language]}
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500'
                    : 'bg-[#111827]/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0D1220]/90 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual Preview Graphic */}
                <div className="p-4 bg-[#0A0E17] border-b border-slate-800/80">
                  {renderVisual(project.visualType)}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Status Pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                        {project.categoryLabel[language]}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {project.status[language]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 font-normal">
                      {project.shortDescription[language]}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#111827] text-slate-300 border border-slate-800 text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded bg-[#111827] text-slate-500 text-[11px] font-mono">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{UI_TRANSLATIONS.projects.viewDetails[language]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
                          title="Configurable Repository Link"
                        >
                          <Github className="w-4 h-4" />
                        </button>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Central Configuration Hint Box */}
        <div className="mt-14 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#0D1220]/70 border border-slate-800/80 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.projects.placeholderBadge[language]}</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {UI_TRANSLATIONS.projects.placeholderNotice[language]}
          </p>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
