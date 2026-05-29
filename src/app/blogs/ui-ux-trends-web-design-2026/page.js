/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: '10 UI/UX Trends Re-Shaping Modern Web Design',
  description: 'From glassmorphism to 3D interactive scrolls, here are the top design trends that are capturing user attention this year.',
  path: '/blogs/ui-ux-trends-web-design-2026',
  ogImage: '/images/blogs/uiux_trends_blog.png'
});
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  TrendingUp, Cpu, Layout, PenTool, Palette, ArrowUpRight 
} from 'lucide-react';

export default function UIUXTrendsBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/uiux_trends_blog.png" 
          alt="UI/UX Design Trends" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-pink-400 font-bold mb-6 hover:text-pink-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Design
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              User Experience
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            10 UI/UX Trends Re-Shaping Modern Web Design
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-pink-400" /> Design Team</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-pink-400" /> April 28, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-pink-400" /> 14 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-pink-400 pl-6">
            Visual interfaces have shifted from simple flat boxes to immersive, layered environments. In this guide, we review the premium UI/UX design trends that dominate high-conversion web platforms.
          </p>

          <p>
            When a visitor lands on your site, they form an opinion on your brand within 50 milliseconds. Generic templates and browser-default colors immediately look cheap. Modern design systems require rich glassmorphism structures, tailored HSL color palettes, and micro-animations to create a premium feel.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. Glassmorphism & Depth Layouts
            </h2>
            <p>
              By combining semi-transparent background colors with active backdrop blurring, glassmorphic panels establish a clear layout hierarchy. Users perceive the transparent layers as floating elements, separating interactive forms from global page backgrounds.
            </p>
            
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-pink-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: CSS Glassmorphism Panel</span>
                <span className="text-xs font-bold bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/25">CSS Classes</span>
              </div>
{`.glass-panel {
  background: rgba(15, 23, 42, 0.45); /* Translucent slate background */
  backdrop-filter: blur(20px);         /* Core blur effect */
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle glass edge highlight */
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}`}
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              2. Tailored HSL Color Token Systems
            </h2>
            <p>
              Relying on standard HEX colors makes managing dark mode variations and brand styling highly complex. By defining color systems using HSL (Hue, Saturation, Lightness) tokens, developers can shift lightness percentages dynamically while preserving color harmony.
            </p>

            <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl bg-slate-900/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-xs font-bold uppercase tracking-wider text-slate-200">
                    <th className="p-4">Color Level</th>
                    <th className="p-4">HSL Token Variable</th>
                    <th className="p-4">Visual Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-sm">
                  <tr>
                    <td className="p-4 font-bold text-white">Brand Primary</td>
                    <td className="p-4 text-pink-400">`hsl(263, 100%, 69%)`</td>
                    <td className="p-4 text-slate-400">Vibrant indigo violet, establishes brand focus points.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Theme Accent</td>
                    <td className="p-4 text-pink-400">`hsl(194, 100%, 50%)`</td>
                    <td className="p-4 text-slate-400">High-contrast cyan, draws attention to key CTA nodes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Premium UI/UX is not just about aesthetics; it directly reduces user bounce rates, conveying professional brand authority that aligns with Google E-E-A-T trust signals.
            </p>
            <p>
              Looking to redesign your digital system? Connect with WebNex's UI/UX designers to audit your platform interface.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-pink-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-pink-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-pink-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Palette size={16} className="text-pink-400" /> Design Tokens
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Backdrop Blurs
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> HSL Color Tokens
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Micro-animations
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Layered Shadows
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
