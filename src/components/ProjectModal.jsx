import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { Github } from './SocialIcons';
import { ProjectVisual } from './TechIllustration';

export function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { details } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-navy-border/80 bg-slate-50 dark:bg-navy-850">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800 transition"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Visual Architecture Preview */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              System & Architecture Preview
            </p>
            <ProjectVisual type={project.visualType} />
          </div>

          {/* Academic Context & Problem Statement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-border">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Academic Context</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {details?.academicContext || project.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-border">
              <div className="flex items-center gap-2 mb-2 text-cyanAccent font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>Objective & Problem Statement</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {details?.problemStatement || project.summary}
              </p>
            </div>
          </div>

          {/* Key Features / Implementation Highlights */}
          {details?.keyFeatures && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Key Features & Workflows
              </h3>
              <div className="space-y-2">
                {details.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-200/80 dark:border-navy-border/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Stack Breakdown */}
          {details?.technicalStackDetails && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyanAccent" />
                Technical Implementation Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {details.technicalStackDetails.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-border">
                    <p className="text-[11px] font-mono font-semibold text-primary mb-1">{item.label}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {details?.keyTakeaways && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-cyanAccent/5 to-transparent border border-primary/20">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2">
                Student Learning Takeaways
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-700 dark:text-slate-300">
                {details.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-cyanAccent border border-slate-200 dark:border-navy-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Honest Link Policy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-navy-border bg-slate-50 dark:bg-navy-850">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Academic coursework artifact · Code verified in SETEC labs</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            ) : null}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-navy-950 hover:bg-primary-hover transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-xl border border-slate-300 dark:border-navy-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
