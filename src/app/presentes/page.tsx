import Gifts from '@/components/Gifts';
import { getGifts } from '@/lib/actions';

export const revalidate = 0; // Disable cache so sold out items show immediately

export default async function PresentesPage() {
  const gifts = await getGifts();

  return (
    <section className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Lista de Presentes</h1>
        <p className="text-lg text-grafite/80 mb-16 max-w-2xl mx-auto">
          O maior presente é a sua presença! Mas se desejar nos ajudar com a nossa lua de mel, 
          preparamos algumas opções simbólicas de cotas abaixo.
        </p>
        
        <Gifts initialGifts={gifts} />
      </div>
    </section>
  );
}
