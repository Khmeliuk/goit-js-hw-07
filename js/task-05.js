
const inputFieldRef = document.querySelector('input');
const nameFieldRef = document.querySelector('#name-output');

inputFieldRef.addEventListener('input', onInputChange);

function onInputChange (event){
    // console.log(event.currentTarget.value);
    if (event.currentTarget.value !== '')
        nameFieldRef.textContent = event.currentTarget.value;
    else
    return nameFieldRef.textContent = 'незнайомець';
    
   
}
