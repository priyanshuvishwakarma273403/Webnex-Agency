'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Share2, Sparkles } from 'lucide-react';

export default function UIUXBlogPage() {
  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 100 }}>
      <div style={{ position: 'relative', width: '100%', height: '60vh', minHeight: 450, background: '#0F172A', overflow: 'hidden' }}>
        <img src="/images/blogs/uiux_trends_blog.png" alt="UI UX Trends" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
        <div className="container-custom" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 60 }}>
          <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#FF6B9D', fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <span style={{ background: 'rgba(255, 107, 157, 0.2)', color: '#FF6B9D', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Design</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, maxWidth: 900, marginBottom: 24 }}>
            10 UI/UX Trends to Watch in Web Design
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, color: '#94a3b8', fontSize: 14, fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><User size={16} /> Design Team</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Calendar size={16} /> April 28, 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} /> 8 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom" style={{ display: 'flex', gap: 40, marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
        <article style={{ flex: '1 1 70%', background: 'white', borderRadius: 24, padding: '40px clamp(20px, 4vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', fontSize: 17, lineHeight: 1.8 }}>
          <p style={{ fontSize: 20, color: '#0F172A', fontWeight: 500, lineHeight: 1.6, marginBottom: 40 }}>
            User expectations are higher than ever. To capture and retain attention in 2026, websites must be immersive, extremely fast, and intuitively designed. Let's explore the revolutionary design trends defining this year.
          </p>

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            1. The Rise of the Bento Grid
          </h2>
          <p style={{ marginBottom: 24 }}>
            Popularized by Apple and quickly adopted by SaaS startups, the Bento Grid layout is a masterclass in information architecture. By breaking down complex features into neatly compartmentalized blocks (like a Japanese bento box), users can digest large amounts of data without feeling overwhelmed.
          </p>

          <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)', borderRadius: 16, padding: 32, margin: '40px 0', borderLeft: '4px solid #FF6B9D' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#db2777', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Sparkles size={24} /> WebNex Design Philosophy
            </h3>
            <p style={{ margin: 0, color: '#be185d', fontWeight: 500 }}>
              Good design is invisible. If a user has to think about where to click next, the design has failed. We use Bento grids to guide the eye naturally.
            </p>
          </div>

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            2. Dark Mode 2.0 & Neon Accents
          </h2>
          <p style={{ marginBottom: 24 }}>
            Pure black backgrounds (`#000000`) are harsh on the eyes. In 2026, we are seeing "Dark Mode 2.0"—using deep, rich shades of midnight blue (`#0F172A`) or charcoal gray (`#121212`) combined with highly vibrant neon accents (cyan, magenta, lime green). This creates a premium, high-tech aesthetic that startups love.
          </p>

          <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Other Defining Trends</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Glassmorphism & Depth', desc: 'Translucent backgrounds with subtle blur and light borders that provide a premium layered effect without clutter.' },
              { title: 'AI-Generated Micro-interactions', desc: 'Subtle hover animations that dynamically adapt based on the user\'s mouse velocity and intent.' },
              { title: 'Typography as Art', desc: 'Oversized, bold sans-serif fonts dominating the hero section instead of massive images.' },
              { title: 'Immersive 3D Scrolling', desc: 'WebGL-powered experiences that tell a story as the user scrolls down the page.' }
            ].map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', gap: 16, background: '#f8fafc', padding: 20, borderRadius: 16 }}>
                <div style={{ color: '#FF6B9D', marginTop: 2 }}><CheckCircle2 size={24} /></div>
                <div>
                  <strong style={{ display: 'block', color: '#0F172A', fontSize: 18, marginBottom: 4 }}>{benefit.title}</strong>
                  <span style={{ color: '#475569' }}>{benefit.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            Why Aesthetics Drive Revenue
          </h2>
          <p style={{ marginBottom: 24 }}>
            Many business owners treat design as an afterthought. However, data shows that a premium UI increases perceived value. If your website looks like a million-dollar enterprise, you can charge premium rates. Poor UI creates friction, and friction kills conversions.
          </p>

          <div style={{ background: '#0F172A', color: 'white', padding: 40, borderRadius: 24, textAlign: 'center', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -100, right: -100, width: 250, height: 250, background: 'radial-gradient(circle, #FF6B9D 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }} />
            <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Poppins, sans-serif', marginBottom: 16, position: 'relative', zIndex: 1 }}>Upgrade Your Brand UI</h3>
            <p style={{ color: '#94a3b8', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px', position: 'relative', zIndex: 1 }}>
              Ready to leave your competitors behind? Let WebNex redesign your platform with cutting-edge 2026 aesthetics.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #FF6B9D, #6C63FF)', color: 'white', padding: '14px 28px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1 }}>
              Consult Our Design Team
            </Link>
          </div>
        </article>

        {/* Sidebar */}
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

          <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Related Topics</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['UI/UX', 'Figma', 'Web Design', 'Frontend', 'Next.js'].map(tag => (
                <span key={tag} style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: 100, fontSize: 13, color: '#475569', fontWeight: 500 }}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
