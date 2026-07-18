'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/historia', label: 'Nossa História' },
    { href: '/cerimonia', label: 'Cerimônia' },
    { href: '/presentes', label: 'Presentes' },
    { href: '/rsvp', label: 'Confirmar Presença' },
    { href: '/mensagens', label: 'Mensagens' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-bege shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Aqui você vai trocar pelo componente Image com o seu logo quando tiver. Exemplo: */}
            {/* <Image src="/logo.png" alt="Logo J&M" width={50} height={50} /> */}
            <Link href="/" className="flex items-center gap-3 text-oliva hover:opacity-80 transition-opacity">
              <span className="font-serif text-4xl font-light text-grafite/90" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.05em' }}>J</span>
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[1px] h-4 bg-oliva/60"></div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-oliva/80">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="w-[1px] h-4 bg-oliva/60"></div>
              </div>
              <span className="font-serif text-4xl font-light text-grafite/90" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.05em' }}>M</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMenu}
              className="text-grafite hover:text-oliva focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-bege animate-in slide-in-from-top-2">
          <div className="pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block pl-4 pr-4 py-3 text-base font-medium text-grafite hover:text-oliva hover:bg-bege/20 border-l-4 border-transparent hover:border-oliva transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
