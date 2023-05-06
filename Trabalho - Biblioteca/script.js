const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livros = [
  {
    id: 26,
    name: "CATastrofe",
    sumario:
      "De Takaruna Kombi, um slice of life que conta sobre o sumiço de um gato no prédio, seus moradores até então desconhecidos começam a compartilhar suas vidas e histórias que mostram que estão ligados a eles e ao gato a mais tempo do que imaginavam.",
    preco: 22.9,
    pictureURL: "/inputs/m1.png",
    href: "http://127.0.0.1:5500/m1.png",
    categoria: "manga",
  },
  {
    id: 27,
    name: "KenSham'a Way",
    sumario:
      "De Takama Dera Nelle, conta a história de Himura Ken, um contador de histórias nato que sempre chega atrasado no trabalho e revela os detalhes sobre o inicio de seu dia para seu chefe. Monstros, Guerras e velhinhas atravessando a rua, tudo pode ser uma nova forma gambelar seu chefe.",
    preco: 22.9,
    pictureURL:
      "/inputs/m5.png",
    href: "http://127.0.0.1:5500/inputs/m5.png",
    categoria: "manga",
  },
  {
    id: 28,
    name: "Sora no Boken no hakai Kagaminokuninoarisu",
    sumario:
      "De sotapan noz, uma trama shounem pra ninguém botar defeito,  a doce Akisa Harino ao olhar através de uma janela encontra asika onirah, alguém idêntica a ela em aparência porem possui uma aura perversa, ambas gritam ao se verem surgindo duas auras, um lobo e um dragão, com a realidade destruída elas precisam se unir para descobrir como isso aconteceu.",
    preco: 22.9,
    pictureURL:
      "/inputs/m4.png",
    href: "http://127.0.0.1:5500/inputs/m4.png",
    categoria: "manga",
  },
  {
    id: 29,
    name: "Muteless",
    sumario:
      "De Vitor Willlian Geraldo, &quot;o mundo mudou quando o som acabou&quot; , foram as palavras do meu avô tempos antes de partir. após alguns anos invadi o seu sótão e dentro dele havia alguns equipamentos que nunca vi. eles despertaram algo bem maior que sentimentos, descobri a musica, uma força que entrava na minha alma desbloqueando um potencial que o mundo tentou calar. Com o poder da voz de Osíris pude dizer minha primeira palavra. esse é o começo da minha história e não está nem um pouco longe de acabar.",
    preco: 22.9,
    pictureURL:
      "/inputs/m3.png",
    href: "http://127.0.0.1:5500/inputs/m3.png",
    categoria: "manga",
  },
  {
    id: 30,
    name: "I love you, drawer",
    sumario:
      "De Irato Lovin, conta a historia de um mangaká que ama seus desenhos por mais que não tenham feito sucesso, no meio de uma tarde de trabalho quando seu primeiro one shot ia ser publicado por uma grande empresa percebe que seus desenhos tem mudado de lugar e até sumido de lá! até que se revelando, eles mesmos começam a mostrar maneiras para de se tornar o melhor mangaká do Japão da sua era.",
    preco: 22.9,
    pictureURL:
      "/inputs/m2.png",
    href: "http://127.0.0.1:5500/inputs/m2.png",
    categoria: "manga",
  },
  {
    id: 31,
    name: "Another Level",
    sumario:
      "De Yuri Weilemann, a poucos dias de seu casamento um notável mestre dos códigos recebe a missão de treinar um grupo de iniciantes nas artes práticas, com a agenda cheia e muita confusão mental ele usa seu recurso final, uma inteligência artificial que copia e cria clones virtuais dele, assim resolvendo seus problemas. tudo dá errado quando os próprios clones ganham consciência e encontram formas de dominar o mundo através dos seus conhecimentos, agora cabe ao próprio e seu grupo enfrentar os poderosos seres denominados YuriGPT contra o terrível declínio da terra.",
    preco: 22.9,
    pictureURL:
      "/inputs/m6.png",
    href: "http://127.0.0.1:5500/inputs/m6.png",
    categoria: "manga",
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
