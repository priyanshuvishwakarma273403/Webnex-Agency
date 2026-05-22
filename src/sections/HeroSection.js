'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Play, Zap, Code2, Bot, Cloud } from 'lucide-react';



const rotatingWords = ['AI Powered', 'Scalable', 'Futuristic', 'Premium'];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
  { value: '12+', label: 'Services' },
];

const techBadges = [
  { icon: Code2, label: 'React / Next.js', color: '#61DAFB' },
  { icon: Cloud, label: 'DevOps & Cloud', color: '#00C2FF' },
  { icon: Bot, label: 'AI / ML', color: '#6C63FF' },
  { icon: Zap, label: 'Spring Boot', color: '#6DB33F' },
];

export default function HeroSection() {
  const mouse = useRef({ x: 0, y: 0 });
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setWordIdx(p => (p + 1) % rotatingWords.length), 2200);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: 72,
      }}
      className="grid-bg"
    >
      {/* Blobs */}
      <div style={{ position: 'absolute', top: 80, left: -60, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(108,99,255,0.1) 0%,transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,194,255,0.08) 0%,transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <style>{`
          .hero-grid { grid-template-columns: 1fr; }
          @media(min-width: 992px) { .hero-grid { grid-template-columns: 1fr 1.1fr; } }
          
          @media(max-width: 768px) { 
            .hero-grid { padding: 20px 0 60px; gap: 40px; } 
            .hero-left { display: flex; flex-direction: column; align-items: center; text-align: center; }
            .hero-stats { justify-content: center; gap: 20px !important; }
            .hero-btns { justify-content: center; width: 100%; }
            .hero-btns > a { width: 100%; justify-content: center; }
            .hero-badges { justify-content: center; }
            .hero-img-container { min-height: 320px !important; border-radius: 20px !important; }
            .hero-float-card { display: none !important; }
          }
        `}</style>
        <div className="hero-grid" style={{
          display: 'grid',
          gap: '48px 64px',
          alignItems: 'center',
          padding: '60px 0',
        }}>
          {/* Left */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6,-0.05,0.01,0.99] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: 24 }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 18px', borderRadius: '100px',
                background: 'rgba(108,99,255,0.08)',
                border: '1px solid rgba(108,99,255,0.22)',
                fontSize: 12, fontWeight: 700, color: '#6C63FF',
                letterSpacing: '0.1em',
              }}>
                <motion.div animate={{ scale: [1,1.4,1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C2FF', boxShadow: '0 0 8px #00C2FF' }} />
                AI-POWERED DIGITAL INNOVATION
              </span>
            </motion.div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 4.2rem)',
              fontWeight: 900, lineHeight: 1.1,
              fontFamily: 'Poppins, sans-serif',
              color: '#0F172A',
              letterSpacing: '-0.025em',
              marginBottom: 20,
            }}>
              We Build{' '}
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg,#6C63FF,#00C2FF)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}
              >
                {rotatingWords[wordIdx]}
              </motion.span>
              <br />Digital Experiences
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: '#64748b', lineHeight: 1.8,
              maxWidth: 500, marginBottom: 32,
            }}>
              From AI automation to full-stack development, branding, DevOps, and scalable SaaS — we craft the future of your business.
            </p>

            {/* Stats */}
            <div className="hero-stats" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 36 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.9rem', fontWeight: 900, fontFamily: 'Poppins,sans-serif', lineHeight: 1, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                <Play size={14} /> Explore Services
              </Link>
            </div>

            {/* Tech badges */}
            <div className="hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {techBadges.map((t) => (
                <motion.div
                  key={t.label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(108,99,255,0.12)',
                    fontSize: 12, fontWeight: 600, color: '#374151',
                    backdropFilter: 'blur(10px)',
                    cursor: 'default',
                  }}
                >
                  <t.icon size={13} color={t.color} strokeWidth={2} />
                  {t.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6,-0.05,0.01,0.99] }}
            style={{ position: 'relative' }}
          >
            {/* Glow bg */}
            <div style={{
              position: 'absolute', inset: '10%',
              background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(40px)',
            }} />
            
            <div className="hero-img-container" style={{
              position: 'relative', width: '100%', height: '100%', minHeight: 480,
              borderRadius: 30, overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(108,99,255,0.15)',
              border: '1px solid rgba(108,99,255,0.2)',
            }}>
              <img 
                src="/images/hero_illustration.png" 
                alt="AI Technology Illustration" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* Floating code cards */}
            <motion.div className="hero-float-card"
              initial={{ opacity: 0, y: -150, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.6 }}
              style={{ position: 'absolute', top: '5%', right: '-5%', zIndex: 10 }}
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  padding: '12px 18px', borderRadius: 14, background: 'rgba(15,23,42,0.85)',
                  border: '1px solid rgba(108,99,255,0.3)', backdropFilter: 'blur(20px)',
                  fontFamily: 'monospace', fontSize: 13, color: '#00C2FF',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                }}
              >
                <span style={{ color: '#6C63FF' }}>const </span>
                <span style={{ color: '#f8fafc' }}>ai</span>
                <span style={{ color: '#94a3b8' }}> = new </span>
                <span style={{ color: '#00C2FF' }}>WebNex()</span>
              </motion.div>
            </motion.div>

            <motion.div className="hero-float-card"
              initial={{ opacity: 0, y: -200, x: -50, rotate: 15 }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 45, damping: 14, delay: 0.8 }}
              style={{ position: 'absolute', bottom: '20%', left: '-8%', zIndex: 10 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                style={{
                  padding: '12px 18px', borderRadius: 14, background: 'rgba(15,23,42,0.85)',
                  border: '1px solid rgba(0,194,255,0.3)', backdropFilter: 'blur(20px)',
                  fontFamily: 'monospace', fontSize: 13, color: '#6C63FF',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 8
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C2FF', boxShadow: '0 0 10px #00C2FF' }} />
                <span style={{ color: '#00C2FF' }}>System.</span><span style={{ color: '#f8fafc' }}>optimize()</span>
              </motion.div>
            </motion.div>

            <motion.div className="hero-float-card"
              initial={{ opacity: 0, y: -250, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 1.0 }}
              style={{ position: 'absolute', top: '45%', right: '-12%', zIndex: 10 }}
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                style={{
                  padding: '10px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(108,99,255,0.2)', backdropFilter: 'blur(20px)',
                  fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, color: '#0F172A',
                  boxShadow: '0 12px 40px rgba(108,99,255,0.15)', display: 'flex', alignItems: 'center', gap: 8
                }}
              >
                <div style={{ width: 24, height: 24, borderRadius: 6, background: '#6DB33F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={14} color="white" />
                </div>
                99.9% Uptime
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 22, height: 36, border: '2px solid rgba(108,99,255,0.3)', borderRadius: 11, display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
          <div style={{ width: 3, height: 7, borderRadius: 2, background: 'linear-gradient(180deg,#6C63FF,#00C2FF)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
