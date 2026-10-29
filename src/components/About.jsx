import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';

export function About({ profile, onOpenProfileModal }) {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Background & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            An honest perspective on my academic path, technical curiosity, and student aspirations in Information Systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {profile.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="p-4 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-border/80 shadow-sm">
                {paragraph}
              </p>
            ))}

            {/* Career Philosophy Quote Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-cyanAccent/10 to-transparent border border-primary/30 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    Core Learning Philosophy
                  </h3>
                  <p className="text-sm italic text-slate-800 dark:text-slate-200 font-medium">
                    "{profile.learningStatement}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Snapshot Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-card-dark space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-navy-border/80">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 text-sm font-mono">
                  <Sparkles className="w-4 h-4 text-cyanAccent" />
                  <span>Academic Snapshot</span>
                </h3>
                <button
                  onClick={onOpenProfileModal}
                  className="text-xs text-primary hover:underline font-mono"
                >
                  Edit Info
                </button>
              </div>

              {/* Institution */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Institution</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{profile.school}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{profile.program}</p>
                  <span className="inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {profile.academicStatus} ({profile.studyPeriod})
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyanAccent/10 border border-cyanAccent/30 flex items-center justify-center text-cyanAccent shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Location</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.location}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Available for local academic collaborations & remote labs</p>
                </div>
              </div>

              {/* Academic Strengths */}
              <div className="pt-2 border-t border-slate-200 dark:border-navy-border/80 space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Focus Pillars
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Database Architecture & SQL Schema Normalization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Frontend UI Development with Modern React & Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Windows Server Administration & Network Topology Labs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick stats / milestones note */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-200 dark:border-navy-border text-xs text-slate-500 dark:text-slate-400 text-center font-mono">
              Always eager to learn new technologies, tackle practical labs, and collaborate on student-level software initiatives.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
