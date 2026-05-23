'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Share2 } from 'lucide-react';

export default function SecurityBlogPage() {
  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 100 }}>
      <div style={{ position: 'relative', width: '100%', height: '60vh', minHeight: 450, background: '#0F172A', overflow: 'hidden' }}>
        <img src="/images/blogs/security_blog.png" alt="Security Blog" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
        <div className="container-custom" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 60 }}>
          <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E74C3C', fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <span style={{ background: 'rgba(231, 76, 60, 0.2)', color: '#E74C3C', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Security</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, maxWidth: 900, marginBottom: 24 }}>
            The Importance of Website Security & SSL
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, color: '#94a3b8', fontSize: 14, fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><User size={16} /> Security Analyst</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Calendar size={16} /> Feb 02, 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} /> 6 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom" style={{ display: 'flex', gap: 40, marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
        <article style={{ flex: '1 1 70%', background: 'white', borderRadius: 24, padding: '40px clamp(20px, 4vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', fontSize: 17, lineHeight: 1.8 }}>
          <p style={{ fontSize: 20, color: '#0F172A', fontWeight: 500, lineHeight: 1.6, marginBottom: 40 }}>
            In an era of sophisticated AI-driven cyber attacks, a basic firewall is no longer sufficient. Trust is the foundation of digital business.
          </p>
          <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Security Essentials</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Advanced SSL Encryption', desc: 'End-to-end 256-bit encryption for all user sessions and data transfers.' },
              { title: 'DDoS Protection', desc: 'Preventing malicious botnets from taking your revenue-generating services offline.' },
              { title: 'Zero Trust Architecture', desc: 'Every API endpoint requires strict authentication and rate-limiting.' }
            ].map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', gap: 16, background: '#f8fafc', padding: 20, borderRadius: 16 }}>
                <div style={{ color: '#E74C3C', marginTop: 2 }}><CheckCircle2 size={24} /></div>
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
  );
}
