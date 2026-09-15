import React, { useState } from 'react';
import { certificatesData } from '../data/certificatesData';
import { Certification } from '../types';
import { Award, ExternalLink, Eye, Download, X, ShieldCheck, FileCheck2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" aria-label="Certifications & Hackathon Recognitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications & National Hackathons.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Official Certificates of Participation and technical credentials from Omnikon, Bharat Academix (Team GARUDA HACK), Devengers, Meta, and KL University.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const hasPdf = Boolean(cert.pdfUrl);
            return (
              <article
                key={cert.id}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm"
                      style={{
                        borderColor: `${cert.badgeColor}55`,
                        backgroundColor: `${cert.badgeColor}15`,
                        color: cert.badgeColor,
                      }}
                    >
                      {cert.type === 'participation' ? (
                        <FileCheck2 className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-cyan-300">
                        {cert.type === 'participation' ? 'Participation' : 'Certification'}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{cert.issueDate}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">{cert.issuer}</p>

                  {/* Skills Verified */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/70 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[140px]">
                    {cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified'}
                  </span>

                  <div className="flex items-center gap-2">
                    {hasPdf && (
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors"
                        title="Preview Certificate PDF"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>
                    )}

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      download={hasPdf ? cert.credentialUrl.split('/').pop() : undefined}
                      className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 transition-colors"
                    >
                      {hasPdf ? <Download className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                      <span>{hasPdf ? 'PDF' : 'Verify'}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Certificate PDF Modal */}
      {selectedCert && selectedCert.pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-display font-bold text-white truncate">{selectedCert.title}</h4>
                  <p className="text-[11px] font-mono text-slate-400">{selectedCert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={selectedCert.pdfUrl}
                  download={selectedCert.pdfUrl.split('/').pop()}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-950">
              <iframe
                src={`${selectedCert.pdfUrl}#toolbar=1`}
                className="w-full h-full border-0"
                title={`${selectedCert.title} Certificate Viewer`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
