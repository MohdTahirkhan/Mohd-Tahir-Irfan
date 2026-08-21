import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Bookmark,
  Share2,
  Sparkles,
} from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';

export const Publications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({});

  const handleCopyCitation = (pub: (typeof PUBLICATIONS)[0]) => {
    const apaCitation = `${pub.authors.join(', ')} (${pub.year}). "${pub.title}." ${pub.journal}, ${pub.volume}, ${pub.pages}. https://doi.org/${pub.doi}`;
    navigator.clipboard.writeText(apaCitation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyBibtex = (pub: (typeof PUBLICATIONS)[0]) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibtexId(pub.id);
    setTimeout(() => setCopiedBibtexId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Research Output</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Peer-Reviewed Publications
          </h2>
          <div className="w-10 h-0.5 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Scholarly articles published in indexed international conference proceedings and Elsevier journals.
          </p>
        </div>

        {/* Publication Cards List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {PUBLICATIONS.map((pub) => {
            return (
              <article
                key={pub.id}
                id={`publication-card-${pub.id}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xs transition-all duration-200"
              >
                {/* Journal & Indexing Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                      {pub.journal}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-50 border border-slate-200/60 text-slate-600">
                      {pub.volume} • {pub.pages}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {pub.month} {pub.year}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Peer-Reviewed
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 hover:text-blue-600 transition-colors">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none"
                  >
                    {pub.title}
                  </a>
                </h3>

                {/* Authors with Mohd Tahir Irfan Highlighted */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                  <span className="text-slate-400 font-medium mr-1">Authors:</span>
                  {pub.authors.map((author, aIdx) => {
                    const isTahir =
                      author.includes('Irfan') || author.includes('M. T. Irfan');
                    return (
                      <span key={aIdx}>
                        {isTahir ? (
                          <strong className="font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                            {author}
                          </strong>
                        ) : (
                          <span>{author}</span>
                        )}
                        {aIdx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>

                {/* Proceedings Note if applicable */}
                {pub.proceedings && (
                  <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 mb-4">
                    {pub.proceedings}
                  </p>
                )}

                {/* Abstract Preview */}
                <div className="mb-5 text-sm text-slate-600">
                  <p className="leading-relaxed font-normal">
                    {pub.abstractSnippet}
                  </p>
                </div>

                {/* Keyword Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pub.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-50 border border-slate-200/60 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  {/* Primary Direct DOI link */}
                  <a
                    id={`pub-view-link-${pub.id}`}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>View Paper</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Copy tools */}
                  <div className="flex items-center gap-2">
                    <button
                      id={`pub-copy-apa-${pub.id}`}
                      type="button"
                      onClick={() => handleCopyCitation(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                      title="Copy APA Citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied APA</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy APA</span>
                        </>
                      )}
                    </button>

                    <button
                      id={`pub-copy-bibtex-${pub.id}`}
                      type="button"
                      onClick={() => handleCopyBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                      title="Copy BibTeX Citation"
                    >
                      {copiedBibtexId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied BibTeX</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
