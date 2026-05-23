'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Sharma', role: 'CEO, TechStartup India', initials: 'AS', rating: 5, text: 'WebNex transformed our startup from a basic idea to a fully functional AI-powered SaaS in 3 months. The quality is absolutely world-class. Their team is exceptional.', color: '#6C63FF' },
  { name: 'Priya Patel', role: 'Founder, EduTech Solutions', initials: 'PP', rating: 4, text: 'The AI chatbot they built reduced our customer support workload by 70%. Their team is incredibly talented and always goes above and beyond what you expect.', color: '#00C2FF' },
  { name: 'Rahul Verma', role: 'CTO, E-Commerce Giant', initials: 'RV', rating: 5, text: 'Exceptional DevOps and cloud infrastructure. Our deployment time went from hours to minutes. WebNex is our go-to partner for all technical needs going forward.', color: '#FF6B9D' },
  { name: 'Sneha Gupta', role: 'Director, Restaurant Chain', initials: 'SG', rating: 5, text: 'They built us a stunning restaurant website that doubled revenue in the first month. Professional, fast, creative team — I cannot recommend them enough.', color: '#2ECC71' },
  { name: 'Mohammed Khan', role: 'Engineer, CNC Manufacturing', initials: 'MK', rating: 4, text: 'The CNC control system they developed for our factory is incredible. Precision automation saved us 40% in operational costs. Highly recommended to any manufacturer.', color: '#F89820' },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(p => (p + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg,#f8f7ff 0%,#f0f8ff 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(108,99,255,0.07) 0%,transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 52 }}>
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label">
            <Star size={12} /> Client Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 12 }}>
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
        </div>

        {/* Featured */}
        <div style={{ maxWidth: 760, margin: '0 auto 48px' }}>
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.45 }}
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(30px)',
                border: `1px solid ${t.color}22`,
                borderRadius: 28, padding: 'clamp(28px,5vw,48px)',
                textAlign: 'center',
                boxShadow: `0 30px 80px ${t.color}10`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Big quote mark */}
              <Quote size={60} style={{ position: 'absolute', top: 20, left: 24, color: t.color, opacity: 0.08 }} />

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}>
                    <Star size={18} fill={i < t.rating ? "#F89820" : "transparent"} color={i < t.rating ? "#F89820" : "#d1d5db"} />
                  </motion.div>
                ))}
              </div>

              <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: '#374151', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: `linear-gradient(135deg,${t.color},${t.color}80)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'Poppins,sans-serif',
                  boxShadow: `0 4px 16px ${t.color}30`,
                }}>
                  {t.initials}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#0F172A', fontFamily: 'Poppins,sans-serif' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24 }}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
              style={{ width: 38, height: 38, borderRadius: 10, border: '1px solid rgba(108,99,255,0.2)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={16} color="#6C63FF" />
            </motion.button>

            <div style={{ display: 'flex', gap: 7 }}>
              {testimonials.map((_, i) => (
                <motion.button key={i} onClick={() => setCurrent(i)} animate={{ width: i === current ? 26 : 8, background: i === current ? '#6C63FF' : 'rgba(108,99,255,0.2)' }}
                  style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
              style={{ width: 38, height: 38, borderRadius: 10, border: 'none', background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={16} color="white" />
            </motion.button>
          </div>
        </div>


      </div>
    </section>
  );
}
