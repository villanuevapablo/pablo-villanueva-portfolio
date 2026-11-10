import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ENGINEERING_NOTES, QUEUED_NOTE_TOPICS } from '../data/engineeringNotes';
import { UI_COPY } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface EngineeringNotesProps {
  onSelectNote: (noteId: string) => void;
  onSelectProject: (projectId: string) => void;
}

export const EngineeringNotes: React.FC<EngineeringNotesProps> = ({
  onSelectNote,
  onSelectProject,
}) => {
  const { language } = useLanguage();

  return (
    <section
      id="notes"
      aria-label={UI_COPY.notes.sectionTitle[language]}
      className="bg-[#EAE6DC]/65 text-[#171918] border-b border-[#171918] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 mb-10 border-b border-[#171918] items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-semibold block mb-2">
              {UI_COPY.notes.sectionKicker[language]}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171918] tracking-tight leading-[1.02]">
              {UI_COPY.notes.sectionTitle[language]}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-[#3D403E] leading-relaxed">
              {UI_COPY.notes.sectionSubtitle[language]}
            </p>
          </div>
        </div>

        {/* Periodical Ledger List (Horizontal Ruled Publication Entries) */}
        <div className="border-t border-[#171918] divide-y divide-[#B9B7AF]">
          {ENGINEERING_NOTES.map((note) => (
            <article
              key={note.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Meta Column */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between gap-2 font-mono text-[11px]">
                <div>
                  <span className="text-[#D97745] font-semibold block">{note.number}</span>
                  <span className="text-[#171918] font-medium block mt-0.5">{note.date}</span>
                </div>
                <div className="text-right lg:text-left lg:mt-2">
                  <span className="px-2 py-0.5 border border-[#B9B7AF] bg-[#F3F0E9] text-[#526B9B] inline-block">
                    {note.topic[language]}
                  </span>
                  <span className="text-[#5D605C] block mt-1">{note.readingTime}</span>
                </div>
              </div>

              {/* Headline & Excerpt */}
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171918] leading-snug mb-2 group-hover:text-[#D97745] transition-colors">
                  <button
                    type="button"
                    onClick={() => onSelectNote(note.id)}
                    className="text-left focus:outline-none focus-visible:underline"
                  >
                    {note.title[language]}
                  </button>
                </h3>

                <p className="text-sm text-[#3D403E] leading-relaxed mb-3">
                  {note.shortIntro[language]}
                </p>

                <div className="font-mono text-[11px] text-[#5D605C] flex flex-wrap items-center gap-2">
                  <span>{UI_COPY.notes.relatedProjectHeading[language]}:</span>
                  {note.relatedProjectId !== 'portfolio-platform' ? (
                    <button
                      type="button"
                      onClick={() => onSelectProject(note.relatedProjectId)}
                      className="text-[#526B9B] hover:text-[#171918] underline underline-offset-4 font-medium"
                    >
                      {note.relatedProjectTitle}
                    </button>
                  ) : (
                    <span className="text-[#171918] font-medium">{note.relatedProjectTitle}</span>
                  )}
                </div>
              </div>

              {/* Direct Read Action */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <button
                  type="button"
                  onClick={() => onSelectNote(note.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#171918] bg-[#F3F0E9] text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{UI_COPY.notes.readNote[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Queued / Future Topics Ledger (Transparently Scoped, Not Fabricated) */}
        <div className="mt-12 pt-8 border-t border-[#171918]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5D605C] font-semibold">
              {UI_COPY.notes.queuedHeading[language]}
            </span>
            <span className="font-mono text-[10px] text-[#5D605C]">
              {language === 'en' ? 'STATUS: STRUCTURE READY / VERIFIED-ONLY POLICY' : 'ESTADO: ESTRUCTURA ABIERTA / SOLO CONTENIDO VERIFICADO'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUEUED_NOTE_TOPICS.map((queued) => (
              <div
                key={queued.id}
                className="p-5 border border-dashed border-[#B9B7AF] bg-[#F3F0E9]/70"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#5D605C] mb-1.5">
                  <span className="text-[#526B9B] font-semibold uppercase">{queued.topic[language]}</span>
                  <span>QUEUED / DRAFT</span>
                </div>
                <h4 className="font-serif text-lg text-[#171918] mb-1">
                  {queued.workingTitle[language]}
                </h4>
                <p className="text-xs text-[#5D605C] leading-relaxed">
                  {queued.plannedScope[language]}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-[11px] text-[#5D605C] mt-4">
            {UI_COPY.notes.queuedNote[language]}
          </p>
        </div>
      </div>
    </section>
  );
};
