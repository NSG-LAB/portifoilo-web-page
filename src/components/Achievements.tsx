import React, { useState } from 'react';
import { achievementsData } from '../data/achievementsData';
import { Trophy, Award, Flag, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hackathon' | 'garuda' | 'milestone' | 'award'>('all');

  const filtered = filter === 'all'
    ? achievementsData
    : achievementsData.filter(a => a.category === filter);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'garuda':
        return { label: 'Garuda Club UAV', color: '#06b6d4' };
      case 'hackathon':
        return { label: 'Hackathon & Competitions', color: '#8b5cf6' };
      case 'milestone':
        return { label: 'Open Source Milestone', color: '#10b981' };
      default:
        return { label: 'Academic Award', color: '#f59e0b' };
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden" aria-label="Achievements & Milestones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 w-fit">
              <Trophy className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Milestones, competitions & leadership.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Chronicle of competitive hackathons, UAV avionics validation, peer mentorship, and open source achievements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'garuda', label: 'Garuda UAV' },
              { id: 'hackathon', label: 'Hackathons' },
              { id: 'milestone', label: 'Open Source' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-10">
          {filtered.map((item, idx) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node dot */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-slate-950 transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: badge.color,
                    boxShadow: `0 0 10px ${badge.color}80`,
                  }}
                />

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border"
                        style={{
                          color: badge.color,
                          borderColor: `${badge.color}60`,
                          backgroundColor: `${badge.color}15`,
                        }}
                      >
                        {badge.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{item.organization}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">{item.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80 mb-3">{item.role}</p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Skills Gained Tags & Link */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/70 border border-slate-800 text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
                      >
                        <span>Inspect verification</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
