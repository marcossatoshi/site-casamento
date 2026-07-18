'use client';

import { useState } from 'react';
import { 
  Coffee, IceCream, Utensils, Ticket, Landmark, Beer, Umbrella, Bike, 
  Gift, Mountain, Sunset, Train, Droplets, Car, Ship, Wine, Map, 
  Heart, ShoppingBag, Wind, Star, Palmtree, Camera, Anchor, Plane, 
  Gem, Home, X, Copy, Check 
} from 'lucide-react';

const GIFTS_DATA = [
  {
    category: 'Até R$ 300 (Pequenos Mimos e Passeios Culturais)',
    items: [
      { id: 1, name: 'Ensaimada tradicional e café em Palma', price: 50, icon: Coffee },
      { id: 2, name: 'Sorvetes artesanais em Valldemossa', price: 60, icon: IceCream },
      { id: 3, name: 'Lanche com bocadillos espanhóis', price: 80, icon: Utensils },
      { id: 4, name: 'Ingressos para o Castell de Bellver', price: 80, icon: Landmark },
      { id: 5, name: 'Café da manhã típico mallorquino', price: 100, icon: Coffee },
      { id: 6, name: 'Ingressos Palácio Real La Almudaina', price: 100, icon: Landmark },
      { id: 7, name: 'Ingressos Catedral de Palma (La Seu)', price: 120, icon: Landmark },
      { id: 8, name: 'Tapas e cervejas Mercado Santa Catalina', price: 150, icon: Beer },
      { id: 9, name: 'Guarda-sol e espreguiçadeiras em Cala des Moro', price: 150, icon: Umbrella },
      { id: 10, name: 'Aluguel de bicicletas no calçadão', price: 180, icon: Bike },
      { id: 11, name: 'Lembrancinhas locais', price: 200, icon: Gift },
      { id: 12, name: 'Explorar as Cuevas del Drach', price: 200, icon: Mountain },
      { id: 13, name: 'Drinks ao pôr do sol em Deià', price: 250, icon: Sunset },
      { id: 14, name: 'Passagens Trem Histórico de Sóller', price: 300, icon: Train },
      { id: 15, name: 'Banho relaxante em um Hammam', price: 300, icon: Droplets },
    ]
  },
  {
    category: 'De R$ 301 a R$ 1.500 (Experiências e Passeios)',
    items: [
      { id: 16, name: 'Aluguel de carro (econômico)', price: 350, icon: Car },
      { id: 17, name: 'Passeio de barco com fundo de vidro', price: 400, icon: Ship },
      { id: 18, name: 'Paella de frutos do mar em Alcúdia', price: 450, icon: Utensils },
      { id: 19, name: 'Degustação de vinhos em Binissalem', price: 500, icon: Wine },
      { id: 20, name: 'Passeio de catamarã ao pôr do sol', price: 550, icon: Ship },
      { id: 21, name: 'Tour guiado pelas vinícolas', price: 600, icon: Wine },
      { id: 22, name: 'Almoço no Restaurante Illeta', price: 700, icon: Utensils },
      { id: 23, name: 'Sessão de massagem relaxante', price: 800, icon: Heart },
      { id: 24, name: 'Jantar romântico no Port de Sóller', price: 900, icon: Heart },
      { id: 25, name: 'Cota compras nas butiques Paseo del Borne', price: 1000, icon: ShoppingBag },
      { id: 26, name: 'Aluguel carro conversível (Tramuntana)', price: 1100, icon: Car },
      { id: 27, name: 'Tour de Jetski pelas praias', price: 1200, icon: Wind },
      { id: 28, name: 'Jantar padrão Guia Michelin', price: 1300, icon: Star },
      { id: 29, name: 'Cama balinesa e drinks (Beach Club)', price: 1400, icon: Palmtree },
      { id: 30, name: 'Batismo de mergulho nas águas cristalinas', price: 1500, icon: Anchor },
    ]
  },
  {
    category: 'De R$ 1.501 a R$ 5.000 (Luxo e Inesquecíveis)',
    items: [
      { id: 31, name: 'Diária em Hotel Boutique 4 estrelas', price: 1600, icon: Home },
      { id: 32, name: 'Cota combustível para rodar a ilha', price: 1600, icon: Car },
      { id: 33, name: 'Voo de balão ao amanhecer', price: 1800, icon: Map },
      { id: 34, name: 'Aluguel de carro esportivo de luxo', price: 2000, icon: Car },
      { id: 35, name: 'Ensaio fotográfico profissional', price: 2200, icon: Camera },
      { id: 36, name: 'Menu degustação no Voro (2 Estrelas)', price: 2500, icon: Star },
      { id: 37, name: 'Tour privado de lancha', price: 3000, icon: Ship },
      { id: 38, name: 'Dia completo de SPA de luxo', price: 3500, icon: Heart },
      { id: 39, name: 'Passeio panorâmico de helicóptero', price: 4000, icon: Map },
      { id: 40, name: 'Diária no hotel Belmond La Residencia', price: 4500, icon: Home },
    ]
  },
  {
    category: 'De R$ 5.001 a R$ 20.000 (Cotas Master e Luxo)',
    items: [
      { id: 41, name: 'Joia com Pérolas de Mallorca', price: 6000, icon: Gem },
      { id: 42, name: 'Cota de enxoval e roupas de grife', price: 8000, icon: ShoppingBag },
      { id: 43, name: 'Diária Suíte Presidencial Cap Rocat', price: 9000, icon: Home },
      { id: 44, name: 'Passagens de ida (Casal)', price: 10000, icon: Plane },
      { id: 45, name: 'Iate privado com buffet (Dia)', price: 12000, icon: Ship },
      { id: 46, name: 'Pacote de 3 noites em resort 5 estrelas', price: 15000, icon: Home },
      { id: 47, name: 'Jantar chef particular na praia', price: 16000, icon: Utensils },
      { id: 48, name: 'Passagens aéreas de volta (Casal)', price: 10000, icon: Plane },
      { id: 49, name: 'Tour de iate com pernoite a bordo', price: 18000, icon: Anchor },
      { id: 50, name: 'Upgrade para Classe Executiva', price: 20000, icon: Plane },
    ]
  }
];

export default function Gifts() {
  const [selectedGift, setSelectedGift] = useState<{id: number, name: string, price: number, icon: any} | null>(null);
  const [copied, setCopied] = useState(false);

  const pixKey = "casamento@marcosjoseane.com.br";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-16">
      {GIFTS_DATA.map((categoryGroup, index) => (
        <div key={index} className="text-left">
          <h3 className="text-2xl font-light text-oliva mb-8 border-b border-bege pb-2">{categoryGroup.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryGroup.items.map((gift) => {
              const Icon = gift.icon;
              return (
                <div 
                  key={gift.id} 
                  onClick={() => setSelectedGift(gift)}
                  className="bg-white border border-bege hover:border-salvia p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-bege/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-salvia/20 transition-colors shrink-0">
                    <Icon className="w-8 h-8 text-oliva" />
                  </div>
                  <h4 className="font-medium text-grafite mb-2 flex-grow">{gift.name}</h4>
                  <p className="text-oliva font-bold mt-auto">R$ {gift.price.toFixed(2)}</p>
                  <button className="mt-4 text-sm text-salvia font-medium uppercase tracking-wider group-hover:text-oliva transition-colors">
                    Presentear
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {selectedGift && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-200 shadow-2xl">
            <button 
              onClick={() => setSelectedGift(null)}
              className="absolute top-4 right-4 text-grafite/60 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-salvia/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-salvia/30">
                <selectedGift.icon className="w-10 h-10 text-oliva" />
              </div>
              <h3 className="text-2xl font-light text-grafite mb-2">{selectedGift.name}</h3>
              <p className="text-3xl font-bold text-oliva mb-2">R$ {selectedGift.price.toFixed(2)}</p>
              <p className="text-sm text-grafite/80">Obrigado por contribuir com nossa lua de mel!</p>
            </div>

            <div className="bg-bege/20 p-4 rounded-lg text-center mb-6 border border-bege">
              <p className="text-sm font-medium text-grafite mb-2">Chave PIX (Email)</p>
              <p className="font-mono text-lg text-black mb-4 select-all">{pixKey}</p>
              
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 w-full bg-oliva text-white p-3 rounded font-medium hover:bg-oliva/90 transition-colors shadow-sm"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copiado!' : 'Copiar Chave PIX'}
              </button>
            </div>

            <p className="text-xs text-center text-grafite/60 leading-relaxed">
              Após o pagamento, não é necessário enviar comprovante. O sistema identificará automaticamente sua contribuição.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
