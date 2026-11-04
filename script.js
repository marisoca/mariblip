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
    nome: "Shape santa cruz",
    categoria: "Skates",
    preco: 209.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/shape-maple-old-school-santa-cruz-dot-dudes-logo-24621365f2e06ea46917885472651372-1024-1024.webp",
    etiqueta: "STREET"
  },
  {
    id: 3,
    nome: "Skate Montado CBGANG Susto",
    categoria: "Skates",
    preco: 329.90,
    imagem:"https://acdn-us.mitiendanube.com/stores/087/236/products/skate-montado-cbgang-susto-6f0ba04d76260ee07f17549464929214-1024-1024.webp",
    etiqueta: "COMPLETO"
  },
  {
    id: 4,
    nome: "Truck Trurium 2.0 X-Light Pro Samuel Jimmy Black",
    categoria: "Skates",
    preco: 119.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/trurium-trucks-2-2-x-light-jimmy-black-frente-0726b8a30e4ff3044e17879517575605-1024-1024.webp",
    etiqueta: "PEÇA"
  },
  {
    id: 5,
    nome: "Roda Spitfire F4 Nikolai Pro Edition Classic 99a",
    categoria: "Skates",
    preco: 229.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/design-sem-nome-70-f076f6d513135f3c8317746202152016-1024-1024.webp",
    etiqueta: "NOVO"
  },

  // TÊNIS
  {
    id: 6,
    nome: "Tênis Hocks Bold - Sombras",
    categoria: "Tênis",
    preco: 249.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/13-09764d4336e39646f817933607997654-1024-1024.webp",
    etiqueta: "MAIS VENDIDO"
  },
  {
    id: 7,
    nome: "Tenis Hocks Flat Core Plus Petitpoa",
   categoria: "Tênis",
    preco: 219.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/tenis-hocks-flat-core-plus-petitpoa-f9554df030f6244ad917819038052471.jpg",
    etiqueta: "CLÁSSICO"
  },
  {
    id: 8,
    nome: "Tênis OUS Imigrante Serie X Concreto Reflex Essencial",
    categoria: "Tênis",
    preco: 239.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/19-cbceac90048c41ec8017855021792432-1024-1024.webp",
    etiqueta: "URBAN"
  },
  {
    id: 9,
    nome: "Tênis Hocks Átimo - Classic Black",
    categoria: "Tênis",
    preco: 269.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/13-581b7794790ee5621817931235196920-1024-1024.webp",
    etiqueta: "ESTILO"
  },
  {
    id: 10,
    nome: "Tênis Tesla Pulse All White",
    categoria: "Tênis",
    preco: 259.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/1-c5a14c5e4a416d7a8d17853572799438-1024-1024.webp",
    etiqueta: "NOVIDADE"
  },

  // ROUPAS STREETWEAR
  {
    id: 11,
    nome: "Touca CBGANG World Preta",
    categoria: "Roupas",
    preco: 89.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/087/236/products/1-feca549b6f27291c0f17835413793211-1024-1024.webp",
    etiqueta: "STREETWEAR"
  },
  {
    id: 12,
    nome: "Moletom ÖUS Canguru zíper Corrida Maluca Pristine",
    categoria: "Roupas",
    preco: 189.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_1754-d0bfc495b0203a5a3a17501082703598-1024-1024.jpg",
    etiqueta: "CONFORTO"
  },
  {
    id: 13,
    nome: "Calça Brabois Baggy Street Pants Linha branca",
    categoria: "Roupas",
    preco: 229.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_1577-8e57dc2f40c17c2f8917500216976135-1024-1024.jpg",
    etiqueta: "URBAN"
  },
  {
    id: 14,
    nome: "BONÉ FIVE PANEL BRABOIS veludo",
    categoria: "Roupas",
    preco: 99.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_7104-8d58032db8c1845a2117217536773359-1024-1024.jpeg",
    etiqueta: "GRAPHIC"
  },
  {
    id: 15,
    nome: "Camiseta ÖUSHEAVY VERGONHA BRANCO",
    categoria: "Roupas",
    preco: 159.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_4350-e91a5c4443ca70035f17648644264358-1024-1024.jpg",
    etiqueta: "ESTILO"
  },

  // acessórios e equipamentos 
  {
    id: 16,
    nome: "CAPACETE NIGGLI PRO MODEL ITALO PENARRUBIA PRO LIGHT BRANCO",
    categoria: "Proteção",
    preco: 139.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_3729-044098be32a6a88a2217066258880333-1024-1024.jpeg",
    etiqueta: "SEGURANÇA"
  },
  {
    id: 17,
    nome: "KIT DE PROTEÇÃO G COMPLETO NIGGLI PADS PROFISSIONAL Adulto",
    categoria: "Proteção",
    preco: 79.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/11-15a2e4d8a39c2ee5ef16703608512925-640-01-0b4717940d30dfcd5b16904003478174-1024-1024.png",
    etiqueta: "PROTEÇÃO"
  },
  {
    id: 18,
    nome: "Vela para skate ACE RINGS WAX clear branca grande",
    categoria: "acessório",
    preco: 69.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_9503-d5e26f9fe6500e374317479323999007-1024-1024.jpeg",
    etiqueta: "ESSENCIAL"
  },
  {
    id: 19,
    nome: "Adesivos Bones importado BB MULLEN",
    categoria: "acessório",
    preco: 159.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_9523-bcd80f39dd521c7bf817246844265874-1024-1024.jpeg",
    etiqueta: "KIT"
  },
  {
    id: 20,
    nome: "Adesivos DGK I love haters importado",
    categoria: "acessório",
    preco: 49.90,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/109/588/products/img_23251-00956cbb0e0ac1736916904952826097-1024-1024.jpg",
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
