/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Building Stateful Autonomous AI Agents with LangGraph & LlamaIndex',
  description: 'A comprehensive developer guide to structuring cyclic agent state graphs, integrating tools, and deploying autonomous AI assistants in enterprise environments.',
  path: '/blogs/build-autonomous-agents-langgraph',
  ogImage: '/images/blogs/ai_agents_graph_blog.png'
});
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  Cpu, Bot, GitBranch, Database, ArrowUpRight 
} from 'lucide-react';

export default function LangGraphBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/ai_agents_graph_blog.png" 
          alt="Autonomous AI Agents" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6 hover:text-emerald-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              AI Agents
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              LangGraph
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            Building Stateful Autonomous AI Agents with LangGraph & LlamaIndex
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-emerald-400" /> AI Lead</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-emerald-400" /> April 02, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-emerald-400" /> 16 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-emerald-400 pl-6">
            Building cognitive automation requires cyclic states. Discover how LangGraph coordinates multiple autonomous actors with safety.
          </p>

          <p>
            Standard linear chains (like sequential chains in LangChain) break down when encountering runtime errors or requiring human approval before database writes. LangGraph solves this by modeling agents as state machines in which nodes execute tools and edges handle routing decisions dynamically.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. Structuring Cyclic Graphs
            </h2>
            <p>
              By defining precise nodes for task analysis and tool calling, we maintain absolute control over the LLM execution path. We can insert human-in-the-loop nodes to halt execution until a staff member reviews recommendations.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6 font-mono text-xs text-emerald-300 leading-relaxed">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: State Machine Loop in Python</span>
                <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/25">LangGraph State</span>
              </div>
{`// Example state update structure
const updateState = (currentState, action) => {
  return {
    ...currentState,
    messages: [...currentState.messages, action.payload.message],
    agentStep: currentState.agentStep + 1
  };
};`}
            </div>
          </section>

          <hr className="border-slate-800" />

          {/* Conclusion */}
          <div className="pt-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">Summary</h3>
            <p className="mb-4">
              Stateful agent graphs built on LangGraph represent the future of SaaS operations, enabling deep business process automation with total guardrail compliance.
            </p>
            <p>
              Want to deploy cognitive AI agents inside your workflows? Consult WebNex's AI engineers to plan your LangGraph integration.
            </p>
          </div>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="space-y-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Share2 size={16} className="text-emerald-400" /> Share Insight
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-950 border border-slate-800 hover:border-emerald-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                LinkedIn
              </button>
              <button className="bg-slate-950 border border-slate-800 hover:border-emerald-400/30 hover:bg-slate-900 p-3 rounded-xl font-bold text-xs text-slate-300 transition">
                Twitter
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl">
            <h4 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Bot size={16} className="text-emerald-400" /> Agent Specs
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Stateful Memory
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Human approval nodes
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Cyclic Graph Routing
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Vector retrieval (RAG)
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
