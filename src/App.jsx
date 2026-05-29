import React, { useState } from 'react';
import { Heart, Play, MessageCircle, Lock, MapPin, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { storiesData, chatLogs, initialCoupons } from './data/content';
import TimeCounter from './components/TimeCounter';
import StoryOverlay from './components/StoryOverlay';

export default function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);
  const [secretRevealed, setSecretRevealed] = useState(false);

  const handleRedeemCoupon = (id) => {
    if (!redeemedCoupons.includes(id)) {
      setRedeemedCoupons([...redeemedCoupons, id]);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto min-h-screen flex flex-col px-4 sm:px-8 py-6 sm:py-10 pb-24">
        
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <div>
            <p className="text-zinc-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-1">Nosso App</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Lívia & Eu
            </h1>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0">
            <img src="/img/IMG-20260208-WA0034(1)(1)(1).jpg" alt="Perfil" className="w-full h-full object-cover" />
          </div>
        </header>

        <main className="flex flex-col gap-6 sm:gap-8 flex-1">
          
          <div 
            onClick={() => setIsStoryOpen(true)}
            className="w-full bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-[32px] p-1 relative overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('/img/20260402_215908.jpg')] bg-cover bg-center opacity-40 transition-opacity duration-700 group-hover:opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="relative p-6 sm:p-10 pt-32 sm:pt-48 flex items-end justify-between">
              <div className="flex-1 pr-4">
                <span className="px-3 py-1.5 bg-red-500/80 backdrop-blur text-white text-[10px] sm:text-xs font-bold uppercase rounded-md flex items-center gap-1.5 w-max mb-3">
                  <Heart size={12} fill="currentColor" /> Especial Namorados
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-2">A Nossa<br/>História</h2>
                <p className="text-zinc-300 text-sm sm:text-base font-medium">Toque para ouvir e assistir a retrospectiva...</p>
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-black shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play size={24} fill="currentColor" className="ml-1 sm:ml-2 sm:scale-125" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            
            <div className="flex flex-col gap-6 sm:gap-8">
              <section>
                <div className="flex justify-between items-end mb-4 px-1">
                  <h3 className="text-lg sm:text-xl font-bold">Provas do Crime 🕵️‍♂️</h3>
                  <span className="text-xs sm:text-sm text-zinc-400">Dez. 2025</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar snap-x snap-mandatory">
                  {chatLogs.map((chat, idx) => (
                    <div key={idx} className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-[24px] w-[85vw] sm:w-[280px] min-w-[260px] p-5 shrink-0 relative overflow-hidden snap-center">
                      <div className="absolute top-0 right-0 p-3 opacity-10">
                        <MessageCircle size={48} />
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-400 mb-2 font-semibold">Para: {chat.para}</p>
                      <p className="text-sm sm:text-base italic text-white/90 leading-relaxed">"{chat.msg}"</p>
                    </div>
                  ))}
                </div>
              </section>

              <TimeCounter startDate="2026-03-28T00:00:00" />

              <div 
                onClick={() => setSecretRevealed(true)}
                className={`p-6 sm:p-8 text-center border cursor-pointer transition-all duration-500 rounded-[28px] backdrop-blur-md shadow-lg
                  ${secretRevealed ? 'bg-zinc-900/80 border-red-500/40' : 'bg-zinc-900/40 border-emerald-500/30 hover:bg-zinc-800/60 hover:scale-[1.02]'}`}
              >
                {secretRevealed ? (
                  <div className="animate-in fade-in zoom-in duration-500">
                    <Heart size={36} fill="currentColor" className="text-red-500 mx-auto mb-3 sm:mb-4 animate-pulse" />
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Para a Lívia</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md mx-auto">
                      Cada dia com você é uma música nova na minha playlist favorita. Obrigado por esses 2 meses incríveis, e um feliz primeiro Dia dos Namorados pra nós! ❤️
                    </p>
                  </div>
                ) : (
                  <div>
                    <Lock size={36} className="text-emerald-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Mensagem Secreta</h3>
                    <p className="text-sm sm:text-base text-zinc-400">Toque para desbloquear o recado final.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              
              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <MapPin size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold">Nosso Lugarzinho</h3>
                </div>
                
                <div className="relative h-48 sm:h-56 rounded-[28px] overflow-hidden border border-white/10 group cursor-pointer shadow-lg">
                  <div className="absolute inset-0 bg-[url('/img/IMG-20250630-WA0054.jpg')] bg-cover bg-center opacity-50 transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500"></div>
                  
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-emerald-500/40 rounded-full absolute animate-ping"></div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center relative shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                        <MapPin size={24} className="text-black ml-[1px] mt-[1px]" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/70 backdrop-blur-md p-4 rounded-[20px] border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-base sm:text-lg font-bold text-white leading-tight mb-1">Praia do Cassino</p>
                      <p className="text-xs sm:text-sm text-zinc-300">Onde a mágica sempre acontece 🌊</p>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-emerald-400 shrink-0">
                      <Heart size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <ImageIcon size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold">Nossa Galeria</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('/img/20260214_014802.jpg')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('/img/IMG-20260216-WA0047.jpg')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="col-span-2 h-28 sm:h-32 rounded-[24px] bg-zinc-800 bg-[url('/img/IMG-20260126-WA0062.jpg')] bg-cover bg-center border border-white/10 flex items-center justify-center bg-black/50 bg-blend-overlay cursor-pointer hover:bg-black/30 transition-all shadow-md">
                    <span className="font-bold text-sm sm:text-base bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">Ver todas as fotos</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-bold mb-4 px-1">Cupons de Namorados 🎟️</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {initialCoupons.map((cupom) => {
                    const isRedeemed = redeemedCoupons.includes(cupom.id);
                    return (
                      <div 
                        key={cupom.id}
                        onClick={() => handleRedeemCoupon(cupom.id)}
                        className={`p-4 sm:p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 rounded-[24px] backdrop-blur-md border shadow-sm
                          ${isRedeemed ? 'bg-emerald-900/20 border-emerald-500 scale-[0.98]' : 'bg-zinc-900/60 border-white/10 hover:bg-zinc-800/80 hover:scale-[1.02]'}`}
                      >
                        {isRedeemed ? (
                          <div className="flex flex-col items-center justify-center h-full w-full py-2">
                            <div className="text-emerald-400 mb-2 animate-bounce"><CheckCircle size={32} /></div>
                            <h4 className="font-bold text-sm sm:text-base text-emerald-300 mb-1">Resgatado!</h4>
                            <p className="text-[10px] sm:text-xs text-zinc-400">Printa e me manda!</p>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-800/80 flex items-center justify-center mb-3 text-emerald-400 shrink-0 border border-white/5">
                              {cupom.icon}
                            </div>
                            <h4 className="font-bold text-sm sm:text-base leading-tight mb-1 sm:mb-2">{cupom.title}</h4>
                            <p className="text-[10px] sm:text-xs text-zinc-400 leading-tight">{cupom.desc}</p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
              
            </div>
          </div>
        </main>
      </div>

      <StoryOverlay 
        isOpen={isStoryOpen} 
        onClose={() => setIsStoryOpen(false)} 
        stories={storiesData} 
      />

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
}