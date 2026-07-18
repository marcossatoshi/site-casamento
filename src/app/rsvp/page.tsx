import RSVP from '@/components/RSVP';

export default function RSVPPage() {
  return (
    <section className="py-24 px-6 bg-transparent min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-light text-oliva mb-4">Confirme sua Presença</h1>
        <p className="text-lg text-grafite/80 mb-12 max-w-2xl mx-auto leading-relaxed">Sua presença é um dos maiores presentes que poderíamos receber.</p>
        <p className="text-lg text-grafite/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Para nos ajudar a organizar cada detalhe com carinho, pedimos que confirme sua presença até <strong>03 de Setembro de 2026</strong>.
        </p>

        <RSVP />
        <p className="text-xl font-medium text-oliva mt-12">
          Estamos ansiosos para celebrar esse dia ao seu lado!
        </p>
      </div>
    </section>
  );
}
