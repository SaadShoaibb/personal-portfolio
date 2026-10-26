'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useEra } from '@/lib/era-context';
import type { Project } from '@/lib/projects';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302-2.7-2.7 2.7-2.7zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

function ActionOverlay({
  title,
  showWeb,
  link,
  linkLabel,
  extraLinks,
  hasLabeledLinks,
  ios,
  android,
  github,
  isRevealed,
}: {
  title: string;
  showWeb: boolean;
  link?: string;
  linkLabel?: string;
  extraLinks?: { label: string; href: string }[];
  hasLabeledLinks: boolean;
  ios?: string;
  android?: string;
  github?: string;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-2 flex-wrap px-4 py-6 transition-opacity duration-400 z-30 ${
        isRevealed
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {hasLabeledLinks ? (
        <>
          {showWeb && link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white text-black rounded-full text-[9px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform"
            >
              {linkLabel ?? 'Visit Site'}
            </a>
          )}
          {extraLinks?.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-zinc-800 text-white rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border border-zinc-600 hover:border-white hover:scale-105 transition-all"
            >
              {item.label}
            </a>
          ))}
        </>
      ) : (
        showWeb &&
        link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
            aria-label={`Open ${title}`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )
      )}
      {ios && (
        <a href={ios} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform border border-zinc-700" aria-label={`${title} on the App Store`}>
          <AppleIcon className="w-5 h-5" />
        </a>
      )}
      {android && (
        <a href={android} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform border border-zinc-700" aria-label={`${title} on Google Play`}>
          <PlayStoreIcon className="w-5 h-5" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform border border-zinc-700" aria-label={`${title} on GitHub`}>
          <GithubIcon className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  tags,
  link,
  linkLabel,
  extraLinks,
  github,
  ios,
  android,
  image,
}: Project) {
  const { era } = useEra();
  const [peeked, setPeeked] = useState(false);
  const [loadImage, setLoadImage] = useState(false);
  const isVintage = era === '1950s';

  const showWeb = Boolean(link && link !== ios && link !== android);
  const hasLabeledLinks = Boolean(linkLabel || (extraLinks && extraLinks.length > 0));
  const hasActions = Boolean(showWeb || github || ios || android || hasLabeledLinks);
  const isRevealed = peeked;

  const armImage = () => {
    if (image) setLoadImage(true);
  };

  const watermark = title.split(' ')[0].replace(/([a-z])([A-Z])/g, '$1\n$2');

  const screenContent = (
    <>
      <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.03]">
        <span className="text-zinc-700 font-black text-3xl sm:text-5xl uppercase tracking-tighter italic opacity-25 group-hover:opacity-40 transition-opacity text-center leading-[0.9] whitespace-pre-line">
          {watermark}
        </span>
      </div>

      {image && loadImage && (
        <div
          className={`absolute inset-0 bg-zinc-950 flex items-center justify-center p-3 sm:p-4 transition-opacity duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <img
            src={image}
            alt={title}
            decoding="async"
            className={`w-full h-full object-contain ${isVintage ? 'grayscale' : 'grayscale-0'}`}
          />
        </div>
      )}

      {hasActions && (
        <ActionOverlay
          title={title}
          showWeb={showWeb}
          link={link}
          linkLabel={linkLabel}
          extraLinks={extraLinks}
          hasLabeledLinks={hasLabeledLinks}
          ios={ios}
          android={android}
          github={github}
          isRevealed={isRevealed}
        />
      )}
    </>
  );

  return (
    <article
      className="group [content-visibility:auto] [contain-intrinsic-size:auto_560px]"
      onMouseEnter={armImage}
      onFocusCapture={armImage}
      onTouchStart={armImage}
    >
      {/* ─── 1950s: CRT cabinet ─── */}
      {isVintage ? (
        <div className="mb-8">
          {/* Antennas */}
          <div className="relative h-7 mb-0.5 flex justify-center pointer-events-none" aria-hidden>
            <div className="absolute bottom-0 left-1/2 -translate-x-[16px] w-px h-7 bg-zinc-500 origin-bottom -rotate-[22deg]" />
            <div className="absolute bottom-0 left-1/2 translate-x-[16px] w-px h-7 bg-zinc-500 origin-bottom rotate-[22deg]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-600 border border-zinc-400" />
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              armImage();
              setPeeked((v) => !v);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                armImage();
                setPeeked((v) => !v);
              }
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setPeeked(false);
            }}
            aria-label={`${title} — hover or tap to preview`}
            className="relative flex gap-2 p-2 sm:p-2.5 rounded-[1.75rem] bg-zinc-800 border border-zinc-700 shadow-[0_10px_0_#09090b,0_14px_28px_rgba(0,0,0,0.55)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white/30 group-hover:border-zinc-500 transition-colors duration-300"
          >
            {/* CRT screen — soft curve, labels kept in the safe center zone */}
            <div className="relative flex-1 min-w-0 aspect-[16/10] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-black border-[3px] border-zinc-950 shadow-[inset_0_0_36px_rgba(0,0,0,0.9)]">
              {screenContent}

              <div
                className={`absolute inset-0 pointer-events-none opacity-[0.07] group-hover:opacity-0 transition-opacity z-10 ${isRevealed ? 'opacity-0' : ''}`}
                style={{
                  background:
                    'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.85) 2px, rgba(0,0,0,0.85) 4px)',
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)' }}
              />

              {/* Centered so curved edges never clip on phones / laptops */}
              <div
                className={`absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity max-w-[85%] ${
                  isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 border border-white/10">
                  <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-zinc-200 animate-[signalBlink_1.6s_ease-in-out_infinite]" />
                  <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-300 whitespace-nowrap">
                    On air
                  </span>
                </div>
              </div>

              <div
                className={`absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 w-[88%] max-w-xs text-center pointer-events-none transition-opacity ${
                  isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
              >
                <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-zinc-500">
                  <span className="sm:hidden">Hover for broadcast</span>
                  <span className="hidden sm:inline">—— hover for broadcast ——</span>
                </p>
              </div>
            </div>

            {/* Side dials — compact so the screen stays dominant */}
            <div className="hidden sm:flex w-8 flex-col items-center justify-center gap-3 shrink-0" aria-hidden>
              <div className="w-7 h-7 rounded-full bg-zinc-950 border border-zinc-500 flex items-center justify-center shadow-inner">
                <div className="w-4 h-px bg-zinc-400 rotate-45" />
              </div>
              <div className="w-7 h-7 rounded-full bg-zinc-950 border border-zinc-500 flex items-center justify-center shadow-inner">
                <div className="w-4 h-px bg-zinc-400 -rotate-12" />
              </div>
              <div className="flex flex-col gap-1 mt-0.5">
                <div className="w-5 h-0.5 rounded-full bg-zinc-600" />
                <div className="w-5 h-0.5 rounded-full bg-zinc-600" />
                <div className="w-5 h-0.5 rounded-full bg-zinc-600" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ─── Modern: slim LED panel ─── */
        <div className="mb-8 flex flex-col items-center">
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              armImage();
              setPeeked((v) => !v);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                armImage();
                setPeeked((v) => !v);
              }
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setPeeked(false);
            }}
            aria-label={`${title} — hover or tap to preview`}
            className={`relative w-full aspect-[16/10] rounded-lg p-[3px] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 shadow-[0_0_0_1px_rgba(129,140,248,0.25),0_12px_40px_rgba(0,0,0,0.45)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-indigo-400/50 transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(129,140,248,0.55),0_16px_48px_rgba(79,70,229,0.2)] ${
              isRevealed ? 'shadow-[0_0_0_1px_rgba(129,140,248,0.55)]' : ''
            }`}
          >
            {/* Thin LED bezel + screen */}
            <div className="relative w-full h-full overflow-hidden rounded-md bg-zinc-950 border border-white/5">
              {screenContent}

              {/* Power LED */}
              <div
                className={`absolute bottom-2.5 right-3 z-20 flex items-center gap-2 pointer-events-none transition-opacity ${
                  isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
              </div>

              {/* Modern CTA — high contrast so it actually reads */}
              <div
                className={`absolute inset-x-0 bottom-0 z-20 pointer-events-none transition-opacity duration-300 ${
                  isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
              >
                <div className="mx-3 mb-3 flex items-center justify-between gap-3 rounded-md border border-indigo-400/25 bg-indigo-950/80 px-3 py-2 backdrop-blur-sm">
                  <span className="text-[9px] uppercase tracking-[0.28em] font-semibold text-indigo-100">
                    Hover to reveal
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-indigo-300/80 hidden sm:inline">
                    Preview · Links
                  </span>
                </div>
              </div>

              {/* Soft top reflection like glass LED */}
              <div
                className="absolute inset-x-0 top-0 h-1/3 pointer-events-none z-[5] opacity-30"
                style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)' }}
              />
            </div>
          </div>

          {/* LED stand */}
          <div className="flex flex-col items-center pointer-events-none" aria-hidden>
            <div className="w-16 h-2 bg-zinc-800 rounded-b-md" />
            <div className="w-28 h-1.5 bg-zinc-900 rounded-full mt-0.5 shadow-md" />
          </div>
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-3 block font-semibold">{category}</span>
          <h4 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-zinc-300 transition-colors">{title}</h4>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm font-light">{description}</p>

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
    </article>
  );
}
