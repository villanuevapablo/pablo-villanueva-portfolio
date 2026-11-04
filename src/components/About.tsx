import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, Code2, Brain, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { CvModal } from './CvModal';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const highlights = PERSONAL_INFO.quickHighlights[language];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>01 // {UI_TRANSLATIONS.about.title[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.about.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            {UI_TRANSLATIONS.about.subtitle[language]}
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0D1220]/80 rounded-2xl border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>professional_profile.md</span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              {PERSONAL_INFO.aboutText[language].map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Engineering Mindset */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                // {language === 'en' ? 'Core Engineering Principles' : 'Principios de Ingeniería'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Clean code, modularity and maintainable design' : 'Código limpio, modularidad y diseño mantenible'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Evidence-based problem solving & continuous learning' : 'Resolución analítica de problemas y aprendizaje continuo'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Data-informed intelligence & machine learning' : 'Inteligencia guiada por datos y machine learning'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Collaboration, agility and systematic debugging' : 'Colaboración, agilidad y depuración sistemática'}
                  </span>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-white block">
                  {UI_TRANSLATIONS.about.downloadCv[language]}
                </span>
                <span className="text-[11px] text-slate-400">
                  {UI_TRANSLATIONS.about.cvNotice[language]}
                </span>
              </div>
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/30 hover:border-blue-500/50 text-xs font-medium transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.about.downloadCv[language]} (PDF)</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Stats & Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1220]/70 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 group hover:-translate-y-0.5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {item.label}
                  </span>
                  {idx === 0 && <GraduationCap className="w-4 h-4 text-blue-400" />}
                  {idx === 1 && <Code2 className="w-4 h-4 text-cyan-400" />}
                  {idx === 2 && <Brain className="w-4 h-4 text-indigo-400" />}
                  {idx === 3 && <Compass className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {item.value}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Quick Contact Prompt Pill */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0D1220] to-cyan-950/30 border border-blue-900/40 text-xs text-slate-300">
              <span className="font-semibold text-white block mb-1">
                {language === 'en' ? 'Ready to contribute' : 'Listo para aportar'}
              </span>
              <p className="text-slate-400 mb-3 text-[11px] leading-relaxed">
                {language === 'en'
                  ? 'Actively seeking software development, backend, or applied AI roles where technical curiosity meets high software engineering standards.'
                  : 'Buscando activamente oportunidades en desarrollo de software, backend o IA aplicada donde el rigor técnico impulse proyectos reales.'}
              </p>
              <a
                href="#contact"
                className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] font-semibold underline underline-offset-4"
              >
                {language === 'en' ? 'Get in touch directly →' : 'Contactar directamente →'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Placeholder Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
};
