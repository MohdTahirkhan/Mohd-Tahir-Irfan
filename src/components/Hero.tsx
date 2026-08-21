import React from 'react';
import {
  MapPin,
  Building2,
  Mail,
  ArrowRight,
  FileText,
  Award,
  BookOpen,
  Sparkles,
  ExternalLink,
  Linkedin,
  Github,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden academic-grid-pattern border-b border-slate-200/80 bg-white"
    >
      {/* Subtle ambient light wash */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Academic Faculty & Researcher</span>
            </div>

            {/* Name */}
            <h1
              id="hero-name-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Title / Designation */}
            <p
              id="hero-designation-text"
              className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-2"
            >
              {PERSONAL_INFO.title}
            </p>

            {/* Institution & Location details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.institution}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Academic Summary Hook */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Specializing in <strong className="text-slate-900 font-semibold">Artificial Intelligence</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Machine Learning</strong>,{' '}
              <strong className="text-slate-900 font-semibold">IoT</strong>, and{' '}
              <strong className="text-slate-900 font-semibold">Theory of Computation</strong>. Author of 9 published patents and peer-reviewed research in Procedia Computer Science.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <button
                id="hero-contact-cta-btn"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs hover:shadow-sm active:scale-98 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-publications-cta-btn"
                onClick={() => scrollToSection('publications')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Publications</span>
              </button>

              <button
                id="hero-achievements-cta-btn"
                onClick={() => scrollToSection('achievements')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200/80 transition-colors"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>9 Patents Published</span>
              </button>
            </div>

            {/* Social Links Quick Access */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 w-full">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Mohd Tahir Irfan LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Mohd Tahir Irfan GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Email Mohd Tahir Irfan"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Headshot & Interactive Profile Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Outer clean accent border ring */}
              <div className="absolute inset-0 rounded-3xl bg-blue-100/50 rotate-2 -z-0" />

              {/* Main Photo Card */}
              <div
                id="hero-headshot-card"
                className="relative rounded-3xl p-3 bg-white border border-slate-200 shadow-sm overflow-hidden"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img
                    id="hero-headshot-img"
                    src={PERSONAL_INFO.avatar}
                    alt="Mohd Tahir Irfan - Assistant Professor CSE"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.getElementById('hero-headshot-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Graphic */}
                  <div
                    id="hero-headshot-fallback"
                    style={{ display: 'none' }}
                    className="w-full h-full bg-slate-900 text-white flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center mb-4">
                      <Sparkles className="w-10 h-10 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Mohd Tahir Irfan</h3>
                    <p className="text-xs text-slate-300 font-medium">Assistant Professor, CSE</p>
                  </div>

                  {/* University Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 text-white border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-blue-300 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>Current Affiliation</span>
                        </div>
                        <div className="text-sm font-bold tracking-tight text-white">JECRC University</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white">
                        Jaipur
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Patent Badge Pill */}
              <div
                id="hero-floating-badge"
                className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">9 Patents</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Published Jan 2024</div>
                </div>
              </div>

              {/* Floating Publication Badge Pill */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Procedia CS</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Elsevier Publications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div id="hero-quick-stats-grid" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-200 transition-all group"
            >
              <div className="text-3xl font-extrabold text-blue-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
