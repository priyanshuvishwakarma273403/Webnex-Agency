/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  Cpu, Layout, Code, HelpCircle, FileText, ArrowUpRight, Palette, Layers, Flame
} from 'lucide-react';

export default function TailwindPerfBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/tailwind_perf_blog.png" 
          alt="Tailwind CSS Performance Tuning" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sky-400 font-bold mb-6 hover:text-sky-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-sky-500/10 border border-sky-500/30 text-sky-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Design
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Next.js Development
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            Tailwind CSS Performance Tuning for Production Next.js Builds
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-sky-400" /> Frontend Lead</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-sky-400" /> March 28, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-sky-400" /> 16 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-sky-400 pl-6">
            Tailwind CSS has become the leading standard for styling modern web applications. However, failing to optimize your JIT configuration, purge settings, and design token architectures can lead to bloated CSS files and severe Cumulative Layout Shift (CLS).
          </p>

          <p>
            When building applications under the **Next.js Development** framework, styling performance plays a massive role in passing Google's Core Web Vitals. During **Full Stack Development** cycles, developers often import UI libraries that ship pre-packaged CSS files, inadvertently introducing layout bottlenecks. For organizations focusing on **SEO Optimized Website Development**, keeping stylesheet sizes under 20KB is critical to achieve lightning-fast loading speeds on mobile networks. In this manual, we discuss how to tune Tailwind CSS to its limit.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4 flex items-center gap-3">
              <Flame className="text-sky-400" /> 1. How the JIT Engine Can Generate CSS Bloat
            </h2>
            <p>
              Tailwind's Just-In-Time (JIT) compiler reads files matching specified glob patterns to generate utility styles dynamically. While this prevents shipping unused styles, it introduces risks when dynamic class construction is utilized.
            </p>
            <p>
              In **Next.js Development**, constructing classes using string interpolation (e.g., <code>className=&#123;&#96;bg-$&#123;color&#125;-500&#96;&#125;</code>) prevents Tailwind from identifying the complete class name statically. As a result, developers are forced to add safelisted classes, which leads to large CSS bundles that cannot be purged automatically.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-sky-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Anti-Pattern vs Recommended Style</span>
                <span className="text-xs font-bold bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/25">Best Practice</span>
              </div>
{`// ❌ BAD: Dynamic string interpolation that breaks static analysis
export function Badge({ variant }) {
  return <span className={\`text-xs px-2 py-1 bg-\${variant}-100 text-\${variant}-800\`}>Active</span>;
}

//  GOOD: Mapping absolute, static class strings
const VARIANT_MAPS = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  error: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export function Badge({ variant }) {
  return (
    <span className={\`text-xs px-2 py-1 rounded-md border \${VARIANT_MAPS[variant]}\`}>
      Active
    </span>
  );
}`}
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4 flex items-center gap-3">
              <Palette className="text-sky-400" /> 2. Designing Premium HSL System Themes
            </h2>
            <p>
              A hallmark of professional, state-of-the-art layout design is semantic theme variables. Instead of hardcoding generic color tokens like <code>bg-blue-600</code>, we implement a flexible design system using HSL channels mapped inside <code>globals.css</code>.
            </p>
            <p>
              This is incredibly useful when building complex frontends, such as visual interfaces for **AI Development** suites, dashboards for **AI Agent Development** systems, or multi-tenant database panels integrated with backend environments like **Spring Boot Development** platforms.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-sky-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Theme Setup: tailwind.config.js</span>
                <span className="text-xs font-bold bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/25">Configuration</span>
              </div>
{`module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'hsl(var(--brand-primary) / <alpha-value>)',
          accent: 'hsl(var(--brand-accent) / <alpha-value>)',
          background: 'hsl(var(--brand-background) / <alpha-value>)',
        }
      }
    }
  }
}`}
            </div>

            <p>
              By utilizing CSS variables with HSL configurations, you can transition dynamically between light and dark modes or implement white-label custom themes for SaaS clients without generating redundant CSS rule structures.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4 flex items-center gap-3">
              <Layers className="text-sky-400" /> 3. Performance Metrics Benchmarks
            </h2>
            <p>
              Analyzing real stylesheet sizes and compilation metrics shows the dramatic advantages of properly tuned Tailwind environments compared to raw, un-purged style modules.
            </p>

            <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl bg-slate-900/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-xs font-bold uppercase tracking-wider text-slate-200">
                    <th className="p-4">Styling Strategy</th>
                    <th className="p-4">CSS Bundle Size</th>
                    <th className="p-4">Core Web Vitals Impact</th>
                    <th className="p-4">Render Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-sm">
                  <tr>
                    <td className="p-4 font-bold text-white">Default Tailwind Build</td>
                    <td className="p-4 text-amber-400">45 KB - 80 KB</td>
                    <td className="p-4">Moderate FCP delays</td>
                    <td className="p-4">~22ms</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Un-purged Framework UI CSS</td>
                    <td className="p-4 text-rose-500">250 KB+</td>
                    <td className="p-4">Severe mobile indexing delays</td>
                    <td className="p-4">~68ms</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Optimized HSL Tailwind Build</td>
                    <td className="p-4 text-emerald-400">&lt; 15 KB</td>
                    <td className="p-4">Excellent mobile/desktop FCP (100 Lighthouse)</td>
                    <td className="p-4">~4ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4 flex items-center gap-3">
              <Zap className="text-sky-400" /> 4. Five-Step Production Checklist
            </h2>
            <p>
              Follow these structural styling guidelines to maintain high page-speed benchmarks across all layout structures:
            </p>

            <div className="space-y-4 mt-6">
              {[
                { step: 'Step 1: Eliminate CSS Imports', desc: 'Avoid importing heavy third-party UI framework CSS directly. Instead, extract design elements into local Tailwind variables.' },
                { step: 'Step 2: Utilize Static Classes', desc: 'Always use complete class name literals. Avoid JavaScript string operations that assemble Tailwind utility names at runtime.' },
                { step: 'Step 3: Setup HSL Channels', desc: 'Define core colors using HSL values in globals.css, allowing clean dynamic alpha configurations (opacity).' },
                { step: 'Step 4: Enable Modern Compression', desc: 'Configure Gzip or Brotli at the server or CDN level to compress stylesheets during deployment.' },
                { step: 'Step 5: Leverage Server Components', desc: 'Use React Server Components to render initial UI nodes on the server, serving static HTML styles instantly.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-slate-900/30 border border-slate-805/50 rounded-2xl hover:border-sky-500/20 transition">
                  <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-bold text-sky-400 flex-shrink-0 text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.step}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Designing light, highly optimized style systems is critical to build modern digital experiences that rank high on Google search engines. By purging unused utility paths and mapping system variables dynamically, you keep page loading speeds under 1 second.
            </p>
            <p>
              Looking to build high-performance web products? Contact WebNex's frontend optimization experts to schedule an audit of your codebase styling architecture today.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          {/* Share Block */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-sky-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-sky-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-sky-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          {/* Tech Specs */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Cpu size={16} className="text-sky-400" /> Design Engine
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> HSL Color Systems
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Brotli Compression
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> JIT Purging Engine
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> 0 KB Layout Styles
              </li>
            </ul>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-sky-900/50 border border-sky-500/20 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_60%)] pointer-events-none" />
            <Sparkles className="text-sky-400 mx-auto mb-4" size={28} />
            <h4 className="text-lg font-black text-white mb-2 font-poppins">Need a Fast Web System?</h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              We design premium, ultra-responsive interfaces that score 100% on search engine speed parameters.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 justify-center w-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-bold text-sm py-3 px-4 rounded-xl transition shadow-lg"
            >
              Get Free Audit <ArrowUpRight size={14} />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
