'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Bot, Send, Zap, Shield, Globe, Clock, ArrowRight, Mic } from 'lucide-react';
import Link from 'next/link';

const demoMsgs = [
  { role: 'ai', text: 'Hello! I am WebNex AI — your intelligent business assistant. How can I help you today?' },
  { role: 'user', text: 'What services does WebNex offer?' },
  { role: 'ai', text: 'We offer React, Java Full Stack, Spring Boot APIs, DevOps, Docker/K8s, AI Chatbots, SaaS, Startup Consulting, Logo Design, CNC Solutions, and Automation Systems!' },
  { role: 'user', text: 'How much does a SaaS platform cost?' },
  { role: 'ai', text: 'Our Professional plan starts at ₹49,999 and includes full-stack development, AI integration, and cloud deployment. Want to book a free consultation?' },
];

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '2px 0' }}>
      {[0, 1, 2].map(i => (
        <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.14 }}
          style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#00C2FF)' }} />
      ))}
    </div>
  );
}

const features = [
  { icon: Zap, text: 'Instant responses in milliseconds' },
  { icon: Shield, text: 'Secure & private conversations' },
  { icon: Globe, text: 'Available 24/7, multilingual' },
  { icon: Clock, text: 'No wait times, always online' },
];

export default function AIChatSection() {
  const [messages, setMessages] = useState(demoMsgs.slice(0, 1));
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [msgIdx, setMsgIdx] = useState(1);
  const chatRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => {
      setMsgIdx(prev => {
        if (prev < demoMsgs.length) {
          if (demoMsgs[prev].role === 'ai') {
            setTyping(true);
            setTimeout(() => { setTyping(false); setMessages(m => [...m, demoMsgs[prev]]); }, 1100);
          } else {
            setMessages(m => [...m, demoMsgs[prev]]);
          }
          return prev + 1;
        }
        clearInterval(t);
        return prev;
      });
    }, 2600);
    return () => clearInterval(t);
  }, [isInView]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { role: 'user', text: input }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { role: 'ai', text: 'Great question! Our team will prepare a detailed response for you. Meanwhile, feel free to book a free 30-min consultation through our contact page.' }]);
    }, 1400);
  };

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: 'linear-gradient(135deg,#f8f7ff 0%,#fff 50%,#f0f8ff 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, right: -80, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle,rgba(108,99,255,0.07) 0%,transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: '48px 64px', alignItems: 'center' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.75 }}>
            <span className="section-label"><Bot size={12} /> AI-Powered</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', lineHeight: 1.2, marginBottom: 16 }}>
              Ask WebNex AI<br /><span className="gradient-text">Anything</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, maxWidth: 420, marginBottom: 28 }}>
              Our AI assistant is trained on our services, pricing, and expertise. Get instant answers to any question — 24/7.
            </p>

            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.text}
                  initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(108,99,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={15} color="#6C63FF" strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{f.text}</span>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 20px', borderRadius: 12, background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.18)', marginTop: 8 }}
            >
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 10, height: 10, borderRadius: '50%', background: '#6C63FF', boxShadow: '0 0 8px #6C63FF' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#6C63FF' }}>AI Online — Ready to help</span>
            </motion.div>
          </motion.div>

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(108,99,255,0.18)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(108,99,255,0.1)',
            }}
          >
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={20} color="white" strokeWidth={2} />
                </div>
              </motion.div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>WebNex AI Assistant</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                  Always Online
                </div>
              </div>
              {/* Wave */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 3, alignItems: 'center' }}>
                {[1,2,3,4,5].map(j => (
                  <motion.div key={j} animate={{ height: [8, 18 + j * 2, 8] }} transition={{ duration: 0.7, repeat: Infinity, delay: j * 0.1 }}
                    style={{ width: 3, background: 'rgba(255,255,255,0.5)', borderRadius: 2, minHeight: 8 }} />
                ))}
              </div>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="hide-scrollbar" style={{ height: 300, overflowY: 'auto', padding: '18px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '82%', padding: '10px 14px', fontSize: 13.5, lineHeight: 1.6,
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? 'linear-gradient(135deg,#6C63FF,#00C2FF)' : 'rgba(108,99,255,0.06)',
                    color: msg.role === 'user' ? 'white' : '#374151',
                    border: msg.role === 'ai' ? '1px solid rgba(108,99,255,0.1)' : 'none',
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.1)' }}>
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(108,99,255,0.08)', display: 'flex', gap: 10, alignItems: 'center' }}>
              <input
                className="input-field"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about WebNex..."
                style={{ flex: 1, padding: '11px 14px', fontSize: 13.5 }}
              />
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={handleSend}
                style={{ width: 42, height: 42, borderRadius: 11, background: 'linear-gradient(135deg,#6C63FF,#00C2FF)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(108,99,255,0.3)' }}>
                <Send size={16} color="white" strokeWidth={2} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
