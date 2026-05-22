'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'hello@webnex.in', href: 'mailto:hello@webnex.in', color: '#6C63FF' },
  { icon: MessageSquare, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210', color: '#25D366' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 9AM – 7PM IST', href: null, color: '#F89820' },
  { icon: MapPin, label: 'Location', value: 'Remote-first, India', href: null, color: '#FF6B9D' },
];

export default function ContactSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone || 'Not provided',
        service: form.service,
        message: form.message
      };

      await emailjs.send(
        'service_3tatd0b',
        'template_kqj2cyp',
        templateParams,
        'EV1QwfUS_AfzdGi9G'
      );
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Animated blobs */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
            width: 200 + i * 100, height: 200 + i * 100,
            background: i % 2 === 0 ? 'radial-gradient(circle,#6C63FF,transparent)' : 'radial-gradient(circle,#00C2FF,transparent)',
            left: `${10 + i * 30}%`, top: `${20 + i * 15}%`,
            filter: 'blur(50px)',
          }}
        />
      ))}

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label">
            <Mail size={12} /> Let's Connect
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 14 }}>
            Start Your <span className="gradient-text">Project Today</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
            Ready to build something amazing? We respond within 24 hours.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '48px 64px', alignItems: 'start' }}>
          {/* Info column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins,sans-serif' }}>
              Let's build the future together
            </h3>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              Whether you have a startup idea or an enterprise challenge, we are here to transform it into reality with AI and modern technology.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.label}
                    whileHover={{ x: 5, boxShadow: `0 6px 20px ${info.color}12` }}
                    onClick={() => info.href && window.open(info.href)}
                    style={{
                      display: 'flex', gap: 14, padding: '14px 18px',
                      background: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(108,99,255,0.09)',
                      borderRadius: 14,
                      cursor: info.href ? 'pointer' : 'default',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: `${info.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color={info.color} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: info.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{info.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F172A' }}>{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi, I'm interested in WebNex services!"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 14px 36px rgba(37,211,102,0.28)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 24px', borderRadius: 13,
                background: 'linear-gradient(135deg,#25D366,#128C7E)',
                color: 'white', fontWeight: 700, fontSize: 15,
                textDecoration: 'none', fontFamily: 'Poppins,sans-serif',
              }}
            >
              <MessageSquare size={18} strokeWidth={2} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 }}
            style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(108,99,255,0.14)',
              borderRadius: 24, padding: 'clamp(24px,5vw,36px)',
              boxShadow: '0 24px 70px rgba(108,99,255,0.08)',
            }}
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Send size={26} color="white" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins,sans-serif' }}>Message Sent!</h3>
                <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.7 }}>Thank you! We'll get back to you within 24 hours with a detailed response.</p>
                <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',service:'',message:'' }); }}
                  style={{ padding: '11px 24px', borderRadius: 11, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', color: 'white', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0F172A', marginBottom: 22, fontFamily: 'Poppins,sans-serif' }}>
                  Tell us about your project
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name *</label>
                    <input className="input-field" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                    <input className="input-field" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</label>
                  <input className="input-field" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service Needed *</label>
                  <select className="input-field" name="service" value={form.service} onChange={handleChange} required style={{ cursor: 'pointer' }}>
                    <option value="">Select a service...</option>
                    <option>React / Next.js Development</option>
                    <option>Java Full Stack Development</option>
                    <option>Spring Boot APIs</option>
                    <option>DevOps & Cloud Services</option>
                    <option>AI Chatbot Development</option>
                    <option>SaaS Development</option>
                    <option>Logo & Brand Design</option>
                    <option>CNC Design Solutions</option>
                    <option>Startup Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                  <textarea className="input-field" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your project, goals, and timeline..." required style={{ resize: 'vertical', minHeight: 96 }} />
                </div>

                <motion.button type="submit" disabled={loading} whileHover={!loading ? { scale: 1.02, boxShadow: '0 12px 35px rgba(108,99,255,0.35)' } : {}} whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%', padding: '14px', borderRadius: 13,
                    background: loading ? '#94a3b8' : 'linear-gradient(135deg,#6C63FF,#00C2FF)',
                    color: 'white', fontWeight: 700, fontSize: 15, border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'Poppins,sans-serif',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}>
                  {loading ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Loader2 size={18} />
                    </motion.div> Sending...</>
                  ) : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
