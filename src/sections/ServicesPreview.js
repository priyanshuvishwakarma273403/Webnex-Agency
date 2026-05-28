'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Cloud, Bot, Rocket, ArrowRight, Zap } from 'lucide-react';

const preview = [
  { icon: Code2, title: 'React & Next.js', desc: 'Ultra-fast web apps', color: '#61DAFB', link: '/services/nextjs-development' },
  { icon: Cloud, title: 'DevOps & Cloud', desc: 'Scalable infrastructure', color: '#00C2FF', link: '/services' },
  { icon: Bot, title: 'AI Development', desc: 'Intelligent automation', color: '#6C63FF', link: '/services/ai-development' },
  { icon: Rocket, title: 'SaaS Platforms', desc: 'End-to-end products', color: '#E74C3C', link: '/services/full-stack-development' },
];

export default function ServicesPreview() {


  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label"><Zap size={12} /> Our Expertise</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 12 }}>
            Everything You Need to{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            From idea to launch — we handle every layer of your digital stack.
          </p>
        </div>

        <style>{`
          .sp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 18px; margin-bottom: 40px; }
          @media (max-width: 640px) {
            .sp-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
            .sp-card { padding: 18px 14px !important; border-radius: 14px !important; text-align: center; }
            .sp-icon-wrap { margin: 0 auto 12px !important; width: 40px !important; height: 40px !important; border-radius: 10px !important; }
            .sp-card h3 { font-size: 13px !important; margin-bottom: 4px !important; }
            .sp-card p { font-size: 11px !important; line-height: 1.4 !important; }
          }
        `}</style>

        <div className="sp-grid">
          {preview.map((item, i) => (
            <Link href={item.link} key={item.title} style={{ display: 'block', textDecoration: 'none' }}>
              <motion.div
                className="sp-card group"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', bounce: 0.4 }}
              whileHover={{ y: -12, scale: 1.03 }}
              style={{
                padding: '32px 28px',
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                border: '1px solid rgba(0,0,0,0.04)',
                borderRadius: 24,
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Glowing Background Blob */}
              <div 
                className="transition-all duration-500 ease-out group-hover:scale-150 group-hover:opacity-40"
                style={{ 
                  position: 'absolute', top: -60, right: -60, width: 140, height: 140, 
                  background: item.color, filter: 'blur(60px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' 
                }} 
              />
              
              <div className="sp-icon-wrap transition-transform duration-300 group-hover:scale-110" style={{
                width: 60, height: 60, borderRadius: 18,
                background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
                border: `1px solid ${item.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
                position: 'relative',
                zIndex: 1,
                boxShadow: `0 10px 30px ${item.color}30`
              }}>
                <item.icon size={28} color={item.color} strokeWidth={2} />
              </div>

              <h3 style={{ fontSize: 19, fontWeight: 800, color: '#0F172A', marginBottom: 10, fontFamily: 'Poppins,sans-serif', position: 'relative', zIndex: 1 }}>
                {item.title}
              </h3>
              
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, position: 'relative', zIndex: 1, marginBottom: 24, flexGrow: 1 }}>
                {item.desc}
              </p>

              {/* Reveal Link on Hover */}
              <div 
                className="transition-all duration-300 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 800, color: item.color, position: 'relative', zIndex: 1 }}
              >
                Explore Solution <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>
        ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/services" className="btn-outline">
            View All 12 Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
