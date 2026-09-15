import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback or client confirmation
    const mailtoUrl = `mailto:sivaganeshnallagorla@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Collaboration'}`
    )}&body=${encodeURIComponent(
      `Hi Siva,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact and Inquiries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let&apos;s build something genuinely useful.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Open to software engineering roles, frontend/cross-platform positions, research collaborations, and hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Coordinates & Availability (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Direct Lines */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
              <h3 className="text-base font-display font-bold text-white mb-6">Direct Coordinates</h3>

              <ul className="space-y-4 text-xs sm:text-sm font-mono">
                <li>
                  <a
                    href="mailto:sivaganeshnallagorla@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-500 block">Email Address</span>
                      <span className="truncate block font-semibold text-slate-200">sivaganeshnallagorla@gmail.com</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+918185818665"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Phone / WhatsApp</span>
                      <span className="font-semibold text-slate-200">+91 81858 18665</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/nallagorla-siva-ganesh"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">LinkedIn Profile</span>
                      <span className="font-semibold text-slate-200">in/nallagorla-siva-ganesh</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/NSG-LAB"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">GitHub Organization / Personal</span>
                      <span className="font-semibold text-slate-200">github.com/NSG-LAB</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Availability & Location Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass text-xs font-mono space-y-3">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Tenali / Guntur / Vijayawada, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Timezone: IST (UTC+5:30) · Fast reply &lt; 24h</span>
              </div>
              <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Open for Remote, Hybrid & Relocation</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Col 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
            <h3 className="text-base font-display font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6 font-sans">
              Have an open role, engineering project, or question? Send a message directly to my inbox.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-center animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                  Thank you! If your email client did not automatically launch, feel free to drop a direct note to{' '}
                  <strong className="text-cyan-300">sivaganeshnallagorla@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack / Frontend Opportunity or Project"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share requirements, timeline, or thoughts..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
