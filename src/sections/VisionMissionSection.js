'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, CheckCircle2 } from 'lucide-react';

const ScrollRevealText = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"]
  });

  const isArray = Array.isArray(text);
  const totalWords = isArray ? text.reduce((acc, p) => acc + p.split(" ").length, 0) : text.split(" ").length;
  let wordCounter = 0;

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {isArray ? text.map((paragraph, pIdx) => {
        const words = paragraph.split(" ");
        return (
          <p key={pIdx} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.5, color: 'white', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
            {words.map((word, i) => {
              const start = wordCounter / totalWords;
              const end = start + (1 / totalWords);
              wordCounter++;
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              return (
                <motion.span key={i} style={{ opacity, display: 'inline-block' }}>
                  {word}
                </motion.span>
              );
            })}
          </p>
        );
      }) : (
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.5, color: 'white', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
          {text.split(" ").map((word, i) => {
            const start = i / totalWords;
            const end = start + (1 / totalWords);
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            return (
              <motion.span key={i} style={{ opacity, display: 'inline-block' }}>
                {word}
              </motion.span>
            );
          })}
        </p>
      )}
    </div>
  );
};

export default function VisionMissionSection() {
  return (
    <section className="section-padding" style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Background gradients */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0,194,255,0.1) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Vision Section */}
        <div style={{ marginBottom: 120 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,194,255,0.1)', color: '#00C2FF', padding: '8px 16px', borderRadius: 100, fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 40 }}>
            <Eye size={18} /> OUR VISION
          </div>
          <div>
            <ScrollRevealText text={[
              "Our vision is to become a trusted global digital agency known for creativity, innovation, quality, and client success.",
              "We aspire to help businesses transform their ideas into powerful digital brands through technology, strategy, and creative excellence.",
              "Webnex envisions a future where every startup and business can achieve digital growth with smart, scalable, and impactful solutions built for long-term success."
            ]} />
          </div>
        </div>

        {/* Mission Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(108,99,255,0.1)', color: '#8B83FF', padding: '8px 16px', borderRadius: 100, fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 40 }}>
              <Target size={18} /> OUR MISSION
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.2, fontFamily: 'Poppins, sans-serif', marginBottom: 32 }}>
              Empowering <span className="gradient-text">Startups & Businesses</span>
            </h2>
            
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 24 }}>
              At Webnex, our mission is to empower startups, entrepreneurs, and businesses with innovative digital solutions that help them grow, succeed, and stand out in the competitive online world.
            </p>
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8 }}>
              Our goal is to make professional digital services accessible, affordable, and growth-focused for every business.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: 40, borderRadius: 32, backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32, fontFamily: 'Poppins, sans-serif' }}>We aim to deliver:</h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                'Creative and modern designs',
                'High-performance websites',
                'Reliable software solutions',
                'Strong branding strategies',
                'Result-driven digital experiences'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 18, fontWeight: 500, color: '#e2e8f0' }}>
                  <div style={{ color: '#00C2FF' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
