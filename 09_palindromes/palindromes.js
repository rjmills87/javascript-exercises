const palindromes = function (str) {
  let reverseString = str
    .split("")
    .reverse()
    .join("")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .join("")
    .toLowerCase();

  let normalSring = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .join("")
    .toLowerCase();

  if (reverseString === normalSring) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
