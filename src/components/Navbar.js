'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Briefcase, FolderOpen, Info, Bot, DollarSign,
  Mail, Menu, X, Zap, ChevronRight, PenTool, ChevronDown
} from 'lucide-react';
import GraphicDesignDropdown from './GraphicDesignDropdown';
import { graphicDesignCategories } from '../data/graphicDesignData';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Briefcase },
  { label: 'Graphic Design', href: '#graphic-design', icon: PenTool, hasMegaMenu: true },
  { label: 'Portfolio', href: '/portfolio', icon: FolderOpen },
  { label: 'About', href: '/about', icon: Info },
  { label: 'AI Assistant', href: '/ai', icon: Bot },
  { label: 'Pricing', href: '/pricing', icon: DollarSign },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div style={{ position: 'fixed', top: scrolled ? 16 : 0, left: 0, right: 0, zIndex: 9999, display: 'flex', justifyContent: 'center', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{
            width: scrolled ? 'calc(100% - 32px)' : '100%',
            maxWidth: scrolled ? 1120 : '100%',
            background: scrolled ? 'linear-gradient(90deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))' : 'linear-gradient(90deg, rgba(11,17,33,1), rgba(20,29,43,1))',
            backdropFilter: 'blur(24px)',
            border: scrolled ? '1px solid rgba(108,99,255,0.2)' : '1px solid rgba(108,99,255,0.1)',
            boxShadow: scrolled ? '0 16px 40px rgba(0,0,0,0.25)' : 'none',
            borderRadius: scrolled ? 24 : 0,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: scrolled ? '0 12px' : '0',
          }}
        >
          <div className="container-custom" style={{ padding: scrolled ? 0 : undefined }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 76, transition: 'all 0.4s ease' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.98 }}>
                <img src="/logo.png" alt="Logo" style={{ height: 110, maxWidth: 300, objectFit: 'contain', marginTop: -8, marginBottom: -8 }} />
              </motion.div>
            </Link>

            {/* Desktop Links */}
            <nav style={{ display: 'none', gap: 6 }} className="lg-flex">
              <style>{`.lg-flex { display: none; } @media (min-width: 1024px) { .lg-flex { display: flex !important; } }`}</style>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                
                if (item.hasMegaMenu) {
                  return <GraphicDesignDropdown key={item.label} item={item} isActive={isActive} />;
                }

                return (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none', position: 'relative' }}>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(108,99,255,0.08)', borderRadius: 10, zIndex: 0 }}
                      />
                    )}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        position: 'relative', zIndex: 1,
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '8px 16px', borderRadius: 10,
                        fontSize: 14, fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#00C2FF' : '#e2e8f0',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                      className="nav-link"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link href="/contact" style={{ textDecoration: 'none' }} className="desktop-cta">
                <style>{`.desktop-cta { display: none; } @media (min-width: 768px) { .desktop-cta { display: block; } }`}</style>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(108,99,255,0.38)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '9px 20px', borderRadius: 10,
                    background: 'linear-gradient(135deg,#6C63FF,#00C2FF)',
                    color: 'white', fontWeight: 700, fontSize: 13,
                    fontFamily: 'Poppins, sans-serif', cursor: 'pointer',
                  }}
                >
                  Get Started <ChevronRight size={14} />
                </motion.div>
              </Link>

              {/* Hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 8, borderRadius: 10,
                  color: '#f8fafc',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                className="mobile-menu-btn"
              >
                <style>{`.mobile-menu-btn { display: flex; } @media (min-width: 1024px) { .mobile-menu-btn { display: none !important; } }`}</style>
                <AnimatePresence mode="wait">
                  {mobileOpen
                    ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
                    : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.div>
                  }
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.4)', zIndex: 9997, backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', maxWidth: 320,
                background: 'white', zIndex: 9998, padding: '80px 24px 32px',
                display: 'flex', flexDirection: 'column', gap: 6,
                boxShadow: '-20px 0 60px rgba(108,99,255,0.15)',
              }}
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link href={item.href} style={{ textDecoration: 'none' }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '13px 16px', borderRadius: 12,
                        background: isActive ? 'rgba(108,99,255,0.08)' : 'transparent',
                        color: isActive ? '#6C63FF' : '#374151',
                        fontWeight: isActive ? 700 : 500, fontSize: 15,
                        transition: 'all 0.2s',
                      }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: 10,
                          background: isActive ? 'rgba(108,99,255,0.12)' : '#f8f7ff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <item.icon size={16} strokeWidth={2} color={isActive ? '#6C63FF' : '#64748b'} />
                        </div>
                        {item.label}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              <div style={{ marginTop: 'auto' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '14px', borderRadius: 12,
                    background: 'linear-gradient(135deg,#6C63FF,#00C2FF)',
                    color: 'white', fontWeight: 700, fontSize: 15,
                    fontFamily: 'Poppins, sans-serif',
                  }}>
                    Start Your Project <ChevronRight size={16} />
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
