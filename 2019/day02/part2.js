const input = [];

const runProgram = (input) => {
  var i2 = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,19,10,23,2,13,23,27,1,5,27,31,2,6,31,35,1,6,35,39,2,39,9,43,1,5,43,47,1,13,47,51,1,10,51,55,2,55,10,59,2,10,59,63,1,9,63,67,2,67,13,71,1,71,6,75,2,6,75,79,1,5,79,83,2,83,9,87,1,6,87,91,2,91,6,95,1,95,6,99,2,99,13,103,1,6,103,107,1,2,107,111,1,111,9,0,99,2,14,0,0];

  // determine what pair of inputs produces the output 19690720

  // This function is roughly the solution from part 1:
  var runProgram = function(inn, a, b) {
    var input = [...inn]; // clone
    var currentLocation = 0;
    input[1] = a;
    input[2] = b;

    while (input[currentLocation] !== 99) {
      var currentValue = input[currentLocation];
      if(currentValue === 1) {
        input[input[currentLocation + 3]] = input[input[currentLocation + 1]] + input[input[currentLocation + 2]];
      } else if (currentValue === 2) {
        input[input[currentLocation + 3]] = input[input[currentLocation + 1]] * input[input[currentLocation + 2]];
      } else {
        console.log('error');
      }
      currentLocation = currentLocation + 4;
    } 
    return input[0];
  }

  for(var i = 0; i < 100; i++) {
    for(var j = 0; j < 100; j++) {
      var out = runProgram(i2, i, j);
      if(out == 19690720) {
        console.log('FOUND:', ((100 * i) + j));
        break;
      }
    }
  }
};
runProgram(input);