const category = document.querySelector('#categories');

category.querySelectorAll('ul');
const js_item = category.querySelectorAll('.item');

js_item.forEach(element => {
     let titleRef = element.querySelector('h2');
    let countRef = element.querySelectorAll('li');
    console.log(`Категорія: ${titleRef.textContent}`)
    console.log(`Кількість елементів: ${countRef.length}`);
});
