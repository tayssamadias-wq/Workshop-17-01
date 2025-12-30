
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const PainCard: React.FC<CardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-stone-800">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "A Gestora do Lar",
      description: "Se você não lembrar, ninguém faz. Você decide o que comer, quando pagar as contas e até onde está a toalha dele. Você se sente exausta mentalmente."
    },
    {
      title: "A Solidão a Dois",
      description: "Vocês estão juntos na mesma casa, mas a conexão profunda sumiu. As conversas são apenas logísticas ('comprou pão?', 'pagou a luz?')."
    },
    {
      title: "A Perda da Doçura",
      description: "Para dar conta de tudo, você precisou ficar 'dura', rígida e controladora. Você sente saudade de ser leve, mas tem medo de que, se soltar, tudo desmorone."
    },
    {
      title: "Libido no Automático",
      description: "O sexo virou mais uma tarefa na sua lista de afazeres interminável, ou pior, algo que você evita porque está cansada demais para ser 'mulher'."
    }
  ];

  return (
    <section className="bg-stone-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-900 uppercase tracking-wide">
            VOCÊ SE RECONHECE EM ALGUMA DESSAS SITUAÇÕES?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {pains.map((pain, index) => (
              <PainCard key={index} title={pain.title} description={pain.description} />
            ))}
          </div>

          <div className="bg-red-50 border-l-4 border-red-800 p-8 rounded-r-2xl">
            <p className="text-lg md:text-xl text-stone-800 leading-relaxed">
              Se você marcou <span className="font-bold">"sim"</span> para alguma dessas, o problema não é o seu marido, nem a falta de amor. 
              <br/><br/>
              O problema é que você está ocupando o <span className="text-red-800 font-bold">LUGAR ERRADO</span> na dinâmica do relacionamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
