import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { EngineeringNotes } from './components/EngineeringNotes';
import { ProfileSection } from './components/ProfileSection';
import { ContactBackCover } from './components/ContactBackCover';
import { CaseStudyPage } from './components/CaseStudyPage';
import { NoteReaderPage } from './components/NoteReaderPage';
import { CvModal } from './components/CvModal';
import { PROJECTS } from './data/portfolioData';
import { ENGINEERING_NOTES } from './data/engineeringNotes';

type RouteState =
  | { view: 'home' }
  | { view: 'case-study'; projectId: string }
  | { view: 'note'; noteId: string };

function parseLocationRoute(): RouteState {
  try {
    const path = window.location.pathname;
    if (path.startsWith('/work/')) {
      const slug = path.replace('/work/', '').replace(/\/+$/, '');
      if (PROJECTS.some((p) => p.id === slug)) {
        return { view: 'case-study', projectId: slug };
      }
    }
    if (path.startsWith('/notes/')) {
      const slug = path.replace('/notes/', '').replace(/\/+$/, '');
      if (ENGINEERING_NOTES.some((n) => n.id === slug)) {
        return { view: 'note', noteId: slug };
      }
    }
  } catch {
    // Fallback cleanly if window location access fails
  }
  return { view: 'home' };
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>(parseLocationRoute);
  const [activeSection, setActiveSection] = useState<string>('index');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Sync browser back / forward navigation gestures (important on mobile Safari!)
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseLocationRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll-spy for home index indicator
  useEffect(() => {
    if (route.view !== 'home') return;

    const sectionIds = ['index', 'work', 'notes', 'profile', 'contact'];
    const handleScroll = () => {
      const marker = window.scrollY + 140;
      let current = 'index';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (marker >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [route.view]);

  const navigateHome = useCallback((targetSection?: string) => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      // Ignore history restrictions
    }
    setRoute({ view: 'home' });

    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateSection = useCallback(
    (sectionId: string) => {
      if (route.view !== 'home') {
        navigateHome(sectionId);
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    },
    [route.view, navigateHome]
  );

  const openCaseStudy = useCallback((projectId: string) => {
    try {
      window.history.pushState(null, '', `/work/${projectId}`);
    } catch {
      // Fallback safely
    }
    setRoute({ view: 'case-study', projectId });
  }, []);

  const openNote = useCallback((noteId: string) => {
    try {
      window.history.pushState(null, '', `/notes/${noteId}`);
    } catch {
      // Fallback safely
    }
    setRoute({ view: 'note', noteId });
  }, []);

  return (
    <div className="relative min-h-screen min-h-[100dvh] bg-[#F3F0E9] text-[#171918] overflow-x-clip font-sans">
      <Navbar
        currentView={route.view}
        activeSection={activeSection}
        onNavigateSection={navigateSection}
        onBackHome={() => navigateHome()}
        onOpenCv={() => setIsCvModalOpen(true)}
      />

      <main>
        {route.view === 'home' && (
          <>
            <Hero
              onNavigateSection={navigateSection}
              onSelectProject={openCaseStudy}
              onOpenCv={() => setIsCvModalOpen(true)}
            />
            <Projects onSelectProject={openCaseStudy} />
            <EngineeringNotes
              onSelectNote={openNote}
              onSelectProject={openCaseStudy}
            />
            <ProfileSection onOpenCv={() => setIsCvModalOpen(true)} />
            <ContactBackCover />
          </>
        )}

        {route.view === 'case-study' && (
          <>
            <CaseStudyPage
              projectId={route.projectId}
              onSelectProject={openCaseStudy}
              onBackHome={() => navigateHome('work')}
            />
            <ContactBackCover />
          </>
        )}

        {route.view === 'note' && (
          <>
            <NoteReaderPage
              noteId={route.noteId}
              onSelectNote={openNote}
              onSelectProject={openCaseStudy}
              onBackHome={() => navigateHome('notes')}
            />
            <ContactBackCover />
          </>
        )}
      </main>

      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
};

export default App;
