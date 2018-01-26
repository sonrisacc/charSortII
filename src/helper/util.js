const postRequest = string => {
  console.log('fire', string);
  let data = { inputStr: string };
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

const memoize = fun => {
  let cache = [];
  return input => {
    if (cache[input] !== undefined) return cache[input];
    fun(input).then(res => {
      cache[input] = res;
      return cache[input];
    });
  };
};

const slowPostRequest = memoize(postRequest);

module.exports = slowPostRequest;
