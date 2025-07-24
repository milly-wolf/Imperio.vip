// 1. MATRIX HACKER BACKGROUND
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFD700"; // Dourado
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);

// 2. LOGIN SIMPLES COM REDIRECIONAMENTO
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      // Simulação de acesso VIP com qualquer email e senha
      if (email && senha) {
        localStorage.setItem("logado", "sim");
        window.location.href = "vip.html";
      } else {
        alert("Acesso negado.");
      }
    });
  }

  // 3. BLOQUEIO DE ACESSO DIRETO A PÁGINAS INTERNAS
  const protegido = ["vip.html", "manual.html", "rpg.html", "quiz.html", "cartas.html"];
  const paginaAtual = window.location.pathname.split("/").pop();
  if (protegido.includes(paginaAtual)) {
    if (localStorage.getItem("logado") !== "sim") {
      window.location.href = "index.html";
    }
  }

  // 4. BOTÃO DE LOGOUT (se quiser usar no futuro)
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("logado");
      window.location.href = "index.html";
    });
  }

  // 5. ANIMAÇÃO BÁSICA PARA OS BOTÕES DA SALA VIP
  const botoes = document.querySelectorAll(".botao-vip");
  botoes.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
