import React, { useState, useEffect } from 'react';
import { X, Disc } from 'lucide-react';

export default function StoryOverlay({ isOpen, onClose, stories }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [audioElement] = useState(new Audio());
  const STORY_DURATION = 10000;

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

    if (isOpen) {
      setStoryProgress(0);
      startTime = Date.now();
      animationFrameId = requestAnimationFrame(animateProgress);
    } else {
      setStoryProgress(0);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isOpen, currentStoryIndex]);

  useEffect(() => {
    if (isOpen) {
      const currentStory = stories[currentStoryIndex];
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
  }, [isOpen, currentStoryIndex, audioElement]);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      setStoryProgress(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in duration-300 overflow-hidden">
      {stories[currentStoryIndex].videoSrc ? (
        <video
          key={`video-${currentStoryIndex}`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 sm:opacity-80"
        >
          <source src={stories[currentStoryIndex].videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div 
          key={`img-${currentStoryIndex}`} 
          className="absolute inset-0 bg-cover bg-center opacity-70 sm:opacity-80 animate-[zoomInOut_15s_ease-in-out_infinite]"
          style={{ backgroundImage: `url('${stories[currentStoryIndex].bgImage}')` }}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/95"></div>

      <div className="relative z-50 pt-12 sm:pt-16 px-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
        <div className="flex gap-1.5 w-full">
          {stories.map((_, idx) => (
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
              <img src="/img/IMG-20260428-WA0002.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm sm:text-base text-white drop-shadow-md">
              {stories[currentStoryIndex].date}
            </span>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-white bg-black/40 rounded-full backdrop-blur-md shrink-0 hover:bg-black/60 transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-40 flex-1 flex flex-col justify-end p-6 sm:p-12 pb-32 sm:pb-40 max-w-2xl mx-auto w-full pointer-events-none">
        <div key={`content-${currentStoryIndex}`} className="drop-shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            {stories[currentStoryIndex].title}
          </h2>
          <p className="text-zinc-100 text-base sm:text-xl drop-shadow-lg font-medium bg-black/40 p-5 sm:p-6 rounded-3xl backdrop-blur-md border border-white/10 leading-relaxed">
            {stories[currentStoryIndex].text}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[600px] z-50 bg-black/70 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-4 border border-white/10 shadow-2xl">
        <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
          <Disc size={24} className="text-emerald-400 animate-[spin_3s_linear_infinite]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm sm:text-base text-white truncate">{stories[currentStoryIndex].track}</p>
          <p className="text-xs sm:text-sm text-zinc-400 truncate">{stories[currentStoryIndex].artist}</p>
        </div>
        <div className="flex gap-[3px] items-end h-5 mr-3 shrink-0">
          <div className="w-1.5 bg-emerald-400 animate-[bounce_0.8s_infinite] h-full rounded-t-full"></div>
          <div className="w-1.5 bg-emerald-400 animate-[bounce_1.2s_infinite] h-2/3 rounded-t-full"></div>
          <div className="w-1.5 bg-emerald-400 animate-[bounce_0.9s_infinite] h-4/5 rounded-t-full"></div>
        </div>
      </div>

      <div className="absolute top-32 bottom-32 left-0 w-1/3 z-30 cursor-pointer" onClick={handlePrevStory}></div>
      <div className="absolute top-32 bottom-32 right-0 w-2/3 z-30 cursor-pointer" onClick={handleNextStory}></div>
    </div>
  );
}