const complimentBox = document.getElementById('compliment-box');
const newComplimentBtn = document.getElementById('new-compliment');
let compliments = [];

// Загружаем комплименты из JSON
fetch('data/compliments.json')
  .then(response => response.json())
  .then(data => {
    compliments = data;
  })
  .catch(err => console.error('Ошибка загрузки комплиментов:', err));

// При клике показываем случайный комплимент
newComplimentBtn.addEventListener('click', () => {
  if (compliments.length === 0) return;

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  if (complimentBox) {
    complimentBox.textContent = compliment;
  }
});
