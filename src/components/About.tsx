import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookMarked,
  Briefcase,
  Users,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Mail,
  Building,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookMarked className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Educator, researcher, and mentor dedicated to advancing computer science pedagogy and applied technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Callout Card */}
          <div className="lg:col-span-8 space-y-6">
            <div
              id="about-bio-card"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Academic Journey & Philosophy</span>
              </h3>

              {/* Exact user requested biography text */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Curriculum & OBE Design</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Outcome-Based Education aligned assessments and practical laboratory modules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Placement & Mentorship</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Preparing students for technical interviews, coding challenges, and internships.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Patent Innovation</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Inventive solutions across IoT, smart sanitation, solar automation, and AI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Internship Coordination</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Bridging university academia with leading software industry opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching & Research Commitments */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Faculty Vision
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                "Empowering engineering students with deep theoretical rigor and practical mastery in artificial intelligence, modern database architecture, and computational principles to prepare them for global research and technology careers."
              </p>
            </div>
          </div>

          {/* Quick Academic Snapshot Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div
              id="about-details-card"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5"
            >
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                Academic Snapshot
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Current Designation
                  </span>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Assistant Professor, CSE</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Institution
                  </span>
                  <div className="font-medium text-slate-800">
                    JECRC University, Jaipur
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Highest Qualification
                  </span>
                  <div className="font-medium text-slate-800">
                    M.Tech in CS & IT (Central University of Jammu)
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <div className="font-medium text-slate-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </div>
              </div>

              {/* Research Focus tags */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Primary Research Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['AI & ML', 'Deepfake Forensics', 'IoT Nodes', 'Blockchain', 'Automata'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
