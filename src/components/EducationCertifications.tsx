import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function EducationCertifications() {
  const credentials = [
    {
      institution: 'RevoU',
      program: 'Full Stack Digital Marketing',
      period: 'May 2022 - August 2022',
      badge: 'Certified Full Stack Marketer',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
      description: 'Intensive post-graduate immersion covering end-to-end paid acquisition (Meta Ads, Google Ads), SEO, content marketing, CRM, attribution modeling, and data visualization in Google Data Studio / Looker Studio.',
      highlights: [
        'Hands-on client campaign management via RevoU Labs (Kowara Eatery & Indental Clinic)',
        'Budget management, A/B creative testing, and real-time ROAS optimization',
        'Direct pitching and stakeholder presentation reporting',
      ],
    },
    {
      institution: 'Bogor Agricultural University (IPB)',
      program: "Bachelor's Degree in Fisheries Sciences & Management",
      period: 'September 2012 - August 2016',
      badge: 'Bachelor Graduate',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
      description: 'One of Indonesia’s premier state universities. Developed strong analytical research discipline, quantitative data methodology, project management, and scientific rigor.',
      highlights: [
        'Scientific research methodology and data gathering',
        'Resource management, analytical evaluation, and thesis defense',
        'Foundation for subsequent analytical career in commercial banking & performance marketing',
      ],
    },
  ];

  return (
    <section className="py-20 relative border-t border-white/5 bg-slate-950/20">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic & Professional Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Education & <span className="text-gradient-rose">Credentials</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Rigorous analytical university foundation paired with specialized digital performance certification.
            </p>
          </motion.div>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.institution}
              className="glass-panel p-6 sm:p-8 border border-white/10 hover:border-rose-400/40 flex flex-col justify-between"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 font-semibold">{item.period}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.institution}
                </h3>
                <p className="text-sm font-semibold text-rose-300 mb-4">
                  {item.program}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <Award className="w-4 h-4 text-amber-300" />
                <span>Verified Academic & Professional Credential</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
