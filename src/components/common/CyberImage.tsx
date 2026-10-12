import React, { useState } from 'react';

interface CyberImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  cyberFrame?: boolean;
  scanline?: boolean;
}

export const CyberImage: React.FC<CyberImageProps> = ({
  src,
  fallbackSrc = '/images/profile.svg',
  alt = 'Hanna Abigail Beter Portfolio Media',
  cyberFrame = false,
  scanline = false,
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${cyberFrame ? 'border border-cyan-500/30 rounded-lg' : ''}`}>
      {/* Loading Shimmer */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-500 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${className}`}
        {...props}
      />

      {/* Cyber Scanline Overlay */}
      {scanline && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-60" />
      )}

      {/* Cyber Corner Brackets */}
      {cyberFrame && (
        <>
          <span className="pointer-events-none absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_6px_#00f0ff]" />
          <span className="pointer-events-none absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_6px_#00f0ff]" />
          <span className="pointer-events-none absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_6px_#00f0ff]" />
          <span className="pointer-events-none absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_6px_#00f0ff]" />
        </>
      )}
    </div>
  );
};
