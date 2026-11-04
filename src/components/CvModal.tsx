import React from 'react';
import { X, FileText, Download, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-slate-700/80 shadow-2xl p-6 sm:p-7 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {language === 'en' ? 'Curriculum Vitae / Resume' : 'Currículum Vitae'}
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              {PERSONAL_INFO.name} • Software Engineer
            </p>
          </div>
        </div>

        {/* Notice Box */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-5">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-white block mb-1">
                {language === 'en' ? 'Curriculum Vitae Placeholder' : 'Marcador de Currículum Vitae'}
              </span>
              {language === 'en' ? (
                <>
                  To publish your finalized PDF resume, place your compiled PDF document named <code className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px]">{PERSONAL_INFO.cvFilename}</code> in the <code className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px]">public/</code> directory.
                </>
              ) : (
                <>
                  Para publicar tu currículum final en PDF, sitúa tu archivo compilado con el nombre <code className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px]">{PERSONAL_INFO.cvFilename}</code> dentro de la carpeta <code className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px]">public/</code>.
                </>
              )}
            </div>
          </div>
        </div>

        {/* Summary of credentials */}
        <div className="space-y-2.5 mb-6 text-xs text-slate-300 font-mono bg-[#111827]/70 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>York St John University — BSc (Hons) Software Engineering</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>DAM Vocational Higher Degree — Multiplatform App Development</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Universidad Nebrija — Software Development Technician</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Languages: Spanish (Native) • English (Professional)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`/${PERSONAL_INFO.cvFilename}`}
            download={PERSONAL_INFO.cvFilename}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-lg shadow-blue-600/20"
          >
            <Download className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Download PDF Document' : 'Descargar Documento PDF'}
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <span>{language === 'en' ? 'View on LinkedIn' : 'Ver en LinkedIn'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
