import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Cpu, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        style={{ borderColor: `${project.accentColor}55` }}
      >
        {/* Header Strip */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between bg-gradient-to-r from-slate-900 to-slate-950">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-[11px] font-mono px-2.5 py-1 rounded-full font-semibold border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}60`,
                  backgroundColor: `${project.accentColor}15`,
                }}
              >
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1 font-sans">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          {/* Key Metrics Strip if available */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="text-xs font-mono text-slate-500 block">{stat.label}</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block" style={{ color: project.accentColor }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement */}
          <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30">
            <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </h4>
            <p className="text-slate-300">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-900/30">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Engineered Solution</span>
            </h4>
            <p className="text-slate-300">{project.solution}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Core Capabilities & Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: project.accentColor }}></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span>System Architecture & Data Flow</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 bg-slate-950/70 p-4 rounded-xl border border-slate-800/90 font-mono">
              {project.architecture}
            </p>
          </div>

          {/* My Contribution */}
          <div>
            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Siva&apos;s Engineering Contribution
            </h4>
            <ul className="space-y-2">
              {project.myContribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="text-emerald-400 font-mono font-bold">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/70 border border-slate-700 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700 hover:border-slate-500"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-glow-cyan transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Experience</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white px-3 py-2"
          >
            Press Esc to close
          </button>
        </div>
      </div>
    </div>
  );
};
