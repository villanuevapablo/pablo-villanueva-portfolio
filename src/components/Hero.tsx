import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Terminal, Sparkles, Send, FolderGit2, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_TRANSLATIONS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

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
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Mesh & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full" />
        
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111827]/80 border border-slate-800 text-xs text-slate-300 mb-8 shadow-inner shadow-black/40 hover:border-slate-700 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">{PERSONAL_INFO.statusBadge[language]}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-400" />
            Spain
          </span>
        </motion.div>

        {/* Identity & Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400 inline" />
            {PERSONAL_INFO.name}
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-normal">Software Engineer</span>
          </h2>
        </motion.div>

        {/* Main Tri-line Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">software</span>.<br />
          Exploring <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-300">intelligence</span>.<br />
          Creating <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-blue-100 to-slate-300">impact</span>.
        </motion.h1>

        {/* Supporting Heading & Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-4"
        >
          {PERSONAL_INFO.heroSubheading[language]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {PERSONAL_INFO.heroIntro[language]}
        </motion.p>

        {/* CTAs / Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          {/* Button 1: View my projects */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            <FolderGit2 className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
            <span>{UI_TRANSLATIONS.hero.viewProjects[language]}</span>
          </button>

          {/* Button 2: Get in touch */}
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111827] hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            <span>{UI_TRANSLATIONS.hero.getInTouch[language]}</span>
          </button>

          {/* Button 3: GitHub profile */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1220]/80 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.hero.githubProfile[language]}</span>
          </a>
        </motion.div>

        {/* Technical Highlights Bar / Quick Specs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#0D1220]/90 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/40 text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-800/70 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 pl-2">engineer_stack.config</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
              <Sparkles className="w-3 h-3" />
              <span>Full Stack & AI Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block mb-1">// Core Languages</span>
              <span className="text-slate-200 font-semibold">Java • Python • JS/TS</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">// Architecture</span>
              <span className="text-slate-200 font-semibold">REST APIs • Clean Code</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">// AI & Data</span>
              <span className="text-slate-200 font-semibold">ML Pipelines • Pandas</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">// Location</span>
              <span className="text-slate-200 font-semibold">Spain • English / ES</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase group-hover:text-cyan-400 transition-colors">
              Explore
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-cyan-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
