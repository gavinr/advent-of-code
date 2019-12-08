const input = [3,8,1001,8,10,8,105,1,0,0,21,38,55,68,93,118,199,280,361,442,99999,3,9,1002,9,2,9,101,5,9,9,102,4,9,9,4,9,99,3,9,101,3,9,9,1002,9,3,9,1001,9,4,9,4,9,99,3,9,101,4,9,9,102,3,9,9,4,9,99,3,9,102,2,9,9,101,4,9,9,102,2,9,9,1001,9,4,9,102,4,9,9,4,9,99,3,9,1002,9,2,9,1001,9,2,9,1002,9,5,9,1001,9,2,9,1002,9,4,9,4,9,99,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99];

var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

class Amp {
  input = [];
  halted = false;
  currentLocation = 0;
  currentOutput = false;

  constructor(initialInput) {
    this.input = [... initialInput];
    this.halted = false;
    this.currentLocation = 0;
    this.currentOutput = false;
  }

  runUntilOutput(inputVals) {
    let output = false;
    [output, this.input, this.currentLocation] = intcodeComputer(this.input, inputVals, this.currentLocation);
    if(output === false) {
      this.halted = true;
    }
    this.currentOutput = output;
    return output;
  }
}

const intcodeComputer = (inn, inputValues, currentLocation) => {
  var input = [...inn]; // clone
  var inputVals = [...inputValues];


  

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
      if(inputVals.length > 0) {
        input[input[currentLocation + 1]] = inputVals[0];
        inputVals.shift();
        currentLocation = currentLocation + 2;
      } else {
        console.error('ERROR: Looking for an input but do not have one!');
      }
    } else if (opCode === 4) {
      // OUTPUT
      console.log("--------------------- OUTPUT:", parameters[0]);
      return [parameters[0], input, currentLocation + 2]; // assuming only one output for now????
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

  if(input[currentLocation] === 99) {
    // HALTED! return
    return [false, input, currentLocation];
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
  return permute('56789');
}

const runAllAmplifiers = (input, phaseOrderString) => {

  const amps = [];
  for(let i = 0; i < 5; i++) {
    amps.push(new Amp(input));
  }

  // run through once with the phases
  const outputAmpA = amps[0].runUntilOutput([parseInt(phaseOrderString[0]), 0]);
  const outputAmpB = amps[1].runUntilOutput([parseInt(phaseOrderString[1]), outputAmpA]);
  const outputAmpC = amps[2].runUntilOutput([parseInt(phaseOrderString[2]), outputAmpB]);
  const outputAmpD = amps[3].runUntilOutput([parseInt(phaseOrderString[3]), outputAmpC]);
  let lastOutputAmpE = amps[4].runUntilOutput([parseInt(phaseOrderString[4]), outputAmpD]);

  // "feedback loop mode" = run through the loop of amplifiers as many times as it takes
  // passing each output to the next one's input, until we halt
  let lastOutput = lastOutputAmpE;
  let counter = 0;
  let halted = false;
  while(halted === false) {
    const currentAmp = amps[counter % 5];
    lastOutput = currentAmp.runUntilOutput([lastOutput]);
    if(lastOutput === false) {
      halted = true;
      break;
    } else {
      if((counter % 5) === 4) {
        lastOutputAmpE = lastOutput;
      }
    }
    counter = counter + 1;
  }

  return lastOutputAmpE;
};

const runProgram = (input) => {
  // test:
  // return runAllAmplifiers([3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5], '98765');
  // return runAllAmplifiers([3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10], '97856');
  
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
