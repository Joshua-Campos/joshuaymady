// ====== PROTECCIÓN SIMPLE Y PERFECTA ======
if (localStorage.getItem("madiqueem-auth") !== "true") {
  window.location.replace("login.html");
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
// ===========================================

// Aquí sigue TODO tu código actual (música, corazones, chispitas, terminal, etc.)
// NO BORRES NADA DE LO QUE YA TENÍAS ABAJO
// Música
let playing = false;
const song = document.getElementById('song');
function toggleMusic() {
  playing ? song.pause() : song.play();
  playing = !playing;
}

// Corazones cayendo
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = Math.random() > 0.5 ? '💜' : '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 5 + 5 + 's';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 300);

// Countdown
function updateCountdown() {
  const birthday = new Date('2025-11-23T00:00:00');
  const now = new Date();
  const diff = birthday - now;
  if (diff < 0) {
    document.getElementById('countdown').innerHTML = "¡HOY ES TU CUMPLE, PRECIOSA!";
    confettiRain();
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m`;
}
setInterval(updateCountdown, 60000);
updateCountdown();

// CHISPITAS MODE ÉPICO
// CHISPITAS MODE – Texto más pequeño y hermoso (perfecto en móvil)
function chispitasMode() {
  document.body.style.background = "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff69b4)";
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradient 5s ease infinite";

  const text = document.createElement('div');
  text.innerHTML = "¡CHISPITAS! LA QUE PUEDE PUEDE<br>Y TÚ ERES LA MEJOR DEL UNIVERSO ♡";
  text.style.cssText = `
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6vw;           /* más pequeño y adaptable */
    max-font-size: 36px;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 30px #ff00ff, 0 0 60px #00ffff;
    text-align: center;
    z-index: 9999;
    pointer-events: none;
    line-height: 1.4;
    padding: 20px;
    background: rgba(0,0,0,0.4);
    border-radius: 30px;
    border: 3px solid #ff69b4;
  `;
  document.body.appendChild(text);

  confettiRain();
  if ('vibrate' in navigator) navigator.vibrate([200, 100, 300, 100, 200]);

  setTimeout(() => {
    text.remove();
    document.body.style.background = "black";
    document.body.style.animation = "none";
  }, 7000);
}

// TERMINAL INTERACTIVO con respuestas aleatorias
// TERMINAL DEL AMOR – Formato exacto que quieres
const responses = [
  "Yo te quiero más que al helado con extra chispitas ♡",
  "Eres mi excepción favorita y nunca quiero dejarte",
  "La que puede puede... ¡y tú puedes conmigo para siempre!",
  "Chispitas activadas. Modo: enamorado 1000%",
  "Te quiero hasta el infinito y más allá",
  "Eres el console.log más bonito que he visto nunca",
  "Mi corazón hace booom cada vez que te veo",
  "Tú eres mi helado favorito con chocolate derretido encima",
  "Mady > todo el chocolate del mundo",
  "Eres mi bug favorito... porque nunca quiero arreglarte",
  "Contigo cualquier día es espectacular",
  "Te quiero más que al guerito guapo favorito (o sea, yo jaja)",
  "Siempre serás mi persona favorita en todo el código del universo",
  "Buuuu no vale, ¡yo te amo más fuerte! ♡",
  "Joshua aquí reportándose: 100% queriendote en tiempo real"
];

const output = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');

input?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim() !== '') {
    const userText = this.value.trim();

    // Línea del usuario
    const userLine = document.createElement('div');
    userLine.innerHTML = `<span class="text-gray-500">$</span> <span class="text-pink-400">${userText}</span>`;
    output.appendChild(userLine);

    // Respuesta aleatoria
    setTimeout(() => {
      const responseLine = document.createElement('div');
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      responseLine.textContent = randomResponse;
      responseLine.className = "text-green-400 mt-1";
      output.appendChild(responseLine);

      // Scroll automático
      output.scrollTop = output.scrollHeight;

      // Confetti suave
      confetti({ particleCount: 20, spread: 80, origin: { y: 0.9 } });
    }, 400);

    this.value = '';
  }
});

// RAZONES POR LAS QUE TE AMO (corazones interactivos)
const reasons = [
  "Porque tu risa es mi sonido favorito",
  "Porque dices “chispitas” y se me ilumina el alma",
  "Porque eres la programadora más hermosa del mundo",
  "Por cómo te ves comiendo helado",
  "Porque contigo todo bug se convierte en feature",
  "Por tus abrazos que resetean mi día",
  "Porque eres más dulce que todo el chocolate del mundo",
  "Por cada “la que puede puede” que me motiva",
  "Porque contigo aprendí lo que es querer a alguien",
  "Por ser mi persona favorita en todo el universo",
  "Porque contigo hasta los lunes son bonitos",
  "Por cada mirada que me das y me derrites",
  "Porque eres mi hogar, mi paz y mi locura favorita",
  // Agrega todas las que quieras, ¡mientras más mejor!
];

document.querySelectorAll('.reason-heart').forEach((heart, index) => {
  heart.addEventListener('click', () => {
    const reason = reasons[index % reasons.length];
    alert("💜 " + reason + " 💜");
    confettiRain();
  });
});

// Confetti final
function confettiRain() {
  const duration = 4 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 8, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 8, angle: 120, spread: 55, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  }());
}

// Konami code sigue funcionando
let keys = [];
const konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", (e) => {
  keys.push(e.keyCode);
  if (keys.toString().indexOf(konami) >= 0) {
    chispitasMode();
    keys = [];
  }
});

