import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-bege shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-light tracking-widest text-oliva uppercase">
              M & J
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva">
              Início
            </Link>
            <Link href="/cerimonia" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva">
              Cerimônia
            </Link>
            <Link href="/presentes" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva">
              Presentes
            </Link>
            <Link href="/rsvp" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva">
              RSVP
            </Link>
            <Link href="/mensagens" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-grafite hover:text-oliva transition-colors border-b-2 border-transparent hover:border-oliva">
              Mensagens
            </Link>
          </div>
          {/* Mobile menu button could be added here */}
        </div>
      </div>
    </nav>
  );
}
