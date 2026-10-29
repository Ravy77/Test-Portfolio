import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Network, 
  Wrench, 
  Check, 
  Layers, 
  Search,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  Layout,
  Database,
  Network,
  Wrench,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = skillCategories.map((category) => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return null;
    }
    const matchingSkills = category.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.highlight.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm && matchingSkills.length === 0) return null;

    return {
      ...category,
      skills: matchingSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyanAccent/10 border border-cyanAccent/30 text-cyanAccent text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Labs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Technologies I am actively studying, practicing through laboratory assignments, and applying in personal projects.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-sm w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                activeTab === 'all'
                  ? 'bg-primary text-navy-950 font-semibold shadow-glow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                  activeTab === cat.id
                    ? 'bg-primary text-navy-950 font-semibold shadow-glow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, SQL, DNS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-card-dark flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-cyanAccent uppercase tracking-wider">
                        {category.skills.length} Competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-navy-border/60 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          {skill.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-500">
                    <Check className="w-3.5 h-3.5" /> Hands-on Practiced
                  </span>
                  <span>SETEC MIS</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border max-w-md mx-auto">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No skills found matching "{searchTerm}". Try a different search keyword.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
