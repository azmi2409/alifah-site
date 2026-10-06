import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import HeroDots from './HeroDots';

export default function HeroMotion() {
  const [copied, setCopied] = useState(false);
  const email = 'alifahazhar@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    setCopied(true);
    (window as Window & { showToast?: (message: string) => void }).showToast?.('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--hero-bg)] pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 -z-20 [background:var(--hero-glow)]" />
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(var(--hero-grid)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <HeroDots />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(290px,.8fr)] lg:gap-20">
          <div className="min-w-0">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium tracking-[.16em] text-stone-300 uppercase">
              <span className="inline-flex items-center gap-2 text-emerald-300"><span className="pulse-dot" />Available for projects</span>
              <span className="text-stone-500">/</span>
              <span>Bekasi, Indonesia</span>
            </div>

            <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] leading-[.98] font-semibold tracking-[-.065em] text-white">
              Marketing with <span className="font-serif font-normal italic tracking-[-.055em] text-rose-200">financial instinct.</span>
            </h1>
            <p className="mt-7 text-sm font-medium tracking-[.12em] text-rose-200 uppercase">Alifah Azhar Nurhazmi · Performance Marketer & Meta Ads Specialist</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
              Former commercial banker. Now turning disciplined investment thinking into sharper Meta campaigns, stronger creative tests, and reporting clients can act on.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#case-studies" className="btn-hero">
                Explore work <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="https://wa.me/6281259488390?text=Hi%20Alifah,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20digital%20marketing%20project!" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-rose-300 hover:text-rose-200">
                Let's talk <ArrowUpRight aria-hidden="true" className="ml-3 h-4 w-4" />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-stone-400">
              <span><strong className="font-semibold text-white">Banking background</strong> · Marketing focus</span>
              <button type="button" onClick={handleCopyEmail} className="inline-flex items-center gap-2 text-rose-200 underline decoration-rose-200/40 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-200" aria-label={copied ? 'Email copied' : `Copy ${email}`}>
                {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Copy aria-hidden="true" className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : email}
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[14rem] rounded-b-[1.5rem] border border-rose-200/20 bg-[var(--hero-portrait-bg)] shadow-[var(--shadow-card)]">
              <img src="/images/alifah.webp" alt="Portrait of Alifah Azhar Nurhazmi" width="460" height="460" className="h-full w-full object-cover object-top" loading="eager" fetchPriority="high" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100e15]/70 via-transparent to-transparent" />
            </div>
            <div className="keep-dark absolute right-4 bottom-5 left-4 flex items-end justify-between gap-4 text-white">
              <span className="font-serif text-2xl italic sm:text-3xl">Alifah Azhar</span>
              <span className="text-right text-[10px] leading-relaxed tracking-[.15em] uppercase text-rose-100">Banking roots<br />Creative growth</span>
            </div>
            <span aria-hidden="true" className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-rose-200/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
