const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livros = [
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
    id: 8,
    name: "O Dragao negro albino",
    sumario:
      "Fumaça é um dragão negro albino com a habilidade de cuspir fogo negro durante o dia e raio azul à noite. Ele é o protetor de uma pequena vila de aldeões bondosos que o acolheram e protegeram.",
    preco: 199.9,
    pictureURL:
      "/inputs/dragna.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
  },
  {
    id: 9,
    name: "Eryndor, o exilado",
    sumario:
      "Eryndor, um jovem fascinado pela magia, é treinado por um feiticeiro mal e descobre seus verdadeiros planos. Depois de anos isolado, ele retorna para enfrentar seu antigo mentor e proteger a floresta onde cresceu.",
    preco: 99.9,
    pictureURL:
      "/inputs/eryndor.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
  },
  {
    id: 10,
    name: "Mundo de Eldoria",
    sumario:
      "Em um mundo de fantasia chamado Eldoria, o herói Kael lidera a luta contra demônios liderados pelo senhor das trevas Zathar. Com a ajuda dos guerreiros de Eldoria e aliados dragões, eles enfrentam uma batalha épica para restaurar a paz.",
      
    preco: 59.9,
    pictureURL:
      "/inputs/meldoria.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
  },
  {
    id: 11,
    name: "A Jornada da inocência",
    sumario:
      "Em Runeterra, a rainha elfa Illyria é acusada injustamente de assassinar o rei humano. Com a ajuda do jovem Finn, ela começa uma jornada para provar sua inocência enquanto enfrenta perigos e conspirações.",
      
    preco: 49.9,
    pictureURL:
      "/inputs/jinocencia.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
  },
  {
    id: 12,
    name: "Alan, o aventureiro",
    sumario:
      "Alan, um jovem aventureiro, descobre uma porta mágica que o leva para um mundo repleto de magia e fantasia. Ele viaja por diferentes mundos, vivendo aventuras incríveis e conhecendo novos amigos.",
      
    preco: 29.9,
    pictureURL:
      "/inputs/alanavent.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
  },
  {
    id: 13,
    name: "O Filho da União proibida",
    sumario:
      "Em um mundo dividido em duas nações, fogo e água, o nascido de um manipulador do fogo e uma manipuladora de água, Kira. O fruto de uma união proibida, treinado pelo poderoso macaco e seus pais.",
      
    preco:  99.9,
    pictureURL:
      "/inputs/filhodau.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "fantasia",
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

document.querySelector(".searchTerm").addEventListener("input", (e) => {
  document.querySelector(".searchButton").setAttribute("disabled", true);
  if (e.target.value.length >= 2) {
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
    htmlString += ` <div class='preview'><img src='${livro.pictureURL}' onclick="selectLivro('${livro.name}')" width='100px'>
    <span class='livroSuggestion' onclick="selectLivro('${livro.name}')">${livro.name}</span> </div>`;
  });

  document.querySelector("#sugestoes").innerHTML = htmlString;
  document.querySelector("#sugestoes").style.display = "flex";
};

const selectLivro = (livroName) => {
  document.querySelector(".searchTerm").value = livroName;
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
  closeSuggestions();
};

const closeSuggestions = () => {
  document.querySelector("#sugestoes").style.display = "none";
};

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

function updateCart() {
  document.querySelector("#end").setAttribute("disabled", true);
  renderCartItems();
  renderSubTotal();

  localStorage.setItem("CART", JSON.stringify(listaCompra));
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
    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
    <div class="numberOfUnits">${item.numberOfUnits}</div>
    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
    <div class="btnRemove" onclick="removeItemFromCart(${item.id})">Remove</div>
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

let clip = document.querySelector(".vid");

clip.addEventListener("mouseover", function (e) {
  clip.play();
});

clip.addEventListener("mouseout", function (e) {
  clip.pause();
});
