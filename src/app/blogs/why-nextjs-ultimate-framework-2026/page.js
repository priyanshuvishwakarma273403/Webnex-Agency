'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Share2, Sparkles, Zap, Shield, TrendingUp, Cpu, MessageSquare, ShoppingCart, Layout, Code } from 'lucide-react';

export default function NextJsBlogPage() {
  return (
    <>
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 100 }}>
        <div style={{ position: 'relative', width: '100%', height: '60vh', minHeight: 450, background: '#0F172A', overflow: 'hidden' }}>
          <img src="/images/blogs/nextjs_2026_blog.png" alt="Next.js in 2026" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
          <div className="container-custom" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 60 }}>
            <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#00C2FF', fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <span style={{ background: 'rgba(0,194,255,0.2)', color: '#00C2FF', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Development</span>
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, maxWidth: 900, marginBottom: 24 }}>
              Why Next.js is the Ultimate Framework for 2026
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, color: '#94a3b8', fontSize: 14, fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><User size={16} /> Tech Lead</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Calendar size={16} /> May 12, 2026</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} /> 12 Min Read</span>
            </div>
          </div>
        </div>

        <div className="container-custom" style={{ display: 'flex', gap: 40, marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
          <article style={{ flex: '1 1 70%', background: 'white', borderRadius: 24, padding: '40px clamp(20px, 4vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', fontSize: 17, lineHeight: 1.8 }}>
            <p style={{ fontSize: 20, color: '#0F172A', fontWeight: 500, lineHeight: 1.6, marginBottom: 40 }}>
              The web ecosystem has evolved incredibly over the past few years. Next.js, originally seen as a server-rendered alternative to plain React, has transformed into a robust, enterprise-grade framework powering the internet.
            </p>
            <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>Server Components & Edge Computing</h2>
            <p style={{ marginBottom: 24 }}>With React Server Components becoming standard, Next.js allows developers to write UI that renders strictly on the server. This results in zero client-side JavaScript for those components, significantly reducing the bundle size.</p>
            
            <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: 16, padding: 32, margin: '40px 0', borderLeft: '4px solid #00C2FF' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0ea5e9', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Sparkles size={24} /> WebNex Insight
              </h3>
              <p style={{ margin: 0, color: '#0369a1', fontWeight: 500 }}>
                Next.js allows startups to achieve SEO performance that was previously only possible for tech giants with massive engineering teams.
              </p>
            </div>
            
            <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Key Next.js Features in 2026</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { title: 'Partial Prerendering', desc: 'Combines static and dynamic content perfectly without compromising TTFB.' },
                { title: 'Turbopack Integration', desc: 'HMR updates are virtually instant, increasing developer velocity by 10x.' },
                { title: 'Image Optimization', desc: 'Automatic avif/webp conversions drastically lower LCP times.' },
                { title: 'Advanced Caching', desc: 'Aggressive Data Cache prevents excessive database queries under high loads.' }
              ].map((benefit, idx) => (
                <li key={idx} style={{ display: 'flex', gap: 16, background: '#f8fafc', padding: 20, borderRadius: 16 }}>
                  <div style={{ color: '#00C2FF', marginTop: 2 }}><CheckCircle2 size={24} /></div>
                  <div>
                    <strong style={{ display: 'block', color: '#0F172A', fontSize: 18, marginBottom: 4 }}>{benefit.title}</strong>
                    <span style={{ color: '#475569' }}>{benefit.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>Migrating from Legacy Stacks</h2>
            <p style={{ marginBottom: 24 }}>Many businesses running legacy PHP, plain HTML, or monolithic Java applications are finding the maintenance costs soaring. Migrating a frontend to Next.js while keeping the backend intact (via headless API architecture) is the preferred scaling method.</p>
            
            <div style={{ background: '#0F172A', color: 'white', padding: 40, borderRadius: 24, textAlign: 'center', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -100, right: -100, width: 250, height: 250, background: 'radial-gradient(circle, #00C2FF 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }} />
              <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Poppins, sans-serif', marginBottom: 16, position: 'relative', zIndex: 1 }}>Upgrade Your Tech Stack</h3>
              <p style={{ color: '#94a3b8', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px', position: 'relative', zIndex: 1 }}>
                WebNex builds lightning-fast, highly scalable Next.js applications designed for maximum performance and conversion.
              </p>
              <Link href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #00C2FF, #6C63FF)', color: 'white', padding: '14px 28px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Hire React Experts
              </Link>
            </div>
            
          </article>
          
          <aside style={{ flex: '1 1 25%', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Share2 size={18} /> Share Article
              </h4>
              <div style={{ display: 'flex', gap: 12 }}>
                <button style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e2e8f0', background: 'transparent', cursor: 'pointer', fontWeight: 600, color: '#334155' }}>LinkedIn</button>
                <button style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e2e8f0', background: 'transparent', cursor: 'pointer', fontWeight: 600, color: '#334155' }}>Twitter</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
