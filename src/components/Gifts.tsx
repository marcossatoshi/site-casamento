'use client';

import { useState } from 'react';
import { Ship, Utensils, Wine, Car, Sparkles, Hotel, Martini, Plane, X, Copy, Check } from 'lucide-react';

const GIFTS = [
  { id: 1, name: 'Passeio de Catamarã', price: 550, icon: Ship },
  { id: 2, name: 'Jantar Romântico', price: 800, icon: Utensils },
  { id: 3, name: 'Degustação de Vinhos', price: 450, icon: Wine },
  { id: 4, name: 'Aluguel de Carro', price: 350, icon: Car },
  { id: 5, name: 'Dia de Spa', price: 1200, icon: Sparkles },
  { id: 6, name: 'Diária de Hotel', price: 1500, icon: Hotel },
  { id: 7, name: 'Rodada de Drinks', price: 150, icon: Martini },
  { id: 8, name: 'Passagens 1/10', price: 800, icon: Plane },
];

export default function Gifts() {
  const [selectedGift, setSelectedGift] = useState<typeof GIFTS[0] | null>(null);
  const [copied, setCopied] = useState(false);

  const pixKey = "casamento@marcosjoseane.com.br";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
        {GIFTS.map((gift) => {
          const Icon = gift.icon;
          return (
            <div 
              key={gift.id} 
              onClick={() => setSelectedGift(gift)}
              className="bg-white border border-bege hover:border-salvia p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-bege/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-salvia/20 transition-colors">
                <Icon className="w-8 h-8 text-oliva" />
              </div>
              <h4 className="font-medium text-grafite mb-2">{gift.name}</h4>
              <p className="text-oliva font-bold">R$ {gift.price.toFixed(2)}</p>
              <button className="mt-4 text-sm text-salvia font-medium uppercase tracking-wider group-hover:text-oliva transition-colors">
                Presentear
              </button>
            </div>
          );
        })}
      </div>

      {selectedGift && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedGift(null)}
              className="absolute top-4 right-4 text-grafite hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-salvia/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="flex items-center justify-center gap-2 w-full bg-oliva text-white p-3 rounded font-medium hover:bg-oliva/90 transition-colors"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copiado!' : 'Copiar Chave PIX'}
              </button>
            </div>

            <p className="text-xs text-center text-grafite/60">
              Após o pagamento, não é necessário enviar comprovante. O sistema identificará automaticamente.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
