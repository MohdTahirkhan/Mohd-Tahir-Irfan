import React from 'react';
import {
  BookOpen,
  Database,
  FileCode2,
  Binary,
  ShieldAlert,
  GraduationCap,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { COURSES } from '../data/portfolioData';

const getCourseIcon = (iconName: string) => {
  switch (iconName) {
    case 'Database':
      return <Database className="w-6 h-6" />;
    case 'FileCode2':
      return <FileCode2 className="w-6 h-6" />;
    case 'Binary':
      return <Binary className="w-6 h-6" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-6 h-6" />;
    default:
      return <BookOpen className="w-6 h-6" />;
  }
};

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Instruction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Courses Taught
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Undergraduate and postgraduate curriculum courses, hands-on lab sessions, and outcome-based engineering modules.
          </p>
        </div>

        {/* 4 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Level */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 text-blue-600 border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/80">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Exact user requested description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
                  {course.description}
                </p>

                {/* Key Course Topics covered */}
                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Topics & Lab Practicals:
                  </span>
                  {course.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Outcome-Based Education (OBE)</span>
                <span className="font-semibold text-blue-600">Active Syllabus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
