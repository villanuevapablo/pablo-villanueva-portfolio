import React from 'react';
import { X, FileText, Download, CheckCircle, ExternalLink, Award, Globe } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
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
        <div className="flex items-center gap-3.5 mb-5">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-blue-500/30 shrink-0">
            <img 
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.fullName} 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{PERSONAL_INFO.fullName}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              {PERSONAL_INFO.title[language]}
            </p>
          </div>
        </div>

        {/* Verified Credentials Box */}
        <div className="space-y-2.5 mb-6 text-xs text-slate-300 font-mono bg-[#111827]/80 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>York St John Univ. — First-Class Honours (9/10)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Instituto Nebrija — FP Grado Superior DAM</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Universidad Nebrija — Development Technician</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              {language === 'en' 
                ? 'English (Professional Fluency) • Spanish (Native)' 
                : 'Inglés (Fluidez profesional) • Español (Nativo)'}
            </span>
          </div>
        </div>

        {/* Action Buttons: Download in EN or ES */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`/${PERSONAL_INFO.cvFilename.en}`}
              download="CV_Pablo_Villanueva_Picazo_EN.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-lg shadow-blue-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (English PDF)</span>
            </a>

            <a
              href={`/${PERSONAL_INFO.cvFilename.es}`}
              download="CV_Pablo_Villanueva_Picazo_ES.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111827] hover:bg-slate-800 text-cyan-300 hover:text-white font-medium text-xs border border-slate-700/80 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV (Español PDF)</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
            <span className="text-slate-400 font-mono">
              Madrid, Spain • {SOCIAL_LINKS.phone}
            </span>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
