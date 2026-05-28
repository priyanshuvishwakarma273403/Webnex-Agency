/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Search, Globe, Code, FileText, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { generateMetadata, getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo';

const serviceData = {
  name: 'SEO Optimized Website Development Services',
  description: 'Technical SEO website development focusing on semantic HTML, JSON-LD structured schemas, high-efficiency web loading, and mobile performance benchmarks to rank #1 on Google.',
  urlPath: '/services/seo-optimized-development'
};

export const metadata = generateMetadata({
  title: 'SEO Optimized Website Development | Drive 10x Search Traffic',
  description: 'Rank #1 on Google with our SEO optimized website development services. We write semantic HTML, build JSON-LD schema systems, and tune Core Web Vitals.',
  path: serviceData.urlPath,
  keywords: ['seo optimized website development agency', 'seo agency for software startups', 'nextjs head seo optimization', 'semantic seo agency', 'structured schema markup developer']
});

const faqs = [
  {
    question: "What is your approach to Technical SEO in Next.js applications?",
    answer: "We structure the site with a strict logical heading hierarchy (H1-H4), map clean relative URL parameters, configure dynamic canonical tags, compile automated XML sitemaps, and implement custom JSON-LD schemas to help Google's crawlers easily index the content."
  },
  {
    question: "Do you integrate schema markup for all pages automatically?",
    answer: "Yes, we implement Organization, LocalBusiness, Breadcrumb, Product, and FAQ schemas dynamically. Google uses these structured details to show rich results on search listings, which boosts click-through-rates (CTR) by up to 30%."
  },
  {
    question: "How does site speed affect search rankings?",
    answer: "Google uses Core Web Vitals as direct search ranking metrics. If a website takes longer than 3 seconds to load on mobile devices, it faces ranking penalties. Our development process guarantees sub-second page loads to maintain maximum SEO performance."
  }
];

export default function SeoOptimizedDevelopmentPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'SEO Optimized Development', item: serviceData.urlPath }
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
        badge="Search Dominance"
        title="SEO Optimized"
        highlight="Web Development"
        subtitle="Rank higher from day one. We engineer high-performance websites with clean semantic code and advanced structured schemas."
        breadcrumb={['Home', 'Services', 'SEO Optimized Development']}
      />

      {/* Value Prop */}
      <section className="py-20 container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">Organic Growth</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 font-poppins">Built for search engine visibility</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We bypass basic optimization plugins to write clean, hand-coded Next.js templates that Google ranks automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-6">
              <Search size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Structured Schema Markups</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We compile dynamic Organization, LocalBusiness, Breadcrumbs, and FAQ JSON-LD schemas inside layouts to secure Google rich snippets.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-6">
              <Code size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Semantic HTML5 Layout</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We write clean, lightweight HTML5 tags, establishing a clear page hierarchy to allow crawlers to process key keywords immediately.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
              <Zap size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Core Web Vitals Speed</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sub-second page speeds through static compilation, script loading optimization, and image formatting (WebP/AVIF).
            </p>
          </div>
        </div>
      </section>

      {/* Semantic Content Box */}
      <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-slate-100 mb-6 leading-tight">
              Rank #1 on Search Engines with Advanced Site Architecture
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              If Google cannot parse your code, your website will not rank. We build websites using logical Silo internal linking patterns, which distribute authority across your key service pages.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our development process includes technical checklists for redirects, trailing slashes, sitemaps, robots configurations, and dynamic meta-data generation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">Mobile-First Responsiveness</h4>
                  <p className="text-slate-400 text-sm">We test design layouts on multiple mobile screen sizes to ensure clean user experiences everywhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">Helpful Content Alignment</h4>
                  <p className="text-slate-400 text-sm">We organize page sections logically to satisfy search intents and reduce user bounce rates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12">
              <h3 className="text-2xl font-black font-poppins text-slate-100 mb-6">SEO Frameworks</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Globe size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">JSON-LD Schemas</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <FileText size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Semantic HTML</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Zap size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Web Vital Tuning</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Shield size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Clean Canonicalization</span>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-800/80 pt-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Want to audit your technical SEO?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition">
                  Contact SEO Developers <ArrowRight size={16} />
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
            <h2 className="text-2xl md:text-4xl font-black mt-4 mb-4 font-poppins">Technical SEO FAQs</h2>
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

      {/* High Converting Dynamic CTA Section */}
      <section className="py-20 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container-custom max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 px-8 py-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.12),transparent_60%)] pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-slate-100 mb-4 leading-tight">
              Ready to Maximize Your Site's Google Rankings?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Book a technical consultation to map out a site rebuild or audit your search engine visibility metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-center">
                Schedule Technical Audit
              </Link>
              <Link href="/portfolio" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-center">
                Review SEO Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
