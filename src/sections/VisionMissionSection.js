'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Rocket, CheckCircle2 } from 'lucide-react';

export default function VisionMissionSection() {
  const containerRef = useRef(null);

  // Scroll configuration for Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const missionItems = [
    'Creative and modern designs',
    'High-performance websites',
    'Reliable software solutions',
    'Strong branding strategies',
    'Result-driven digital experiences'
  ];

  return (
    <section ref={containerRef} style={{ background: '#0F172A', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Dynamic Background Gradients */}
      <div style={{ position: 'absolute', inset: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236c63ff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ opacity }} className="vision-mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
          
          {/* Vision Block */}
          <motion.div style={{ y: y1 }} className="vision-block">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 32, padding: '50px 40px', backdropFilter: 'blur(10px)', height: '100%' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, #6C63FF, #8B83FF)', color: 'white', marginBottom: 32, boxShadow: '0 20px 40px rgba(108,99,255,0.3)' }}>
                <Eye size={32} />
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'white', fontWeight: 800, marginBottom: 24, fontFamily: 'Poppins, sans-serif' }}>
                Our <span style={{ color: '#6C63FF' }}>Vision</span>
              </h2>
              <div style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p>
                  Our vision is to become a trusted global digital agency known for creativity, innovation, quality, and client success.
                </p>
                <p>
                  We aspire to help businesses transform their ideas into powerful digital brands through technology, strategy, and creative excellence.
                </p>
                <p style={{ color: '#cbd5e1', fontWeight: 500, borderLeft: '3px solid #6C63FF', paddingLeft: 16 }}>
                  Webnex envisions a future where every startup and business can achieve digital growth with smart, scalable, and impactful solutions built for long-term success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Block */}
          <motion.div style={{ y: y2 }} className="mission-block">
            <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(0,194,255,0.2)', borderRadius: 32, padding: '50px 40px', backdropFilter: 'blur(10px)', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(0,194,255,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />
              
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, #00C2FF, #00E5FF)', color: '#0F172A', marginBottom: 32, boxShadow: '0 20px 40px rgba(0,194,255,0.3)' }}>
                <Rocket size={32} />
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'white', fontWeight: 800, marginBottom: 24, fontFamily: 'Poppins, sans-serif' }}>
                Our <span style={{ color: '#00C2FF' }}>Mission</span>
              </h2>
              <div style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 24 }}>
                  At Webnex, our mission is to empower startups, entrepreneurs, and businesses with innovative digital solutions that help them grow, succeed, and stand out in the competitive online world.
                </p>
                <p style={{ color: 'white', fontWeight: 600, marginBottom: 16 }}>We aim to deliver:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {missionItems.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#cbd5e1' }}>
                      <div style={{ color: '#00C2FF' }}><CheckCircle2 size={20} /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ background: 'rgba(0,194,255,0.1)', padding: '16px 20px', borderRadius: 16 }}>
                  <p style={{ margin: 0, color: '#e2e8f0', fontWeight: 500 }}>
                    Our goal is to make professional digital services accessible, affordable, and growth-focused for every business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
