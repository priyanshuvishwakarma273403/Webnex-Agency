/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Bot, Cpu, GitFork, UserCheck, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { generateMetadata, getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo';

const serviceData = {
  name: 'AI Agent Development Services',
  description: 'Design and deployment of custom autonomous AI agents, multi-agent frameworks, cognitive workflows using LangGraph and LangChain, and advanced state machine systems to automate customer service and business operations.',
  urlPath: '/services/ai-agent-development'
};

export const metadata = generateMetadata({
  title: 'Custom AI Agent Development Services | Autonomous Workflows',
  description: 'Transform business workflows with custom autonomous AI agents built using LangGraph, LangChain, and LlamaIndex. Automate customer service, operations, and analysis.',
  path: serviceData.urlPath,
  keywords: ['ai agent development services for saas', 'build custom ai agents for customer service', 'build autonomous agents langgraph nextjs', 'langgraph agency india', 'autonomous agent developer']
});

const faqs = [
  {
    question: "What is an autonomous AI Agent?",
    answer: "An autonomous AI agent is a software component powered by an LLM that can make independent decisions, call API tools, browse web databases, and execute multi-step operations to achieve specific goals without constant human intervention."
  },
  {
    question: "Why do you use LangGraph for building AI agents?",
    answer: "LangGraph allows us to build stateful, multi-actor applications with cyclic graph configurations. This makes it possible to define precise state transitions, human-in-the-loop validation steps, and complex fallback strategies that standard linear agent pipelines cannot handle."
  },
  {
    question: "How can AI agents automate customer service workflows?",
    answer: "We connect AI agents to your support tickets, customer history databases, and internal payment APIs. The agent can authenticate customers, resolve billing issues, process returns, and update tickets automatically, referring complex issues to human agents only when necessary."
  }
];

export default function AiAgentDevelopmentPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'AI Agent Development', item: serviceData.urlPath }
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
        badge="Autonomous Systems"
        title="Custom AI Agent"
        highlight="Engineering"
        subtitle="Automate operations. We build stateful, multi-agent frameworks using LangGraph to streamline support and backend workflows."
        breadcrumb={['Home', 'Services', 'AI Agent Development']}
      />

      {/* Grid Features */}
      <section className="py-20 container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">Operational Efficiency</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 font-poppins">Autonomous workflows at scale</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            We build stateful cognitive agents that run background tasks, check data files, and trigger backend processes automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-6">
              <GitFork size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">LangGraph State Control</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We write complex multi-actor cyclic graphs to coordinate tasks. This ensures agent memory is preserved across sessions and operations can resume gracefully.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-6">
              <Bot size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Multi-Agent Cooperations</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Orchestrate networks where specialized agents (e.g. database querying agent, content editing agent, routing agent) collaborate to resolve requests.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-300" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6">
              <UserCheck size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-100 mb-3">Human-in-the-Loop Validation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build custom review portals allowing staff members to approve, correct, or reject agent actions before they finalize database modifications.
            </p>
          </div>
        </div>
      </section>

      {/* Semantic Content Box */}
      <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-slate-100 mb-6 leading-tight">
              Scale SaaS Workflows with Intelligent Agentic Operations
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Traditional scripts fail when encountering unstructured customer data. AI Agents solve this by understanding context, handling unexpected API variables, and planning their execution paths dynamically.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our engineering team integrates LlamaIndex data loaders, Redis rate-limit configurations, and secure Spring Boot microservices endpoints to ensure your agents are fast, accurate, and completely secure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">SaaS Integration Systems</h4>
                  <p className="text-slate-400 text-sm">Deploy custom agents that sync CRM records, monitor billing cycles, and trigger alert protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-200">State Machine Precision</h4>
                  <p className="text-slate-400 text-sm">We compile graph models that handle loops, errors, and conditional branches with maximum precision.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12">
              <h3 className="text-2xl font-black font-poppins text-slate-100 mb-6">Agent Architecture</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <GitFork size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">LangGraph Graphs</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Bot size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Tool Bindings</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Cpu size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Vector Databases</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <Shield size={20} className="text-indigo-400" />
                  <span className="text-sm font-bold text-slate-200">Human Approval Nodes</span>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-800/80 pt-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Ready to automate your workflows?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition">
                  Contact AI Agent Architects <ArrowRight size={16} />
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
            <h2 className="text-2xl md:text-4xl font-black mt-4 mb-4 font-poppins">AI Agent FAQs</h2>
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
              Ready to Automate Business Operations with AI Agents?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Connect with our AI engineers to coordinate technical planning cycles and outline stateful workflow integration maps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-center">
                Hire AI Agent Developers
              </Link>
              <Link href="/portfolio" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-800 transition text-center">
                Review Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
