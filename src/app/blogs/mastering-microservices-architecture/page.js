'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, TrendingUp, Cpu, MessageSquare, ShoppingCart, Layout, Code } from 'lucide-react';

export default function MicroservicesBlogPage() {
  return (
    <>
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 100 }}>
        <div style={{ position: 'relative', width: '100%', height: '60vh', minHeight: 450, background: '#0F172A', overflow: 'hidden' }}>
          <img src="/images/blogs/microservices_blog.png" alt="Microservices in 2026" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
          <div className="container-custom" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 60 }}>
            <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#2ECC71', fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <span style={{ background: 'rgba(46, 204, 113, 0.2)', color: '#2ECC71', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>DevOps</span>
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, maxWidth: 900, marginBottom: 24 }}>
              Mastering Microservices Architecture
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, color: '#94a3b8', fontSize: 14, fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><User size={16} /> Cloud Architect</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Calendar size={16} /> May 05, 2026</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} /> 15 Min Read</span>
            </div>
          </div>
        </div>

        <div className="container-custom" style={{ display: 'flex', gap: 40, marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
          <article style={{ flex: '1 1 70%', background: 'white', borderRadius: 24, padding: '40px clamp(20px, 4vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', fontSize: 17, lineHeight: 1.8 }}>
            <p style={{ fontSize: 20, color: '#0F172A', fontWeight: 500, lineHeight: 1.6, marginBottom: 40 }}>
              Monolithic applications are a bottleneck for fast-growing companies. In this deep dive, we explore how transitioning to Microservices architecture using Docker and Kubernetes enables autonomous scaling and zero-downtime deployments.
            </p>
            <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>What are Microservices?</h2>
            <p style={{ marginBottom: 24 }}>Instead of one massive codebase where changing a button might break the database layer, microservices break the application down into dozens or hundreds of small, independent services. Each service handles exactly one job (e.g., Auth, Payments, Inventory).</p>
            
            <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: 16, padding: 32, margin: '40px 0', borderLeft: '4px solid #2ECC71' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Sparkles size={24} /> WebNex Insight
              </h3>
              <p style={{ margin: 0, color: '#15803d', fontWeight: 500 }}>
                Kubernetes (K8s) is the conductor of the orchestra. Without it, managing 50 different microservices becomes an operational nightmare.
              </p>
            </div>
            
            <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Benefits for Scale</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { title: 'Independent Deployments', desc: 'Ship updates to the Payments service without restarting the entire app.' },
                { title: 'Fault Isolation', desc: 'If the Recommendation Engine crashes, the Checkout system remains online.' },
                { title: 'Technology Agnostic', desc: 'Write the AI service in Python, the API in Java Spring Boot, and the frontend in React.' }
              ].map((benefit, idx) => (
                <li key={idx} style={{ display: 'flex', gap: 16, background: '#f8fafc', padding: 20, borderRadius: 16 }}>
                  <div style={{ color: '#2ECC71', marginTop: 2 }}><CheckCircle2 size={24} /></div>
                  <div>
                    <strong style={{ display: 'block', color: '#0F172A', fontSize: 18, marginBottom: 4 }}>{benefit.title}</strong>
                    <span style={{ color: '#475569' }}>{benefit.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            
          </article>
        </div>
      </main>
    </>
  );
}
