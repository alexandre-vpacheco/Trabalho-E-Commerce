const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livrosTerror = [
  {
    id: 1,
    name: "Livro",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu bu bu bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 2,
    name: "Livro muito assustador demais",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 3,
    name: "Livro muito assustador maior que tudo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 4,
    name: "Livro muito assustador cacete",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 5,
    name: "Livro muito assustador limão azedo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 6,
    name: "Livro muito assustador chico",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },

  (livrosAcao = [
    {
      id: 7,
      name: "Livro",
      sumario:
        "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu bu bu bu",
      preco: 22.9,
      pictureURL:
        "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    },
  ]),
];

document.querySelector(".searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  searchBook();
});

document.querySelector("#terror").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#terror").setAttribute("disabled", true);
  document.querySelector("#home").removeAttribute("disabled");
  buttonTerror();
});

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#home").setAttribute("disabled", true);
  document.querySelector("#terror").removeAttribute("disabled");
  buttonHome();
});

const buttonTerror = () => {
  var htmlString = "";

  document.querySelector("body").classList.toggle("terror");

  livrosTerror.forEach((livro) => {
    htmlString += `<div class="livro">
      <div id="imagemLivro"><img src="${livro.pictureURL}"></div>
      <div id="bookName"><h2 class="name">${livro.name}</h2></div>
      <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
      <div id="resume"><span class="sumario">${livro.sumario}</span></div>
      <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector(".livros").innerHTML = htmlString;
};

document.querySelector(".searchTerm").addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    handleSuggestions(e.target.value);
  } else {
    closeSuggestions();
  }
});

const handleSuggestions = (searchValue) => {
  const filteredbooks = livrosTerror.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  var htmlString = "";
  filteredbooks.forEach((livro) => {
    htmlString += ` <div class='preview'><img src='${livro.pictureURL}' onclick="selectLivro('${livro.name}')" width='20px'>
    <span class='livroSuggestion' onclick="selectLivro('${livro.name}')">${livro.name}</span> </div>`;
  });

  document.querySelector("#sugestoes").innerHTML = htmlString;
  document.querySelector("#sugestoes").style.display = "flex";
};

const selectLivro = (livroName) => {
  document.querySelector(".searchTerm").value = livroName;
  searchBook();
  closeSuggestions();
};

const closeSuggestions = () => {
  document.querySelector("#sugestoes").style.display = "none";
};

const searchBook = () => {
  var htmlString = "";
  const searchValue = document.querySelector(".searchTerm").value;
  const filteredBooks = livrosTerror.filter((livro) =>
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

  document.querySelector("body").classList.remove("terror");

  document.querySelector(".livros").innerHTML = htmlString;
};

function toggleShopCart() {
  if (document.querySelector(".listaCompras").style.display == "none") {
    document.querySelector(".listaCompras").style.display = "flex";
  } else {
    document.querySelector(".listaCompras").style.display = "none";
  }
}

function addToCart(id) {
  if (listaCompra.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = livrosTerror.find((livro) => livro.id === id);

    listaCompra.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function updateCart() {
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

  subTotalEl.innerHTML = `<h3>Total: R$ ${totalPrice.toFixed(2)}</h3>`;
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  listaCompra.forEach((item) => {
    cartItemsEl.innerHTML += `<div class='renderCart'><img src='${item.pictureURL}' width='20px'>
    <span class='livroSuggestion'>${item.name}</span> 
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
