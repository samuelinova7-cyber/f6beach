import React from 'react';
import { Shirt, MessageCircle } from 'lucide-react';
import { CasualApparelShowcase } from './CasualApparelShowcase';
import { createWhatsAppLink } from '../data/surfData';

export const ShopGear: React.FC = () => {
  return (
    <section id="equipamentos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <Shirt className="w-4 h-4" />
            Moda & Linha de Roupas Tradicionais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Estilo e identidade autêntica da Praia do Francês.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Coleção oficial de roupas normais e casuais da Francês Beach Surf Board: bermudas tradicionais, camisetas de algodão nobre e o lifestyle único da Vila dos Pescadores.
          </p>
        </div>

        {/* EXCLUSIVE NORMAL / CASUAL CLOTHING BLOCK (ONLY USER MEDIA: PHOTOS & VIDEOS ALTERNATING) */}
        <CasualApparelShowcase />

      </div>
    </section>
  );
};
