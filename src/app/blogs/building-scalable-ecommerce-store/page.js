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
            A slow e-commerce store loses 7% of conversions per second of delay. Scaling past 1,000 orders a day requires more than basic hosting—it requires a headless architecture and intelligent caching. Let's explore how top brands build unstoppable stores.
          </p>

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            What is Headless Commerce?
          </h2>
          <p style={{ marginBottom: 24 }}>
            In traditional e-commerce (like monolithic WordPress/WooCommerce or basic Shopify), the front-end (what users see) and the back-end (database, payments) are tightly coupled. This means if a sudden traffic spike hits your site during a Black Friday sale, the entire server crashes.
          </p>
          <p style={{ marginBottom: 24 }}>
            <strong>Headless Commerce</strong> separates the two. You can use Shopify Plus for managing inventory and payments, but build the frontend entirely in <strong>Next.js</strong>. The frontend connects to the backend via APIs. This allows your store to load instantly, regardless of backend traffic.
          </p>

          <h3 style={{ fontSize: 24, color: '#0F172A', fontWeight: 700, margin: '32px 0 16px' }}>Key Pillars of Scale</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Global CDN Delivery', desc: 'Serving product images and assets from edge nodes worldwide to ensure sub-second page loads for every user, anywhere.' },
              { title: 'Robust Payment Gateways', desc: 'Integrating Stripe, Razorpay, and UPI dynamically to reduce checkout friction and handle massive transaction volumes.' },
              { title: 'Dynamic Inventory Syncing', desc: 'Using Webhooks to instantly update stock levels across web, mobile apps, and physical POS systems without manual input.' },
              { title: 'AI Personalization', desc: 'Real-time product recommendations based on browsing history, increasing Average Order Value (AOV) by up to 30%.' }
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

          <h2 style={{ fontSize: 28, color: '#0F172A', fontWeight: 800, fontFamily: 'Poppins, sans-serif', margin: '40px 0 20px' }}>
            Optimizing the Checkout Flow
          </h2>
          <p style={{ marginBottom: 24 }}>
            The average cart abandonment rate is a staggering 69%. Most of this is caused by complex checkouts, forced account creation, or limited payment options. A scalable store implements a 1-click checkout experience. By utilizing tools like Apple Pay, Google Pay, and localized wallets, users can purchase without typing in their credit card numbers manually.
          </p>

          <div style={{ background: '#0F172A', color: 'white', padding: 40, borderRadius: 24, textAlign: 'center', margin: '40px 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -100, right: -100, width: 250, height: 250, background: 'radial-gradient(circle, #F1C40F 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.5 }} />
            <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Poppins, sans-serif', marginBottom: 16, position: 'relative', zIndex: 1 }}>Build Your Headless Store</h3>
            <p style={{ color: '#94a3b8', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px', position: 'relative', zIndex: 1 }}>
              WebNex specializes in developing high-converting, lightning-fast Next.js e-commerce platforms. 
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #F1C40F, #E67E22)', color: 'white', padding: '14px 28px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1 }}>
              Talk to E-Commerce Experts
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
              {['Shopify Plus', 'Headless Commerce', 'Next.js', 'Stripe', 'Conversion Rate'].map(tag => (
                <span key={tag} style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: 100, fontSize: 13, color: '#475569', fontWeight: 500 }}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
