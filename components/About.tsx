
import React from 'react';

const About: React.FC = () => {
  // New profile image URL provided by the user
  const profileImageUrl = "https://i.ibb.co/QvjqfBzk/Design-sem-nome-9.png";

  return (
    <section className="bg-stone-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-amber-200 rounded-2xl z-0"></div>
            <img 
              src={profileImageUrl} 
              alt="Tayssa Machado" 
              className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-900/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-4">QUEM IRÁ TE GUIAR?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-red-900 mb-8">Tayssa Machado</h3>
            
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Mentora de Mulheres e Especialista em Feminilidade e Psicodinâmica. Diferente das dicas rasas de internet, Tayssa une a profundidade da psicologia com uma visão prática e moderna.
              </p>
              <p>
                Ela ajuda mulheres a pararem de falhar na sua vida amorosa e construir um legado no seu casamento.
              </p>
              <p className="italic font-medium text-stone-900">
                "Sua missão é clara: te ensinar a construir um relacionamento onde você não precise anular sua essência para ser amada."
              </p>
            </div>

            <div className="mt-10 flex gap-4">
                <div className="px-6 py-3 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">+5.000 Alunas</div>
                <div className="px-6 py-3 bg-red-100 text-red-800 rounded-full text-sm font-bold">Especialista em Relacionamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
