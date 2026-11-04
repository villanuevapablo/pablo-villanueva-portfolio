import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = language === 'en' ? 'Please enter your name.' : 'Por favor ingresa tu nombre.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = language === 'en' ? 'Please enter a valid email address.' : 'Por favor introduce un correo válido.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = language === 'en' ? 'Please provide a subject line.' : 'Por favor especifica un asunto.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = language === 'en' ? 'Message should be at least 10 characters.' : 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate immediate client validation response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 // {UI_TRANSLATIONS.nav.contact[language].toUpperCase()}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            {UI_TRANSLATIONS.contact.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {UI_TRANSLATIONS.contact.subtitle[language]}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Cards */}
            <div className="p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800/80 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-4">
                // {UI_TRANSLATIONS.contact.socialText[language]}
              </span>

              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#111827]/70 hover:bg-slate-800/70 border border-slate-800/80 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-blue-300 transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        /in/pablovillanuevapicazo
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#111827]/70 hover:bg-slate-800/70 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-blue-300 transition-colors">
                        GitHub Repositories
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        github.com/villanuevapablo
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-[#111827]/70 hover:bg-slate-800/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-600/15 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-cyan-300 transition-colors">
                        {UI_TRANSLATIONS.contact.directEmail[language]}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {SOCIAL_LINKS.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-2xl bg-[#0D1220]/80 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{UI_TRANSLATIONS.contact.locationText[language]}</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                {PERSONAL_INFO.location[language]}
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'en' ? 'Open to EU & International teams' : 'Abierto a equipos nacionales e internacionales'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation & Prototype Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D1220]/90 border border-slate-800/90 shadow-2xl relative"
          >
            {/* Prototype Notice Alert */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-white block mb-0.5">
                  {language === 'en' ? 'Client Prototype Notice' : 'Aviso de Prototipo Frontend'}
                </span>
                <p className="text-slate-400 text-[11px]">
                  {UI_TRANSLATIONS.contact.prototypeNotice[language]}
                </p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{UI_TRANSLATIONS.contact.successMessage[language]}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    {UI_TRANSLATIONS.contact.nameLabel[language]} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={UI_TRANSLATIONS.contact.namePlaceholder[language]}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111827] text-white text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    {UI_TRANSLATIONS.contact.emailLabel[language]} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={UI_TRANSLATIONS.contact.emailPlaceholder[language]}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111827] text-white text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  {UI_TRANSLATIONS.contact.subjectLabel[language]} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={UI_TRANSLATIONS.contact.subjectPlaceholder[language]}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111827] text-white text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    errors.subject ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 hover:border-slate-700'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  {UI_TRANSLATIONS.contact.messageLabel[language]} <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={UI_TRANSLATIONS.contact.messagePlaceholder[language]}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111827] text-white text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none ${
                    errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 hover:border-slate-700'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{language === 'en' ? 'Validating...' : 'Validando...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{UI_TRANSLATIONS.contact.submitButton[language]}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
