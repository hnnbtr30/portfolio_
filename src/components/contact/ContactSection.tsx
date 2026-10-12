import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { CyberButton } from '../common/CyberButton';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const ContactSection: React.FC = () => {
  const { personal, socialLinks } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();
    setIsSubmitting(true);

    // Simulate cyber dispatch sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      sounds.playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmissionStatus('idle'), 6000);
    }, 1200);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5 text-cyan-400" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'twitter':
        return <Twitter className="w-5 h-5 text-sky-400" />;
      default:
        return <Mail className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="COMMUNICATIONS_UPLINK"
          title="Let's Connect"
          subtitle="Initiate communication for engineering internships, project collaborations, or technical inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Social Hub (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="relative p-6 rounded-2xl bg-slate-900/70 border border-cyan-500/30 shadow-[0_0_25px_rgba(0,240,255,0.15)] group">
              <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-cyan-400 opacity-60" />
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-white">
                    Direct Email Uplink
                  </h4>
                  <p className="text-xs text-slate-400 font-code">
                    OFFICIAL CORRESPONDENCE
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-code mb-4">
                <span className="text-cyan-300 truncate mr-2 select-all">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-cyan-500/20 text-cyan-400 border border-slate-700 hover:border-cyan-400/50 transition-all flex items-center gap-1 flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">COPY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 font-body leading-relaxed">
                Feel free to email me directly regarding engineering opportunities, academic discussions, or team hackathons.
              </p>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
              <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                VERIFIED SOCIAL IDENTIFIERS
              </h4>

              <div className="space-y-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    onMouseEnter={() => sounds.playHover()}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                        {getSocialIcon(link.platform)}
                      </div>
                      <div>
                        <span className="text-xs font-bold font-tech text-white group-hover:text-cyan-300 transition-colors block">
                          {link.platform}
                        </span>
                        <span className="text-[11px] font-code text-slate-500">
                          {link.username}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-code text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      CONNECT &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Cyber Form (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,240,255,0.15)]">
              {/* Corner Sci-Fi accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
                <span className="text-xs font-code text-cyan-300 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  TRANSMISSION_CONSOLE
                </span>
                <span className="text-[10px] font-code text-slate-400 uppercase">
                  ENCRYPTION: AES-256 SIM
                </span>
              </div>

              {/* Form Status Banner */}
              <AnimatePresence>
                {submissionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 mb-6 rounded-xl bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 text-xs font-code flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white mb-1">
                        TRANSMISSION LOGGED SUCCESSFULLY!
                      </p>
                      <p className="text-slate-300 font-body">
                        Thank you for reaching out. A confirmation pulse has been logged. You can also contact me directly at{' '}
                        <strong className="text-emerald-300">{personal.email}</strong>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-code text-slate-300 uppercase tracking-wider mb-2">
                      YOUR IDENTIFIER / NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-body"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-code text-slate-300 uppercase tracking-wider mb-2">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@domain.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-body"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-code text-slate-300 uppercase tracking-wider mb-2">
                    TRANSMISSION SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Computer Engineering Internship Inquiry"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-body"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-code text-slate-300 uppercase tracking-wider mb-2">
                    MESSAGE PAYLOAD *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, opportunity, or message..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm text-slate-100 placeholder-slate-600 outline-none transition-all font-body resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <CyberButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    className="w-full sm:w-auto shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  >
                    {isSubmitting ? 'TRANSMITTING PACKETS...' : 'DISPATCH TRANSMISSION'}
                  </CyberButton>
                </div>
              </form>

              {/* Backend note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start space-x-2 text-[11px] font-code text-slate-500">
                <AlertCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <p>
                  Note: Client-side demonstration mode enabled. To link this form to real mailbox delivery, you can plug in Formspree, EmailJS, or your preferred serverless API in <code className="text-slate-400">src/components/contact/ContactSection.tsx</code>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
