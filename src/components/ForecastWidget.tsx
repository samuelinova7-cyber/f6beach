import React, { useState } from 'react';
import { Waves, Wind, Compass, Thermometer, Sun, Calendar, Info, CheckCircle2 } from 'lucide-react';
import { SURF_FORECAST_DATA } from '../data/surfData';

export const ForecastWidget: React.FC = () => {
  const [showTips, setShowTips] = useState(false);

  return (
    <section id="previsao" className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Subtle ocean pattern glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Boletim das Ondas & Tempo Real · Praia do Francês
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Previsão do Mar & Vento em Alagoas
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>Atualizado: {SURF_FORECAST_DATA.updatedAt}</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setShowTips(!showTips)}
              className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium underline underline-offset-4 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              {showTips ? 'Ocultar Dicas do Pico' : 'Como ler as bancadas?'}
            </button>
          </div>
        </div>

        {/* Spot info tip alert */}
        {showTips && (
          <div className="bg-sky-950/60 border border-sky-800/80 rounded-xl p-4 mb-8 text-sm text-sky-200 animate-in fade-in duration-200">
            <h4 className="font-bold text-white flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-amber-400" />
              Guia Rápido dos Picos da Praia do Francês:
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-sky-900/50">
                <span className="font-semibold text-sky-300 block mb-1">🪸 Bancada dos Corais (Direitas tubulares)</span>
                Funciona melhor na maré seca para enchendo com swell de Sul/Sudeste. Exige leitura rápida de fundo.
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-sky-900/50">
                <span className="font-semibold text-sky-300 block mb-1">🏖️ Meio da Praia (Beach Break)</span>
                Ondas mais cheias e seguras para iniciantes e funboards, excelentes na maré média e cheia.
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-sky-900/50">
                <span className="font-semibold text-sky-300 block mb-1">🌅 Janela de Terral</span>
                Das 05:30 às 09:30 o vento sopra de terra (offshore), deixando a parede da onda super lisa (glass).
              </div>
            </div>
          </div>
        )}

        {/* Live Condition Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          
          {/* Wave Height */}
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-medium">Tamanho da Onda</span>
              <Waves className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {SURF_FORECAST_DATA.waveHeight.split(' ')[0]}
              </div>
              <div className="text-xs text-emerald-400 font-medium mt-1">
                Condição: {SURF_FORECAST_DATA.rating}
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-3 pt-2 border-t border-slate-700/50">
              Período: <span className="text-white font-semibold">{SURF_FORECAST_DATA.wavePeriod}</span>
            </div>
          </div>

          {/* Wind Condition */}
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-medium">Vento & Qualidade</span>
              <Wind className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-display">
                {SURF_FORECAST_DATA.windQuality}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                {SURF_FORECAST_DATA.windSpeed}
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-3 pt-2 border-t border-slate-700/50">
              Direção: <span className="text-white font-semibold">{SURF_FORECAST_DATA.swellDirection}</span>
            </div>
          </div>

          {/* Water & Climate */}
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-medium">Água & Clima</span>
              <Thermometer className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
                {SURF_FORECAST_DATA.waterTemp.split(' ')[0]}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Água quente o ano inteiro
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-3 pt-2 border-t border-slate-700/50 flex items-center gap-1">
              <Sun className="w-3.5 h-3.5 text-amber-400" /> UV: {SURF_FORECAST_DATA.uvIndex}
            </div>
          </div>

          {/* Best Time of the Day */}
          <div className="bg-gradient-to-br from-sky-900/60 to-slate-800/90 border border-sky-600/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-sky-300 mb-2">
              <span className="text-xs uppercase font-bold tracking-wide">Melhor Horário</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-snug">
                {SURF_FORECAST_DATA.bestTime}
              </div>
            </div>
            <div className="text-xs text-sky-200 mt-3 pt-2 border-t border-sky-800/50">
              Marés: Baixa {SURF_FORECAST_DATA.tideLow.split(' ')[0]} · Alta {SURF_FORECAST_DATA.tideHigh.split(' ')[0]}
            </div>
          </div>

        </div>

        {/* 5-Day Outlook Strip */}
        <div className="bg-slate-950/60 rounded-xl border border-slate-800 p-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            Tendência das Ondas para os Próximos Dias
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SURF_FORECAST_DATA.dailyForecast.map((day) => (
              <div
                key={day.day}
                className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="font-bold text-white text-sm">{day.day}</div>
                  <div className="text-slate-400 text-xs">{day.date}</div>
                </div>
                <div className="my-2">
                  <div className="text-sky-400 font-extrabold text-base font-display">{day.wave}</div>
                  <div className="text-slate-300 text-xs font-mono">{day.period}</div>
                </div>
                <div className="text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded py-0.5">
                  {day.rating}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
