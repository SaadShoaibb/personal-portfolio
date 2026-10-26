import { SplineHero } from "@/components/spline-hero";
import { ExpertiseSection } from "@/components/expertise-section";
import { ExperienceSection } from "@/components/experience-section";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/lib/projects";
import Link from "next/link";
import "./outline-text.css";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      <SplineHero />

      {/* Expertise */}
      <section id="expertise" className="max-w-5xl mx-auto px-10 md:px-20 pt-16 md:pt-44 pb-16 md:pb-36">
        <ExpertiseSection />
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-10 md:px-20 py-20 md:py-36 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-400 mb-6 font-medium">Selected Work</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Solutions <span className="text-zinc-500">&amp; Proofs.</span>
            </h3>
          </div>
          <p className="max-w-xs text-zinc-400 text-[10px] uppercase tracking-[0.2em] leading-loose md:text-right">
            Exploring the intersection of <br />
            <span className="text-white">performance</span> and <span className="text-white">reliability</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-zinc-900 overflow-hidden rounded-full border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[200%] block">
              View All Works
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.3em] font-bold text-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20">
              View All Works
            </span>
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-10 md:px-20 py-20 md:py-36 border-t border-white/5">
        <ExperienceSection />
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-10 md:px-20 py-24 md:py-44 border-t border-white/5 text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-none">
            Start a <br /><span className="outline-text">Conversation</span>
          </h2>
          <div className="group relative">
            <a
              href="mailto:binshoaibsaad@gmail.com"
              className="text-lg md:text-2xl font-light tracking-tight hover:text-zinc-400 transition-colors"
            >
              binshoaibsaad@gmail.com
            </a>
            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        <ContactForm />
      </section>

      <footer className="max-w-5xl mx-auto px-10 md:px-20 py-14 border-t border-white/5">
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
