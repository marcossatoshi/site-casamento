import MapWrapper from '@/components/MapWrapper';

export default function CerimoniaPage() {
  return (
    <section className="py-24 px-6 bg-bege/10 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center w-full">
        <h1 className="text-4xl font-light text-oliva mb-16">Cerimônia e Festa</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-bege">
            <h2 className="text-2xl font-medium text-grafite">Restaurante Praça São Lourenço</h2>
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
          
          <div className="h-full">
            <MapWrapper />
          </div>
        </div>
      </div>
    </section>
  );
}
