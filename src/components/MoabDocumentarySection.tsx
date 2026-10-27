import React, { useState, useEffect, useRef } from 'react';
import {
  Crown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Sparkles,
  Waves,
  Award,
  History,
  MessageCircle,
} from 'lucide-react';
import { OFFICIAL_MEDIA, STORE_INFO } from '../data/surfData';
import { soundEffects } from '../utils/soundEffects';

interface MoabDocumentarySectionProps {
  onOpenWhatsAppModal?: (intent?: string) => void;
}

export const MoabDocumentarySection: React.FC<MoabDocumentarySectionProps> = ({
  onOpenWhatsAppModal,
}) => {
  // Video player states
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Alternating photos states (the 2 photos of Imperador do Surf Moab)
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const photos = OFFICIAL_MEDIA.moabDocumentary.images;

  // Auto-cycle the 2 photos every 4.5 seconds when not hovered
  useEffect(() => {
    if (isHovered || isZoomOpen) return;
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, isZoomOpen, photos.length]);

  // Video controls handlers
  const handleTogglePlay = () => {
    soundEffects.playClick();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    soundEffects.playSelect();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    soundEffects.playOpen();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playSelect();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playSelect();
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handleSelectPhoto = (idx: number) => {
    soundEffects.playSelect();
    setActivePhotoIndex(idx);
  };

  const photoCaptions = [
    {
      title: 'Moab das Neves — Imperador do Surf',
      desc: 'Carregando a honra e o peso de um legado de décadas nas ondas da Praia do Francês.',
      tag: 'O Guardião das Ondas',
    },
    {
      title: 'A Honra de Perpetuar a Cultura Salve Surf',
      desc: 'Pioneirismo, respeito à natureza e a dedicação integral ao esporte na Vila dos Pescadores.',
      tag: 'Tradição & Respeito',
    },
  ];

  return (
    <section
      id="documentario-moab"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-[#081225] text-white relative overflow-hidden border-b border-amber-500/20 shadow-2xl"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-amber-500/10 mb-4 animate-bounce-subtle">
            <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Documentário Histórico · O Imperador do Surf</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            A História Viva do Surf na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
              Praia do Francês
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Conheça a trajetória épica das ondas alagoanas conduzida pelo{' '}
            <strong className="text-amber-300 font-semibold">Imperador do Surf Moab</strong>, que
            recebeu a sublime honra de carregar e eternizar o legado do surf e da comunidade
            da Praia do Francês.
          </p>
        </div>

        {/* Main Grid: Prominent Video (Left/Center) + Same-Block Alternating Photos (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* 1. VIDEO EM DESTAQUE (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border-2 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] group h-full flex flex-col">
              
              {/* Top Video Header Bar */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between z-20 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-300 flex items-center gap-1.5">
                    <History className="w-4 h-4 text-amber-400" />
                    Documentário Oficial · Parte Histórica
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                  Praia do Francês · AL
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative flex-1 bg-black aspect-video sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={OFFICIAL_MEDIA.moabDocumentary.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle vignette gradient over video */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                {/* Center Big Play/Pause Overlay indicator on click */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center group/btn focus:outline-none"
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-2xl transition-all transform group-hover/btn:scale-110 ${
                      isPlaying
                        ? 'opacity-0 group-hover/btn:opacity-100 scale-90'
                        : 'opacity-100 scale-100'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-slate-950" />
                    ) : (
                      <Play className="w-8 h-8 fill-slate-950 ml-1" />
                    )}
                  </div>
                </button>

                {/* Floating Bottom Video Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/60 shadow-xl">
                  {/* Left Controls: Play + Unmute Toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleTogglePlay}
                      className="p-2 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors font-bold flex items-center gap-1.5 text-xs"
                      title={isPlaying ? 'Pausar' : 'Reproduzir'}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span className="hidden sm:inline">Assistir</span>
                        </>
                      )}
                    </button>

                    {/* Prominent Mute/Unmute audio button */}
                    <button
                      type="button"
                      onClick={handleToggleMute}
                      className={`p-2 rounded-xl transition-all text-xs font-semibold flex items-center gap-1.5 border ${
                        isMuted
                          ? 'bg-slate-800 text-amber-300 border-amber-500/40 hover:bg-slate-700'
                          : 'bg-emerald-500 text-slate-950 border-emerald-400 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
                      }`}
                      title={isMuted ? 'Ativar som do documentário' : 'Silenciar'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-amber-400" />
                          <span>Ativar Som</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span>Som Ligado</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Right Controls: Fullscreen button */}
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
                    title="Tela cheia"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Caption & Highlights Bar */}
              <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Waves className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Resgate Histórico das Primeiras Ondas</span>
                  </h3>
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 w-fit">
                    Vila dos Pescadores
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Imagens raras e relatos emocionantes sobre a evolução do surf em Alagoas, os
                  primeiros campeonatos nos corais do Francês e a transformação da praia em um dos
                  maiores santuários do surf brasileiro.
                </p>
              </div>
            </div>
          </div>

          {/* 2. AS DUAS FOTOS NO MESMO BLOCO ALTERNANDO ENTRE SI (5 Cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              className="bg-slate-950/90 rounded-3xl border-2 border-amber-500/40 p-5 sm:p-6 shadow-2xl relative flex flex-col justify-between h-full backdrop-blur-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header of the Photo Block */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-400/30">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-amber-300 uppercase tracking-wider">
                      Imperador do Surf Moab
                    </h3>
                    <p className="text-xs text-slate-400">O Legado Vivo da Praia do Francês</p>
                  </div>
                </div>

                {/* Photo 1/2 indicator badge */}
                <div className="px-2.5 py-1 rounded-full bg-slate-800/90 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                  Foto {activePhotoIndex + 1} de {photos.length}
                </div>
              </div>

              {/* Photo Showcase Container (Single Block with Smooth Crossfade) */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black border border-slate-800 group shadow-inner cursor-pointer"
                onClick={() => {
                  soundEffects.playOpen();
                  setIsZoomOpen(true);
                }}
              >
                {photos.map((photoUrl, idx) => {
                  const isActive = idx === activePhotoIndex;
                  return (
                    <div
                      key={photoUrl}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <img
                        src={photoUrl}
                        alt={`Imperador do Surf Moab na Praia do Francês foto ${idx + 1}`}
                        className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  );
                })}

                {/* Overlaid Badges on Image */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-bold shadow-lg">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    {photoCaptions[activePhotoIndex].tag}
                  </span>
                </div>

                {/* Click to expand hint overlay */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity border border-slate-700">
                    <ZoomIn className="w-4 h-4 text-amber-300" />
                  </div>
                </div>

                {/* Manual Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 shadow-lg border border-slate-700"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 shadow-lg border border-slate-700"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom gradient on image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />

                {/* Bottom caption overlay inside image */}
                <div className="absolute bottom-3 inset-x-3 z-20 pointer-events-none">
                  <p className="text-xs text-amber-200/90 font-medium line-clamp-2">
                    {photoCaptions[activePhotoIndex].desc}
                  </p>
                </div>
              </div>

              {/* Photo Selector Indicators (Dots/Bars) */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPhoto(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activePhotoIndex
                          ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]'
                          : 'w-3 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Ver foto ${idx + 1}`}
                    />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1">
                    {isHovered ? '(Pausado ao passar o mouse)' : '(Alternando fotos)'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playOpen();
                    setIsZoomOpen(true);
                  }}
                  className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 flex items-center gap-1 font-semibold"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                </button>
              </div>

              {/* Tribute Card & WhatsApp Action */}
              <div className="mt-4 pt-4 border-t border-slate-800 bg-slate-900/60 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-amber-400" />
                  A Honra de Carregar o Legado
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Moab recebeu das gerações mais antigas a missão de guardar os segredos das ondas
                  do Francês, formando surfistas desde a infância até profissionais e preservando a
                  alma da Vila dos Pescadores.
                </p>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playSelect();
                    onOpenWhatsAppModal?.('documentario-moab');
                  }}
                  className="mt-3 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar com Moab e a Equipe no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner of Authenticity */}
        <div className="mt-10 sm:mt-12 bg-slate-900/80 rounded-2xl border border-slate-800 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
              +30 Anos
            </span>
            <span className="text-xs text-slate-300 font-medium mt-1">
              Vivendo e surfando no Francês
            </span>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-800 py-3 md:py-0">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-display">
              Vila dos Pescadores
            </span>
            <span className="text-xs text-slate-300 font-medium mt-1">
              O autêntico berço do Salve Surf
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">
              100% Autêntico
            </span>
            <span className="text-xs text-slate-300 font-medium mt-1">
              Tradição passada de geração em geração
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Photos */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => {
            soundEffects.playClose();
            setIsZoomOpen(false);
          }}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl border-2 border-amber-500/50 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">
                  {photoCaptions[activePhotoIndex].title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClose();
                  setIsZoomOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Fechar zoom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black p-2">
              <img
                src={photos[activePhotoIndex]}
                alt={`Imperador do Surf Moab - Foto ${activePhotoIndex + 1}`}
                className="max-h-[72vh] w-auto object-contain mx-auto rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next within modal */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center shadow-2xl border border-slate-700 transition-all"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center shadow-2xl border border-slate-700 transition-all"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span>{photoCaptions[activePhotoIndex].desc}</span>
              <div className="flex items-center gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPhoto(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activePhotoIndex ? 'bg-amber-400 scale-125' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
