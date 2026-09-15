import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle, Sparkles, ExternalLink, X } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden" aria-label="Resume & CV">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-950/80 border border-slate-800/90 backdrop-blur-xl p-8 sm:p-12 shadow-glass relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Info & Highlights */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae · Updated 2026</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3">
                Professional Resume & Credentials.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6">
                Comprehensive overview of technical skillsets, production projects (VidGuru AI, ReviewMind AI, Starlight Stays, Kafka pipelines), Garuda UAV avionics engineering, and B.Tech CS&IT coursework at KL University.
              </p>

              {/* Highlights Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Frontend: React, TypeScript, Next.js, Tailwind</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span>Cross-Platform: React Native & Mobile UX</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Backend: Spring Boot, FastAPI, MySQL, Kafka</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Avionics: Pixhawk Orange Cube+, ArduPilot</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="assets/Siva_Ganesh_Resume.pdf"
                  download="Siva_Ganesh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-cyan-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Preview</span>
                </button>
              </div>
            </div>

            {/* Right Col: PDF Graphic Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => setShowPreviewModal(true)}
                className="w-full max-w-xs aspect-[3/4] rounded-2xl bg-slate-950/80 border-2 border-slate-700/80 p-5 shadow-2xl relative cursor-pointer group hover:border-cyan-500/60 transition-all hover:scale-105"
              >
                {/* Decorative PDF Preview Lines */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white">Siva_Ganesh_Resume.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">PDF</span>
                </div>

                <div className="space-y-2">
                  <div className="w-3/4 h-3 rounded bg-slate-800"></div>
                  <div className="w-1/2 h-2 rounded bg-slate-800/60 mb-4"></div>
                  <div className="w-full h-1.5 rounded bg-slate-800/40"></div>
                  <div className="w-full h-1.5 rounded bg-slate-800/40"></div>
                  <div className="w-4/5 h-1.5 rounded bg-slate-800/40"></div>
                  <div className="w-full h-1.5 rounded bg-slate-800/40 mt-4"></div>
                  <div className="w-5/6 h-1.5 rounded bg-slate-800/40"></div>
                  <div className="w-full h-1.5 rounded bg-slate-800/40"></div>
                  <div className="w-3/4 h-1.5 rounded bg-slate-800/40"></div>
                </div>

                {/* Hover overlay prompt */}
                <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-xs font-mono text-white font-semibold">Click to Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-white">Siva_Ganesh_Resume.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="assets/Siva_Ganesh_Resume.pdf"
                  download="Siva_Ganesh_Resume.pdf"
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-950">
              <iframe
                src="assets/Siva_Ganesh_Resume.pdf#toolbar=1"
                className="w-full h-full border-0"
                title="Siva Ganesh Resume Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
