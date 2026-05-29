/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Building a Multi-Tenant SaaS Platform with Next.js App Router',
  description: 'Learn the core architecture to design, build, and deploy multi-tenant SaaS structures with Stripe subscriptions, secure middleware, and database isolation.',
  path: '/blogs/building-scalable-saas-platform-nextjs',
  ogImage: '/images/blogs/saas_platform_blog.png'
});
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  TrendingUp, Cpu, Database, Server, GitBranch, ArrowUpRight 
} from 'lucide-react';

export default function SaaSPlatformBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/saas_platform_blog.png" 
          alt="SaaS Platform Development" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-indigo-400 font-bold mb-6 hover:text-indigo-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Development
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              SaaS Scale
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            Building a Multi-Tenant SaaS Platform with Next.js App Router
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-indigo-400" /> SaaS Specialist</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-indigo-400" /> April 20, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-indigo-400" /> 16 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-indigo-400 pl-6">
            Designing a SaaS platform requires addressing multi-tenancy configurations, subscription middleware checks, database isolations, and localized subdomains.
          </p>

          <p>
            When engineers build SaaS tools, they must decide between a shared database with tenant column IDs (logical isolation) or separate databases per tenant (physical isolation). Next.js provides the ideal routing architecture to intercept tenant requests, verify Stripe subscription tokens in middleware, and render sub-second dashboards dynamically.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. Intercepting Tenant Routes in Middleware
            </h2>
            <p>
              Next.js middleware runs before any page compiles or loads. This allows us to inspect requests, extract domain subdomains (e.g. `client.webnex.co.in`), and rewrite routes to internal dynamic folders.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: Next.js Multi-Tenant Middleware</span>
                <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/25">Middleware</span>
              </div>
              <pre className="text-xs font-mono text-indigo-300 leading-relaxed">
{`// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host');
  
  // Extract subdomain
  const currentSubdomain = hostname.replace('.webnex.co.in', '');
  
  if (currentSubdomain && currentSubdomain !== 'www') {
    // Rewrite internal route to tenant folder
    return NextResponse.rewrite(
      new URL(\`/tenants/\${currentSubdomain}\${url.pathname}\`, req.url)
    );
  }
  return NextResponse.next();
}`}
              </pre>
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Next.js dynamic routing middleware simplifies the deployment of multi-tenant SaaS. Integrating this layout with robust database isolations guarantees scale-ready performance.
            </p>
            <p>
              Want to scale your SaaS business platform? Consult WebNex's software engineering team to design your multi-tenant stack.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-indigo-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-indigo-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-indigo-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Cpu size={16} className="text-indigo-400" /> SaaS Tech
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Tenant subdomains
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Middleware routers
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> DB Pool Isolations
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Stripe social billing
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
