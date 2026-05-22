'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const testimonials = [
  { name: 'Arjun Sharma', role: 'Local Guide', initials: 'A', time: '2 weeks ago', rating: 5, text: 'WebNex transformed our startup from a basic idea to a fully functional AI-powered SaaS in 3 months. The quality is absolutely world-class.', color: '#4285F4' },
  { name: 'Priya Patel', role: '2 reviews', initials: 'P', time: 'a month ago', rating: 5, text: 'The AI chatbot they built reduced our customer support workload by 70%. Their team is incredibly talented and always goes above and beyond.', color: '#EA4335' },
  { name: 'Rahul Verma', role: 'Local Guide', initials: 'R', time: '3 months ago', rating: 5, text: 'Exceptional DevOps and cloud infrastructure. Our deployment time went from hours to minutes. WebNex is our go-to partner for all technical needs.', color: '#FBBC05' },
  { name: 'Sneha Gupta', role: '4 reviews', initials: 'S', time: '5 months ago', rating: 5, text: 'They built us a stunning restaurant website that doubled revenue in the first month. Professional, fast, creative team — highly recommended.', color: '#34A853' },
  { name: 'Mohammed Khan', role: 'Local Guide', initials: 'M', time: '6 months ago', rating: 5, text: 'The CNC control system they developed for our factory is incredible. Precision automation saved us 40% in operational costs. Excellent service!', color: '#8AB4F8' },
  { name: 'David Lee', role: '1 review', initials: 'D', time: '8 months ago', rating: 5, text: 'Unbelievable attention to detail. Their designers and developers worked flawlessly to deliver a pixel-perfect Next.js web application for our e-commerce brand.', color: '#F29900' }
];

export default function TestimonialsSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', padding: '10px 24px', borderRadius: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
               <FcGoogle size={26} />
               <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                 <span style={{ fontWeight: 800, fontSize: 18, color: '#202124', fontFamily: 'Poppins, sans-serif' }}>5.0</span>
                 <div style={{ display: 'flex', gap: 3 }}>
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbc04" color="#fbbc04" />)}
                 </div>
               </div>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, fontFamily: 'Poppins,sans-serif', color: '#0F172A', marginTop: 12 }}>
              What Our <span style={{ color: '#4285F4' }}>Clients</span> Say
            </h2>
            <p style={{ color: '#64748b', maxWidth: 600, fontSize: 15 }}>Read authentic reviews from businesses around the globe who trust WebNex for their digital transformation.</p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 24, 
          maxWidth: 1150, 
          margin: '0 auto' 
        }}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 20,
                padding: '28px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                 <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: 20, fontFamily: 'Poppins, sans-serif' }}>
                      {t.initials}
                    </div>
                    <div>
                       <div style={{ fontWeight: 700, fontSize: 15, color: '#202124', fontFamily: 'Inter, sans-serif' }}>{t.name}</div>
                       <div style={{ fontSize: 13, color: '#70757a', marginTop: 2 }}>
                         {t.role}
                       </div>
                    </div>
                 </div>
                 <FcGoogle size={24} style={{ opacity: 0.9 }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_,idx) => <Star key={idx} size={15} fill="#fbbc04" color="#fbbc04" />)}
                </div>
                <span style={{ fontSize: 13, color: '#70757a', fontWeight: 500 }}>{t.time}</span>
              </div>

              <p style={{ color: '#3c4043', fontSize: 15, lineHeight: 1.6, flexGrow: 1, fontFamily: 'Inter, sans-serif' }}>
                 "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
