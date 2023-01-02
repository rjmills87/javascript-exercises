function sumAll(min, max) {
  let arr = [min, max].sort((a, b) => a - b);
  let rangeArr = [];
  let sum = 0;

  for (let i = arr[0]; i < arr[1] + 1; i++) {
    rangeArr.push(i);
    sum = rangeArr.reduce((acc, cur) => acc + cur, 0);
  }
  if (min < 0 || max < 0 || Number(min) !== min || Number(max) !== max) {
    return "ERROR";
  } else {
    return sum;
  }
}
// Do not edit below this line
module.exports = sumAll;
