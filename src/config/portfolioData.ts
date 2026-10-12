/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION - HANNA ABIGAIL B. BETER
 * ==============================================================================
 * You can easily customize any text, statistics, skill sets, project items, 
 * timeline entries, and social links in this file without touching component code.
 * 
 * To replace images:
 * - Profile photo: place your photo in `/public/images/profile.jpg`
 * - About section photo: `/public/images/about.jpg`
 * - Project images: `/public/images/project-1.jpg`, `project-2.jpg`, etc.
 * - Certificates: `/public/images/certificate-1.jpg`, etc.
 * ==============================================================================
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  accent: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Familiar", or percentage if desired
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Hardware' | 'Web Development' | 'Software' | 'UI/UX';
  description: string;
  longDescription: string;
  image: string;
  fallbackImage: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'certification' | 'milestone';
  period: string;
  title: string;
  institution: string;
  location?: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Academic Projects' | 'Certificates' | 'Hardware & Labs' | 'Design Previews';
  image: string;
  fallbackImage: string;
  description: string;
  date: string;
  tag: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Hanna Abigail B. Beter",
    initials: "HB",
    role: "Computer Engineering Student",
    title: "Computer Engineering Student | Future Technology Innovator",
    greeting: "HELLO, WORLD. I'M",
    tagline: "Exploring the intersection of technology, creativity, and innovation. Building ideas into meaningful digital experiences.",
    status: "AVAILABLE FOR OPPORTUNITIES",
    email: "hanna.beter@example.com", // Replace with your real email
    phone: "+63 (900) 000-0000",       // Optional editable phone
    location: "Philippines",
    bioIntro: "I am a passionate Computer Engineering student driven by the desire to bridge hardware architecture with intelligent software systems.",
    bioDescription: `From designing embedded microcontrollers and testing digital circuits to developing modern full-stack web applications and intuitive interfaces, I love solving real-world challenges with hands-on ingenuity. 

My academic journey focuses on computer systems, robotics, IoT telemetry, and digital design. I strive to engineer technology that is not only functional and robust, but also elegant, secure, and future-ready.`,
    profileImage: "/images/profile.jpg",
    aboutImage: "/images/about.jpg",
    resumeUrl: "#", // Link to your resume PDF (e.g. /resume.pdf)
  },

  navigation: [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "showcase", label: "Showcase", href: "#showcase" },
    { id: "contact", label: "Contact", href: "#contact" },
  ] as NavItem[],

  statistics: [
    {
      id: "projects",
      label: "Projects Completed",
      value: 14,
      suffix: "+",
      description: "Academic & personal builds across hardware & web"
    },
    {
      id: "technologies",
      label: "Technologies Learned",
      value: 20,
      suffix: "+",
      description: "Languages, microcontrollers, EDA tools & frameworks"
    },
    {
      id: "years",
      label: "Years of Learning",
      value: 3,
      suffix: "rd Yr",
      description: "Rigorous Computer Engineering curriculum"
    },
    {
      id: "certifications",
      label: "Certifications Earned",
      value: 6,
      suffix: "",
      description: "Technical trainings, workshops & academic credentials"
    }
  ] as StatItem[],

  skills: [
    {
      id: "programming",
      category: "Programming Languages",
      iconName: "Code2",
      accent: "#00f0ff",
      description: "Core languages used for system architecture, algorithmic logic, and web systems.",
      skills: [
        { name: "C / C++", level: "Core Embedded", highlight: true },
        { name: "Python", level: "Scripting & Data", highlight: true },
        { name: "JavaScript / TypeScript", level: "Modern Web", highlight: true },
        { name: "Java", level: "Object Oriented", highlight: false },
        { name: "Verilog HDL", level: "Digital Logic", highlight: true },
      ]
    },
    {
      id: "web-dev",
      category: "Web Development",
      iconName: "Globe",
      accent: "#38bdf8",
      description: "Modern frontend and backend tech for creating responsive digital experiences.",
      skills: [
        { name: "React.js", level: "Frontend Core", highlight: true },
        { name: "Tailwind CSS", level: "Modern Styling", highlight: true },
        { name: "HTML5 / CSS3", level: "Semantic Markup", highlight: false },
        { name: "Node.js & Express", level: "Server Runtime", highlight: true },
        { name: "REST APIs & JSON", level: "Integration", highlight: false },
      ]
    },
    {
      id: "hardware",
      category: "Hardware & Electronics",
      iconName: "Cpu",
      accent: "#a855f7",
      description: "Computer Engineering hardware foundations, embedded design, and prototyping.",
      skills: [
        { name: "Arduino & ESP32", level: "Microcontrollers", highlight: true },
        { name: "Raspberry Pi", level: "Single-Board Comp", highlight: true },
        { name: "Digital Logic Design", level: "Circuits & Gates", highlight: true },
        { name: "Sensor & Actuator I/O", level: "Analog & Digital", highlight: true },
        { name: "Circuit Simulation", level: "Tinkercad / Proteus", highlight: false },
        { name: "PCB Prototyping", level: "Breadboard & Soldering", highlight: false },
      ]
    },
    {
      id: "ui-ux",
      category: "UI/UX Design",
      iconName: "Palette",
      accent: "#06d6a0",
      description: "Human-computer interface principles, futuristic cyber design, and wireframing.",
      skills: [
        { name: "Figma", level: "UI Wireframes & Mockups", highlight: true },
        { name: "Responsive Layouts", level: "Mobile & Desktop", highlight: true },
        { name: "Design Systems", level: "Color & Typography", highlight: false },
        { name: "Interaction Design", level: "Micro-animations", highlight: true },
      ]
    },
    {
      id: "database",
      category: "Database Management",
      iconName: "Database",
      accent: "#f43f5e",
      description: "Structured relational and document databases for data integrity and IoT telemetry.",
      skills: [
        { name: "MySQL", level: "Relational Queries", highlight: true },
        { name: "SQLite", level: "Embedded Database", highlight: false },
        { name: "MongoDB / NoSQL", level: "Document Storage", highlight: false },
        { name: "Firebase Realtime DB", level: "Cloud Telemetry", highlight: true },
      ]
    },
    {
      id: "tools",
      category: "Tools & Technologies",
      iconName: "Wrench",
      accent: "#eab308",
      description: "Developer tooling, version control, operating systems, and instrumentation.",
      skills: [
        { name: "Git & GitHub", level: "Version Control", highlight: true },
        { name: "VS Code & PlatformIO", level: "Development IDEs", highlight: true },
        { name: "Linux / CLI", level: "Command Line", highlight: true },
        { name: "Postman", level: "API Testing", highlight: false },
        { name: "Multimeters & Scopes", level: "Lab Diagnostic Tools", highlight: true },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      title: "Neural-IoT Sentinel Node",
      category: "Hardware",
      description: "Edge microcontroller station with sensor fusion for environmental telemetry and alert dispatch.",
      longDescription: "An ESP32-powered edge monitoring system equipped with multi-sensor telemetry (temperature, humidity, air quality, motion) and real-time WiFi broadcasting to a centralized dashboard.",
      image: "/images/project-1.jpg",
      fallbackImage: "/images/project-1.svg",
      tags: ["ESP32", "C++", "FreeRTOS", "MQTT", "Sensors"],
      features: [
        "Real-time sensor telemetry with low latency",
        "Threshold breach audio & visual LED indicators",
        "Fail-safe local EEPROM data backup during offline states"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: true
    },
    {
      id: "project-2",
      title: "Cyber-Telemetry Web Dashboard",
      category: "Web Development",
      description: "A dark-mode futuristic dashboard visualizing live telemetry data streams with custom charts.",
      longDescription: "A high-performance React dashboard featuring dynamic charts, glassmorphism UI, real-time WebSocket packet logs, and interactive diagnostics for connected hardware devices.",
      image: "/images/project-2.jpg",
      fallbackImage: "/images/project-2.svg",
      tags: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "Charts"],
      features: [
        "Sub-second packet graph streaming",
        "Customizable gauge widgets and device switches",
        "Export telemetry data to CSV and JSON formats"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: true
    },
    {
      id: "project-3",
      title: "FPGA 16-Bit RISC Processor",
      category: "Software",
      description: "Custom pipeline micro-architecture designed in Verilog HDL and verified with testbenches.",
      longDescription: "An academic computer architecture project demonstrating fetch-decode-execute instruction pipelining, ALU logic operations, register files, and control hazard handling.",
      image: "/images/project-3.jpg",
      fallbackImage: "/images/project-3.svg",
      tags: ["Verilog HDL", "Digital Logic", "EDA Playground", "ModelSim"],
      features: [
        "16-bit custom arithmetic instruction set architecture",
        "Pipeline hazard detection and forwarding unit",
        "Simulation verification with comprehensive assembly testbenches"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: true
    },
    {
      id: "project-4",
      title: "Autonomous Obstacle Rover",
      category: "Hardware",
      description: "Robotics platform featuring ultrasonic sensor triangulation and motor drive algorithms.",
      longDescription: "A dual-motor wheeled rover utilizing Arduino microcontroller logic, servo scanning, and PID control algorithms to autonomously map and navigate cluttered indoor obstacles.",
      image: "/images/project-4.jpg",
      fallbackImage: "/images/project-4.svg",
      tags: ["Arduino", "Robotics", "C++", "H-Bridge Drivers", "Sensors"],
      features: [
        "360-degree obstacle scanning servo turret",
        "Dynamic collision avoidance and path recalculation",
        "Bluetooth manual override control option"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: false
    },
    {
      id: "project-5",
      title: "Biometric Lab Security Interface",
      category: "UI/UX",
      description: "Futuristic access control interface mockup with cyber HUD ergonomics and biometric status feedback.",
      longDescription: "A high-fidelity Figma prototype and interactive UI component system engineered for laboratory access control, badge NFC emulation, and multi-factor biometric authentication.",
      image: "/images/project-5.jpg",
      fallbackImage: "/images/project-5.svg",
      tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      features: [
        "Holographic authentication HUD with interactive animations",
        "Audited color contrast and accessibility benchmarks",
        "Interactive micro-interactions for biometric scanning confirmation"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: false
    },
    {
      id: "project-6",
      title: "Smart Campus Energy Telemetry",
      category: "Web Development",
      description: "Full-stack academic platform monitoring classroom electricity usage and automated scheduling.",
      longDescription: "A prototype web portal connected to simulated energy sensors to track power consumption, forecast peak loads, and provide recommendations for laboratory power savings.",
      image: "/images/project-6.jpg",
      fallbackImage: "/images/project-6.svg",
      tags: ["Node.js", "Express", "Tailwind CSS", "MySQL", "REST API"],
      features: [
        "Automated classroom power schedule management",
        "Historical energy consumption analytics and reporting",
        "Role-based authentication for lab managers and students"
      ],
      githubUrl: "https://github.com/hanna-beter",
      liveUrl: "#",
      featured: false
    }
  ] as ProjectItem[],

  timeline: [
    {
      id: "edu-cpe",
      type: "education",
      period: "2023 — Present",
      title: "Bachelor of Science in Computer Engineering",
      institution: "College of Engineering & Technology",
      location: "Philippines",
      description: "Undergraduate studies focused on hardware architecture, digital systems, software engineering, embedded microcontrollers, and modern computing solutions.",
      highlights: [
        "Dean's Honor List / Consistent Academic Standing",
        "Active member of the Computer Engineering Students Association",
        "Specializing in Embedded IoT Systems & Web Integration"
      ],
      badge: "In Progress"
    },
    {
      id: "cert-iot",
      type: "certification",
      period: "2025",
      title: "Embedded Systems & IoT Microcontroller Certification",
      institution: "Technical Workshop & Credential Program",
      description: "Intensive hands-on training on microcontrollers, sensor interfacing, RTOS principles, and wireless communication protocols.",
      highlights: [
        "Hands-on ESP32 firmware development",
        "MQTT cloud broker setup & secure telemetry",
        "Verified practical hardware benchmark project"
      ],
      badge: "Credential Verified"
    },
    {
      id: "proj-lead",
      type: "milestone",
      period: "2024",
      title: "Academic Hardware-Software Integration Lead",
      institution: "Engineering Design Project",
      description: "Spearheaded a team of 4 engineering students in designing an automated microcontroller prototype coupled with an interactive web dashboard.",
      highlights: [
        "Architected circuit schematics and component selection",
        "Developed full-stack web UI for real-time visualization",
        "Presented defense to panel of faculty engineering advisers"
      ],
      badge: "Project Lead"
    },
    {
      id: "edu-shs",
      type: "education",
      period: "2021 — 2023",
      title: "Senior High School — STEM Strand",
      institution: "Pre-Engineering Academic Honors",
      location: "Philippines",
      description: "Graduated with academic honors focusing on advanced science, mathematics, computer programming fundamentals, and pre-engineering electives.",
      highlights: [
        "Graduated With Honors",
        "Science & Technology Excellence Citation",
        "Robotics Club Participant"
      ],
      badge: "Honors"
    }
  ] as TimelineItem[],

  showcase: [
    {
      id: "showcase-1",
      title: "Engineering Portfolio Portrait",
      category: "Portraits",
      image: "/images/profile.jpg",
      fallbackImage: "/images/profile.svg",
      description: "Professional profile portrait representing my identity as an aspiring Computer Engineer and innovator.",
      date: "2026",
      tag: "Identity"
    },
    {
      id: "showcase-2",
      title: "Hardware Bench & Circuit Prototyping",
      category: "Hardware & Labs",
      image: "/images/lab-1.jpg",
      fallbackImage: "/images/lab-1.svg",
      description: "Hands-on workbench testing with oscilloscopes, digital multimeters, breadboards, and logic analyzers.",
      date: "2025",
      tag: "Laboratory"
    },
    {
      id: "showcase-3",
      title: "Embedded Microcontroller Prototype",
      category: "Academic Projects",
      image: "/images/project-1.jpg",
      fallbackImage: "/images/project-1.svg",
      description: "Soldered sensor node circuit with custom pin routing and wireless telemetry transmission.",
      date: "2025",
      tag: "Hardware"
    },
    {
      id: "showcase-4",
      title: "Embedded Systems Certification",
      category: "Certificates",
      image: "/images/certificate-1.jpg",
      fallbackImage: "/images/certificate-1.svg",
      description: "Official credential awarded for completing intensive training in microcontroller systems and IoT.",
      date: "2025",
      tag: "Credential"
    },
    {
      id: "showcase-5",
      title: "Cyberpunk Command Center UI",
      category: "Design Previews",
      image: "/images/project-2.jpg",
      fallbackImage: "/images/project-2.svg",
      description: "High-contrast telemetry interface concept highlighting dark ergonomics and responsive grid layouts.",
      date: "2026",
      tag: "UI Prototype"
    },
    {
      id: "showcase-6",
      title: "Autonomous Robotics Field Trial",
      category: "Hardware & Labs",
      image: "/images/lab-2.jpg",
      fallbackImage: "/images/lab-2.svg",
      description: "Field deployment and sensor calibration test for obstacle avoidance mobile chassis.",
      date: "2024",
      tag: "Robotics"
    }
  ] as ShowcaseItem[],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/hanna-beter",
      icon: "Github",
      username: "github.com/hanna-beter"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/hanna-beter",
      icon: "Linkedin",
      username: "linkedin.com/in/hanna-beter"
    },
    {
      platform: "Email",
      url: "mailto:hanna.beter@example.com",
      icon: "Mail",
      username: "hanna.beter@example.com"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/hanna_beter",
      icon: "Twitter",
      username: "@hanna_beter"
    }
  ] as SocialLink[],

  footer: {
    quote: "Designed with curiosity. Built for the future.",
    copyright: "© 2026 Hanna Abigail B. Beter. All rights reserved.",
    systemStatus: "ALL SYSTEMS OPERATIONAL • CpE NODE ONLINE",
  }
};
