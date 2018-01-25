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

const test = a => {
  return a + 3;
};

console.log(memoize(1).then(res => console.log(res)));
console.log(memoize(2).then(res => console.log(res)));
console.log(memoize(3).then(res => console.log(res)));
console.log(memoize(1).then(res => console.log(res)));
// module.exports = postRequest;
