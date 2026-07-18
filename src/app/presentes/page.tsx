import Gifts from '@/components/Gifts';
import { getGifts } from '@/lib/actions';

export const revalidate = 0; // Disable cache so sold out items show immediately

export default async function PresentesPage() {
  const gifts = await getGifts();

  return (
    <section className="py-24 px-6 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Lista de Presentes</h1>
        <div className="text-lg text-grafite/80 mb-16 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>Depois de tantos anos construindo nossa vida juntos, temos o privilégio de já ter um lar cheio de tudo o que precisamos.</p>
          <p>Por isso, escolhemos transformar nossa lista de presentes em experiências que tornarão nossa lua de mel em Maiorca, na Espanha, ainda mais especial.</p>
          <p>Se desejar nos presentear, cada contribuição fará parte dessa experiência com pitadas de aventura e se transformará em lembranças que levaremos para sempre.</p>
        </div>
        
        <Gifts initialGifts={gifts} />
      </div>
    </section>
  );
}
