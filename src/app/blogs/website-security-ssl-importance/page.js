'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Share2, Shield } from 'lucide-react';

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
            In an era of sophisticated AI-driven cyber attacks, a basic firewall is no longer sufficient. Trust is the foundation of digital business. If a user's browser displays a "Not Secure" warning, you've already lost the sale.
          </p>

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            Why SSL is Non-Negotiable
          </h2>
          <p style={{ marginBottom: 24 }}>
            An SSL (Secure Sockets Layer) certificate encrypts the data traveling between a user's browser and your server. Without it, any hacker on a public Wi-Fi network can intercept credit card numbers, passwords, and sensitive emails in plain text. Furthermore, Google officially ranks HTTPS websites higher in search results.
          </p>

          <div style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', borderRadius: 16, padding: 32, margin: '40px 0', borderLeft: '4px solid #E74C3C' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#dc2626', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Shield size={24} /> Security Insight
            </h3>
            <p style={{ margin: 0, color: '#991b1b', fontWeight: 500 }}>
              Over 43% of cyber attacks target small businesses, largely because they assume they are "too small to be targeted." Automated bots scan the entire internet indiscriminately.
            </p>
          </div>

          <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Beyond SSL: The Modern Security Stack</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Web Application Firewall (WAF)', desc: 'Blocks SQL injection, Cross-Site Scripting (XSS), and malicious payloads before they reach your server.' },
              { title: 'DDoS Protection', desc: 'Mitigates distributed denial-of-service attacks that attempt to crash your server with fake traffic.' },
              { title: 'Zero Trust Architecture', desc: 'Never trust, always verify. Every API endpoint requires strict JWT authentication and rate-limiting.' },
              { title: 'Automated Backups', desc: 'Real-time database mirroring and daily encrypted snapshots to prevent ransomware data loss.' }
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

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            Security Audits
          </h2>
          <p style={{ marginBottom: 24 }}>
            WebNex conducts comprehensive penetration testing and vulnerability assessments for enterprise clients. By simulating real-world attacks, we identify patching opportunities before malicious actors can exploit them.
          </p>

          <div style={{ background: '#0F172A', color: 'white', padding: 40, borderRadius: 24, textAlign: 'center', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -100, right: -100, width: 250, height: 250, background: 'radial-gradient(circle, #E74C3C 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }} />
            <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Poppins, sans-serif', marginBottom: 16, position: 'relative', zIndex: 1 }}>Secure Your Business Today</h3>
            <p style={{ color: '#94a3b8', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px', position: 'relative', zIndex: 1 }}>
              Don't wait for a data breach to upgrade your infrastructure. WebNex provides enterprise-grade security protocols for modern applications.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #E74C3C, #C0392B)', color: 'white', padding: '14px 28px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1 }}>
              Request Security Audit
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
              {['Cyber Security', 'SSL/TLS', 'DDoS', 'WebNex Security', 'Data Privacy'].map(tag => (
                <span key={tag} style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: 100, fontSize: 13, color: '#475569', fontWeight: 500 }}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
