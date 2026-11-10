import React from 'react';
import { Award, CheckCircle2, FileDown } from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION,
  TOOLKIT_CATEGORIES,
  UI_COPY,
} from '../data/portfolioData';
import { SkillTier } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

interface ProfileSectionProps {
  onOpenCv: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onOpenCv }) => {
  const { language } = useLanguage();

  const renderTierGlyph = (tier: SkillTier) => {
    if (tier === 'practical') {
      return (
        <span
          className="w-2 h-2 bg-[#171918] shrink-0"
          title={UI_COPY.profile.practicalLabel[language]}
        />
      );
    }
    if (tier === 'academic') {
      return (
        <span
          className="w-2 h-2 border border-[#5D605C] shrink-0"
          title={UI_COPY.profile.academicLabel[language]}
        />
      );
    }
    return (
      <span
        className="w-2 h-2 bg-[#D97745] rotate-45 shrink-0"
        title={UI_COPY.profile.interestLabel[language]}
      />
    );
  };

  return (
    <section
      id="profile"
      aria-label={UI_COPY.profile.sectionTitle[language]}
      className="bg-[#F3F0E9] text-[#171918] border-b border-[#171918]"
    >
      {/* PART A — PROFILE NARRATIVE & APPROACH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 mb-12 border-b border-[#171918] items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
              {UI_COPY.profile.sectionKicker[language]}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171918] tracking-tight leading-[1.02]">
              {UI_COPY.profile.sectionTitle[language]}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>{UI_COPY.cover.openCv[language]}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#526B9B] font-semibold block">
              {UI_COPY.profile.narrativeHeading[language]}
            </span>

            {PERSONAL_INFO.aboutParagraphs[language].map((para, idx) => (
              <p key={idx} className="text-base text-[#171918] leading-[1.72]">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#B9B7AF] lg:pl-8">
            <div className="border-t-2 border-[#171918] pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
                {UI_COPY.profile.approachHeading[language]}
              </span>
              <p className="text-sm text-[#3D403E] leading-relaxed">
                {PERSONAL_INFO.problemSolvingApproach[language]}
              </p>
            </div>

            <div className="border-t border-[#B9B7AF] pt-4 space-y-2 text-xs">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5D605C] block mb-2">
                {language === 'en' ? 'VERIFIED PROFILE DETAILS' : 'DATOS VERIFICADOS'}
              </span>
              <p className="font-semibold text-[#171918]">
                {PERSONAL_INFO.languagesSpoken[language]}
              </p>
              <p className="text-[#526B9B] font-medium leading-relaxed">
                {PERSONAL_INFO.targetRoles[language]}
              </p>
              <ul className="space-y-1.5 text-[#3D403E] pt-1">
                {PERSONAL_INFO.otherDetails[language].map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-[#D97745] font-mono">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PART B — EXPERIENCE & ACADEMIC TIMELINE */}
      <div className="border-y border-[#171918] bg-[#EAE6DC]/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <div className="mb-14">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-6">
              {UI_COPY.profile.experienceHeading[language]}
            </span>

            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="border-y border-[#171918] py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start bg-[#F3F0E9] px-6 sm:px-8"
              >
                <div className="lg:col-span-4 space-y-1">
                  <span className="font-mono text-[11px] text-[#526B9B] font-semibold uppercase block">
                    {exp.period[language]}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171918]">
                    {exp.role[language]}
                  </h3>
                  <p className="text-sm font-bold text-[#171918]">{exp.company}</p>
                  <p className="font-mono text-[11px] text-[#5D605C]">
                    {exp.location[language]} · {exp.type[language]}
                  </p>
                  {exp.contextNote && (
                    <p className="text-[11px] text-[#5D605C] pt-3 border-t border-[#B9B7AF]/70 mt-3 leading-relaxed">
                      {exp.contextNote[language]}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-sm sm:text-base text-[#171918] leading-relaxed font-medium">
                    {exp.summary[language]}
                  </p>

                  <ul className="space-y-2 border-t border-[#B9B7AF] pt-4">
                    {exp.responsibilities[language].map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#3D403E]">
                        <CheckCircle2 className="w-4 h-4 text-[#526B9B] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 border border-[#B9B7AF] bg-[#EAE6DC]/60 font-mono text-[11px] text-[#171918]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#526B9B] font-semibold block mb-6">
              {UI_COPY.profile.educationHeading[language]}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#171918]">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 sm:p-8 border-r border-b border-[#171918] bg-[#F3F0E9] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#B9B7AF]">
                      <span className="font-mono text-[11px] text-[#5D605C]">
                        {edu.level[language]}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#D97745]">
                        {edu.period[language]}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#171918] leading-snug mb-1">
                      {edu.degree[language]}
                    </h3>
                    <p className="text-sm font-bold text-[#526B9B] mb-2">
                      {edu.institution} · {edu.location[language]}
                    </p>

                    {edu.grade && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#171918] text-[#F3F0E9] font-mono text-[11px] mb-4">
                        <Award className="w-3.5 h-3.5 text-[#D97745]" />
                        <span>{edu.grade[language]}</span>
                      </div>
                    )}

                    <p className="text-sm text-[#3D403E] leading-relaxed mb-5">
                      {edu.description[language]}
                    </p>

                    <ul className="space-y-2 border-t border-[#B9B7AF]/70 pt-4 text-xs sm:text-sm text-[#171918]">
                      {edu.highlights[language].map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="font-mono text-[#D97745] font-bold">0{hIdx + 1}</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#B9B7AF]/50 font-mono text-[10px] text-[#5D605C] uppercase tracking-[0.12em]">
                    {edu.institution} · {edu.period[language]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PART C — TECHNICAL TOOLKIT (AI & DATA FIRST, 3 HONEST EXPERIENCE TIERS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="pb-6 mb-8 border-b border-[#171918]">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
            {UI_COPY.profile.toolkitHeading[language]}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#171918] mb-5">
            {language === 'en'
              ? 'Skills & Technical Inventory by Experience Level'
              : 'Competencias Técnicas por Nivel de Experiencia'}
          </h3>

          {/* 3-Tier Classification Bar */}
          <div className="p-4 bg-[#EAE6DC]/70 border border-[#B9B7AF]">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5D605C] block mb-2.5 font-semibold">
              {UI_COPY.profile.tierLegendTitle[language]}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px]">
              <span className="flex items-center gap-2 text-[#171918] font-medium">
                <span className="w-2 h-2 bg-[#171918] inline-block" />
                {UI_COPY.profile.practicalLabel[language]}
              </span>
              <span className="flex items-center gap-2 text-[#5D605C]">
                <span className="w-2 h-2 border border-[#5D605C] inline-block" />
                {UI_COPY.profile.academicLabel[language]}
              </span>
              <span className="flex items-center gap-2 text-[#D97745] font-medium">
                <span className="w-2 h-2 bg-[#D97745] rotate-45 inline-block" />
                {UI_COPY.profile.interestLabel[language]}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#171918]">
          {TOOLKIT_CATEGORIES.map((group) => (
            <div
              key={group.id}
              className="p-6 sm:p-8 border-r border-b border-[#171918] bg-[#F3F0E9]"
            >
              <div className="flex items-baseline justify-between gap-2 pb-3 mb-4 border-b border-[#B9B7AF]">
                <div>
                  <span className="font-mono text-[10px] text-[#D97745] font-semibold block">
                    {group.number}
                  </span>
                  <h4 className="font-serif text-2xl text-[#171918]">
                    {group.title[language]}
                  </h4>
                </div>
                <span className="font-mono text-[10px] text-[#5D605C]">
                  {group.skills.length} ITEMS
                </span>
              </div>

              <p className="text-xs text-[#5D605C] mb-5">{group.subtitle[language]}</p>

              <div className="divide-y divide-[#B9B7AF]/70">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline"
                  >
                    <div className="sm:col-span-5 flex items-center gap-2.5">
                      {renderTierGlyph(skill.tier)}
                      <span
                        className={`text-sm font-bold ${
                          skill.tier === 'practical'
                            ? 'text-[#171918]'
                            : skill.tier === 'interest'
                              ? 'text-[#B85D30]'
                              : 'text-[#5D605C]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <div className="sm:col-span-7 text-xs text-[#3D403E] sm:text-right">
                      {skill.evidence[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
