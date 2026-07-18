import { getMessages } from '@/lib/actions';
import Countdown from '@/components/Countdown';
import Messages from '@/components/Messages';
import RSVP from '@/components/RSVP';
import Gifts from '@/components/Gifts';
import MapWrapper from '@/components/MapWrapper';

export default async function Home() {
  const initialMessages = await getMessages();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-branco text-grafite selection:bg-salvia selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-6 border-b-[16px] border-salvia overflow-hidden">
        {/* Simple decorative background element */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-bege/30 blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-salvia/20 blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-xl sm:text-2xl tracking-[0.3em] uppercase text-oliva font-light">
            Vamos nos casar
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light text-grafite leading-tight">
            Marcos Satoshi <br /> & <br /> Joseane Mansano
          </h1>
          
          <div className="pt-8 pb-4">
            <p className="text-2xl sm:text-3xl font-light text-grafite mb-2">
              03 de Outubro de 2026
            </p>
            <p className="text-xl sm:text-2xl text-oliva">
              às 19h00
            </p>
          </div>

          <div className="pt-8 border-t border-bege">
            <p className="text-sm uppercase tracking-widest text-grafite/60 mb-4">Contagem Regressiva</p>
            <Countdown targetDate="2026-10-03T19:00:00-03:00" />
          </div>
        </div>
      </section>

      {/* CEREMONY & PARTY SECTION */}
      <section className="py-24 px-6 bg-bege/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light text-oliva mb-16">Cerimônia e Festa</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-grafite">Restaurante Praça São Lourenço</h3>
              <p className="text-lg text-grafite/80 leading-relaxed">
                Escolhemos um lugar muito especial para celebrarmos este momento inesquecível de nossas vidas.
                A cerimônia e a festa acontecerão no mesmo local para maior conforto de todos.
              </p>
              <div className="pt-4 space-y-2">
                <p className="font-bold text-oliva">Endereço:</p>
                <p className="text-grafite">Rua Casa do Ator, 608<br />Vila Olímpia, São Paulo - SP</p>
              </div>
              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=Restaurante+Praca+Sao+Lourenco" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-oliva text-oliva hover:bg-oliva hover:text-white px-6 py-3 rounded uppercase text-sm tracking-wider transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            
            <div>
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* GIFTS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-oliva mb-4">Lista de Presentes</h2>
          <p className="text-lg text-grafite/80 mb-16 max-w-2xl mx-auto">
            O maior presente é a sua presença! Mas se desejar nos ajudar com a nossa lua de mel, 
            preparamos algumas opções simbólicas de cotas abaixo.
          </p>
          
          <Gifts />
        </div>
      </section>

      {/* RSVP SECTION */}
      <section className="py-24 px-6 bg-bege/20 border-y border-bege">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-oliva mb-4">Confirme sua Presença</h2>
          <p className="text-lg text-grafite/80 mb-12">
            Por favor, confirme sua presença até o dia 03/09/2026.
          </p>
          
          <RSVP />
        </div>
      </section>

      {/* MESSAGES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-oliva mb-4">Mural de Mensagens</h2>
          <p className="text-lg text-grafite/80 mb-12">
            Deixe um recadinho carinhoso para nós! Leremos todos com muito amor.
          </p>
          
          <Messages initialMessages={initialMessages} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-oliva text-branco py-12 text-center">
        <p className="text-lg font-light tracking-widest uppercase mb-4">Marcos & Joseane</p>
        <p className="text-sm opacity-60">03 de Outubro de 2026 • São Paulo, SP</p>
      </footer>
    </div>
  );
}
