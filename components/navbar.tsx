'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: "Expertise", href: "/#expertise" },
  { name: "Work", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
      {/* ─── Desktop Pill ─── */}
      <motion.nav
        animate={{
          width: scrolled ? "52%" : "72%",
          y: scrolled ? 4 : 0,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 30 }}
        style={{ minWidth: 600 }}
        className="hidden lg:flex items-center justify-between rounded-full pointer-events-auto
          px-14 py-6
          bg-zinc-950/70 backdrop-blur-2xl
          border border-white/[0.08]
          shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Logo */}
        <Link href="/" className="text-base font-black tracking-tight uppercase shrink-0">
          Saad<span className="text-zinc-600">.</span>
        </Link>

        {/* Center links */}
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

        {/* Right actions */}
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
      </motion.nav>

      {/* ─── Mobile Nav ─── */}
      <div className="lg:hidden w-full pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-950/70 backdrop-blur-2xl border border-white/[0.08]">
          <Link href="/" className="text-base font-black tracking-tight uppercase">
            Saad<span className="text-zinc-600">.</span>
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 mx-1 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/[0.08] px-6 py-6 flex flex-col gap-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
