const clickHandler = document.querySelector('.clickHandler');
const outputField = document.querySelector('input[name=response]');
const inputString = document.querySelector('input[name=request]');

const updateInputField = function(string) {
  outputField.value = string;
  inputString.value = '';
};

const postRequest = function(string) {
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
    .then(res => {
      updateInputField(res.body);
    });
};

clickHandler.addEventListener('click', () => postRequest(inputString));
