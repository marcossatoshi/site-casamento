'use client';

import { useState } from 'react';
import { submitRSVP } from '@/lib/actions';

export default function RSVP() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await submitRSVP(formData);
    if (res.success) {
      setSuccess(true);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center p-8 bg-salvia/10 rounded-lg border border-salvia">
        <h3 className="text-2xl font-light text-oliva mb-2">Obrigado!</h3>
        <p className="text-grafite">Sua presença foi confirmada com sucesso.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-sm border border-bege rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-grafite mb-1">Nome Completo</label>
          <input 
            name="name" 
            required 
            className="w-full p-3 border border-bege rounded focus:outline-none focus:border-salvia" 
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-grafite mb-1">Você irá comparecer?</label>
          <select name="attending" className="w-full p-3 border border-bege rounded focus:outline-none focus:border-salvia bg-white">
            <option value="true">Sim, confirmadíssimo!</option>
            <option value="false">Não poderei ir</option>
          </select>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-oliva text-branco p-4 rounded font-medium hover:bg-oliva/90 transition-colors disabled:opacity-70 text-lg uppercase tracking-wider mt-4"
        >
          {loading ? 'Confirmando...' : 'Confirmar Presença'}
        </button>
      </form>
    </div>
  );
}
