// ---------------------------
// 1. Переключение между секциями
// ---------------------------
function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const current = document.getElementById(id);
  if (current) current.classList.add('active');

  // ---------------------------
  // Подсветка navbar
  // ---------------------------
  const navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(link => link.classList.remove('active'));

  const activeLink = document.querySelector(`#navbar a[onclick="showPage('${id}')"]`);
  if (activeLink) activeLink.classList.add('active');
}

// ---------------------------
// 2. День / Ночь
// ---------------------------
const themeToggle = document.getElementById('theme-toggle');
let theme = localStorage.getItem('theme') || 'day';
setTheme(theme);

themeToggle.addEventListener('click', () => {
  theme = theme === 'day' ? 'night' : 'day';
  setTheme(theme);
});

function setTheme(mode) {
  if (mode === 'night') {
    document.body.classList.add('night');
    document.body.classList.remove('day');
  } else {
    document.body.classList.add('day');
    document.body.classList.remove('night');
  }
  localStorage.setItem('theme', mode);
}

// ---------------------------
// 3. Обратный отсчёт до дня рождения
// ---------------------------
const birthday = new Date(2026, 1, 24); // 24 февраля 2026

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    countdownEl.textContent = days >= 0 ? days : 0;
  }
}

updateCountdown();
setInterval(updateCountdown, 60000);

// ---------------------------
// 4. Инициализация первой страницы
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
  showPage('home'); // показываем главную при загрузке
});
