const sortByLetters = function(input) {
  const lowCase = /[a-z]/;
  const upCase = /[A-Z]/;
  const numbs = /[0-9]/;

  let string = input.trim().split('');
  let resultArr = [];
  let numsArr = [];
  let everythingElseArr = [];

  for (let cur of string) {
    if (cur.match(lowCase) || cur.match(upCase)) {
      resultArr.push(cur.toLowerCase());
    } else if (cur.match(numbs)) {
      numsArr.push(cur);
    } else if (cur !== ' ') {
      everythingElseArr.push(cur);
    }
  }

  resultArr = resultArr.sort().reverse();
  numsArr = numsArr.sort((a, b) => a < b);
  return [...resultArr, ...numsArr, ...everythingElseArr].join('');
};

const sortByWords = function(input) {
  let string = input.trim().split(' ');

  for (i = 0; i < string.length; i++) {
    let escapedVal = string[i].match(/[a-zA-Z]+/g);
    let curVal = escapedVal ? escapedVal.join('') : '';
    string[i] = curVal;
  }
  let result = string
    .sort()
    .reverse()
    .join(' ');

  return result;
};

const requestHandler = function(input) {
  let string = input.trim().split(' ');
  if (string.length > 1) return sortByWords(input);
  if (string.length === 1) return sortByLetters(input);
};

module.exports = requestHandler;
