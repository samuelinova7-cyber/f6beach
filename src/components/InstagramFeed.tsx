import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/surfData';

export const InstagramFeed: React.FC = () => {
  const stories = [
    { label: 'Ondas Hoje 🌊' },
    { label: 'Aulas de Surf 🏄' },
    { label: 'Pranchas 🏄‍♂️' },
    { label: 'Moda Praia ☀️' },
    { label: 'Vila dos Pescadores 🤙' },
  ];

  return (
    <section className="py-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
            <Instagram className="w-4 h-4" />
            Instagram Oficial
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            O surf acontece todos os dias por aqui.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Acompanhe as condições do mar, novidades diárias, pranchas, aulas e os bastidores da Vila dos Pescadores no perfil oficial.
          </p>

          {/* Social Proof Stats */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <div className="text-xl font-extrabold text-slate-900 font-display">+1.000</div>
              <div className="text-xs text-slate-500">Seguidores no Insta</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-extrabold text-slate-900 font-display">Diário</div>
              <div className="text-xs text-slate-500">Boletim das Ondas</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-extrabold text-slate-900 font-display">Av. Arrecifes 45</div>
              <div className="text-xs text-slate-500">Praia do Francês</div>
            </div>
          </div>

          {/* Stories Highlight Bar */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto py-8 scrollbar-none">
            {stories.map((story, idx) => (
              <a
                key={idx}
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold text-center px-1">
                      {story.label.split(' ')[0]}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-slate-700 max-w-[80px] truncate text-center">
                  {story.label}
                </span>
              </a>
            ))}
          </div>

          {/* Prominent Follow CTA */}
          <div>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-pink-500/25 transition-all active:scale-98"
            >
              <Instagram className="w-5 h-5" />
              <span>Seguir @lojafrancesbeach no Instagram</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
