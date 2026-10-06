import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects, projectPath } from '../data/projects';

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fb', label: 'F&B & Restaurants' },
  { id: 'health', label: 'Healthcare & Aesthetics' },
  { id: 'edu', label: 'Non-Profit Education' },
] as const;

type FilterId = (typeof filters)[number]['id'];

export default function InteractiveCaseStudies({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const Heading = headingLevel;
  const CardHeading = headingLevel === 'h1' ? 'h2' : 'h3';

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filterTag === activeFilter);

  return (
    <section id="case-studies" className="py-16 sm:py-20 relative">
      <div className="site-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Execution
          </span>
          <Heading className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 break-words">
            Featured <span className="text-gradient-rose">Case Studies</span>
          </Heading>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Client campaigns across F&B, healthcare and education. Pick one to see the full scope.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {filters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={activeFilter === tab.id}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-[#fff] shadow-lg shadow-rose-500/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.ul layout className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={projectPath(project)}
                  className="glass-panel h-full overflow-hidden flex flex-col group border border-white/10 hover:border-rose-400/40"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt=""
                      width="1376"
                      height="768"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/85 text-rose-300 border border-rose-400/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
                      <span className="font-bold text-rose-300 uppercase tracking-wider">{project.client}</span>
                      <span className="text-slate-400">{project.period}</span>
                    </div>
                    <CardHeading className="text-xl font-bold text-white mb-2 group-hover:text-rose-200 transition-colors">
                      {project.title}
                    </CardHeading>
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-5">
                      {project.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-rose-300 group-hover:text-rose-200">
                      Read case study <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

      </div>
    </section>
  );
}
