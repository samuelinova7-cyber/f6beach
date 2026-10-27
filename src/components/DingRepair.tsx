import React, { useState } from 'react';
import { Wrench, Camera, MessageCircle, Sparkles, ShieldAlert, Check, Layers, Hammer } from 'lucide-react';
import { REPAIR_SERVICES, createWhatsAppLink } from '../data/surfData';
import { APP_IMAGES } from '../assets/images';

export const DingRepair: React.FC = () => {
  const [selectedDamageType, setSelectedDamageType] = useState<string>('Trinca ou Quebra de Borda');
  const [boardMaterial, setBoardMaterial] = useState<string>('Epóxi EPS');
  const [damageDescription, setDamageDescription] = useState<string>('');
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatedWhatsAppMsg = `Olá oficina Francês Beach Surf Board! Preciso de um orçamento de reparo para minha prancha:\n- Tipo de Dano: ${selectedDamageType}\n- Material: ${boardMaterial}\n- Detalhes: ${damageDescription || 'Vou anexar a foto da prancha nesta conversa'}\nPodem fazer uma avaliação prévia?`;

  return (
    <section id="reparos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" />
            Oficina de Shaper & Consertos
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Sua prancha sofreu um acidente?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 text-balance">
            Reparos profissionais e cuidados artesanais para colocar sua prancha novamente na água com a mesma flutuação e hidrodinâmica original.
          </p>
        </div>

        {/* Main Grid: Services & Interactive Photo Quote */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: Repair Workshop Showcase & Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Workshop image banner */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={APP_IMAGES.repair}
                alt="Oficina de conserto de pranchas de surf na Praia do Francês"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Trabalho Artesanal em Alagoas
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold">
                  Resina Epóxi & PU com Secagem em Estufa e Laminação Dupla
                </h3>
              </div>
            </div>

            {/* Repair Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {REPAIR_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800/80 border border-slate-700/70 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-semibold">{service.startingPrice}</span>
                    <span className="text-slate-400">Prazo: {service.estimatedTime}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Interactive Damage Assessment / Photo Send Tool (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Avaliação Rápida por Foto</h3>
                <p className="text-xs text-slate-400">Envie fotos no WhatsApp e receba orçamento em minutos</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              
              {/* Damage Type */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tipo de Avaria / Dano:
                </label>
                <select
                  value={selectedDamageType}
                  onChange={(e) => setSelectedDamageType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                >
                  <option value="Trinca ou Quebra de Borda">Trinca ou Quebra de Borda</option>
                  <option value="Bico ou Rabeta Quebrada">Bico ou Rabeta Quebrada</option>
                  <option value="Copinho de Quilha Solto / Arrancado">Copinho de Quilha Solto / Arrancado</option>
                  <option value="Delaminação ou Bolha no Deck">Delaminação ou Bolha no Deck</option>
                  <option value="Prancha Partida ao Meio">Prancha Partida ao Meio</option>
                  <option value="Revisão Geral & Troca de Parafina">Revisão Geral & Troca de Parafina</option>
                </select>
              </div>

              {/* Material */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Material da Prancha:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Epóxi EPS', 'PU / Poliéster'].map((mat) => (
                    <button
                      key={mat}
                      type="button"
                      onClick={() => setBoardMaterial(mat)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        boardMaterial === mat
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Como aconteceu o acidente? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={damageDescription}
                  onChange={(e) => setDamageDescription(e.target.value)}
                  placeholder="Ex: Bateu nos corais da maré baixa, entrou um pouco de água..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-amber-400 focus:outline-none resize-none"
                />
              </div>

              {/* Optional Photo upload preview */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Foto da Prancha (Prévia):
                </label>
                {previewPhoto ? (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-amber-500/50">
                    <img src={previewPhoto} alt="Prévia do dano" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPreviewPhoto(null)}
                      className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded"
                    >
                      Remover
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-slate-900/60">
                    <Camera className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-xs font-semibold text-slate-300">Carregar foto de teste</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">Ou envie direto pelo WhatsApp no botão abaixo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={createWhatsAppLink(generatedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Foto da Prancha no WhatsApp</span>
                </a>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  ⚡ Resposta rápida em horário comercial (06:30 às 18:00)
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
