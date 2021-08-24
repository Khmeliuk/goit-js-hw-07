const inputRef = document.querySelector('input');
console.log(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   
    let inputLength = event.currentTarget.value.length;
    if (inputLength < inputRef.getAttribute('data-length'))
    
     inputRef.classList.add('invalid'); 
    else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid'); 
    } 
};