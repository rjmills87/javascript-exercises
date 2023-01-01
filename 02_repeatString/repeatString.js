const repeatString = function (str, num) {
  let repeatedString = "";
  if (num < 0) {
    return "ERROR";
  }
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
