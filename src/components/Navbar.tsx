import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, MapPin, Clock } from 'lucide-react';
import { STORE_INFO, OFFICIAL_MEDIA, createWhatsAppLink } from '../data/surfData';

interface NavbarProps {
  onOpenWhatsAppModal: (intent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Pranchas', href: '#pranchas' },
    { label: 'Locação', href: '#locacao' },
    { label: 'Reparos', href: '#reparos' },
    { label: 'Aulas', href: '#aulas' },
  ];

  const rightNavLinks = [
    { label: 'História Gazeta', href: '#historia' },
    { label: 'Relíquias', href: '#reliquias' },
    { label: 'Moda Praia', href: '#equipamentos' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Onde Estamos', href: '#localizacao' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-sky-950/80 py-2 sm:py-3' 
        : 'bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-transparent py-3 sm:py-4 text-white'
    }`}>
      {/* Top micro bar for open hours on desktop */}
      <div className={`hidden xl:block text-xs transition-colors duration-300 pb-2 border-b mb-2 ${
        isScrolled ? 'text-slate-400 border-slate-800/80' : 'text-slate-300 border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Aberto hoje: 06:30 às 18:00
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Av. dos Arrecifes, 45 — Vila dos Pescadores, Praia do Francês - AL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-300 font-semibold">Nota 4.7 ⭐ no Google</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a 
              href={STORE_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white transition-colors"
            >
              @lojafrancesbeach (+1.000 surfistas)
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex items-center justify-between">
        
        {/* Left Side: Brand Wordmark + Left Nav */}
        <div className="flex items-center gap-6">
          <a 
            href="#inicio" 
            className="flex items-center gap-2 font-display text-base sm:text-lg font-black tracking-tight text-white hover:text-sky-300 transition-colors"
          >
            <span className="truncate max-w-[170px] sm:max-w-none">
              FRANCÊS BEACH <span className="text-sky-400 font-bold">SURF BOARD</span>
            </span>
          </a>

          {/* Left nav links */}
          <nav className="hidden lg:flex items-center gap-4 text-xs xl:text-sm font-semibold">
            {leftNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CENTER: Grand Rotating Glowing Circular Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto flex flex-col items-center">
          <a
            href="#inicio"
            className="group relative block focus:outline-none"
            aria-label="Francês Beach Surf Board - Início"
          >
            {/* Ambient Cyan Aura */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-400 opacity-80 blur-md group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
            
            {/* Circular Spinning Logo Container */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full p-1 bg-slate-950 border-2 border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.9)] animate-glow-cyan overflow-hidden flex items-center justify-center">
              <img
                src={OFFICIAL_MEDIA.logo}
                alt="Logo Oficial Francês Beach Surf Board"
                className="w-full h-full object-cover rounded-full animate-[spin_20s_linear_infinite] select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>
        </div>

        {/* Right Side: Right Nav + Primary CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Right nav links */}
          <nav className="hidden lg:flex items-center gap-4 text-xs xl:text-sm font-semibold">
            {rightNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action WhatsApp */}
          <button
            onClick={() => onOpenWhatsAppModal()}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-600/30 active:scale-95 whitespace-nowrap cursor-pointer"
            aria-label="Abrir WhatsApp da Loja"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Zap</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 text-white border-b border-slate-800 shadow-2xl px-4 py-6 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <Clock className="w-3.5 h-3.5" /> Aberto até 18:00
            </span>
            <span>Vila dos Pescadores, Francês</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={createWhatsAppLink("Olá! Gostaria de mais informações sobre pranchas, roupas e aulas da Francês Beach Surf Board.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs"
            >
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp Oficial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
