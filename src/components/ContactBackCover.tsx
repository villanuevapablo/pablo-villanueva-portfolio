import React, { useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_COPY } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ContactBackCover: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(SOCIAL_LINKS.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch {
      // Clipboard API restricted in non-HTTPS or legacy mobile browser
    }
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMsg(
        language === 'en'
          ? 'Please enter your name and message before opening your email client.'
          : 'Por favor indica tu nombre y mensaje antes de abrir el cliente de correo.'
      );
      return;
    }
    setErrorMsg('');
    const subjectLine =
      formData.subject.trim() ||
      (language === 'en'
        ? `Engineering Role Inquiry — ${formData.name}`
        : `Contacto Profesional — ${formData.name}`);

    const body = `${formData.message}\n\n---\nFrom: ${formData.name}`;
    const mailtoUrl = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      aria-label={language === 'en' ? 'Contact and Back Cover' : 'Contacto y Contraportada'}
      className="bg-[#171918] text-[#F3F0E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-12">
        {/* Back Cover Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-12 border-b border-[#B9B7AF]/25 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="text-[#D97745] font-semibold">
            {UI_COPY.contact.sectionKicker[language]}
          </span>
          <span className="text-[#B9B7AF]">
            {PERSONAL_INFO.location[language]} · EDITION {currentYear}
          </span>
        </div>

        {/* Main Two-Column Back Cover Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[#B9B7AF]/25">
          {/* Left 7 Cols: Statement + Direct Contact Channels + CV Download */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0E9] leading-[1.02] tracking-tight mb-5">
                {UI_COPY.contact.headline[language]}
              </h2>
              <p className="text-sm sm:text-base text-[#B9B7AF] leading-relaxed max-w-2xl">
                {UI_COPY.contact.subline[language]}
              </p>
            </div>

            {/* Direct Channels Ruled Ledger */}
            <div className="border-t border-[#B9B7AF]/25 divide-y divide-[#B9B7AF]/20">
              {/* Email Row */}
              <div className="py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D97745] block mb-0.5">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="font-serif text-xl sm:text-2xl text-[#F3F0E9] hover:text-[#D97745] transition-colors break-all"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#B9B7AF]/40 text-[#F3F0E9] hover:border-[#D97745] hover:text-[#D97745] font-mono text-[11px] uppercase tracking-[0.1em] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D97745]" />
                      <span>{UI_COPY.contact.copied[language]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{UI_COPY.contact.copyEmail[language]}</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub & LinkedIn Twin Row */}
              <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 border border-[#B9B7AF]/25 hover:border-[#F3F0E9] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#B9B7AF] block">
                      GITHUB REPOSITORIES
                    </span>
                    <span className="font-mono text-xs text-[#F3F0E9] font-medium mt-0.5 block">
                      github.com/villanuevapablo
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D97745] shrink-0" />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 border border-[#B9B7AF]/25 hover:border-[#F3F0E9] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#B9B7AF] block">
                      LINKEDIN PROFILE
                    </span>
                    <span className="font-mono text-xs text-[#F3F0E9] font-medium mt-0.5 block">
                      /in/pablovillanuevapicazo
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#526B9B] shrink-0" />
                </a>
              </div>

              {/* Direct CV Download Row */}
              <div className="pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#B9B7AF] block mb-3">
                  {UI_COPY.contact.cvDownloadLabel[language]} · {SOCIAL_LINKS.phone}
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`/${PERSONAL_INFO.cvFilename.en}`}
                    download="CV_Pablo_Villanueva_Picazo_EN.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#F3F0E9] text-[#171918] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV (EN)</span>
                  </a>
                  <a
                    href={`/${PERSONAL_INFO.cvFilename.es}`}
                    download="CV_Pablo_Villanueva_Picazo_ES.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#F3F0E9] text-[#F3F0E9] hover:bg-[#F3F0E9] hover:text-[#171918] text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar CV (ES)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Minimal Mailto Dispatch Form */}
          <div className="lg:col-span-5 border border-[#B9B7AF]/30 p-6 sm:p-8 bg-[#1F2220]">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#B9B7AF]/20">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D97745] font-semibold">
                {UI_COPY.contact.formHeading[language]}
              </span>
              <Mail className="w-4 h-4 text-[#B9B7AF]" />
            </div>

            <form onSubmit={handleMailtoSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#B9B7AF] block mb-1.5"
                >
                  {language === 'en' ? 'Your Name' : 'Tu Nombre'}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'en' ? 'Recruiter / Engineer Name' : 'Nombre y empresa'}
                  className="w-full px-3.5 py-2.5 bg-[#171918] border border-[#B9B7AF]/35 text-[#F3F0E9] placeholder-[#5D605C] text-sm focus:outline-none focus:border-[#D97745]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#B9B7AF] block mb-1.5"
                >
                  {language === 'en' ? 'Subject' : 'Asunto'}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={
                    language === 'en'
                      ? 'Junior Software Engineer Role / Interview'
                      : 'Oferta Software Engineer / Entrevista'
                  }
                  className="w-full px-3.5 py-2.5 bg-[#171918] border border-[#B9B7AF]/35 text-[#F3F0E9] placeholder-[#5D605C] text-sm focus:outline-none focus:border-[#D97745]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#B9B7AF] block mb-1.5"
                >
                  {language === 'en' ? 'Message' : 'Mensaje'}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'en'
                      ? 'Write a brief note...'
                      : 'Escribe brevemente tu mensaje...'
                  }
                  className="w-full px-3.5 py-2.5 bg-[#171918] border border-[#B9B7AF]/35 text-[#F3F0E9] placeholder-[#5D605C] text-sm focus:outline-none focus:border-[#D97745]"
                />
              </div>

              {errorMsg && (
                <p className="font-mono text-[11px] text-[#D97745]">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#D97745] text-[#171918] hover:bg-[#F3F0E9] text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{UI_COPY.contact.sendBtn[language]}</span>
              </button>

              <p className="font-mono text-[10px] text-[#B9B7AF]/80 leading-relaxed">
                {language === 'en'
                  ? 'Pre-fills your default mail client cleanly with zero third-party tracking.'
                  : 'Prepara el envío directamente en tu cliente de correo habitual sin intermediarios.'}
              </p>
            </form>
          </div>
        </div>

        {/* Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#B9B7AF]">
          <div>
            <span>© {currentYear} {PERSONAL_INFO.fullName}</span>
            <span className="mx-2">·</span>
            <span>{PERSONAL_INFO.publicationName}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[#B9B7AF]/70">
              React · TypeScript · Tailwind · DM Serif Display & Manrope
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#B9B7AF]/40 text-[#F3F0E9] hover:border-[#D97745] hover:text-[#D97745] transition-colors"
            >
              <span>{language === 'en' ? 'Return to Cover' : 'Volver a Portada'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
