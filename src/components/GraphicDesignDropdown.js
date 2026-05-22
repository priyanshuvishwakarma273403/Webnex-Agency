'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Palette, Scissors, Box, Briefcase, Printer } from 'lucide-react';
import { graphicDesignCategories } from '../data/graphicDesignData';

const iconMap = {
  Palette: Palette,
  Scissors: Scissors,
  Box: Box,
  Briefcase: Briefcase,
  Printer: Printer,
};

export default function GraphicDesignDropdown({ item, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={{ position: 'relative' }} 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={item.href} style={{ textDecoration: 'none' }}>
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
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '900px', // Large Mega Menu
              background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: '20px',
              padding: '24px',
              marginTop: '10px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              zIndex: 9999,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {/* Top glowing accent */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '2px', background: 'linear-gradient(90deg, transparent, #00C2FF, #6C63FF, transparent)', borderRadius: '100%' }} />

            {graphicDesignCategories.map((category, idx) => {
              const Icon = iconMap[category.icon] || Palette;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                    <div style={{ background: 'rgba(108,99,255,0.1)', padding: '6px', borderRadius: '8px', color: '#00C2FF' }}>
                      <Icon size={16} />
                    </div>
                    <h4 style={{ color: '#f8fafc', fontSize: '15px', fontWeight: 600, margin: 0 }}>{category.title}</h4>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '250px', overflowY: 'auto', paddingRight: '8px' }} className="mega-menu-scroll">
                    {category.items.map((service, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 4, background: 'rgba(255,255,255,0.05)' }}
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '6px 8px', borderRadius: '6px', cursor: 'pointer', transition: 'background 0.2s'
                        }}
                      >
                        <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>{service.name}</span>
                        <span style={{ color: '#00C2FF', fontSize: '12px', fontWeight: 700 }}>{service.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Custom Scrollbar Styling */}
            <style jsx>{`
              .mega-menu-scroll::-webkit-scrollbar {
                width: 4px;
              }
              .mega-menu-scroll::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.02);
                border-radius: 4px;
              }
              .mega-menu-scroll::-webkit-scrollbar-thumb {
                background: rgba(108, 99, 255, 0.3);
                border-radius: 4px;
              }
              .mega-menu-scroll::-webkit-scrollbar-thumb:hover {
                background: rgba(108, 99, 255, 0.6);
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
