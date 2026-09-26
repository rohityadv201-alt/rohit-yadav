import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable if user has fine pointer (desktop mouse)
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.dataset?.hoverable === 'true'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const render = () => {
      setPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[#F5C542] transition-transform duration-75 ease-out shadow-[0_0_10px_#F5C542]"
        style={{
          left: `${targetPos.x}px`,
          top: `${targetPos.y}px`,
          width: isClicking ? '4px' : '6px',
          height: isClicking ? '4px' : '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Trailing Aura Ring */}
      <div
        className={`pointer-events-none fixed z-[9998] rounded-full border transition-all duration-150 ease-out ${
          isHovered
            ? 'border-[#A3E635] bg-[#A3E635]/10 scale-150 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
            : 'border-[#D4AF37]/60 bg-transparent shadow-[0_0_12px_rgba(212,175,55,0.2)]'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '42px' : isClicking ? '20px' : '30px',
          height: isHovered ? '42px' : isClicking ? '20px' : '30px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
