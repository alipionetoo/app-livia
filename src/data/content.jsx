import React from 'react';
import { Wine, Film, Coffee, Star } from 'lucide-react';

export const storiesData = [
  {
    date: "Abertura",
    bgImage: "/img/IMG-20250630-WA0054.jpg", 
    title: "Bem-vinda à nossa história.",
    text: "Preparei essa retrospectiva para te mostrar um pouquinho de como eu vejo a gente. Aperte o play e deslize para reviver a nossa jornada até aqui.",
    track: "Asas",
    artist: "Maskavo",
    audioSrc: "/asas.mp3" 
  },
  {
    date: "A Conexão",
    bgImage: "/img/IMG-20260208-WA0034(1)(1)(1).jpg",
    title: "Nossas Primeiras Saídas",
    text: "Eu lembro dos detalhes. As risadas, as músicas que compartilhamos. Ali eu já tava completamente na sua.",
    track: "Música Indie",
    artist: "Daily J",
    audioSrc: "/dailyj.mp3"
  },
  {
    date: "12 de Fevereiro de 2026",
    videoSrc: "/video/VID_20260212_182753_008.mp4",
    title: "O Inter Perdeu 😂",
    text: "Você veio assistir o jogo do Inter aqui em casa achando que ia comemorar. O Inter perdeu, eu (como bom gremista) disfarcei a alegria, mas a verdade é que a melhor parte foi só dividir o sofá com você.",
    track: "Rivalidade Sadia",
    artist: "Futebol e Amor",
    audioSrc: ""
  },
  {
    date: "28 de Março de 2026",
    bgImage: "/img/20260402_215908.jpg",
    title: "O Pedido Oficial",
    text: "O dia que eu tomei coragem para oficializar o que o meu coração já sabia. Viramos um só.",
    track: "Sua Música Favorita",
    artist: "Banda X",
    audioSrc: ""
  },
  {
    date: "Hoje: 28 de Maio",
    bgImage: "/img/20260222_012652.jpg",
    title: "2 Meses Oficiais!",
    text: "Parece pouco tempo, mas a intensidade do que vivemos já enche uma vida inteira. Feliz nosso dia 28.",
    track: "O Nosso Som",
    artist: "Artista Y",
    audioSrc: ""
  }
];

export const chatLogs = [
  { para: "Amigo", msg: "Mano, conheci uma guria muito diferente, a Lívia. Acho que me f*di hahaha, tô apaixonado." },
  { para: "A própria Lívia", msg: "Aquele papo 'Acho que a gente combina muito, o que tu acha?' 👀" },
  { para: "Amigo", msg: "Já comprei o presente, vou pedir ela em namoro amanhã. Me deseja sorte." }
];

export const initialCoupons = [
  { id: 1, icon: <Wine size={24} />, title: "Vale Jantar", desc: "Eu cozinho ou a gente sai. Você escolhe." },
  { id: 2, icon: <Film size={24} />, title: "Vale Cinema", desc: "Sessão pipoca com filme à sua escolha." },
  { id: 3, icon: <Coffee size={24} />, title: "Vale Chimarrão", desc: "Um fim de tarde perfeito na praia." },
  { id: 4, icon: <Star size={24} />, title: "Vale Massagem", desc: "Nas costas ou nos pés pós-trabalho." }
];