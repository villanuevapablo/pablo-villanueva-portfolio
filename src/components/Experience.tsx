import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES, UI_TRANSLATIONS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-900 bg-[#080B14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // {UI_TRANSLATIONS.experience.title[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.experience.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base"
          >
            {UI_TRANSLATIONS.experience.subtitle[language]}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-slate-800 ml-2 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Clean Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#0D1220] border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1220] border border-slate-800 hover:border-slate-700 transition-colors shadow-sm">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {exp.type[language]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.role[language]}
                    </h3>
                    <div className="text-sm font-semibold text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period[language]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {exp.summary[language]}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{UI_TRANSLATIONS.experience.responsibilitiesTitle[language]}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Applied Domains</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#111827] text-slate-300 border border-slate-800 text-xs font-mono hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
