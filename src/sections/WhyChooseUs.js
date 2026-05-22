'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Rocket, Star, Bot, Zap, Target, Shield, Smartphone, Globe, ArrowRight, X, User, Mail, Briefcase, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Rocket, color: '#6C63FF' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Star, color: '#F89820' },
  { value: 12, suffix: '+', label: 'AI Services Offered', icon: Bot, color: '#00C2FF' },
  { value: 3, suffix: 'x', label: 'Faster Deployment', icon: Zap, color: '#FF6B9D' },
];

const features = [
  { icon: Target, title: 'Precision Delivery', desc: 'Every project delivered on time, on budget, and beyond expectations.', color: '#6C63FF' },
  { icon: Bot, title: 'AI-First Approach', desc: 'Every solution is enhanced with artificial intelligence for maximum impact.', color: '#00C2FF' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security built into every application we build.', color: '#2ECC71' },
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Pixel-perfect designs that work beautifully on all devices.', color: '#FF6B9D' },
  { icon: Globe, title: 'Global Standards', desc: 'International quality standards with deep local market understanding.', color: '#F89820' },
  { icon: Zap, title: 'Future-Ready Stack', desc: 'The most modern, scalable technologies for your competitive edge.', color: '#9B59B6' },
];

function CounterCard({ stat, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = stat.icon;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = stat.value;
    const step = end / (1800 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="wcu-stat-card"
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      whileHover={{ y: -8, boxShadow: `0 24px 55px ${stat.color}22` }}
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(108,99,255,0.1)',
        borderRadius: 22,
        padding: '32px 24px',
        textAlign: 'center',
        cursor: 'default',
        position: 'relative', overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)',
      }}
    >
      <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle,${stat.color}12,transparent)` }} />

      <div className="wcu-stat-icon" style={{
        width: 50, height: 50, borderRadius: 14,
        background: `${stat.color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 16px',
        animation: 'float 3s ease-in-out infinite',
        animationDelay: `${index * 0.4}s`,
      }}>
        <Icon size={22} color={stat.color} strokeWidth={1.8} />
      </div>

      <div className="wcu-stat-value" style={{
        fontSize: 'clamp(2.2rem,5vw,3rem)', fontWeight: 900,
        fontFamily: 'Poppins,sans-serif',
        background: `linear-gradient(135deg,${stat.color},#6C63FF)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        lineHeight: 1, marginBottom: 6,
      }}>
        {count}{stat.suffix}
      </div>
      <div className="wcu-stat-label" style={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>{stat.label}</div>

      <motion.div
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.8, delay: index * 0.15 }}
        style={{ marginTop: 14, height: 3, borderRadius: 2, background: `linear-gradient(90deg,${stat.color},transparent)`, transformOrigin: 'left' }}
      />
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: 'Not provided',
        service: 'General Inquiry (WhyChooseUs)',
        message: `Company/Project: ${formData.company}`
      };

      await emailjs.send(
        'service_3tatd0b',
        'template_kqj2cyp',
        templateParams,
        'EV1QwfUS_AfzdGi9G'
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg,#f8f7ff 0%,#f0f8ff 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(108,99,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.03) 1px,transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">
            <Zap size={12} /> Why WebNex
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 14 }}>
            Built for <span className="gradient-text">Excellence</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Numbers that speak louder than words.
          </motion.p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .wcu-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 64px; }
          .marquee-container {
            display: flex; flex-direction: column; gap: 24px;
            overflow: hidden; width: 100%; position: relative;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          .marquee-row {
            display: flex; gap: 24px; width: max-content;
          }
          .marquee-row.right {
            animation: scroll-right 40s linear infinite;
          }
          .marquee-row.left {
            animation: scroll-left 40s linear infinite;
          }
          .marquee-row:hover {
            animation-play-state: paused;
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .feature-card {
            width: 380px; flex-shrink: 0;
            display: flex; gap: 14px; padding: 18px 20px;
            background: rgba(255,255,255,0.7);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(108,99,255,0.08);
            border-radius: 14px; transition: all 0.3s;
            cursor: default;
          }
          .feature-card:hover {
            transform: translateY(-4px);
            background: rgba(255,255,255,0.95);
            box-shadow: 0 12px 30px rgba(108,99,255,0.12);
          }
          @media (max-width: 1024px) {
            .wcu-stats-grid { grid-template-columns: repeat(2, 1fr); }
            .feature-card { width: 340px; }
          }
          @media (max-width: 640px) {
            .wcu-stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 40px; }
            .wcu-stat-card { padding: 20px 10px !important; border-radius: 16px !important; }
            .wcu-stat-icon { width: 38px !important; height: 38px !important; margin-bottom: 12px !important; }
            .wcu-stat-value { font-size: 26px !important; margin-bottom: 4px !important; }
            .wcu-stat-label { font-size: 11px !important; line-height: 1.2 !important; }
            .feature-card { width: 280px; padding: 16px; }
          }
        ` }} />

        {/* Stats */}
        <div className="wcu-stats-grid">
          {stats.map((s, i) => <CounterCard key={s.label} stat={s} index={i} />)}
        </div>

        {/* Features Marquee */}
        <div className="marquee-container">
          <div className="marquee-row right">
            {[...features.slice(0, 3), ...features.slice(0, 3), ...features.slice(0, 3), ...features.slice(0, 3)].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={`row1-${i}`} className="feature-card">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={f.color} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 3, fontFamily: 'Poppins,sans-serif' }}>{f.title}</h4>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="marquee-row left">
            {[...features.slice(3, 6), ...features.slice(3, 6), ...features.slice(3, 6), ...features.slice(3, 6)].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={`row2-${i}`} className="feature-card">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={f.color} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 3, fontFamily: 'Poppins,sans-serif' }}>{f.title}</h4>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 52 }}>
          <button onClick={() => setShowModal(true)} className="btn-primary" style={{ cursor: 'pointer', border: 'none', fontFamily: 'Poppins, sans-serif' }}>
            Learn More About Us <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999999, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
            }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white', width: '100%', maxWidth: 500, borderRadius: 24, padding: 40, position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)', overflowY: 'auto', maxHeight: '90vh', overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, #6C63FF, #00C2FF)' }} />
              <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: 20, right: 20, background: '#f1f5f9', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                <X size={18} />
              </button>
              
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '20px 10px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Send size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins,sans-serif' }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.7 }}>Thank you! We'll get back to you within 24 hours with a detailed response.</p>
                  <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setSubmitted(false); setShowModal(false); }}
                    style={{ padding: '11px 24px', borderRadius: 11, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', color: 'white', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Let's Connect.</h3>
                  <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>Fill out the form below and our experts will get back to you with a free consultation.</p>
                  
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Full Name</label>
                      <div style={{ position: 'relative' }}>
                        <User size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Work Email</label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Company / Project</label>
                      <div style={{ position: 'relative' }}>
                        <Briefcase size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Acme Corp" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    
                    <button type="submit" disabled={loading} style={{ width: '100%', padding: 16, borderRadius: 12, border: 'none', background: loading ? '#94a3b8' : 'linear-gradient(135deg, #6C63FF, #00C2FF)', color: 'white', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 10px 20px rgba(108,99,255,0.25)' }}>
                      {loading ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 size={18} /></motion.div> Sending...</> : <>Submit Inquiry <ArrowRight size={16} /></>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
