import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FOCUS_AREAS, UI_COPY } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FocusAreasSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const FocusAreasSection: React.FC<FocusAreasSectionProps> = ({
  onSelectProject,
}) => {
  const { language } = useLanguage();

  return (
    <section
      id="interests"
      aria-label={UI_COPY.focusAreas.sectionTitle[language]}
      className="bg-[#EAE6DC]/65 text-[#171918] border-b border-[#171918] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 mb-12 border-b border-[#171918] items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
              {UI_COPY.focusAreas.sectionKicker[language]}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171918] tracking-tight leading-[1.02]">
              {UI_COPY.focusAreas.sectionTitle[language]}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-[#3D403E] leading-relaxed">
              {UI_COPY.focusAreas.sectionSubtitle[language]}
            </p>
          </div>
        </div>

        {/* Three Balanced Editorial Focus Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[#171918]">
          {FOCUS_AREAS.map((area, idx) => {
            const isHighlight = idx === 0;
            return (
              <div
                key={area.id}
                className={`p-6 sm:p-8 border-r border-b border-[#171918] flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#171918] text-[#F3F0E9]'
                    : 'bg-[#F3F0E9] text-[#171918]'
                }`}
              >
                <div>
                  <div
                    className={`flex items-baseline justify-between gap-2 pb-4 mb-5 border-b ${
                      isHighlight ? 'border-[#B9B7AF]/25' : 'border-[#B9B7AF]'
                    }`}
                  >
                    <span className="font-serif text-5xl text-[#D97745] leading-none">
                      {area.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                        isHighlight ? 'text-[#B9B7AF]' : 'text-[#526B9B] font-semibold'
                      }`}
                    >
                      {language === 'en' ? 'FOCUS AREA' : 'ÁREA DE INTERÉS'}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight mb-3">
                    {area.title[language]}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isHighlight ? 'text-[#B9B7AF]' : 'text-[#3D403E]'
                    }`}
                  >
                    {area.description[language]}
                  </p>

                  <ul
                    className={`space-y-2.5 text-xs sm:text-sm pt-4 mb-8 border-t ${
                      isHighlight
                        ? 'border-[#B9B7AF]/20 text-[#F3F0E9]/90'
                        : 'border-[#B9B7AF] text-[#171918]'
                    }`}
                  >
                    {area.focusPoints[language].map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="font-mono text-[#D97745] font-bold">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Linked Supporting Projects */}
                <div
                  className={`pt-4 border-t ${
                    isHighlight ? 'border-[#B9B7AF]/20' : 'border-[#B9B7AF]'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] block mb-2.5 ${
                      isHighlight ? 'text-[#B9B7AF]' : 'text-[#5D605C]'
                    }`}
                  >
                    {UI_COPY.focusAreas.relatedWorkLabel[language]}
                  </span>
                  <div className="space-y-1.5">
                    {area.relatedProjects.map((proj) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => onSelectProject(proj.id)}
                        className={`w-full text-left px-3 py-2 font-mono text-[11px] border flex items-center justify-between transition-colors ${
                          isHighlight
                            ? 'border-[#B9B7AF]/30 text-[#F3F0E9] hover:border-[#D97745] hover:text-[#D97745]'
                            : 'border-[#171918] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9]'
                        }`}
                      >
                        <span className="truncate pr-2">{proj.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
