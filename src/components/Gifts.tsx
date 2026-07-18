'use client';

import { useState, useTransition } from 'react';
import { X, Copy, Check, Gift as GiftIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { purchaseGift } from '@/lib/actions';

type Gift = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string | null;
  is_sold_out: boolean;
};

export default function Gifts({ initialGifts }: { initialGifts: Gift[] }) {
  const [gifts, setGifts] = useState<Gift[]>(initialGifts || []);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const pixKey = "casamento@marcosjoseane.com.br"; // Chave PIX

  // Organizar as categorias na ordem correta
  const CATEGORY_ORDER = [
    'Até R$ 300 (Pequenos Mimos e Passeios Culturais)',
    'De R$ 301 a R$ 1.500 (Experiências e Passeios)',
    'De R$ 1.501 a R$ 5.000 (Inesquecíveis)',
    'De R$ 5.001 a R$ 20.000 (Cotas Master e Luxo)'
  ];

  const groupedGifts = CATEGORY_ORDER.map(cat => ({
    category: cat,
    items: gifts.filter(g => g.category === cat)
  })).filter(group => group.items.length > 0);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePurchase = () => {
    if (!selectedGift) return;
    
    startTransition(async () => {
      const result = await purchaseGift(selectedGift.id);
      if (result.success) {
        // Atualiza a lista localmente para refletir o status esgotado
        setGifts(prev => prev.map(g => g.id === selectedGift.id ? { ...g, is_sold_out: true } : g));
        setSelectedGift(null);
      } else {
        alert("Ocorreu um erro ao processar. Tente novamente.");
      }
    });
  };

  if (!gifts || gifts.length === 0) {
    return (
      <div className="w-full text-center py-12 text-grafite/60">
        Nenhum presente encontrado. (Você já cadastrou eles no Supabase?)
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-16">
      {groupedGifts.map((categoryGroup, index) => (
        <div key={index} className="text-left">
          <h3 className="text-2xl font-light text-oliva mb-8 border-b border-bege pb-2">{categoryGroup.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryGroup.items.map((gift) => (
              <div
                key={gift.id}
                onClick={() => !gift.is_sold_out && setSelectedGift(gift)}
                className={`bg-white border p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-all ${
                  gift.is_sold_out 
                    ? 'border-gray-200 opacity-60 grayscale cursor-not-allowed' 
                    : 'border-bege hover:border-salvia hover:shadow-md cursor-pointer group'
                }`}
              >
                <div className="w-20 h-20 bg-bege/30 rounded-full flex items-center justify-center mb-4 overflow-hidden shrink-0 relative">
                  {gift.image ? (
                    <Image src={gift.image} alt={gift.name} fill className="object-cover" />
                  ) : (
                    <GiftIcon className={`w-8 h-8 ${gift.is_sold_out ? 'text-gray-400' : 'text-oliva group-hover:scale-110 transition-transform'}`} />
                  )}
                </div>
                <h4 className={`font-medium mb-2 flex-grow ${gift.is_sold_out ? 'text-gray-500 line-through' : 'text-grafite'}`}>
                  {gift.name}
                </h4>
                <p className={`font-bold mt-auto ${gift.is_sold_out ? 'text-gray-400' : 'text-oliva'}`}>
                  R$ {gift.price.toFixed(2)}
                </p>
                <button 
                  disabled={gift.is_sold_out}
                  className={`mt-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                    gift.is_sold_out 
                      ? 'text-red-500/80 bg-red-50 px-3 py-1 rounded' 
                      : 'text-salvia group-hover:text-oliva'
                  }`}
                >
                  {gift.is_sold_out ? 'Esgotado' : 'Presentear'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedGift && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-200 shadow-2xl">
            <button
              onClick={() => setSelectedGift(null)}
              className="absolute top-4 right-4 text-grafite/60 hover:text-black transition-colors"
              disabled={isPending}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-salvia/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden relative border border-salvia/30">
                {selectedGift.image ? (
                  <Image src={selectedGift.image} alt={selectedGift.name} fill className="object-cover" />
                ) : (
                  <GiftIcon className="w-10 h-10 text-oliva" />
                )}
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
                className="flex items-center justify-center gap-2 w-full bg-oliva text-white p-3 rounded font-medium hover:bg-oliva/90 transition-colors shadow-sm mb-4"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copiado!' : 'Copiar Chave PIX'}
              </button>
            </div>
            
            <button
              onClick={handlePurchase}
              disabled={isPending}
              className="w-full bg-grafite text-white p-4 rounded uppercase tracking-widest text-sm font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Já realizei o PIX!'}
            </button>

            <p className="text-xs text-center text-grafite/60 leading-relaxed mt-4">
              Ao clicar no botão acima, esta cota será bloqueada para que outras pessoas não a escolham.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
