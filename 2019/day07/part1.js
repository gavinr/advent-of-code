const input = [3,8,1001,8,10,8,105,1,0,0,21,38,55,68,93,118,199,280,361,442,99999,3,9,1002,9,2,9,101,5,9,9,102,4,9,9,4,9,99,3,9,101,3,9,9,1002,9,3,9,1001,9,4,9,4,9,99,3,9,101,4,9,9,102,3,9,9,4,9,99,3,9,102,2,9,9,101,4,9,9,102,2,9,9,1001,9,4,9,102,4,9,9,4,9,99,3,9,1002,9,2,9,1001,9,2,9,1002,9,5,9,1001,9,2,9,1002,9,4,9,4,9,99,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99];

var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const intcodeComputer = (inn, inputValues) => {
  var input = [...inn]; // clone
  var inputVals = [...inputValues];
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
      // MULTIPLY
      input[input[currentLocation + 3]] = parameters[0] * parameters[1];
      currentLocation = currentLocation + 4;
    } else if (opCode === 3) {
      // INPUT
      input[input[currentLocation + 1]] = inputVals[0];
      inputVals.shift();
      currentLocation = currentLocation + 2;
    } else if (opCode === 4) {
      // OUTPUT
      console.log("--------------------- OUTPUT:", parameters[0]);
      return parameters[0]; // assuming only one output for now????
      // currentLocation = currentLocation + 2;
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
}

const permute = (str) => {
  const permutations = [];

  if(str.length === 1) {
    return str;
  } else {
    for(let i = 0; i < str.length; i++) {
      const char = str[i];
      if(str.indexOf(char) != i) {
        continue;
      }
      const remainingString = str.slice(0, i) + str.slice(i+1, str.length);
      for(var sub of permute(remainingString)) {
        permutations.push(char + sub);
      }
    }
  }
  return permutations;
}

// get each possible amplifier phase setting (an integer from 0 to 4). Each phase setting is used exactly once, but the Elves can't remember which amplifier needs which phase setting.
const getAllPhaseOptions = () => {
  return permute('01234');
}

const runAmplifier = (input, phaseSetting, inputSignal) => {
  return intcodeComputer(input, [phaseSetting, inputSignal]);
}

const runAllAmplifiers = (input, phaseOrderString) => {
  const outputAmpA = runAmplifier(input, parseInt(phaseOrderString[0]), 0);
  const outputAmpB = runAmplifier(input, parseInt(phaseOrderString[1]), outputAmpA);
  const outputAmpC = runAmplifier(input, parseInt(phaseOrderString[2]), outputAmpB);
  const outputAmpD = runAmplifier(input, parseInt(phaseOrderString[3]), outputAmpC);
  const outputAmpE = runAmplifier(input, parseInt(phaseOrderString[4]), outputAmpD);
  return outputAmpE;
};

const runProgram = (input) => {
  // test:
  // return runAllAmplifiers([3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0], '43210');
  // return runAllAmplifiers([3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0], '01234');
  // return runAllAmplifiers([3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0], '10432');
  
  // get the phase setting options:
  const allOptions  = getAllPhaseOptions();
  const allOutputs = allOptions.map((phaseOrderString) => {
    const res = runAllAmplifiers(input, phaseOrderString);
    return res;
  });
  allOutputs.sort(function(a, b){return b-a});
  return allOutputs[0];
};
console.log("RESULT: ", runProgram(input));
