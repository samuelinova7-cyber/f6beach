import React, { useState } from 'react';
import { Search, Compass, MessageCircle, X, Check, Play, VolumeX, Sparkles, SlidersHorizontal, ChevronRight, Eye } from 'lucide-react';
import { SURFBOARDS_DATA, OFFICIAL_MEDIA, createWhatsAppLink } from '../data/surfData';
import { Surfboard } from '../types';

interface BoardCatalogProps {
  onOpenWhatsAppModal: (intent?: string) => void;
}

export const BoardCatalog: React.FC<BoardCatalogProps> = ({ onOpenWhatsAppModal }) => {
  const [activeBoard, setActiveBoard] = useState<Surfboard | null>(null);
  const [funboardPhotoIdx, setFunboardPhotoIdx] = useState<number>(0);
  const [bodyboardPhotoIdx, setBodyboardPhotoIdx] = useState<number>(0);

  const funboardPhotos = OFFICIAL_MEDIA.funboardPhotos;
  const bodyboardPhotos = OFFICIAL_MEDIA.bodyboardPhotos;
  const longboardPhotos = OFFICIAL_MEDIA.longboardPhotos;

  const shortboards = SURFBOARDS_DATA.filter((b) => b.type === 'Shortboard');
  const funboards = SURFBOARDS_DATA.filter((b) => b.type === 'Funboard');
  const longboards = SURFBOARDS_DATA.filter((b) => b.type === 'Longboard');
  const bodyboards = SURFBOARDS_DATA.filter((b) => b.type === 'Bodyboard');

  return (
    <section id="pranchas" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            Quiver Oficial da Praia do Francês
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Encontre a prancha certa para sua próxima onda.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Conheça nossas 4 categorias especializadas: Shortboard, Funboard, Longboard e Bodyboard, com fotos reais do nosso estoque e prontas para o mar.
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <a
              href="#shortboard"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-all shadow-xs"
            >
              🏄‍♂️ 1. Shortboard
            </a>
            <a
              href="#funboard"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-xs"
            >
              🏄 2. Funboard
            </a>
            <a
              href="#longboard"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs"
            >
              🌊 3. Longboard
            </a>
            <a
              href="#bodyboard"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold transition-all shadow-xs"
            >
              🏖️ 4. Bodyboard
            </a>
          </div>
        </div>

        {/* =========================================================================
            SEÇÃO 1: SHORTBOARD
        ========================================================================= */}
        <div id="shortboard" className="pt-6 mb-20 scroll-mt-24">
          <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white mb-8">
            
            {/* Top Bar for Shortboard */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-sky-400 uppercase tracking-widest block mb-1">
                  SEÇÃO 01 · ALTA PERFORMANCE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Shortboard (Pranchinhas)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Velocidade explosiva, cavadas profundas e manobras críticas no lip. Projetadas para a bancada tubular e as seções rápidas da Praia do Francês.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Olá! Gostaria de consultar os modelos de Shortboard disponíveis para compra ou aluguel na Francês Beach Surf Board.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-sky-500/25 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Shortboards</span>
              </a>
            </div>

            {/* Video & Features Grid */}
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              {/* Shortboard Video Player (without sound) */}
              <div className="lg:col-span-7 relative bg-black aspect-video sm:aspect-[16/10] overflow-hidden">
                <video
                  src={OFFICIAL_MEDIA.shortboardVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-2 border border-white/10">
                  <Play className="w-3 h-3 text-sky-400 fill-current" />
                  <span>Vídeo Real no Francês</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] text-slate-300 flex items-center gap-1.5 border border-white/10">
                  <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vídeo sem som</span>
                </div>
              </div>

              {/* Shortboard Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Fundo Simples para Duplo Concave
                  </div>

                  <h4 className="font-display text-xl font-bold mb-3">
                    Manobras Radicais nos Corais & Beach Break
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Desenvolvidas com laminação de alta resposta (Epóxi EPS ou PU refinado), rabetas squash e round pin para segurar a cavada mesmo quando o mar sobe para 1.5m a 2m.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                      <span className="text-sky-400 font-bold">Faixa de Tamanho:</span>
                      <span>5'8" a 6'4" (28L a 34L)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                      <span className="text-sky-400 font-bold">Sistemas de Quilha:</span>
                      <span>Tri-quilha FCS II e Futures Fins</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                      <span className="text-sky-400 font-bold">Nível Indicado:</span>
                      <span>Intermediário a Avançado</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Locação a partir de R$ 90/dia</span>
                  <span className="text-emerald-400 font-bold">Venda em até 12x</span>
                </div>
              </div>
            </div>

          </div>

          {/* Shortboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shortboards.map((board) => (
              <div
                key={board.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                  <div className="relative aspect-[4/3] w-full sm:w-44 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                    <img src={board.image} alt={board.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                      {board.size}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span>{board.level}</span> · <span>{board.volume}</span>
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-base">{board.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">{board.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="text-base font-extrabold text-slate-900 font-mono">
                    R$ {board.priceBuy?.toLocaleString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveBoard(board)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer"
                    >
                      Ver Detalhes
                    </button>
                    <a
                      href={createWhatsAppLink(`Olá! Tenho interesse no Shortboard ${board.name} (${board.size}). Podem me passar mais detalhes?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SEÇÃO 2: FUNBOARD (COM AS 5 FOTOS REAIS DO USUÁRIO)
        ========================================================================= */}
        <div id="funboard" className="pt-6 mb-20 scroll-mt-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white mb-8">
            
            {/* Top Bar for Funboard */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
                  SEÇÃO 02 · O REI DO FRANCÊS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Funboard (Fotos Reais do Estoque)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  A prancha mais popular e divertida da Praia do Francês. Excelente flutuação, entrada suave nas ondas e facilidade para quem quer surfar bastante.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Olá! Gostaria de consultar os Funboards disponíveis para compra ou aluguel na Francês Beach Surf Board.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Funboards</span>
              </a>
            </div>

            {/* Gallery Viewer with 5 Authentic Photos */}
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              {/* Big Interactive Photo Display (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={funboardPhotos[funboardPhotoIdx]}
                  alt="Funboard Oficial Francês Beach"
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold">
                    Prancha Real #{funboardPhotoIdx + 1} de {funboardPhotos.length}
                  </span>
                  <span className="text-amber-400 font-semibold text-[11px]">
                    Foto Real tirada na Praia do Francês
                  </span>
                </div>
              </div>

              {/* Thumbnails & Specs Selector (5 cols) */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-slate-950">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Selecione para ver as 5 pranchas de Funboard:
                  </span>
                  
                  {/* Thumbnails grid */}
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {funboardPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFunboardPhotoIdx(idx)}
                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer ${
                          funboardPhotoIdx === idx
                            ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                        }`}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover rounded-lg" />
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 mb-6">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Modelos & Tamanhos:</span>
                      <span className="font-bold text-white">7'0", 7'2", 7'4", 7'6", 7'8"</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Volume:</span>
                      <span className="font-bold text-amber-300 font-mono">49L a 58L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Condições Ideais:</span>
                      <span className="font-bold text-white">0.5m a 1.5m (Maré Seca a Cheia)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Público:</span>
                      <span className="font-bold text-emerald-400">Iniciantes, Intermediários e Famílias</span>
                    </div>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(`Olá! Vi as fotos dos funboards no site da Francês Beach Surf Board e gostaria de saber o valor e disponibilidade da prancha #${funboardPhotoIdx + 1}!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reservar Funboard no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Funboard Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {funboards.slice(0, 3).map((board) => (
              <div
                key={board.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={board.image} alt={board.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                    {board.size}
                  </span>
                  <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">
                    {board.volume}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">{board.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">{board.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">VENDA / DIÁRIA</span>
                      <span className="text-sm font-extrabold text-slate-900 font-mono">
                        R$ {board.priceBuy?.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-500">ou R$ {board.priceRentPerDay}/dia</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveBoard(board)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SEÇÃO 3: LONGBOARD (COM A FOTO REAL DO USUÁRIO)
        ========================================================================= */}
        <div id="longboard" className="pt-6 mb-20 scroll-mt-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white mb-8">
            
            {/* Top Bar for Longboard */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mb-1">
                  SEÇÃO 03 · ESTILO CLÁSSICO & GLIDE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Longboard (Pranchões Clássicos)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Deslize suave, caminhada elegante até o bico e nose riding nas ondas extensas de Alagoas. Uma verdadeira obra de arte do shaper local.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Olá! Gostaria de consultar os Longboards disponíveis na Francês Beach Surf Board.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Longboard</span>
              </a>
            </div>

            {/* Longboard Featured Real Photo Grid */}
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              {/* Photo Display (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={longboardPhotos[0]}
                  alt="Longboard 9'2 Real Francês Beach"
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold">
                    Longboard Custom 9'2" · Foto Oficial
                  </span>
                  <span className="text-emerald-400 font-semibold text-[11px]">
                    Disponível na Loja · Av. dos Arrecifes 45
                  </span>
                </div>
              </div>

              {/* Longboard Specs (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-950">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Longarina Nobre & Single Fin
                  </div>

                  <h4 className="font-display text-xl font-bold mb-2">
                    Francês Classic Custom Longboard 9'2"
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Construído com bloco de alta densidade e laminação reforçada 6oz. O fundo flat para V-Bottom proporciona transições de borda fluidas e estabilidade máxima para hang five.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Tamanho & Volume:</span>
                      <span className="font-bold text-white font-mono">9'2" · 74.0 Litros</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Quilhas:</span>
                      <span className="font-bold text-white">Caixa Central 9" + Estabilizadores</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Rabeta:</span>
                      <span className="font-bold text-white">Square Tail Clássico</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Locação:</span>
                      <span className="font-bold text-emerald-400">R$ 100/diária ou R$ 45/hora</span>
                    </div>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink("Olá! Tenho muito interesse no Longboard 9'2\" da Francês Beach Surf Board. Podem me passar mais fotos e condições?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero Esse Longboard no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SEÇÃO 4: BODYBOARD (COM AS 2 FOTOS REAIS DO USUÁRIO)
        ========================================================================= */}
        <div id="bodyboard" className="pt-6 mb-12 scroll-mt-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white mb-8">
            
            {/* Top Bar for Bodyboard */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-rose-400 uppercase tracking-widest block mb-1">
                  SEÇÃO 04 · TUBOS NO SHOREBREAK & ADRENALINA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Bodyboard (Fotos Reais do Estoque)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Pranchas de bodyboard profissionais e para lazer. Fundo slick de alta velocidade, canais de tração e blocos reforçados para os tubos rápidos da beira da Praia do Francês.
                </p>
              </div>

              <a
                href={createWhatsAppLink("Olá! Gostaria de consultar os modelos de Bodyboard disponíveis para compra ou locação na Francês Beach Surf Board.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Bodyboards</span>
              </a>
            </div>

            {/* Bodyboard Real Media Grid */}
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              {/* Photo Display (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={bodyboardPhotos[bodyboardPhotoIdx]}
                  alt="Bodyboard Oficial Francês Beach"
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold">
                    Bodyboard #{bodyboardPhotoIdx + 1} de {bodyboardPhotos.length}
                  </span>
                  <span className="text-rose-400 font-semibold text-[11px]">
                    Fotos Reais na Loja Oficial
                  </span>
                </div>
              </div>

              {/* Bodyboard Thumbnails & Specs (5 cols) */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-slate-950">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Selecione para Alternar as Fotos de Bodyboard:
                  </span>
                  
                  {/* Thumbnails grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {bodyboardPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => setBodyboardPhotoIdx(idx)}
                        className={`aspect-video rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer ${
                          bodyboardPhotoIdx === idx
                            ? 'border-rose-500 scale-105 shadow-md shadow-rose-500/30'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                        }`}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover rounded-lg" />
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 mb-6">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Tamanhos Disponíveis:</span>
                      <span className="font-bold text-white">41.5" e 42" Pro Series</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Fundo (Bottom):</span>
                      <span className="font-bold text-white">Slick HDPE com Canais de Velocidade</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Leash Incluso:</span>
                      <span className="font-bold text-rose-400">Leash de Bíceps com Girador</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Locação & Venda:</span>
                      <span className="font-bold text-white">R$ 40/dia ou R$ 490 na compra</span>
                    </div>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(`Olá! Gostaria de consultar a disponibilidade do Bodyboard #${bodyboardPhotoIdx + 1} para aluguel ou compra na Francês Beach Surf Board!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar Bodyboard no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Board Details Modal */}
      {activeBoard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="relative aspect-[16/9] bg-slate-900">
              {activeBoard.type === 'Shortboard' ? (
                <div className="relative w-full h-full">
                  <video
                    src={OFFICIAL_MEDIA.shortboardVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1">
                    <VolumeX className="w-3 h-3 text-amber-400" /> Vídeo em ação (sem som)
                  </div>
                </div>
              ) : (
                <img
                  src={activeBoard.image}
                  alt={activeBoard.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              <button
                onClick={() => setActiveBoard(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                  <span>{activeBoard.type}</span>
                  <span>·</span>
                  <span>{activeBoard.condition}</span>
                </div>
                <h3 className="font-display text-2xl font-black">{activeBoard.name}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-center mb-5">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Tamanho</div>
                  <div className="text-sm font-bold text-slate-800 font-mono">{activeBoard.size}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Volume</div>
                  <div className="text-sm font-bold text-slate-800 font-mono">{activeBoard.volume}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Rabeta</div>
                  <div className="text-sm font-bold text-slate-800 truncate">{activeBoard.tail}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Quilhas / Fundo</div>
                  <div className="text-sm font-bold text-slate-800 truncate">{activeBoard.finSystem}</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {activeBoard.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Destaques e Construção:</div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeBoard.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  {activeBoard.priceBuy && (
                    <div className="text-xl font-black text-slate-900 font-mono">
                      R$ {activeBoard.priceBuy.toLocaleString('pt-BR')}
                      <span className="text-xs font-normal text-slate-500 block">À vista ou em até 12x na loja</span>
                    </div>
                  )}
                  {activeBoard.rentalAvailable && (
                    <div className="text-xs font-semibold text-sky-600 mt-0.5">
                      Também disponível para locação (R$ {activeBoard.priceRentPerDay}/dia)
                    </div>
                  )}
                </div>

                <a
                  href={createWhatsAppLink(`Olá Francês Beach Surf Board! Vi a prancha ${activeBoard.name} (${activeBoard.size} - ${activeBoard.volume}) no mostruário do site e tenho muito interesse. Podem me passar mais fotos e detalhes?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tenho Interesse no WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
