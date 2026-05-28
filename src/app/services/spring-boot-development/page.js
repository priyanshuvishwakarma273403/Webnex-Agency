/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Server, Database, Lock, Terminal, Cpu, CheckCircle, Code, Shield, ArrowRight } from 'lucide-react';
import { generateMetadata, getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo';

const serviceData = {
  name: 'Spring Boot Development Services',
  description: 'Enterprise-grade Java backend solutions, secure REST APIs, microservices architectures, and legacy system migrations built on Spring Boot framework with robust security and performance tuning.',
  urlPath: '/services/spring-boot-development'
};

export const metadata = generateMetadata({
  title: 'Enterprise Spring Boot Development | Scalable REST APIs',
  description: 'Build secure, high-performance backends with our Spring Boot development services. Enterprise-grade microservices, database tuning, and API security.',
  path: serviceData.urlPath,
  keywords: ['custom spring boot microservices agency', 'hire spring boot api developer', 'spring boot java migration agency', 'spring boot postgresql performance tuning', 'spring boot rest api security services']
});

const faqs = [
  {
    question: "Why do you recommend Spring Boot for enterprise backend systems?",
    answer: "Spring Boot provides a highly robust, multi-threaded environment designed to handle massive concurrent requests. Its dependency injection framework, database connection pooling (HikariCP), and integrated transaction management make it the industry gold standard for banking, SaaS, and large enterprise applications."
  },
  {
    question: "How do you handle Spring Boot REST API security?",
    answer: "We implement defense-in-depth principles. Using Spring Security, we configure stateless JWT (JSON Web Token) authentication, OAuth2 social login integrations, role-based access control (RBAC), SQL injection prevention measures, and CORS configurations to ensure absolute protection."
  },
  {
    question: "What is your approach to Spring Boot and PostgreSQL database performance tuning?",
    answer: "We analyze JPA and Hibernate query executions to eliminate the N+1 query problem, configure database indexing structures, establish optimal Hikari connection pool sizes, and set up read-replicas. This keeps query executions under 50 milliseconds."
  }
];

export default function SpringBootDevelopmentPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Spring Boot Development', item: serviceData.urlPath }
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
        badge="Backend Engineering"
        title="Spring Boot"
        highlight="APIs & Microservices"
        subtitle="Secure, lightning-fast backends built on enterprise Java architectures. We design highly concurrent Spring Boot microservices."
        breadcrumb={['Home', 'Services', 'Spring Boot Development']}
      />

      {/* Value Prop Grid */}
      <section className="py-20 container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">Backend Core Focus</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 font-poppins">Enterprise Backend Engineering</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We write clean, compile-safe, and highly optimized Java structures designed to scale gracefully with your traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-6">
              <Server size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Microservices Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We decompose complex monolithic systems into distributed Spring Boot microservices utilizing Docker, Kubernetes, Consul, and cloud-native API gateways.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-6">
              <Lock size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">JWT & OAuth2 Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete enterprise-grade security implementation using Spring Security. We manage dynamic JWT signing, OAuth2 authentication, and strict CSRF filters.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
              <Database size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Performance Database Tuning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom Hibernate query audits, dynamic caching layers (Redis), connection pooling optimization, and PostgreSQL index optimization for maximum response speeds.
            </p>
          </div>
        </div>
      </section>

      {/* Semantic Content Box */}
      <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-slate-100 mb-6 leading-tight">
              Enterprise Java Stack engineered for 99.99% Uptime
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern digital systems require absolute reliability. Spring Boot offers the most stable backend structure to power high-transaction platforms, SaaS billing portals, and deep automation systems.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our engineering team builds safe APIs that process database commands smoothly. By compiling clean Java structures, we ensure your servers maintain low memory overheads and secure data pathways.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">Scale-Ready Microservices</h4>
                  <p className="text-slate-400 text-sm">Deploy modular micro-architectures that scale independently during heavy traffic spikes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">Legacy Java Migration</h4>
                  <p className="text-slate-400 text-sm">We upgrade legacy Java applications to the latest Spring Boot releases with zero service interruptions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12">
              <h3 className="text-2xl font-black font-poppins text-slate-100 mb-6">Backend Stack & Databases</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Terminal size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Spring Security</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Database size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">PostgreSQL / JPA</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Cpu size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Docker & K8s</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Shield size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Hibernate Caching</span>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-800/80 pt-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Need a custom backend architect?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition">
                  Contact Backend Architects <ArrowRight size={16} />
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
            <h2 className="text-2xl md:text-4xl font-black mt-4 mb-4 font-poppins">Spring Boot FAQs</h2>
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
              Scale Your Backend Infrastructure with Spring Boot
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Book a consultation call with our Lead Backend Engineer to coordinate database audits or plan legacy microservices refactoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-center">
                Hire Spring Boot Developers
              </Link>
              <Link href="/portfolio" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-center">
                Review Core Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
