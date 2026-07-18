import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseane & Marcos - Casamento",
  description: "Site do casamento de Joseane e Marcos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-branco text-grafite selection:bg-salvia selection:text-white relative">
        {/* Background Global */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Image
            src="/hero-bg.png"
            alt="Wedding Background"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <Navbar />
        <main className="flex-grow z-10">
          {children}
        </main>
        <footer className="bg-oliva text-branco py-12 text-center mt-auto z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 text-bege mb-6 opacity-90">
            <span className="font-serif text-3xl font-light" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.05em' }}>J</span>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-[1px] h-4 bg-bege/60"></div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-bege/80">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-[1px] h-4 bg-bege/60"></div>
            </div>
            <span className="font-serif text-3xl font-light" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.05em' }}>M</span>
          </div>
          <p className="text-base font-light tracking-[0.2em] uppercase mb-4 text-bege">Joseane & Marcos</p>
          <p className="text-sm opacity-60 text-bege">03 de Outubro de 2026 • São Paulo, SP</p>
        </footer>
      </body>
    </html>
  );
}
