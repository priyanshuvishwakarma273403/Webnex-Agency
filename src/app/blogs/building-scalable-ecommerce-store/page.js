/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Building a Scalable E-commerce Store: Headless Next.js Blueprint',
  description: 'Scaling past 1,000 orders a day requires more than basic hosting—it requires a robust headless architecture.',
  path: '/blogs/building-scalable-ecommerce-store',
  ogImage: '/images/blogs/ecommerce_blog.png'
});
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  TrendingUp, Cpu, ShoppingCart, Database, Globe, ArrowUpRight 
} from 'lucide-react';

export default function EcommerceBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/ecommerce_blog.png" 
          alt="E-commerce Store Development" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-yellow-400 font-bold mb-6 hover:text-yellow-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              E-Commerce
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Conversion Rate
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            Building a Scalable E-commerce Store: Headless Next.js Blueprint
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-yellow-400" /> Retail Strategist</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-yellow-400" /> March 14, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-yellow-400" /> 16 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-yellow-400 pl-6">
            Scaling past 1,000 orders a day requires more than basic monolithic e-commerce hosting. Learn why a decoupled, headless Next.js frontend is essential to optimize conversion speeds.
          </p>

          <p>
            Every 100ms delay in your checkout load speed cuts conversion rates by up to 7%. Monolithic setups load full database query loops for simple product views, bottlenecking transactions during flash sales. Decoupling the checkout system solves this.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. What is Headless E-commerce?
            </h2>
            <p>
              Headless e-commerce decouples the presentation layer (the frontend website) from the database engine (Shopify, WooCommerce, or BigCommerce).
            </p>
            <p>
              Next.js serves as the frontend storefront, requesting catalog details via fast GraphQL APIs and rendering product pages statically. Cart states and payment transactions connect dynamically to engines (like Stripe), ensuring robust operations.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-yellow-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: Shopify GraphQL Product Fetch</span>
                <span className="text-xs font-bold bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/25">Shopify API</span>
              </div>
{`const query = \`
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      images(first: 5) {
        edges { node { url altText } }
      }
      variants(first: 1) {
        edges { node { id priceV2 { amount currencyCode } } }
      }
    }
  }
\`;`}
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Headless Next.js storefronts give you absolute layout flexibility, maximum mobile load speed scores, and bulletproof security, maximizing transaction sales.
            </p>
            <p>
              Looking to deploy a headless store? Connect with WebNex's e-commerce architects to structure your custom migration proposal.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-yellow-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-yellow-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-yellow-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <ShoppingCart size={16} className="text-yellow-400" /> Retail Tech
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Shopify Headless APIs
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Decoupled Frontends
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Stripe Integrations
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Algolia Search indexing
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
