const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livros = [
  {
    id: 1,
    name: "Terror na Orla dos Caranguejos - Alexander Pereira",
    sumario:
      "São dias frios na Orla dos Crangueijos. Após o surgimento de uma frente fria sem explicação na cidade tropical, e uma onda de assassinatos, moradores e forças policiais se mobilizam para resolver os mistérios.",
    preco: 49.99,
    pictureURL: "/inputs/t1.png",
    alt: "Terror na Orla dos Caranguejos - Alexander Pereira",
    title: "Terror na Orla dos Caranguejos - Alexander Pereira",
    href: "1",
    categoria: "terror",
    audio: "/inputs/TerrorNaOrlaDosCaranguejos.mp3",
  },
  {
    id: 2,
    name: "Ensaios do Além - Francis Leopoldo",
    sumario:
      "No último livro do autor Francis Leopoldo, são contadas várias histórias aterrorizantes e independentes umas das outras. Cada capítulo conta com uma dose de terror de arrepiar os cabelos, com um humor ácido que só o autor sabe trazer.",
    preco: 32.95,
    pictureURL: "/inputs/t2.png",
    alt: "Ensaios do Além - Francis Leopoldo",
    title: "Ensaios do Além - Francis Leopoldo",
    href: "2",
    categoria: "terror",
    audio: "/inputs/EnsaiosDoAlém.mp3",
  },
  {
    id: 3,
    name: "O Mistério da Bússola Fantasma - Jena McCarty",
    sumario:
      "Com doses de suspense e muito terror, a autora Jena McCarty traz uma história assustadora do começo ao fim. Uma bússola almadiçoada, várias mortes, e muito mistério são apenas uma parte deste best-seller de terror.",
    preco: 59.99,
    pictureURL: "/inputs/t3.png",
    alt: "O Mistério da Bússola Fantasma - Jena McCarty",
    title: "O Mistério da Bússola Fantasma - Jena McCarty",
    href: "3",
    categoria: "terror",
    audio: "/inputs/OMistérioDaBússolaFantasma.mp3",
  },
  {
    id: 4,
    name: "Fogo e Sombras: A Dança do Anoitecer - George J.J. Carlin",
    sumario:
      "Fogo e Sombras: A Dança do Anoitecer é o segundo volume do já consagrado autor de terror George J.J. Carlin. Em uma cidade assolada por uma doença que impede os moradores de saírem à luz do sol, a luta pela vida se torna ainda mais intensa quando criaturas chamadas Skrímsli, ameaçam a vida na cidade.",
    preco: 19.99,
    pictureURL: "/inputs/t4.png",
    alt: "Fogo e Sombras: A Dança do Anoitecer - George J.J. Carlin",
    title: "Fogo e Sombras: A Dança do Anoitecer - George J.J. Carlin",
    href: "4",
    categoria: "terror",
    audio: "/inputs/FogoESombrasADançaDoAnoitecer.mp3",
  },
  {
    id: 5,
    name: "2084: O Assassino de Metacity - Emma Mary",
    sumario:
      "No ano de 2084 uma onda de assassinatos assola a cidade de Metacity. O assassino, ao que tudo aponta, seria um ciborgue foragido da prisão de segurança máxima do distrito de Nightcraw.",
    preco: 22.99,
    pictureURL: "/inputs/t5.png",
    alt: "2084: O Assassino de Metacity - Emma Mary",
    title: "2084: O Assassino de Metacity - Emma Mary",
    href: "5",
    categoria: "terror",
    audio: "/inputs/OAssassinoDeMetacity.mp3",
  },
  {
    id: 6,
    name: "Campos do Medo - John Pizzolatto",
    sumario:
      "O ano é 1400 e uma praga tomou conta da cidade de Citytown. Na busca por acabar com a praga os moradores começam a fazer sacrifícios, mas as consequências desses sacrifícios podem ser mais aterrorizantes que a prórpia praga.",
    preco: 49.99,
    pictureURL: "/inputs/t6.png",
    alt: "Campos do Medo - John Pizzolatto",
    title: "Campos do Medo - John Pizzolatto",
    href: "6",
    categoria: "terror",
    audio: "/inputs/CamposDoMedo.mp3",
  },
  {
    id: 7,
    name: "Não há super-herois",
    sumario:
      "Em 2022 um ataque terrorista aconteceu na Europa chocando o mundo todo. Com medo de que algo desse tipo possa acontecer de novo, os presidentes de grandes nações se unem para descobrir quem está por trás disso sem saber que o inimigo está mais próximo que eles imaginam...",
    preco: 200.99,
    pictureURL: "/inputs/a6.png",
    alt: "Não há super-herois",
    title: "Não há super-herois",
    href: "7",
    categoria: "acao",
    audio: "/inputs/NãoHáSuper-Herois.mp3",
  },
  {
    id: 8,
    name: "Cemitério dos perdedores é silencioso",
    sumario:
      "O inimigo número 1 do FBI volta a ativa depois de anos sem ninguém saber onde ele estava se escondendo. Esse livro conta a história de como o FBI realizou a operação que foi atrás do homem mais procurado da história do mundo policial.",
    preco: 89.99,
    pictureURL: "/inputs/a5.png",
    alt: "Cemitério dos perdedores é silencioso",
    title: "Cemitério dos perdedores é silencioso",
    href: "8",
    categoria: "acao",
    audio: "/inputs/CemitérioDosPerdedoresÉSilencioso.mp3",
  },
  {
    id: 9,
    name: "O sangue revela tudo",
    sumario:
      "Em 1976 as nações entraram em guerra e soldados foram convocados de ambos os lados para o campo de batalha. Um soldado se destaca quando suas habilidades de matança aflorescem, será que ele vai conseguir se livrar da iminente emboscada que o inimigo prepara?",
    preco: 78.59,
    pictureURL: "/inputs/a4.png",
    alt: "O sangue revela tudo",
    title: "O sangue revela tudo",
    href: "9",
    categoria: "acao",
    audio: "/inputs/OSangueRevelaTudo.mp3",
  },
  {
    id: 10,
    name: "Em busca da arma perdida",
    sumario:
      "Tendo vivenciado o assassinato do seu pai quando criança, Edgar Phoenix vai atrás do assassino quando ve o revólver que foi roubado do seu pai naquela mesma noite.",
    preco: 91.99,
    pictureURL: "/inputs/a3.png",
    alt: "Em busca da arma perdida",
    title: "Em busca da arma perdida",
    href: "10",
    categoria: "acao",
    audio: "/inputs/EmBuscaDaArmaPerdida.mp3",
  },
  {
    id: 11,
    name: "O mundo não é amistoso",
    sumario:
      "Dustin Peralta foi criado pelo seu pai, um impiedoso Coronel, e com ele aprendeu as mais variadas táticas sobre como vencer uma guerra. Agora com a morte de seu pai cabe a ele guiar o grande exército em busca de conquistar novas terras.",
    preco: 40.99,
    pictureURL: "/inputs/a2.png",
    alt: "O mundo não é amistoso",
    title: "O mundo não é amistoso",
    href: "11",
    categoria: "acao",
    audio: "/inputs/OMundoNãoÉAmistoso.mp3",
  },
  {
    id: 12,
    name: "Hasta la vista, Baby",
    sumario:
      "Ameaçado de morte pela temida máfia japonesa, Humberto tem que juntar seu antigos amigos de golpe para roubar um banco e sanar sua dívida.",
    preco: 10.99,
    pictureURL: "/inputs/a1.png",
    alt: "Hasta la vista, Baby",
    title: "Hasta la vista, Baby",
    href: "12",
    categoria: "acao",
    audio: "/inputs/HastaLaVistaBaby.mp3",
  },
  {
    id: 13,
    name: "CATastrofe",
    sumario:
      "De Takaruna Kombi, um slice of life que conta sobre o sumiço de um gato no prédio, seus moradores até então desconhecidos começam a compartilhar suas vidas e histórias que mostram que estão ligados a eles e ao gato a mais tempo do que imaginavam.",
    preco: 59.99,
    pictureURL: "/inputs/m1.png",
    alt: "CATastrofe",
    title: "CATastrofe",
    href: "13",
    categoria: "manga",
    audio: "/inputs/CATastrofe.mp3",
  },
  {
    id: 14,
    name: "KenSham'a Way",
    sumario:
      "De Takama Dera Nelle, conta a história de Himura Ken, um contador de histórias nato que sempre chega atrasado no trabalho e revela os detalhes sobre o inicio de seu dia para seu chefe. Monstros, Guerras e velhinhas atravessando a rua, tudo pode ser uma nova forma gambelar seu chefe.",
    preco: 20.21,
    pictureURL: "/inputs/m5.png",
    alt: "KenSham'a Way",
    title: "KenSham'a Way",
    href: "14",
    categoria: "manga",
    audio: "/inputs/KenSham'aWay.mp3",
  },
  {
    id: 15,
    name: "Sora no Boken no hakai Kagaminokuninoarisu",
    sumario:
      "De sotapan noz, uma trama shounem pra ninguém botar defeito,  a doce Akisa Harino ao olhar através de uma janela encontra asika onirah, alguém idêntica a ela em aparência porem possui uma aura perversa, ambas gritam ao se verem surgindo duas auras, um lobo e um dragão, com a realidade destruída elas precisam se unir para descobrir como isso aconteceu.",
    preco: 19.9,
    pictureURL: "/inputs/m4.png",
    alt: "Sora no Boken no hakai Kagaminokuninoarisu",
    title: "Sora no Boken no hakai Kagaminokuninoarisu",
    href: "15",
    categoria: "manga",
    audio: "/inputs/SoraNoBokenNoHakaiKagaminoKuninoarisu.mp3",
  },
  {
    id: 16,
    name: "Muteless",
    sumario:
      "De Vitor Willlian Geraldo, &quot;o mundo mudou quando o som acabou&quot; , foram as palavras do meu avô tempos antes de partir. após alguns anos invadi o seu sótão e dentro dele havia alguns equipamentos que nunca vi. eles despertaram algo bem maior que sentimentos, descobri a musica, uma força que entrava na minha alma desbloqueando um potencial que o mundo tentou calar. Com o poder da voz de Osíris pude dizer minha primeira palavra. esse é o começo da minha história e não está nem um pouco longe de acabar.",
    preco: 200.91,
    pictureURL: "/inputs/m3.png",
    alt: "Muteless",
    title: "Muteless",
    href: "16",
    categoria: "manga",
    audio: "/inputs/Muteless.mp3",
  },
  {
    id: 17,
    name: "I love you, drawer",
    sumario:
      "De Irato Lovin, conta a historia de um mangaká que ama seus desenhos por mais que não tenham feito sucesso, no meio de uma tarde de trabalho quando seu primeiro one shot ia ser publicado por uma grande empresa percebe que seus desenhos tem mudado de lugar e até sumido de lá! até que se revelando, eles mesmos começam a mostrar maneiras para de se tornar o melhor mangaká do Japão da sua era.",
    preco: 19.99,
    pictureURL: "/inputs/m2.png",
    alt: "I love you, drawer",
    title: "I love you, drawer",
    href: "17",
    categoria: "manga",
    audio: "/inputs/ILoveYouDrawer.mp3",
  },
  {
    id: 18,
    name: "Another Level",
    sumario:
      "De Yuri Weilemann, a poucos dias de seu casamento um notável mestre dos códigos recebe a missão de treinar um grupo de iniciantes nas artes práticas, com a agenda cheia e muita confusão mental ele usa seu recurso final, uma inteligência artificial que copia e cria clones virtuais dele, assim resolvendo seus problemas. tudo dá errado quando os próprios clones ganham consciência e encontram formas de dominar o mundo através dos seus conhecimentos, agora cabe ao próprio e seu grupo enfrentar os poderosos seres denominados YuriGPT contra o terrível declínio da terra.",
    preco: 500,
    pictureURL: "/inputs/m6.png",
    alt: "Another Level",
    title: "Another Level",
    href: "18",
    categoria: "manga",
    audio: "/inputs/AnotherLevel.mp3",
  },
  {
    name: "Aquele belo par de olhos",
    id: 19,
    sumario:
      "Anne estava tão confusa com tudo o que estava acontecendo em sua vida, tantas mudanças e confusões, mas de repente parece que tudo se acalmou com aquele belo par de olhos olhando fixamente para ela. Aqueles olhos pareciam que sorriam para ela, e então Anne saiu do transe após duas meninas passarem em sua frente fofocando sobre algo aleatório...",
    preco: 150.9,
    pictureURL: "/inputs/Muteless_2.png",
    alt: "Aquele belo par de olhos",
    title: "Aquele belo par de olhos",
    href: "19",
    categoria: "romance",
    audio: "/inputs/AqueleBeloParDeOlhos.mp3",
  },
  {
    name: "Um beijo à meia-noite",
    id: 20,
    sumario:
      "Tudo começou com um beijo à meia-noite. Todos já tinham se recolhido para suas casas, mas lá estava eu, fugindo dos meus pais, por aqueles becos escuros apenas com uma pequena lamparina que mal iluminava o caminho. Ao virar um dos becos, me esbarrei com um guarda caindo sobre ele...",
    preco: 45.9,
    pictureURL: "/inputs/love_6.png",
    alt: "Um beijo à meia-noite",
    title: "Um beijo à meia-noite",
    href: "20",
    categoria: "romance",
    audio: "/inputs/UmBeijoàMeia-Noite.mp3",
  },
  {
    name: "O campo estrelado",
    id: 21,
    sumario:
      "Estava eu numa bela noite de sexta-feira, deitada sobre a grama do campo, observando as estrelas, quando de repente avistei no céu uma luz azul, diferente dos demais corpos estelares. Era um formato de um corpo. Não acreditei no que meus olhos estavam vendo. Era um homem esbelto com uma beleza surreal. Nunca tinha visto algo assim. Ele foi chegando perto de mim. Meu coração estava a mil mal conseguia me mover...",
    preco: 65.9,
    pictureURL: "/inputs/love_1.png",
    title: "O campo estrelado",
    href: "21",
    categoria: "romance",
    audio: "/inputs/CampoEstrelado.mp3",
  },
  {
    name: "Não há distância para o amor",
    id: 22,
    sumario:
      "Tudo que eu tinha era ele, e lá estava ele na porta de embarque para o outro lado do mundo, sem previsão de volta, sem aquele sorriso no rosto que eu amo. E o pior de tudo... sem mim. Tudo o que ele conseguiu dizer quando nós demos o último abraço foi: 'Não há distância para o amor, eu te amo Elise e prometo voltar por nós...",
    preco: 75.9,
    pictureURL: "/inputs/love.png",
    alt: "Não há distância para o amor",
    title: "Não há distância para o amor",
    href: "22",
    categoria: "romance",
    audio: "/inputs/NãoHáDistânciaParaOAmor.mp3",
  },
  {
    name: "Detetive do amor",
    id: 23,
    sumario:
      "E lá estava Grace, a detetive mais descolada que vocês poderiam conhecer. Ela tinha tudo que um detetive precisaria ter para conseguir desvendar os maiores casos de Tenessi. Até que, um dia, Grace se deparou com um caso do qual ela não conseguia desvendar: o roubo do Banco Central. O presidente estava maluco com tanta falta de informação sobre o roubo. Só ninguém esperava que Grace se apaixonaria pelo criminoso, que aliás, era o filho do...",
    preco: 85.9,
    pictureURL: "/inputs/Muteless_4.png",
    alt: "Detetive do amor",
    title: "Detetive do amor",
    href: "23",
    categoria: "romance",
    audio: "/inputs/DetetiveDoAmor.mp3",
  },
  {
    name: "O amor em tempos de guerra",
    id: 24,
    sumario:
      "Tudo estava um caos em meu país, as forças armadas da Ilha Montina estavam por todos os lados, destruindo tudo o que viam pela frente. Era um cenário catastrófico. Perdi meus pais na guerra, sentia uma falta imensa dos meus amigos, e cá estava eu, fugindo e me escondendo dos soldados Montineses, até que um dia entrou dois soldados no meu esconderijo. Um deles olhou em minha direção, mas não fez nada, apenas chamou seu companheiro dizendo: 'Vamos, Carleu, não há ninguém aqui..",
    preco: 99.9,
    pictureURL: "/inputs/Muteless_3.png",
    alt: "O amor em tempos de guerra",
    title: "O amor em tempos de guerra",
    href: "24",
    categoria: "romance",
    audio: "/inputs/OAmorEmTemposDeGuerra.mp3",
  },
  {
    id: 25,
    name: "O Dragão negro albino",
    sumario:
      "Fumaça é um dragão negro albino com a habilidade de cuspir fogo negro durante o dia e raio azul à noite. Ele é o protetor de uma pequena vila de aldeões bondosos que o acolheram e protegeram.",
    preco: 199.9,
    pictureURL: "/inputs/dragna.png",
    alt: "O Dragao negro albino",
    title: "O Dragao negro albino",
    href: "25",
    categoria: "fantasia",
    audio: "/inputs/ODragaoNegroAlbino.mp3",
  },
  {
    id: 26,
    name: "Eryndor, o exilado",
    sumario:
      "Eryndor, um jovem fascinado pela magia, é treinado por um feiticeiro mal e descobre seus verdadeiros planos. Depois de anos isolado, ele retorna para enfrentar seu antigo mentor e proteger a floresta onde cresceu.",
    preco: 99.9,
    pictureURL: "/inputs/eryndor.png",
    alt: "Eryndor, o exilado",
    title: "Eryndor, o exilado",
    href: "26",
    categoria: "fantasia",
    audio: "/inputs/EryndorOExilado.mp3",
  },
  {
    id: 27,
    name: "Mundo de Eldoria",
    sumario:
      "Em um mundo de fantasia chamado Eldoria, o herói Kael lidera a luta contra demônios liderados pelo senhor das trevas Zathar. Com a ajuda dos guerreiros de Eldoria e aliados dragões, eles enfrentam uma batalha épica para restaurar a paz.",

    preco: 59.9,
    pictureURL: "/inputs/meldoria.png",
    alt: "Mundo de Eldoria",
    title: "Mundo de Eldoria",
    href: "27",
    categoria: "fantasia",
    audio: "/inputs/MundoDeEldoria.mp3",
  },
  {
    id: 28,
    name: "A Jornada da inocência",
    sumario:
      "Em Runeterra, a rainha elfa Illyria é acusada injustamente de assassinar o rei humano. Com a ajuda do jovem Finn, ela começa uma jornada para provar sua inocência enquanto enfrenta perigos e conspirações.",

    preco: 49.9,
    pictureURL: "/inputs/jinocencia.png",
    alt: "A Jornada da inocência",
    title: "A Jornada da inocência",
    href: "28",
    categoria: "fantasia",
    audio: "/inputs/AJornadaDaInocência.mp3",
  },
  {
    id: 29,
    name: "Alan, o aventureiro",
    sumario:
      "Alan, um jovem aventureiro, descobre uma porta mágica que o leva para um mundo repleto de magia e fantasia. Ele viaja por diferentes mundos, vivendo aventuras incríveis e conhecendo novos amigos.",

    preco: 29.9,
    pictureURL: "/inputs/alanavent.png",
    alt: "Alan, o aventureiro",
    title: "Alan, o aventureiro",
    href: "29",
    categoria: "fantasia",
    audio: "/inputs/AlanOAventureiro.mp3",
  },
  {
    id: 30,
    name: "O Filho da União proibida",
    sumario:
      "Em um mundo dividido em duas nações, fogo e água, o nascido de um manipulador do fogo e uma manipuladora de água, Kira. O fruto de uma união proibida, treinado pelo poderoso macaco e seus pais.",

    preco: 99.9,
    pictureURL: "/inputs/filhodau.png",
    alt: "O Filho da União proibida",
    title: "O Filho da União proibida",
    href: "30",
    categoria: "fantasia",
    audio: "/inputs/OFilhoDaUniãoProibida.mp3",
  },
];

document.querySelector(".searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
});

document.querySelector("#terror").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#terror").setAttribute("disabled", true);
  buttonTerror();
});

document.querySelector("#acao").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#acao").setAttribute("disabled", true);
  buttonAcao();
});

document.querySelector("#manga").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#manga").setAttribute("disabled", true);
  buttonManga();
});

document.querySelector("#fantasia").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#fantasia").setAttribute("disabled", true);
  buttonFantasia();
});

document.querySelector("#romance").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#romance").setAttribute("disabled", true);
  buttonRomance();
});

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#home").setAttribute("disabled", true);
  buttonHome();
});

const enableButtons = () => {
  document.querySelector("#home").removeAttribute("disabled");
  document.querySelector("#terror").removeAttribute("disabled");
  document.querySelector("#manga").removeAttribute("disabled");
  document.querySelector("#romance").removeAttribute("disabled");
  document.querySelector("#fantasia").removeAttribute("disabled");
  document.querySelector("#acao").removeAttribute("disabled");
};

const buttonHome = () => {
  var htmlString = "";

  document.querySelector(".headerBotton").id = "homeB";
  document.querySelector("main").className = "home";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonTerror = () => {
  var htmlString = "";

  var terrorAba = livros.filter((livro) => livro.categoria == "terror");
  terrorAba.forEach((livro, i) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".headerBotton").id = "terrorB";
  document.querySelector("main").className = "terror";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonAcao = () => {
  var htmlString = "";

  var acaoAba = livros.filter((livro) => livro.categoria == "acao");
  acaoAba.forEach((livro, i) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".headerBotton").id = "acaoB";
  document.querySelector("main").className = "acao";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonManga = () => {
  var htmlString = "";

  var mangaAba = livros.filter((livro) => livro.categoria == "manga");
  mangaAba.forEach((livro, i) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".headerBotton").id = "mangaB";
  document.querySelector("main").className = "manga";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonFantasia = () => {
  var htmlString = "";

  var fantasiaAba = livros.filter((livro) => livro.categoria == "fantasia");
  fantasiaAba.forEach((livro, i) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".headerBotton").id = "fantasiaB";
  document.querySelector("main").className = "fantasia";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonRomance = () => {
  var htmlString = "";

  var romanceAba = livros.filter((livro) => livro.categoria == "romance");
  romanceAba.forEach((livro, i) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".headerBotton").id = "romanceB";
  document.querySelector("main").className = "romance";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};

function changeButtons() {
  if (document.querySelector(".headerBotton").id == "terrorB") {
    document.querySelector(".homeBtn").src = "/inputs/terror_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/terror_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/terror_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/terror_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/terror_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/terror_a.png";
  }
  if (document.querySelector(".headerBotton").id == "homeB") {
    document.querySelector(".homeBtn").src = "/inputs/principal_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/principal_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/principal_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/principal_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/principal_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/principal_a.png";
  }
  if (document.querySelector(".headerBotton").id == "mangaB") {
    document.querySelector(".homeBtn").src = "/inputs/manga_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/manga_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/manga_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/manga_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/manga_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/manga_a.png";
  }
  if (document.querySelector(".headerBotton").id == "fantasiaB") {
    document.querySelector(".homeBtn").src = "/inputs/fantasia_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/fantasia_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/fantasia_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/fantasia_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/fantasia_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/fantasia_a.png";
  }
  if (document.querySelector(".headerBotton").id == "romanceB") {
    document.querySelector(".homeBtn").src = "/inputs/romance_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/romance_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/romance_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/romance_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/romance_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/romance_a.png";
  }
  if (document.querySelector(".headerBotton").id == "acaoB") {
    document.querySelector(".homeBtn").src = "/inputs/acao_p.png";
    document.querySelector(".terrorBtn").src = "/inputs/acao_t.png";
    document.querySelector(".mangaBtn").src = "/inputs/acao_m.png";
    document.querySelector(".romanceBtn").src = "/inputs/acao_r.png";
    document.querySelector(".fantasiaBtn").src = "/inputs/acao_f.png";
    document.querySelector(".acaoBtn").src = "/inputs/acao_a.png";
  }
}

const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", () => {
  if (document.querySelector(".headerBotton").style.display == "none") {
    document.querySelector(".headerBotton").style.display = "flex";
  } else {
    document.querySelector(".headerBotton").style.display = "none";
  }
});

const toggleButton2 = document.querySelector("#toggleButton2");

toggleButton2.addEventListener("click", () => {
  if (document.querySelector(".searchTerm").style.display == "none") {
    document.querySelector(".searchTerm").style.display = "flex";
  } else {
    document.querySelector(".searchTerm").style.display = "none";
  }
});

document.querySelector(".searchTerm").addEventListener("input", (e) => {
  document.querySelector(".searchButton").setAttribute("disabled", true);
  if (e.target.value.length >= 3) {
    document.querySelector(".searchButton").removeAttribute("disabled");
    handleSuggestions(e.target.value);
  } else {
    closeSuggestions();
  }
});

const handleSuggestions = (searchValue) => {
  const filteredbooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  var htmlString = "";
  filteredbooks.forEach((livro) => {
    htmlString += ` <div class='preview'><img src='${livro.pictureURL}' onclick="selectLivro('${livro.name}','${livro.categoria}')" width='100px'>
    <span class='livroSuggestion' onclick="selectLivro('${livro.name}','${livro.categoria}')">${livro.name}</span> </div>`;
  });

  document.querySelector("#sugestoes").innerHTML = htmlString;
  document.querySelector("#sugestoes").style.display = "flex";
};

const selectLivro = (livroName, categoria) => {
  document.querySelector(".searchTerm").value = livroName;
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
  document.querySelector("main").className = categoria;
  document.querySelector(".headerBotton").id = categoria + "B";
  changeButtons();
  closeSuggestions();
};

const searchBook = () => {
  var htmlString = "";
  const searchValue = document.querySelector(".searchTerm").value;
  const filteredBooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (filteredBooks.length > 0) {
    filteredBooks.forEach((livro, i) => {
      htmlString += `<div class="livro">
      <div id="imagemLivro${i}"> <audio id="${livro.href}" src="${livro.audio}"></audio>
     <a onclick="playAudio(${i})" href="#"> <img src="${livro.pictureURL}" alt="${livro.alt}" title="${livro.title}"></a></div>
      <div id="bookName"><h2 class="name">${livro.name}</h2></div>
      <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
      <div id="resume"><span class="sumario">${livro.sumario}</span></div>
      <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
      </div>`;
    });
  } else {
    htmlString = `<div class="livro">
    <div id="imagemLivro"><img src=""></div>
    <div id="bookName"><h2 class="name">PAlAVRA MAGICA</h2></div>
    <div id="bookPrice"><p class="preco">R$ SEM!!</p></div>
    <div id="resume"><span class="sumario"> A verdadeira palavra magica são os amigos que fizemos no caminho: Romulo Andriolo, Alexandre Pacheco, Vitor Willian, Tamirys Duarte, Ronaldo Aglio e Yago Romero.</span></div>
    <div id="shopButton"><button class="shop" onclick="alert('Desculpe, algumas coisas não podem ser compradas.')">Comprar</button></div>
    </div>`;
  }

  document.querySelector(".livros").innerHTML = htmlString;
  document.querySelector(".searchTerm").value = "";
  closeSuggestions();
  enableButtons();
};

const closeSuggestions = () => {
  document.querySelector("#sugestoes").style.display = "none";
};

function toggleShopCart() {
  if (document.querySelector(".Compras").style.display == "none") {
    document.querySelector(".Compras").style.display = "flex";
  } else {
    document.querySelector(".Compras").style.display = "none";
  }
}

function addToCart(id) {
  if (listaCompra.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = livros.find((livro) => livro.id === id);

    listaCompra.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function renderSubTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  listaCompra.forEach((item) => {
    totalPrice += item.preco * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  if (totalPrice > 0) {
    document.querySelector("#end").removeAttribute("disabled");
  }

  subTotalEl.innerHTML = `<h3>Total: R$ ${totalPrice.toFixed(2)}</h3>`;
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  listaCompra.forEach((item) => {
    cartItemsEl.innerHTML += `<div class='renderCart'><img src='${item.pictureURL}' width='20px'>
    <span class='livroNames'>${item.name}</span> 
    <div id="bookPrice"><p class="preco">R$ ${item.preco}</p></div> 
    <div class="btnminus" onclick="changeNumberOfUnits('minus', ${item.id})">⬇</div>
    <div class="numberOfUnits">${item.numberOfUnits}</div>
    <div class="btnplus" onclick="changeNumberOfUnits('plus', ${item.id})">⬆</div>
    <div class="btnRemove" onclick="removeItemFromCart(${item.id})">🗑️</div>
    </div>`;
  });
}

function removeItemFromCart(id) {
  listaCompra = listaCompra.filter((item) => item.id !== id);

  updateCart();
}

function changeNumberOfUnits(action, id) {
  listaCompra = listaCompra.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

function endShopping() {
  localStorage.clear();
  alert("Compra finalizada com Sucesso");
  subTotalEl.innerHTML = `<h3>Total: R$ 0.00</h3>`;
  window.location.reload();
}

window.onload = function () {
  updateCart();
  document.querySelector(".searchButton").setAttribute("disabled", true);
};

function updateCart() {
  document.querySelector("#end").setAttribute("disabled", true);
  renderCartItems();
  renderSubTotal();

  localStorage.setItem("CART", JSON.stringify(listaCompra));
}

var tocar = false;

function playAudio(idDiv) {
  var audio = document.querySelector("#imagemLivro" + idDiv + " audio");
  if (tocar == false) {
    audio.play();
    tocar = true;
  } else {
    audio.pause();
    tocar = false;
  }
}
