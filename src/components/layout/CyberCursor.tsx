import React, { useEffect, useState } from 'react';

export const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) {
      setEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing ring
    let animationFrame: number;
    const animateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animationFrame = requestAnimationFrame(animateTrail);
    };

    animationFrame = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Central Cyan Laser Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.7 : 1})`,
        }}
      />

      {/* Trailing Futuristic Reticle Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovering
            ? 'w-10 h-10 border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
            : 'w-7 h-7 border-cyan-500/50 shadow-[0_0_6px_rgba(0,240,255,0.2)]'
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) scale(${isClicking ? 0.85 : 1})`,
        }}
      >
        {/* Futuristic Crosshair Ticks */}
        {isHovering && (
          <>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyan-400" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyan-400" />
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-cyan-400" />
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-cyan-400" />
          </>
        )}
      </div>
    </div>
  );
};
