
const btnChangeValueRef = document.querySelectorAll('button');
const valueRef = document.querySelector('#value');
let counterValue = value.textContent;
const btnDecrement = btnChangeValueRef[0];
const btnIncrement = btnChangeValueRef[1];

btnDecrement.addEventListener('click', () => {
    counterValue--;
    valueRef.textContent = counterValue;
     
  });


btnIncrement.addEventListener('click', () => {
    counterValue++;
    valueRef.textContent = counterValue;
     
  });
