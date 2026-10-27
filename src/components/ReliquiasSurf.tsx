import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Maximize2, 
  X, 
  History, 
  Sparkles, 
  Compass, 
  Share2, 
  MessageCircle 
} from 'lucide-react';
import { OFFICIAL_MEDIA, STORE_INFO, createWhatsAppLink } from '../data/surfData';

export const ReliquiasSurf: React.FC = () => {
  const images = OFFICIAL_MEDIA.reliquiasSurf;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play timer for alternating images
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const currentItem = images[currentIndex];

  return (
    <section id="reliquias" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Ambient Vintage Glow & Warm Sun Texture */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <History className="w-4 h-4 text-amber-400" />
            <span>Memória Viva & Tradição Local</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Relíquias do Surf na Praia do Francês
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 text-balance leading-relaxed">
            Uma viagem no tempo pelas fotografias históricas que registraram as primeiras gerações, o mar clássico e a essência pura do Salve Surf na Vila dos Pescadores.
          </p>
        </div>

        {/* Featured Showcase Window (Alternating Hero Box) */}
        <div className="bg-slate-950/80 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md mb-8">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            
            {/* Main Image Frame (7 cols) */}
            <div className="lg:col-span-7 relative group bg-black aspect-[4/3] sm:aspect-[16/10] overflow-hidden flex items-center justify-center">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                key={currentItem.url}
                className="w-full h-full object-contain sm:object-cover transition-all duration-700 select-none animate-in fade-in zoom-in-95"
                referrerPolicy="no-referrer"
              />

              {/* Vintage Film Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 pointer-events-none" />

              {/* Tag & Counter Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentItem.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 font-mono text-xs font-bold border border-white/10">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </div>

              {/* Maximize Button */}
              <button
                onClick={() => handleOpenLightbox(currentIndex)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors backdrop-blur-md border border-white/20 cursor-pointer shadow-lg"
                title="Ampliar relíquia histórica"
                aria-label="Ampliar foto histórica"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Controls Overlay (Bottom bar inside image on mobile, or controls) */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-auto">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                    aria-label="Relíquia anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-xl bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pausar rotação' : 'Reproduzir rotação'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                    aria-label="Próxima relíquia"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Auto-cycle indicator bar */}
                <div className="hidden sm:flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full border border-white/10 text-xs text-amber-300 font-medium backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>Alternando fotografias</span>
                </div>
              </div>
            </div>

            {/* Description & Historical Context Panel (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full bg-slate-950/60">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Arquivo Histórico Praia do Francês</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {currentItem.caption}
                </p>

                <div className="space-y-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Pico:</span>
                    <span className="font-semibold text-white">Praia do Francês, Alagoas</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Origem:</span>
                    <span className="font-semibold text-amber-300">Vila dos Pescadores</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Acervo:</span>
                    <span className="font-semibold text-sky-300">Francês Beach Surf Board</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => handleOpenLightbox(currentIndex)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span>Ver em Tela Cheia</span>
                </button>

                <a
                  href={createWhatsAppLink(`Olá! Vi a relíquia histórica "${currentItem.title}" no site da Francês Beach Surf Board e gostaria de saber mais sobre essa época do surf no Francês!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comentar no Zap</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 10 Thumbnail Interactive Carousel */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-400" />
              Galeria das 10 Relíquias (Clique para navegar)
            </span>
            <span className="text-xs text-amber-400 font-mono">
              Foto {currentIndex + 1} de {images.length}
            </span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-2 sm:gap-3">
            {images.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                  }}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group ${
                    isActive 
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 z-10' 
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                  aria-label={`Ver foto ${idx + 1}: ${item.title}`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 right-1 text-[10px] font-mono font-bold bg-black/75 px-1 rounded text-white">
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Modal Header */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Relíquia {lightboxIndex + 1} de {images.length} · {images[lightboxIndex].tag}
              </div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                {images[lightboxIndex].title}
              </h4>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Fechar visualizador"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Image Body with prev/next arrows */}
          <div className="relative flex-1 flex items-center justify-center py-4 max-w-5xl mx-auto w-full">
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer Caption */}
          <div className="max-w-4xl mx-auto w-full text-center pt-3 border-t border-white/10 text-slate-300 text-xs sm:text-sm">
            <p className="text-balance">{images[lightboxIndex].caption}</p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <a
                href={createWhatsAppLink(`Olá! Adorei ver a relíquia "${images[lightboxIndex].title}" no site da Francês Beach Surf Board!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar sobre essa história</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
