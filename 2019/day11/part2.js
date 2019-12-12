// prettier-ignore
var input = [3,8,1005,8,319,1106,0,11,0,0,0,104,1,104,0,3,8,1002,8,-1,10,101,1,10,10,4,10,108,1,8,10,4,10,1001,8,0,28,2,1008,7,10,2,4,17,10,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,1002,8,1,59,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,0,10,4,10,1001,8,0,81,1006,0,24,3,8,1002,8,-1,10,101,1,10,10,4,10,108,0,8,10,4,10,102,1,8,105,2,6,13,10,1006,0,5,3,8,1002,8,-1,10,101,1,10,10,4,10,108,0,8,10,4,10,1002,8,1,134,2,1007,0,10,2,1102,20,10,2,1106,4,10,1,3,1,10,3,8,102,-1,8,10,101,1,10,10,4,10,108,1,8,10,4,10,1002,8,1,172,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,1,8,10,4,10,101,0,8,194,1,103,7,10,1006,0,3,1,4,0,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,101,0,8,228,2,109,0,10,1,101,17,10,1006,0,79,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,1002,8,1,260,2,1008,16,10,1,1105,20,10,1,3,17,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,1002,8,1,295,1,1002,16,10,101,1,9,9,1007,9,1081,10,1005,10,15,99,109,641,104,0,104,1,21101,387365733012,0,1,21102,1,336,0,1105,1,440,21102,937263735552,1,1,21101,0,347,0,1106,0,440,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21102,3451034715,1,1,21101,0,394,0,1105,1,440,21102,3224595675,1,1,21101,0,405,0,1106,0,440,3,10,104,0,104,0,3,10,104,0,104,0,21101,0,838337454440,1,21102,428,1,0,1105,1,440,21101,0,825460798308,1,21101,439,0,0,1105,1,440,99,109,2,22101,0,-1,1,21102,1,40,2,21101,0,471,3,21101,461,0,0,1106,0,504,109,-2,2106,0,0,0,1,0,0,1,109,2,3,10,204,-1,1001,466,467,482,4,0,1001,466,1,466,108,4,466,10,1006,10,498,1102,1,0,466,109,-2,2105,1,0,0,109,4,2101,0,-1,503,1207,-3,0,10,1006,10,521,21101,0,0,-3,21202,-3,1,1,22102,1,-2,2,21101,1,0,3,21102,540,1,0,1105,1,545,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,568,2207,-4,-2,10,1006,10,568,22102,1,-4,-4,1106,0,636,22102,1,-4,1,21201,-3,-1,2,21202,-2,2,3,21102,587,1,0,1105,1,545,21201,1,0,-4,21101,0,1,-1,2207,-4,-2,10,1006,10,606,21102,0,1,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,628,22102,1,-1,1,21102,1,628,0,105,1,503,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2106,0,0];

var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const intcodeRun = (inn, a) => {
  var input = [...inn]; // clone
  var currentLocation = 0;
  var relativeBase = 0;
  var currentResults = [];
  var allResults = [];
  var currentXY = [0, 0]; // default starting
  var currentFacing = 0; // 0 = up. 1 = right. 2 = down. 3 = left
  var currentGrid = {};
  

  const getParam = param_num => {
    var imode = input[currentLocation];
    var val = input[currentLocation + param_num];
    var parameterString = pad(imode, 5);

    var mode;
    if (param_num === 1) {
      mode = parameterString.charAt(2);
    } else if (param_num === 2) {
      mode = parameterString.charAt(1);
    } else if (param_num === 3) {
      mode = parameterString.charAt(0);
    }

    if (mode === "0") {
      return input[val];
    } else if (mode === "1") {
      return val;
    } else if (mode === "2") {
      return input[val + relativeBase];
    }
  };

  const setParam = (param_num, set_to) => {
    var imode = input[currentLocation];
    var val = input[currentLocation + param_num];
    var parameterString = pad(imode, 5);

    var mode;
    if (param_num === 1) {
      mode = parameterString.charAt(2);
    } else if (param_num === 2) {
      mode = parameterString.charAt(1);
    } else if (param_num === 3) {
      mode = parameterString.charAt(0);
    }

    if (mode === "0") {
      input[val] = set_to;
    } else if (mode === "1") {
      console.error("ERROR SHOULD NOT BE HERE");
    } else if (mode === "2") {
      input[val + relativeBase] = set_to;
    }
  };

  var count = 0;
  while (input[currentLocation] !== 99 && count < 10000000) {
    var currentValue = input[currentLocation];
    var parameterString = pad(currentValue, 5);
    var opCode = parseInt(parameterString[4]);

    if (opCode === 1) {
      // add
      setParam(3, getParam(1) + getParam(2));
      currentLocation = currentLocation + 4;
    } else if (opCode === 2) {
      // multiply
      setParam(3, getParam(1) * getParam(2));

      currentLocation = currentLocation + 4;
    } else if (opCode === 3) {
      // input
      setParam(1, a);
      currentLocation = currentLocation + 2;
    } else if (opCode === 4) {
      // console.log("--------------------- OUTPUT:", getParam(1));
      currentResults.push(getParam(1));
      currentLocation = currentLocation + 2;
    } else if (opCode === 5) {
      // jump-if-true
      if (getParam(1) !== 0) {
        currentLocation = getParam(2);
      } else {
        currentLocation = currentLocation + 3;
      }
    } else if (opCode === 6) {
      // jump if false
      if (getParam(1) === 0) {
        currentLocation = getParam(2);
      } else {
        currentLocation = currentLocation + 3;
      }
    } else if (opCode === 7) {
      // less than
      if (getParam(1) < getParam(2)) {
        setParam(3, 1);
      } else {
        setParam(3, 0);
      }
      currentLocation = currentLocation + 4;
    } else if (opCode === 8) {
      // equals
      if (getParam(1) === getParam(2)) {
        setParam(3, 1);
      } else {
        setParam(3, 0);
      }
      currentLocation = currentLocation + 4;
    } else if (opCode === 9) {
      // modify relative base
      relativeBase = relativeBase + getParam(1); // input[currentLocation + 1];
      currentLocation = currentLocation + 2;
    } else {
      console.log("error - opCode:", opCode);
      break;
    }
    count = count + 1;

    if (currentResults.length === 2) {
      // console.log('currentResults', currentResults);
      // First, it will output a value indicating the color to paint the panel the robot is over: 0 means to paint the panel black, and 1 means to paint the panel white. Second, it will output a value indicating the direction the robot should turn: 0 means it should turn left 90 degrees, and 1 means it should turn right 90 degrees.
      allResults.push({
        location: currentXY,
        color: currentResults[0] === 0 ? "black" : "white"
      });

      if(!currentGrid.hasOwnProperty(currentXY[0])) {
        // if(!currentGrid[currentXY[0]].hasOwnProperty(currentXY[1])) {
        currentGrid[currentXY[0]] = {};
        // }
      }
      currentGrid[currentXY[0]][currentXY[1]] = currentResults[0];

      
      if (currentResults[1] === 0) {
        // turn left 90 degrees and move one block forward
        if (currentFacing === 0) {// 0 = up. 1 = right. 2 = down. 3 = left
          currentFacing = 3;
          currentXY = [currentXY[0] - 1, currentXY[1]];
        } else if (currentFacing === 1) {
          currentFacing = 0;
          currentXY = [currentXY[0], currentXY[1] + 1];
        } else if (currentFacing === 2) {
          currentFacing = 1;
          currentXY = [currentXY[0] + 1, currentXY[1]];
        } else if (currentFacing === 3) {
          currentFacing = 2;
          currentXY = [currentXY[0], currentXY[1] - 1];
        }
      } else {
        // turn right 90 degrees and move one block forward
        if (currentFacing === 0) {
          currentFacing = 1;
          currentXY = [currentXY[0] + 1, currentXY[1]];
        } else if (currentFacing === 1) {
          currentFacing = 2;
          currentXY = [currentXY[0], currentXY[1] - 1];
        } else if (currentFacing === 2) {
          currentFacing = 3;
          currentXY = [currentXY[0] - 1, currentXY[1]];
        } else if (currentFacing === 3) {
          currentFacing = 0;
          currentXY = [currentXY[0], currentXY[1] + 1];
        }
      }

      // set input (a) to the current color of (the new) currentXY:
      if(currentGrid.hasOwnProperty(currentXY[0]) && currentGrid[currentXY[0]].hasOwnProperty(currentXY[1])) {
        a = currentGrid[currentXY[0]][currentXY[1]]
      } else {
        a = 0;
      }

      // console.log('moved to', currentXY, ' and now facing ', currentFacing);
      currentResults = []; // done, reset
    }
  }

  // convert the "currentGrid" object to arrays, and print them out for reading
  const xMin = Math.min( ...Object.keys(currentGrid));
  const xMax = Math.max( ...Object.keys(currentGrid));
  let yMin = 100;
  let yMax = -100;
  Object.keys(currentGrid).forEach((xVal) => {
    const tempMin = Math.min( ...Object.keys(currentGrid[xVal]));
    const tempMax = Math.max( ...Object.keys(currentGrid[xVal]));
    yMin = (tempMin < yMin) ? tempMin : yMin;
    yMax = (tempMax > yMax) ? tempMax : yMax;
  });

  for(let y = yMax; y >= yMin; y--) {
    let toPrint = '';
    for(let x = xMin; x <= xMax; x++) {
      if(!currentGrid[x].hasOwnProperty(y)) {
        currentGrid[x][y] = 0;
      }

      if(currentGrid[x][y] === 0) {
        toPrint = toPrint + '░';
      } else {
        toPrint = toPrint + '█';
      }
    }
    console.log(toPrint);
  }
  return 0;
};

const runProgram = input => {
  // provide 0 if the robot is over a black panel or 1 if the robot is over a white panel
  // first panel is black
  const res1 = intcodeRun(input, 1);
  return res1;
};

console.log("RESULT: ", runProgram(input));
