const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livros = [//É um array chamado de livros. Cada {} contem um objeto, que contem as propriedades dele.
  {
    id: 1,
    name: "Terror na orla dos caranguejos.",
    sumario:
      "São dias frios na Orla dos Crangueijos. Após o surgimento de uma frente fria sem explicação na cidade tropical, e uma onda de assassinatos, moradores e forças policiais se mobilizam para resolver os mistérios.",
    preco: 22.9,
    pictureURL: "/inputs/terrorNaOrlaDosCaranguejos.png",
    href: "http://127.0.0.1:5500/inputs/terrorNaOrlaDosCaranguejos.png",
    categoria: "terror",
    pdf: "/inputs/terror.txt",
  },
  {
    id: 2,
    name: "Livro muito assustador demais",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 3,
    name: "Livro muito assustador maior que tudo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 4,
    name: "Livro muito assustador cacete",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 5,
    name: "Livro muito assustador limão azedo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 6,
    name: "Livro muito assustador chico",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 7,
    name: "Livro jesus",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu bu bu bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 14,
    name: "Não há super-herois",
    sumario:
      "Em 2022 um ataque terrorista aconteceu na Europa chocando o mundo todo. Com medo de que algo desse tipo possa acontecer de novo, os presidentes de grandes nações se unem para descobrir quem está por trás disso sem saber que o inimigo está mais próximo que eles imaginam...",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 15,
    name: "Cemitério dos perdedores é silencioso",
    sumario:
      "O inimigo número 1 do FBI volta a ativa depois de anos sem ninguém saber onde ele estava se escondendo. Esse livro conta a história de como o FBI realizou a operação que foi atrás do homem mais procurado da história do mundo policial.",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 16,
    name: "O sangue revela tudo",
    sumario:
      "Em 1976 as nações entraram em guerra e soldados foram convocados de ambos os lados para o campo de batalha. Um soldado se destaca quando suas habilidades de matança aflorescem, será que ele vai conseguir se livrar da iminente emboscada que o inimigo prepara?",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 17,
    name: "Em busca da arma perdida",
    sumario:
      "Tendo vivenciado o assassinato do seu pai quando criança, Edgar Phoenix vai atrás do assassino quando ve o revólver que foi roubado do seu pai naquela mesma noite.",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 18,
    name: "O mundo não é amistoso",
    sumario:
      "Dustin Peralta foi criado pelo seu pai, um impiedoso Coronel, e com ele aprendeu as mais variadas táticas sobre como vencer uma guerra. Agora com a morte de seu pai cabe a ele guiar o grande exército em busca de conquistar novas terras.",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    id: 19,
    name: "Hasta la vista, Baby",
    sumario:
      "Ameaçado de morte pela temida máfia japonesa, Humberto tem que juntar seu antigos amigos de golpe para roubar um banco e sanar sua dívida.",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
];
//addEventListener adiciona um evento de clique ao botão com a classe .searchButton. Toda essa função serve para evitar que a página redirecione o usuário antes que a função
//searchBook tenha sido concluída.
document.querySelector(".searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
});
//Essa função leva o usuário a página de terror e desabilita o botão, já que o usuário já está nessa sessão.
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
//Habilita todos os botões após o usuário clicar em algum deles. Serve para o usuário mudar de categoria.
const enableButtons = () => {
  document.querySelector("#home").removeAttribute("disabled");
  document.querySelector("#terror").removeAttribute("disabled");
  document.querySelector("#manga").removeAttribute("disabled");
  document.querySelector("#romance").removeAttribute("disabled");
  document.querySelector("#fantasia").removeAttribute("disabled");
  document.querySelector("#acao").removeAttribute("disabled");
};
<<<<<<< Updated upstream

=======
//Atualiza a página para a home.
const buttonHome = () => {
  var htmlString = "";

  document.querySelector(".headerBotton").id = "homeB";
  document.querySelector("main").className = "home";
  changeButtons();
  document.querySelector(".livros").innerHTML = htmlString;
};
//Inicia quando o usuário clica no botão terror. A primeira coisa é declarar uma variável chamada htmlString, que será usada para armazenar o código HTML que será gerado para exibir os livros.
//Filtra a lista de livros para encontrar os livros que estão na categoria terror e armazena na variável terrorAba.
//A função percorrer cada livro na lista usando o método forEach e gera código HTML para exibir as informações.
//Atualiza a classe da tag main para terror e adiciona o código HTML gerado à div livros da página.
>>>>>>> Stashed changes
const buttonTerror = () => {
  var htmlString = "";

  var terrorAba = livros.filter((livro) => livro.categoria == "terror");
  terrorAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div><div id="pdf" hidden>${livro.pdf}</div>`;
  });

  document.querySelector("main").className = "terror";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonAcao = () => {
  var htmlString = "";

  var acaoAba = livros.filter((livro) => livro.categoria == "acao");
  acaoAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "acao";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonManga = () => {
  var htmlString = "";

  var mangaAba = livros.filter((livro) => livro.categoria == "manga");
  mangaAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "manga";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonFantasia = () => {
  var htmlString = "";

  var fantasiaAba = livros.filter((livro) => livro.categoria == "fantasia");
  fantasiaAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "fantasia";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonRomance = () => {
  var htmlString = "";

  var romanceAba = livros.filter((livro) => livro.categoria == "romance");
  romanceAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "romance";

  document.querySelector(".livros").innerHTML = htmlString;
};
<<<<<<< Updated upstream

=======
//muda a cor do cabeçalho das abas. Reflete o tema desejado nas abas.
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
//Clica no botão para aparecer as categorias na versão mobile.
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", () => {
  if (document.querySelector(".headerBotton").style.display == "none") {
    document.querySelector(".headerBotton").style.display = "flex";
  } else {
    document.querySelector(".headerBotton").style.display = "none";
  }
});
// Mesma função anterior mas para barra de procura.
const toggleButton2 = document.querySelector("#toggleButton2");

toggleButton2.addEventListener("click", () => {
  if (document.querySelector(".searchTerm").style.display == "none") {
    document.querySelector(".searchTerm").style.display = "flex";
  } else {
    document.querySelector(".searchTerm").style.display = "none";
  }
});
//Função mostra sugestão do que o usuário procura caso ele digite mais de 2 caracteres. Caso não haja 3 caracteres o botão de pesquisa é desabilitado e não há sugestões.
>>>>>>> Stashed changes
document.querySelector(".searchTerm").addEventListener("input", (e) => {
  document.querySelector(".searchButton").setAttribute("disabled", true);
  if (e.target.value.length >= 2) {
    document.querySelector(".searchButton").removeAttribute("disabled");
    handleSuggestions(e.target.value);
  } else {
    closeSuggestions();
  }
});
//Define a função handleSuggestions. Essa função filtra a lista de livros com base no valor de pesquisa e cria uma sugestão de livro correspondente.
//Cada sugestão de livro é apresentada com uma imagem do livro e o nome do livro como um link.
//Por fim, a função atualiza o conteúdo id="sugestoes" para exibir a lista de sugestões e altera o estilo do elemento para exibi-lo como uma caixa suspensa.
const handleSuggestions = (searchValue) => {
  const filteredbooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  var htmlString = "";
  filteredbooks.forEach((livro) => {
    htmlString += ` <div class='preview'><img src='${livro.pictureURL}' onclick="selectLivro('${livro.name}')" width='100px'>
    <span class='livroSuggestion' onclick="selectLivro('${livro.name}')">${livro.name}</span> </div>`;
  });

  document.querySelector("#sugestoes").innerHTML = htmlString;
  document.querySelector("#sugestoes").style.display = "flex";
};
<<<<<<< Updated upstream

const selectLivro = (livroName) => {
=======
//Essa função é chamada quando um usuário seleciona uma sugestão de busca e executa a busca correspondente.
const selectLivro = (livroName, categoria) => {
>>>>>>> Stashed changes
  document.querySelector(".searchTerm").value = livroName;
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
  closeSuggestions();
};
<<<<<<< Updated upstream

const closeSuggestions = () => {
  document.querySelector("#sugestoes").style.display = "none";
};

=======
//A função é responsável por filtrar a lista de livros com base na palavra digitada pelo usuário. 
//Cria uma nova lista filteredBooks que contem os livros que tem o nome correspondente a palavra digitada.
//Se na lista tiver ao menos um livro, é adicionado uma string HTML que contém o nome, imagem, preço e botão de compra. Se estiver vazio, aparece a mensagem nenhum livro encontrado.
>>>>>>> Stashed changes
const searchBook = () => {
  var htmlString = "";
  const searchValue = document.querySelector(".searchTerm").value;
  const filteredBooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (filteredBooks.length > 0) {
    filteredBooks.forEach((livro) => {
      htmlString += `<div class="livro">
      <div id="imagemLivro"><img src="${livro.pictureURL}"></div>
      <div id="bookName"><h2 class="name">${livro.name}</h2></div>
      <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
      <div id="resume"><span class="sumario">${livro.sumario}</span></div>
      <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
      </div>`;
    });
  } else {
    htmlString = "<span> Nenhum livro encontrado 😒</span>";
  }

  document.querySelector(".livros").innerHTML = htmlString;
  document.querySelector(".searchTerm").value = "";
  closeSuggestions();
};

const buttonHome = () => {
  var htmlString = "";

  document.querySelector("main").className = "home";

  document.querySelector(".livros").innerHTML = htmlString;
};
//Função para alternar entre exibido e oculto o carrinho toda vez que o usuário clicar no botão do carrinho.
function toggleShopCart() {
  if (document.querySelector(".Compras").style.display == "none") {
    document.querySelector(".Compras").style.display = "flex";
  } else {
    document.querySelector(".Compras").style.display = "none";
  }
}
//Função para adicionar o item na lista de compras. Se já exisitir o item, ele soma. Caso contrário adiciona o item novo.
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
<<<<<<< Updated upstream

function updateCart() {
  document.querySelector("#end").setAttribute("disabled", true);
  renderCartItems();
  renderSubTotal();

  localStorage.setItem("CART", JSON.stringify(listaCompra));
}

=======
//Função para calcular o total de itens no carinho e o preço total. Se o preço > 0, aparece o botão de finalizar
//totalPrice.toFixed(2) - arredonda para duas casas decimais.
>>>>>>> Stashed changes
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
//Responsável por atualizar a exibição dos itens adicionados ao carrinho. Adiciona o botão de somar e diminuir a quantidade de itens
function renderCartItems() {
  cartItemsEl.innerHTML = "";
  listaCompra.forEach((item) => {
    cartItemsEl.innerHTML += `<div class='renderCart'><img src='${item.pictureURL}' width='20px'>
    <span class='livroNames'>${item.name}</span> 
    <div id="bookPrice"><p class="preco">R$ ${item.preco}</p></div> 
    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
    <div class="numberOfUnits">${item.numberOfUnits}</div>
    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
    <div class="btnRemove" onclick="removeItemFromCart(${item.id})">Remove</div>
    </div>`;
  });
}
//Remover o item do carrinho
function removeItemFromCart(id) {
  listaCompra = listaCompra.filter((item) => item.id !== id);

  updateCart();
}
//Responsável por aumentar ou diminuir o número de itens no carrinho. Utiliza o map para criar novo array com a mesma quantidade do array listaCompra.
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
//Finaliza a compra e informa o valor
function endShopping() {
  localStorage.clear();
  alert("Compra finalizada com Sucesso");
  subTotalEl.innerHTML = `<h3>Total: R$ 0.00</h3>`;
  window.location.reload();
}
//Atualiza a página para o home e limpa o carrinho
window.onload = function () {
  updateCart();

  document.querySelector(".searchButton").setAttribute("disabled", true);
};
<<<<<<< Updated upstream

let clip = document.querySelector(".vid");
=======
//Função para atualizar o carrinho
function updateCart() {
  document.querySelector("#end").setAttribute("disabled", true);
  renderCartItems();
  renderSubTotal();
>>>>>>> Stashed changes

clip.addEventListener("mouseover", function (e) {
  clip.play();
});

<<<<<<< Updated upstream
clip.addEventListener("mouseout", function (e) {
  clip.pause();
});
=======
var tocar = false;
//Chama 
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
>>>>>>> Stashed changes
