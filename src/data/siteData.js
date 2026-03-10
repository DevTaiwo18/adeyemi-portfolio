import Event from "../assets/event.webp";
import Chat from "../assets/chat.webp";
import Quick from "../assets/quick.webp";
import Reid from "../assets/reid.webp";
import CommPrep from "../assets/CommPrep1.png";
import PumpRadar from "../assets/Screenshot 2026-03-04 at 12.38.31.png";

export const personalInfo = {
  name: "Adeyemi Taiwo",
  role: "Full-Stack Engineer",
  tagline:
    "Building scalable web platforms and real-time systems.",
  email: "adeyemitaiwo24434@gmail.com",
  github: "https://github.com/DevTaiwo18",
  linkedin: "https://linkedin.com/in/adeyemi-taiwo-5892082b0/",
  twitter: "https://x.com/adeyemiTai4080",
  whatsapp: "https://wa.me/2348026151366",
  location: "Ibadan, Oyo State, Nigeria",
  phone: "+2348026151366",
};

export const aboutData = {
  paragraphs: [
    "I work across the full stack to design, build, and deploy reliable, production-ready systems with a strong focus on performance, scalability, and maintainability.",
    "From crafting responsive frontends with React and Next.js to architecting robust backend services with Node.js and PostgreSQL, I deliver end-to-end solutions that solve real problems.",
  ],
  interests: [
    "Scalable Backend Architecture",
    "Real-time Systems",
    "Fintech Platforms",
    "Data-driven Applications",
    "AI-powered Analytics",
  ],
};

export const techStack = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "HTML/CSS", color: "#E34F26" },
      { name: "SASS", color: "#CC6699" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "TailwindCSS", color: "#38B2AC" },
      { name: "Shadcn/ui", color: "#FFFFFF" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "Redux", color: "#764ABC" },
      { name: "Context API", color: "#61DAFB" },
      { name: "Vite", color: "#646CFF" },
      { name: "Jest", color: "#C21325" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Express", color: "#FFFFFF" },
      { name: "REST APIs", color: "#61DAFB" },
      { name: "JWT Auth", color: "#D63AFF" },
      { name: "Socket.io", color: "#FFFFFF" },
      { name: "Real-time Systems", color: "#FF6B6B" },
      { name: "API Design", color: "#38B2AC" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Testing", color: "#C21325" },
      { name: "Deployment", color: "#000000" },
    ],
  },
];

export const projects = [
  {
    id: 7,
    title: "PumpRadar",
    description:
      "AI-powered platform that tracks trending Solana memecoins in real time, scores them on safety and momentum, and signals when to buy, hold, and sell.",
    caseStudy:
      "Built with Next.js for SEO and fast server-side rendering. Chose MongoDB for flexible token schema that changes frequently. Integrated DexScreener API for real-time price data and Telegram Bot API for instant alerts, reducing user response time to market moves from minutes to seconds.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Telegram Bot API", "DexScreener API", "Google OAuth"],
    image: PumpRadar,
    demoLink: "https://pumparadar.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Memecoin_project-",
  },
  {
    id: 0,
    title: "CommPrep",
    description:
      "Communication training app for practicing interviews, meetings, and presentations with session-saving and personalized feedback.",
    caseStudy:
      "Used JWT authentication with refresh tokens for secure session persistence. Chose MongoDB to store flexible question flows and user progress. Implemented a static question engine rather than AI to keep costs zero while still delivering value.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    image: CommPrep,
    demoLink: "https://commprep-frontend.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/commprep-frontend",
  },
  {
    id: 1,
    title: "Event Management System",
    description:
      "Full-stack event platform with ticket sales, Paystack payment integration, user auth, and admin dashboard.",
    caseStudy:
      "Integrated Paystack for payment processing in the Nigerian market where Stripe isn't available. Used Context API over Redux to keep the bundle lean for a CRUD-heavy app. Built role-based admin panel for event organizers to manage attendees and revenue.",
    tags: ["React", "MongoDB", "Express", "Node.js", "Paystack", "Context API"],
    image: Event,
    demoLink: "https://event-management-system-frontend.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Event-Management-System-frontend",
  },
  {
    id: 3,
    title: "Reid E-Commerce",
    description:
      "Fully responsive e-commerce site with product listings, cart, user auth, and Paystack payment integration.",
    caseStudy:
      "Built with vanilla JavaScript and Bootstrap to demonstrate strong fundamentals without framework dependency. Integrated Firebase for authentication and real-time database, and Paystack for payment processing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase", "Paystack"],
    image: Reid,
    demoLink: "https://reid-eight.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Reid",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description:
      "Dating app with private messaging, user matching, and email verification powered by real-time WebSockets.",
    caseStudy:
      "Chose Socket.io over raw WebSockets for automatic reconnection and fallback support. Used Redux for global chat state management across multiple conversations. Added TypeScript to catch message schema errors at compile time rather than runtime.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redux", "TypeScript"],
    image: Chat,
    demoLink: "https://chat-app-h1l6.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Chat-App",
  },
  {
    id: 4,
    title: "QuickPay VTU Platform",
    description:
      "Virtual Top-Up platform for mobile recharge, data bundles, and utility payments with full transaction history.",
    caseStudy:
      "Built a fintech-grade transaction system with idempotent API calls to prevent double charges. Used MongoDB for fast write-heavy transaction logs. Implemented real-time balance updates and receipt generation for a seamless payment experience.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: Quick,
    demoLink: "https://quick-pay-liard.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/QuickPay",
  },
];

export const experiences = [
  {
    company: "Kept House Estate Sales",
    role: "Software Developer",
    type: "Contract · Remote",
    period: "Sep 2025 - Present",
    description:
      "Building and maintaining a full-stack estate sales platform used by real customers",
    highlights: [
      "Built a full e-commerce marketplace with Stripe payments, shopping cart, and order management",
      "Developed role-based dashboards for agents, clients, and vendors with real-time project tracking",
      "Integrated AI-powered item cataloging and pricing for estate inventory",
      "Optimized platform performance, achieving 92/100 Google PageSpeed score through image compression, code splitting, and database indexing",
      "Implemented security hardening with CSP headers, HSTS, and OWASP best practices",
      "Deployed and manage production infrastructure on Vercel (frontend) and Render (backend)",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    company: "Obai",
    role: "Full Stack Engineer",
    type: "Full-time · Remote",
    period: "Sep 2024 - Present",
    description:
      "Contributing as a Full Stack Engineer at Obai, a U.S.-based company, primarily leading frontend development while collaborating with backend engineers to deliver scalable, production-ready web applications.",
    highlights: [
      "Led development of responsive, high-performance UIs using React and modern frontend best practices",
      "Integrated RESTful APIs and ensured seamless frontend-backend communication",
      "Implemented secure authentication flows and role-based access control (RBAC)",
      "Optimized application performance, responsiveness, and overall user experience",
    ],
    technologies: ["React", "JavaScript", "TailwindCSS", "REST APIs", "JWT", "Node.js", "PostgreSQL"],
  },
  {
    company: "Upwork",
    role: "Freelance Full Stack Developer",
    type: "Self-employed · Remote",
    period: "Jul 2024 - Present",
    description:
      "Freelance developer building scalable, modern web applications for clients across different industries. Specializing in high-performance frontend interfaces and robust backend systems.",
    highlights: [
      "Built responsive UIs using React, Next.js, and Tailwind CSS",
      "Developed backend services with Node.js, Express, and RESTful architecture",
      "Integrated PostgreSQL and MongoDB for structured and flexible data management",
      "Translated client requirements into scalable technical solutions",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"],
  },
];

export const education = [
  {
    institution: "SQI College of ICT",
    degree: "Certificate, Full Stack Web Development",
    period: "Aug 2023 - Jan 2024",
    grade: "A1",
    description:
      "Completed an intensive Full Stack Development program with hands-on experience in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Participated in class competitions and led several projects presented to peers and instructors.",
  },
  {
    institution: "Adejare International School",
    degree: "Science",
    period: "Sep 2018 - Sep 2023",
    grade: "A1",
    description:
      "Excelled academically and held the position of Senior Boy. Cultivated a deep interest in coding and computer science, independently exploring programming languages and technologies.",
  },
];

export const achievements = [
  {
    title: "2nd Place - Wema Bank Hackaholics 6.0",
    description:
      "Built IllumiTrust, a digital verification system designed to combat identity fraud. Competed against 100+ teams.",
  },
];

