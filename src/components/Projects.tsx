import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { FolderGit2, ExternalLink, Github, ArrowRight, Sparkles, Layers } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'mobile' | 'backend'>('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" aria-label="Featured Projects">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 w-fit">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Core Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Software engineered with depth and proof.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              From RAG-powered AI video copilots to Spring Boot microservices and cross-platform apps—click any project for complete architecture, problem breakdown, and engineering contributions.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & LLM' },
              { id: 'web', label: 'Web Apps' },
              { id: 'mobile', label: 'Cross-Platform' },
              { id: 'backend', label: 'Backend / Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{
                borderColor: `${project.accentColor}33`,
              }}
            >
              {/* Subtle top accent gradient line */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                }}
              />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Header Tag and Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}55`,
                      backgroundColor: `${project.accentColor}12`,
                    }}
                  >
                    {project.categoryLabel}
                  </span>

                  {project.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Problem snippet */}
                <p className="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-3">
                  {project.problem}
                </p>

                {/* Key Stats Bar if present */}
                {project.stats && (
                  <div className="mb-6 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">{project.stats[0]?.label}:</span>
                    <span className="font-bold text-white" style={{ color: project.accentColor }}>
                      {project.stats[0]?.value}
                    </span>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/70 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/70 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                      aria-label={`Visit live demo for ${project.title}`}
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
