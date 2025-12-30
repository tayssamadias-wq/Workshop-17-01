
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="final-cta" className="bg-red-900 py-24 relative overflow-hidden">
      {/* Texture background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-amber-200">
            ESTE WORKSHOP NÃO FICARÁ GRAVADO.
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-red-100 leading-relaxed">
            Se você quer começar <span className="font-bold border-b-2 border-amber-400">2026</span> com uma nova dinâmica dentro da sua casa, você precisa estar ao vivo comigo.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl mb-12 border border-white/20">
            <p className="text-lg md:text-xl mb-8">
              O acesso é gratuito, mas as vagas na sala são limitadas para garantirmos a qualidade. 
              Toque no botão abaixo e entre no <span className="text-amber-300 font-bold uppercase">Grupo VIP do WhatsApp</span> para receber o link de acesso e um presente exclusivo de boas-vindas.
            </p>

            <a 
              href="https://wa.me/yourlink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-red-950 font-black py-6 px-12 rounded-full text-xl md:text-2xl transition-all shadow-2xl animate-pulse-gold uppercase"
            >
              GARANTIR MEU LUGAR GRATUITAMENTE
            </a>
            
            <p className="mt-8 text-sm text-red-200 opacity-80">
              Seus dados estão seguros. Odeio spam tanto quanto você.
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-4">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-12 h-12 rounded-full border-2 border-red-900 object-cover" alt="User Avatar" />
                ))}
             </div>
             <p className="text-red-100 text-sm font-medium">+1.247 mulheres já confirmadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
