const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputBlur);
function changeClass(addClass, removeClass) {
    inputRef.classList.remove(removeClass);
    inputRef.classList.add(addClass); 
}
function onInputBlur(event) {
   
    let inputLength = event.currentTarget.value.length;
    if (String(inputLength)  === inputRef.getAttribute('data-length'))
      
        changeClass('valid', 'invalid')
    else {
        changeClass('invalid', 'valid')
    } 
};