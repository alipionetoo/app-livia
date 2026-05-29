import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function TimeCounter({ startDate }) {
  const [timeTogether, setTimeTogether] = useState({ months: 0, days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const start = new Date(startDate);
    
    const calculateTime = () => {
      const now = new Date();
      const diff = now - start;
      const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(daysTotal / 30);
      const days = daysTotal % 30;
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setTimeTogether({ months, days, hours, minutes });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000); // Atualiza a cada minuto
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 px-1">
        <Clock size={20} className="text-emerald-400" />
        <h3 className="text-lg sm:text-xl font-bold">Tempo Juntos</h3>
      </div>
      
      {/* CARD COM GLASSMORPHISM */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 hover:border-white/20 transition-all duration-500">
        
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
        <div className="flex justify-between items-center text-center relative z-10 px-2 sm:px-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">{timeTogether.months}</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Meses</span>
          </div>
          <span className="text-2xl text-white/30 font-light pb-4">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">{timeTogether.days}</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Dias</span>
          </div>
          <span className="text-2xl text-white/30 font-light pb-4">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">{timeTogether.hours.toString().padStart(2, '0')}</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold mt-1">Horas</span>
          </div>
          <span className="text-2xl text-white/30 font-light pb-4">:</span>
          <div className="flex flex-col items-center w-12 sm:w-14">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 tabular-nums drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">{timeTogether.minutes.toString().padStart(2, '0')}</span>
            <span className="text-[10px] sm:text-xs text-emerald-400/80 uppercase tracking-wider font-bold mt-1 animate-pulse">Min</span>
          </div>
        </div>
      </div>
    </section>
  );
}