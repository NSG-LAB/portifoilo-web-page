import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { DroneSection } from './components/DroneSection';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components3d/BackgroundParticles';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Project } from './types';
import { projectsData } from './data/projectsData';

const SECTION_IDS = [
  'top',
  'about',
  'skills',
  'projects',
  'drone',
  'achievements',
  'certifications',
  'github',
  'resume',
  'contact',
];

export const App: React.FC = () => {
  const activeSection = useScrollSpy(SECTION_IDS, 160);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProjectId = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-400 text-slate-950 font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Subtle 3D Ambient Particles */}
      <BackgroundParticles />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Hero />
        <About />
        <Skills onSelectProject={handleSelectProjectId} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <DroneSection />
        <Achievements />
        <Certifications />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
