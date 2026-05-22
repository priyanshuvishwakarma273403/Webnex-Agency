'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: 'Hi there! I am WebNex AI. How can I assist you today?',
      options: [
        { label: 'Explore Services', path: '/services' },
        { label: 'Check Pricing', path: '/pricing' },
        { label: 'Contact Sales', path: '/contact' }
      ]
    }
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

  const handleSend = async (e, overrideText = null) => {
    if (e) e.preventDefault();
    const textToSend = overrideText || inputValue.trim();
    if (!textToSend) return;

    const newMessages = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMessages);
    if (!overrideText) setInputValue('');

    const loadingMsgId = Date.now();
    setMessages(prev => [...prev, { id: loadingMsgId, role: 'ai', text: '', isLoading: true }]);

    try {
      const chatContext = newMessages
        .filter(m => !m.isLoading)
        .slice(-10); // Keep last 10 messages for context

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatContext })
      });

      if (!res.ok) throw new Error('API Error');
      const data = await res.json();

      setMessages(prev => prev.map(m => m.id === loadingMsgId ? {
        role: 'ai', 
        text: data.reply,
        options: data.suggestions
      } : m));

    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => prev.map(m => m.id === loadingMsgId ? {
        role: 'ai', 
        text: 'Sorry, I am having trouble connecting to the server. Please try again later.'
      } : m));
    }
  };

  const handleOptionClick = (opt) => {
    if (opt.path) {
      setIsOpen(false);
      router.push(opt.path);
    } else if (opt.action) {
      handleSend(null, opt.action);
    }
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
                      {msg.isLoading ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20 }}>
                          <Loader2 size={16} color="#6C63FF" />
                        </motion.div>
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                  
                  {/* Options / Suggestions */}
                  {msg.options && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, marginLeft: 36, width: '100%' }}>
                      {msg.options.map((opt, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 4 }} whileTap={{ scale: 0.98 }}
                          onClick={() => handleOptionClick(opt)}
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
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
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
