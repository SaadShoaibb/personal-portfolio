'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-20 flex flex-col gap-6 text-left"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-1">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-500 rounded-xl px-5 py-4 text-sm text-zinc-300 outline-none transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-1">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-500 rounded-xl px-5 py-4 text-sm text-zinc-300 outline-none transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-1">Message</label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-500 rounded-xl px-5 py-4 text-sm text-zinc-300 outline-none transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="relative overflow-hidden w-full bg-white text-black font-semibold tracking-wide rounded-xl py-4 flex items-center justify-center transition-transform active:scale-95 disabled:opacity-70 disabled:active:scale-100"
      >
        {status === "idle" && "Send Message"}
        {status === "loading" && (
          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
        )}
        {status === "success" && "Message Sent!"}
        {status === "error" && "Error Sending"}
      </button>

      {status === "success" && (
        <p className="text-xs text-center text-green-500 mt-2 font-medium">I'll get back to you as soon as possible.</p>
      )}
    </form>
  );
}
