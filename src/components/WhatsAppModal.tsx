import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Waves, ShoppingBag, Wrench, GraduationCap, Compass, Send, Crown } from 'lucide-react';
import { createWhatsAppLink, STORE_INFO } from '../data/surfData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialIntent,
}) => {
  const [customMessage, setCustomMessage] = useState<string>(initialIntent || '');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  React.useEffect(() => {
    if (initialIntent === 'documentario-moab') {
      setSelectedTopic('Falar com o Imperador do Surf Moab');
      setCustomMessage('Olá mestre Moab e equipe Francês Beach! Assisti ao documentário histórico sobre a Praia do Francês e gostaria de conversar sobre as aulas e serviços na Vila dos Pescadores.');
    } else if (initialIntent) {
      setCustomMessage(initialIntent);
    }
  }, [initialIntent, isOpen]);

  if (!isOpen) return null;

  const intents = [
    {
      id: 'documentario-moab',
      icon: Crown,
      title: 'Falar com o Imperador do Surf Moab',
      desc: 'História do Francês, agendamento de aulas com mestre Moab ou visita à loja.',
      defaultMsg: 'Olá mestre Moab e equipe Francês Beach! Assisti ao documentário histórico sobre a Praia do Francês e gostaria de conversar sobre as aulas e serviços na Vila dos Pescadores.',
    },
    {
      id: 'locacao',
      icon: Waves,
      title: 'Quero Alugar uma Prancha',
      desc: 'Softboards, Funboards, Longboards e Fish disponíveis por hora ou diária.',
      defaultMsg: 'Olá Francês Beach! Gostaria de consultar a disponibilidade e valores para aluguel de prancha.',
    },
    {
      id: 'compra',
      icon: Compass,
      title: 'Quero Comprar uma Prancha',
      desc: 'Pranchas novas, seminovas e usadas revisadas no mostruário.',
      defaultMsg: 'Olá! Gostaria de saber mais sobre as pranchas à venda no mostruário da loja.',
    },
    {
      id: 'aula',
      icon: GraduationCap,
      title: 'Quero Agendar Aula de Surf',
      desc: 'Iniciantes (primeira vez) ou Coaching de Evolução na bancada do Francês.',
      defaultMsg: 'Olá! Gostaria de agendar uma aula de surf na Praia do Francês. Quais os horários disponíveis hoje/amanhã?',
    },
    {
      id: 'conserto',
      icon: Wrench,
      title: 'Preciso Consertar Minha Prancha',
      desc: 'Trincas, bicos, quilhas quebradas e laminação em resina epóxi/PU.',
      defaultMsg: 'Olá oficina Francês Beach! Minha prancha quebrou e preciso de uma avaliação/orçamento de reparo.',
    },
    {
      id: 'equipamentos',
      icon: ShoppingBag,
      title: 'Quero Saber Sobre Equipamentos & Roupas',
      desc: 'Bermudas, Camisas UV50+, Parafina Fu Wax, Decks e Leashes.',
      defaultMsg: 'Olá! Gostaria de saber se vocês têm camisas UV, bermudas ou parafinas em estoque na loja.',
    },
  ];

  const handleSelectTopic = (msg: string, title: string) => {
    setSelectedTopic(title);
    setCustomMessage(msg);
  };

  const handleSend = () => {
    const textToSend = customMessage.trim() || 'Olá! Gostaria de falar com o atendimento da Francês Beach Surf Board.';
    window.open(createWhatsAppLink(textToSend), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-emerald-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Atendimento Salve Surf</h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                {STORE_INFO.name} · {STORE_INFO.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-xs text-slate-500 mb-4 font-medium">
            Escolha o assunto para direcionarmos seu atendimento direto no WhatsApp:
          </p>

          <div className="space-y-2 mb-6">
            {intents.map((intent) => {
              const Icon = intent.icon;
              const isSelected = selectedTopic === intent.title;
              return (
                <button
                  key={intent.id}
                  onClick={() => handleSelectTopic(intent.defaultMsg, intent.title)}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 shadow-xs'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{intent.title}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[240px] sm:max-w-xs">{intent.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Custom Message input */}
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Mensagem pré-formatada:
            </label>
            <textarea
              rows={3}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Digite sua mensagem ou ajuste o texto acima..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
            />
          </div>

          <button
            onClick={handleSend}
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 active:scale-98 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Iniciar Conversa no WhatsApp</span>
          </button>

          <p className="text-[10px] text-slate-400 text-center mt-3">
            ⏰ Horário de atendimento: Segunda a Domingo, das 06:30 às 18:00
          </p>
        </div>

      </div>
    </div>
  );
};

export const FloatingWhatsApp: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer"
      aria-label="Abrir WhatsApp oficial da Francês Beach Surf Board"
    >
      <span className="absolute -top-2 -left-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
      </span>
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-xs">
        Falar no WhatsApp
      </span>
    </button>
  );
};
