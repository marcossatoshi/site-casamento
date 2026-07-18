import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "Marcos & Joseane - Casamento",
  description: "Site do casamento de Marcos e Joseane",
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
      <body className="min-h-full flex flex-col font-sans bg-branco text-grafite selection:bg-salvia selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-oliva text-branco py-12 text-center mt-auto">
          <p className="text-lg font-light tracking-widest uppercase mb-4">Marcos & Joseane</p>
          <p className="text-sm opacity-60">03 de Outubro de 2026 • São Paulo, SP</p>
        </footer>
      </body>
    </html>
  );
}
