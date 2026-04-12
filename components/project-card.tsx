'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

import { useEra } from '@/lib/era-context';

export function ProjectCard({ title, category, description, tags, link, github, image }: ProjectCardProps) {
  const { era } = useEra();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[16/10] bg-zinc-900 rounded-3xl mb-8 overflow-hidden border border-zinc-800 group-hover:border-zinc-500 transition-all duration-500">
        {/* Placeholder Watermark */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-700">
          <span className="text-zinc-700 font-black text-4xl sm:text-5xl uppercase tracking-tighter italic opacity-20 group-hover:opacity-40 transition-opacity text-center leading-[0.9] whitespace-pre-line">
            {title.split(' ')[0].replace(/([a-z])([A-Z])/g, '$1\n$2')}
          </span>
        </div>
        
        {/* Dynamic Project Image (Reveals on Hover) */}
        {image && (
          <div className="absolute inset-0 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center p-4">
            <img 
              src={image} 
              alt={title} 
              className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ${era === '1950s' ? 'grayscale' : 'grayscale-0'}`} 
            />
          </div>
        )}
        
        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform cursor-pointer">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform border border-zinc-700 cursor-pointer">
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-3 block font-semibold">{category}</span>
          <h4 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-zinc-300 transition-colors">{title}</h4>
        </div>
      </div>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-bold px-3 py-1 border border-zinc-800/50 rounded-full bg-zinc-900/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
