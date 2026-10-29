import React, { useState } from 'react';
import { Sparkles, Eye, ExternalLink, ArrowRight, FolderGit2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { projectsData } from '../data/projects';
import { ProjectVisual } from './TechIllustration';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Labs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Real coursework architectures, lab implementations, and personal development artifacts demonstrating practical problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-card-dark flex flex-col justify-between overflow-hidden"
            >
              {/* Visual Preview Header */}
              <div className="p-4 sm:p-5 pb-0">
                <ProjectVisual type={project.visualType} />
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyanAccent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Academic Lab
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-mono text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-navy-border/60">
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-cyanAccent transition group/btn font-mono"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details & Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Optional links if present and valid */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />

      </div>
    </section>
  );
}
