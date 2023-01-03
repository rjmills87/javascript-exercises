const convertToCelsius = function (far) {
  const tempCelsius = (far - 32) * (5 / 9);
  return Number(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function (cel) {
  const tempFahrenheit = cel * 1.8 + 32;
  return Number(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
