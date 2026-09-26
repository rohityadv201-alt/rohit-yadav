import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-[#F5C542] selection:text-black relative">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      <main>
        {/* 1) Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2) Manifesto Section */}
        <Manifesto />

        {/* 3) Selected Works Section */}
        <Projects />

        {/* 4) Core Capabilities & Code Sandbox Section */}
        <Skills />

        {/* 5) Experience & Milestones Section */}
        <Experience />

        {/* 6) Contact & Direct Dispatch Section */}
        <Contact />
      </main>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <StandaloneExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
