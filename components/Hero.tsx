import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 font-semibold tracking-widest uppercase mb-6 text-sm md:text-base">
            Workshop Online e Gratuito
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-red-900">
            PARA A MULHER QUE ESTÁ CANSADA DE SER A "MÃE" DO PRÓPRIO MARIDO
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-10 italic">
            Descubra como sair do papel de sobrecarga, resgatar sua feminilidade e voltar a ser a mulher que ele admira, deseja e protege.
          </p>
          
          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl mb-12 inline-block">
            <p className="text-stone-800 font-medium md:text-lg">
              Você é uma mulher inteligente, resolve tudo no trabalho e na vida. Mas, dentro de casa, sente que está carregando o casamento nas costas?
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-stone-700 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                31 de Janeiro (Sábado)
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                09h00 (Horário de Brasília)
              </span>
            </div>

            {/* AQUI ESTÁ A MUDANÇA: Link direto para o WhatsApp */}
            <a 
              href="https://chat.whatsapp.com/KOMHnt9nSM91yRWWmqcw1S"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 hover:bg-red-900 text-white font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-xl inline-block text-center cursor-pointer"
            >
              QUERO RECUPERAR MEU LUGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
