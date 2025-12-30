
import React from 'react';

const WhatYouWillLearn: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 uppercase">
              CHEGA DE TENTAR "AGRADAR" OU FAZER MAIS. É HORA DE FAZER DO JEITO CERTO.
            </h2>
            <p className="text-xl text-stone-600">
              Muitas mulheres acham que para salvar o casamento precisam se humilhar ou fazer "joguinhos". Eu sou totalmente contra isso.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">Sair do Arquétipo da Mãe</h3>
                <p className="text-stone-600 text-lg">Como parar de tratar seu marido como filho e ativar a postura de homem dele (sem precisar brigar ou pedir autorização).</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">O Resgate da Feminilidade Real</h3>
                <p className="text-stone-600 text-lg">Não é sobre usar vestido florido e falar baixo. É sobre recuperar sua energia receptiva para sair da exaustão e voltar a ser cuidada.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">A Dinâmica da Admiração</h3>
                <p className="text-stone-600 text-lg">O segredo para que ele volte a te olhar com desejo e não apenas como a "gerente da casa".</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
