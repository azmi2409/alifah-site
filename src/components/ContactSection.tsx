import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import AuroraGL from './AuroraGL';

export default function ContactSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'alifahazhar@gmail.com';
  const phone = '081259488390';
  const waUrl = 'https://wa.me/6281259488390?text=Hi%20Alifah,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20digital%20marketing%20opportunity!';

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        (window as any).showToast?.('Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        (window as any).showToast?.('Phone number copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (type === 'email') {
        setCopiedEmail(true);
        (window as any).showToast?.('Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        (window as any).showToast?.('Phone number copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="site-container">
        
        {/* Main CTA Banner */}
        <div className="glass-panel p-8 sm:p-14 border border-rose-400/25 relative isolate overflow-hidden mb-12">
          <AuroraGL className="-z-10" />
          <div className="relative max-w-3xl mx-auto text-center">
            
            <motion.div
            initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Let's Build Something Great Together
              </span>
              
              <Heading className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 break-words">
                Ready to Scale Your Paid Acquisition with <span className="text-gradient-rose">Real ROI</span>?
              </Heading>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                "I’m a forever learner and welcome any opportunity on things to do that challenges me. Feel free to reach me at any time! :)"
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-8 py-4 text-base shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Start WhatsApp Chat</span>
                </a>

                <a
                  href={`mailto:${email}?subject=Inquiry%20from%20Portfolio%20Website`}
                  className="btn-primary px-8 py-4 text-base shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Email */}
          <motion.div 
            className="glass-panel p-6 border border-white/10 hover:border-rose-400/40 flex flex-col justify-between"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/25">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-rose-300/80 uppercase tracking-wider">Email Address</div>
                <div className="text-sm font-bold text-white break-all">{email}</div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a 
                href={`mailto:${email}`}
                className="text-xs font-semibold text-rose-300 hover:text-rose-200 transition-colors"
              >
                Send Message
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(email, 'email')}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Phone / WhatsApp */}
          <motion.div 
            className="glass-panel p-6 border border-white/10 hover:border-emerald-400/40 flex flex-col justify-between"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-300/80 uppercase tracking-wider">Mobile & WhatsApp</div>
                <div className="text-sm font-bold text-white">+62 812 5948 8390</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                Open WhatsApp
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(phone, 'phone')}
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </motion.div>

          {/* Card 3: LinkedIn & Location */}
          <motion.div 
            className="glass-panel p-6 border border-white/10 hover:border-sky-400/40 flex flex-col justify-between"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/25">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-sky-300/80 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-sm font-bold text-white">alifahazhar</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a 
                href="https://www.linkedin.com/in/alifahazhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
