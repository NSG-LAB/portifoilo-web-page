import React from 'react';
import { GraduationCap, Compass, ShieldCheck, Rocket, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About Siva Ganesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Pairing coursework with real pilots to ship dependable experiences.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            KL University labs in the morning, field pilots and avionics tuning by evening. I translate academic research into resilient software rituals that give teams and communities confidence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass relative group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>CS&IT Foundation · KL University</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">
                Hands-on builder who documents every move and designs for real constraints.
              </h3>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As a Computer Science & Information Technology student, I don&apos;t just memorize algorithms—I test them against real-world network friction, memory limits, and user usability.
                </p>
                <p>
                  Whether building commerce interfaces for rural entrepreneurs, fine-tuning step timers for novice cooks in React Native, or orchestrating microservices in Spring Boot, every release balances craft with tangible outcomes.
                </p>
                <p>
                  My involvement as Avionics Lead in the Garuda UAV Club further solidified my systems-first mindset: when writing flight failsafes or telemetry decoders for multi-rotor aircraft, software reliability isn&apos;t an afterthought—it&apos;s a mission prerequisite.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">01</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Design for Constraints</h4>
                  <p className="text-xs text-slate-400">Architecting interfaces that stay responsive even on 3G and low-tier devices.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs font-mono text-violet-400 font-bold mb-1">02</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Ship API-First</h4>
                  <p className="text-xs text-slate-400">Pairing schema reviews, Pydantic/JPA models, and automated tests before exposing endpoints.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-1">03</div>
                  <h4 className="text-sm font-semibold text-white mb-1">Document Handoffs</h4>
                  <p className="text-xs text-slate-400">Writing clear runbooks, architecture specs, and dockerized setups so teams can replay the win.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel: Values, Focus Areas & Education (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
              <h3 className="text-base font-display font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic Roadmap</span>
              </h3>
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70">
                  <div className="flex justify-between items-center text-cyan-300 font-semibold mb-1">
                    <span>B.Tech · CS&IT</span>
                    <span className="text-emerald-400">2023 - 2026</span>
                  </div>
                  <p className="text-slate-300 font-sans font-medium text-sm">KL University</p>
                  <p className="text-slate-400 font-sans text-xs mt-1">Core coursework: Distributed Systems, Mobile Computing, Web Engineering, Database Systems.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70">
                  <div className="flex justify-between items-center text-slate-300 font-semibold mb-1">
                    <span>Intermediate (MPC)</span>
                    <span className="text-slate-400">Completed</span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs">Narayana Junior College · Tenali</p>
                </div>
              </div>
            </div>

            {/* Operating Values & Career Direction */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
              <h3 className="text-base font-display font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-violet-400" />
                <span>Operating Values</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                  <span><strong>Evidence before ego:</strong> Validate assumptions with telemetry, logs, and actual user trials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2"></span>
                  <span><strong>Accessible by default:</strong> Clean semantics, high contrast, and keyboard navigation are non-negotiable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
                  <span><strong>Continuous iteration:</strong> Prototype rapidly, document lessons, and harden for production.</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-800/70 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Career Focus:</span>
                <span className="text-xs font-semibold text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  Frontend & Cross-Platform Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
