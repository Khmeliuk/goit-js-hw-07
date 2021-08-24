const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const makeImgMarkup = ({url, alt}) => {
  
  return `<li class = "list"><img src =  ${url} alt = ${alt} width = 640/></li>`;
}


const gallaryMarkupAdd = images.map(makeImgMarkup)
  .join('');
// console.log(gallaryMarkupAdd);
// console.log(makeImgMarkup(images[0]));

const imagList = document.querySelector('#gallery');
imagList.insertAdjacentHTML('afterbegin', gallaryMarkupAdd);


// refImg.style.width = '17px';
