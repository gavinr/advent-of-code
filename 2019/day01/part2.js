const input = [];

const runProgram = (input) => {
  var getFuel = function(input) {
    if(input <= 0) {
      return 0;
    } else {
      return input + getFuel(Math.floor(input/3) - 2);
    }
  }
  
  var result = inputValuesArray.reduce((accumulator, currentValue) => {
    var initialFuel = (Math.floor(currentValue/3) - 2);
    var restFuel = getFuel(initialFuel);
    
    return accumulator + restFuel;
  }, 0);
  
  console.log('TOTAL: ', result);
  return result;
};
console.log("RESULT: ", runProgram(input));
