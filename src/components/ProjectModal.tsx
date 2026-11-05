import React from 'react';
import { X, Github, ExternalLink, Layers, CheckCircle2, Terminal, Target, Lightbulb, Wrench, BookOpen } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1220] border border-slate-800 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Category & Status */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-mono border border-blue-500/30">
            {project.categoryLabel[language]}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
            {project.status[language]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>

        {/* Academic context if applicable */}
        {project.academicContext && (
          <div className="text-xs font-mono text-slate-400 mb-5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>{project.academicContext[language]}</span>
          </div>
        )}

        {/* Section 1: Problem & What It Solves */}
        {project.problem && (
          <div className="mb-5 p-4 rounded-xl bg-[#111827] border border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2 font-semibold">
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'en' ? 'The Problem Addressed' : 'El Problema que Resuelve'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.problem[language]}
            </p>
          </div>
        )}

        {/* Section 2: Solution & Overview */}
        <div className="mb-5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2 font-semibold">
            <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'en' ? 'What the Project Does' : 'Qué Hace el Proyecto'}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {project.solution ? project.solution[language] : project.longDescription[language]}
          </p>
        </div>

        {/* Section 3: My Specific Contribution */}
        {project.myContribution && (
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2 font-semibold">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'en' ? 'My Specific Contribution' : 'Mi Contribución Específica'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.myContribution[language]}
            </p>
          </div>
        )}

        {/* Section 4: Technical Challenges & What I Learned */}
        {project.challengesAndLearnings && (
          <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2 font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'en' ? 'Technical Challenges & Learnings' : 'Retos Técnicos y Aprendizajes'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.challengesAndLearnings[language]}
            </p>
          </div>
        )}

        {/* Section 5: Technical Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>{language === 'en' ? 'Key Features & Implementation' : 'Aspectos Técnicos e Implementación'}</span>
          </h4>
          <ul className="space-y-2">
            {project.features[language].map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 6: Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-semibold">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>{language === 'en' ? 'Technologies Used' : 'Tecnologías Utilizadas'}</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#111827] text-slate-200 border border-slate-800 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{language === 'en' ? 'View on GitHub' : 'Ver en GitHub'}</span>
            </a>
          ) : (
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{language === 'en' ? 'Explore on GitHub' : 'Explorar en GitHub'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors border border-slate-700"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{language === 'en' ? 'Live Demonstration' : 'Demostración'}</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl bg-[#111827] hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors border border-slate-800"
          >
            {language === 'en' ? 'Close' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
