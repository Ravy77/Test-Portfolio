import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Settings2, ArrowUpRight } from 'lucide-react';

export function Navbar({ isDark, onToggleTheme, onOpenProfileModal, profile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ravy Voeun Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyanAccent p-0.5 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
              <div className="w-full h-full bg-[#050912] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyanAccent">
                  {profile.initials || 'RV'}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-cyanAccent tracking-widest uppercase">
                MIS · SETEC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200/80 dark:border-navy-border/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-navy-950 font-semibold shadow-glow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-navy-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Quick Profile Editor Button */}
            <button
              onClick={onOpenProfileModal}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-navy-850 border border-transparent hover:border-slate-300 dark:hover:border-navy-border transition"
              title="Customize Profile Placeholders"
              aria-label="Edit Profile Settings"
            >
              <Settings2 className="w-4 h-4" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-navy-850 border border-transparent hover:border-slate-300 dark:hover:border-navy-border transition"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-850 border border-slate-200 dark:border-navy-border transition"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-xl space-y-1 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary text-navy-950 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-200 dark:border-navy-border/60 flex items-center justify-between px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfileModal();
                }}
                className="flex items-center gap-2 text-xs text-primary font-medium py-1.5"
              >
                <Settings2 className="w-4 h-4" />
                <span>Customize Profile Details</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
