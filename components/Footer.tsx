
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-12 border-t border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-stone-800 font-serif text-2xl mb-4 italic">Tayssa Machado</p>
          <p className="text-stone-500 text-sm mb-6">
            Copyright © {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-stone-400 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-stone-700 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-stone-700 transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
