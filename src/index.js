const postRequest = require('./helper/util.js');

const clickHandler = document.querySelector('.clickHandler');
const outputField = document.querySelector('input[name=response]');
const inputString = document.querySelector('input[name=request]');

const updateInputField = string => {
  outputField.value = string;
  inputString.value = '';
};

const changeDisplayMsg = () => {
  clickHandler.textContent = 'Enter anything!!';
};

const changeDisplayMsgBack = () => {
  clickHandler.textContent = 'I will sort your string!';
};

clickHandler.addEventListener('mouseenter', () => changeDisplayMsg());
clickHandler.addEventListener('mouseleave', () => changeDisplayMsgBack());
clickHandler.addEventListener('click', () => postRequest(inputString));

document.addEventListener('keypress', event => {
  if (event.key == 'Enter')
    postRequest(inputString).then(res => updateInputField(res.body));
});
