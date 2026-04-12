'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack & Devops Engineer",
    company: "Evolisyss • Full-time",
    period: "May 2025 — Present",
    description: "Responsible for developing Web and Mobile Applications.",
    tags: ["React.js", "React Native", "DevOps", "Full Stack", "Mobile App Dev"],
  },
  {
    role: "MERN Stack Internee",
    company: "EYAI VENTURES • Internship",
    period: "Jul 2024 — Oct 2024",
    description: "Worked on-site in Karachi, Pakistan, developing robust MERN stack applications.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    role: "Freelancer",
    company: "Fiverr • Freelance",
    period: "Mar 2020 — Jul 2024",
    description: "Web developer and Web Designer. Delivered high-quality web solutions for diverse global clients.",
    tags: ["Web Development", "Web Design", "UI/UX", "Freelance"],
  },
  {
    role: "Frontend Developer",
    company: "AdMarc • Part-time",
    period: "Aug 2022 — Jan 2023",
    description: "Remotely based in the United States. Responsible for designing and front-end development of E-commerce websites.",
    tags: ["JavaScript", "Analytical Skills", "Frontend", "E-commerce"],
  },
];

import { useEra } from '@/lib/era-context';

export function ExperienceSection() {
  const { era } = useEra();

  return (
    <section className="w-full relative">
      {/* Floating Image - Right Side */}
      <div 
        className={`absolute right-[-10%] sm:right-[-5%] md:right-0 top-[5%] md:top-[20%] w-[180px] sm:w-[250px] md:w-[350px] lg:w-[450px] transition-all duration-700 pointer-events-none md:pointer-events-auto z-0 -translate-y-8 
          ${era === '1950s' 
            ? 'opacity-20 sm:opacity-30 md:opacity-40 grayscale hover:grayscale-0' 
            : 'opacity-80 md:opacity-100 grayscale-0'
          }`}
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
      >
        <img src="/saad.png" alt="Saad Shoaib" className="w-full h-auto object-contain" />
      </div>

      {/* Header */}
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

      {/* Timeline */}
      <div className="relative z-10">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800/80" />

        <div className="flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative pl-10 md:pl-24 py-10 border-b border-zinc-800/40 last:border-b-0"
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-8 top-12 -translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:border-white group-hover:bg-white/20 transition-all duration-500" />
              </div>

              {/* Period badge */}
              <span className="inline-block text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4 px-3 py-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30">
                {exp.period}
              </span>

              {/* Role & Company */}
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1 group-hover:text-white transition-colors">
                {exp.role}
              </h4>
              <p className="text-sm text-zinc-400 font-medium mb-4">
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-6 font-light">
                {exp.description}
              </p>

              {/* Tags */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
