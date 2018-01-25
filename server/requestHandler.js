const sortFunction = function(input) {
  let result = input
    .split('')
    .sort((a, b) => a < b)
    .join('');
  return result;
};

module.exports = sortFunction;
