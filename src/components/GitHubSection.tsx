import React from 'react';
import { useGitHub } from '../hooks/useGitHub';
import { Github, Star, GitFork, BookOpen, ExternalLink, Code2, Users, Activity } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const { profile, repos, loading, error } = useGitHub();

  return (
    <section id="github" className="py-24 relative overflow-hidden" aria-label="GitHub Activity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 w-fit">
              <Github className="w-3.5 h-3.5" />
              <span>Live GitHub Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Practicing in public to move faster.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Real-time feed from <strong className="text-white">@NSG-LAB</strong> on GitHub. Maintaining repositories with semantic commits, PR workflows, and automated checks.
            </p>
          </div>

          <a
            href="https://github.com/NSG-LAB"
            target="_blank"
            rel="noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm"
          >
            <span>Visit @NSG-LAB on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Profile Card & Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Profile Overview (Col 4) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name} GitHub Avatar`}
                  className="w-16 h-16 rounded-2xl border-2 border-cyan-500/50 object-cover shadow-glow-cyan-sm"
                  onError={(e: any) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/154807490?v=4';
                  }}
                />
                <div>
                  <h3 className="text-lg font-display font-bold text-white">{profile.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">@{profile.login}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                {profile.bio}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80 text-center">
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <span className="text-xs font-mono text-slate-400 block">Repos</span>
                <span className="text-base font-bold font-mono text-cyan-300">{profile.public_repos}+</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <span className="text-xs font-mono text-slate-400 block">Followers</span>
                <span className="text-base font-bold font-mono text-violet-300">{profile.followers}</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <span className="text-xs font-mono text-slate-400 block">Status</span>
                <span className="text-xs font-bold font-mono text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Core Engineering Disciplines on GitHub (Col 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-1.5">Repository Stewardship</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clear documentation, comprehensive READMEs, setup runbooks, and descriptive issue tracking.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] font-mono text-cyan-400">
                100% Documented Builds
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-1.5">Continuous Improvement</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Regular iteration loops refining test suites, developer ergonomics, and microservice topologies.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] font-mono text-violet-400">
                Weekly Release Cadence
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-1.5">CI/CD & Actions Rigor</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated builds, Docker multi-stage linting, and continuous static GitHub Pages delivery.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] font-mono text-emerald-400">
                GitHub Actions Automated
              </div>
            </div>
          </div>
        </div>

        {/* Live Repositories Grid */}
        <div>
          <h3 className="text-base font-display font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Featured Repositories & Activity</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass hover:border-cyan-500/40 hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/80 border border-slate-800 text-slate-400"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {repo.language}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-300">
                      <Star className="w-3 h-3 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-300">
                      <GitFork className="w-3 h-3 text-slate-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
