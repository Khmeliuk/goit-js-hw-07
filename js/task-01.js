const category = document.querySelector('#categories');

category.querySelectorAll('ul');
const js_item = category.querySelectorAll('.item');

js_item.forEach(element => {
    // console.log(element);
    let title = element.querySelector('h2');
    let count = element.querySelectorAll('li');
    console.log(`Категорія: ${title.textContent}`)
    console.log(`Кількість елементів: ${count.length}`);
});
