'use client';

import { useState } from 'react';
import { addMessage } from '@/lib/actions';

type Message = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Messages({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await addMessage(formData);
    
    if (res.success) {
      setMessages([{
        id: Date.now().toString(),
        name: formData.get('name') as string,
        message: formData.get('message') as string,
        created_at: new Date().toISOString()
      }, ...messages]);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      <div className="bg-white p-8 shadow-sm border border-bege rounded-lg">
        <h3 className="text-2xl font-light text-center text-oliva mb-6">Deixe sua mensagem</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-grafite mb-1">Seu Nome</label>
            <input 
              name="name" 
              required 
              className="w-full p-3 border border-bege rounded focus:outline-none focus:border-salvia" 
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-grafite mb-1">Mensagem</label>
            <textarea 
              name="message" 
              required 
              rows={4} 
              className="w-full p-3 border border-bege rounded focus:outline-none focus:border-salvia resize-none" 
              placeholder="Sua mensagem para os noivos"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-oliva text-branco p-3 rounded font-medium hover:bg-oliva/90 transition-colors disabled:opacity-70"
          >
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-bege/20 p-6 rounded-lg text-center">
            <p className="text-lg text-grafite italic mb-4">"{msg.message}"</p>
            <p className="text-sm font-bold text-oliva uppercase tracking-wider">{msg.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
