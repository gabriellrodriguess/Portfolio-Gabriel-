// Mensagem inicial
console.log("Portfólio carregado");

// ===== BOTÃO VOLTAR AO TOPO =====
const tela = document.querySelector(".tela");

const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑";
botaoTopo.style.position = "absolute";
botaoTopo.style.right = "20px";
botaoTopo.style.bottom = "20px";
botaoTopo.style.width = "40px";
botaoTopo.style.height = "40px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#38bdf8";
botaoTopo.style.color = "#000";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";

document.querySelector(".iphone").appendChild(botaoTopo);

// Mostrar botão ao rolar
tela.addEventListener("scroll", () => {
  if (tela.scrollTop > 200) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

// Voltar ao topo
botaoTopo.addEventListener("click", () => {
  tela.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== ANIMAÇÃO DE ENTRADA =====
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "0.5s";
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
