import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronRight } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Postgraduate specialization in computer science, undergraduate engineering degree, and secondary foundations.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-slate-200" />

          <div className="space-y-6">
            {EDUCATIONS.map((edu, index) => {
              const isHigherDegree = index === 0 || index === 1;
              return (
                <div
                  key={edu.id}
                  id={`education-card-${edu.id}`}
                  className="relative sm:pl-16 group"
                >
                  {/* Timeline Badge Node */}
                  <div
                    className={`hidden sm:flex absolute left-6 -translate-x-1/2 top-6 w-8 h-8 rounded-full items-center justify-center border transition-colors ${
                      isHigherDegree
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white border-slate-300 text-slate-600'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card Body */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {edu.degree}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Institution and Location */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-700 mb-3">
                      <span className="text-blue-600 font-medium">{edu.institution}</span>
                      {edu.location && (
                        <span className="text-slate-400 font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                      )}
                    </div>

                    {/* Academic Focus */}
                    {edu.focus && (
                      <p className="text-xs sm:text-sm text-slate-600 mb-3 font-normal leading-relaxed">
                        {edu.focus}
                      </p>
                    )}

                    {/* Highlighted Dissertation/Project pill */}
                    {edu.scoreOrDetail && (
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <Award className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{edu.scoreOrDetail}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
