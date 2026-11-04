import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Brain, 
  Cpu, 
  Shield, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Shield':
        return <Shield className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-900 bg-[#080B14]">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>05 // {UI_TRANSLATIONS.skills.title[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.skills.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {UI_TRANSLATIONS.skills.subtitle[language]}
          </motion.p>
        </div>

        {/* Category Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500'
                : 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.skills.allTab[language]}</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500'
                    : 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-blue-600/15 border border-blue-500/25 text-blue-400">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title[language]}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {category.skills.length} {language === 'en' ? 'competencies' : 'competencias'}
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#111827]/70 hover:bg-slate-800/60 border border-slate-800/60 hover:border-blue-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {skill.levelHint && (
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-blue-300 transition-colors">
                          {skill.levelHint[language]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clarification Note / Authenticity Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>{UI_TRANSLATIONS.skills.clarificationNote[language]}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
