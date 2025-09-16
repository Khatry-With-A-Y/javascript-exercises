const convertToCelsius = function(fahrenheit) { //given solution is math magic but this one I like
  let celsius = (fahrenheit - 32) * 5/9;
  let roundedString = celsius.toFixed(1);
  let roundedFloat = parseFloat(roundedString);
  return roundedFloat;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32; 
  let roundedString = fahrenheit.toFixed(1);
  let roundedFloat = parseFloat(roundedString);
  return roundedFloat;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
