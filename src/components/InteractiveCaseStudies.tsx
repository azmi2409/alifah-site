import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ChevronRight, Layers, BarChart, Sparkles, Filter, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  filterTag: 'meta' | 'fb' | 'health' | 'edu';
  period: string;
  location: string;
  role: string;
  image: string;
  summary: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

const projects: Project[] = [
  {
    id: 'bonsai-sushi',
    title: 'End-to-End Meta Ads & Instagram Creative Strategy',
    client: 'Bonsai Sushi',
    category: 'F&B & Restaurant Growth',
    filterTag: 'fb',
    period: 'March 2023 - April 2023',
    location: 'Cibubur, Jakarta, Indonesia',
    role: 'Digital Marketing Specialist',
    image: '/images/bonsai-sushi.webp',
    summary: 'Full-funnel paid acquisition strategy combining targeted Facebook Ads and Google Display Ads with hands-on Instagram content planning and creative ad design.',
    deliverables: [
      'Full campaign architecture setup (Prospecting to Retargeting)',
      'A/B split testing on ad copies, imagery, and promotional hooks',
      'Targeting setup, custom audiences, and budget allocation',
      'Weekly and monthly owner reporting with actionable growth insights',
      'Instagram content planning and high-converting visual assets',
    ],
    metrics: [
      { label: 'Platform', value: 'Meta & IG Ads' },
      { label: 'Reporting', value: 'Weekly to Owner' },
      { label: 'A/B Testing', value: 'Creative & Copy' },
      { label: 'Outcome', value: 'Targeted Footfall' },
    ],
    highlight: 'Integrated paid ads directly with Instagram content design for unified brand presentation.',
  },
  {
    id: 'kowara-eatery',
    title: 'Performance Marketing & Looker Studio Attribution',
    client: 'Kowara Eatery Group',
    category: 'F&B Multi-Brand Group',
    filterTag: 'fb',
    period: 'January 2023 - February 2023',
    location: 'Jakarta, Indonesia',
    role: 'Performance Marketing (RevoU Labs)',
    image: '/images/kowara-eatery.webp',
    summary: 'Managed Facebook Ads accounts for Kowara Eatery Group under RevoU Labs, executing rigorous A/B testing and delivering automated Google Data Studio reporting for stakeholders.',
    deliverables: [
      'End-to-end Facebook Ads campaign management and monitoring',
      'Audience segmentation, demographic testing, and budget pacing',
      'Google Data Studio / Looker Studio dynamic dashboards',
      'Direct presentations to corporate stakeholders with scaling insights',
    ],
    metrics: [
      { label: 'Agency Hub', value: 'RevoU Labs' },
      { label: 'Dashboard', value: 'Google Data Studio' },
      { label: 'Optimization', value: 'CBO & ABO' },
      { label: 'Cadence', value: 'Bi-weekly Reviews' },
    ],
    highlight: 'Built interactive Google Data Studio dashboards providing real-time visibility into ad spend efficiency.',
  },
  {
    id: 'indental-clinic',
    title: 'High-Intent Dental Care & Beauty Paid Acquisition',
    client: 'Indental Clinic Surabaya',
    category: 'Healthcare & Aesthetics',
    filterTag: 'health',
    period: 'October 2022 - December 2022',
    location: 'Surabaya, East Java, Indonesia',
    role: 'Performance Marketing (RevoU Labs)',
    image: '/images/indental-clinic.webp',
    summary: 'Precision geo-targeted Facebook Ads campaign for a premier Surabaya dental clinic, driving patient inquiries for routine dental care and cosmetic dentistry.',
    deliverables: [
      'Localized radius and high-intent demographic targeting in East Java',
      'Ad creative messaging focused on painless care and aesthetic transformation',
      'A/B testing ad formats (single image vs carousel vs video)',
      'Comprehensive Google Data Studio KPI tracking and stakeholder reporting',
    ],
    metrics: [
      { label: 'Audience', value: 'Surabaya Metro' },
      { label: 'Focus', value: 'Cosmetic & Care' },
      { label: 'Attribution', value: 'Looker Studio' },
      { label: 'Testing', value: 'Multi-Variant' },
    ],
    highlight: 'Successfully matched aesthetic medical messaging with localized audience segmentation in Surabaya.',
  },
  {
    id: 'bali-wise',
    title: 'Social Media Advertising Vocational Curriculum',
    client: 'Bali WISE Non-Profit',
    category: 'Non-Profit & Vocational Education',
    filterTag: 'edu',
    period: 'November 2022',
    location: 'Nusa Dua, Bali, Indonesia',
    role: 'Social Media Module Writer',
    image: '/images/looker-dashboard.webp',
    summary: 'Developed a comprehensive educational module on social media advertising for Bali WISE, empowering marginalized Indonesian women with practical, job-ready digital marketing skills.',
    deliverables: [
      'Complete pedagogical curriculum on social media advertising',
      'Theoretical frameworks, campaign summaries, and technical setups',
      'Hands-on quizzes and practical exercises for student assessment',
      'Empowerment-driven training material tailored for vocational learning',
    ],
    metrics: [
      { label: 'Impact', value: 'Women Empowerment' },
      { label: 'Scope', value: 'Full Curriculum' },
      { label: 'Modules', value: 'Theory & Practical' },
      { label: 'Location', value: 'Nusa Dua, Bali' },
    ],
    highlight: 'Distilled complex ad algorithms into accessible, empowering educational materials for women entering the workforce.',
  },
];

export default function InteractiveCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fb' | 'health' | 'edu'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.filterTag === activeFilter);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Proven Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 break-words">
              Featured <span className="text-gradient-rose">Case Studies</span> & Brand Work
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Real client campaigns where strategic targeting, systematic A/B testing, and data studio attribution delivered measurable impact.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fb', label: 'F&B & Restaurant Growth' },
              { id: 'health', label: 'Healthcare & Clinic' },
              { id: 'edu', label: 'Education & Impact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel overflow-hidden flex flex-col group border border-white/10 hover:border-rose-400/40"
              >
                {/* Image Container with hover zoom */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/85 text-rose-300 border border-rose-400/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Client & Period */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-bold text-white text-sm drop-shadow">{project.client}</span>
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">{project.period}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-rose-300 mb-1.5 uppercase tracking-wider">
                      {project.role}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{m.label}</div>
                          <div className="text-xs font-extrabold text-white truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-rose-300/80 uppercase tracking-wider">Key Execution:</div>
                      {project.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 italic">
                      {project.location}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300 hover:text-rose-200 transition-colors cursor-pointer"
                    >
                      <span>Full Scope & Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-slate-950 border border-rose-400/30 relative rounded-3xl shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
                  <span className="font-semibold text-rose-300">{selectedProject.client}</span>
                  <span>•</span>
                  <span>{selectedProject.period}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>

                {/* Project Image */}
                <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover" 
                  />
                </div>

                {/* Strategy Highlight */}
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 mb-6">
                  <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">Strategic Highlight:</div>
                  <p className="text-sm text-slate-200">{selectedProject.highlight}</p>
                </div>

                {/* Complete Deliverables */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Full Scope of Execution:</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA inside modal */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">Want similar results for your brand?</span>
                  <a
                    href="https://wa.me/6281259488390?text=Hi%20Alifah,%20I'm%20interested%20in%20discussing%20a%20digital%20marketing%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Discuss This Project</span>
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
