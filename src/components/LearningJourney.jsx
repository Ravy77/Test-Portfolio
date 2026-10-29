import React from 'react';
import { Compass, Code, Database, Server, Briefcase, ArrowRight, Lightbulb, Check } from 'lucide-react';

export function LearningJourney() {
  const learningPillars = [
    {
      title: "Full-Stack Development",
      category: "Frontend & Backend Integration",
      icon: Code,
      accentColor: "text-primary",
      borderColor: "hover:border-primary/50",
      description: "Learning how modern client-side SPAs connect to REST APIs, validate state, and interact with backend application servers.",
      businessConnection: "Translates abstract business workflows into intuitive, responsive user experiences that boost workforce productivity.",
      currentTopics: ["React 19 & State Patterns", "Tailwind CSS Layouts", "RESTful Architecture", "CRUD Endpoints"],
    },
    {
      title: "Database Management & SQL",
      category: "Data Integrity & Storage",
      icon: Database,
      accentColor: "text-cyanAccent",
      borderColor: "hover:border-cyanAccent/50",
      description: "Mastering schema normalization, entity relationships, transaction consistency, and modern document data structures.",
      businessConnection: "Ensures business data is secure, non-redundant, easily queryable, and ready for operational decision-making.",
      currentTopics: ["3NF Schema Normalization", "Complex SQL Joins", "MongoDB Aggregations", "Data Validation"],
    },
    {
      title: "Networking & Windows Server",
      category: "Infrastructure & Systems Admin",
      icon: Server,
      accentColor: "text-primary",
      borderColor: "hover:border-primary/50",
      description: "Configuring domain controllers, Active Directory user trees, DNS zones, and virtual messaging services.",
      businessConnection: "Builds dependable, secure enterprise network backbones where employees can communicate and authenticate safely.",
      currentTopics: ["Windows Server AD DS", "DNS & DHCP Management", "GNS3 Virtual Lab Topologies", "SSL & Virtual Directories"],
    },
    {
      title: "Business Information Systems",
      category: "System Analysis & Solutions",
      icon: Briefcase,
      accentColor: "text-emerald-400",
      borderColor: "hover:border-emerald-400/50",
      description: "Studying systems analysis methodologies, use-case models, and requirement specifications for organizational workflows.",
      businessConnection: "Prevents misalignment between engineering teams and company stakeholders by validating real operational needs.",
      currentTopics: ["Data Flow Diagrams (DFD)", "Use-Case Modeling", "Workflow Optimization", "Feasibility Evaluation"],
    },
  ];

  return (
    <section id="learning-journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyanAccent/10 border border-cyanAccent/30 text-cyanAccent text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth & Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Currently Learning
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging technical computer science fundamentals with tangible business value through deliberate daily practice.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border ${pillar.borderColor} transition-all duration-300 shadow-sm hover:shadow-card-dark flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-border flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${pillar.accentColor}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {pillar.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {/* Business value connect box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200/80 dark:border-navy-border/60 mb-4">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold font-mono text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                          Connecting to Business Needs
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {pillar.businessConnection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Study Topics */}
                <div className="pt-3 border-t border-slate-100 dark:border-navy-border/60">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Current Study Focus
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.currentTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
