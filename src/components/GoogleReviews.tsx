import React from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS_DATA, STORE_INFO, OFFICIAL_MEDIA } from '../data/surfData';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background warm glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* CENTERED, LARGE, ROUND, ROTATING & GLOWING LOGO */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative group">
            {/* Ambient Golden Glow Aura */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
            
            {/* Spinning Circular Logo */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1.5 bg-slate-950 border-4 border-amber-400 shadow-[0_0_45px_rgba(251,191,36,0.9)] animate-glow-amber overflow-hidden flex items-center justify-center">
              <img
                src={OFFICIAL_MEDIA.logo}
                alt="Logo Francês Beach Surf Board - Avaliações Google"
                className="w-full h-full object-cover rounded-full animate-[spin_18s_linear_infinite] select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              Selo Oficial Francês Beach · Vila dos Pescadores
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            Prova Social & Avaliações Reais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Quem vive o surf na Praia do Francês recomenda.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Avaliações verificadas de surfistas locais, turistas e alunos que confiam no Salve Surf da Francês Beach Surf Board.
          </p>
        </div>

        {/* Big Google Rating Badge Hero */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center shrink-0">
              <span className="text-3xl font-black text-slate-900 font-display">4.7</span>
              <div className="flex text-amber-400 text-xs">
                {'★★★★★'}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-bold text-slate-900 text-lg">Excelente no Google</span>
                <CheckCircle className="w-4 h-4 text-sky-500" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Baseado em 12 avaliações reais de clientes na Av. dos Arrecifes, 45.
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Avaliar no Google ⭐⭐⭐⭐⭐</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GOOGLE_REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between shadow-xs hover:border-sky-300 transition-colors"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{review.author}</h4>
                    <span className="text-[11px] text-sky-600 font-medium">{review.userType}</span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3 text-slate-400" />
                  <span>{review.helpfulCount}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Bottom CTA Box */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 text-center max-w-3xl mx-auto border border-sky-800 shadow-xl">
          <h3 className="font-display text-2xl font-bold mb-2">Já surfou com a gente na Praia do Francês?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto">
            Sua opinião ajuda outros surfistas e turistas a encontrarem o autêntico Salve Surf em Alagoas.
          </p>
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg transition-transform active:scale-95"
          >
            <Star className="w-4 h-4 fill-slate-950" />
            <span>Deixar Minha Avaliação no Google</span>
          </a>
        </div>

      </div>
    </section>
  );
};
