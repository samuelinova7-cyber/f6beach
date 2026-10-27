import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MoabDocumentarySection } from './components/MoabDocumentarySection';
import { ForecastWidget } from './components/ForecastWidget';
import { BoardCatalog } from './components/BoardCatalog';
import { RentalSystem } from './components/RentalSystem';
import { DingRepair } from './components/DingRepair';
import { SurfSchool } from './components/SurfSchool';
import { GazetaHistorySection } from './components/GazetaHistorySection';
import { ReliquiasSurf } from './components/ReliquiasSurf';
import { ShopGear } from './components/ShopGear';
import { ExperienceFrances } from './components/ExperienceFrances';
import { CommunityGallery } from './components/CommunityGallery';
import { InstagramFeed } from './components/InstagramFeed';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationContact } from './components/LocationContact';
import { WhatsAppModal, FloatingWhatsApp } from './components/WhatsAppModal';
import { RealTimeNotifications } from './components/RealTimeNotifications';
import { Footer } from './components/Footer';
import { soundEffects } from './utils/soundEffects';

export default function App() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppInitialIntent, setWhatsAppInitialIntent] = useState<string>('');

  useEffect(() => {
    // Initialize global mini-game sound effect on all buttons and clickable elements
    soundEffects.initGlobalButtonSound();
  }, []);

  const handleOpenWhatsAppModal = (intent?: string) => {
    setWhatsAppInitialIntent(intent || '');
    setWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navigation with central spinning glowing round logo */}
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Salve Surf */}
        <Hero onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* Documentário Histórico do Surf na Praia do Francês · Imperador do Surf Moab */}
        <MoabDocumentarySection onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* Live Forecast & Sea Condition Monitor */}
        <ForecastWidget />

        {/* 2. Mostruário de Pranchas (inclui vídeo de shortboard em ação sem som) */}
        <BoardCatalog onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* 3. Locação de Pranchas */}
        <RentalSystem onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* 4. Conserto e Reparo de Pranchas */}
        <DingRepair />

        {/* 5. Aulas de Surf & Trabalho de Locação (com vídeo oficial) */}
        <SurfSchool />

        {/* Matéria Histórica do Jornal Gazeta de Alagoas (Moab das Neves e Tradição Familiar) */}
        <GazetaHistorySection />

        {/* Relíquias do Surf na Praia do Francês (10 fotos históricas alternando) */}
        <ReliquiasSurf />

        {/* 6. Equipamentos & Vestuário (bloco exclusivo de roupas normais com as mídias do usuário alternando e sem som) */}
        <ShopGear />

        {/* 10. Experiência Salve Surf Praia do Francês */}
        <ExperienceFrances />

        {/* Collaborative Community Surf Gallery */}
        <CommunityGallery />

        {/* 9. Instagram @lojafrancesbeach */}
        <InstagramFeed />

        {/* 8. Avaliações do Google (com a logo central, grande, redonda, girando e com brilho) */}
        <GoogleReviews />

        {/* 7. Onde Estamos & Contato */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Real-Time Live Activity Notifications with Mini-Game Sounds */}
      <RealTimeNotifications />

      {/* Floating Interactive WhatsApp Quick Button */}
      <FloatingWhatsApp onOpen={() => handleOpenWhatsAppModal()} />

      {/* Multi-Intent WhatsApp Converter Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        initialIntent={whatsAppInitialIntent}
      />
    </div>
  );
}
