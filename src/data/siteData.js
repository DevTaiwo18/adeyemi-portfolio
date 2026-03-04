import Reid from "../assets/reid.webp";
import Event from "../assets/event.webp";
import Acess from "../assets/acesss.webp";
import Chat from "../assets/chat.webp";
import Quick from "../assets/quick.webp";
import Travel from "../assets/travel.webp";
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
    category: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "TailwindCSS", color: "#38B2AC" },
      { name: "Redux", color: "#764ABC" },
      { name: "HTML/CSS", color: "#E34F26" },
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
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Testing", color: "#C21325" },
    ],
  },
];

export const projects = [
  {
    id: 7,
    title: "PumpRadar",
    description:
      "AI-powered platform that tracks trending Solana memecoins in real time, scores them on safety and momentum, and signals when to buy, hold, and sell. Features Telegram alerts, SOL calculator, holdings tracker with P&L, and trade history.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Telegram Bot API", "DexScreener API", "Google OAuth"],
    image: PumpRadar,
    demoLink: "https://pumparadar.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Memecoin_project-",
  },
  {
    id: 0,
    title: "CommPrep",
    description:
      "Communication training app for interview, meeting, and presentation practice. Features user auth, session-saving, and personalized feedback.",
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
    tags: ["React", "MongoDB", "Express", "Node.js", "Paystack", "Context API"],
    image: Event,
    demoLink: "https://event-management-system-frontend.vercel.app/",
    codeLink:
      "https://github.com/DevTaiwo18/Event-Management-System-frontend",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description:
      "Dating app with private messaging, user matching, and email verification. Built with real-time Socket.io and TypeScript.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redux", "TypeScript"],
    image: Chat,
    demoLink: "https://chat-app-h1l6.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Chat-App",
  },
  {
    id: 3,
    title: "Reid E-Commerce",
    description:
      "Fully responsive e-commerce site with product listings, cart, user auth, and Paystack payment integration.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase", "Paystack"],
    image: Reid,
    demoLink: "https://reid-eight.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Reid",
  },
  {
    id: 4,
    title: "QuickPay VTU Platform",
    description:
      "Virtual Top-Up platform for mobile recharge, data bundles, and utility payments with transaction history.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: Quick,
    demoLink: "https://quick-pay-liard.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/QuickPay",
  },
  {
    id: 5,
    title: "Travefy Travel Agency",
    description:
      "Modern travel agency template with booking features, destination showcases, and responsive design.",
    tags: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap"],
    image: Travel,
    demoLink: "https://travefy.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Travefy",
  },
  {
    id: 6,
    title: "Access Bank Clone",
    description:
      "Pixel-perfect recreation of the Access Bank website focusing on responsive design and accessibility.",
    tags: ["HTML", "CSS", "SCSS", "JavaScript", "Bootstrap"],
    image: Acess,
    demoLink: "https://access-project-beta.vercel.app/",
    codeLink: "https://github.com/DevTaiwo18/Access-project",
  },
];

export const experiences = [
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
    title: "2nd Place — Wema Bank Hackaholics 6.0",
    description:
      "Built IllumiTrust, a digital verification system designed to combat identity fraud. Competed against 100+ teams.",
  },
];
