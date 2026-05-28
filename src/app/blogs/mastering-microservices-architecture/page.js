/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, 
  TrendingUp, Cpu, Server, Database, GitBranch, ArrowUpRight 
} from 'lucide-react';

export default function MicroservicesBlogPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-20">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[65vh] min-h-[480px] bg-slate-950 overflow-hidden">
        <img 
          src="/images/blogs/microservices_blog.png" 
          alt="Microservices Architecture" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="container-custom absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6 hover:text-emerald-300 transition text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              DevOps
            </span>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Cloud Scaling
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight max-w-4xl text-white mb-6">
            Mastering Microservices Architecture: The Enterprise Scale Guide
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-semibold">
            <span className="flex items-center gap-2"><User size={16} className="text-emerald-400" /> Cloud Architect</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-emerald-400" /> May 05, 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-emerald-400" /> 15 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Main Content Area */}
        <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-xl text-slate-300 text-base md:text-lg leading-relaxed space-y-8">
          
          <p className="text-xl md:text-2xl text-slate-200 font-medium font-poppins leading-relaxed border-l-4 border-emerald-400 pl-6">
            Monolithic web systems have become the primary bottleneck for scaling digital businesses. In this guide, we analyze how microservices architectures powered by Docker and Kubernetes enable high-velocity deployments.
          </p>

          <p>
            When web systems fail under high-traffic spikes, the root cause is rarely the frontend layout; it is almost always backend thread exhaustion. By separating backend logic into independent microservices, startups and enterprise brands ensure that checkout pipelines, authorization checks, and product searches scale in isolation.
          </p>

          <hr className="border-slate-800" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              1. The Anatomy of Monolith Decoupling
            </h2>
            <p>
              Under a monolithic structure, any change to your catalog display requires a compilation of the entire application suite, exposing systems to release bugs and database locks. Microservices break this structure into independent logical units communicating via secure JSON REST or gRPC pathways.
            </p>
            <p>
              By giving each microservice its own dedicated database (Database-per-Service pattern), database pool limits on checkout routes are isolated from database searches on catalog pages.
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto my-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Example: Dockerfile for Spring Boot Microservice</span>
                <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/25">Dockerfile</span>
              </div>
              <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
{`# Docker multi-stage build for microservices
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/auth-service-0.0.1.jar auth-service.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "auth-service.jar"]`}
              </pre>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black font-poppins text-white mt-8 mb-4">
              2. Orchestrating with Kubernetes
            </h2>
            <p>
              Deploying 30 separate Docker containers requires centralized control. **Kubernetes (K8s)** acts as the orchestrator, managing container lifecycles, executing health probes, allocating memory limits, and managing internal load balancing.
            </p>
            <p>
              If a specific payment service container encounters an Out-Of-Memory (OOM) error, Kubernetes automatically terminates the failed pod and provisions a clean replica within milliseconds.
            </p>

            <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl bg-slate-900/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-xs font-bold uppercase tracking-wider text-slate-200">
                    <th className="p-4">Scaling Method</th>
                    <th className="p-4">Pros</th>
                    <th className="p-4">Cons</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-sm">
                  <tr>
                    <td className="p-4 font-bold text-white">Horizontal Scaling (HPA)</td>
                    <td className="p-4">Highly elastic, replicates pods dynamically based on CPU/RAM thresholds.</td>
                    <td className="p-4 text-slate-400">Requires strict database connection pool tuning.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Vertical Scaling (VPA)</td>
                    <td className="p-4">Increases resource limits for existing containers.</td>
                    <td className="p-4 text-slate-400">Limited by absolute node limits and triggers pod restarts.</td>
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
              Microservices architectures require initial investments in pipeline configurations and K8s charts, but the dividend is infinite horizontal scalability. By decoupling application logics, you prepare your software to scale alongside traffic curves.
            </p>
            <p>
              Looking to decouple legacy platforms? Connect with WebNex's cloud infrastructure team to scope your microservice migration roadmap.
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
              <Cpu size={16} className="text-emerald-400" /> DevOps Tech
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-bold">
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Docker Containers
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Kubernetes Pods
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Spring Eureka discovery
              </li>
              <li className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                <CheckCircle2 size={14} className="text-emerald-400" /> Prometheus Metrics
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
