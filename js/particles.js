// ---------------------------
// Частицы/звёзды за курсором
// ---------------------------

const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let particles = [];
const particleCount = 50;

// Создаём частицы
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    speedX: 0,
    speedY: 0
  });
}

// Обновляем размер при ресайзе
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Сохраняем положение мышки
let mouse = { x: width / 2, y: height / 2 };

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Функция обновления частиц
function updateParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    // Двигаемся к курсору с лёгкой задержкой
    p.speedX += (mouse.x - p.x) * 0.01;
    p.speedY += (mouse.y - p.y) * 0.01;

    p.x += p.speedX;
    p.y += p.speedY;

    // Затухание скорости
    p.speedX *= 0.9;
    p.speedY *= 0.9;

    // Рисуем частицу
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = body.classList.contains('night') ? '#fff' : '#ff7f7f';
    ctx.fill();
  });

  requestAnimationFrame(updateParticles);
}

updateParticles();
