const inputElem = document.querySelector('#name-input');
const inputSpan = document.querySelector('#name-output');

inputElem.addEventListener('input', event => {
  const twoValue = event.currentTarget.value.trim();
  inputSpan.textContent = twoValue === '' ? 'Anonymous' : twoValue;
});
