import React, { useState, useEffect, useRef } from 'react';
import { Shirt, Play, Pause, ChevronLeft, ChevronRight, MessageCircle, Sparkles, VolumeX } from 'lucide-react';
import { OFFICIAL_MEDIA, createWhatsAppLink } from '../data/surfData';

export const CasualApparelShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaItems = OFFICIAL_MEDIA.casualClothing;
  const currentItem = mediaItems[currentIndex];

  // Auto transition for image
  useEffect(() => {
    if (!isPlaying) return;

    if (currentItem.type === 'image') {
      const duration = (currentItem.duration || 6) * 1000;
      const intervalMs = 100;
      let elapsed = 0;

      const timer = setInterval(() => {
        elapsed += intervalMs;
        setProgress((elapsed / duration) * 100);

        if (elapsed >= duration) {
          clearInterval(timer);
          setProgress(0);
          handleNext();
        }
      }, intervalMs);

      return () => {
        clearInterval(timer);
      };
    } else {
      // For video, progress tracks playback
      setProgress(0);
    }
  }, [currentIndex, isPlaying]);

  // Video time update for progress bar
  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleSelectMedia = (idx: number) => {
    setProgress(0);
    setCurrentIndex(idx);
  };

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl mb-16 text-white">
      {/* Header of Block */}
      <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Shirt className="w-4 h-4" />
            Linha de Roupas Tradicionais & Casuais (Lifestyle)
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Coleção Francês Beach Street & Surfwear
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Camisetas casuais, regatas, bermudas tradicionais e peças de algodão nobre com a identidade da Praia do Francês. Roupas do dia a dia para quem vive a cultura do mar.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
            <VolumeX className="w-3.5 h-3.5 text-amber-400" />
            <span>Vídeos sem som</span>
          </span>
          <a
            href={createWhatsAppLink("Olá! Gostaria de ver as opções e tamanhos da linha de roupas normais/casuais da Francês Beach Surf Board.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar Modelos</span>
          </a>
        </div>
      </div>

      {/* Main Alternating Media Showcase */}
      <div className="grid lg:grid-cols-12 gap-0 items-stretch">
        
        {/* Media Player Screen (7 cols) */}
        <div className="lg:col-span-7 relative bg-black aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[520px] flex items-center justify-center overflow-hidden">
          
          {currentItem.type === 'image' ? (
            <img
              key={currentItem.id}
              src={currentItem.url}
              alt={currentItem.title}
              className="w-full h-full object-cover animate-in fade-in duration-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            <video
              key={currentItem.id}
              ref={videoRef}
              src={currentItem.url}
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleVideoTimeUpdate}
              onEnded={handleNext}
              className="w-full h-full object-cover animate-in fade-in duration-500"
            />
          )}

          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

          {/* Floating Controls Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{currentItem.type === 'image' ? 'Foto da Coleção' : 'Vídeo em Reprodução'}</span>
              <span className="text-white/40">·</span>
              <span className="text-amber-300 font-mono text-[11px]">{currentIndex + 1} de {mediaItems.length}</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
              title={isPlaying ? 'Pausar rotação' : 'Continuar reprodução'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer pointer-events-auto"
            aria-label="Mídia anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer pointer-events-auto"
            aria-label="Próxima mídia"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
            <div
              className="h-full bg-amber-400 transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Media Details & Selector (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-950">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Roupas Normais & Moda Praia Tradicional
            </div>

            <h4 className="font-display text-xl sm:text-2xl font-black text-white mb-2">
              {currentItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {currentItem.subtitle}
            </p>

            {/* Features of the casual line */}
            <div className="space-y-2.5 mb-8 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold">100% Algodão Premium:</span>
                <span>Toque macio para uso pós-praia e urbano.</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-bold">Bermudas Tradicionais:</span>
                <span>Modelagem confortável com bolsos e costuras reforçadas.</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-bold">Estampas Originais:</span>
                <span>Identidade visual autêntica da Francês Beach Surf Board.</span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="mb-6">
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                Alternar Mídias da Linha Normal:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {mediaItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectMedia(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all p-1 text-left cursor-pointer ${
                      currentIndex === idx
                        ? 'border-amber-400 bg-amber-500/10 shadow-md shadow-amber-400/20'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-900 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-1">
                      {item.type === 'image' ? (
                        <img src={item.url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <video src={item.url} muted playsInline className="w-full h-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        {item.type === 'image' ? (
                          <span className="text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">FOTO</span>
                        ) : (
                          <Play className="w-3.5 h-3.5 text-amber-400 fill-current" />
                        )}
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-white truncate px-1">
                      {item.type === 'image' ? `Foto 0${idx + 1}` : `Vídeo 0${idx + 1}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-800">
            <a
              href={createWhatsAppLink("Olá! Vi a linha de roupas tradicionais/normais no site da Francês Beach e gostaria de saber sobre modelos, tamanhos e valores!")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp para Ver Modelos e Tamanhos</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
