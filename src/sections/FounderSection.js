'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Target, Lightbulb, Users } from 'lucide-react';

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, right: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,194,255,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container-custom" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Image & Cards Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)', background: '#0F172A', maxWidth: 420, width: '100%' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(0,194,255,0.2) 100%)', zIndex: 1, pointerEvents: 'none' }} />
              <img 
                src="/himanshu.jpeg" 
                alt="Himanshu Vishwakarma - Founder of Webnex" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/5', position: 'relative', zIndex: 0 }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 30px 30px', background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, transparent 100%)', zIndex: 2 }}>
                <h3 style={{ color: 'white', fontSize: 24, fontWeight: 800, margin: '0 0 4px', fontFamily: 'Poppins, sans-serif' }}>Himanshu Vishwakarma</h3>
                <p style={{ color: '#00C2FF', margin: 0, fontWeight: 600, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founder & CEO</p>
                <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                  <a href="#" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: 8, borderRadius: 100, display: 'inline-flex', transition: 'background 0.3s' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: 8, borderRadius: 100, display: 'inline-flex', transition: 'background 0.3s' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', bottom: 30, right: -20, background: 'white', padding: '16px 24px', borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 16, zIndex: 3 }}
            >
              <div style={{ background: 'rgba(108,99,255,0.1)', color: '#6C63FF', width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={24} />
              </div>
              <div>
                <p style={{ fontSize: 24, fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.1 }}>20+</p>
                <p style={{ fontSize: 13, color: '#64748b', margin: 0, fontWeight: 600 }}>Skilled Experts</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(108,99,255,0.1)', color: '#6C63FF', padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 20 }}>
              <Sparkles size={16} /> OUR STORY
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#0F172A', marginBottom: 24, lineHeight: 1.2, fontFamily: 'Poppins, sans-serif' }}>
              Building Digital Experiences with <span className="gradient-text">Creativity & Innovation</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: '#475569', fontSize: 16, lineHeight: 1.8 }}>
              <p>
                Founded in 2024 by <strong>Himanshu Vishwakarma</strong>, Webnex is a modern digital agency dedicated to helping startups, businesses, and brands establish a powerful online presence through creative design, smart technology, and innovative digital solutions.
              </p>
              <p>
                What started as a freelancing journey driven by creativity and passion has now evolved into a growing digital agency powered by a team of <strong>20+ skilled experts</strong> committed to delivering professional, creative, and business-focused digital experiences.
              </p>
              
              <div style={{ background: '#f8fafc', borderLeft: '4px solid #00C2FF', padding: 24, borderRadius: '0 16px 16px 0', margin: '10px 0' }}>
                <p style={{ color: '#0F172A', fontWeight: 600, margin: 0, fontSize: 17, fontStyle: 'italic' }}>
                  "At Webnex, we combine creativity, strategy, and technology to build impactful digital solutions that help businesses grow, stand out, and succeed in today's competitive market."
                </p>
              </div>

              <p>
                From premium branding and modern web experiences to scalable digital solutions, Webnex is committed to helping businesses transform their ideas into successful digital brands with long-term growth and future-ready innovation. Our focus remains steadfast on innovation, quality, professionalism, and client satisfaction.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ background: 'rgba(0,194,255,0.1)', color: '#00C2FF', width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={20} />
                </div>
                <span style={{ fontWeight: 700, color: '#0F172A' }}>Client Focused</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ background: 'rgba(108,99,255,0.1)', color: '#6C63FF', width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lightbulb size={20} />
                </div>
                <span style={{ fontWeight: 700, color: '#0F172A' }}>Future Ready</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
