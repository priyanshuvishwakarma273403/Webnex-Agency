/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  TrendingUp, Cpu, Lock, Key, Eye, ArrowUpRight 
} from 'lucide-react';

export default function SecurityBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/security_blog.png" 
          alt="Website Security & SSL" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-red-400 font-bold mb-6 hover:text-red-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Security
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Compliance
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            The Importance of Website Security: Hardening Your Digital Assets
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-red-400" /> Security Analyst</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-red-400" /> Feb 02, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-red-400" /> 15 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-red-400 pl-6">
            In an era of automated, AI-driven cybersecurity threats, basic firewalls are no longer sufficient. Learn how to configure security headers, SSL encryption parameters, and CORS configurations.
          </p>

          <p>
            Google marks all non-HTTPS routes as 'Not Secure,' warning users and penalizing rankings. Implementing strict security headers is critical to prevent Cross-Site Scripting (XSS) and code injections.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. Enforcing SSL/TLS Security
            </h2>
            <p>
              SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) encrypt data between browsers and web servers.
            </p>
            <p>
              Beyond the lock icon, secure configurations require disabling deprecated TLS 1.0/1.1 protocols and forcing TLS 1.3 with strict AES-256 cipher suites.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-red-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: Next.js Security Headers Config</span>
                <span className="text-xs font-bold bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/25">next.config.js</span>
              </div>
{`const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];`}
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Website security is an ongoing operational commitment. Hardening your code, enforcing SSL protocols, and restricting API access points is essential to protect customer records and trust.
            </p>
            <p>
              Need to audit your platform security? Reach out to WebNex's security engineers to plan a vulnerability scan.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-red-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-red-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-red-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Lock size={16} className="text-red-400" /> Security Stack
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> TLS 1.3 Enforcements
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> CSP Header Rules
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> JWT API Protection
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> CORS Access Whitelists
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
