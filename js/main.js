// ---------------------------
// 1. Переключение между секциями
// ---------------------------
function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const current = document.getElementById(id);
  if (current) current.classList.add('active');
}

// ---------------------------
// 2. День / Ночь
// ---------------------------
const themeToggle = document.getElementById('theme-toggle');

// Проверяем localStorage, чтобы тема сохранялась
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

// Установи сюда дату дня рождения: ГГГГ, ММ-1 (0-based), ДД
const birthday = new Date(2026, 2, 24); // 24 февраля 2026

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    countdownEl.textContent = days >= 0 ? days : 0;
  }
}

// Обновляем сразу и каждые 60 секунд
updateCountdown();
setInterval(updateCountdown, 60000);

// ---------------------------
// Готово!
// ---------------------------
// Теперь сайт умеет:
// - переключать страницы по showPage('id')
// - менять тему День / Ночь
// - считать дни до дня рождения
