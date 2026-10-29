import React from 'react';
import { ArrowUp, Heart, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-navy-border/80 bg-white dark:bg-[#050912] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200 dark:border-navy-border/60">
          
          {/* Logo & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyanAccent p-0.5 shadow-glow-sm">
                <div className="w-full h-full bg-[#050912] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyanAccent">
                    {profile.initials || 'RV'}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium italic">
              "{profile.tagline}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-cyanAccent transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border transition"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-primary" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border transition"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-cyanAccent" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition shadow-sm"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>{profile.school} · {profile.location}</span>
          </div>

          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
