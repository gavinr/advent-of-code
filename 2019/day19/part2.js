var input = [109,424,203,1,21102,11,1,0,1106,0,282,21101,0,18,0,1106,0,259,1201,1,0,221,203,1,21102,1,31,0,1106,0,282,21101,0,38,0,1106,0,259,20102,1,23,2,21202,1,1,3,21101,1,0,1,21101,0,57,0,1105,1,303,2101,0,1,222,20101,0,221,3,21001,221,0,2,21102,1,259,1,21101,0,80,0,1105,1,225,21101,185,0,2,21102,91,1,0,1106,0,303,1202,1,1,223,21001,222,0,4,21102,259,1,3,21101,225,0,2,21102,1,225,1,21101,0,118,0,1106,0,225,20102,1,222,3,21102,1,131,2,21101,133,0,0,1106,0,303,21202,1,-1,1,22001,223,1,1,21101,148,0,0,1105,1,259,2101,0,1,223,21002,221,1,4,21002,222,1,3,21101,0,16,2,1001,132,-2,224,1002,224,2,224,1001,224,3,224,1002,132,-1,132,1,224,132,224,21001,224,1,1,21101,0,195,0,106,0,109,20207,1,223,2,20101,0,23,1,21102,1,-1,3,21101,0,214,0,1105,1,303,22101,1,1,1,204,1,99,0,0,0,0,109,5,1201,-4,0,249,22101,0,-3,1,22101,0,-2,2,21201,-1,0,3,21101,0,250,0,1106,0,225,21201,1,0,-4,109,-5,2106,0,0,109,3,22107,0,-2,-1,21202,-1,2,-1,21201,-1,-1,-1,22202,-1,-2,-2,109,-3,2106,0,0,109,3,21207,-2,0,-1,1206,-1,294,104,0,99,22102,1,-2,-2,109,-3,2105,1,0,109,5,22207,-3,-4,-1,1206,-1,346,22201,-4,-3,-4,21202,-3,-1,-1,22201,-4,-1,2,21202,2,-1,-1,22201,-4,-1,1,21201,-2,0,3,21101,343,0,0,1106,0,303,1105,1,415,22207,-2,-3,-1,1206,-1,387,22201,-3,-2,-3,21202,-2,-1,-1,22201,-3,-1,3,21202,3,-1,-1,22201,-3,-1,2,22101,0,-4,1,21102,384,1,0,1106,0,303,1105,1,415,21202,-4,-1,-4,22201,-4,-3,-4,22202,-3,-2,-2,22202,-2,-4,-4,22202,-3,-2,-3,21202,-4,-1,-2,22201,-3,-2,1,21201,1,0,-4,109,-5,2106,0,0];

var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const intcodeRun = (inn, a) => {
  var input = [...inn]; // clone
  var currentLocation = 0;
  var relativeBase = 0;
  let fullOutput = [];


  const getParam = (param_num) => {
    var imode = input[currentLocation];
    var val = input[currentLocation + param_num];
    var parameterString = pad(imode, 5);

    var mode;
    if(param_num === 1) {
      mode = parameterString.charAt(2);
    } else if (param_num === 2) {
      mode = parameterString.charAt(1);
    } else if (param_num === 3) {
      mode = parameterString.charAt(0);
    }

    if(mode === "0") {
      return input[val]
    } else if (mode === "1") {
      return val;
    } else if (mode === "2") {
      return input[val + relativeBase];
    }
  }
  
  const setParam = (param_num, set_to) => {
    var imode = input[currentLocation];
    var val = input[currentLocation + param_num];
    var parameterString = pad(imode, 5);

    var mode;
    if(param_num === 1) {
      mode = parameterString.charAt(2);
    } else if (param_num === 2) {
      mode = parameterString.charAt(1);
    } else if (param_num === 3) {
      mode = parameterString.charAt(0);
    }

    if(mode === "0") {
      input[val] = set_to;
    } else if (mode === "1") {
      console.error('ERROR SHOULD NOT BE HERE');
    } else if (mode === "2") {
      input[val + relativeBase] = set_to;
    }
  }

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
      const inn = a.shift();
      setParam(1, inn);
      currentLocation = currentLocation + 2;
    } else if (opCode === 4) {
      // console.log("--------------------- OUTPUT:", getParam(1));
      // fullOutput.push(getParam(1));

      return getParam(1);
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
  }
  return fullOutput;

};


const render = grid => {
  const tableDomNode = document.getElementById("gameTable");
  while (tableDomNode.firstChild) {
    tableDomNode.removeChild(tableDomNode.firstChild);
  }
  const widthHeight = "font-size: 10px; width: 10px; height: 10px; text-align: center;";

  let currentRow = document.createElement("tr");
  tableDomNode.append(currentRow);

  Object.keys(grid).forEach((row) => {
    currentRow = document.createElement("tr");
    tableDomNode.append(currentRow);

    Object.keys(grid[row]).forEach((col) => {
      const td = document.createElement("td");
      td.innerHTML = grid[row][col];
      td.style.cssText = widthHeight;
      if(grid[row][col] === 0) {
        td.style["background-color"] = "white";
      } else if(grid[row][col] === 1) {
        td.style["background-color"] = "red";
      } else {
        console.error('error');
      }
      currentRow.appendChild(td);
    });
  });
};

const checkNAboveFilled = (grid, [x, y], n) => {
  // console.log('checkNAboveFilled', x, y, n);
  if(y < n) {
    return false;
  } else {
    for(let i = 0; i < n; i++) {
      const checkValue = grid[y-i][x];
      if(checkValue === 0) {
        return false;
      }
    }
  }
  return true;
}

const runProgram = (input, n) => {
  const size = 4000;
  const grid = {};
  for(let y = 0; y < size; y++) {
    grid[y] = {};

    let foundOnes = false;
    let foundSecondZeros = false;

    for(let x = 0; x < size; x++) {
      if(foundSecondZeros === false) {

        grid[y][x] = intcodeRun(input, [x,y]);
        if(grid[y][x] === 1) {
          foundOnes = true;
        }
        if(foundOnes && grid[y][x] === 0) {
          foundSecondZeros = true;
        }
      }
    }
    // Now that we've written this row, check this row.
    // find first n cells that are filled
    // for each of those, check if the "tenAboveFilled()"
    let validCount = 0;
    let totalValOnes = 0;
    let lastValid;
    for(let j = 0; j < Object.keys(grid[y]).length; j++) {
      const val = grid[y][j];
      if(val === 1) {
        totalValOnes = totalValOnes + 1;
        const valid = checkNAboveFilled(grid, [j, y], n);
        if(valid === true) {
          validCount++;
          lastValid = [j, y];
        }
      }
      
    }
    if(totalValOnes % 10 === 0 || totalValOnes > 190) {
      console.log('[totalValOnes, validCount, lastValid]:', totalValOnes, validCount, lastValid);
    }
    if(validCount >= n) {
      console.log('FOUND', lastValid);
      return (lastValid[0]-n-1)*10000 + lastValid[1]-n-1;
    }
  }

  render(grid);
}

console.log("RESULT: ", runProgram(input, 100));