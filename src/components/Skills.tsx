import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { SkillConstellation } from '../components3d/SkillConstellation';
import { Code, Globe, Database, Wrench, Sparkles, Orbit, Layers, ArrowRight } from 'lucide-react';

interface SkillsProps {
  onSelectProject?: (projectId: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | '3d'>('grid');
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(null);

  const filteredCategories = activeTab === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" aria-label="Skills & Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 w-fit">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Skills mapped to production reality.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              I don&apos;t just list keywords; every technology is connected to deployed repositories and verified architectures.
            </p>
          </div>

          {/* View Mode Toggle: Grid vs 3D Constellation */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-glow-cyan-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Category Grid</span>
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === '3d'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-glow-cyan-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D Constellation</span>
            </button>
          </div>
        </div>

        {/* 3D Constellation View */}
        {viewMode === '3d' ? (
          <div className="rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl p-4 sm:p-8 shadow-glass">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
              <div className="text-sm font-mono text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Interactive 3D Skill Constellation · Real-time Physics & Node Connections</span>
              </div>
              <p className="text-xs text-slate-400">Click any sphere to inspect connected projects</p>
            </div>
            <div className="h-[480px] w-full">
              <SkillConstellation onSelectSkill={(name) => setSelectedSkillName(name)} />
            </div>
            {selectedSkillName && (
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/40 flex items-center justify-between animate-fadeIn">
                <div className="text-xs font-mono">
                  <span className="text-slate-400">Selected Node: </span>
                  <span className="text-cyan-400 font-bold">{selectedSkillName}</span>
                </div>
                <a
                  href="#projects"
                  className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1"
                >
                  Jump to projects <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ) : (
          /* Category Tabs & Grid View */
          <div>
            {/* Category Selector Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-glow-cyan-sm'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                All Categories
              </button>
              {skillsCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeTab === category.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-glow-cyan-sm'
                      : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Skills Accordion / Category Cards */}
            <div className="space-y-8">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800/60">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></span>
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{cat.description}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{cat.skills.length} core stacks</span>
                  </div>

                  {/* Individual Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/70 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                              {skill.experience}
                            </span>
                          </div>

                          <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                            {skill.description}
                          </p>
                        </div>

                        <div>
                          {/* Proficiency Bar */}
                          <div className="w-full bg-slate-900 rounded-full h-1.5 mb-3 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${skill.level}%`,
                                backgroundColor: cat.color,
                              }}
                            />
                          </div>

                          {/* Connected Projects */}
                          {skill.connectedProjects.length > 0 && (
                            <div className="pt-2 border-t border-slate-800/60 flex items-center gap-1.5 flex-wrap">
                              <span className="text-[10px] font-mono text-slate-500">Shipped in:</span>
                              {skill.connectedProjects.slice(0, 3).map((projId) => (
                                <a
                                  key={projId}
                                  href="#projects"
                                  onClick={() => onSelectProject && onSelectProject(projId)}
                                  className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 hover:underline px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-800"
                                >
                                  {projId.replace('-ai', '').replace('-mobile', '')}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
