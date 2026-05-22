'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, X as XIcon, Zap, Star, ArrowRight, Shield, Send, CheckCircle, Lock, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const plans = [
  {
    name: 'Basic Portfolio', price: '₹9,999', period: '/project', desc: 'Perfect for freelancers & individuals.', gradient: 'linear-gradient(135deg,#6C63FF,#8B83FF)', color: '#6C63FF', popular: false,
    features: [{ text: '5 Page Website', ok: true }, { text: 'Mobile Responsive', ok: true }, { text: 'Basic SEO', ok: true }, { text: 'Contact Form', ok: true }, { text: 'Fast Loading', ok: true }, { text: 'Social Media Links', ok: true }, { text: 'WhatsApp Integration', ok: true }, { text: 'Free SSL Certificate', ok: true }, { text: '1 Month Support', ok: true }]
  },
  {
    name: 'Business Starter', price: '₹14,999', period: '/project', desc: 'Standard site for growing local businesses.', gradient: 'linear-gradient(135deg,#00C2FF,#0088FF)', color: '#00C2FF', popular: false,
    features: [{ text: '10 Page Website', ok: true }, { text: 'Premium UI/UX', ok: true }, { text: 'Advanced SEO', ok: true }, { text: 'Google Analytics', ok: true }, { text: 'Live Chat Integration', ok: true }, { text: 'Custom Domain Setup', ok: true }, { text: 'CMS Integration', ok: true }, { text: 'Business Email Setup', ok: true }, { text: '3 Months Support', ok: true }]
  },
  {
    name: 'E-Commerce Store', price: '₹24,999', period: '/project', desc: 'Sell products online beautifully.', gradient: 'linear-gradient(135deg,#F89820,#FF5722)', color: '#F89820', popular: true,
    features: [{ text: 'Shopify/WooCommerce', ok: true }, { text: 'Payment Gateway', ok: true }, { text: 'Up to 50 Products', ok: true }, { text: 'Order Management', ok: true }, { text: 'Cart & Checkout', ok: true }, { text: 'Inventory Tracking', ok: true }, { text: 'Discount Coupons', ok: true }, { text: 'Shipping Integrations', ok: true }, { text: '3 Months Support', ok: true }]
  },
  {
    name: 'Real Estate Platform', price: '₹34,999', period: '/project', desc: 'For agents and property agencies.', gradient: 'linear-gradient(135deg,#2ECC71,#10A37F)', color: '#2ECC71', popular: false,
    features: [{ text: 'Property Listings', ok: true }, { text: 'Advanced Search Filter', ok: true }, { text: 'Interactive Map View', ok: true }, { text: 'Agent Profiles', ok: true }, { text: 'Lead Capture Forms', ok: true }, { text: 'Virtual Tour Support', ok: true }, { text: 'Admin Dashboard', ok: true }, { text: 'Automated Emails', ok: true }, { text: '6 Months Support', ok: true }]
  },
  {
    name: '3D Interactive Web', price: '₹44,999', period: '/project', desc: 'Mind-blowing WebGL 3D experiences.', gradient: 'linear-gradient(135deg,#9B59B6,#8E44AD)', color: '#9B59B6', popular: true,
    features: [{ text: 'Three.js 3D Models', ok: true }, { text: 'Interactive Scroll', ok: true }, { text: 'Custom WebGL Shaders', ok: true }, { text: 'High-end Animations', ok: true }, { text: 'Performance Optimized', ok: true }, { text: 'Premium Sound Effects', ok: true }, { text: 'Immersive Storytelling', ok: true }, { text: 'Bespoke UI Design', ok: true }, { text: '6 Months Support', ok: true }]
  },
  {
    name: 'SaaS MVP', price: '₹59,999', period: '/project', desc: 'Launch your startup idea fast.', gradient: 'linear-gradient(135deg,#FF6B9D,#E74C3C)', color: '#FF6B9D', popular: false,
    features: [{ text: 'React + Next.js Frontend', ok: true }, { text: 'Node.js / Spring Boot Backend', ok: true }, { text: 'User Authentication', ok: true }, { text: 'Stripe Subscription Billing', ok: true }, { text: 'Multi-tenant DB', ok: true }, { text: 'Admin Dashboard', ok: true }, { text: 'API Development', ok: true }, { text: 'AWS/Vercel Deployment', ok: true }, { text: '6 Months Support', ok: true }]
  },
  {
    name: 'AI Automation Suite', price: '₹74,999', period: '/project', desc: 'AI tools to replace human effort.', gradient: 'linear-gradient(135deg,#10A37F,#059669)', color: '#10A37F', popular: false,
    features: [{ text: 'Custom ChatGPT Bots', ok: true }, { text: 'LangChain Integration', ok: true }, { text: 'Automated Workflows', ok: true }, { text: 'Data Scraping AI', ok: true }, { text: 'Image Generation API', ok: true }, { text: 'Vector Database Setup', ok: true }, { text: 'WhatsApp AI Bot', ok: true }, { text: 'Zapier Automation', ok: true }, { text: '12 Months Support', ok: true }]
  },
  {
    name: 'Custom Mobile App', price: '₹99,999', period: '/project', desc: 'iOS & Android cross-platform apps.', gradient: 'linear-gradient(135deg,#3B82F6,#2563EB)', color: '#3B82F6', popular: true,
    features: [{ text: 'React Native Development', ok: true }, { text: 'iOS & Android Apps', ok: true }, { text: 'App Store Submission', ok: true }, { text: 'Push Notifications', ok: true }, { text: 'Offline Mode Support', ok: true }, { text: 'In-App Purchases', ok: true }, { text: 'Location Tracking', ok: true }, { text: 'Analytics & Crashlytics', ok: true }, { text: '12 Months Support', ok: true }]
  },
  {
    name: 'Enterprise ERP', price: 'Custom', period: '/pricing', desc: 'Scalable infrastructure for corps.', gradient: 'linear-gradient(135deg,#0F172A,#1E293B)', color: '#6C63FF', popular: false,
    features: [{ text: 'Microservices Architecture', ok: true }, { text: 'Kubernetes Cluster', ok: true }, { text: 'High Availability', ok: true }, { text: 'Custom ERP Modules', ok: true }, { text: 'Bank-grade Security', ok: true }, { text: 'Complex Data Pipelines', ok: true }, { text: 'Legacy System Migration', ok: true }, { text: 'Dedicated Engineering Team', ok: true }, { text: '24/7 Priority Support', ok: true }]
  },
];

const designPlans = [
  {
    name: 'Branding & Basics', price: 'Starts ₹499', period: '', desc: 'Essential brand identity graphics.', gradient: 'linear-gradient(135deg,#FF6B9D,#E74C3C)', color: '#FF6B9D', popular: true,
    features: [{ text: 'Logo Design: ₹999', ok: true }, { text: 'Premium Logo: ₹2,499', ok: true }, { text: 'Visiting Card: ₹499', ok: true }, { text: 'Letterhead Design: ₹499', ok: true }, { text: 'Resume / CV Design: ₹499', ok: true }, { text: 'Vector Tracing: ₹499', ok: true }, { text: 'Brand Identity Kit: ₹4,999', ok: true }]
  },
  {
    name: 'Marketing & Social', price: 'Starts ₹299', period: '', desc: 'Engage your audience visually.', gradient: 'linear-gradient(135deg,#00C2FF,#0088FF)', color: '#00C2FF', popular: false,
    features: [{ text: 'Social Media Post: ₹299/post', ok: true }, { text: 'Flyer / Pamphlet: ₹799', ok: true }, { text: 'Poster Design: ₹799', ok: true }, { text: 'Banner / Flex: ₹999', ok: true }, { text: 'Menu Card Design: ₹999', ok: true }, { text: 'Mockup Design: ₹799', ok: true }, { text: 'T-Shirt Design: ₹799', ok: true }]
  },
  {
    name: 'Premium Print & Pack', price: 'Starts ₹999', period: '', desc: 'High-end print deliverables.', gradient: 'linear-gradient(135deg,#F89820,#FF5722)', color: '#F89820', popular: false,
    features: [{ text: 'Brochure Design: ₹1,499', ok: true }, { text: 'Packaging Design: ₹1,999', ok: true }, { text: 'Book Cover Design: ₹999', ok: true }, { text: 'Invitation Card: ₹799', ok: true }, { text: 'Wedding Card: ₹1,499', ok: true }]
  },
  {
    name: 'CNC Jali & Patterns', price: 'Starts ₹1,499', period: '', desc: 'Bespoke architectural CNC.', gradient: 'linear-gradient(135deg,#9B59B6,#8E44AD)', color: '#9B59B6', popular: true,
    features: [{ text: 'Custom CNC Jali: ₹1,499', ok: true }, { text: 'Laser Cut Jali: ₹1,999', ok: true }, { text: 'Decorative Wall Jali: ₹2,499', ok: true }, { text: 'Modern Geometric Jali: ₹1,999', ok: true }, { text: 'Wooden Partition Jali: ₹2,499', ok: true }, { text: 'CNC Door/Window Jali: ₹2,499+', ok: true }, { text: 'Mandir Jali Design: ₹2,999', ok: true }]
  },
  {
    name: 'CNC Files & Convert', price: 'Starts ₹499', period: '', desc: 'Ready-to-cut digital assets.', gradient: 'linear-gradient(135deg,#2ECC71,#10A37F)', color: '#2ECC71', popular: false,
    features: [{ text: '2D CNC / DXF / SVG: ₹499', ok: true }, { text: 'AI/CDR to CNC Conversion: ₹499', ok: true }, { text: 'Nesting File Design: ₹799', ok: true }, { text: 'CNC Machine Ready File: ₹999', ok: true }, { text: 'Acrylic Laser Cut Design: ₹1,499', ok: true }, { text: 'Metal Laser Cutting: ₹1,999', ok: true }]
  },
  {
    name: 'Acoustic & Panels', price: 'Starts ₹1,499', period: '', desc: 'Interior paneling designs.', gradient: 'linear-gradient(135deg,#6C63FF,#8B83FF)', color: '#6C63FF', popular: false,
    features: [{ text: 'Acoustic Panel CNC: ₹1,499', ok: true }, { text: 'Acoustic Grooving: ₹1,999', ok: true }, { text: 'Custom Wall Art CNC: ₹1,999', ok: true }, { text: 'Acoustic Wall Panel Layout: ₹2,499', ok: true }, { text: 'Soundproof Panel Pattern: ₹2,499', ok: true }, { text: 'Custom Ceiling Panel: ₹2,999', ok: true }]
  }
];

const maintenancePlans = [
  {
    name: 'Essential Maintenance', price: 'Starts ₹1,999', period: '/mo', desc: 'Keep your website running smoothly.', gradient: 'linear-gradient(135deg,#6DB33F,#4ADE80)', color: '#6DB33F', popular: true,
    features: [{ text: 'Website Maintenance: ₹1,999/mo', ok: true }, { text: 'Website Management: ₹2,999/mo', ok: true }, { text: 'Monthly Support: ₹2,999/mo', ok: true }, { text: 'SEO Maintenance: ₹2,999/mo', ok: true }, { text: 'WordPress Management: ₹1,999/mo', ok: true }]
  },
  {
    name: 'Updates & Content', price: 'Starts ₹499', period: '', desc: 'Fresh content and regular updates.', gradient: 'linear-gradient(135deg,#3B82F6,#2563EB)', color: '#3B82F6', popular: false,
    features: [{ text: 'Content Update: ₹499', ok: true }, { text: 'Product Upload: ₹999', ok: true }, { text: 'Landing Page Management: ₹999', ok: true }, { text: 'Plugin/Theme Updates: ₹999/mo', ok: true }, { text: 'Data Entry Service: ₹499', ok: true }]
  },
  {
    name: 'Security & Backup', price: 'Starts ₹499', period: '', desc: 'Bulletproof security and performance.', gradient: 'linear-gradient(135deg,#E74C3C,#C0392B)', color: '#E74C3C', popular: false,
    features: [{ text: 'Security Monitoring: ₹1,499/mo', ok: true }, { text: 'Backup Service: ₹999/mo', ok: true }, { text: 'Performance Monitoring: ₹1,499/mo', ok: true }, { text: 'Speed Optimization: ₹1,999', ok: true }, { text: 'Bug Fixing Support: ₹499', ok: true }]
  },
  {
    name: 'Enterprise & Hosting', price: 'Starts ₹499', period: '', desc: 'Full-scale infrastructure management.', gradient: 'linear-gradient(135deg,#0F172A,#1E293B)', color: '#1E293B', popular: false,
    features: [{ text: 'E-commerce Management: ₹4,999/mo', ok: true }, { text: 'Website Redesign: ₹4,999', ok: true }, { text: 'Admin Panel Management: ₹1,999/mo', ok: true }, { text: 'Hosting Management: ₹999/mo', ok: true }, { text: 'Domain Management: ₹499/mo', ok: true }]
  }
];

const paymentPlans = [
  {
    name: 'Basic Integration', price: 'Starts ₹3,000', period: '', desc: 'Best for small & starter stores.', gradient: 'linear-gradient(135deg,#3B82F6,#2563EB)', color: '#3B82F6', popular: false,
    features: [{ text: 'Basic payment setup: ₹3,000+', ok: true }, { text: 'UPI/Card/Net Banking', ok: true }, { text: 'Razorpay & PhonePe Setup', ok: true }, { text: 'Single website integration', ok: true }, { text: 'Basic checkout page', ok: true }, { text: 'Testing support', ok: true }]
  },
  {
    name: 'Advanced Integration', price: 'Starts ₹8,000', period: '', desc: 'For professional & medium brands.', gradient: 'linear-gradient(135deg,#6C63FF,#00C2FF)', color: '#6C63FF', popular: true,
    features: [{ text: 'Custom checkout design', ok: true }, { text: 'Subscription Payments: ₹8,000+', ok: true }, { text: 'Stripe & PayU Integration', ok: true }, { text: 'Coupon & Wallet System', ok: true }, { text: 'Advanced security setup', ok: true }, { text: 'Mobile responsive flow', ok: true }]
  },
  {
    name: 'Premium / Custom', price: 'Starts ₹25,000', period: '', desc: 'For SaaS & large e-commerce.', gradient: 'linear-gradient(135deg,#0F172A,#1E293B)', color: '#1E293B', popular: false,
    features: [{ text: 'Multi vendor payments: ₹10,000+', ok: true }, { text: 'International Gateway: ₹8,000+', ok: true }, { text: 'Auto invoice generation', ok: true }, { text: 'Split payment system', ok: true }, { text: 'API integration', ok: true }, { text: 'Custom backend & dashboard', ok: true }]
  }
];

export default function PricingSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const [activeTab, setActiveTab] = useState('software'); // 'software' | 'design'
  const [activePlan, setActivePlan] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', requirements: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (activePlan) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', requirements: '' });
      setAgreed(false);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activePlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);

    try {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: 'Not provided',
        service: `Pricing Plan: ${activePlan.name} (${activePlan.price})`,
        message: formData.requirements
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
      alert('Failed to send request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top,rgba(108,99,255,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="section-label">
            <Zap size={12} /> Pricing Plans
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginBottom: 14 }}>
            Tailored Solutions, <span className="gradient-text">Transparent Pricing</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontSize: 16, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Choose the perfect package that fits your goals. From 5-page websites to custom AI platforms, we deliver world-class digital products.
          </motion.p>
        </div>

        <style>{`
          .pricing-grid-9 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            padding: 16px 0;
          }
          @media (max-width: 1024px) {
            .pricing-grid-9 { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .pricing-grid-9 { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; gap: 24px; }
          }
        `}</style>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', background: 'white', padding: 6, borderRadius: 24, border: '1px solid rgba(108,99,255,0.1)', boxShadow: '0 8px 24px rgba(0,0,0,0.03)', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {['software', 'design', 'maintenance', 'payment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ position: 'relative', padding: '12px 24px', borderRadius: 100, border: 'none', background: 'transparent', fontWeight: 700, fontSize: 14, cursor: 'pointer', color: activeTab === tab ? 'white' : '#64748b', transition: 'color 0.3s' }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="pricingTabBubble"
                    style={{ position: 'absolute', inset: 0, borderRadius: 100, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {tab === 'software' ? 'Software Development' : tab === 'design' ? 'Graphic Design & CNC' : tab === 'maintenance' ? 'Website Maintenance' : 'Payment Gateways'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="pricing-grid-9">
          <AnimatePresence mode="wait">
            {(activeTab === 'software' ? plans : activeTab === 'design' ? designPlans : activeTab === 'maintenance' ? maintenancePlans : paymentPlans).map((plan, i) => (
              <motion.div key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 40px 90px ${plan.color}25` }}
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: plan.popular ? `2px solid ${plan.color}50` : '1px solid rgba(108,99,255,0.1)',
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: plan.popular ? `0 20px 60px ${plan.color}20` : '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
                  transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
                  display: 'flex', flexDirection: 'column'
                }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2, display: 'flex', alignItems: 'center', gap: 5, padding: '5px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)' }}>
                    <Star size={12} fill="white" color="white" />
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'white', letterSpacing: '0.02em' }}>TOP CHOICE</span>
                  </div>
                )}

                {/* Header */}
                <div style={{ background: plan.gradient, padding: '36px 30px 30px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%,rgba(255,255,255,0.15) 0%,transparent 50%)' }} />
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 6, fontFamily: 'Poppins,sans-serif', position: 'relative' }}>{plan.name}</h3>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)', marginBottom: 22, position: 'relative', minHeight: 40 }}>{plan.desc}</p>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', fontFamily: 'Poppins,sans-serif', lineHeight: 1 }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginLeft: 6 }}>{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div style={{ padding: '28px 30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flexGrow: 1 }}>
                    {plan.features.map((f, idx) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + (idx * 0.05) }}
                        key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid rgba(0,0,0,0.04)', fontSize: 14, color: f.ok ? '#374151' : '#cbd5e1', fontWeight: 500 }}
                      >
                        <div style={{ width: 18, height: 18, borderRadius: '50%', background: f.ok ? `${plan.color}20` : 'rgba(148,163,184,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {f.ok ? <Check size={11} color={plan.color} strokeWidth={3} /> : <XIcon size={10} color="#94a3b8" strokeWidth={2.5} />}
                        </div>
                        <span style={{ lineHeight: 1.4 }}>{f.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => setActivePlan(plan)}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%', padding: '15px', borderRadius: 14,
                      background: plan.popular ? plan.gradient : 'transparent',
                      color: plan.popular ? 'white' : plan.color,
                      border: plan.popular ? 'none' : `2px solid ${plan.color}40`,
                      fontWeight: 700, fontSize: 15, cursor: 'pointer',
                      fontFamily: 'Poppins,sans-serif',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      transition: 'all 0.3s',
                      marginTop: 'auto'
                    }}
                  >
                    {plan.name === 'Enterprise ERP' ? 'Contact Sales' : 'Get Started'} <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Guarantee */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginTop: 64, textAlign: 'center', padding: '24px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(108,99,255,0.05), rgba(0,194,255,0.05))', border: '1px solid rgba(108,99,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          <Shield size={28} color="#6C63FF" strokeWidth={2} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: 16 }}>100% Satisfaction & Delivery Guarantee</div>
            <div style={{ color: '#64748b', fontSize: 14 }}>Transparent milestones, timely delivery, and absolutely no hidden costs.</div>
          </div>
        </motion.div>
      </div>

      {/* Checkout/Lead Modal */}
      <AnimatePresence>
        {activePlan && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999999,
              background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => { setActivePlan(null); setAgreed(false); }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
              .plan-modal-container { display: flex; width: 100%; max-width: 1000px; background: white; border-radius: 28px; box-shadow: 0 50px 120px rgba(0,0,0,0.4); position: relative; max-height: 92vh; overflow: hidden; }
              .plan-modal-left { width: 45%; padding: 48px; background: ${activePlan.gradient}; color: white; display: flex; flex-direction: column; position: relative; overflow: hidden; }
              .plan-modal-right { width: 55%; padding: 48px; overflow-y: auto; background: #fff; overscroll-behavior: contain; }
              @media (max-width: 900px) {
                .plan-modal-container { flex-direction: column; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }
                .plan-modal-left { width: 100%; padding: 36px 24px; flex-shrink: 0; }
                .plan-modal-right { width: 100%; padding: 36px 24px; flex-shrink: 0; overflow-y: visible; }
              }
            ` }} />

            <motion.div
              data-lenis-prevent="true"
              initial={{ scale: 0.9, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="plan-modal-container"
            >
              <button
                onClick={() => { setActivePlan(null); setAgreed(false); }}
                style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(241,245,249,0.8)', backdropFilter: 'blur(4px)', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', zIndex: 20, transition: 'all 0.2s' }}
              >
                <XIcon size={20} color="#334155" />
              </button>

              {/* Left Panel: Plan Details */}
              <div className="plan-modal-left">
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 24, backdropFilter: 'blur(10px)' }}>
                      <Star size={14} fill="white" /> Selected Plan
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1.1, marginBottom: 12 }}>
                      {activePlan.name}
                    </h2>
                    <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 32, lineHeight: 1.6 }}>
                      {activePlan.desc}
                    </p>
                  </motion.div>

                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginTop: 'auto', background: 'rgba(0,0,0,0.15)', padding: '24px', borderRadius: 20, backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, opacity: 0.8, marginBottom: 8 }}>Total Investment</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{activePlan.price}</span>
                      <span style={{ fontSize: 15, opacity: 0.8 }}>{activePlan.period}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 500 }}><CheckCircle size={16} color="#4ADE80" /> 100% Secure Payment</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 500 }}><CheckCircle size={16} color="#4ADE80" /> Dedicated Project Manager</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Right Panel: Form */}
              <div className="plan-modal-right">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 20px' }}>
                      <div style={{ width: 72, height: 72, borderRadius: '50%', background: activePlan.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <Send size={30} color="white" />
                      </div>
                      <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 12, fontFamily: 'Poppins, sans-serif' }}>Request Received!</h3>
                      <p style={{ fontSize: 15, color: '#64748b', marginBottom: 32, lineHeight: 1.6 }}>Thank you, {formData.firstName}! Your request for the <strong>{activePlan.name}</strong> plan has been successfully sent. Our team will contact you shortly.</p>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setActivePlan(null); setSubmitted(false); }}
                        style={{ padding: '14px 32px', borderRadius: 12, background: activePlan.gradient, color: 'white', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                        Done
                      </motion.button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Let's Build It.</h3>
                      <p style={{ fontSize: 14, color: '#64748b', marginBottom: 32 }}>Drop your details below. Our technical experts will reach out to schedule a deep-dive session.</p>

                      <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 8 }}>First Name</label>
                            <input required type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="John" style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, transition: 'all 0.3s', background: '#f8fafc' }} onFocus={(e) => e.target.style.borderColor = activePlan.color} onBlur={(e) => e.target.style.borderColor = '#f1f5f9'} />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 8 }}>Last Name</label>
                            <input required type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, transition: 'all 0.3s', background: '#f8fafc' }} onFocus={(e) => e.target.style.borderColor = activePlan.color} onBlur={(e) => e.target.style.borderColor = '#f1f5f9'} />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 8 }}>Work Email Address</label>
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, transition: 'all 0.3s', background: '#f8fafc' }} onFocus={(e) => e.target.style.borderColor = activePlan.color} onBlur={(e) => e.target.style.borderColor = '#f1f5f9'} />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#334155', marginBottom: 8 }}>Project Requirements / Goals</label>
                          <textarea required value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} placeholder="Briefly describe what you're looking to build..." rows={3} style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '2px solid #f1f5f9', outline: 'none', fontSize: 14, resize: 'none', transition: 'all 0.3s', background: '#f8fafc' }} onFocus={(e) => e.target.style.borderColor = activePlan.color} onBlur={(e) => e.target.style.borderColor = '#f1f5f9'} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 4 }}>
                          <input
                            type="checkbox"
                            id="terms"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            style={{ width: 18, height: 18, marginTop: 2, accentColor: activePlan.color, cursor: 'pointer' }}
                            required
                          />
                          <label htmlFor="terms" style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, cursor: 'pointer' }}>
                            I agree to WebNex's <span style={{ color: activePlan.color, fontWeight: 600 }}>Terms of Service</span> and <span style={{ color: activePlan.color, fontWeight: 600 }}>Privacy Policy</span>. I understand that my data will be securely processed to fulfill my request.
                          </label>
                        </div>

                        <motion.button
                          disabled={loading}
                          whileHover={!loading ? { scale: 1.02 } : {}} whileTap={!loading ? { scale: 0.98 } : {}}
                          type="submit"
                          style={{
                            width: '100%', padding: 16, borderRadius: 14, border: 'none',
                            background: loading ? '#94a3b8' : activePlan.gradient, color: 'white',
                            fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer',
                            marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                            boxShadow: `0 10px 30px ${activePlan.color}40`, fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {loading ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 size={16} /></motion.div> Processing...</> : <><Lock size={16} /> Request Secure Invoice</>}
                        </motion.button>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
