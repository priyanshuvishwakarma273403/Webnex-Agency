'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  LayoutDashboard, Cloud, ShoppingCart, Settings, UtensilsCrossed,
  Monitor, ArrowRight, ExternalLink, Zap
} from 'lucide-react';

const projects = [
  { icon: LayoutDashboard, title: 'AI Dashboard', category: 'AI & Analytics', desc: 'Real-time AI analytics platform with ML model visualization and live data streaming.', color: '#6C63FF', tags: ['React', 'Python', 'TensorFlow'] },
  { icon: Cloud, title: 'SaaS Platform', category: 'SaaS Development', desc: 'Multi-tenant SaaS platform with subscription management, billing, and team collaboration.', color: '#00C2FF', tags: ['Next.js', 'Spring Boot', 'PostgreSQL'] },
  { icon: ShoppingCart, title: 'E-Commerce Store', category: 'Web Development', desc: 'Full-featured e-commerce with AI-powered product recommendations and Stripe payments.', color: '#FF6B9D', tags: ['React', 'Node.js', 'Stripe'] },
  { icon: Settings, title: 'CNC Control System', category: 'CNC & Automation', desc: 'Precision CNC machining control and real-time monitoring dashboard for manufacturing.', color: '#F89820', tags: ['Java', 'Spring', 'IoT'] },
  { icon: UtensilsCrossed, title: 'Restaurant Website', category: 'Web Design', desc: 'Premium restaurant website with online ordering, reservations, and admin dashboard.', color: '#2ECC71', tags: ['Next.js', 'Stripe', 'Firebase'] },
  { icon: Monitor, title: 'Developer Portfolio', category: 'Portfolio', desc: 'Ultra-modern 3D developer portfolio with GSAP animations and Three.js visuals.', color: '#9B59B6', tags: ['Three.js', 'GSAP', 'Framer Motion'] },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        minWidth: 320,
        background: 'rgba(255,255,255,0.9)',
        border: `1px solid ${hovered ? project.color + '35' : 'rgba(108,99,255,0.1)'}`,
        borderRadius: 22,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        boxShadow: hovered ? `0 24px 60px ${project.color}18` : '0 4px 16px rgba(0,0,0,0.04)',
        flexShrink: 0,
      }}
      whileHover={{ scale: 1.02, y: -6 }}
    >
      {/* Top Image Area */}
      <div style={{
        height: 190,
        background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(${project.color}10 1px,transparent 1px),linear-gradient(90deg,${project.color}10 1px,transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

        <motion.div animate={hovered ? { scale: 1.18, rotate: 5 } : { scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 280 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20,
            background: `${project.color}20`,
            border: `2px solid ${project.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={30} color={project.color} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Category */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          padding: '4px 12px', borderRadius: '100px',
          background: `${project.color}20`,
          border: `1px solid ${project.color}35`,
          fontSize: 11, fontWeight: 700, color: project.color,
          backdropFilter: 'blur(10px)',
        }}>
          {project.category}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: 'absolute', inset: 0,
            background: `${project.color}18`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: project.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ExternalLink size={18} color="white" strokeWidth={2} />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', marginBottom: 7, fontFamily: 'Poppins,sans-serif' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65, marginBottom: 14 }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px', borderRadius: 6,
              background: `${project.color}10`,
              border: `1px solid ${project.color}22`,
              fontSize: 11, fontWeight: 600, color: project.color,
            }}>{tag}</span>
          ))}
        </div>
        <motion.div animate={{ x: hovered ? 4 : 0 }} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, color: project.color }}>
          View Project <ArrowRight size={13} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const scrollRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });

  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container-custom">
        <div ref={headingRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label">
              <Zap size={12} /> Our Work
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A' }}>
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ dir: -1, label: '←' }, { dir: 1, label: '→', primary: true }].map(btn => (
              <motion.button key={btn.dir} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scroll(btn.dir)}
                style={{
                  width: 42, height: 42, borderRadius: 11, border: 'none',
                  background: btn.primary ? 'linear-gradient(135deg,#6C63FF,#00C2FF)' : 'rgba(108,99,255,0.07)',
                  color: btn.primary ? 'white' : '#6C63FF',
                  cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: btn.primary ? 'none' : '1px solid rgba(108,99,255,0.15)',
                }}>
                {btn.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="hide-scrollbar" style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 12, scrollSnapType: 'x mandatory' }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{ scrollSnapAlign: 'start' }}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 44 }}>
          <Link href="/contact" className="btn-primary">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
