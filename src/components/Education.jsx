import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export function Education({ profile, onOpenProfileModal }) {
  const academicHighlights = [
    {
      title: "Management Information Systems (MIS)",
      description: "Analyzing organizational business workflows and designing database-backed IT solutions.",
    },
    {
      title: "Relational & NoSQL Database Systems",
      description: "Hands-on data modeling, SQL queries, normalization (1NF-3NF), and MongoDB document schemas.",
    },
    {
      title: "Enterprise Networking & Server Infrastructure",
      description: "TCP/IP routing, DNS/DHCP configuration, and Windows Server Active Directory lab environments.",
    },
    {
      title: "Software Engineering & Object-Oriented Programming",
      description: "Developing robust software logic in Java, JavaScript, and modern component-driven web frameworks.",
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal studies in Information Systems at SETEC Institute, combining theoretical computer science with business systems practice.
          </p>
        </div>

        {/* Education Timeline / Primary Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-card-dark relative overflow-hidden">
            
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyanAccent to-primary"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-navy-border/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {profile.school}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {profile.academicStatus}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary font-mono mt-0.5">
                    {profile.program}
                  </p>
                </div>
              </div>

              {/* Editable badge & timing */}
              <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{profile.studyPeriod}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyanAccent" />
                  <span>{profile.location}</span>
                </div>
                <button
                  onClick={onOpenProfileModal}
                  className="text-[11px] text-primary hover:underline mt-1"
                >
                  Edit details
                </button>
              </div>
            </div>

            {/* Academic Pillars */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <BookOpen className="w-4 h-4 text-cyanAccent" />
                <span>Primary Curriculum Disciplines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-border/60 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Academic Integrity */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-border/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Program details are current and continually updated through ongoing study semesters.</span>
              <span className="hidden sm:inline text-primary">SETEC Institute</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
