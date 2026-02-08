const hintEl = document.getElementById('hint');
const codeInput = document.getElementById('code-input');
const submitBtn = document.getElementById('submit-code');

let questSteps = [];
let currentStep = 0;

// Загружаем подсказки из JSON
fetch('data/quest.json')
  .then(response => response.json())
  .then(data => {
    questSteps = data;
    if (questSteps.length > 0) {
      hintEl.textContent = questSteps[currentStep].hint;
    }
  })
  .catch(err => console.error('Ошибка загрузки квеста:', err));

// Обработка ввода кода
submitBtn.addEventListener('click', () => {
  const userCode = codeInput.value.trim();

  if (!questSteps.length) return;

  if (userCode === questSteps[currentStep].code) {
    alert(questSteps[currentStep].message);

    currentStep++;

    if (currentStep < questSteps.length) {
      hintEl.textContent = questSteps[currentStep].hint;
      codeInput.value = "";
    } else {
      hintEl.textContent = "Ты дошла до конца квеста! 🎉";
      codeInput.style.display = "none";
      submitBtn.style.display = "none";
    }
  } else {
    alert("Неверный код. Попробуй ещё раз ❌");
    codeInput.value = "";
  }
});
