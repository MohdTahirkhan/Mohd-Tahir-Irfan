import React, { useState } from 'react';
import {
  Award,
  Lightbulb,
  FileCheck2,
  FolderGit2,
  Scroll,
  Search,
  Copy,
  Check,
  Tag,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import {
  PATENTS,
  NOTABLE_PROJECTS,
  CERTIFICATIONS,
  PUBLICATIONS,
} from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'patents' | 'projects' | 'certifications'>('patents');
  const [patentSearch, setPatentSearch] = useState('');
  const [selectedPatentCategory, setSelectedPatentCategory] = useState<string>('All');
  const [copiedAppNo, setCopiedAppNo] = useState<string | null>(null);

  const patentCategories = [
    'All',
    'AI & Healthcare',
    'IoT & Smart City',
    'CleanTech',
    'Security & Blockchain',
    'Automation & Robotics',
    'AgriTech',
  ];

  const filteredPatents = PATENTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(patentSearch.toLowerCase()) ||
      p.applicationNumber.includes(patentSearch) ||
      p.description.toLowerCase().includes(patentSearch.toLowerCase());
    const matchesCategory =
      selectedPatentCategory === 'All' || p.category === selectedPatentCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyAppNo = (appNo: string) => {
    navigator.clipboard.writeText(appNo);
    setCopiedAppNo(appNo);
    setTimeout(() => setCopiedAppNo(null), 2000);
  };

  return (
    <section id="achievements" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Honors & Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Recognition
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Intellectual property patents, research dissertations, and advanced faculty development credentials.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Patents</span>
              <Award className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">9</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Published (Jan 2024)</div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Publications</span>
              <FileCheck2 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">2 Papers</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Procedia CS (Elsevier)</div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">FDPs & Certs</span>
              <Scroll className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">6+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">IIT Roorkee, TCS, NEP</div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Capstone Work</span>
              <FolderGit2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">2 Projects</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">ViT AI & Governance</div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/60">
            <button
              id="tab-btn-patents"
              onClick={() => setActiveTab('patents')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'patents'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Patents Published (9)</span>
            </button>

            <button
              id="tab-btn-projects"
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'projects'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FolderGit2 className="w-4 h-4 text-blue-600" />
              <span>Notable Projects</span>
            </button>

            <button
              id="tab-btn-certifications"
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'certifications'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Scroll className="w-4 h-4 text-indigo-600" />
              <span>FDPs & Certifications</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PATENTS SHOWCASE */}
        {activeTab === 'patents' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Search and Category Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {patentCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedPatentCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedPatentCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={patentSearch}
                  onChange={(e) => setPatentSearch(e.target.value)}
                  placeholder="Search patents / app no..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Patents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPatents.map((patent) => (
                <div
                  key={patent.id}
                  id={`patent-card-${patent.id}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/70">
                        {patent.category}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {patent.status} • {patent.filingYear}
                      </span>
                    </div>

                    {/* Patent Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {patent.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
                      {patent.description}
                    </p>
                  </div>

                  {/* Application Number Bar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Application No.
                      </span>
                      <code className="text-xs font-mono font-bold text-slate-800">
                        {patent.applicationNumber}
                      </code>
                    </div>

                    <button
                      id={`copy-app-no-${patent.id}`}
                      type="button"
                      onClick={() => handleCopyAppNo(patent.applicationNumber)}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                      title="Copy Application Number"
                    >
                      {copiedAppNo === patent.applicationNumber ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPatents.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <p className="text-sm text-slate-500">No patents found matching your query.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: NOTABLE PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
            {NOTABLE_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                    {proj.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{proj.subtitle}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {proj.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {proj.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="text-xs font-semibold text-slate-400 mr-1">Technologies:</span>
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-50 text-slate-700 font-mono border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metric Outcome */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{proj.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: FDPS & CERTIFICATIONS */}
        {activeTab === 'certifications' && (
          <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => {
                const isFdp = cert.type === 'FDP';
                return (
                  <div
                    key={cert.id}
                    id={`cert-item-${cert.id}`}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all flex items-start gap-3.5 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        isFdp
                          ? 'bg-blue-50 text-blue-600 border border-blue-200/70'
                          : 'bg-indigo-50 text-indigo-600 border border-indigo-200/70'
                      }`}
                    >
                      {isFdp ? <Scroll className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isFdp ? 'bg-blue-50 text-blue-700 border border-blue-200/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
                          }`}
                        >
                          {cert.type}
                        </span>
                        <span className="text-xs font-medium text-slate-400">{cert.date}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {cert.title}
                      </h4>

                      <p className="text-xs text-slate-600 font-normal mt-1">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
