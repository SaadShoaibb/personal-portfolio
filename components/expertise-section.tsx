import { Code2, Server, Database, Globe, Cpu, ShieldCheck } from 'lucide-react';

const skills = [
  {
    title: "Fullstack Engineering",
    description: "Building scalable web applications with Next.js, React, and Node.js.",
    icon: <Code2 className="w-6 h-6" />,
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"]
  },
  {
    title: "DevOps & Infrastructure",
    description: "Cloud-native solutions and automated deployment pipelines.",
    icon: <Server className="w-6 h-6" />,
    tags: ["Docker", "Kubernetes", "AWS", "GitHub Actions"]
  },
  {
    title: "Backend Systems",
    description: "High-performance APIs and distributed system architecture.",
    icon: <Database className="w-6 h-6" />,
    tags: ["PostgreSQL", "Redis", "gRPC", "Go"]
  },
  {
    title: "Security & Reliability",
    description: "Ensuring uptime and security across the entire stack.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tags: ["OAuth", "SAML", "Prometheus", "Sentry"]
  }
];

export function ExpertiseSection() {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
        <div className="max-w-lg">
          <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-400 mb-6 font-medium">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Architecting the <br /><span className="text-zinc-300 font-light">Modern Web.</span>
          </h3>
        </div>
        <p className="max-w-xs text-zinc-400 text-[10px] uppercase tracking-[0.2em] leading-loose md:text-right">
          Specializing in end-to-end development, from pixel-perfect interfaces to robust automated infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-500/50 transition-all duration-700"
          >
            <div className="mb-6 inline-flex p-3 rounded-xl bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700/50 transition-all duration-500">
              {skill.icon}
            </div>
            <h4 className="text-lg font-bold mb-3 tracking-tight">{skill.title}</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
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
    </section>
  );
}
