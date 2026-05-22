'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowRight, X, CheckCircle, Send, User, Mail, Briefcase, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { 
  SiReact, SiSpringboot, SiDocker, SiOpenai, 
  SiFigma, SiZapier, SiStripe, SiFramer
} from 'react-icons/si';
import { FaJava, FaCogs, FaLightbulb, FaAws } from 'react-icons/fa';

const services = [
  { icon: SiFigma, title: 'Logo & Brand Design', desc: 'Premium brand identities that stand out in the market with stunning, memorable visuals.', color: '#F24E1E', bg: '#F24E1E12' },
  { icon: SiFramer, title: 'Brand Identity', desc: 'Complete brand strategy, style guides, typography, and visual systems for lasting impressions.', color: '#0055FF', bg: '#0055FF12' },
  { icon: SiReact, title: 'React Development', desc: 'Lightning-fast React & Next.js applications with pixel-perfect UX and best-in-class performance.', color: '#61DAFB', bg: '#61DAFB12' },
  { icon: FaJava, title: 'Java Full Stack', desc: 'Enterprise-grade full-stack solutions with Spring Boot, microservices, and robust architecture.', color: '#F89820', bg: '#F8982012' },
  { icon: SiSpringboot, title: 'Spring Boot APIs', desc: 'Scalable REST APIs built with Spring Boot, best practices, and production-ready security.', color: '#6DB33F', bg: '#6DB33F12' },
  { icon: FaAws, title: 'DevOps & Cloud', desc: 'CI/CD pipelines, cloud infrastructure on AWS/GCP/Azure, and automated deployments at scale.', color: '#FF9900', bg: '#FF990012' },
  { icon: SiDocker, title: 'Docker & Kubernetes', desc: 'Container orchestration, microservices management, and scalable K8s clusters for modern apps.', color: '#2496ED', bg: '#2496ED12' },
  { icon: SiOpenai, title: 'AI Chatbot Dev', desc: 'Intelligent AI-powered chatbots and virtual assistants that engage, convert, and support 24/7.', color: '#10A37F', bg: '#10A37F12' },
  { icon: FaCogs, title: 'CNC Design Solutions', desc: 'Precision CNC machining designs, manufacturing control systems, and automated production tools.', color: '#FF8C42', bg: '#FF8C4212' },
  { icon: SiStripe, title: 'SaaS Development', desc: 'End-to-end SaaS platform development from MVP to enterprise scale with multi-tenancy support.', color: '#635BFF', bg: '#635BFF12' },
  { icon: FaLightbulb, title: 'Startup Consulting', desc: 'Strategic guidance to help startups launch, grow, and scale rapidly with expert mentorship.', color: '#F1C40F', bg: '#F1C40F12' },
  { icon: SiZapier, title: 'Automation Systems', desc: 'Business process automation to eliminate repetitive tasks, boost efficiency, and save costs.', color: '#FF4A00', bg: '#FF4A0012' },
];

function ServiceCard({ service, index, onClick }) {
  const cardRef = useRef(null);
  const Icon = service.icon;

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const rx = (e.clientY - r.top - r.height / 2) / -12;
    const ry = (e.clientX - r.left - r.width / 2) / 12;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--x', `${e.clientX - r.left}px`);
    card.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <>
      <style>{`
        .prem-card-${index}:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.06), 0 10px 25px ${service.color}25 !important;
          border-color: ${service.color}35 !important;
        }
        .prem-card-${index}:hover .card-spotlight { opacity: 1 !important; }
        .prem-card-${index}:hover .corner-bg { transform: scale(1.5) !important; opacity: 0.8 !important; }
      `}</style>
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`prem-card-${index}`}
        onClick={onClick}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.6,-0.05,0.01,0.99] }}
        style={{
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(108,99,255,0.1)',
          borderRadius: 24,
          padding: '32px 28px',
          cursor: 'pointer',
          transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease',
          position: 'relative', overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {/* Spotlight */}
        <div 
          className="card-spotlight"
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1,
            background: `radial-gradient(400px circle at var(--x, 50%) var(--y, -20%), ${service.color}15, transparent 50%)`,
            opacity: 0, transition: 'opacity 0.4s ease'
          }}
        />

        {/* Corner accent */}
        <div className="corner-bg" style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`, transition: 'all 0.5s ease', pointerEvents: 'none', zIndex: -1 }} />

        {/* Icon */}
        <div style={{
          width: 54, height: 54, borderRadius: 16,
          background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)`,
          border: `1px solid ${service.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
          boxShadow: `inset 0 2px 10px ${service.color}10`,
          animation: `float ${3 + (index % 3) * 0.5}s ease-in-out infinite`,
          animationDelay: `${index * 0.15}s`,
        }}>
          <Icon size={24} color={service.color} strokeWidth={2} />
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', marginBottom: 10, fontFamily: 'Poppins,sans-serif' }}>
          {service.title}
        </h3>
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 20 }}>
          {service.desc}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: service.color }}>
          Explore service
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={14} strokeWidth={2.5} />
          </motion.span>
        </div>
      </motion.div>
    </>
  );
}

export default function ServicesSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const [activeService, setActiveService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const [activeServiceForm, setActiveServiceForm] = useState({ name: '', email: '', details: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '' });
  const [loading, setLoading] = useState(false);
  const [submittedService, setSubmittedService] = useState(false);
  const [submittedContact, setSubmittedContact] = useState(false);

  useEffect(() => {
    if (activeService || showContactModal) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      if (activeService) {
        setSubmittedService(false);
        setActiveServiceForm({ name: '', email: '', details: '' });
      }
      if (showContactModal) {
        setSubmittedContact(false);
        setContactForm({ name: '', email: '', company: '' });
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => { 
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeService, showContactModal]);

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const templateParams = {
        name: activeServiceForm.name,
        email: activeServiceForm.email,
        phone: 'Not provided',
        service: `Service Interest: ${activeService.title}`,
        message: activeServiceForm.details
      };
      await emailjs.send('service_3tatd0b', 'template_kqj2cyp', templateParams, 'EV1QwfUS_AfzdGi9G');
      setSubmittedService(true);
    } catch (error) {
      console.error(error);
      alert('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const templateParams = {
        name: contactForm.name,
        email: contactForm.email,
        phone: 'Not provided',
        service: 'General Inquiry (Services)',
        message: `Company/Project: ${contactForm.company}`
      };
      await emailjs.send('service_3tatd0b', 'template_kqj2cyp', templateParams, 'EV1QwfUS_AfzdGi9G');
      setSubmittedContact(true);
    } catch (error) {
      console.error(error);
      alert('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg,#fff 0%,#f8f7ff 50%,#fff 100%)' }}>
      <div className="container-custom">
        {/* Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            <Zap size={12} /> What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', lineHeight: 1.2, marginBottom: 14 }}
          >
            12 Premium{' '}
            <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 16, color: '#64748b', maxWidth: 520, margin: '0 auto' }}
          >
            Everything your business needs to dominate the digital landscape.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} onClick={() => setActiveService(s)} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 52 }}
        >
          <button onClick={() => setShowContactModal(true)} className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
            Discuss Your Project <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99999,
              background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setActiveService(null)}
          >
            <style>{`
              .service-modal-grid { display: grid; grid-template-columns: 1fr 1fr; width: 100%; max-width: 900px; background: white; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,0,0,0.3); position: relative; max-height: 90vh; overflow: hidden; }
              .service-modal-left { padding: 40px; background: linear-gradient(135deg, #f8f7ff, #f0f8ff); display: flex; flex-direction: column; justify-content: center; }
              .service-modal-right { padding: 40px; overflow-y: auto; overscroll-behavior: contain; }
              @media (max-width: 768px) {
                .service-modal-grid { display: flex; flex-direction: column; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }
                .service-modal-left { padding: 30px; flex-shrink: 0; }
                .service-modal-right { padding: 30px; overflow-y: visible; flex-shrink: 0; }
              }
            `}</style>
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="service-modal-grid"
            >
              <button
                onClick={() => setActiveService(null)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              >
                <X size={20} color="#0F172A" />
              </button>

              <div className="service-modal-left">
                <div style={{ width: 64, height: 64, borderRadius: 18, background: `${activeService.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: `inset 0 2px 10px ${activeService.color}15` }}>
                  <activeService.icon size={32} color={activeService.color} />
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#0F172A', marginBottom: 16, fontFamily: 'Poppins, sans-serif', lineHeight: 1.2 }}>
                  {activeService.title}
                </h2>
                <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, marginBottom: 28 }}>
                  {activeService.desc} We build tailored solutions that integrate seamlessly with your goals to drive massive growth and efficiency.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#374151', fontWeight: 600 }}>
                    <CheckCircle size={18} color={activeService.color} /> Custom Tailored Strategy
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#374151', fontWeight: 600 }}>
                    <CheckCircle size={18} color={activeService.color} /> Dedicated Expert Team
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#374151', fontWeight: 600 }}>
                    <CheckCircle size={18} color={activeService.color} /> 24/7 Priority Support
                  </li>
                </ul>
              </div>

              <div className="service-modal-right">
                {submittedService ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${activeService.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <Send size={30} color={activeService.color} />
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 12, fontFamily: 'Poppins, sans-serif' }}>Request Received!</h3>
                    <p style={{ fontSize: 15, color: '#64748b', marginBottom: 32, lineHeight: 1.6 }}>Thank you! Your request for <strong>{activeService.title}</strong> has been sent successfully. Our team will contact you shortly.</p>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setActiveService(null)}
                      style={{ padding: '14px 32px', borderRadius: 12, background: activeService.color, color: 'white', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'Poppins, sans-serif', width: 'fit-content', margin: '0 auto' }}>
                      Done
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Get Started</h3>
                    <p style={{ fontSize: 14, color: '#64748b', marginBottom: 28 }}>Fill out the form to request a consultation for this service.</p>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={handleServiceSubmit}>
                      <div>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Full Name</label>
                        <input required type="text" value={activeServiceForm.name} onChange={(e) => setActiveServiceForm({...activeServiceForm, name: e.target.value})} placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #e2e8f0', outline: 'none', fontSize: 14, transition: 'border-color 0.3s', background: '#f8fafc' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Email Address</label>
                        <input required type="email" value={activeServiceForm.email} onChange={(e) => setActiveServiceForm({...activeServiceForm, email: e.target.value})} placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #e2e8f0', outline: 'none', fontSize: 14, transition: 'border-color 0.3s', background: '#f8fafc' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Project Details</label>
                        <textarea required value={activeServiceForm.details} onChange={(e) => setActiveServiceForm({...activeServiceForm, details: e.target.value})} placeholder="Tell us about your goals and requirements..." rows={4} style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #e2e8f0', outline: 'none', fontSize: 14, resize: 'none', transition: 'border-color 0.3s', background: '#f8fafc' }} />
                      </div>
                      <motion.button disabled={loading} whileHover={!loading ? { scale: 1.02 } : {}} whileTap={!loading ? { scale: 0.98 } : {}} style={{ width: '100%', padding: 14, borderRadius: 12, border: 'none', background: loading ? '#94a3b8' : `linear-gradient(135deg, ${activeService.color}, #0F172A)`, color: 'white', fontWeight: 700, fontSize: 15, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: `0 8px 25px ${activeService.color}30` }}>
                        {loading ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 size={16} /></motion.div> Sending...</> : <>Submit Request <Send size={16} /></>}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generic Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999999, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
            }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white', width: '100%', maxWidth: 500, borderRadius: 24, padding: 40, position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)', overflowY: 'auto', maxHeight: '90vh', overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, #6C63FF, #00C2FF)' }} />
              <button onClick={() => setShowContactModal(false)} style={{ position: 'absolute', top: 20, right: 20, background: '#f1f5f9', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                <X size={18} />
              </button>
              
              {submittedContact ? (
                <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '20px 10px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Send size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins,sans-serif' }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.7 }}>Thank you! We'll get back to you within 24 hours with a detailed response.</p>
                  <motion.button whileHover={{ scale: 1.05 }} onClick={() => setShowContactModal(false)}
                    style={{ padding: '11px 24px', borderRadius: 11, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', color: 'white', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Let's Connect.</h3>
                  <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>Fill out the form below and our experts will get back to you with a free consultation.</p>
                  
                  <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Full Name</label>
                      <div style={{ position: 'relative' }}>
                        <User size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} placeholder="John Doe" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Work Email</label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 6 }}>Company / Project</label>
                      <div style={{ position: 'relative' }}>
                        <Briefcase size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: 14 }} />
                        <input required type="text" value={contactForm.company} onChange={(e) => setContactForm({...contactForm, company: e.target.value})} placeholder="Acme Corp" style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: 12, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, background: '#f8fafc' }} />
                      </div>
                    </div>
                    
                    <button type="submit" disabled={loading} style={{ width: '100%', padding: 16, borderRadius: 12, border: 'none', background: loading ? '#94a3b8' : 'linear-gradient(135deg, #6C63FF, #00C2FF)', color: 'white', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 10px 20px rgba(108,99,255,0.25)' }}>
                      {loading ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 size={18} /></motion.div> Sending...</> : <>Submit Inquiry <ArrowRight size={16} /></>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
