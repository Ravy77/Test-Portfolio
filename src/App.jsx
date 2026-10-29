import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProfileEditModal } from './components/ProfileEditModal';
import { getStoredProfile } from './data/profile';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Theme state: default to dark as requested (#050912)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return true; // Default dark
  });

  // Profile data state (hydrated from localStorage or defaultProfile)
  const [profile, setProfile] = useState(getStoredProfile);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync theme to HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050912] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative bg-ambient-grid flex flex-col font-sans">
      
      {/* Sticky Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        profile={profile}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          profile={profile}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />
        <About
          profile={profile}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />
        <Skills />
        <Projects />
        <Education
          profile={profile}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />
        <LearningJourney />
        <Contact
          profile={profile}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-primary hover:bg-primary-hover text-navy-950 shadow-glow transition-all duration-300 hover:scale-110 animate-fadeIn"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />

    </div>
  );
}
