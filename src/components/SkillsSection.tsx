import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Palette, Briefcase, Check, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Meta Ads & Paid Acquisition',
      icon: Target,
      tag: 'Primary Core',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
      iconColor: 'text-rose-400',
      skills: [
        { name: 'Facebook & Meta Ads Manager', level: 'Advanced' },
        { name: 'Campaign Budget Optimization (CBO/ABO)', level: 'Advanced' },
        { name: 'A/B Split Testing (Copy & Creative)', level: 'Advanced' },
        { name: 'Custom & Lookalike Audiences', level: 'Advanced' },
        { name: 'Display Ads & Retargeting Funnels', level: 'Proficient' },
      ],
    },
    {
      title: 'Analytics & Reporting',
      icon: BarChart2,
      tag: 'Data Rigor',
      badgeColor: 'bg-pink-500/10 text-pink-300 border-pink-500/25',
      iconColor: 'text-pink-400',
      skills: [
        { name: 'Looker Studio / Google Data Studio', level: 'Advanced' },
        { name: 'ROAS & CPA Attribution Analysis', level: 'Advanced' },
        { name: 'Audience Demographics & CTR Tracking', level: 'Advanced' },
        { name: 'Weekly & Monthly Owner Reporting', level: 'Advanced' },
        { name: 'Cash Flow & Statement Financial Review', level: 'Expert (ex-Banker)' },
      ],
    },
    {
      title: 'Creative & Content Strategy',
      icon: Palette,
      tag: 'Visual Hook',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
      iconColor: 'text-purple-400',
      skills: [
        { name: 'Instagram Content Planning & Feeds', level: 'Advanced' },
        { name: 'Ad Creative Design & Layout', level: 'Proficient' },
        { name: 'High-Converting Copywriting', level: 'Proficient' },
        { name: 'Curriculum & Educational Module Writing', level: 'Published (Bali WISE)' },
        { name: 'Consumer Angle & Hook Research', level: 'Advanced' },
      ],
    },
    {
      title: 'Commercial Advisory & Client Management',
      icon: Briefcase,
      tag: 'Banking Roots',
      badgeColor: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
      iconColor: 'text-amber-300',
      skills: [
        { name: 'High-Value Client Relationship Management', level: '100+ Accounts/mo' },
        { name: 'Commercial Loan & Financing Deals', level: 'Banking Background' },
        { name: 'Stakeholder Presentations & Pitches', level: 'Top 3 BRISyariah 2020' },
        { name: 'Financial Advisory & Wealth Planning', level: 'BNI Life & BSI' },
        { name: 'Cross-functional Collaboration', level: 'Advanced' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Core Competencies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 break-words">
              Comprehensive <span className="text-gradient-rose">Skill Stack</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Combining performance advertising tools, data attribution software, and commercial financial analysis.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-6 sm:p-8 border border-white/10 hover:border-rose-400/40 transition-all duration-300"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <span className={`shrink-0 whitespace-nowrap text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                    {cat.tag}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-rose-200/80 bg-white/5 px-2 py-0.5 rounded-md">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
