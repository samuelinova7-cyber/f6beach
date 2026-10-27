import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Compass, Star, Waves, ShieldCheck, Clock, MapPin, ChevronDown, Video, Image as ImageIcon } from 'lucide-react';
import { STORE_INFO, OFFICIAL_MEDIA } from '../data/surfData';

interface HeroProps {
  onOpenWhatsAppModal: (intent?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsAppModal }) => {
  const [bgMode, setBgMode] = useState<'video' | 'image'>('video');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const heroVideo = OFFICIAL_MEDIA.heroMedia.video;
  const heroImage = OFFICIAL_MEDIA.heroMedia.image;

  // Auto-switch from image back to video after 8 seconds
  useEffect(() => {
    if (bgMode === 'image') {
      const timer = setTimeout(() => {
        setBgMode('video');
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }, 8500);
      return () => clearTimeout(timer);
    }
  }, [bgMode]);

  // When video ends or after full playthrough
  const handleVideoEnded = () => {
    setBgMode('image');
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-16 overflow-hidden bg-slate-950">
      
      {/* Background Layer 1: High Action Video */}
      <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ${
        bgMode === 'video' ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Background Layer 2: High Resolution Official Surf Image */}
      <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ${
        bgMode === 'image' ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <img
          src={heroImage}
          alt="Surf na Praia do Francês Alagoas"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Measured Gradients for pristine text contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-radial-at-c from-transparent via-slate-950/50 to-slate-950/85 pointer-events-none" />

      {/* Toggle indicator for background */}
      <div className="absolute top-28 right-4 sm:right-6 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10 text-xs">
        <button
          onClick={() => setBgMode('video')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all text-[11px] font-bold cursor-pointer ${
            bgMode === 'video' ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
          title="Ver vídeo de fundo"
        >
          <Video className="w-3 h-3" />
          <span className="hidden sm:inline">Vídeo</span>
        </button>
        <button
          onClick={() => setBgMode('image')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all text-[11px] font-bold cursor-pointer ${
            bgMode === 'image' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
          title="Ver foto de fundo"
        >
          <ImageIcon className="w-3 h-3" />
          <span className="hidden sm:inline">Foto</span>
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        
        {/* Authentic Seal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-sky-200 text-xs sm:text-sm font-medium mb-6 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Waves className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-semibold text-white tracking-wide uppercase">
            O autêntico Salve Surf da Praia do Francês
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-amber-300 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Vila dos Pescadores
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.06] max-w-5xl mb-6 text-balance drop-shadow-lg">
          O SURF COMEÇA <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">AQUI.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-200 font-normal max-w-2xl mx-auto mb-8 leading-relaxed text-balance drop-shadow-md">
          Pranchas, equipamentos, locação, reparos e aulas para você viver a Praia do Francês dentro e fora d’água.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#pranchas"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-sky-500/30 hover:shadow-sky-400/50 active:scale-98 cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>Ver Pranchas</span>
          </a>

          <button
            onClick={() => onOpenWhatsAppModal("Olá! Gostaria de falar com a equipe da Francês Beach Surf Board.")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Real Proof & Operating Snapshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full text-left">
          
          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="text-white font-bold text-base sm:text-lg flex items-center gap-1">
                4.7 <span className="text-amber-400 text-xs">★★★★★</span>
              </div>
              <div className="text-slate-400 text-xs">Nota no Google (12 avaliações)</div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-emerald-300 font-bold text-sm sm:text-base">06:30 às 18:00</div>
              <div className="text-slate-400 text-xs">Aberto todos os dias</div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base truncate">Av. Arrecifes, 45</div>
              <div className="text-slate-400 text-xs truncate">Vila dos Pescadores</div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">+1.000 surfistas</div>
              <div className="text-slate-400 text-xs">Comunidade no Instagram</div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator pointing to the documentary directly below */}
        <a 
          href="#documentario-moab" 
          className="mt-12 text-amber-300 hover:text-amber-200 transition-colors flex flex-col items-center gap-1 text-xs font-semibold"
        >
          <span>Assistir Documentário Histórico · Imperador do Surf</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>

      </div>
    </section>
  );
};
