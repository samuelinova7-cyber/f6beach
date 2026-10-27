import React from 'react';
import { Waves, Heart, Anchor, Sun, ShieldCheck, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../data/surfData';

export const ExperienceFrances: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Waves className="w-4 h-4 text-sky-400" />
              Cultura Local & Tradição
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-balance">
              Não é só uma loja. É parte da história do surf na Praia do Francês.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Entre ondas perfeitas, troca de histórias após a queda e o cheiro inconfundível de parafina fresca, a <strong>Francês Beach Surf Board</strong> nasceu para ser o ponto de encontro de quem ama o mar em Alagoas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-2 font-bold">
                  🪸
                </div>
                <h4 className="font-bold text-white text-sm">Respeito ao Arrecife</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Orientamos turistas e locais sobre as marés seguras e a preservação dos corais vivos da nossa praia.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 font-bold">
                  🤙
                </div>
                <h4 className="font-bold text-white text-sm">O Autêntico Salve Surf</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Ambiente acolhedor na Vila dos Pescadores onde todo surfista é bem-vindo para tomar um café e conferir o mar.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={createWhatsAppLink("Olá! Quero conhecer a Francês Beach Surf Board na Vila dos Pescadores!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-sky-500/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Trocar uma Ideia no WhatsApp</span>
              </a>
              <a
                href="#localizacao"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-sm text-center border border-slate-800 transition-colors"
              >
                Como Chegar na Loja
              </a>
            </div>
          </div>

          {/* Right Visual & Seal Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 text-center shadow-2xl">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-amber-400 p-1 mb-6 shadow-lg">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-4xl">
                  🏄‍♂️
                </div>
              </div>

              <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1">
                SELO DE AUTENTICIDADE
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-3">
                O AUTÊNTICO SALVE SURF DA PRAIA DO FRANCÊS
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Fundado no coração da Vila dos Pescadores, oferecendo suporte técnico, aulas personalizadas e o verdadeiro espírito alagoano de surf.
              </p>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono">
                📍 Av. dos Arrecifes, 45 · Praia do Francês, AL
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
