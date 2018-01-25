const clickHandler = document.querySelector('.clickHandler');
const outputField = document.querySelector('input[name=response]');
const inputString = document.querySelector('input[name=request]');

const updateInputField = string => {
  outputField.value = string;
  inputString.value = '';
};

const changeDisplayMsg = () => {
  clickHandler.textContent = 'With out space!';
};

const changeDisplayMsgBack = () => {
  clickHandler.textContent = 'I will sort your string!';
};

const postRequest = string => {
  let data = { inputStr: string.value };
  fetch('/api/sort', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => updateInputField(res.body));
};

clickHandler.addEventListener('mouseenter', () => changeDisplayMsg());
clickHandler.addEventListener('mouseleave', () => changeDisplayMsgBack());
clickHandler.addEventListener('click', () => postRequest(inputString));

document.addEventListener('keypress', event => {
  if (event.key == 'Enter') postRequest(inputString);
});
