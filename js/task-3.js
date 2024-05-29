const inputElem = document.querySelector('input#name-input'); 
inputElem.addEventListener('input', onChangeInput);

function onChangeInput() {
    const inputSpan = document.querySelector('span#name-output'); 
    if (inputElem.value.trim() === '') {
        console.log('Hello, Anonymous');
    } else {
        console.log(`Hello, ${inputElem.value}`);
    }
}