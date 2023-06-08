
const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
   key.addEventListener('click', () => {
      const keyValue = key.getAttribute('value');

      // обработка нажатий на кнопки калькулятора
      if (keyValue === 'C') {
         display.textContent = '';
      } else if (keyValue === '=') {
         const expression = eval(display.textContent);
         display.textContent = expression;
      } else {
         display.textContent += keyValue;
      }
   });
});
