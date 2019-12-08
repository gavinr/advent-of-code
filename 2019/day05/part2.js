var input = [3,225,1,225,6,6,1100,1,238,225,104,0,1101,48,82,225,102,59,84,224,1001,224,-944,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,1101,92,58,224,101,-150,224,224,4,224,102,8,223,223,1001,224,3,224,1,224,223,223,1102,10,89,224,101,-890,224,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,1101,29,16,225,101,23,110,224,1001,224,-95,224,4,224,102,8,223,223,1001,224,3,224,1,223,224,223,1102,75,72,225,1102,51,8,225,1102,26,16,225,1102,8,49,225,1001,122,64,224,1001,224,-113,224,4,224,102,8,223,223,1001,224,3,224,1,224,223,223,1102,55,72,225,1002,174,28,224,101,-896,224,224,4,224,1002,223,8,223,101,4,224,224,1,224,223,223,1102,57,32,225,2,113,117,224,101,-1326,224,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1,148,13,224,101,-120,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,8,677,226,224,102,2,223,223,1006,224,329,101,1,223,223,107,677,677,224,1002,223,2,223,1006,224,344,101,1,223,223,8,226,677,224,102,2,223,223,1006,224,359,101,1,223,223,107,226,226,224,102,2,223,223,1005,224,374,1001,223,1,223,1108,677,226,224,1002,223,2,223,1006,224,389,101,1,223,223,107,677,226,224,102,2,223,223,1006,224,404,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,419,1001,223,1,223,108,677,677,224,102,2,223,223,1005,224,434,1001,223,1,223,1008,677,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,7,226,677,224,1002,223,2,223,1006,224,464,1001,223,1,223,1007,677,677,224,102,2,223,223,1005,224,479,1001,223,1,223,1007,226,226,224,1002,223,2,223,1005,224,494,1001,223,1,223,108,226,226,224,1002,223,2,223,1005,224,509,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,524,101,1,223,223,1107,677,677,224,102,2,223,223,1005,224,539,101,1,223,223,1107,677,226,224,102,2,223,223,1005,224,554,1001,223,1,223,108,677,226,224,1002,223,2,223,1006,224,569,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,584,101,1,223,223,8,677,677,224,1002,223,2,223,1006,224,599,1001,223,1,223,1008,226,226,224,102,2,223,223,1006,224,614,101,1,223,223,7,677,677,224,1002,223,2,223,1006,224,629,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,644,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,659,101,1,223,223,1108,226,226,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226];

var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const runProgram = (input, a) => {
  var input = [...inn]; // clone
  var currentLocation = 0;

  while (input[currentLocation] !== 99) {
    var currentValue = input[currentLocation];
    var parameterString = pad(currentValue, 5);
    var opCode = parseInt(parameterString[4]);

    var parameterModes = [];
    parameterModes.push(parseInt(parameterString[2]));
    if (opCode !== 3 && opCode !== 4) {
      parameterModes.push(parseInt(parameterString[1]));
      parameterModes.push(parseInt(parameterString[0])); // Parameters that an instruction writes to will never be in immediate mode.
    }

    var parameters = parameterModes.map((parameterMode, i) => {
      // 0 == position mode; 1 == immediate mode
      if (parameterMode === 0) {
        // position mode:
        return input[input[currentLocation + (i + 1)]];
      } else if (parameterMode === 1) {
        // immediate mode
        return input[currentLocation + (i + 1)];
      }
    });

    if (opCode === 1) {
      // add
      input[input[currentLocation + 3]] = parameters[0] + parameters[1];
      currentLocation = currentLocation + 4;
    } else if (opCode === 2) {
      input[input[currentLocation + 3]] = parameters[0] * parameters[1];
      currentLocation = currentLocation + 4;
    } else if (opCode === 3) {
      input[input[currentLocation + 1]] = a;
      currentLocation = currentLocation + 2;
    } else if (opCode === 4) {
      console.log("--------------------- OUTPUT:", parameters[0]);
      currentLocation = currentLocation + 2;
    } else if (opCode === 5) {
      // jump-if-true
      if (parameters[0] !== 0) {
        currentLocation = parameters[1];
      } else {
        currentLocation = currentLocation + 3;
      }
    } else if (opCode === 6) {
      // jump if false
      if (parameters[0] === 0) {
        currentLocation = parameters[1];
      } else {
        currentLocation = currentLocation + 3;
      }
    } else if (opCode === 7) {
      // less than
      if (parameters[0] < parameters[1]) {
        input[input[currentLocation + 3]] = 1;
      } else {
        input[input[currentLocation + 3]] = 0;
      }
      currentLocation = currentLocation + 4;
    } else if (opCode === 8) {
      // equals
      if (parameters[0] === parameters[1]) {
        input[input[currentLocation + 3]] = 1;
      } else {
        input[input[currentLocation + 3]] = 0;
      }
      currentLocation = currentLocation + 4;
    } else {
      console.log("error - opCode:", opCode);
      break;
    }
  }
};
console.log("RESULT: ", runProgram(input, 5));
