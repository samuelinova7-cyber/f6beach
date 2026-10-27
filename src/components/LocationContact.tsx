import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Navigation, ExternalLink, Compass } from 'lucide-react';
import { STORE_INFO, createWhatsAppLink } from '../data/surfData';

export const LocationContact: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            Localização Privilegiada
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Encontre a Francês Beach Surf Board.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Localizada no coração da Vila dos Pescadores, a poucos metros do mar e dos melhores picos de surf da Praia do Francês.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info & Action Buttons (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-6 mb-6 border-b border-slate-100">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Vila dos Pescadores
                </span>
                <h3 className="font-display text-2xl font-black text-slate-900">
                  {STORE_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {STORE_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Endereço Completo</div>
                    <div className="text-slate-600">{STORE_INFO.address}</div>
                    <div className="text-slate-500 text-xs">{STORE_INFO.city} — CEP {STORE_INFO.cep}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Horário de Funcionamento</div>
                    <div className="text-slate-600">{STORE_INFO.hours}</div>
                    <div className="text-emerald-600 font-semibold text-xs mt-0.5">🟢 Aberto hoje cedo para o terral</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">WhatsApp & Telefone Direto</div>
                    <div className="text-slate-900 font-mono font-bold">{STORE_INFO.phone}</div>
                    <div className="text-slate-500 text-xs">Atendimento rápido todos os dias</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation Grid */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={STORE_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-white" />
                  <span>Abrir no Waze</span>
                </a>
              </div>

              <a
                href={createWhatsAppLink("Olá! Gostaria de saber como chegar na Francês Beach Surf Board.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp Oficial</span>
              </a>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Ver stories da loja @lojafrancesbeach</span>
              </a>
            </div>

          </div>

          {/* Right: Interactive Map View (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            {/* Embedded Google Map iframe */}
            <div className="w-full h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="Localização Francês Beach Surf Board"
                src="https://maps.google.com/maps?q=Av.+dos+Arrecifes,+45+-+Praia+do+Franc%C3%AAs,+Mal.+Deodoro+-+AL&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>

              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                Praia do Francês, Alagoas
              </div>
            </div>

            {/* Map Caption Strip */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-amber-400 font-bold">📍 Ponto de Referência:</span>
                <span className="text-slate-300">Vila dos Pescadores, descida principal para o pico dos corais.</span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 whitespace-nowrap"
              >
                <span>Rotas no Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
