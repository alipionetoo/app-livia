import React, { useState, useEffect } from 'react';
import { Play, Heart, Lock, CheckCircle, X, Disc, MessageCircle, Wine, Film, Coffee, Star, Image as ImageIcon, Clock, MapPin } from 'lucide-react';

// ==========================================
// 1. DADOS E CONTEÚDOS (Fácil Escalabilidade)
// ==========================================
const storiesData = [
  {
    date: "O Início",
    bgImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop", 
    title: "Como tudo começou...",
    text: "Antes mesmo de ficarmos, eu já sabia que você era diferente. Cada conversa era um sinal de que algo incrível estava por vir.",
    track: "Música de Teste",
    artist: "Som do Sistema",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  {
    date: "A Conexão",
    bgImage: "https://images.unsplash.com/photo-1529156069898-49953eb1f5ce?q=80&w=1000&auto=format&fit=crop",
    title: "Nossas Primeiras Saídas",
    text: "Eu lembro dos detalhes. As risadas, as músicas que compartilhamos. Ali eu já tava completamente na sua.",
    track: "Música Indie",
    artist: "Daily J",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    date: "28 de Março de 2026",
    bgImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    title: "O Pedido Oficial",
    text: "O dia que eu tomei coragem para oficializar o que o meu coração já sabia. Viramos um só.",
    track: "Sua Música Favorita",
    artist: "Banda X",
    audioSrc: ""
  },
  {
    date: "Hoje: 28 de Maio",
    bgImage: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop",
    title: "2 Meses Oficiais!",
    text: "Parece pouco tempo, mas a intensidade do que vivemos já enche uma vida inteira. Feliz nosso dia 28.",
    track: "O Nosso Som",
    artist: "Artista Y",
    audioSrc: ""
  }
];

const chatLogs = [
  { para: "Amigo", msg: "Mano, conheci uma guria muito diferente, a Lívia. Acho que me f*di hahaha, tô apaixonado." },
  { para: "A própria Lívia", msg: "Aquele papo 'Acho que a gente combina muito, o que tu acha?' 👀" },
  { para: "Amigo", msg: "Já comprei o presente, vou pedir ela em namoro amanhã. Me deseja sorte." }
];

const initialCoupons = [
  { id: 1, icon: <Wine size={24} />, title: "Vale Jantar", desc: "Eu cozinho ou a gente sai. Você escolhe." },
  { id: 2, icon: <Film size={24} />, title: "Vale Cinema", desc: "Sessão pipoca com filme à sua escolha." },
  { id: 3, icon: <Coffee size={24} />, title: "Vale Chimarrão", desc: "Um fim de tarde perfeito na praia." },
  { id: 4, icon: <Star size={24} />, title: "Vale Massagem", desc: "Nas costas ou nos pés pós-trabalho." }
];

// ==========================================
// 2. LÓGICA E COMPONENTE PRINCIPAL
// ==========================================
export default function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);
  const [secretRevealed, setSecretRevealed] = useState(false);
  
  const [timeTogether, setTimeTogether] = useState({ months: 0, days: 0, hours: 0, minutes: 0 });
  const [audioElement] = useState(new Audio());
  const STORY_DURATION = 10000;

  // Motor do Relógio
  useEffect(() => {
    const startDate = new Date('2026-03-28T00:00:00');
    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;
      const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(daysTotal / 30);
      const days = daysTotal % 30;
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setTimeTogether({ months, days, hours, minutes });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // Motor dos Stories (Progresso)
  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animateProgress = () => {
      if (!startTime) startTime = Date.now();
      const elapsed = Date.now() - startTime;
      const percentage = (elapsed / STORY_DURATION) * 100;

      if (percentage >= 100) {
        handleNextStory();
      } else {
        setStoryProgress(percentage);
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    if (isStoryOpen) {
      setStoryProgress(0);
      startTime = Date.now();
      animationFrameId = requestAnimationFrame(animateProgress);
    } else {
      setStoryProgress(0);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isStoryOpen, currentStoryIndex]);

  // Motor de Áudio
  useEffect(() => {
    if (isStoryOpen) {
      const currentStory = storiesData[currentStoryIndex];
      if (currentStory.audioSrc) {
        audioElement.src = currentStory.audioSrc;
        audioElement.play().catch(e => console.log("Áudio bloqueado", e));
      } else {
        audioElement.pause();
      }
    } else {
      audioElement.pause();
    }
    return () => audioElement.pause();
  }, [isStoryOpen, currentStoryIndex, audioElement]);

  // Controles
  const handleNextStory = () => {
    if (currentStoryIndex < storiesData.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      setIsStoryOpen(false);
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      setStoryProgress(0);
    }
  };

  const handleRedeemCoupon = (id) => {
    if (!redeemedCoupons.includes(id)) {
      setRedeemedCoupons([...redeemedCoupons, id]);
    }
  };

  // ==========================================
  // 3. RENDERIZAÇÃO DA INTERFACE (UI)
  // ==========================================
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background animado Global (Agora ocupa a tela toda de forma orgânica) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* CONTAINER PRINCIPAL (Responsivo: Ocupa mais espaço no desktop) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto min-h-screen flex flex-col px-4 sm:px-8 py-6 sm:py-10 pb-24">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8 sm:mb-12">
          <div>
            <p className="text-zinc-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-1">Nosso App</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Lívia & Eu
            </h1>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Perfil" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* MAIN CONTENT (Grid dinâmico: 1 coluna mobile, 2 colunas desktop) */}
        <main className="flex flex-col gap-6 sm:gap-8 flex-1">
          
          {/* DESTAQUE: BOTÃO DA RETROSPECTIVA (Ocupa sempre 100% da largura) */}
          <div 
            onClick={() => { setIsStoryOpen(true); setCurrentStoryIndex(0); }}
            className="w-full bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-[32px] p-1 relative overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-opacity duration-700 group-hover:opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="relative p-6 sm:p-10 pt-32 sm:pt-48 flex items-end justify-between">
              <div className="flex-1 pr-4">
                <span className="px-3 py-1.5 bg-red-500/80 backdrop-blur text-white text-[10px] sm:text-xs font-bold uppercase rounded-md flex items-center gap-1.5 w-max mb-3">
                  <Heart size={12} fill="currentColor" /> Especial 12/06
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-2">A Nossa<br/>História</h2>
                <p className="text-zinc-300 text-sm sm:text-base font-medium">Toque para ouvir e assistir a retrospectiva...</p>
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-black shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play size={24} fill="currentColor" className="ml-1 sm:ml-2 sm:scale-125" />
              </div>
            </div>
          </div>

          {/* GRID INFERIOR (Divide em 2 colunas no Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            
            {/* COLUNA ESQUERDA NO DESKTOP */}
            <div className="flex flex-col gap-6 sm:gap-8">
              
              {/* VAZAMENTOS / CHATS */}
              <section>
                <div className="flex justify-between items-end mb-4 px-1">
                  <h3 className="text-lg sm:text-xl font-bold">Provas do Crime 🕵️‍♂️</h3>
                  <span className="text-xs sm:text-sm text-zinc-400">Dez. 2025</span>
                </div>
                {/* Scroll horizontal fluido */}
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

              {/* CONTADOR AO VIVO */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <Clock size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold">Tempo Juntos</h3>
                </div>
                <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-[28px] p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
                  
                  <div className="flex justify-between items-center text-center relative z-10 px-2 sm:px-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl font-black text-white">{timeTogether.months}</span>
                      <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Meses</span>
                    </div>
                    <span className="text-2xl text-zinc-700 font-light pb-4">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl font-black text-white">{timeTogether.days}</span>
                      <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Dias</span>
                    </div>
                    <span className="text-2xl text-zinc-700 font-light pb-4">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl font-black text-white">{timeTogether.hours.toString().padStart(2, '0')}</span>
                      <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Horas</span>
                    </div>
                    <span className="text-2xl text-zinc-700 font-light pb-4">:</span>
                    <div className="flex flex-col items-center w-12 sm:w-14">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-400 tabular-nums">{timeTogether.minutes.toString().padStart(2, '0')}</span>
                      <span className="text-[10px] sm:text-xs text-emerald-400/80 uppercase tracking-wider font-bold mt-1 animate-pulse">Min</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* MENSAGEM SECRETA */}
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

            {/* COLUNA DIREITA NO DESKTOP */}
            <div className="flex flex-col gap-6 sm:gap-8">
              
              {/* MAPA */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <MapPin size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold">Nosso Lugarzinho</h3>
                </div>
                
                <div className="relative h-48 sm:h-56 rounded-[28px] overflow-hidden border border-white/10 group cursor-pointer shadow-lg">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-50 transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500"></div>
                  
                  {/* Ping Animation */}
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

              {/* GALERIA */}
              <section>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <ImageIcon size={20} className="text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold">Nossa Galeria</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="h-32 sm:h-40 rounded-[24px] bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center border border-white/10 shadow-md"></div>
                  <div className="col-span-2 h-28 sm:h-32 rounded-[24px] bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center border border-white/10 flex items-center justify-center bg-black/50 bg-blend-overlay cursor-pointer hover:bg-black/30 transition-all shadow-md">
                    <span className="font-bold text-sm sm:text-base bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">Ver todas as fotos</span>
                  </div>
                </div>
              </section>

              {/* CUPONS */}
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

      {/* OVERLAY DOS STORIES (Mantém-se FullScreen sempre) */}
      {isStoryOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in duration-300 overflow-hidden">
          
          <div 
            key={currentStoryIndex} 
            className="absolute inset-0 bg-cover bg-center opacity-70 sm:opacity-80 animate-[zoomInOut_15s_ease-in-out_infinite]"
            style={{ backgroundImage: `url('${storiesData[currentStoryIndex].bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/95"></div>

          <div className="relative z-50 pt-12 sm:pt-16 px-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
            <div className="flex gap-1.5 w-full">
              {storiesData.map((_, idx) => (
                <div key={idx} className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all ease-linear"
                    style={{ width: idx === currentStoryIndex ? `${storyProgress}%` : idx < currentStoryIndex ? '100%' : '0%' }}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/80 overflow-hidden shrink-0 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm sm:text-base text-white drop-shadow-md">
                  {storiesData[currentStoryIndex].date}
                </span>
              </div>
              <button 
                onClick={() => setIsStoryOpen(false)} 
                className="w-10 h-10 flex items-center justify-center text-white bg-black/40 rounded-full backdrop-blur-md shrink-0 hover:bg-black/60 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="relative z-40 flex-1 flex flex-col justify-end p-6 sm:p-12 pb-32 sm:pb-40 max-w-2xl mx-auto w-full pointer-events-none">
            <div key={`content-${currentStoryIndex}`} className="drop-shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-500">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                {storiesData[currentStoryIndex].title}
              </h2>
              <p className="text-zinc-100 text-base sm:text-xl drop-shadow-lg font-medium bg-black/40 p-5 sm:p-6 rounded-3xl backdrop-blur-md border border-white/10 leading-relaxed">
                {storiesData[currentStoryIndex].text}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-12 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[600px] z-50 bg-black/70 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-4 border border-white/10 shadow-2xl">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
              <Disc size={24} className="text-emerald-400 animate-[spin_3s_linear_infinite]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm sm:text-base text-white truncate">{storiesData[currentStoryIndex].track}</p>
              <p className="text-xs sm:text-sm text-zinc-400 truncate">{storiesData[currentStoryIndex].artist}</p>
            </div>
            <div className="flex gap-[3px] items-end h-5 mr-3 shrink-0">
              <div className="w-1.5 bg-emerald-400 animate-[bounce_0.8s_infinite] h-full rounded-t-full"></div>
              <div className="w-1.5 bg-emerald-400 animate-[bounce_1.2s_infinite] h-2/3 rounded-t-full"></div>
              <div className="w-1.5 bg-emerald-400 animate-[bounce_0.9s_infinite] h-4/5 rounded-t-full"></div>
            </div>
          </div>

          {/* Click Areas para navegação */}
          <div className="absolute top-32 bottom-32 left-0 w-1/3 z-30 cursor-pointer" onClick={handlePrevStory}></div>
          <div className="absolute top-32 bottom-32 right-0 w-2/3 z-30 cursor-pointer" onClick={handleNextStory}></div>
        </div>
      )}

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