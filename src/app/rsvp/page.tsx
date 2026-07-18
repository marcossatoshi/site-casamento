import RSVP from '@/components/RSVP';

export default function RSVPPage() {
  return (
    <section className="py-24 px-6 bg-transparent min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Confirme sua Presença</h1>
        <p className="text-lg text-grafite/80 mb-12">
          Por favor, confirme sua presença até o dia 03/09/2026.
        </p>
        
        <RSVP />
      </div>
    </section>
  );
}
