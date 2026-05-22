'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowRight, Bot } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  'Services': [
    { label: 'React Development', href: '/services' },
    { label: 'Java Full Stack', href: '/services' },
    { label: 'Spring Boot APIs', href: '/services' },
    { label: 'DevOps & Cloud', href: '/services' },
    { label: 'AI Chatbot Dev', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
  ],
  'Company': [
    { label: 'About WebNex', href: '/about' },
    { label: 'Our Process', href: '/about' },
    { label: 'Testimonials', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

const socials = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Top gradient line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,#6C63FF,#00C2FF,transparent)' }} />

      {/* BG decorations */}
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(108,99,255,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, right: -80, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,194,255,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

      {/* Newsletter Banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '48px 0' }}>
        <div className="container-custom">
          <motion.div className="newsletter-wrap"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg,rgba(108,99,255,0.15),rgba(0,194,255,0.1))',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: 22, padding: 'clamp(20px,3vw,32px) clamp(20px,4vw,36px)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 5, fontFamily: 'Poppins,sans-serif' }}>
                Stay ahead with WebNex
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                AI insights, tech trends, and project updates — weekly.
              </p>
            </div>
            <div className="newsletter-form">
              <input
                placeholder="Enter your email..."
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 10, minWidth: 180,
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white', fontSize: 14, outline: 'none',
                }}
              />
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 10px 28px rgba(108,99,255,0.4)' }} whileTap={{ scale: 0.95 }}
                style={{ padding: '12px 22px', borderRadius: 10, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', color: 'white', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap' }}>
                Subscribe <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: 'clamp(40px,6vw,64px) 0 24px' }}>
        <div className="container-custom">
          <style>{`
            .footer-grid { display: grid; grid-template-columns: 3fr 2fr 2fr 2fr; gap: 48px; margin-bottom: 56px; }
            .newsletter-wrap { display: flex; gap: 24px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
            .newsletter-form { display: flex; gap: 10px; width: auto; }
            @media (max-width: 992px) { 
              .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 40px; } 
              .footer-brand { grid-column: 1 / -1; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 30px; } 
            }
            @media (max-width: 768px) { 
              .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } 
            }
            @media (max-width: 480px) { 
              .footer-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 16px; } 
              .footer-brand { grid-column: 1 / -1; align-items: flex-start; display: flex; flex-direction: column; text-align: left; }
              .newsletter-form { flex-direction: column; width: 100%; } 
              .newsletter-form input, .newsletter-form button { width: 100%; justify-content: center; } 
              .newsletter-wrap { flex-direction: column; align-items: stretch; text-align: center; }
              .footer-bottom { flex-direction: column; text-align: center; gap: 16px; }
              .footer-links { justify-content: center; }
              .link-col { text-align: left; }
            }
          `}</style>
          <div className="footer-grid">
            {/* Brand col */}
            <motion.div className="footer-brand" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
                <img src="/logo.png" alt="WebNex Logo" style={{ height: 96, maxWidth: '100%', objectFit: 'contain', marginLeft: -8 }} />
              </Link>

              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.8, marginBottom: 18 }}>
                Building future businesses with AI. Your trusted partner for digital transformation.
              </p>

              {/* Socials */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                {socials.map(s => (
                  <motion.a key={s.label} href={s.href} title={s.label}
                    whileHover={{ scale: 1.15, y: -2, background: 'rgba(108,99,255,0.2)' }}
                    style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.25s' }}>
                    <s.icon size={14} color="rgba(255,255,255,0.65)" strokeWidth={1.8} />
                  </motion.a>
                ))}
              </div>

              {/* AI shortcut */}
              <Link href="/ai" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.04, borderColor: 'rgba(108,99,255,0.4)' }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '7px 14px', borderRadius: 9, background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)', cursor: 'pointer', transition: 'all 0.25s' }}>
                  <Bot size={13} color="#a5b4fc" strokeWidth={2} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#a5b4fc' }}>Ask WebNex AI</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([cat, links], ci) => (
              <motion.div key={cat} className="link-col" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08 }}>
                <h4 style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.75)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {links.map(link => (
                    <li key={link.label} style={{ marginBottom: 9 }}>
                      <Link href={link.href} style={{ textDecoration: 'none' }}>
                        <motion.span whileHover={{ x: 4, color: '#a5b4fc' }}
                          style={{ color: 'rgba(255,255,255,0.42)', fontSize: 13.5, display: 'inline-block', cursor: 'pointer', transition: 'color 0.2s' }}>
                          {link.label}
                        </motion.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, margin: 0 }}>
              © 2025 WebNex. All rights reserved. Built with care and AI.
            </p>
            <div className="footer-links" style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {[{label: 'Privacy Policy', href: '/privacy-policy'}, {label: 'Terms of Service', href: '/terms-of-service'}, {label: 'FAQ', href: '/faq'}, {label: 'Blogs', href: '/blogs'}].map(item => (
                <Link key={item.label} href={item.href} style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textDecoration: 'none', transition: 'color 0.2s' }}>{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
