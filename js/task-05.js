
const inputField = document.querySelector('input');
const nameField = document.querySelector('#name-output');

inputField.addEventListener('input', onInputChange);

function onInputChange (event){
    // console.log(event.currentTarget.value);
    if (event.currentTarget.value !== '')
        nameField.textContent = event.currentTarget.value;
    else
    return nameField.textContent = 'незнайомець';
    
   
}
