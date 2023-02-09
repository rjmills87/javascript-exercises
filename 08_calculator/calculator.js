const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let sum = num1 - num2;
  return sum;
};

const sum = function (arr) {
  let arrSum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return arrSum;
};

const multiply = function (numbers) {
  let total = numbers.reduce(function (a, b) {
    return a * b;
  }, 1);
  return total;
};

const power = function (num1, num2) {
  let powerOfNumber = Math.pow(num1, num2);
  return powerOfNumber;
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
