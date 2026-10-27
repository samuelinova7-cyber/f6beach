import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Waves, 
  Wrench, 
  ShoppingBag, 
  GraduationCap, 
  X, 
  CheckCircle, 
  Sparkles, 
  ExternalLink,
  Volume2,
  VolumeX
} from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export interface ActivityNotification {
  id: string;
  type: 'google_review' | 'rental' | 'lesson' | 'repair' | 'gear';
  author: string;
  location: string;
  avatarText: string;
  avatarBg: string;
  title: string;
  detail: string;
  timeAgo: string;
  targetHref: string;
  stars?: number;
}

const ACTIVITIES_FEED: ActivityNotification[] = [
  {
    id: 'act-1',
    type: 'google_review',
    author: 'Rodrigo A.',
    location: 'Vila dos Pescadores',
    avatarText: 'RA',
    avatarBg: 'bg-amber-500',
    title: 'Nova Avaliação 5 Estrelas no Google',
    detail: '"Prancha impecável e atendimento 10! Melhor loja da Praia do Francês."',
    timeAgo: 'Agora mesmo',
    stars: 5,
    targetHref: '#avaliacoes',
  },
  {
    id: 'act-2',
    type: 'rental',
    author: 'Mariana Duarte',
    location: 'Praia do Francês, AL',
    avatarText: 'MD',
    avatarBg: 'bg-sky-500',
    title: 'Locação de Prancha Confirmada',
    detail: 'Alugou Francês Funboard 7\'6" por 3 diárias',
    timeAgo: 'Há 1 minuto',
    targetHref: '#locacao',
  },
  {
    id: 'act-3',
    type: 'lesson',
    author: 'Thiago Medeiros',
    location: 'Maceió - AL',
    avatarText: 'TM',
    avatarBg: 'bg-emerald-500',
    title: 'Aula de Surf Agendada',
    detail: 'Reservou o pacote "Minha Primeira Onda" para amanhã',
    timeAgo: 'Há 3 minutos',
    targetHref: '#aulas',
  },
  {
    id: 'act-4',
    type: 'google_review',
    author: 'Camila Vasconcelos',
    location: 'Google Maps',
    avatarText: 'CV',
    avatarBg: 'bg-amber-500',
    title: 'Nova Avaliação no Google',
    detail: '"Fiquei em pé na primeira aula! Instrutor super paciente."',
    timeAgo: 'Há 4 minutos',
    stars: 5,
    targetHref: '#avaliacoes',
  },
  {
    id: 'act-5',
    type: 'repair',
    author: 'Beto Cavalcanti',
    location: 'Vila dos Pescadores',
    avatarText: 'BC',
    avatarBg: 'bg-orange-500',
    title: 'Serviço de Reparo Solicitado',
    detail: 'Prancha de epóxi deixada na oficina para vedação de borda',
    timeAgo: 'Há 6 minutos',
    targetHref: '#reparos',
  },
  {
    id: 'act-6',
    type: 'gear',
    author: 'Lucas Fontes',
    location: 'Loja Francês Beach',
    avatarText: 'LF',
    avatarBg: 'bg-indigo-500',
    title: 'Moda Praia Adquirida',
    detail: 'Comprou Camisa Dry Fit UV50+ e Bermuda Boardshort',
    timeAgo: 'Há 8 minutos',
    targetHref: '#equipamentos',
  },
  {
    id: 'act-7',
    type: 'rental',
    author: 'Renata & Carlos',
    location: 'Pico dos Corais',
    avatarText: 'RC',
    avatarBg: 'bg-cyan-500',
    title: 'Locação de Longboard Retirada',
    detail: 'Retiraram Longboard Clássico 9\'2" para o terral da tarde',
    timeAgo: 'Há 10 minutos',
    targetHref: '#locacao',
  },
  {
    id: 'act-8',
    type: 'google_review',
    author: 'Marcelo "Caboclo"',
    location: 'Google Maps',
    avatarText: 'MC',
    avatarBg: 'bg-amber-500',
    title: 'Avaliação 5★ no Google',
    detail: '"Conserto de quilha em 48h com laminação perfeita. Salve surf!"',
    timeAgo: 'Há 12 minutos',
    stars: 5,
    targetHref: '#avaliacoes',
  },
  {
    id: 'act-9',
    type: 'lesson',
    author: 'Felipe Ramos',
    location: 'Praia do Francês, AL',
    avatarText: 'FR',
    avatarBg: 'bg-emerald-500',
    title: 'Coaching Técnico Confirmado',
    detail: 'Agendou aula de evolução e leitura de bancada no Francês',
    timeAgo: 'Há 15 minutos',
    targetHref: '#aulas',
  },
];

export const RealTimeNotifications: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<ActivityNotification | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(soundEffects.isMuted());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dismissTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync mute state
  useEffect(() => {
    const unsub = soundEffects.subscribe((muted) => setIsMuted(muted));
    return unsub;
  }, []);

  useEffect(() => {
    // Show first notification after 3.5 seconds
    const initialTimeout = setTimeout(() => {
      showNextNotification(0);
    }, 3500);

    return () => {
      clearTimeout(initialTimeout);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, []);

  const showNextNotification = (index: number) => {
    const activity = ACTIVITIES_FEED[index % ACTIVITIES_FEED.length];
    setCurrentNotification(activity);
    setIsVisible(true);

    // Play retro mini-game notification chime sound!
    soundEffects.playNotification();

    // Auto-dismiss after 6 seconds
    dismissTimerRef.current = setTimeout(() => {
      setIsVisible(false);

      // Schedule next notification 6 to 10 seconds after dismiss
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES_FEED.length);
        showNextNotification((index + 1) % ACTIVITIES_FEED.length);
      }, 7000);
    }, 5500);
  };

  const handleManualClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    
    // Wait a bit before next one
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITIES_FEED.length);
      showNextNotification(currentIndex + 1);
    }, 10000);
  };

  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.toggleMute();
  };

  if (!currentNotification) return null;

  const getTypeIcon = (type: ActivityNotification['type']) => {
    switch (type) {
      case 'google_review':
        return <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />;
      case 'rental':
        return <Waves className="w-4 h-4 text-sky-400 shrink-0" />;
      case 'lesson':
        return <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />;
      case 'repair':
        return <Wrench className="w-4 h-4 text-orange-400 shrink-0" />;
      case 'gear':
        return <ShoppingBag className="w-4 h-4 text-indigo-400 shrink-0" />;
    }
  };

  const getTypeBadgeClass = (type: ActivityNotification['type']) => {
    switch (type) {
      case 'google_review':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'rental':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
      case 'lesson':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'repair':
        return 'bg-orange-500/15 text-orange-300 border-orange-500/30';
      case 'gear':
        return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <div
      className={`fixed bottom-5 left-4 sm:left-6 z-40 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] sm:w-auto transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div 
        onClick={() => {
          if (currentNotification.targetHref) {
            window.location.hash = currentNotification.targetHref;
          }
        }}
        className="bg-slate-950/95 text-white p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 shadow-[0_12px_35px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer hover:border-sky-500 transition-colors group relative overflow-hidden"
      >
        {/* Subtle glow accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400" />

        <div className="flex items-start gap-3">
          {/* Avatar with live pulse dot */}
          <div className="relative shrink-0">
            <div className={`w-10 h-10 rounded-full ${currentNotification.avatarBg} text-slate-950 font-bold flex items-center justify-center text-xs shadow-inner`}>
              {currentNotification.avatarText}
            </div>
            {/* Live activity pulse */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950"></span>
            </span>
          </div>

          {/* Body Content */}
          <div className="flex-1 min-w-0 pr-12">
            <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTypeBadgeClass(currentNotification.type)}`}>
                {getTypeIcon(currentNotification.type)}
                {currentNotification.title}
              </span>
              <span className="text-[10px] text-slate-400">· {currentNotification.timeAgo}</span>
            </div>

            <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-2">
              <span className="text-white font-bold">{currentNotification.author}</span> ({currentNotification.location}): {currentNotification.detail}
            </div>

            {currentNotification.stars && (
              <div className="flex items-center gap-1 mt-1 text-amber-400 text-xs">
                {Array.from({ length: currentNotification.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
                <span className="text-[10px] text-slate-400 font-medium ml-1">Verificada no Google</span>
              </div>
            )}
          </div>

          {/* Quick Controls: Mute & Close */}
          <div className="absolute top-3 right-3 flex items-center gap-1 text-slate-400">
            <button
              onClick={handleToggleSound}
              className="p-1 rounded-lg hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title={isMuted ? 'Ativar som de mini-game' : 'Silenciar sons'}
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
            <button
              onClick={handleManualClose}
              className="p-1 rounded-lg hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Fechar notificação"
              aria-label="Fechar notificação"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Action prompt hint */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <Sparkles className="w-3 h-3" /> Atividade ao vivo na loja
          </span>
          <span className="text-sky-400 group-hover:underline flex items-center gap-0.5 font-semibold">
            Ver detalhes <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
