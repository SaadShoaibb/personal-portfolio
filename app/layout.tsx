import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { EraToggle } from "@/components/era-toggle";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Saad Shoaib | Full Stack & DevOps Engineer",
  description: "Portfolio of Saad Shoaib, a Full Stack & DevOps Engineer specializing in scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, "font-sans")}
    >
      <head>
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <EraToggle />
        </Providers>
      </body>
    </html>
  );
}
