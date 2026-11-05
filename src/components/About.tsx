import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  GraduationCap, 
  Code2, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_TRANSLATIONS } from '../data/portfolioData';
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
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {UI_TRANSLATIONS.about.subtitle[language]}
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative & Verified Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0D1220]/80 rounded-2xl border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />

            <div className="flex items-center justify-between gap-2 text-xs font-mono text-cyan-400 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>professional_profile.md</span>
              </div>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Class I Honours (9/10)</span>
              </span>
            </div>

            {/* Paragraphs from Official CV */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              {PERSONAL_INFO.aboutText[language].map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values & Specialties */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                // {language === 'en' ? 'Core Engineering Competencies' : 'Competencias Principales de Ingeniería'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Scalable Full-Stack architecture & clean code principles' : 'Arquitectura Full-Stack escalable y código limpio'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Intelligent process automation & local LLM pipelines' : 'Automatización inteligente y pipelines con LLMs locales'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Applied Machine Learning, Edge AI & predictive models' : 'Machine Learning aplicado, Edge AI y modelos predictivos'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111827]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    {language === 'en' ? 'Data engineering, relational modeling & high performance' : 'Ingeniería de datos, modelado relacional y alto rendimiento'}
                  </span>
                </div>
              </div>
            </div>

            {/* Other Verified Data */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                // {UI_TRANSLATIONS.about.otherDetailsTitle[language]}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {PERSONAL_INFO.otherData[language].map((item, oIdx) => (
                  <li key={oIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                <span>{UI_TRANSLATIONS.about.downloadCv[language]}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Profile Card with Photo & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Identity Card with Photo */}
            <div className="p-6 rounded-2xl bg-[#0D1220]/90 border border-slate-800/90 shadow-xl shadow-black/30">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/20 shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.fullName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {PERSONAL_INFO.title[language]}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{PERSONAL_INFO.statusBadge[language]}</span>
                  </div>
                </div>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-2 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location[language]}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="hover:text-white transition-colors">
                    {SOCIAL_LINKS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{PERSONAL_INFO.availability[language]}</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1220]/70 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 group hover:-translate-y-0.5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {item.label}
                  </span>
                  {idx === 0 && <Award className="w-4 h-4 text-emerald-400" />}
                  {idx === 1 && <GraduationCap className="w-4 h-4 text-blue-400" />}
                  {idx === 2 && <ShieldCheck className="w-4 h-4 text-cyan-400" />}
                  {idx === 3 && <Compass className="w-4 h-4 text-indigo-400" />}
                </div>
                <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {item.value}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
};
