import Messages from '@/components/Messages';
import { getMessages } from '@/lib/actions';

export default async function MensagensPage() {
  const initialMessages = await getMessages();

  return (
    <section className="py-24 px-6 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Mural de Mensagens</h1>
        <p className="text-lg text-grafite/80 mb-12">
          Deixe um recadinho carinhoso para nós! Leremos todos com muito amor.
        </p>
        
        <Messages initialMessages={initialMessages} />
      </div>
    </section>
  );
}
