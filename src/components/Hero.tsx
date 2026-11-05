import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Terminal, Send, FolderGit2, Award, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_TRANSLATIONS } from '../data/portfolioData';
import { CvModal } from './CvModal';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] min-h-[85dvh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Ambient Background (Clean & Professional Dark Theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-slate-800/25 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-900/15 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-15"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Status Pill Badge & Photo Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F172A]/80 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm"
        >
          {/* Avatar Photo */}
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-700">
            <img 
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.fullName} 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Steady green dot without excessive ping */}
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-medium text-slate-300">{PERSONAL_INFO.statusBadge[language]}</span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          {PERSONAL_INFO.fullName}
        </motion.h1>

        {/* Primary Role & Professional Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-4"
        >
          <p className="text-xl sm:text-2xl font-semibold text-blue-400 font-sans tracking-tight">
            {PERSONAL_INFO.title[language]}
          </p>
        </motion.div>

        {/* Supporting Text: Areas of Interest */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-4"
        >
          {PERSONAL_INFO.heroSubheading[language]}
        </motion.p>

        {/* Concise Engineering Profile Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {PERSONAL_INFO.heroIntro[language]}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Button 1: View projects */}
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <FolderGit2 className="w-4 h-4 text-blue-100" />
            <span>{UI_TRANSLATIONS.hero.viewProjects[language]}</span>
          </button>

          {/* Button 2: Download CV */}
          <button
            onClick={() => setIsCvModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-colors"
          >
            <FileDown className="w-4 h-4 text-slate-400" />
            <span>{UI_TRANSLATIONS.hero.downloadCv[language]}</span>
          </button>

          {/* Button 3: Get in touch */}
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <Send className="w-4 h-4 text-slate-400" />
            <span>{UI_TRANSLATIONS.hero.getInTouch[language]}</span>
          </button>

          {/* Button 4: GitHub profile */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-400 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Technical Highlights Bar / Quick Specs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-[#0D1220] border border-slate-800 text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="text-xs font-mono text-slate-400 pl-2">developer_profile.config</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.hero.gradeBadge[language]}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block mb-1">{UI_TRANSLATIONS.hero.specCol1Title[language]}</span>
              <span className="text-slate-200 font-medium">{UI_TRANSLATIONS.hero.specCol1Value[language]}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">{UI_TRANSLATIONS.hero.specCol2Title[language]}</span>
              <span className="text-slate-200 font-medium">{UI_TRANSLATIONS.hero.specCol2Value[language]}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">{UI_TRANSLATIONS.hero.specCol3Title[language]}</span>
              <span className="text-slate-200 font-medium">{UI_TRANSLATIONS.hero.specCol3Value[language]}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">{UI_TRANSLATIONS.hero.specCol4Title[language]}</span>
              <span className="text-emerald-400 font-medium">{UI_TRANSLATIONS.hero.specCol4Value[language]}</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase group-hover:text-blue-400 transition-colors">
              Explore
            </span>
            <ArrowDown className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </button>
        </motion.div>
      </div>

      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
};
