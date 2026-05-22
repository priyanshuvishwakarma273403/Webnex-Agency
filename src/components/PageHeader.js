'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageHeader({ title, highlight, subtitle, badge, image, breadcrumb }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 380,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 72,
      }}
    >
      {/* Background Image */}
      {image && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.75) 50%, rgba(108,99,255,0.3) 100%)',
          }} />
        </div>
      )}

      {/* No image fallback */}
      {!image && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'linear-gradient(135deg, #0F172A 0%, #1e1b4b 50%, #0f172a 100%)',
        }}>
          {/* Animated gradient blobs */}
          <div style={{
            position: 'absolute', top: -80, left: -80, width: 400, height: 400,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, right: -60, width: 300, height: 300,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,194,255,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
        </div>
      )}

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            style={{
              position: 'absolute',
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              borderRadius: '50%',
              background: i % 2 === 0 ? '#6C63FF' : '#00C2FF',
              left: `${8 + (i * 7.5) % 85}%`,
              top: `${15 + (i * 11) % 70}%`,
              boxShadow: `0 0 8px ${i % 2 === 0 ? '#6C63FF' : '#00C2FF'}`,
            }}
          />
        ))}
      </div>

      {/* Animated grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(108,99,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.08) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Content */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 2, padding: '60px 20px' }}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}
          >
            {breadcrumb.map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontSize: 12, color: i === breadcrumb.length - 1 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                  fontWeight: i === breadcrumb.length - 1 ? 600 : 400,
                }}>
                  {item}
                </span>
                {i < breadcrumb.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>/</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: 18 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: '100px',
              background: 'rgba(108,99,255,0.2)',
              border: '1px solid rgba(108,99,255,0.4)',
              fontSize: 11, fontWeight: 700, color: '#a5b4fc',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
            }}>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C2FF', boxShadow: '0 0 8px #00C2FF' }}
              />
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            fontFamily: 'Poppins, sans-serif',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: '-0.02em',
            maxWidth: 720,
          }}
        >
          {title}{' '}
          {highlight && (
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #00C2FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {highlight}
            </span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              maxWidth: 560,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            height: 3, borderRadius: 2,
            background: 'linear-gradient(90deg, #6C63FF, #00C2FF)',
            marginTop: 24,
          }}
        />
      </div>
    </section>
  );
}
