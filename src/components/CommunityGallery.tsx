import React, { useState } from 'react';
import { Camera, Heart, MapPin, Upload, X, Check, Share2 } from 'lucide-react';
import { COMMUNITY_PHOTOS, createWhatsAppLink } from '../data/surfData';
import { CommunityPhoto } from '../types';

export const CommunityGallery: React.FC = () => {
  const [photos, setPhotos] = useState<CommunityPhoto[]>(COMMUNITY_PHOTOS);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [authorName, setAuthorName] = useState<string>('');
  const [authorHandle, setAuthorHandle] = useState<string>('');
  const [spotName, setSpotName] = useState<string>('Praia do Francês - Pico dos Corais');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const categories = ['Todos', 'Barrels', 'Aulas', 'Corais', 'Lifestyle'];

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const isLiked = !!prev[id];
      const nextState = !isLiked;
      
      setPhotos((curr) =>
        curr.map((p) =>
          p.id === id ? { ...p, likes: p.likes + (nextState ? 1 : -1) } : p
        )
      );
      
      return { ...prev, [id]: nextState };
    });
  };

  const filteredPhotos = selectedCategory === 'Todos'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const handleSubmitPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="galeria" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4" />
              Galeria Colaborativa dos Surfistas Locais
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A vibe real da Praia do Francês.
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Fotos tiradas pelos surfistas locais, alunos e frequentadores da bancada mais famosa de Alagoas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { setUploadModalOpen(true); setSubmitted(false); }}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-sky-500/20 active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>Enviar Minha Foto de Surf</span>
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const isLiked = !!likedIds[photo.id];
            return (
              <div
                key={photo.id}
                className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg flex flex-col justify-between group"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Spot tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-white">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span className="truncate max-w-[150px]">{photo.spot}</span>
                  </div>

                  {/* Like floating pill */}
                  <button
                    onClick={() => toggleLike(photo.id)}
                    className={`absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-125 cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                      isLiked ? 'bg-rose-500 text-white' : 'bg-black/50 text-white hover:bg-black/80'
                    }`}
                    aria-label="Curtir foto"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-mono">{photo.likes}</span>
                  </button>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-semibold text-sky-400">{photo.handle}</span>
                      <span>{photo.date}</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                      "{photo.caption}"
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-3 pt-2 border-t border-slate-700/50">
                    Foto enviada por: <span className="text-slate-300 font-medium">{photo.author}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Upload Photo Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-700 shadow-2xl text-white animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-400" />
                <h3 className="font-display text-lg font-bold">Enviar Foto para a Galeria</h3>
              </div>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Foto Pronta para Envio!</h4>
                <p className="text-xs text-slate-300 mb-6">
                  Para garantir a máxima qualidade, encaminhe a foto diretamente pelo nosso WhatsApp oficial com o seu @ do Instagram.
                </p>
                <a
                  href={createWhatsAppLink(`Olá Francês Beach! Quero enviar uma foto de surf minha para aparecer na galeria do site!\n- Nome: ${authorName || 'Surfista'}\n- Instagram: ${authorHandle || '@'}\n- Pico: ${spotName}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                >
                  <span>Abrir WhatsApp e Enviar Foto</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitPhoto} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Seu Nome / Apelido:</label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Seu @ do Instagram:</label>
                  <input
                    type="text"
                    required
                    value={authorHandle}
                    onChange={(e) => setAuthorHandle(e.target.value)}
                    placeholder="Ex: @joaosurf_al"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Pico onde foi tirada:</label>
                  <select
                    value={spotName}
                    onChange={(e) => setSpotName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Praia do Francês - Pico dos Corais">Praia do Francês - Pico dos Corais</option>
                    <option value="Praia do Francês - Meio da Praia">Praia do Francês - Meio da Praia</option>
                    <option value="Praia do Francês - Leprosário">Praia do Francês - Leprosário</option>
                    <option value="Vila dos Pescadores / Loja">Vila dos Pescadores / Loja</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all cursor-pointer"
                  >
                    Continuar e Enviar via WhatsApp
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
