const refInput = document.querySelector("input");
const refText = document.querySelector('#text');
console.log(refText.style);
// refText.style.fontSize  = "29px";
console.log(refInput.value);
refInput.addEventListener('input', atChangeFontSize);

function atChangeFontSize(event) {
    
    let size = 0;
    size = refInput.value;
    console.log(event.currentTarget.value);
    return  refText.style.fontSize  = `${size}px`
}