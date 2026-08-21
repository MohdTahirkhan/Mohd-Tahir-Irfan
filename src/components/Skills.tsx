import React from 'react';
import { Code2, Database, Compass, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const getCategoryIcon = (category: string) => {
  if (category.includes('Programming')) {
    return <Code2 className="w-5 h-5 text-blue-600" />;
  }
  if (category.includes('Databases')) {
    return <Database className="w-5 h-5 text-indigo-600" />;
  }
  return <Compass className="w-5 h-5 text-emerald-600" />;
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Programming languages, database management platforms, and specialized computer science domains.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{cat.category}</h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-tag */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
                {cat.skills.length} competencies listed
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
