import React from 'react';
import {
  Brain,
  Cpu,
  Wifi,
  Eye,
  Database,
  ShieldCheck,
  Blocks,
  Binary,
  Layers,
  Sparkles,
} from 'lucide-react';
import { EXPERTISE_LIST } from '../data/portfolioData';

// Dynamic icon mapper
const getExpertiseIcon = (iconName: string) => {
  switch (iconName) {
    case 'BrainCircuit':
      return <Brain className="w-6 h-6" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6" />;
    case 'Wifi':
      return <Wifi className="w-6 h-6" />;
    case 'Eye':
      return <Eye className="w-6 h-6" />;
    case 'Database':
      return <Database className="w-6 h-6" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6" />;
    case 'Blocks':
      return <Blocks className="w-6 h-6" />;
    case 'Binary':
      return <Binary className="w-6 h-6" />;
    default:
      return <Layers className="w-6 h-6" />;
  }
};

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas of Expertise
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Core subject areas spanning theoretical computational foundations, intelligent systems, and modern software architectures.
          </p>
        </div>

        {/* 8 Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_LIST.map((item) => (
            <div
              key={item.id}
              id={`expertise-card-${item.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-slate-50 text-blue-600 border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {getExpertiseIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Sub-keywords */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
