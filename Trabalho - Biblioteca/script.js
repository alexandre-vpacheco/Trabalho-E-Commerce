var livrosTerror = [
  {
    id: 1,
    name: "Livro muito assustador bu",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 2,
    name: "Livro muito assustador demais",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 3,
    name: "Livro muito assustador maior que tudo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 4,
    name: "Livro muito assustador cacete",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 5,
    name: "Livro muito assustador limão azedo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
  {
    id: 6,
    name: "Livro muito assustador chico",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
  },
];

document.querySelector(".searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  searchBook();
});

document.querySelector("#terror").addEventListener("click", (e) => {
  e.preventDefault();
  buttonTerror();
});

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  buttonHome();
});

const buttonTerror = () => {
  var htmlString = "";

  document.querySelector("body").classList.toggle("terror");

  livrosTerror.forEach((livro) => {
    htmlString += `<div class="livro">
      <img src="${livro.pictureURL}">
      <h2 class="name">${livro.name}</h2>
      <p class="preco">R$ ${livro.preco}</p>
      <span class="sumario">${livro.sumario}</span>
      <button class="shop">Comprar</button>
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
      <img src="${livro.pictureURL}">
      <h2 class="name">${livro.name}</h2>
      <p class="preco">R$ ${livro.preco}</p>
      <span class="sumario">${livro.sumario}</span>
      <button class="shop">Comprar</button>
    </div>`;
    });
  } else {
    htmlString = "<span> Nenhum livro encontrado 😒</span>";
  }

  document.querySelector(".livros").innerHTML = htmlString;
  document.querySelector(".searchTerm").value = "";
};

const buttonHome = () => {
  var htmlString = "";

  document.querySelector("body").classList.remove("terror");

  document.querySelector(".livros").innerHTML = htmlString;
};
