import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, PieChart, Sparkles, BookOpen, Layers, Heart } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: PieChart,
      title: 'Commercial Financial Acumen',
      description: 'Having managed commercial balance sheets and cash flows in banking, I treat ad spend as an investment that must produce clear EBITDA and ROAS, not just vanity impressions.',
      tag: 'Banking Roots',
      border: 'border-rose-500/20',
      badgeBg: 'bg-rose-500/10 text-rose-300',
      iconColor: 'text-rose-400',
    },
    {
      icon: Target,
      title: 'Full-Funnel Meta Ads Precision',
      description: 'End-to-end Facebook & Instagram campaigns, custom audiences, Lookalike segmentation, Campaign Budget Optimization (CBO), and meticulous A/B creative testing.',
      tag: 'Meta Ads',
      border: 'border-purple-500/20',
      badgeBg: 'bg-purple-500/10 text-purple-300',
      iconColor: 'text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: '100% Data Studio Transparency',
      description: 'No guessing or hidden numbers. Every client receives structured Looker Studio reports tracking cost-per-click, cost-per-acquisition, and revenue contribution weekly.',
      tag: 'Reporting',
      border: 'border-pink-500/20',
      badgeBg: 'bg-pink-500/10 text-pink-300',
      iconColor: 'text-pink-400',
    },
    {
      icon: Sparkles,
      title: 'Creative Content Strategy',
      description: 'High-converting ad copy, visual design direction for Instagram & Facebook feeds, promo angles, and engaging hooks crafted to resonate with Indonesian consumer psychographics.',
      tag: 'Creative',
      border: 'border-amber-500/20',
      badgeBg: 'bg-amber-500/10 text-amber-300',
      iconColor: 'text-amber-300',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
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
              The Unique Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 break-words">
              Where <span className="text-gradient-rose">Financial Discipline</span> Meets Creative Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Why work with a digital marketer who started in commercial banking? Because I look at your ad account through the lens of a profit-and-loss statement.
            </p>
          </motion.div>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Story Card */}
          <motion.div 
            className="lg:col-span-5 glass-panel p-8 relative overflow-hidden border border-rose-500/20"
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Story</h3>
                <p className="text-xs text-rose-300/80">Mom, Banker, Digital Marketer ✨</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                After graduating from <strong>Bogor Agricultural University (IPB)</strong>, I began my professional journey in commercial banking at <strong>PT Bank Syariah Indonesia Tbk (Bank BRISyariah)</strong> and <strong>BNI Life</strong>. That experience instilled in me a deep respect for cash flow and measurable returns.
              </p>
              <p>
                As marketing shifted fundamentally into digital channels, I saw the immense power of paid customer acquisition. I graduated from the comprehensive <strong>RevoU Full Stack Digital Marketing</strong> program to combine my financial analytical foundation with Meta Ads strategy.
              </p>
              <p>
                As a proud stay-at-home mom and forever learner, I bring empathy, obsessive attention to detail, and a relentless commitment to helping brands thrive.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-rose-300/70 uppercase tracking-wider">Education</div>
                <div className="text-sm font-bold text-white">IPB University & RevoU</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-rose-300/70 uppercase tracking-wider">Specialty</div>
                <div className="text-sm font-bold text-rose-300">Meta Ads & Performance</div>
              </div>
            </div>
          </motion.div>

          {/* Pillars 4-grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  className={`glass-panel p-6 border ${pillar.border} hover:border-rose-400/40 transition-all duration-300`}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10">
                      <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${pillar.badgeBg}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
