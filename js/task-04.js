
const btnChangeValue = document.querySelectorAll('button');
const value = document.querySelector('#value');
let counterValue = value.textContent;
const btnDecrement = btnChangeValue[0];
const btnIncrement = btnChangeValue[1];

btnDecrement.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue;
     
  });


btnIncrement.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue;
     
  });
