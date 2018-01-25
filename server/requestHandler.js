const sortByLetters = function(input) {
  const letters = /[A-Za-z]/;
  const numbs = /[0-9]/;

  let string = input.trim().split('');
  let resultArr = [];
  let numsArr = [];

  for (let cur of string) {
    if (letters.test(cur)) resultArr.push(cur.toLowerCase());
    if (cur.match(numbs)) numsArr.push(cur);
  }

  resultArr = resultArr.sort().reverse();
  numsArr = numsArr.sort((a, b) => a < b);
  return [...resultArr, ...numsArr].join('');
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
