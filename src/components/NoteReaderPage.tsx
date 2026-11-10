import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ENGINEERING_NOTES } from '../data/engineeringNotes';
import { SOCIAL_LINKS, UI_COPY } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface NoteReaderPageProps {
  noteId: string;
  onSelectNote: (noteId: string) => void;
  onSelectProject: (projectId: string) => void;
  onBackHome: () => void;
}

export const NoteReaderPage: React.FC<NoteReaderPageProps> = ({
  noteId,
  onSelectNote,
  onSelectProject,
  onBackHome,
}) => {
  const { language } = useLanguage();
  const idx = ENGINEERING_NOTES.findIndex((n) => n.id === noteId);
  const note = ENGINEERING_NOTES[idx >= 0 ? idx : 0];
  const prevNote = ENGINEERING_NOTES[(idx - 1 + ENGINEERING_NOTES.length) % ENGINEERING_NOTES.length];
  const nextNote = ENGINEERING_NOTES[(idx + 1) % ENGINEERING_NOTES.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [noteId]);

  return (
    <article className="bg-[#F3F0E9] text-[#171918] min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Navigation & Issue Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#171918]">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#171918] hover:text-[#D97745] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{UI_COPY.notes.backToNotes[language]}</span>
          </button>

          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#5D605C]">
            <span>{note.number}</span>
            <span className="mx-2">·</span>
            <span className="text-[#D97745] font-semibold">{note.topic[language]}</span>
            <span className="mx-2">·</span>
            <span>{note.date}</span>
          </div>
        </div>

        {/* Title & Abstract */}
        <header className="mb-10 pb-8 border-b border-[#B9B7AF]">
          <h1 className="font-serif text-3xl sm:text-5xl text-[#171918] leading-[1.06] mb-5">
            {note.title[language]}
          </h1>
          <p className="text-base sm:text-lg text-[#3D403E] leading-relaxed font-medium">
            {note.shortIntro[language]}
          </p>
        </header>

        {/* Technical Body Paragraphs */}
        <div className="space-y-6 text-base text-[#171918] leading-[1.75] mb-10">
          {note.explanation[language].map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* Code / Architecture Plate */}
        <div className="bg-[#171918] text-[#F3F0E9] border border-[#171918] p-5 sm:p-6 mb-10">
          <div className="font-mono text-[11px] text-[#D97745] pb-3 mb-3 border-b border-[#B9B7AF]/20">
            {note.codeOrDiagram.label[language]}
          </div>
          <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-[#F3F0E9]">
            <code>{note.codeOrDiagram.snippet}</code>
          </pre>
        </div>

        {/* Highlighted "What I Learned" Marginalia Block */}
        <div className="border-l-4 border-[#D97745] bg-[#EAE6DC]/80 p-6 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D97745] font-semibold block mb-2">
            {UI_COPY.notes.learnedHeading[language]}
          </span>
          <p className="text-sm sm:text-base text-[#171918] leading-relaxed font-medium">
            {note.whatILearned[language]}
          </p>
        </div>

        {/* Related Project Callout */}
        <div className="p-5 border border-[#171918] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5D605C] block">
              {UI_COPY.notes.relatedProjectHeading[language]}
            </span>
            <span className="font-serif text-xl text-[#171918]">
              {note.relatedProjectTitle}
            </span>
          </div>

          {note.relatedProjectId !== 'portfolio-platform' ? (
            <button
              onClick={() => onSelectProject(note.relatedProjectId)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors shrink-0"
            >
              <span>{UI_COPY.selectedWork.readCaseStudy[language]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href={`${SOCIAL_LINKS.github}/pablo-villanueva-portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors shrink-0"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Note Pagination */}
        <nav className="pt-8 border-t border-[#171918] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onSelectNote(prevNote.id)}
            className="text-left p-4 border border-[#B9B7AF] hover:border-[#171918] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase text-[#5D605C] block mb-1">
              ← {prevNote.number}
            </span>
            <span className="font-serif text-lg text-[#171918] block leading-snug">
              {prevNote.title[language]}
            </span>
          </button>

          <button
            onClick={() => onSelectNote(nextNote.id)}
            className="text-left sm:text-right p-4 border border-[#B9B7AF] hover:border-[#171918] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase text-[#D97745] block mb-1">
              {nextNote.number} →
            </span>
            <span className="font-serif text-lg text-[#171918] block leading-snug">
              {nextNote.title[language]}
            </span>
          </button>
        </nav>
      </div>
    </article>
  );
};
