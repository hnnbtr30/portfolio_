import React from 'react';
import { sounds } from './SoundEffects';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'purple' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  href,
  external,
  className = '',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    sounds.playClick();
    if (onClick) {
      onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const handleMouseEnter = () => {
    sounds.playHover();
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-cyan-500/10 text-cyan-300 border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:border-cyan-300',
    secondary:
      'bg-slate-900/60 text-slate-200 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]',
    purple:
      'bg-purple-600/10 text-purple-300 border border-purple-500/60 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_25px_rgba(157,78,221,0.6)] hover:border-purple-400',
    ghost:
      'bg-transparent text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30',
  }[variant];

  const content = (
    <>
      {/* Sci-Fi cut corner accents */}
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-70" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-70" />

      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span className="tracking-wider uppercase font-tech">{children}</span>
    </>
  );

  const baseClasses = `relative group inline-flex items-center justify-center gap-2 rounded font-medium transition-all duration-200 select-none overflow-hidden active:scale-95 ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {content}
    </button>
  );
};
