'use client';

import { useEra } from '@/lib/era-context';

const experiences = [
  {
    role: "Full Stack & DevOps Engineer",
    company: "Pixact Technologies • USA, Remote",
    period: "Mar 2026 — Present",
    description:
      "Developed and shipped cross-platform mobile apps with React Native, Expo, TypeScript, and JavaScript — production features, API integrations, auth, and device-specific functionality. Built supporting backend services and 10+ scalable REST APIs on high-throughput PostgreSQL, and owned builds, CI/CD, and cloud deployments across the product lifecycle.",
    tags: ["React Native", "Expo", "TypeScript", "PostgreSQL", "CI/CD", "DevOps"],
  },
  {
    role: "Full Stack & DevOps Engineer",
    company: "Evolisyss • USA/Canada, Remote",
    period: "Jan 2025 — Mar 2026",
    description:
      "Developed and maintained production web apps across e-commerce, booking, marketplace, and service domains with Next.js, React, Node.js, REST APIs, PostgreSQL, and cloud deployments. Architected secure auth pipelines and automated cloud workflows across 5 distinct client products with isolated production environments.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "DevOps", "Cloud"],
  },
  {
    role: "MERN Stack Developer",
    company: "EYAI Ventures • Karachi, Pakistan",
    period: "Jul 2024 — Oct 2024",
    description:
      "Engineered responsive e-commerce interfaces for ADMARC, integrating an AI-driven chatbot to automate customer support and lift engagement. Optimized production environments by resolving critical UI/UX bottlenecks and improving load times and usability.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "E-commerce"],
  },
  {
    role: "Frontend Developer",
    company: "AdMarc • Part-time, Remote",
    period: "Jan 2024 — Jun 2024",
    description:
      "Remotely based with a United States client. Designed and built front-end experiences for e-commerce websites with a focus on polished UI and conversion-minded flows.",
    tags: ["JavaScript", "Frontend", "E-commerce", "UI/UX"],
  },
];

export function ExperienceSection() {
  const { era } = useEra();

  return (
    <section className="w-full relative">
      <div
        className={`absolute right-[-10%] sm:right-[-5%] md:right-0 top-[5%] md:top-[20%] w-[180px] sm:w-[250px] md:w-[350px] lg:w-[450px] transition-all duration-700 pointer-events-none md:pointer-events-auto z-0 -translate-y-8 
          ${era === '1950s' 
            ? 'opacity-20 sm:opacity-30 md:opacity-40 grayscale hover:grayscale-0' 
            : 'opacity-80 md:opacity-100 grayscale-0'
          }`}
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
      >
        <img
          src="/saad.png"
          alt="Saad Shoaib"
          loading="lazy"
          decoding="async"
          width={450}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
        <div>
          <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-400 mb-6 font-medium">Experience</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Where I've <br /><span className="text-zinc-300 font-light">Built & Shipped.</span>
          </h3>
        </div>
        <p className="max-w-xs text-zinc-400 text-[10px] uppercase tracking-[0.2em] leading-loose md:text-right">
          Years of shipping production systems <br />
          across <span className="text-white">startups</span> and <span className="text-white">enterprise</span>.
        </p>
      </div>

      <div className="relative z-10">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800/80" />

        <div className="flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-10 md:pl-24 py-10 border-b border-zinc-800/40 last:border-b-0"
            >
              <div className="absolute left-0 md:left-8 top-12 -translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:border-white group-hover:bg-white/20 transition-all duration-500" />
              </div>

              <span className="inline-block text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4 px-3 py-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30">
                {exp.period}
              </span>

              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1 group-hover:text-white transition-colors">
                {exp.role}
              </h4>
              <p className="text-sm text-zinc-400 font-medium mb-4">
                {exp.company}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-6 font-light">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold bg-zinc-800/30 text-zinc-400 border border-zinc-700/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
