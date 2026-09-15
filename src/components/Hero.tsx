import React from 'react';
import { HeroScene } from '../components3d/HeroScene';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  PlaneTakeoff
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
      aria-label="Introduction Hero"
    >
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-glow-cyan-sm animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Available for Software & Frontend Roles · 2026</span>
            </div>

            {/* Name & Title */}
            <p className="text-sm md:text-base font-mono text-cyan-400 font-medium tracking-wider uppercase mb-2">
              Nallagorla Siva Ganesh
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
              CS&IT Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">|</span> Frontend & Cross-Platform Developer
            </h1>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Crafting calm, production-grade applications across <strong className="text-white font-medium">React</strong>, <strong className="text-white font-medium">React Native</strong>, <strong className="text-white font-medium">FastAPI</strong>, and <strong className="text-white font-medium">Spring Boot</strong>. Pairing computer science rigor with hands-on UAV avionics engineering in the Garuda Club to ship software that solves real user constraints.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 hover:text-black hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="assets/Siva_Ganesh_Resume.pdf"
                download="Siva_Ganesh_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 border border-slate-700/70 hover:border-cyan-500/50 backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Social & Contact Channels */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/60 w-full">
              <span className="text-slate-500">Connect:</span>
              <a
                href="https://github.com/NSG-LAB"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nallagorla-siva-ganesh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:sivaganeshnallagorla@gmail.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tech Scene */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl bg-gradient-to-b from-slate-900/40 to-slate-950/70 border border-slate-800/70 shadow-glass backdrop-blur-xl p-2 relative group overflow-hidden">
              {/* Corner accent glow tags */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-slate-950/70 px-2.5 py-1 rounded-full border border-cyan-500/30">
                <Sparkles className="w-3 h-3" />
                <span>R3F 3D Lab</span>
              </div>

              <HeroScene />
            </div>
          </div>
        </div>

        {/* Live Metrics & Impact Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/70 backdrop-blur-md hover:border-cyan-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                6+
              </span>
              <Code2 className="w-5 h-5 text-cyan-400/70" />
            </div>
            <p className="text-xs font-medium text-slate-300">Production Builds</p>
            <p className="text-[11px] text-slate-500 mt-0.5">AI, Web, Mobile & Backend</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/70 backdrop-blur-md hover:border-violet-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-violet-400 transition-colors">
                14+
              </span>
              <Layers className="w-5 h-5 text-violet-400/70" />
            </div>
            <p className="text-xs font-medium text-slate-300">Repositories Stewarded</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Git rigor & CI/CD workflows</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/70 backdrop-blur-md hover:border-emerald-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                8+
              </span>
              <Cpu className="w-5 h-5 text-emerald-400/70" />
            </div>
            <p className="text-xs font-medium text-slate-300">Core Technologies Shipped</p>
            <p className="text-[11px] text-slate-500 mt-0.5">React, Native, Spring, FastAPI</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/70 backdrop-blur-md hover:border-amber-500/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                2
              </span>
              <PlaneTakeoff className="w-5 h-5 text-amber-400/70" />
            </div>
            <p className="text-xs font-medium text-slate-300">Garuda UAV Platforms</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Delivery & Scout avionics</p>
          </div>
        </div>
      </div>
    </section>
  );
};
