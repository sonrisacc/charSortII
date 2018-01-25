const postRequest = string => {
  let data = { inputStr: string.value };
  return fetch('/api/sort', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
};

module.exports = postRequest;
