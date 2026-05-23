'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Telescope, Target, CheckCircle2, Rocket } from 'lucide-react';

const ScrollRevealText = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 40%"] // Adjusted for a slower, waiting feel
  });

  const isArray = Array.isArray(text);
  const totalWords = isArray ? text.reduce((acc, p) => acc + p.split(" ").length, 0) : text.split(" ").length;
  let wordCounter = 0;

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      {isArray ? text.map((paragraph, pIdx) => {
        const words = paragraph.split(" ");
        return (
          <p key={pIdx} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.5, color: 'white', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
            {words.map((word, i) => {
              const start = wordCounter / totalWords;
              // Slightly expanded end to create a trailing/waiting effect
              const end = start + (1.5 / totalWords);
              wordCounter++;
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              const y = useTransform(scrollYProgress, [start, end], [10, 0]);
              return (
                <motion.span key={i} style={{ opacity, y, display: 'inline-block' }}>
                  {word}
                </motion.span>
              );
            })}
          </p>
        );
      }) : null}
    </div>
  );
};

export default function VisionMissionSection() {
  return (
    <section className="section-padding" style={{ 
      background: '#030014', 
      backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(108, 99, 255, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(0, 194, 255, 0.15), transparent 25%)',
      color: 'white', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Decorative Grid Lines */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.5, pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Vision Section */}
        <div style={{ marginBottom: 140, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.2)', color: '#00C2FF', padding: '10px 24px', borderRadius: 100, fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 50 }}
          >
            <Telescope size={20} /> OUR VISION
          </motion.div>
          
          <div style={{ position: 'relative', padding: '0 20px' }}>
            {/* Soft glow behind text */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(ellipse, rgba(108,99,255,0.2) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: -1 }} />
            
            <ScrollRevealText text={[
              "Our vision is to become a trusted global digital agency known for creativity, innovation, quality, and client success.",
              "We aspire to help businesses transform their ideas into powerful digital brands through technology, strategy, and creative excellence.",
              "Webnex envisions a future where every startup and business can achieve digital growth with smart, scalable, and impactful solutions built for long-term success."
            ]} />
          </div>

          {/* Generated Vision Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: '100%', maxWidth: '1000px', margin: '80px auto 0', borderRadius: '32px', overflow: 'hidden', position: 'relative', boxShadow: '0 40px 80px rgba(0,194,255,0.15)' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, #030014 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <img 
              src="/images/webnex_vision_future.png" 
              alt="Webnex Future Digital Vision" 
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '21/9', objectFit: 'cover' }}
            />
          </motion.div>

        </div>

        {/* Mission Section Divider */}
        <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0))', margin: '0 auto 80px' }} />

        {/* Mission Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', color: '#8B83FF', padding: '10px 24px', borderRadius: 100, fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 30 }}>
              <Rocket size={20} /> OUR MISSION
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, fontFamily: 'Poppins, sans-serif', marginBottom: 32 }}>
              Empowering <br/><span className="gradient-text">Startups & Brands</span>
            </h2>
            
            <p style={{ fontSize: 20, color: '#94a3b8', lineHeight: 1.8, marginBottom: 24, fontWeight: 400 }}>
              At Webnex, our mission is to empower startups, entrepreneurs, and businesses with innovative digital solutions that help them grow, succeed, and stand out in the competitive online world.
            </p>
            <p style={{ fontSize: 20, color: '#94a3b8', lineHeight: 1.8, fontWeight: 400 }}>
              Our goal is to make professional digital services accessible, affordable, and growth-focused for every business.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)', padding: 50, borderRadius: 40, backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(0,194,255,0.1)', color: '#00C2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, fontFamily: 'Poppins, sans-serif' }}>We aim to deliver:</h3>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                'Creative and modern designs',
                'High-performance websites',
                'Reliable software solutions',
                'Strong branding strategies',
                'Result-driven digital experiences'
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 18, fontWeight: 600, color: '#e2e8f0' }}
                >
                  <div style={{ color: '#00C2FF', filter: 'drop-shadow(0 0 8px rgba(0,194,255,0.5))' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
