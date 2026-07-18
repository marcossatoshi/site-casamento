import Messages from '@/components/Messages';
import { getMessages } from '@/lib/actions';

export default async function MensagensPage() {
  const initialMessages = await getMessages();

  return (
    <section className="py-24 px-6 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Mural de Mensagens</h1>
        <div className="text-lg text-grafite/80 mb-12 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>Algumas palavras têm o poder de nos acompanhar por toda a vida.</p>
          <p>Se quiser, deixe uma mensagem para nós. Ficaremos muito felizes em guardar esse carinho e revisitar essas lembranças sempre que quisermos reviver um pouquinho desse dia tão especial.</p>
        </div>
        
        <Messages initialMessages={initialMessages} />
        <p className="text-xl font-medium text-oliva mt-16 pb-12">
          Obrigado por fazer parte da nossa história!
        </p>
      </div>
    </section>
  );
}
