const calendarContainer = document.getElementById('calendar-container');

// Создаём модальное окно для показа фото
const modal = document.createElement('div');
modal.id = 'calendar-modal';
modal.style.display = 'none';
modal.innerHTML = `
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h3 id="modal-title"></h3>
    <img id="modal-photo" src="" alt="" />
    <p id="modal-desc"></p>
  </div>
`;
document.body.appendChild(modal);

const modalTitle = document.getElementById('modal-title');
const modalPhoto = document.getElementById('modal-photo');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

modalClose.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
}

// Загружаем события из JSON
fetch('data/calendar.json')
  .then(response => response.json())
  .then(events => {
    events.forEach(event => {
      const btn = document.createElement('button');
      btn.className = 'calendar-date';
      btn.textContent = new Date(event.date).getDate();
      
      btn.addEventListener('click', () => {
        modalTitle.textContent = event.title;
        modalPhoto.src = event.photo;
        modalDesc.textContent = event.description;
        modal.style.display = 'block';
      });

      calendarContainer.appendChild(btn);
    });
  })
  .catch(err => console.error('Ошибка загрузки календаря:', err));
