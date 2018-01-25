const sortFunction = function(input) {
  let result = input
    .split('')
    .sort()
    .reverse()
    .join('');
  return result;
};

module.exports = sortFunction;
