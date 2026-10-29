const produtos = [
  // SHAPES E PEÇAS
  {
    id: 1,
    nome: "shape santa cruz powerlyte pay off dot",
    categoria: "Skates",
    preco: 284.80,
    imagem: "https://acdn-us.mitiendanube.com/stores/008/048/969/products/58601064_0004_sample-aag8zm9xcvwbjbb-4b2db38718ecf3dc7717890636084826-1024-1024.webp",
  etiqueta: "NOVO"
  },
  {
    id: 2,
    nome: "Shape Urban Colors",
    categoria: "Skates",
    preco: 209.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/shape-maple-old-school-santa-cruz-dot-dudes-logo-24621365f2e06ea46917885472651372-1024-1024.webp",
    etiqueta: "STREET"
  },
  {
    id: 3,
    nome: "Skate Completo Pro",
    categoria: "Skates",
    preco: 329.90,
    imagem:"https://acdn-us.mitiendanube.com/stores/087/236/products/1-b18aba524953556e4117867382599263-1024-1024.webp",
    etiqueta: "COMPLETO"
  },
  {
    id: 4,
    nome: "Rodas Street 52 mm",
    categoria: "Skates",
    preco: 119.90,
    imagem: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=700&q=80",
    etiqueta: "PEÇA"
  },
  {
    id: 5,
    nome: "Shape Graphic Series",
    categoria: "Skates",
    preco: 229.90,
    imagem: "https://images.unsplash.com/photo-1572776685600-aca9c8a7a2e4?auto=format&fit=crop&w=700&q=80",
    etiqueta: "NOVO"
  },

  // TÊNIS
  {
    id: 6,
    nome: "Tênis Street Grip",
    categoria: "Tênis",
    preco: 249.90,
    imagem: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    etiqueta: "MAIS VENDIDO"
  },
  {
    id: 7,
    nome: "Tênis Classic Black",
    categoria: "Tênis",
    preco: 219.90,
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    etiqueta: "CLÁSSICO"
  },
  {
    id: 8,
    nome: "Tênis Urban White",
    categoria: "Tênis",
    preco: 239.90,
    imagem: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    etiqueta: "URBAN"
  },
  {
    id: 9,
    nome: "Tênis Retro Skate",
    categoria: "Tênis",
    preco: 269.90,
    imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80",
    etiqueta: "ESTILO"
  },
  {
    id: 10,
    nome: "Tênis Street Color",
    categoria: "Tênis",
    preco: 259.90,
    imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
    etiqueta: "NOVIDADE"
  },

  // ROUPAS STREETWEAR
  {
    id: 11,
    nome: "Camiseta Oversized",
    categoria: "Roupas",
    preco: 89.90,
    imagem: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80",
    etiqueta: "STREETWEAR"
  },
  {
    id: 12,
    nome: "Moletom Urban",
    categoria: "Roupas",
    preco: 189.90,
    imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    etiqueta: "CONFORTO"
  },
  {
    id: 13,
    nome: "Jaqueta Street",
    categoria: "Roupas",
    preco: 229.90,
    imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    etiqueta: "URBAN"
  },
  {
    id: 14,
    nome: "Camiseta Graphic",
    categoria: "Roupas",
    preco: 99.90,
    imagem: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80",
    etiqueta: "GRAPHIC"
  },
  {
    id: 15,
    nome: "Calça Cargo Street",
    categoria: "Roupas",
    preco: 159.90,
    imagem: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    etiqueta: "ESTILO"
  },

  // EQUIPAMENTOS DE PROTEÇÃO
  {
    id: 16,
    nome: "Capacete Skate Pro",
    categoria: "Proteção",
    preco: 139.90,
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    etiqueta: "SEGURANÇA"
  },
  {
    id: 17,
    nome: "Kit Joelheiras",
    categoria: "Proteção",
    preco: 79.90,
    imagem: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=700&q=80",
    etiqueta: "PROTEÇÃO"
  },
  {
    id: 18,
    nome: "Cotoveleiras Street",
    categoria: "Proteção",
    preco: 69.90,
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    etiqueta: "ESSENCIAL"
  },
  {
    id: 19,
    nome: "Kit de Proteção Completo",
    categoria: "Proteção",
    preco: 159.90,
    imagem: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&w=700&q=80",
    etiqueta: "KIT"
  },
  {
    id: 20,
    nome: "Munhequeiras de Proteção",
    categoria: "Proteção",
    preco: 49.90,
    imagem: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
    etiqueta: "SEGURANÇA"
  }
];

let categoriaAtual = "Todos";
let sacola = [];
const favoritos = new Set();
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
  }, 2500);
}

function mostrarProdutos() {
  const termo = busca.value.trim().toLocaleLowerCase("pt-BR");

  const encontrados = produtos.filter(produto => {
    const combinaCategoria =
      categoriaAtual === "Todos" ||
      produto.categoria === categoriaAtual;

    const combinaBusca =
      `${produto.nome} ${produto.categoria} ${produto.etiqueta}`
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
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=700&q=80';"
        >
        <span class="tag">${produto.etiqueta}</span>
        <button
          class="favorite ${favoritos.has(produto.id) ? "selected" : ""}"
          data-favorito="${produto.id}"
          aria-label="Favoritar ${produto.nome}"
          aria-pressed="${favoritos.has(produto.id)}"
        >${favoritos.has(produto.id) ? "♥" : "♡"}</button>
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
    (soma, item) => soma + item.quantidade,
    0
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
            <button data-quantidade="${produto.id}" data-mudanca="-1" aria-label="Diminuir">−</button>
            <span>${item.quantidade}</span>
            <button data-quantidade="${produto.id}" data-mudanca="1" aria-label="Aumentar">+</button>
          </div>
        </div>
        <button class="remove" data-remover="${produto.id}" aria-label="Remover ${produto.nome}">×</button>
      </div>
    `;
  }).join("");
}

// Filtros
document.querySelectorAll(".filter").forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.filter;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === botao);
    });

    mostrarProdutos();
  });
});

// Pesquisa em tempo real
busca.addEventListener("input", mostrarProdutos);

// Sacola e favoritos
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

// Quantidade e remoção
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

// Abrir e fechar sacola
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

// Finalização apenas demonstrativa
document.querySelector("#checkout").addEventListener("click", () => {
  if (sacola.length === 0) {
    mostrarAviso("Sua sacola está vazia!");
    return;
  }

  mostrarAviso("Projeto escolar: nenhum pagamento foi realizado.");
});

// Clicar nas categorias da página inicial
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
    document.querySelector("#loja").scrollIntoView({ behavior: "smooth" });
  });
});

// Atalho para skates e peças
document.querySelector("[data-show-skates]").addEventListener("click", () => {
  categoriaAtual = "Skates";

  document.querySelectorAll(".filter").forEach(botao => {
    botao.classList.toggle("active", botao.dataset.filter === "Skates");
  });

  mostrarProdutos();
  document.querySelector("#loja").scrollIntoView({ behavior: "smooth" });
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

// Ano automático
document.querySelector("#year").textContent = new Date().getFullYear();

// Iniciar
mostrarProdutos();
mostrarSacola();
