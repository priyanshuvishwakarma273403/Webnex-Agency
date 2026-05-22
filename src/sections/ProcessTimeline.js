'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Lightbulb, Palette, Code2, Bot, TestTube, Rocket,
  TrendingUp, ArrowRight, Zap
} from 'lucide-react';

const steps = [
  { num: '01', icon: Lightbulb, title: 'Discovery', desc: 'We deep-dive into your vision, goals, and audience through structured discovery sessions and competitive analysis.', color: '#6C63FF' },
  { num: '02', icon: Palette, title: 'Design', desc: 'Our designers craft pixel-perfect wireframes and high-fidelity prototypes that wow your users from day one.', color: '#00C2FF' },
  { num: '03', icon: Code2, title: 'Development', desc: 'Engineers build your product with clean, maintainable, scalable code using the latest industry technologies.', color: '#FF6B9D' },
  { num: '04', icon: Bot, title: 'AI Integration', desc: 'We integrate intelligent AI features to automate workflows, personalize experiences, and enhance user value.', color: '#F89820' },
  { num: '05', icon: TestTube, title: 'Testing & QA', desc: 'Rigorous quality assurance across all devices and scenarios — we ship only when it is truly production-ready.', color: '#2ECC71' },
  { num: '06', icon: Rocket, title: 'Deployment', desc: 'Zero-downtime deployments with CI/CD pipelines, monitoring dashboards, and rollback capabilities.', color: '#9B59B6' },
  { num: '07', icon: TrendingUp, title: 'Growth', desc: 'Post-launch analytics, SEO optimization, feature enhancements, and continuous performance improvements.', color: '#E74C3C' },
];

export default function ProcessTimeline() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  return (
    <section className="section-padding" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(108,99,255,0.04) 0%,transparent 55%), radial-gradient(ellipse at 80% 50%,rgba(0,194,255,0.04) 0%,transparent 55%)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label">
            <Zap size={12} /> Our Process
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 14 }}>
            How We <span className="gradient-text">Build</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
            A proven 7-step process that transforms your idea into a world-class digital product.
          </motion.p>
        </div>

        {/* Main Timeline */}
        <div style={{ position: 'relative' }} className="timeline-main">
          <style>{`
            .timeline-grid { display: grid; grid-template-columns: 1fr 80px 1fr; gap: 24px; alignItems: center; margin-bottom: 44px; }
            .timeline-card { background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); padding: 20px 24px; border-radius: 18px; max-width: 340px; box-shadow: 0 4px 16px rgba(0,0,0,0.04); }
            .timeline-card h3 { font-size: 16px; font-weight: 700; color: #0F172A; margin-bottom: 6px; font-family: Poppins, sans-serif; }
            .timeline-card p { font-size: 13.5px; color: #64748b; line-height: 1.65; }
            .timeline-icon-wrap { width: 52px; height: 52px; border-radius: 50%; display: flex; justify-content: center; align-items: center; z-index: 1; position: relative; cursor: default; }
            
            @media (max-width: 768px) {
              .timeline-grid { grid-template-columns: 1fr 40px 1fr; gap: 8px; margin-bottom: 32px; }
              .timeline-card { padding: 12px; border-radius: 12px; }
              .timeline-card h3 { font-size: 13px; margin-bottom: 4px; }
              .timeline-card p { font-size: 11px; line-height: 1.4; }
              .timeline-icon-wrap { width: 36px; height: 36px; box-shadow: 0 0 0 3px white, 0 0 0 4px rgba(0,0,0,0.05) !important; }
              .timeline-icon-wrap svg { width: 16px; height: 16px; }
              .timeline-step-num { font-size: 9px !important; }
            }
          `}</style>

          {/* Center line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, transform: 'translateX(-50%)', background: 'linear-gradient(180deg,rgba(108,99,255,0.15),rgba(0,194,255,0.15))', pointerEvents: 'none' }} />
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#6C63FF,#00C2FF)', transformOrigin: 'top' }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.num}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="timeline-grid"
              >
                {/* Left */}
                <div style={{ textAlign: 'right' }}>
                  {isLeft && (
                    <motion.div whileHover={{ scale: 1.02, x: -4 }} className="timeline-card" style={{ display: 'inline-block', textAlign: 'left', border: `1px solid ${step.color}20` }}>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </motion.div>
                  )}
                </div>

                {/* Center node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <motion.div whileHover={{ scale: 1.15 }} className="timeline-icon-wrap" style={{
                    background: `linear-gradient(135deg,${step.color},${step.color}80)`,
                    boxShadow: `0 0 0 5px white, 0 0 0 7px ${step.color}25, 0 6px 20px ${step.color}30`,
                  }}>
                    <Icon color="white" strokeWidth={2} />
                  </motion.div>
                  <span className="timeline-step-num" style={{ fontSize: 10, fontWeight: 800, color: step.color, letterSpacing: '0.08em' }}>{step.num}</span>
                </div>

                {/* Right */}
                <div>
                  {!isLeft && (
                    <motion.div whileHover={{ scale: 1.02, x: 4 }} className="timeline-card" style={{ display: 'inline-block', border: `1px solid ${step.color}20` }}>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/contact" className="btn-primary">
            Start Your Journey <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
