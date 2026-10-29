import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Sparkles, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export function Contact({ profile, onOpenProfileModal }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formFeedback, setFormFeedback] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please write a message with at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Honest handling: Since this is a static frontend deployment without a live SMTP backend,
    // we generate a mailto link with the pre-filled contents and inform the user transparently.
    const mailtoUrl = `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Ravy,\n\n${formData.message}\n\nSender: ${formData.name} (${formData.email})`
    )}`;

    window.open(mailtoUrl, '_blank');

    setFormFeedback({
      type: 'info',
      message: 'Email client opened with your message pre-filled. Note: As this is a client-side portfolio, emails are drafted in your local mail client (or can be wired to Formspree / EmailJS).',
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            I am always open to discussing student software projects, study groups, networking labs, and entry-level learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Copy Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-card-dark space-y-5">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Feel free to reach out directly via email or social networks.
                </p>
              </div>

              {/* Email Card with Copy Feature */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-navy-border space-y-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {profile.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-border text-slate-700 dark:text-slate-300 transition shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-500 font-mono flex items-center gap-1 animate-fadeIn">
                    <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-navy-border/60">
                <div className="w-8 h-8 rounded-lg bg-cyanAccent/10 border border-cyanAccent/30 flex items-center justify-center text-cyanAccent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Based in</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.location}</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-navy-border/80">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Online Profiles
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-border hover:border-primary/50 text-slate-700 dark:text-slate-300 text-xs font-medium transition"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-border hover:border-cyanAccent/50 text-slate-700 dark:text-slate-300 text-xs font-medium transition"
                  >
                    <Linkedin className="w-4 h-4 text-cyanAccent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenProfileModal}
                  className="text-xs text-primary hover:underline font-mono inline-flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Update contact email / profile links</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-border shadow-card-dark">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>Send a Message</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  Student Inbox
                </span>
              </div>

              {/* Transparent Disclaimer Box */}
              <div className="p-3 mb-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <p className="leading-relaxed">
                  <strong>Backend Notice:</strong> This client-side form triggers your system's default mail client with all fields safely pre-filled. To connect automated direct delivery, link to a form service like Formspree or EmailJS.
                </p>
              </div>

              {formFeedback && (
                <div className="p-3 mb-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-xs leading-relaxed animate-fadeIn">
                  {formFeedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition"
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 font-mono">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 font-mono">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Student Project Collaboration / Networking Lab Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition"
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 font-mono">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your note, question, or project idea here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary transition resize-none"
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-500 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-navy-950 font-bold text-sm shadow-glow transition duration-200 flex items-center justify-center gap-2 font-mono"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft Message to {profile.name}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
