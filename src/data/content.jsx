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
  {
    contact: "Alice",
    date: "12 de Agosto de 2025",
    dialogue: [
      { who: "me", text: "heinnnn", time: "17:47" },
      { who: "me", text: "urgente", time: "17:47" },
      { who: "me", isLinkPreview: true, text: "https://www.instagram.com/_liviamunhozvaz_?igsh=MTBoZjA1NHk5djI3MQ%3D%3D", time: "17:47" },
      { who: "me", text: "conhece essa guria do emaus????", time: "17:47" },
      { who: "them", text: "Oii", time: "17:48" },
      { who: "them", text: "Sim", time: "17:48" },
      { who: "them", text: "Pq?", time: "17:48" },
      { who: "them", text: "Ela fez comigo", time: "17:48" },
      { who: "me", text: "ela era do teu grupo ou algo assim??", time: "17:48" },
      { who: "me", text: "ou quarto", time: "17:49" },
      { who: "me", text: "?", time: "17:49" },
      { who: "them", text: "Não", time: "17:49" },
      { who: "them", text: "Nem do quarto", time: "17:49" },
      { who: "them", text: "Não tive muito contato...", time: "17:49" },
      { who: "me", replyTo: "Não tive muito contato...", replyWho: "Alice", text: "merda", time: "17:50" },
      { who: "me", text: "ok", time: "17:50" },
      { who: "me", text: "obrigadinho", time: "17:50" },
      { who: "them", text: "Alípio... tu não vai me contar?", time: "17:50" },
      { who: "me", isSticker: true, text: "OBRIGADO AMIGO, VOCÊ É UM AMIGO", time: "17:57" },
      { who: "me", text: "mais uma pergunta", time: "18:03" },
      { who: "me", text: "tu sabia que o nome dela era livia??", time: "18:03" },
      { who: "them", text: "Como assim?", time: "18:04" },
      { who: "them", text: "Quando cheguei lá conheci ela... Lívia!", time: "18:04" },
      { who: "them", text: "Agora quando tu me mandou o Instagram, já sabia de quem se tratava", time: "18:04" },
      { who: "me", isAudio: true, text: "Não tem o que contar, só perguntei porque eu conheço ela, apenas isso.", time: "18:04" },
      { who: "them", text: "Éramos poucas...", time: "18:05" },
      { who: "me", text: "okkk", time: "18:05" },
      { who: "me", isAudio: true, text: "A verdade é que não tem muito conto não, mas não é nada mesmo. Eu e ela, a gente tá curtindo foto um do outro faz muito tempo, stories. Só que ela não posta quase nada de stories assim, e quando posta, são uns bagulhos que não tem como puxar assunto. É repostando coisa dos outros. Mas agora ela postou coisa do Emaús e eu pensei: é minha oportunidade agora. Sei lá, eu já não aguento mais. E aí eu pensei, pô, vou puxar assunto sobre o último Emaús. Mas eu pensei, e daí ela vai perguntar: 'Por quê?'. Aí eu pensei, pô, vou apelar pra quem fez Emaús. Aí eu me lembrei de ti. Eu pensei, pá, imagina se a Alice, tipo, se for amiga dela... Já vou inventar história aqui. Tipo, pá, ela comentou de ti isso aqui pra mim. E é isso.", time: "18:06" },
      { who: "me", isAudio: true, text: "Mas, nesse caso, nas vias de fato, eu vou falar que tu chegou a comentar sobre ela, sei lá, eu vou inventar alguma história ou qualquer coisa. Que tu achou ela muito legal, muito gente boa. Mesmo sem ter falado muito. Tá? Obrigado.", time: "18:07" },
      { who: "me", isAudio: true, text: "E se precisar, vou usar a Luana também. Vou falar que a Luana viu ela e falou que tinha uma guria muito linda no Emaús, sei lá, alguma coisa assim. Mas daí é um trunfo que eu vou guardar, super trunfo.", time: "18:07" },
      { who: "them", isAudio: true, text: "Alipio, eu tinha certeza que tu tava querendo puxar assunto com ela, tá? Pode dizer que ela foi... não sei, muito minha amiga não foi, mas pode dizer, pode falar no meu nome sim.", time: "18:11" }
    ]
  },
  {
    contact: "Carol Cruz",
    date: "28 de Outubro de 2025",
    dialogue: [
      { who: "them", text: "p festa da atlética em pelotas dia 1\n????????????\na nadi ta pilhando\nchamei o mika\nacho que vocês podiam chamar as ritinhas\nhahaahahahahahahahha", time: "16:04" },
      { who: "me", text: "bom bom diaaaa", time: "09:24" },
      { who: "them", text: "Bom dia querido, a Lívia é a única que, até agora, pilhou o rolê\nFica a vontade, qualquer coisa chama\nP comprar só link da minha atlética ahhahah\nÓtima semana p ti 😘😘", time: "10:21" },
      { who: "me", text: "opaaaa\nde repente fiquei muito mais interessado para ir nessa festa kkkk\nachei bem legal", time: "11:13" },
      { who: "them", text: "haahahahhhahaahha\nentão\nte ligaaaaa\nchama ela\njá te deixei uma baita deixa hahahaha", time: "11:18" }
    ]
  },
  {
    contact: "Lisbôa",
    date: "21 de Dezembro de 2025",
    dialogue: [
      { who: "me", isAudio: true, text: "E aí, meu querido Bença, como é que você tá? Cara, ontem eu tava, né, com o rolê da Lívia, né? E aí não ia ter como... Talvez eu, tipo, convidasse ela pra ir e tudo mais, mas tava... pô, nem quero falar, meu Deus.", time: "13:52" },
      { who: "them", isAudio: true, text: "Mas e ontem? Então, ontem teve um datezinho. Espero que tenha ocorrido tudo bem, né? Que tenha sido conforme o desejo do senhor. E que vocês estejam se entendendo, né? Estejam aí inaugurando uma relação dentro de uma relação. Ou uma relação até propriamente dita, né? Acho que vocês não eram tão próximos assim, como amigos. Mas, feliz de saber que tá tudo dando certo. Tá prosperando. Acho bom, acho bom. Acho um casal bonito.", time: "14:23" },
      { who: "me", isAudio: true, text: "Cara, não, deu tudo certo. Eu não reclamei, eu fico falando que deu certo até demais, sabe? Tipo certo, tipo assim... que sabe? Ali fudeu, pois é. Então eu me encontro nesta situação agora. Não achei que chegaria num nível assim, que eu estaria meio bobinho e coisa e tal. E a merda é que agora é só daqui a duas semanas pra gente se rever, né? Eu acho que vou para as bandas lá de Mostardas, acho que amanhã. E é isso, né? Olha lá, quem diria? Aí começam todas aquelas merdas de insegurança de novinho agora, que puta que pariu.", time: "14:41" }
    ]
  },
  {
    contact: "Hellen",
    date: "17 de Janeiro de 2026",
    dialogue: [
      { who: "me", text: "não vais conhecer minha esposa", time: "07:54" },
      { who: "them", text: "oi?", time: "07:54" },
      { who: "me", text: "sim", time: "07:54" },
      { who: "them", text: "quem? kkkk", time: "07:54" },
      { who: "me", text: "pq com namoro eu já estou contando agora", time: "07:54" },
      { who: "them", text: "ué gente\nque?????????\nQUE\nquem cara?", time: "07:55" },
      { who: "me", text: "já estou alçando o casamento.", time: "07:55" },
      { who: "them", text: "vai pedir em namoro?\nmeu deus\no que rolou", time: "07:55" },
      { who: "me", text: "não não calma KKKKKKKK\nsó estou bobinho agora\na Lívia\njá te contei sobre ela", time: "07:55" }
    ]
  },
  {
    contact: "Fred Frederico",
    date: "22 de Janeiro de 2026",
    dialogue: [
      { who: "them", text: "Investe\nAcho que vai dar bom\nGuria direita", time: "15:26" },
      { who: "them", text: "Isso vale mt coisa hj em dia", time: "15:27" },
      { who: "me", text: "cara sim\nconcordo e muito comigo", time: "15:37" },
      { who: "me", text: "não vou te mentir, é uma das coisas que ta me conquistando e muito na lívia", time: "15:38" },
      { who: "me", text: "acho que é mais curtir o momento, sabe?", time: "15:38" }
    ]
  },
  {
    contact: "vivi azevedo",
    date: "08 e 09 de Fevereiro de 2026",
    dialogue: [
      { who: "me", text: "o que mais ficasse sabendo? Me conteee", time: "18:45" },
      { who: "them", isAudio: true, text: "Fiquei sabendo que a guria que tu tá ficando é muito bonita, muito estilosa. Foram os comentários que eu ouvi, então parabéns. Fiquei sabendo da sua paixão.", time: "18:46" },
      { who: "them", isSticker: true, text: "🐶 Figurinha", time: "19:07" },
      { who: "me", isViewOnce: true, text: "Foto", time: "12:24" },
      { who: "me", text: "está aí a donzela", time: "12:24" },
      { who: "them", text: "KKKKKKKKKKKK", time: "12:30" },
      { who: "them", text: "lindinhossss", time: "12:30" },
      { who: "them", text: "tem que levar pra são simão", time: "12:30" }
    ]
  },
  {
    contact: "Hellen",
    date: "09 de Fevereiro de 2026",
    dialogue: [
      { who: "them", text: "amei a livia", time: "18:10" },
      { who: "them", text: "amei amei amei", time: "18:10" },
      { who: "them", text: "🫶", time: "18:10" },
      { who: "me", text: "não posso usar essa palavra\nsou suspeito", time: "18:14" },
      { who: "me", text: "mas ela é tri né", time: "18:14" },
      { who: "me", text: "que guria meu", time: "18:15" }
    ]
  },
  {
    contact: "Joana",
    date: "13 de Fevereiro de 2026",
    dialogue: [
      { 
        who: "me", 
        replyWho: "joana • Família TAV/MOST/OS...", 
        replyTo: "📷 Aqui 🥵", 
        text: "quase que eu li Livia ali na cidade", 
        time: "12:46" 
      },
      { who: "me", text: "a cabeça já ta desse jeito🤙", time: "12:47" },
      { who: "them", text: "🤣🤣🤣🤣🤣", time: "12:47" },
      { who: "them", text: "É o amoooooor", time: "12:47" }
    ]
  },
  {
    contact: "Lisbôa",
    date: "19 de Fevereiro de 2026",
    dialogue: [
      { who: "me", replyWho: "Lisbôa", replyTo: "Assalto dhdjddk", text: "olha a quaresma", time: "10:05" },
      { who: "me", text: "como não fiz disso, posso dizer", time: "10:05" },
      { who: "me", text: "ASSALTO", time: "10:05" },
      { who: "me", replyWho: "Você", replyTo: "🎤 Mensagem de voz (0:30)", text: "o homem pré apaixonado, é outro nível", time: "10:06", reaction: "❤️" },
      { who: "them", replyWho: "Você", replyTo: "olha a quaresma", text: "Não pode nada? DHDJDKDKKDLDDL", time: "10:06" },
      { who: "them", replyWho: "Você", replyTo: "o homem pré apaixonado, é outro nível", text: "Pré?", time: "10:07" },
      { who: "them", text: "Meu velho, pelo que vi no carnaval...", time: "10:07" },
      { who: "them", text: "Não tem nada de “pré”", time: "10:07" },
      { who: "them", text: "Pelo contrário shdjddkdkdkd", time: "10:07" },
      { who: "me", isAudio: true, text: "É que, tipo assim, o que eu falei do apaixonado é um pouco além pra mim, sabe? Se bem que ela tá demonstrando agora umas coisinhas assim, que, olha aqui, aí sim... Eu juro, juro pra ti, tá? Até antes ali do carnaval, até antes da segunda noite do carnaval, eu tava tipo: beleza, gostandinho, bastante. Agora que realmente tá rolando uma coisita. Porque daí ela vai fazendo... eu sou muito observador, eu observo muitos detalhes. E aí tem coisinhas que ela fazia: ela me abraçava, ela ficava me beijando, tipo, meu braço assim, sabe? Se escorando em mim assim o tempo todo. Aí hoje de manhã, cara, ela me mandou o link da live do Frei Gilson assim... aí eu tipo: 'Ai, que legal que tu tá mandando isso aqui.' E ela: 'Nem sabia se tu queria ou não, mas eu fiz questão de te mandar pra tu ver.' Coisinhas assim, pequenas, que aí pode ser... Eu tô falando por enquanto: pré-apaixonado, calma lá. Porque no momento que eu tiver apaixonado, eu realmente namoraria essa menina, e muito. Foda, foda, foda. É foda...", time: "10:09" }
    ]
  }
];

export const initialCoupons = [
  { id: 1, icon: <Wine size={24} />, title: "Vale Jantar", desc: "Eu cozinho ou a gente sai. Você escolhe." },
  { id: 2, icon: <Film size={24} />, title: "Vale Cinema", desc: "Sessão pipoca com filme à sua escolha." },
  { id: 3, icon: <Coffee size={24} />, title: "Vale Chimarrão", desc: "Um fim de tarde perfeito na praia." },
  { id: 4, icon: <Star size={24} />, title: "Vale Massagem", desc: "Nas costas ou nos pés pós-trabalho." }
];