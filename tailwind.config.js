/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#040711',
          panel: '#090f22',
          surface: '#0f1738',
          border: 'rgba(0, 240, 255, 0.2)',
          'border-bright': 'rgba(0, 240, 255, 0.6)',
          cyan: '#00f0ff',
          blue: '#1d63ff',
          neon: '#00ffff',
          purple: '#9d4edd',
          violet: '#7928ca',
          accent: '#06d6a0',
          text: '#e2e8f0',
          muted: '#8892b0',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        tech: ['Space Grotesk', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(157, 78, 221, 0.15) 100%)",
        'holo-gradient': "linear-gradient(90deg, rgba(0,240,255,0.8), rgba(157,78,221,0.8), rgba(0,240,255,0.8))",
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.2)',
        'neon-cyan-lg': '0 0 25px rgba(0, 240, 255, 0.7), 0 0 50px rgba(0, 240, 255, 0.35)',
        'neon-purple': '0 0 15px rgba(157, 78, 221, 0.5), 0 0 30px rgba(157, 78, 221, 0.2)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 240, 255, 0.15)',
        'cyber-card-hover': '0 12px 40px 0 rgba(0, 240, 255, 0.2), inset 0 0 0 1px rgba(0, 240, 255, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
