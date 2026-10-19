
const produtos = [
  {
    id: 1,
    nome: "Skate Completo Street",
    categoria: "Skates",
    preco: 289.90,
    imagem: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80",
    etiqueta: "DESTAQUE"
  },
  {
    id: 2,
    nome: "Shape Urban",
    categoria: "Skates",
    preco: 179.90,
    imagem: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80",
    etiqueta: "PEÇA"
  },
  {
    id: 3,
    nome: "Tênis Street Grip",
    categoria: "Tênis",
    preco: 249.90,
    imagem: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    etiqueta: "NOVO"
  },
  {
    id: 4,
    nome: "Camiseta Oversized",
    categoria: "Roupas",
    preco: 89.90,
    imagem: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=600&q=80",
    etiqueta: "STREETWEAR"
  },
  {
    id: 5,
    nome: "Capacete de Proteção",
    categoria: "Proteção",
    preco: 139.90,
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    etiqueta: "SEGURANÇA"
  },
  {
    id: 6,
    nome: "Rodas Street 52 mm",
    categoria: "Skates",
    preco: 119.90,
    imagem: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80",
    etiqueta: "PEÇA"
  },
  {
    id: 7,
    nome: "Moletom Streetwear",
    categoria: "Roupas",
    preco: 189.90,
    imagem: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=600&q=80",
    etiqueta: "ESTILO"
  },
  {
    id: 8,
    nome: "Kit de Proteção",
    categoria: "Proteção",
    preco: 159.90,
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    etiqueta: "KIT"
  }
];

let categoriaAtual = "Todos";
let sacola = [];
let favoritos = new Set();
let temporizadorToast;

const listaProdutos = document.querySelector("#products");
const busca = document.querySelector("#search");
const sacolaOverlay = document.querySelector("#cartOverlay");
const itensSacola = document.querySelector("#cartItems");
const contadorSacola = document.querySelector("#cartCount");
const totalSacola = document.querySelector("#cartTotal");
const toast = document.querySelector("#toast");

function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function mostrarAviso(mensagem) {
  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(temporizadorToast);

  temporizadorToast = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function mostrarProdutos() {
  const termo = busca.value.trim().toLocaleLowerCase("pt-BR");

  const encontrados = produtos.filter(produto => {
    const combinaCategoria =
      categoriaAtual === "Todos" ||
      produto.categoria === categoriaAtual;

    const combinaBusca =
      `${produto.nome} ${produto.categoria}`
        .toLocaleLowerCase("pt-BR")
        .includes(termo);

    return combinaCategoria && combinaBusca;
  });

  if (encontrados.length === 0) {
    listaProdutos.innerHTML =
      '<p class="empty-state">Nenhum produto encontrado. Tente outra busca!</p>';
    return;
  }

  listaProdutos.innerHTML = encontrados.map(produto => `
    <article class="product">
      <div class="product-image">
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          loading="lazy"
        >

        <span class="tag">${produto.etiqueta}</span>

        <button
          class="favorite ${favoritos.has(produto.id) ? "selected" : ""}"
          data-favorito="${produto.id}"
          aria-label="Favoritar ${produto.nome}"
          aria-pressed="${favoritos.has(produto.id)}"
        >
          ${favoritos.has(produto.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span class="product-category">${produto.categoria}</span>
        <h3>${produto.nome}</h3>
        <p class="price">${dinheiro(produto.preco)}</p>

        <button class="add-button" data-adicionar="${produto.id}">
          ADICIONAR À SACOLA +
        </button>
      </div>
    </article>
  `).join("");
}

function adicionarSacola(id) {
  const item = sacola.find(produto => produto.id === id);

  if (item) {
    item.quantidade++;
  } else {
    sacola.push({ id, quantidade: 1 });
  }

  mostrarSacola();
  mostrarAviso("Produto adicionado à sacola!");
}

function alterarQuantidade(id, mudanca) {
  const item = sacola.find(produto => produto.id === id);

  if (!item) return;

  item.quantidade += mudanca;

  if (item.quantidade <= 0) {
    sacola = sacola.filter(produto => produto.id !== id);
  }

  mostrarSacola();
}

function removerSacola(id) {
  sacola = sacola.filter(produto => produto.id !== id);
  mostrarSacola();
}

function mostrarSacola() {
  const quantidadeTotal = sacola.reduce(
    (soma, item) => soma + item.quantidade, 0
  );

  const valorTotal = sacola.reduce((soma, item) => {
    const produto = produtos.find(p => p.id === item.id);
    return soma + produto.preco * item.quantidade;
  }, 0);

  contadorSacola.textContent = quantidadeTotal;
  totalSacola.textContent = dinheiro(valorTotal);

  if (sacola.length === 0) {
    itensSacola.innerHTML = `
      <p class="cart-empty">
        Sua sacola está vazia.<br>
        Que tal escolher algo para o próximo rolê?
      </p>
    `;
    return;
  }

  itensSacola.innerHTML = sacola.map(item => {
    const produto = produtos.find(p => p.id === item.id);

    return `
      <div class="cart-item">
        <img src="${produto.imagem}" alt="${produto.nome}">

        <div>
          <h3>${produto.nome}</h3>
          <p>${dinheiro(produto.preco)}</p>

          <div class="quantity">
            <button
              data-quantidade="${produto.id}"
              data-mudanca="-1"
              aria-label="Diminuir quantidade"
            >−</button>

            <span>${item.quantidade}</span>

            <button
              data-quantidade="${produto.id}"
              data-mudanca="1"
              aria-label="Aumentar quantidade"
            >+</button>
          </div>
        </div>

        <button
          class="remove"
          data-remover="${produto.id}"
          aria-label="Remover ${produto.nome}"
        >×</button>
      </div>
    `;
  }).join("");
}

// Filtros por categoria
document.querySelectorAll(".filter").forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.filter;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === botao);
    });

    mostrarProdutos();
  });
});

// Pesquisa de produtos
busca.addEventListener("input", mostrarProdutos);

// Botões de produtos e favoritos
listaProdutos.addEventListener("click", evento => {
  const adicionar = evento.target.closest("[data-adicionar]");
  const favorito = evento.target.closest("[data-favorito]");

  if (adicionar) {
    adicionarSacola(Number(adicionar.dataset.adicionar));
  }

  if (favorito) {
    const id = Number(favorito.dataset.favorito);

    if (favoritos.has(id)) {
      favoritos.delete(id);
      mostrarAviso("Produto removido dos favoritos.");
    } else {
      favoritos.add(id);
      mostrarAviso("Produto salvo nos favoritos!");
    }

    mostrarProdutos();
  }
});

// Alterar quantidades e remover produtos
itensSacola.addEventListener("click", evento => {
  const quantidade = evento.target.closest("[data-quantidade]");
  const remover = evento.target.closest("[data-remover]");

  if (quantidade) {
    alterarQuantidade(
      Number(quantidade.dataset.quantidade),
      Number(quantidade.dataset.mudanca)
    );
  }

  if (remover) {
    removerSacola(Number(remover.dataset.remover));
  }
});

// Abrir e fechar a sacola
function abrirSacola() {
  sacolaOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharSacola() {
  sacolaOverlay.hidden = true;
  document.body.style.overflow = "";
}

document.querySelector("#openCart").addEventListener("click", abrirSacola);
document.querySelector("#closeCart").addEventListener("click", fecharSacola);
document.querySelector("#closeBackdrop").addEventListener("click", fecharSacola);

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape" && !sacolaOverlay.hidden) {
    fecharSacola();
  }
});

// Finalização demonstrativa: não processa pagamentos
document.querySelector("#checkout").addEventListener("click", () => {
  mostrarAviso(
    "Carrinho demonstrativo! Integre um serviço de pagamento para vender."
  );
});

// Categorias da página inicial
document.querySelectorAll("[data-category]").forEach(link => {
  link.addEventListener("click", () => {
    categoriaAtual = link.dataset.category;

    document.querySelectorAll(".filter").forEach(botao => {
      botao.classList.toggle(
        "active",
        botao.dataset.filter === categoriaAtual
      );
    });

    mostrarProdutos();
  });
});

// Atalho para ver peças e skates
document.querySelector("[data-show-skates]").addEventListener("click", () => {
  categoriaAtual = "Skates";

  document.querySelectorAll(".filter").forEach(botao => {
    botao.classList.toggle(
      "active",
      botao.dataset.filter === "Skates"
    );
  });

  mostrarProdutos();
});

// Menu para celular
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.textContent = aberto ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Ano automático no rodapé
document.querySelector("#year").textContent = new Date().getFullYear();

// Iniciar a página
mostrarProdutos();
mostrarSacola();
