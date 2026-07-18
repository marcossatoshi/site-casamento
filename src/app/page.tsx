import { getConfirmedGuestsCount } from '@/lib/actions';
import Countdown from '@/components/Countdown';
import Image from 'next/image';

export default async function Home() {
  const confirmedGuests = await getConfirmedGuestsCount();
  const displayCount = Math.max(10, confirmedGuests);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] font-sans bg-branco text-grafite selection:bg-salvia selection:text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center text-center p-6 border-b-[16px] border-salvia overflow-hidden">
        
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-sm border border-white/50">
          <h2 className="text-xl sm:text-2xl tracking-[0.3em] uppercase text-oliva font-light">
            Vamos nos casar
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light text-grafite leading-tight drop-shadow-sm">
            Joseane Mansano <br /> & <br /> Marcos Satoshi
          </h1>
          
          <div className="pt-8 pb-4">
            <p className="text-2xl sm:text-3xl font-light text-grafite mb-2">
              03 de Outubro de 2026
            </p>
            <p className="text-xl sm:text-2xl text-oliva font-medium">
              às 19h00
            </p>
          </div>

          <div className="pt-8 border-t border-bege/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-grafite/70 mb-4 font-medium">Contagem Regressiva</p>
              <Countdown targetDate="2026-10-03T19:00:00-03:00" />
            </div>
            
            <div className="md:border-l border-bege/50 md:pl-8 flex flex-col items-center justify-center">
              <p className="text-sm uppercase tracking-widest text-grafite/70 mb-2 font-medium">Convidados Confirmados</p>
              <div className="text-5xl font-light text-oliva mb-2">
                {displayCount}
              </div>
              <p className="text-xs text-grafite/60 uppercase tracking-widest">Pessoas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
