import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');

const templates = [
  {
    name: 'profile.svg',
    title: 'HANNA ABIGAIL B. BETER',
    subtitle: 'COMPUTER ENGINEERING SPECIALIST',
    accent: '#00f0ff',
    icon: 'USER_CORE',
    badge: 'BIO_ID: 800-HB-2026'
  },
  {
    name: 'about.svg',
    title: 'ENGINEERING & RESEARCH',
    subtitle: 'HARDWARE • IOT • SYSTEMS • AI',
    accent: '#9d4edd',
    icon: 'CHIP_ARCH',
    badge: 'SYS_VER: CpE.v4'
  },
  {
    name: 'project-1.svg',
    title: 'NEURAL-IOT SENTINEL',
    subtitle: 'Edge AI Microcontroller Smart Monitoring',
    accent: '#00f0ff',
    icon: 'MICROCONTROLLER',
    badge: 'EMBEDDED C++ / ESP32'
  },
  {
    name: 'project-2.svg',
    title: 'CYBER-TELEMETRY DASHBOARD',
    subtitle: 'Real-time WebSocket Hardware Diagnostics',
    accent: '#38bdf8',
    icon: 'OSCILLOSCOPE',
    badge: 'REACT / TAILWIND / WEBSOCKET'
  },
  {
    name: 'project-3.svg',
    title: 'FPGA PIPELINE PROCESSOR',
    subtitle: 'Custom 16-Bit RISC CPU Architecture',
    accent: '#a855f7',
    icon: 'LOGIC_GATES',
    badge: 'VERILOG / QUARTUS'
  },
  {
    name: 'project-4.svg',
    title: 'AUTONOMOUS ROVER NAVIGATION',
    subtitle: 'LiDAR Obstacle Avoidance & Sensor Fusion',
    accent: '#06d6a0',
    icon: 'ROBOTICS',
    badge: 'ARDUINO / ROS / PYTHON'
  },
  {
    name: 'project-5.svg',
    title: 'BIOMETRIC COMMAND CONSOLE',
    subtitle: 'Encrypted Cryptographic Authentication UI',
    accent: '#00f0ff',
    icon: 'BIOMETRIC',
    badge: 'TYPESCRIPT / TAILWIND / REST'
  },
  {
    name: 'project-6.svg',
    title: 'SMART GREENHOUSE TELEMETRY',
    subtitle: 'LoRaWAN Long-Range Agro-Environmental Node',
    accent: '#38bdf8',
    icon: 'CIRCUIT_BOARD',
    badge: 'C++ / LORAWAN / SENSORS'
  },
  {
    name: 'certificate-1.svg',
    title: 'EMBEDDED SYSTEMS ARCHITECTURE',
    subtitle: 'Microcontroller Systems & Firmware Design',
    accent: '#00f0ff',
    icon: 'CERTIFICATE',
    badge: 'ACADEMIC HONORS'
  },
  {
    name: 'certificate-2.svg',
    title: 'ADVANCED WEB TECHNOLOGIES',
    subtitle: 'Modern Full-Stack Engineering & Cloud UI',
    accent: '#9d4edd',
    icon: 'CERTIFICATE',
    badge: 'DISTINCTION'
  },
  {
    name: 'certificate-3.svg',
    title: 'DIGITAL LOGIC & FPGA DESIGN',
    subtitle: 'Hardware Description Languages & Verification',
    accent: '#06d6a0',
    icon: 'CERTIFICATE',
    badge: 'CREDENTIAL: VERIFIED'
  },
  {
    name: 'lab-1.svg',
    title: 'CIRCUITRY PROTOTYPING LAB',
    subtitle: 'Oscilloscope, Logic Analyzers & Soldering',
    accent: '#00f0ff',
    icon: 'HARDWARE_LAB',
    badge: 'HARDWARE BENCH'
  },
  {
    name: 'lab-2.svg',
    title: 'ROBOTICS FIELD TESTING',
    subtitle: 'Sensor Integration & Real-World Telemetry',
    accent: '#a855f7',
    icon: 'ROBOTICS_LAB',
    badge: 'TEST FLIGHT / DEPLOYMENT'
  }
];

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040711" />
      <stop offset="50%" stop-color="#091124" />
      <stop offset="100%" stop-color="#050a17" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${item.accent}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#9d4edd" stop-opacity="0.9" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${item.accent}" stroke-width="0.75" stroke-opacity="0.15" />
      <circle cx="0" cy="0" r="1.5" fill="${item.accent}" fill-opacity="0.3" />
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <rect width="800" height="600" fill="url(#grid)" />

  <!-- Outer Cyber Border -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="${item.accent}" stroke-width="1.5" stroke-opacity="0.4" rx="12" />
  
  <!-- Cyber Corner Accents -->
  <path d="M 20 60 L 20 20 L 60 20" fill="none" stroke="${item.accent}" stroke-width="4" stroke-linecap="square" filter="url(#glow)"/>
  <path d="M 740 20 L 780 20 L 780 60" fill="none" stroke="${item.accent}" stroke-width="4" stroke-linecap="square" filter="url(#glow)"/>
  <path d="M 20 540 L 20 580 L 60 580" fill="none" stroke="${item.accent}" stroke-width="4" stroke-linecap="square" filter="url(#glow)"/>
  <path d="M 740 580 L 780 580 L 780 540" fill="none" stroke="${item.accent}" stroke-width="4" stroke-linecap="square" filter="url(#glow)"/>

  <!-- Top HUD Bar -->
  <rect x="35" y="35" width="730" height="35" fill="rgba(0, 240, 255, 0.05)" rx="4" stroke="${item.accent}" stroke-width="0.5" stroke-opacity="0.3" />
  <circle cx="55" cy="52" r="5" fill="#00f0ff" filter="url(#glow)"/>
  <circle cx="75" cy="52" r="4" fill="#9d4edd" />
  <circle cx="95" cy="52" r="4" fill="#38bdf8" />
  <text x="120" y="57" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="${item.accent}" letter-spacing="2">SYS://ASSET_NODE</text>
  <text x="745" y="57" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="end" letter-spacing="1.5">${item.badge}</text>

  <!-- Central Holographic Target -->
  <g transform="translate(400, 280)">
    <!-- Circuit lines radiating -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="${item.accent}" stroke-width="1" stroke-dasharray="8 6" stroke-opacity="0.3" />
    <circle cx="0" cy="0" r="100" fill="rgba(0, 240, 255, 0.03)" stroke="${item.accent}" stroke-width="1.5" stroke-opacity="0.5" />
    <circle cx="0" cy="0" r="60" fill="rgba(157, 78, 221, 0.08)" stroke="#9d4edd" stroke-width="2" filter="url(#glow)" stroke-opacity="0.6" />
    
    <!-- Crosshairs -->
    <line x1="-155" y1="0" x2="-115" y2="0" stroke="${item.accent}" stroke-width="2" />
    <line x1="115" y1="0" x2="155" y2="0" stroke="${item.accent}" stroke-width="2" />
    <line x1="0" y1="-155" x2="0" y2="-115" stroke="${item.accent}" stroke-width="2" />
    <line x1="0" y1="115" x2="0" y2="155" stroke="${item.accent}" stroke-width="2" />

    <!-- Center Icon Symbol -->
    <polygon points="0,-35 30,18 -30,18" fill="none" stroke="${item.accent}" stroke-width="3" filter="url(#glow)"/>
    <circle cx="0" cy="2" r="8" fill="${item.accent}" filter="url(#glow)"/>
  </g>

  <!-- Title & Subtitle Card at Bottom -->
  <rect x="50" y="450" width="700" height="100" fill="rgba(6, 11, 24, 0.85)" rx="8" stroke="${item.accent}" stroke-width="1" stroke-opacity="0.4" />
  <text x="75" y="490" font-family="'Orbitron', sans-serif" font-size="22" font-weight="800" fill="#f8fafc" letter-spacing="2">${item.title}</text>
  <text x="75" y="522" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="500" fill="${item.accent}" letter-spacing="1">${item.subtitle}</text>
  <text x="725" y="508" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#64748b" text-anchor="end">[REPLACE_WITH_IMAGE]</text>
</svg>`;
}

for (const t of templates) {
  const filePath = path.join(outDir, t.name);
  fs.writeFileSync(filePath, generateSvg(t));
}

console.log(`Successfully generated ${templates.length} futuristic asset placeholders in ${outDir}`);
