import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/90 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-slate-400 font-mono">
          <p>© {currentYear} Nallagorla Siva Ganesh · Engineered with React, Three.js & Tailwind</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NSG-LAB"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nallagorla-siva-ganesh"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:sivaganeshnallagorla@gmail.com"
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-900 transition-colors"
            aria-label="Email Siva"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 ml-2 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 border border-slate-800 transition-all"
            aria-label="Back to top"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
