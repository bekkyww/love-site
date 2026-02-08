const mapContainer = document.getElementById('map-container');

// Создаём карту с Leaflet.js (легкая библиотека для карт)
// Нужно подключить CSS и JS Leaflet в HTML или через CDN

// Пример подключения в <head> index.html:
// <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

// Инициализация карты
const map = L.map(mapContainer).setView([51.1605, 71.4704], 13); // центр и масштаб

// Добавляем слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Загружаем места из JSON
fetch('data/places.json')
  .then(response => response.json())
  .then(places => {
    places.forEach(place => {
      const marker = L.marker([place.lat, place.lng]).addTo(map);

      const popupContent = `
        <h3>${place.name}</h3>
        <img src="${place.photo}" alt="${place.name}" style="max-width:150px; border-radius:8px;" />
        <p>${place.description}</p>
      `;

      marker.bindPopup(popupContent);
    });
  })
  .catch(err => console.error('Ошибка загрузки карты:', err));
