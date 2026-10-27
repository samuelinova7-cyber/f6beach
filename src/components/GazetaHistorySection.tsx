import React, { useState } from 'react';
import { Newspaper, Calendar, ZoomIn, X, Quote, Award, Users, Anchor, Waves } from 'lucide-react';
import { OFFICIAL_MEDIA } from '../data/surfData';

export const GazetaHistorySection: React.FC = () => {
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  return (
    <section id="historia" className="py-24 bg-[#0B132B] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-4 h-4" />
            Reportagem Histórica · Gazeta de Alagoas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-balance">
            Vivendo ao sabor da maré.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 text-balance">
            Em 22 de janeiro de 2012, o mais tradicional jornal de Alagoas contou a história de como a família Neves e Moab transformaram a paixão pelo surf na Praia do Francês em um legado de vida e negócios.
          </p>
        </div>

        {/* Newspaper Feature Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12 items-stretch">
          
          {/* Left: Newspaper Image Clipping with Zoom Trigger (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-3">
                <span className="flex items-center gap-1.5 font-bold">
                  <Calendar className="w-3.5 h-3.5" /> 22 de Janeiro de 2012
                </span>
                <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-bold">
                  Caderno Em Alta
                </span>
              </div>

              {/* Clickable Clipping Container */}
              <div
                onClick={() => setIsZoomOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-amber-400/60 transition-all cursor-zoom-in group shadow-lg"
              >
                <img
                  src={OFFICIAL_MEDIA.gazetaArticleImg}
                  alt="Matéria do jornal Gazeta de Alagoas sobre Moab das Neves e o surf na Praia do Francês"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Clique para ampliar e ler a página do jornal
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                Legenda histórica: Moab das Neves ensinando uma criança na Praia do Francês, onde a escola atende alunos de todas as idades há décadas.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Registro oficial: Gazeta de Alagoas</span>
              <button
                onClick={() => setIsZoomOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ver imagem completa</span>
              </button>
            </div>
          </div>

          {/* Right: Detailed Story & Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
                  MANCHETE HISTÓRICA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  "Vivendo ao sabor da maré: Profissionais alagoanos ganham dinheiro com produtos especializados para surfistas."
                </h3>
              </div>

              {/* Main article summary based on authentic text */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A reportagem especial da <strong>Gazeta de Alagoas</strong> destacou o surfe não apenas como esporte de lazer, mas como um setor pulsante que movimenta desde a fabricação e reparo de pranchas até a formação de novos surfistas. Trinta anos após a explosão do surfe na década de 1980, a atividade consolidou-se em Alagoas como sinônimo de saúde, estilo de vida e economia costeira.
              </p>

              {/* Character: Moab das Neves */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 font-black">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      O Personagem Principal: Moab das Neves
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Ex-surfista semiprofissional e morador há mais de 30 anos na Praia do Francês, Moab dedicou sua vida a estruturar um polo do surfe em Alagoas. Ao lado da família, construiu uma base sólida com escola de surfe, locação, manutenção de equipamentos e loja especializada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Family Tradition: Dona Lindinalva Ramos das Neves */}
              <div className="bg-amber-500/10 p-5 rounded-2xl border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-300 text-sm">
                      Dona Lindinalva Ramos das Neves (Mãe e Matriarca):
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 italic leading-relaxed">
                      "A família dos Neves está profundamente ligada ao mar e ao desenvolvimento do surfe no Nordeste. Dona Lindinalva recorda o início dos filhos com pranchas de madeira na praia, que mais tarde evoluiu para um negócio integrado gerido com irmãos e sobrinhos na Vila dos Pescadores."
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="bg-slate-800/80 p-2.5 rounded-xl text-center border border-slate-700/60">
                  <span className="text-amber-400 font-extrabold text-sm block font-mono">+30 Anos</span>
                  <span className="text-[10px] text-slate-400">Na Praia do Francês</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl text-center border border-slate-700/60">
                  <span className="text-sky-400 font-extrabold text-sm block">Escola</span>
                  <span className="text-[10px] text-slate-400">Todas as Idades</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl text-center border border-slate-700/60">
                  <span className="text-emerald-400 font-extrabold text-sm block">Oficina</span>
                  <span className="text-[10px] text-slate-400">Manutenção & PU</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl text-center border border-slate-700/60">
                  <span className="text-pink-400 font-extrabold text-sm block">Família</span>
                  <span className="text-[10px] text-slate-400">Tradição Neves</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal for Newspaper */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 rounded-3xl max-w-4xl max-h-[92vh] w-full p-4 overflow-auto border border-slate-700 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
              <span className="font-bold text-amber-400">
                Gazeta de Alagoas (22/01/2012) · Caderno Em Alta — "Vivendo ao sabor da maré"
              </span>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-auto max-h-[80vh] flex justify-center">
              <img
                src={OFFICIAL_MEDIA.gazetaArticleImg}
                alt="Página completa do jornal Gazeta de Alagoas"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
