import React, { useState, useEffect, useRef } from 'react';
import { X, Save, RotateCcw, User, Mail, MapPin, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { defaultProfile, saveStoredProfile } from '../data/profile';

export function ProfileEditModal({ isOpen, onClose, profile, onUpdateProfile }) {
  const [formData, setFormData] = useState(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(profile);
      setSavedSuccess(false);
      // Accessibility focus management
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, profile]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updated = {
      ...formData,
      // Check if user set non-placeholder URLs
      isGithubConfigured: formData.githubUrl && !formData.githubUrl.includes('your-username'),
      isLinkedinConfigured: formData.linkedinUrl && !formData.linkedinUrl.includes('your-profile'),
    };
    saveStoredProfile(updated);
    onUpdateProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(defaultProfile);
    saveStoredProfile(defaultProfile);
    onUpdateProfile(defaultProfile);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 700);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-navy-border/80 bg-slate-50 dark:bg-navy-850">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 id="edit-profile-title" className="text-lg font-semibold text-slate-900 dark:text-white">
                Customize Profile Information
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Update placeholders and contact info directly. Changes save to your browser's local storage.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4">
          {savedSuccess && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>Profile settings saved successfully!</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  ref={firstInputRef}
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address (Editable Placeholder)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  required
                />
              </div>
            </div>

            {/* School */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Institution
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.school}
                  onChange={(e) => handleChange('school', e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Degree Program */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Study Program
              </label>
              <input
                type="text"
                value={formData.program}
                onChange={(e) => handleChange('program', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>
            </div>

            {/* Study Period */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Study Period
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.studyPeriod}
                  onChange={(e) => handleChange('studyPeriod', e.target.value)}
                  placeholder="e.g. 2023 – Present"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-navy-border/60">
            <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Social Links & Repositories
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Leave placeholder values if your accounts are not ready. Links will indicate they are placeholders until you provide your real URLs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  GitHub Profile URL
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => handleChange('githubUrl', e.target.value)}
                    placeholder="https://github.com/your-username"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                    placeholder="https://linkedin.com/in/your-profile"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Career Goal */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Career Goal
            </label>
            <textarea
              rows={2}
              value={formData.careerGoal}
              onChange={(e) => handleChange('careerGoal', e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-navy-border">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-xl transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-navy-950 bg-primary hover:bg-primary-hover shadow-glow-sm rounded-xl transition font-mono"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
