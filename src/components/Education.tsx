import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION, UI_TRANSLATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-900 bg-[#080B14]">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>03 // {UI_TRANSLATIONS.education.title[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.education.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            {UI_TRANSLATIONS.education.subtitle[language]}
          </motion.p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#0D1220]/80 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle accent border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Degree Header & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/25 text-blue-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  {item.statusBadge && (
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/70 text-[11px] font-mono text-cyan-300">
                      {item.statusBadge[language]}
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                  {item.level[language]}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {item.degree[language]}
                </h3>

                <div className="text-base font-medium text-slate-200 mb-4">
                  {item.institution}
                </div>

                {/* Period & Location Meta */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 pb-5 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location[language]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description[language]}
                </p>

                {/* Highlights / Coursework */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{UI_TRANSLATIONS.education.keyCompetencies[language]}</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights[language].map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
