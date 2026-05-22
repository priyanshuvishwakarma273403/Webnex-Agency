'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseX}px`;
        glowRef.current.style.top = `${mouseY}px`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor]');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };
    addHoverListeners();

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, [mounted, isMobile]);

  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6C63FF, #00C2FF)',
          transition: 'width 0.1s, height 0.1s',
        }}
      />

      {/* Follower ring */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
          width: isHovering ? 50 : isClicking ? 28 : 36,
          height: isHovering ? 50 : isClicking ? 28 : 36,
          borderRadius: '50%',
          border: `2px solid ${isHovering ? '#6C63FF' : 'rgba(108,99,255,0.5)'}`,
          background: isHovering ? 'rgba(108,99,255,0.08)' : 'transparent',
          transition: 'width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s',
        }}
      />

      {/* Glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)',
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}
