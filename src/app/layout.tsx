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
        <footer className="bg-oliva text-branco py-12 text-center mt-auto z-10">
          <p className="text-lg font-light tracking-widest uppercase mb-4">Joseane & Marcos</p>
          <p className="text-sm opacity-60">03 de Outubro de 2026 • São Paulo, SP</p>
        </footer>
      </body>
    </html>
  );
}
