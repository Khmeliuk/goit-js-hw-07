const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const js_ingredients = document.querySelector('#ingredients');
let item = [];
 item = ingredients.map(element => {
   const liiIem = document.createElement('li');
   liiIem.textContent = element;
   return liiIem;
   
 });

js_ingredients.append(...item);



// item.forEach(element => {
//   js_ingredients.appendChild(element);
// });




