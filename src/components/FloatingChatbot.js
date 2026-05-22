'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('NAME'); // NAME, EMAIL, CHAT
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi there! I am WebNex AI. To get started, could you please tell me your name?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');

    if (step === 'NAME') {
      setName(userText);
      setStep('EMAIL');
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: `Nice to meet you, ${userText}! And what is your best email address so we can reach you if needed?` }]);
      }, 600);
    } else if (step === 'EMAIL') {
      setEmail(userText);
      setStep('CHAT');

      // Send email notification silently
      try {
        emailjs.send(
          'service_3tatd0b',
          'template_kqj2cyp',
          {
            name: name,
            email: userText,
            phone: 'Not provided',
            service: 'Chatbot Lead',
            message: 'Lead automatically collected from Floating Chatbot.'
          },
          'EV1QwfUS_AfzdGi9G'
        );
      } catch (error) {
        console.error('Error sending chatbot lead:', error);
      }

      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          text: `Got it! Thanks ${name}. WebNex is a premium AI & Digital Innovation agency. We build high-end websites, SaaS platforms, and AI bots. How can I assist you today? Feel free to type or click a suggestion below!`,
          options: [
            { label: 'View Services', path: '/services' },
            { label: 'Check Pricing', path: '/pricing' },
            { label: 'See Portfolio', path: '/portfolio' }
          ]
        }]);
      }, 600);
    } else {
      // General chat step
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: "I've noted that down! An expert from our team will contact you soon. Anything else you'd like to explore in the meantime?", options: [
            { label: 'About Us', path: '/about' },
            { label: 'Contact Sales', path: '/contact' }
        ]}]);
      }, 800);
    }
  };

  const handleOptionClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: 100,
              right: 24,
              width: 360,
              height: 520,
              background: 'white',
              borderRadius: 24,
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 99999,
              overflow: 'hidden',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #6C63FF, #00C2FF)', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={20} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>WebNex AI</div>
                  <div style={{ fontSize: 12, opacity: 0.8, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 8, height: 8, background: '#4ADE80', borderRadius: '50%' }} /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', opacity: 0.8 }}>
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16, background: '#f8fafc' }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, maxWidth: '85%' }}>
                    {msg.role === 'ai' && (
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00C2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Bot size={14} color="white" />
                      </div>
                    )}
                    <div style={{
                      background: msg.role === 'user' ? '#6C63FF' : 'white',
                      color: msg.role === 'user' ? 'white' : '#334155',
                      padding: '12px 16px',
                      borderRadius: 18,
                      borderBottomRightRadius: msg.role === 'user' ? 4 : 18,
                      borderBottomLeftRadius: msg.role === 'ai' ? 4 : 18,
                      fontSize: 14,
                      lineHeight: 1.5,
                      boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                      border: msg.role === 'ai' ? '1px solid rgba(0,0,0,0.05)' : 'none'
                    }}>
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Options / Suggestions */}
                  {msg.options && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, marginLeft: 36, width: '100%' }}>
                      {msg.options.map((opt, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 4 }} whileTap={{ scale: 0.98 }}
                          onClick={() => handleOptionClick(opt.path)}
                          style={{
                            background: 'white', border: '1px solid #e2e8f0', padding: '10px 16px', borderRadius: 12, color: '#6C63FF', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', width: 'fit-content', minWidth: 160
                          }}
                        >
                          {opt.label} <ArrowRight size={14} />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9', background: 'white' }}>
              <form onSubmit={handleSend} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <input
                  type={step === 'EMAIL' ? 'email' : 'text'}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={step === 'NAME' ? 'Type your name...' : step === 'EMAIL' ? 'Type your email...' : 'Type a message...'}
                  style={{ flexGrow: 1, padding: '12px 16px', borderRadius: 100, border: '1px solid #e2e8f0', outline: 'none', fontSize: 14, background: '#f8fafc' }}
                />
                <button type="submit" disabled={!inputValue.trim()} style={{ width: 44, height: 44, borderRadius: '50%', background: inputValue.trim() ? '#6C63FF' : '#cbd5e1', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: inputValue.trim() ? 'pointer' : 'not-allowed', transition: 'background 0.3s' }}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6C63FF, #00C2FF)',
          color: 'white',
          border: 'none',
          boxShadow: '0 10px 25px rgba(108,99,255,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 99999
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </>
  );
}
