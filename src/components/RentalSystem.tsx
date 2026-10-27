import React, { useState } from 'react';
import { Waves, Calendar, Clock, ShieldCheck, CheckCircle2, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { createWhatsAppLink } from '../data/surfData';

interface RentalSystemProps {
  onOpenWhatsAppModal: (intent?: string) => void;
}

export const RentalSystem: React.FC<RentalSystemProps> = ({ onOpenWhatsAppModal }) => {
  const [level, setLevel] = useState<'Iniciante' | 'Intermediário' | 'Avançado'>('Iniciante');
  const [boardType, setBoardType] = useState<string>('Softboard 8\'0" (Iniciante / Seguro)');
  const [duration, setDuration] = useState<string>('1 Diária (Mais Popular)');

  const boardOptions = {
    Iniciante: [
      { name: 'Softboard 8\'0" (Iniciante / Seguro)', desc: 'Máxima estabilidade e flutuação. Bordas macias anti-impacto.', hourly: 30, daily: 70 },
      { name: 'Funboard 7\'6" Real Shaper', desc: 'Fácil remada e transição perfeita para primeiras curvas.', hourly: 35, daily: 80 },
      { name: 'Bodyboard 41.5" Pro (Leash Incluso)', desc: 'Diversão garantida no shorebreak. Bloco rígido e leash de bíceps.', hourly: 20, daily: 40 },
      { name: 'Longboard 9\'2" Clássico Custom', desc: 'Glide longo e estabilidade para passear no outside.', hourly: 45, daily: 100 },
    ],
    Intermediário: [
      { name: 'Funboard 7\'2" Performance', desc: 'Agilidade e velocidade para evoluir na parede da onda.', hourly: 35, daily: 80 },
      { name: 'Fish Retrô 5\'8" Bi-quilha', desc: 'Super rápida nas seções gordas e mar pequeno a médio.', hourly: 35, daily: 85 },
      { name: 'Evolution 6\'8" Epóxi', desc: 'Curvas mais fechadas mantendo excelente remada.', hourly: 35, daily: 80 },
    ],
    Avançado: [
      { name: 'Shortboard Performance 6\'0"', desc: 'Para bater no lip, cavar fundo e manobrar com pressão.', hourly: 40, daily: 90 },
      { name: 'Step-Up 6\'4" Tubular', desc: 'Para os dias de mar clássico e tubos na bancada do Francês.', hourly: 40, daily: 90 },
      { name: 'Fish Twin Fin 5\'6"', desc: 'Soltinha para rasgadas rápidas e velocidade instantânea.', hourly: 35, daily: 85 },
    ],
  };

  const durations = [
    { label: '1 Hora', value: '1 Hora', factor: 'hour-1', badge: 'Avulso' },
    { label: '2 Horas', value: '2 Horas', factor: 'hour-2', badge: 'Sessão Dupla' },
    { label: '1 Diária', value: '1 Diária (Mais Popular)', factor: 'day-1', badge: 'Recomendado' },
    { label: '3 Dias', value: 'Pacote 3 Dias', factor: 'day-3', badge: 'Desconto 15%' },
    { label: '7 Dias', value: 'Pacote Semanal', factor: 'day-7', badge: 'Melhor Valor' },
  ];

  const currentBoards = boardOptions[level];
  const selectedBoardObj = currentBoards.find(b => b.name === boardType) || currentBoards[0];

  const calculateEstimate = () => {
    if (duration === '1 Hora') return `R$ ${selectedBoardObj.hourly}`;
    if (duration === '2 Horas') return `R$ ${selectedBoardObj.hourly * 2 - 10}`;
    if (duration.includes('1 Diária')) return `R$ ${selectedBoardObj.daily}`;
    if (duration.includes('3 Dias')) return `R$ ${Math.round(selectedBoardObj.daily * 3 * 0.85)}`;
    if (duration.includes('Semanal')) return `R$ ${Math.round(selectedBoardObj.daily * 7 * 0.75)}`;
    return `R$ ${selectedBoardObj.daily}`;
  };

  const whatsappMessage = `Olá Francês Beach! Gostaria de consultar a locação de prancha:\n- Meu Nível: ${level}\n- Tipo de Prancha: ${selectedBoardObj.name}\n- Duração Desejada: ${duration}\nPodem confirmar a disponibilidade para retirada na loja?`;

  return (
    <section id="locacao" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            <Waves className="w-4 h-4" />
            Sistema de Locação de Pranchas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Quer pegar onda sem precisar comprar uma prancha?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Temos opções de pranchas para locação de acordo com o seu nível, tamanho, características da prancha e condições disponíveis no dia.
          </p>
        </div>

        {/* Interactive Rental Configurator Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background waves */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Selection Form (8 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Level */}
              <div>
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span>1. Selecione seu Nível de Surf:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Iniciante', 'Intermediário', 'Avançado'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setLevel(lvl);
                        setBoardType(boardOptions[lvl][0].name);
                      }}
                      className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer border ${
                        level === lvl
                          ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/30'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Board Type */}
              <div>
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  2. Escolha o Tipo de Prancha Recomendada:
                </label>
                <div className="space-y-2">
                  {currentBoards.map((b) => (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => setBoardType(b.name)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        boardType === b.name
                          ? 'bg-slate-800 border-sky-400 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          {b.name}
                          {boardType === b.name && <CheckCircle2 className="w-4 h-4 text-sky-400" />}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{b.desc}</div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <div className="text-xs font-mono font-bold text-sky-400">R$ {b.daily}/dia</div>
                        <div className="text-[10px] text-slate-500">ou R$ {b.hourly}/h</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Duration */}
              <div>
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>3. Período Desejado:</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setDuration(d.value)}
                      className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                        duration === d.value
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-md'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 text-xs'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{d.label}</div>
                      <div className="text-[10px] opacity-80 truncate mt-0.5">{d.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quote Summary & WhatsApp CTA (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Estimativa de Locação
                    </span>
                    <span className="text-xs text-slate-400">Pronta para retirada na loja</span>
                  </div>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Nível Selecionado:</span>
                    <span className="font-semibold text-white">{level}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Modelo:</span>
                    <span className="font-semibold text-white truncate max-w-[200px]">{selectedBoardObj.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Período:</span>
                    <span className="font-semibold text-white">{duration}</span>
                  </div>
                  <div className="flex justify-between py-1 text-emerald-400 font-semibold">
                    <span>Incluso:</span>
                    <span>Leash + Parafina Fu Wax</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center mb-6">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Valor Estimado</div>
                  <div className="text-3xl font-black text-amber-400 font-mono mt-1">
                    {calculateEstimate()}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    *Sem burocracia: documento + caução simples
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={createWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar Pranchas Disponíveis</span>
                </a>

                {/* Clarification text requested by user */}
                <p className="text-[11px] text-slate-400 text-center mt-3 leading-tight">
                  A disponibilidade e o valor exato da locação dependem da prancha, tamanho, características e condições no momento da reserva.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Benefits of Renting with Francês Beach */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Troca de Prancha Livre</h4>
              <p className="text-xs text-slate-600 mt-0.5">Se o mar mudar, você pode trocar de modelo durante o dia.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Equipamentos Revisados</h4>
              <p className="text-xs text-slate-600 mt-0.5">Todas as pranchas passam por inspeção de resina e copinho.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Retirada a partir das 06:30</h4>
              <p className="text-xs text-slate-600 mt-0.5">Pegue a prancha cedo e aproveite a melhor janela de terral.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
            <Waves className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">A 3 Minutos da Areia</h4>
              <p className="text-xs text-slate-600 mt-0.5">Localização privilegiada na Vila dos Pescadores.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
