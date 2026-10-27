import React, { useState } from 'react';
import { Waves, Sparkles, CheckCircle2, Calendar, MessageCircle, Star, Users, ArrowRight, UserCheck, Play, VolumeX } from 'lucide-react';
import { LESSON_PACKAGES, OFFICIAL_MEDIA, createWhatsAppLink } from '../data/surfData';
import { APP_IMAGES } from '../assets/images';

export const SurfSchool: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'todos' | 'aprender' | 'evoluir'>('todos');

  const filteredPackages = selectedTrack === 'todos' 
    ? LESSON_PACKAGES 
    : LESSON_PACKAGES.filter(p => p.track === selectedTrack);

  return (
    <section id="aulas" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            <Waves className="w-4 h-4" />
            Escola de Surf & Locação Francês Beach
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Da primeira onda ao próximo nível.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Aulas individuais ou em pequenos grupos com instrutores locais certificados, pranchas seguras e método focado na sua diversão e segurança.
          </p>
        </div>

        {/* Real Lessons & Rentals Video Spotlight */}
        <div className="mb-14 bg-slate-950 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Video Player (Muted, autoPlay, loop) */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-slate-800 shadow-xl group">
              <video
                src={OFFICIAL_MEDIA.lessonRentalVideo}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-sky-500 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                  Vídeo Oficial
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-slate-200 text-[11px] font-medium flex items-center gap-1 border border-white/10">
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  Sem som
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <span className="font-medium text-white truncate">Locação & Aulas de Surf em Ação no Francês</span>
                <span className="text-[11px] text-amber-300 shrink-0 font-bold ml-2">Praia do Francês · AL</span>
              </div>
            </div>

            {/* Video Context & Action */}
            <div className="lg:col-span-5 text-white flex flex-col justify-between py-1">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                  Atendimento na Areia & no Mar
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                  Nosso Trabalho de Locação & Aulas
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Veja nossa equipe na Praia do Francês: entrega e ajuste de pranchas ideais para seu tamanho, orientações de segurança na areia e acompanhamento integral na água para você pegar suas melhores ondas.
                </p>

                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300 mb-6">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-sky-400 font-bold block mb-0.5">Instrutores Locais</span>
                    Mais de 30 anos de vivência nas marés e bancadas
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-0.5">Pranchas Perfeitas</span>
                    Softboards e epóxi revisadas para seu nível
                  </div>
                </div>
              </div>

              <a
                href={createWhatsAppLink("Olá! Vi o vídeo das aulas e locações na Praia do Francês e gostaria de agendar uma aula / alugar uma prancha!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Aula ou Locação no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual Path Hero Showcase (Quero Aprender vs Quero Evoluir) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          
          {/* Path 1: Quero Aprender */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                🌱 QUERO APRENDER
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Nunca surfou na vida?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Aprenda do absoluto zero com toda a segurança. Fundamentos de remada, equilíbrio, subida na prancha (pop-up) e suas primeiras ondas na Praia do Francês.
              </p>

              <div className="space-y-2.5 mb-8">
                {[
                  '100% dos alunos ficam em pé na primeira aula',
                  'Pranchas softboards macias anti-impacto',
                  'Treino prévio de postura na areia',
                  'Água quentinha e rasa no inside do Francês',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={createWhatsAppLink("Olá! Gostaria de agendar uma aula para iniciantes (Quero Aprender) na Praia do Francês.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Aprender a Surfar</span>
            </a>
          </div>

          {/* Path 2: Quero Evoluir */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-4">
                🔥 QUERO EVOLUIR
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Já surfa e quer destravar manobras?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Trabalhe técnica refinada, leitura do mar, posicionamento no pico dos corais, cavadas profundas, velocidade na parede e correção em vídeo.
              </p>

              <div className="space-y-2.5 mb-8">
                {[
                  'Análise de linha de onda e geração de velocidade',
                  'Transição para pranchas menores (Shortboard/Fish)',
                  'Leitura de marés e correntes no Arrecife',
                  'Coaching personalizado com filmagem 4K',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={createWhatsAppLink("Olá! Já surfo e gostaria de agendar uma aula de evolução / coaching técnico na bancada do Francês.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Evoluir Meu Surf</span>
            </a>
          </div>

        </div>

        {/* Lesson Packages Cards */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Pacotes de Aulas Disponíveis
              </h3>
              <p className="text-xs text-slate-500">Equipamento completo já incluso em todas as opções</p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setSelectedTrack('todos')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedTrack === 'todos' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Todos os Pacotes
              </button>
              <button
                onClick={() => setSelectedTrack('aprender')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedTrack === 'aprender' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Iniciantes
              </button>
              <button
                onClick={() => setSelectedTrack('evoluir')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedTrack === 'evoluir' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Avançado
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between relative transition-all ${
                  pkg.popular ? 'border-sky-500 shadow-lg ring-1 ring-sky-500/20' : 'border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded">
                      {pkg.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{pkg.duration}</span>
                  </div>

                  <h4 className="font-display text-xl font-extrabold text-slate-900 mt-1">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">{pkg.subtitle}</p>

                  <div className="text-2xl font-black text-slate-900 font-mono mb-4 pb-4 border-b border-slate-100">
                    R$ {pkg.price}
                    <span className="text-xs font-normal text-slate-500 block">por pessoa / aula completa</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(`Olá! Gostaria de agendar o pacote de aula "${pkg.title}" (R$ ${pkg.price}) na Praia do Francês.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar no WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* "Para Quem É?" Checklist */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Público & Experiência
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Para quem são as nossas aulas de surf?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Atendemos todas as faixas etárias a partir de 6 anos com segurança total.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto text-xs">
            {[
              '✓ Primeira experiência',
              '✓ Iniciantes',
              '✓ Intermediários',
              '✓ Quem quer evoluir',
              '✓ Turistas no Francês',
              '✓ Crianças & Famílias',
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700 text-slate-200 font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
