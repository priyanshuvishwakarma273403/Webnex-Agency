'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Play, Zap, Code2, Bot, Cloud } from 'lucide-react';
import { SiSpringboot, SiApachekafka, SiRedis, SiDocker, SiKubernetes, SiNodedotjs, SiJenkins, SiKalilinux, SiGitlab, SiRabbitmq, SiReact, SiNextdotjs } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';



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

const floatingLogos = [
  // Original 6
  { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F', top: '5%', right: '-5%', delay: 0.6 },
  { icon: SiApachekafka, name: 'Kafka', color: '#231F20', top: '45%', right: '-12%', delay: 0.8 },
  { icon: SiRedis, name: 'Redis', color: '#DC382D', bottom: '10%', right: '8%', delay: 1.0 },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', bottom: '20%', left: '-8%', delay: 1.2 },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5', top: '35%', left: '-10%', delay: 0.9 },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933', top: '8%', left: '5%', delay: 0.7 },
  
  // New 7
  { icon: SiJenkins, name: 'Jenkins', color: '#D24939', top: '-5%', left: '35%', delay: 1.4 },
  { icon: SiKalilinux, name: 'Kali Linux', color: '#557C94', bottom: '35%', right: '-15%', delay: 1.1 },
  { icon: SiGitlab, name: 'GitLab', color: '#FCA121', top: '65%', left: '-12%', delay: 1.3 },
  { icon: SiRabbitmq, name: 'RabbitMQ', color: '#FF6600', bottom: '-2%', left: '25%', delay: 1.5 },
  { icon: FaAws, name: 'AWS', color: '#FF9900', top: '25%', right: '-14%', delay: 0.5 },
  { icon: SiReact, name: 'React', color: '#61DAFB', bottom: '2%', right: '35%', delay: 1.6 },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000', top: '20%', left: '-12%', delay: 0.4 },
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

            {/* Floating tech logos */}
            {floatingLogos.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.name} className="hero-float-card"
                  initial={{ opacity: 0, y: -200, scale: 0.5, rotate: i % 2 === 0 ? -15 : 15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 50, damping: 12, delay: item.delay }}
                  style={{ 
                    position: 'absolute', 
                    top: item.top, bottom: item.bottom, left: item.left, right: item.right, 
                    zIndex: 10 
                  }}
                >
                  <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                    style={{
                      padding: '10px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.95)',
                      border: `1px solid ${item.color}30`, backdropFilter: 'blur(20px)',
                      boxShadow: `0 14px 40px ${item.color}25`, display: 'flex', alignItems: 'center', gap: 10
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color={item.color} />
                    </div>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 700, color: '#0F172A' }}>{item.name}</span>
                  </motion.div>
                </motion.div>
              );
            })}
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
