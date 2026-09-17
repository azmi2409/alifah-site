import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BarChart3, ArrowRight, Copy, Check, MapPin, Send, Sparkles, Heart } from 'lucide-react';

export default function HeroMotion() {
  const [copied, setCopied] = useState(false);
  const email = 'alifahazhar@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      (window as any).showToast?.('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      (window as any).showToast?.('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft romantic ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-rose-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-ambient" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status & Identity badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/30">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Stay-at-home Mom ✨
              </span>
              
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                <span className="pulse-dot" />
                Open for Projects
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Bekasi, West Java, ID
              </span>
            </div>

            {/* Headline with soft romantic chic typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-3 break-words">
              Hi, I'm <span className="text-gradient-rose">Alifah Azhar</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl lg:text-2xl font-semibold text-rose-200/90 mb-5 tracking-tight break-words">
              Performance Marketer & Meta Ads Specialist
            </p>

            {/* Pitch / Narrative */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
              Bridging the gap between <strong>rigorous financial discipline</strong> and <strong>high-converting paid acquisition</strong>. Former commercial banker managing a <span className="text-rose-300 font-semibold bg-rose-500/15 px-2 py-0.5 rounded border border-rose-500/30">Rp 10B+/month</span> financing portfolio, now empowering brands through precision Meta Ads, creative A/B testing, and transparent Looker Studio reporting.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a 
                href="#case-studies"
                className="w-full sm:w-auto btn-primary"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/6281259488390?text=Hi%20Alifah,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20digital%20marketing%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-whatsapp"
              >
                <Send className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto btn-secondary"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold text-sm">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">alifahazhar@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick credentials banner */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-rose-400/80 text-xs">Credentials:</span>
              <a 
                href="https://www.linkedin.com/in/alifahazhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-300 hover:text-sky-200 font-medium transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                LinkedIn Profile
              </a>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <CheckCircle className="w-4 h-4 text-rose-400" />
                RevoU Full Stack Graduate
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <Award className="w-4 h-4 text-amber-300" />
                IPB Graduate
              </span>
            </div>
          </motion.div>

          {/* Right Column: Visual Frame & Floating Badges */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Soft Rose & Lavender ambient halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/35 via-purple-500/25 to-pink-400/30 rounded-[2.5rem] blur-2xl -z-10" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-rose-300/30 shadow-2xl bg-slate-900 aspect-square group">
                <img 
                  src="/images/alifah.webp" 
                  alt="Alifah Azhar Nurhazmi - Digital Marketer & Stay at home mom"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Soft gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
                  <p className="text-xs font-medium text-rose-200 drop-shadow">Alifah Azhar Nurhazmi ✨</p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Award */}
              <motion.div 
                className="hidden sm:flex absolute -top-4 -right-4 sm:-right-6 glass-panel px-3.5 py-2.5 items-center gap-3 shadow-xl border border-amber-400/35 bg-slate-950/90 z-10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Top 3 Achievement</div>
                  <div className="text-[11px] text-amber-200 font-medium leading-tight">Bank BRISyariah 2020</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Meta Ads */}
              <motion.div 
                className="hidden sm:flex absolute -bottom-5 -left-4 sm:-left-6 glass-panel px-3.5 py-2.5 items-center gap-3 shadow-xl border border-rose-400/35 bg-slate-950/90 z-10"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Meta Ads Specialist</div>
                  <div className="text-[11px] text-rose-200 font-medium leading-tight">A/B Testing & ROAS</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Right Middle - Scale & Mom */}
              <motion.div 
                className="hidden sm:flex absolute bottom-12 -right-8 glass-panel px-3.5 py-2 flex items-center gap-2.5 shadow-xl border border-purple-400/35 bg-slate-950/90"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Rp 10B+/mo</div>
                  <div className="text-[10px] text-purple-200 leading-tight">Portfolio Handled</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
