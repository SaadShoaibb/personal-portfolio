import { ProjectCard } from "@/components/project-card";
import { Navbar } from "@/components/navbar";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-44 pb-20 px-10 md:px-20 max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-semibold group cursor-pointer">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
            All <br /><span className="text-zinc-600">Projects.</span>
          </h1>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed font-light">
            A complete archive of my professional client work, agency projects, and complex personal technical experiments.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 md:px-20 pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-10 md:px-20 py-14 border-t border-white/5 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-zinc-500 text-center md:text-left">
          <p>© 2026 Saad Shoaib • Architecting Digital Experiences</p>
          <div className="flex gap-10">
            <a href="https://github.com/SaadShoaibb" target="_blank" className="hover:text-white transition-colors relative group">
              GitHub
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/saadshoaibb/" target="_blank" className="hover:text-white transition-colors relative group">
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a href="https://instagram.com/saadshoaibb" target="_blank" className="hover:text-white transition-colors relative group">
              Instagram
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
