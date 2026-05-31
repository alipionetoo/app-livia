import React, { useState } from 'react';
import { Heart, Play, Lock, MapPin, Image as ImageIcon, CheckCircle, ArrowLeft, MoreVertical, Mic, Link as LinkIcon } from 'lucide-react';
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
      
      {/* ORBES LUMINOSOS NO FUNDO */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-800/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto min-h-screen flex flex-col px-4 sm:px-8 py-6 sm:py-10 pb-24">
        
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <div>
            <p className="text-zinc-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-1">Nosso App</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-sm">
              Lívia & Eu
            </h1>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0">
            <img src="/img/IMG-20260208-WA0034(1)(1)(1).jpg" alt="Perfil" className="w-full h-full object-cover" />
          </div>
        </header>

        <main className="flex flex-col gap-6 sm:gap-8 flex-1">
          
          {/* CARD PRINCIPAL - HISTÓRIA */}
          <div 
            onClick={() => setIsStoryOpen(true)}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-1 relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[url('/img/20260402_215908.jpg')] bg-cover bg-center opacity-40 transition-opacity duration-700 group-hover:opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="relative p-6 sm:p-10 pt-32 sm:pt-48 flex items-end justify-between">
              <div className="flex-1 pr-4">
                <span className="px-3 py-1.5 bg-red-500/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase rounded-xl flex items-center gap-1.5 w-max mb-3 border border-white/20 shadow-lg">
                  <Heart size={12} fill="currentColor" /> Especial Namorados
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-2 drop-shadow-md">A Nossa<br/>História</h2>
                <p className="text-zinc-300 text-sm sm:text-base font-medium drop-shadow">Toque para reviver tudo...</p>
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-black shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-500">
                <Play size={24} fill="currentColor" className="ml-1 sm:ml-2 sm:scale-125" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            
            <div className="flex flex-col gap-6 sm:gap-8">
              
              {/* EMULADOR DO WHATSAPP */}
              <section>
                <div className="flex justify-between items-end mb-4 px-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white/90">Provas do Crime 🕵️‍♂️</h3>
                  <span className="text-xs sm:text-sm text-emerald-400 font-medium tracking-wide uppercase">Criptografado</span>
                </div>
                
                <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
                  {chatLogs.map((chat, idx) => (
                    <div key={idx} className="bg-[#0b141a] border border-zinc-800 rounded-[28px] w-[85vw] sm:w-[380px] shrink-0 flex flex-col h-[500px] snap-center shadow-xl overflow-hidden relative">
                      
                      {/* Top Bar - WhatsApp */}
                      <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between shrink-0 z-10 shadow-md">
                        <div className="flex items-center gap-3">
                          <ArrowLeft size={20} className="text-zinc-400" />
                          <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
                            <span className="text-white font-bold text-lg">{chat.contact.charAt(0)}</span>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-white font-semibold text-sm sm:text-base leading-tight truncate">{chat.contact}</h4>
                          </div>
                        </div>
                        <MoreVertical size={20} className="text-zinc-400" />
                      </div>

                      {/* Área de Mensagens (Scrollável) */}
                      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1.5 custom-scrollbar relative bg-[#0b141a]">
                        
                        {/* Balões de Chat e Datas Separadoras */}
                        {chat.dialogue.map((m, i) => {
                          
                          // Renderiza Divisória de Data
                          if (m.isDate) {
                            return (
                              <div key={i} className="flex justify-center mb-3 mt-1">
                                <span className="bg-[#182229] text-zinc-400 text-[10px] sm:text-[11px] px-3 py-1 rounded-lg shadow-sm font-medium">
                                  {m.date}
                                </span>
                              </div>
                            );
                          }

                          // Renderiza Mensagem de Sistema (Separador)
                          if (m.isSystem) {
                            return (
                              <div key={i} className="flex justify-center mb-3 mt-1">
                                <div className="bg-[#182229] border border-zinc-800/50 text-emerald-400/70 text-[10px] px-3 py-1.5 rounded-lg shadow-sm text-center flex items-center gap-1.5">
                                  <Lock size={10} />
                                  <span>{m.text}</span>
                                </div>
                              </div>
                            );
                          }

                          // Renderiza Figurinha
                          if (m.isSticker) {
                            return (
                              <div key={i} className={`flex flex-col relative max-w-[85%] ${m.who === 'me' ? 'self-end items-end' : 'self-start items-start'}`}>
                                <div className="bg-[#ffeb3b] text-black font-black text-center p-3 rounded-2xl border-4 border-black rotate-[-4deg] shadow-lg text-xs w-48 mb-1">
                                  {m.text}
                                </div>
                                <span className="text-[9px] text-white/50">{m.time}</span>
                              </div>
                            );
                          }

                          // Renderiza Mensagem Normal, Audio, Resposta, ou Foto Visualização Única
                          return (
                            <div 
                              key={i} 
                              className={`max-w-[85%] rounded-xl px-2.5 pt-1.5 pb-1 flex flex-col relative shadow-sm mb-1
                                ${m.who === 'me' 
                                  ? 'bg-[#005c4b] self-end rounded-tr-sm' 
                                  : 'bg-[#202c33] self-start rounded-tl-sm'}`}
                            >
                              {/* Elemento de Resposta (Reply) */}
                              {m.replyTo && (
                                <div className="bg-black/20 border-l-4 border-emerald-500 rounded p-1.5 mb-1.5 flex flex-col">
                                  <span className="text-[10px] text-emerald-400 font-bold leading-none mb-1">{m.replyWho}</span>
                                  <span className="text-[11px] text-white/70 line-clamp-3 leading-tight">{m.replyTo}</span>
                                </div>
                              )}

                              {/* Preview do Link do Instagram */}
                              {m.isLinkPreview && (
                                <div className="bg-[#0b141a] rounded-lg mb-1.5 overflow-hidden border border-zinc-700">
                                  <div className="p-2 flex gap-3 items-center bg-[#1c272e]">
                                    <div className="w-10 h-10 bg-zinc-800 rounded-md shrink-0 overflow-hidden flex items-center justify-center">
                                      <LinkIcon size={16} className="text-zinc-400" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-white text-xs font-bold leading-tight line-clamp-1">Lívia Munhoz Vaz (@_liviam...</span>
                                      <span className="text-zinc-400 text-[10px] mt-0.5">instagram.com</span>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Indicador de Visualização Única (Foto) */}
                              {m.isViewOnce && (
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <div className={`w-3.5 h-3.5 rounded-full border border-dashed flex items-center justify-center ${m.who === 'me' ? 'border-emerald-300' : 'border-emerald-400'}`}>
                                    <span className={`text-[8px] font-bold ${m.who === 'me' ? 'text-emerald-300' : 'text-emerald-400'}`}>1</span>
                                  </div>
                                  <span className={`text-[12px] font-bold italic ${m.who === 'me' ? 'text-emerald-300' : 'text-emerald-400'}`}>
                                    {m.text}
                                  </span>
                                </div>
                              )}

                              {/* Indicador de Áudio Transcrito */}
                              {m.isAudio && !m.text.includes("Áudio (") && (
                                <div className="flex items-center gap-1 mb-1.5 mt-0.5">
                                  <Mic size={12} className={m.who === 'me' ? 'text-emerald-300' : 'text-emerald-400'} />
                                  <span className={`text-[9px] font-bold uppercase tracking-wider ${m.who === 'me' ? 'text-emerald-300' : 'text-emerald-400'}`}>
                                    Áudio Transcrito
                                  </span>
                                </div>
                              )}
                              
                              {/* Texto Principal da Mensagem */}
                              {!m.isViewOnce && (
                                <p className={`text-[13px] sm:text-[14px] text-white/95 leading-snug whitespace-pre-wrap break-words 
                                  ${m.isAudio ? 'italic' : ''} 
                                  ${m.isLinkPreview ? 'text-blue-400 underline' : ''}`}
                                >
                                  {m.isAudio && !m.text.includes("Áudio (") ? `"${m.text}"` : m.text}
                                </p>
                              )}
                              
                              <span className="text-[9px] text-white/50 self-end mt-1 ml-4 leading-none">{m.time}</span>
                              
                              {/* Reação do WhatsApp */}
                              {m.reaction && (
                                <div className="absolute -bottom-3 right-2 bg-[#202c33] text-[10px] px-1.5 py-0.5 rounded-full border-[1.5px] border-[#0b141a] z-10 shadow-sm">
                                  {m.reaction}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <TimeCounter startDate="2026-03-28T00:00:00" />

              {/* CARD MENSAGEM SECRETA */}
              <div 
                onClick={() => setSecretRevealed(true)}
                className={`p-6 sm:p-8 text-center border cursor-pointer transition-all duration-500 rounded-[32px] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  ${secretRevealed ? 'bg-white/10 border-red-400/30' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1'}`}
              >
                {secretRevealed ? (
                  <div className="animate-in fade-in zoom-in duration-500">
                    <Heart size={36} fill="currentColor" className="text-red-500 mx-auto mb-3 sm:mb-4 animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 drop-shadow-md">Para a Lívia</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md mx-auto">
                      Cada dia com você é uma música nova na minha playlist favorita. Obrigado por esses 2 meses incríveis, e um feliz primeiro Dia dos Namorados pra nós! ❤️
                    </p>
                  </div>
                ) : (
                  <div>
                    <Lock size={36} className="text-emerald-400 mx-auto mb-3 sm:mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
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
                  <h3 className="text-lg sm:text-xl font-bold text-white/90">Nosso Lugarzinho</h3>
                </div>
                
                <div className="relative h-48 sm:h-56 rounded-[32px] overflow-hidden border border-white/10 group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="absolute inset-0 bg-[url('/img/IMG-20250630-WA0054.jpg')] bg-cover bg-center opacity-60 transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500"></div>
                  
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-emerald-500/40 rounded-full absolute animate-ping"></div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center relative border border-white/30 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                        <MapPin size={24} className="text-emerald-400 ml-[1px] mt-[1px]" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl p-4 rounded-[24px] border border-white/20 shadow-lg flex justify-between items-center transition-all duration-500 group-hover:bg-white/15">
                    <div>
                      <p className="text-base sm:text-lg font-bold text-white leading-tight mb-1">Praia do Cassino</p>
                      <p className="text-xs sm:text-sm text-zinc-300">Onde a mágica sempre acontece 🌊</p>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
                      <Heart size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <ImageIcon size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white/90">Nossa Galeria</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('/img/20260214_014802.jpg')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('/img/IMG-20260216-WA0047.jpg')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="col-span-2 h-28 sm:h-32 rounded-[24px] bg-zinc-800 bg-[url('/img/IMG-20260126-WA0062.jpg')] bg-cover bg-center border border-white/10 flex items-center justify-center bg-black/40 bg-blend-overlay cursor-pointer hover:bg-black/20 transition-all shadow-md group">
                    <span className="font-bold text-sm sm:text-base bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/20 shadow-xl group-hover:bg-white/20 transition-all duration-500">
                      Ver todas as fotos
                    </span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-bold mb-4 px-1 text-white/90">Cupons de Namorados 🎟️</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {initialCoupons.map((cupom) => {
                    const isRedeemed = redeemedCoupons.includes(cupom.id);
                    return (
                      <div 
                        key={cupom.id}
                        onClick={() => handleRedeemCoupon(cupom.id)}
                        className={`p-4 sm:p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-500 rounded-[32px] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                          ${isRedeemed ? 'bg-emerald-500/10 border-emerald-500/30 scale-[0.98]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1'}`}
                      >
                        {isRedeemed ? (
                          <div className="flex flex-col items-center justify-center h-full w-full py-2">
                            <div className="text-emerald-400 mb-2 animate-bounce"><CheckCircle size={32} /></div>
                            <h4 className="font-bold text-sm sm:text-base text-emerald-300 mb-1 drop-shadow">Resgatado!</h4>
                            <p className="text-[10px] sm:text-xs text-zinc-400">Printa e me manda!</p>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center mb-3 text-emerald-400 shrink-0 border border-white/10 shadow-inner">
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
        /* Scrollbar mais grossa e visível para Desktop */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.4); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(16, 185, 129, 0.8); }
        
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
}