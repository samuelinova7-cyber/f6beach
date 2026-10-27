import React from 'react';
import { Waves, MapPin, Clock, Phone, Instagram, Star, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/surfData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-amber-400 flex items-center justify-center text-white font-black text-sm shadow-md">
                FB
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                FRANCÊS BEACH <span className="text-sky-400">SURF BOARD</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              O autêntico Salve Surf da Praia do Francês. Pranchas, equipamentos, locação, consertos e aulas no coração da Vila dos Pescadores em Alagoas.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.7 ⭐ no Google (12 avaliações reais)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Navegação do Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-sky-400 transition-colors">Início / Salve Surf</a></li>
              <li><a href="#pranchas" className="hover:text-sky-400 transition-colors">Mostruário de Pranchas</a></li>
              <li><a href="#locacao" className="hover:text-sky-400 transition-colors">Locação de Pranchas</a></li>
              <li><a href="#reparos" className="hover:text-sky-400 transition-colors">Consertos e Oficina</a></li>
              <li><a href="#aulas" className="hover:text-sky-400 transition-colors">Aulas de Surf (Aprender & Evoluir)</a></li>
              <li><a href="#equipamentos" className="hover:text-sky-400 transition-colors">Bermudas, Dry Fit & Parafinas</a></li>
              <li><a href="#previsao" className="hover:text-sky-400 transition-colors">Previsão das Ondas e Marés</a></li>
              <li><a href="#galeria" className="hover:text-sky-400 transition-colors">Galeria dos Surfistas Locais</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Loja Física & Horários
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{STORE_INFO.address}</div>
                  <div>{STORE_INFO.city}</div>
                  <div className="text-slate-500">CEP {STORE_INFO.cep}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{STORE_INFO.hours}</div>
                  <div className="text-slate-500">Aberto todos os dias</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-white font-mono">{STORE_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Community & Social */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Conecte-se com o Pico
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Acompanhe as condições do mar e fotos diárias do Francês no nosso Instagram.
            </p>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-pink-500 text-xs font-semibold transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>@lojafrancesbeach</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Francês Beach Surf Board. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Feito para a comunidade do surf da Praia do Francês</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
