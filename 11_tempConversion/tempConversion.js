const convertToCelsius = function(input) {
    let result = ( input - 32 ) * 5 / 9;
    result = Math.round( result * 10 ) / 10;
    return result;

};

const convertToFahrenheit = function(input) {
  let result = (input * 1.8 ) + 32 ;
    result = Math.round( result * 10 ) / 10;
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
