import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            University teaching, student mentoring, curriculum governance, and departmental leadership.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-slate-200" />

          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = exp.status === 'Current';
            return (
              <div
                key={exp.id}
                id={`experience-item-${exp.id}`}
                className="relative md:pl-20 group"
              >
                {/* Timeline node icon */}
                <div
                  className={`hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-xl items-center justify-center border transition-all duration-200 ${
                    isCurrent
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-white border-slate-300 text-slate-500 group-hover:border-blue-500 group-hover:text-blue-600'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                </div>

                {/* Main Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                    isCurrent
                      ? 'bg-white border-blue-200 shadow-xs ring-1 ring-blue-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {/* Top Bar with Status and Period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold text-slate-900">
                        {exp.role}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Institution and Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-slate-600 mb-5">
                    <div className="flex items-center gap-1.5 font-semibold text-blue-600">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span>{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </div>
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
};
