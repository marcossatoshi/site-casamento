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
            <Link href="/" className="text-xl font-light tracking-widest text-oliva uppercase">
              J & M
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
