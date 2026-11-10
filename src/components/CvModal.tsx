import React, { useEffect } from 'react';
import { X, Download, Award, CheckCircle2, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171918]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#F3F0E9] text-[#171918] border border-[#171918] p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#B9B7AF] pb-4 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] font-medium">
            {language === 'en' ? 'CURRICULUM VITAE (PDF)' : 'CURRÍCULUM VITAE (PDF)'}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] border border-transparent hover:border-[#171918] transition-colors"
            aria-label={language === 'en' ? 'Close modal' : 'Cerrar ventana'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 aspect-[3/4] border border-[#171918] overflow-hidden shrink-0 bg-[#EAE6DC]">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.fullName}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <h3 id="cv-modal-title" className="font-serif text-2xl sm:text-3xl text-[#171918] leading-tight">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#526B9B] mt-1">
              {PERSONAL_INFO.title[language]}
            </p>
            <p className="font-mono text-[11px] text-[#5D605C] mt-1">
              {PERSONAL_INFO.location[language]} · {SOCIAL_LINKS.phone}
            </p>
          </div>
        </div>

        <div className="border-y border-[#B9B7AF] py-4 mb-6 space-y-2.5 text-xs">
          <div className="flex items-center gap-2.5 text-[#171918]">
            <Award className="w-4 h-4 text-[#D97745] shrink-0" />
            <span>York St John Univ. (2025–2026) — BSc (Hons) Software Engineering · First-Class Honours (9/10)</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#171918]">
            <CheckCircle2 className="w-4 h-4 text-[#526B9B] shrink-0" />
            <span>Instituto Nebrija (2023–2025) — FP Grado Superior DAM</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#171918]">
            <CheckCircle2 className="w-4 h-4 text-[#526B9B] shrink-0" />
            <span>Universidad Nebrija (Apr–Jun 2025) — Development Technician</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#5D605C]">
            <Globe className="w-4 h-4 text-[#5D605C] shrink-0" />
            <span>{PERSONAL_INFO.languagesSpoken[language]}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <a
            href={`/${PERSONAL_INFO.cvFilename.en}`}
            download="CV_Pablo_Villanueva_Picazo_EN.pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>CV English (PDF)</span>
          </a>

          <a
            href={`/${PERSONAL_INFO.cvFilename.es}`}
            download="CV_Pablo_Villanueva_Picazo_ES.pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-transparent text-[#171918] hover:bg-[#171918] hover:text-[#F3F0E9] border border-[#171918] text-xs font-semibold uppercase tracking-[0.1em] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>CV Español (PDF)</span>
          </a>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#B9B7AF]/60 text-[11px] font-mono text-[#5D605C]">
          <span>{PERSONAL_INFO.statusBadge[language]}</span>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#171918] hover:text-[#D97745] font-medium shrink-0"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
