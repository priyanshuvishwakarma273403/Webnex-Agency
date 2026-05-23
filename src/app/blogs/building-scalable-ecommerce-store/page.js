'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Share2 } from 'lucide-react';

export default function EcommerceBlogPage() {
  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 100 }}>
      <div style={{ position: 'relative', width: '100%', height: '60vh', minHeight: 450, background: '#0F172A', overflow: 'hidden' }}>
        <img src="/images/blogs/ecommerce_blog.png" alt="E-Commerce 2026" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
        <div className="container-custom" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 60 }}>
          <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F1C40F', fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <span style={{ background: 'rgba(241, 196, 15, 0.2)', color: '#F1C40F', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>E-Commerce</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2, maxWidth: 900, marginBottom: 24 }}>
            Building a Scalable E-commerce Store
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, color: '#94a3b8', fontSize: 14, fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><User size={16} /> Retail Strategist</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Calendar size={16} /> March 14, 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} /> 10 Min Read</span>
          </div>
        </div>
      </div>

      <div className="container-custom" style={{ display: 'flex', gap: 40, marginTop: 40, flexDirection: 'row', flexWrap: 'wrap' }}>
        <article style={{ flex: '1 1 70%', background: 'white', borderRadius: 24, padding: '40px clamp(20px, 4vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', color: '#334155', fontSize: 17, lineHeight: 1.8 }}>
          <p style={{ fontSize: 20, color: '#0F172A', fontWeight: 500, lineHeight: 1.6, marginBottom: 40 }}>
            A slow e-commerce store loses 7% of conversions per second of delay. Scaling past 1,000 orders a day requires more than basic hosting—it requires a headless architecture.
          </p>
          <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Key Pillars</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Headless Commerce', desc: 'Separating the frontend (Next.js) from the backend (Shopify Plus or WooCommerce API).' },
              { title: 'Global CDN Delivery', desc: 'Serving product images from edge nodes to ensure sub-second loads.' },
              { title: 'Robust Payment Gateways', desc: 'Integrating Stripe, Razorpay, and UPI for zero-friction checkout.' }
            ].map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', gap: 16, background: '#f8fafc', padding: 20, borderRadius: 16 }}>
                <div style={{ color: '#F1C40F', marginTop: 2 }}><CheckCircle2 size={24} /></div>
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
