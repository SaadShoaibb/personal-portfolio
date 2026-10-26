'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Expertise', href: '/#expertise' },
  { name: 'Work', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 100);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
      {/* Desktop — CSS width transition instead of spring physics every frame */}
      <nav
        style={{ minWidth: 600 }}
        className={`hidden lg:flex items-center justify-between rounded-full pointer-events-auto
          px-14 py-6
          bg-zinc-950/85 backdrop-blur-sm
          border border-white/[0.08]
          shadow-[0_8px_24px_rgba(0,0,0,0.5)]
          transition-[width] duration-300 ease-out
          ${scrolled ? 'w-[52%]' : 'w-[72%]'}`}
      >
        <Link href="/" className="text-base font-black tracking-tight uppercase shrink-0">
          Saad<span className="text-zinc-600">.</span>
        </Link>

        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8 shrink-0">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a>
          <a
            href="/#contact"
            className="text-[11px] uppercase tracking-[0.25em] font-black text-white hover:text-zinc-300 transition-colors"
          >
            Connect
          </a>
        </div>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden w-full pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-950/90 border border-white/[0.08]">
          <Link href="/" className="text-base font-black tracking-tight uppercase">
            Saad<span className="text-zinc-600">.</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-2 mx-1 rounded-2xl bg-zinc-950/95 border border-white/[0.08] px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="text-center text-xs uppercase tracking-widest font-black text-black bg-white py-3 rounded-xl hover:bg-zinc-200 transition-colors"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
