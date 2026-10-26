export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Primary / marketing site */
  link?: string;
  linkLabel?: string;
  /** Extra labeled CTAs (demo, staging, etc.) */
  extraLinks?: ProjectLink[];
  github?: string;
  ios?: string;
  android?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "SkillLinkGlobal SaaS",
    category: "Client • Enterprise Web App",
    description: "High-scale enterprise application for a US client. Features scalable AWS ECS/Fargate deployments, multiple environments, and CI/CD pipelines.",
    tags: ["Next.js", "NestJS", "AWS ECS", "GitHub Actions", "PostgreSQL"],
    link: "https://skilllinkglobal.io",
    linkLabel: "Coming Soon",
    extraLinks: [
      {
        label: "Product Demo / Staging",
        href: "https://skilllinkglobal.vercel.app/",
      },
    ],
    image: "/projects/skilllinkweb.webp",
  },
  {
    title: "Fuel Wave",
    category: "Client • Web Platform",
    description: "Mobile fuel delivery platform for coastal North Carolina — dockside and commercial fueling with live truck tracking, in-app ordering, and transparent pricing for boat owners and job sites.",
    tags: ["Next.js", "Node.js", "Supabase", "Prisma", "Maps"],
    link: "https://thefuelwave.com/",
    image: "/projects/fuelwaveweb.webp",
  },
  {
    title: "Averx Global Portal",
    category: "Client • Logistics Platform • MENA",
    description: "Multi-vertical logistics marketplace for Saudi Arabia — courier booking with live rate comparison, pallet freight, and on-demand 3PL warehousing with secure Moyasar payments and shipment tracking.",
    tags: ["Next.js", "Logistics", "3PL", "Payments", "KSA"],
    link: "https://portal.averxglobal.com/",
    image: "/projects/averxglobalportal.webp",
  },
  {
    title: "Fuel Wave iOS",
    category: "Client • Native iOS App",
    description: "Native iOS companion for Fuel Wave — request fuel at your marina, choose type and quantity, pick a time window, and track delivery from request to completion in real time.",
    tags: ["React Native", "iOS", "App Store", "Live Tracking"],
    link: "https://apps.apple.com/ca/app/fuel-wave/id6759412382",
    ios: "https://apps.apple.com/ca/app/fuel-wave/id6759412382",
    image: "/projects/fuelwaveios.webp",
  },
  {
    title: "Zrdaan",
    category: "Client • Sustainability Platform",
    description: "Smart recycling rewards platform — schedule collections, earn ZR Coins, and redeem as cash, donations, or products. Verified pickups that make recycling effortless and profitable.",
    tags: ["Next.js", "Rewards", "Mobile-Ready", "Sustainability"],
    link: "https://zrdaan.com",
    image: "/projects/zrdaan.webp",
  },
  {
    title: "VrtualArena - VR Platform",
    category: "Client • E-commerce & Events",
    description: "A comprehensive VR experiences site offering robust booking solutions, event management, and e-commerce for a Canadian client.",
    tags: ["Next.js", "Node.js", "MySQL", "Hostinger VPS"],
    link: "https://vrtualarena.ca/",
    image: "/projects/vrtualarena.webp",
  },
  {
    title: "Fuel Wave Android",
    category: "Client • Native Android App",
    description: "Android app for on-demand marine and commercial fuel delivery — RFQ for fleets and tanks, vendor acceptance flow, and live order status from pending to completed.",
    tags: ["React Native", "Android", "Play Store", "RFQ"],
    link: "https://play.google.com/store/apps/details?id=com.fuelwave.app&hl=en",
    android: "https://play.google.com/store/apps/details?id=com.fuelwave.app&hl=en",
    image: "/projects/fuelwaveandroid.webp",
  },
  {
    title: "Uvard Platform",
    category: "Client • Web Application",
    description: "Enterprise web application for a Canadian client. Features robust infrastructure, seamless API integrations, and scalable database architecture.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Hostinger VPS"],
    link: "https://uvard.com",
    image: "/projects/uvard.webp",
  },
  {
    title: "Averx Global",
    category: "Client • Company Site • MENA",
    description: "Corporate site for Averx — Saudi Arabia’s integrated logistics brand spanning courier marketplace, pallet shipping, warehousing, fleet, and supply-chain advisory.",
    tags: ["Next.js", "Marketing Site", "Logistics", "KSA"],
    link: "https://www.averxglobal.com/",
    image: "/projects/averxcompanysite.webp",
  },
  {
    title: "Uvard Mobile",
    category: "Client • Native App",
    description: "Companion mobile application for the Uvard ecosystem, deployed live on the Google Play Store. Provides seamless native user experiences.",
    tags: ["React Native", "API Integration", "Mobile Dev"],
    link: "https://play.google.com/store/apps/details?id=com.uvard.mobile&hl=en",
    android: "https://play.google.com/store/apps/details?id=com.uvard.mobile&hl=en",
    image: "/projects/uvard-mobile.webp",
  },
  {
    title: "Evolisyss Agency Platform",
    category: "Agency • Digital Portfolio",
    description: "Official software agency portfolio site featuring immersive 3D, complex GSAP physics, and highly interactive web animations.",
    tags: ["Next.js", "Framer Motion", "ThreeJS", "GSAP"],
    link: "https://evolisyss.com",
  },
  {
    title: "CraftyAI Suite",
    category: "Personal • Generative AI",
    description: "A multi-model generative AI platform supporting complex chat, image, video, music, and code generation algorithms.",
    tags: ["Next.js", "API Routes", "AI Models", "Generative AI"],
    link: "https://craftyai.vercel.app",
    image: "/projects/craftyai.webp",
  },
  {
    title: "CareBridge Health",
    category: "Academic • PWA Health Tech",
    description: "An AI-driven Progressive Web App for nurse/doctor booking with real-time emergency tracking, location-based matching, and an integrated AI assistant.",
    tags: ["Next.js", "NeonDB", "Prisma", "Node.js", "Tailwind CSS"],
    link: "https://carebridge-fyp.vercel.app/",
    github: "https://github.com/SaadShoaibb/carebridge-fyp",
    image: "/projects/carebridge.webp",
  },
  {
    title: "Affinity Store",
    category: "Personal • E-commerce Marketplace",
    description: "A scalable, Temu-inspired e-commerce platform building dynamic consumer experiences with modern cart state management.",
    tags: ["Next.js", "React", "E-commerce", "Deployment"],
    link: "https://affinity-ecommerce.vercel.app/",
    github: "https://github.com/SaadShoaibb/Affinity-ecommerce",
    image: "/projects/affinityecom.webp",
  },
  {
    title: "Plan-a Finance App",
    category: "Client • Native Mobile App",
    description: "Frontend architecture for a robust micro-loan mobile application for a Chinese corporation. Features highly optimized native layouts.",
    tags: ["React Native", "NativeWind", "React Native Paper"],
    github: "https://github.com/SaadShoaibb/plana-frontend",
  },
  {
    title: "Food-Delivery App",
    category: "Client • Mobile Infrastructure",
    description: "A comprehensive UAE/US-based food delivery mobile application architecture, built to support complex multi-vendor workflows and logistics routing.",
    tags: ["React Native", "Mobile App Dev", "UI/UX", "Logistics"],
    github: "https://github.com/SaadShoaibb/food-delivery-app",
  },
  {
    title: "Fatboy Chef",
    category: "Client • Web Application",
    description: "A highly interactive frontend portfolio and booking platform for a German-based Pakistani chef, featuring advanced GSAP and Framer Motion animations.",
    tags: ["Next.js", "TailwindCSS", "GSAP", "Framer Motion"],
    link: "https://fatboy-chef.vercel.app/",
    image: "/projects/fatboy.webp",
  },
  {
    title: "Galaxy's Coffee",
    category: "Personal • Web Application",
    description: "A sleek, responsive frontend interface for a modern coffee shop built for high speed and interactive UI experiences.",
    tags: ["React", "Vite", "Frontend Dev", "Netlify"],
    link: "https://galaxyscoffee.netlify.app/",
    github: "https://github.com/SaadShoaibb/CoffeeShop-FrontEnd-React",
    image: "/projects/galaxys.webp",
  },
  {
    title: "Legacy Portfolio",
    category: "Personal • Previous Site",
    description: "My earlier personal portfolio — the previous chapter of this site, still live as a timestamp of earlier work and design experiments.",
    tags: ["React", "Netlify", "Portfolio"],
    link: "https://saadshoaib.netlify.app/",
    image: "/projects/old-portfolio.webp",
  },
  {
    title: "Reception-Management",
    category: "Personal • Fullstack System",
    description: "A comprehensive reception management system designed for robust booking and appointment tracking handling multiple API endpoints.",
    tags: ["React", "Node.js", "Express", "Vite", "JSON-Server"],
    github: "https://github.com/SaadShoaibb/Hospital-Reception-Management-System",
  },
  {
    title: "LinkedIn-Clone",
    category: "Personal • Fullstack App",
    description: "A comprehensive LinkedIn-inspired social networking platform. Features a custom backend handling high-speed real-time chat infrastructure via Socket.io.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
    github: "https://github.com/SaadShoaibb/SocialMediaApp",
  },
  {
    title: "BlogApp",
    category: "Personal • Content Platform",
    description: "A complete, lightweight MERN stack blogging application supporting dynamic post creation, RESTful APIs, and robust MongoDB integrations.",
    tags: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
    github: "https://github.com/SaadShoaibb/Simple-Blog-App",
  },
];
