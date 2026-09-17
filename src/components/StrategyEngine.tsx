import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, LineChart, CheckCircle2, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function StrategyEngine() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'Audience Architecture & Prospecting',
      icon: Sliders,
      badge: 'Step 1 • Targeting',
      description: 'Building segmented audience structures to avoid ad fatigue and ensure high-intent reach.',
      points: [
        'Custom Audiences based on website events & engagement',
        'Lookalike Audiences (1% - 3%) mapped to highest-value customer actions',
        'Geo-fenced local targeting for brick-and-mortar F&B and medical clinics',
        'Systematic exclusion lists to stop burning budget on existing converters',
      ],
      metricTag: 'Targeting Precision',
      activeColor: 'text-rose-400',
    },
    {
      id: '02',
      title: 'A/B Creative & Hook Testing',
      icon: Cpu,
      badge: 'Step 2 • Creative',
      description: 'Systematic creative experimentation to discover repeatable, winning ads with lower CPA.',
      points: [
        'Testing 3 distinct psychological hooks: Value/Offer, Pain Relief, Social Proof',
        'Ad format variation: High-res Single Imagery vs Carousel vs Short Form Video',
        'Fast kill threshold: Reallocating spend from losing ad sets within 48-72 hours',
        'Dynamic copy testing across headline, primary text, and Call-To-Action buttons',
      ],
      metricTag: 'Creative Efficiency',
      activeColor: 'text-purple-400',
    },
    {
      id: '03',
      title: 'Looker Studio Reporting & ROAS Scaling',
      icon: LineChart,
      badge: 'Step 3 • Attribution',
      description: 'Live performance visibility with clear business metrics, presented directly to founders and stakeholders.',
      points: [
        'Interactive Looker Studio / Google Data Studio automated dashboards',
        'Tracking true ROAS, Cost Per Acquisition (CPA), and Click-Through-Rate (CTR)',
        'Weekly & monthly strategic reviews with actionable next-step roadmaps',
        'Scaling budget into validated winners using Campaign Budget Optimization (CBO)',
      ],
      metricTag: 'Transparent ROI',
      activeColor: 'text-pink-400',
    },
  ];

  return (
    <section id="strategy" className="py-24 relative bg-slate-950/40 border-t border-white/5">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 break-words">
              The <span className="text-gradient-rose">Performance Marketing</span> Engine
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              How I turn marketing budgets into predictable, profitable customer acquisition through structured iteration.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Framework Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'bg-rose-500/15 border-rose-400/50 shadow-lg shadow-rose-500/10' 
                      : 'bg-slate-950/60 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md' 
                        : 'bg-slate-900 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${
                          isActive ? 'text-rose-300' : 'text-slate-500'
                        }`}>
                          {step.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-500 font-bold">{step.id}</span>
                      </div>
                      <h3 className={`text-base font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Step Deep Dive & Looker Studio Dashboard Visual */}
          <div className="lg:col-span-7">
            <motion.div 
              key={activeStep}
              className="glass-panel p-6 sm:p-8 relative overflow-hidden border border-rose-500/20"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider">
                    {steps[activeStep].metricTag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-rose-200 border border-white/15">
                  Phase {steps[activeStep].id}
                </span>
              </div>

              {/* Execution Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {steps[activeStep].points.map((pt, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Dashboard Preview Frame */}
              <div className="rounded-2xl overflow-hidden border border-white/10 relative group">
                <img 
                  src="/images/looker-dashboard.webp" 
                  alt="Looker Studio Meta Ads Performance Dashboard Mockup" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white drop-shadow">
                  <span className="font-semibold flex items-center gap-1.5 text-rose-200">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                    Looker Studio Live Attribution Model
                  </span>
                  <span className="text-[11px] text-slate-300">ROAS • CPA • CTR • Spend</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
