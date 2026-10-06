import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: 'Digital Marketing' | 'Banking & Finance';
  badgeColor: string;
  points: string[];
  award?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Bonsai Sushi',
    role: 'Digital Marketing Specialist',
    period: 'March 2023 - April 2023',
    duration: '2 mos',
    location: 'Cibubur, Jakarta, Indonesia',
    type: 'Digital Marketing',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    points: [
      'Managed end-to-end Facebook Ads and display ads campaign creation, including A/B testing, targeting setup, optimization, and budget allocation.',
      'Created weekly and monthly reporting for the Facebook Ads channel and presented results directly to the business owner.',
      'Led social media strategy for Bonsai Sushi: managed Instagram, formulated content planning, and designed high-impact creative visuals.',
      'Provided strategic growth insights and actionable recommendations to expand brand reach.',
    ],
  },
  {
    company: 'Kowara Eatery Group',
    role: 'Performance Marketing (RevoU Labs)',
    period: 'January 2023 - February 2023',
    duration: '2 mos',
    location: 'Jakarta, Indonesia',
    type: 'Digital Marketing',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    points: [
      'Managed Kowara Eatery Group’s Facebook Ads account as part of RevoU Labs for an expanding F&B business in Jakarta.',
      'Executed full campaign lifecycle: targeting setup, A/B creative testing, and proactive budget allocation.',
      'Developed and maintained interactive Google Data Studio dashboards for weekly stakeholder reporting.',
      'Delivered strategic optimization roadmaps to executive stakeholders.',
    ],
  },
  {
    company: 'Indental Clinic Surabaya',
    role: 'Performance Marketing (RevoU Labs)',
    period: 'October 2022 - December 2022',
    duration: '3 mos',
    location: 'Surabaya, East Java, Indonesia',
    type: 'Digital Marketing',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    points: [
      'Managed Facebook Ads account for a premier Surabaya dental clinic specializing in dental care and cosmetic dentistry.',
      'Constructed geo-targeted campaigns in East Java with A/B testing across ad imagery and patient value hooks.',
      'Built weekly and monthly Google Data Studio automated reporting for clinic stakeholders.',
    ],
  },
  {
    company: 'Bali WISE',
    role: 'Social Media Module Writer',
    period: 'November 2022',
    duration: '1 mo',
    location: 'Nusa Dua, Bali, Indonesia',
    type: 'Digital Marketing',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
    points: [
      'Authored the social media advertising curriculum for Bali WISE (a non-profit empowering marginalized women through vocational education).',
      'Engineered a complete educational module covering social media ad strategies, technical theory, campaign summaries, and interactive quizzes.',
    ],
  },
  {
    company: 'PT Bank Syariah Indonesia Tbk. (Bank BRISyariah)',
    role: 'Account Officer',
    period: 'June 2017 - January 2021',
    duration: '3 yrs 7 mos',
    location: 'Jakarta, Indonesia',
    type: 'Banking & Finance',
    badgeColor: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
    award: 'Top 3 Best Achievement Account Officer PT Bank BRISyariah Tbk (2020) & Photo Talent of 2019 Annual Report',
    points: [
      'Worked with consumer and commercial customers on loan financing products.',
      'Reviewed and analyzed cash flow, financial statements, and complete credit reports for 10 commercial accounts monthly.',
      'Maintained proactive communication and portfolio management for an existing database of 100+ clients per month.',
      'Awarded Top 3 Best Achievement of Account Officer PT Bank BRISyariah Tbk nationwide in 2020.',
      'Selected as talent model for the official 2019 Annual Report of PT Bank BRISyariah Tbk.',
    ],
  },
  {
    company: 'BNI Life',
    role: 'Marketing Specialist',
    period: 'November 2016 - March 2017',
    duration: '5 mos',
    location: 'Jakarta, Indonesia',
    type: 'Banking & Finance',
    badgeColor: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
    points: [
      'Provided personalized financial advisory and wealth solutions across Bank BNI Branch offices.',
      'Managed communications and built relationships with 30 existing customers per month.',
      'Achieved monthly sales targets by closing new accounts with up to Rp 500 million per month.',
    ],
  },
];

export default function ExperienceTimeline({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel;
  const [filter, setFilter] = useState<'All' | 'Digital Marketing' | 'Banking & Finance'>('All');

  const filtered = filter === 'All' 
    ? experiences 
    : experiences.filter(e => e.type === filter);

  return (
    <section id="experience" className="py-16 sm:py-20 relative bg-slate-950/30">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Career Journey
            </span>
            <Heading className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 break-words">
              Professional <span className="text-gradient-rose">Track Record</span>
            </Heading>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From high-volume commercial banking financing to performance marketing campaign scaling.
            </p>
          </motion.div>

          {/* Toggle filter */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {(['All', 'Digital Marketing', 'Banking & Finance'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === tab 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-[#fff] shadow-lg shadow-rose-500/30' 
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline list */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.company + item.period}
              className="glass-panel p-6 sm:p-8 relative border border-white/10 hover:border-rose-400/40 transition-all duration-300"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ x: 4 }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{item.company}</h3>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-rose-300">{item.role}</p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 sm:shrink-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 font-medium text-slate-300">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.period}</span>
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300 whitespace-nowrap shrink-0">
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Award banner if exists */}
              {item.award && (
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center gap-2.5 text-xs text-amber-200 font-medium mb-4">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item.award}</span>
                </div>
              )}

              {/* Bullets */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
