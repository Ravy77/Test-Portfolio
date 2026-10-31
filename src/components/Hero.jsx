
import React from 'react';
import profileImage from '../assets/profile.jpg';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export function Hero({ profile, onOpenProfileModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary dark:text-cyanAccent text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Undergraduate Student @ SETEC Institute</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-slate-600 dark:text-slate-300">Phnom Penh</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <p className="intro-animated text-sm sm:text-base font-mono font-medium text-primary">
                {"Hello, I'm".split("").map((letter, index) => (
                  <span key={index} style={{ "--i": index }}>
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyanAccent">
                {profile.headline}
              </h2>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I am passionate about bridging the gap between business processes and technical architecture. My studies focus on developing full-stack web applications, architecting normalized databases, and configuring reliable enterprise network infrastructures.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-navy-950 font-semibold text-sm shadow-glow transition duration-300 flex items-center gap-2 group font-mono"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-white dark:bg-navy-850 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-800 dark:text-white font-medium text-sm border border-slate-300 dark:border-navy-border shadow-sm transition duration-300 flex items-center gap-2 font-mono"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-cyanAccent" />
              </button>
            </div>

            {/* Social Links & Editable Indicator */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border transition"
                  title={profile.isGithubConfigured ? "GitHub Profile" : "Placeholder URL - Click Customize to edit"}
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub</span>
                  {!profile.isGithubConfigured && (
                    <span className="text-[10px] text-amber-500 font-mono">(placeholder)</span>
                  )}
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-border transition"
                  title={profile.isLinkedinConfigured ? "LinkedIn Profile" : "Placeholder URL - Click Customize to edit"}
                >
                  <Linkedin className="w-4 h-4 text-cyanAccent" />
                  <span>LinkedIn</span>
                  {!profile.isLinkedinConfigured && (
                    <span className="text-[10px] text-amber-500 font-mono">(placeholder)</span>
                  )}
                </a>
              </div>

              <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>

              <button
                onClick={onOpenProfileModal}
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Customize links</span>
              </button>
            </div>
          </div>

          {/* Right Profile Image Column */}
          
{/* Right Profile Image Column */}
<div className="lg:col-span-5 flex justify-center items-center">
  <div className="relative group">

    {/* Outer glow */}
    <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-primary via-cyanAccent to-blue-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />

    {/* Gradient border */}
    <div className="relative rounded-[2.2rem] p-[2px] bg-gradient-to-br from-primary via-cyanAccent to-blue-500 shadow-[0_0_35px_rgba(47,155,255,0.2)]">

      {/* Image frame */}
      <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] overflow-hidden rounded-[2.1rem] bg-navy-950">

        <img
          src={profileImage}
          alt="Ravy Voeun"
          className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
        />

      </div>
    </div>

    {/* Small decorative corner */}
    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-cyanAccent rounded-br-2xl" />
    <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary rounded-tl-2xl" />

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
