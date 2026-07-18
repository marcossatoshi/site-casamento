import MapWrapper from '@/components/MapWrapper';
import Image from 'next/image';

export default function CerimoniaPage() {
  return (
    <section className="py-16 px-6 bg-transparent min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-light text-oliva mb-12 text-center drop-shadow-sm">Cerimônia e Festa</h1>

        {/* Card Único */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-bege overflow-hidden">

          {/* Sessão Superior: Foto + Textos */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">

            {/* Foto do Local */}
            <div className="w-full md:w-5/12 shrink-0 relative aspect-square rounded-xl overflow-hidden shadow-sm border border-bege/50">
              <Image
                src="/restaurante-praca-sao-lourenco.webp"
                alt="Restaurante Praça São Lourenço"
                fill
                className="object-cover"
              />
            </div>

            {/* Informações */}
            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left flex flex-col justify-center pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-grafite">Restaurante Praça São Lourenço</h2>

              <p className="text-lg md:text-xl tracking-widest text-oliva">
                03 de Outubro de 2026 às 19:00
              </p>

              <div className="text-lg md:text-xl text-grafite/80 leading-relaxed font-light space-y-4">
                <p>Escolhemos um lugar muito especial para celebrarmos este momento inesquecível de nossas vidas.</p>
                <p>A cerimônia e a festa acontecerão no mesmo local para maior conforto de todos.</p>
              </div>

              <div className="pt-4 space-y-2 border-t border-bege/30">
                <p className="font-bold text-oliva md:text-xl">Traje:</p>
                <p className="text-grafite md:text-xl font-light">Esporte fino</p>
              </div>

              <div className="pt-2 space-y-2">
                <p className="font-bold text-oliva md:text-xl">Endereço:</p>
                <p className="text-grafite md:text-xl font-light">
                  Rua Casa do Ator, 608<br />
                  Vila Olímpia, São Paulo - SP
                </p>
              </div>
            </div>
          </div>

          {/* Sessão Inferior: Mapa */}
          <div className="w-full h-[400px] md:h-[500px] border-t border-bege relative z-0">
            <MapWrapper />
          </div>

          <div className="pt-6">
            <a
              href="https://maps.google.com/?q=Restaurante+Praca+Sao+Lourenco"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-oliva text-white hover:bg-oliva/90 px-8 py-4 rounded-full uppercase text-sm md:text-base tracking-widest font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
