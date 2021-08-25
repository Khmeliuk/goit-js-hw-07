const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const js_ingredients = document.querySelector('#ingredients');
// console.log(js_ingredients);
 const item = [];
// const item = js_ingredients.createElement('li')
// console.log(ingredients.length);
ingredients.forEach(element => {
   const liiIem = document.createElement('li');
  liiIem.textContent = element;
  item.push(liiIem);
  // console.log(item);
  // item.textContent(element);
});
item.forEach(element => {
  js_ingredients.appendChild(element);
});
