import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Target, Activity } from 'lucide-react';

interface MetricItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const metrics: MetricItem[] = [
  {
    icon: TrendingUp,
    value: 'Banking',
    label: 'Commercial Background',
    description: 'Experience with cash flow and commercial credit analysis informs a disciplined approach to marketing.',
    gradient: 'from-rose-500/20 via-pink-500/5 to-transparent',
    iconColor: 'text-rose-400',
  },
  {
    icon: Award,
    value: 'Top 3',
    label: 'Best Achievement Officer',
    description: 'Awarded Top 3 Account Officer nationwide at Bank BRISyariah 2020 out of hundreds of peers.',
    gradient: 'from-amber-400/20 via-amber-400/5 to-transparent',
    iconColor: 'text-amber-300',
  },
  {
    icon: Target,
    value: '4+ Brands',
    label: 'Multi-Niche Campaigns',
    description: 'End-to-end Meta Ads across F&B dining, aesthetic medical clinics, and vocational education.',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    iconColor: 'text-purple-300',
  },
  {
    icon: Activity,
    value: '100%',
    label: 'Looker Studio Transparency',
    description: 'Automated weekly & monthly client reporting with real-time ROAS, CPA, and CTR transparency.',
    gradient: 'from-emerald-400/20 via-emerald-400/5 to-transparent',
    iconColor: 'text-emerald-400',
  },
];

export default function MetricsRibbon() {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/70 relative">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="relative glass-panel p-6 overflow-hidden group border border-white/10 hover:border-rose-400/40"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Gradient corner glow */}
                <div 
                  className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${item.gradient} rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} 
                />

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-rose-400/40 group-hover:bg-rose-500/10 transition-colors">
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-100 mb-1.5">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
