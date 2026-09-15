import React from 'react';
import { certificatesData } from '../data/certificatesData';
import { Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Industry certifications & technical validations.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Formal competencies tested through rigorous examinations in React, Spring Boot, FastAPI, MySQL, and UAV systems.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
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
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">{cert.issueDate}</span>
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

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  {cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified Credential'}
                </span>
                <a
                  href={cert.credentialUrl}
                  target={cert.credentialUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
