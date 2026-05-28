/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Layers, Rocket, Zap, Search, Layout, CheckCircle, Code, Shield, ArrowRight } from 'lucide-react';
import { generateMetadata, getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo';

const serviceData = {
  name: 'Next.js Development Services',
  description: 'Enterprise React web applications built with Next.js App Router, featuring lightning-fast page loading speeds, high-security server configurations, and customized Core Web Vitals speed tuning.',
  urlPath: '/services/nextjs-development'
};

export const metadata = generateMetadata({
  title: 'Premium Next.js Development Company | Custom React Apps',
  description: 'Hire top Next.js developers to build lightning-fast, SEO-optimized React websites. We focus on Core Web Vitals, Server Components, and scale-ready code.',
  path: serviceData.urlPath,
  keywords: ['enterprise nextjs development services', 'hire nextjs developer india', 'nextjs page speed optimization agency', 'nextjs server components seo benefits', 'nextjs core web vitals speed optimization']
});

const faqs = [
  {
    question: "Why is Next.js the best framework for web application SEO?",
    answer: "Next.js executes Server-Side Rendering (SSR) and Static Site Generation (SSG) out-of-the-box, serving pre-rendered HTML to search engine web crawlers. This guarantees that your headings, body copy, and metadata are indexed instantly without reliance on complex client-side Javascript execution."
  },
  {
    question: "How do you optimize Core Web Vitals (LCP, CLS, FID) in Next.js?",
    answer: "We implement dynamic font declarations, optimize next/image compression ratios, execute code-splitting strategies, remove unused JS modules, and leverage CDN caching edges. This keeps Largest Contentful Paint (LCP) under 1.5 seconds and Cumulative Layout Shift (CLS) at 0."
  },
  {
    question: "Do you build custom Headless E-commerce stores with Next.js?",
    answer: "Yes, we build high-speed headless stores by combining custom Next.js frontends with Shopify, WooCommerce, or BigCommerce backends via GraphQL API integrations, maximizing conversion rates by cutting load times to sub-seconds."
  }
];

export default function NextjsDevelopmentPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Next.js Development', item: serviceData.urlPath }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
  const faqSchema = getFAQSchema(faqs);
  const serviceSchema = getServiceSchema(serviceData);

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader
        badge="Frontend Engineering"
        title="Next.js App"
        highlight="Development"
        subtitle="Unleash modern web performances. We engineer high-speed Next.js platforms optimized for Google Core Web Vitals and conversions."
        breadcrumb={['Home', 'Services', 'Next.js Development']}
      />

      {/* Grid Features */}
      <section className="py-20 container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">Technical Competencies</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 font-poppins">Designed for Page Rank and Conversions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We write production-grade Next.js systems utilizing Server Components, Optimized Asset loaders, and advanced static rendering paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-6">
              <Zap size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Sub-Second Load Times</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We leverage static routes generation (SSG) and incremental static regeneration (ISR) to pre-compile layout elements, bypassing heavy runtime server overheads.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-6">
              <Search size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">SEO Built-In Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next.js metadata API provides clean tag generation, dynamically setting canonical tags, hreflang tags, and rich schemas across infinite child routes.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
              <Layout size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Headless Commerce</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Decouple your storefront UI from complex administrative nodes. Build lightning-fast shopping cart structures that improve desktop and mobile UX conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Semantic SEO content block */}
      <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-slate-100 mb-6 leading-tight">
              Enterprise Next.js Web Systems Engineered for Speed
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We design digital systems matching modern semantic web practices. By shifting code structures from client-side JS executing scripts to React Server Components (RSC), we reduce raw bundle weights by up to 50%.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Your site's indexability relies on clean HTML output. Our Next.js setup guarantees that all search engines can crawl, render, and rank your website instantaneously.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">100/100 Lighthouse Performance</h4>
                  <p className="text-slate-400 text-sm">We strictly optimize script loading orders and CSS sizes to pass all Core Web Vital thresholds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">API Decoupling & Security</h4>
                  <p className="text-slate-400 text-sm">Next.js middleware routes proxy backend API connections seamlessly to keep credentials hidden.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12">
              <h3 className="text-2xl font-black font-poppins text-slate-100 mb-6">Optimized Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Code size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">App Router (RSC)</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Layers size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">ISR Dynamic Sites</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Rocket size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Vercel Deployments</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Shield size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Strict Content Policy</span>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-800/80 pt-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Need to hire Next.js experts?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition">
                  Contact Next.js Engineers <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQs Section */}
      <section className="py-20 border-t border-slate-900 bg-slate-900/10">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">Common Queries</span>
            <h2 className="text-2xl md:text-4xl font-black mt-4 mb-4 font-poppins">Next.js Development FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="text-base md:text-lg font-bold font-poppins text-slate-200 pr-4">
                    {faq.question}
                  </h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 group-open:rotate-180 transition duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1 border-t border-slate-800/40 text-slate-400 text-sm leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-20 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container-custom max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 px-8 py-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.12),transparent_60%)] pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-slate-100 mb-4 leading-tight">
              Ready to Upgrade to Next.js or Build an Enterprise Web Application?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Connect with our Next.js engineering team to audit your current performance parameters and map out an optimization plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-center">
                Hire Next.js Developers
              </Link>
              <Link href="/portfolio" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-center">
                See Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
