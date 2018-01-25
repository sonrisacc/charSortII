const sortFunction = function(input) {
  const lowCase = /[a-z]/;
  const upCase = /[A-Z]/;
  const numbs = /[0-9]/;

  let string = input.split('');
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

module.exports = sortFunction;
