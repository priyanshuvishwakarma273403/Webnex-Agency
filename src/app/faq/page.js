'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'For a standard 5-page business website, it typically takes 1-2 weeks. Complex Web Apps or SaaS platforms can take anywhere from 4 to 12 weeks depending on the features and backend requirements.'
  },
  {
    q: 'Do you provide hosting and domain services?',
    a: 'Yes, our packages include full deployment and setup. We guide you in purchasing a domain and we handle the entire hosting infrastructure on AWS, Vercel, or your preferred cloud provider.'
  },
  {
    q: 'What is your payment structure?',
    a: 'We typically require a 50% upfront deposit to secure your slot and begin work. The remaining 50% is tied to project milestones and final delivery upon your 100% satisfaction.'
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Absolutely! All our premium plans come with dedicated support ranging from 1 to 12 months. We handle bug fixes, security updates, and performance monitoring.'
  },
  {
    q: 'Can you integrate AI into my existing app?',
    a: 'Yes! We specialize in AI integration. Whether you need a customer support chatbot, automated data processing, or an OpenAI integration, we can seamlessly connect it to your existing architecture.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 20, background: 'rgba(108,99,255,0.1)', color: '#6C63FF', marginBottom: 20 }}>
            <MessageCircleQuestion size={32} />
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked <span style={{ color: '#6C63FF' }}>Questions</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
            Got questions? We've got answers. If you have some other questions, feel free to contact our support team.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{ width: '100%', padding: '24px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <ChevronDown color={openIndex === i ? '#6C63FF' : '#94a3b8'} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 30px 24px', color: '#64748b', fontSize: 16, lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
