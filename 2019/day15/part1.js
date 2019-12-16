var input = [3,1033,1008,1033,1,1032,1005,1032,31,1008,1033,2,1032,1005,1032,58,1008,1033,3,1032,1005,1032,81,1008,1033,4,1032,1005,1032,104,99,1002,1034,1,1039,102,1,1036,1041,1001,1035,-1,1040,1008,1038,0,1043,102,-1,1043,1032,1,1037,1032,1042,1106,0,124,1001,1034,0,1039,102,1,1036,1041,1001,1035,1,1040,1008,1038,0,1043,1,1037,1038,1042,1105,1,124,1001,1034,-1,1039,1008,1036,0,1041,1002,1035,1,1040,101,0,1038,1043,1002,1037,1,1042,1106,0,124,1001,1034,1,1039,1008,1036,0,1041,1001,1035,0,1040,1002,1038,1,1043,1002,1037,1,1042,1006,1039,217,1006,1040,217,1008,1039,40,1032,1005,1032,217,1008,1040,40,1032,1005,1032,217,1008,1039,35,1032,1006,1032,165,1008,1040,7,1032,1006,1032,165,1101,2,0,1044,1105,1,224,2,1041,1043,1032,1006,1032,179,1101,1,0,1044,1105,1,224,1,1041,1043,1032,1006,1032,217,1,1042,1043,1032,1001,1032,-1,1032,1002,1032,39,1032,1,1032,1039,1032,101,-1,1032,1032,101,252,1032,211,1007,0,38,1044,1106,0,224,1101,0,0,1044,1105,1,224,1006,1044,247,1001,1039,0,1034,101,0,1040,1035,101,0,1041,1036,102,1,1043,1038,102,1,1042,1037,4,1044,1106,0,0,4,23,34,36,20,5,93,36,72,13,75,47,14,34,44,15,61,24,50,12,76,22,40,17,13,24,59,32,99,35,33,5,31,91,44,27,11,21,15,20,99,6,62,16,62,6,14,69,10,53,37,52,99,18,92,33,19,99,6,82,13,19,45,15,21,39,59,1,24,39,79,77,35,5,69,79,95,28,49,71,7,83,81,99,58,17,3,98,37,11,14,29,44,50,23,75,1,15,67,45,35,44,93,62,31,6,85,81,24,19,22,86,54,19,77,6,4,15,35,40,42,7,9,69,2,53,63,78,94,29,82,3,16,64,86,48,36,57,20,54,25,7,89,51,31,52,17,64,51,12,67,6,99,12,17,99,10,73,16,25,57,78,2,4,46,37,96,25,9,96,80,6,60,9,7,3,24,52,33,73,23,22,71,24,77,19,96,35,86,50,93,2,75,25,59,14,79,31,54,4,24,87,17,18,88,25,36,49,87,22,22,20,76,31,62,18,39,39,35,70,79,37,35,72,26,25,96,8,35,25,60,26,34,5,21,37,79,65,99,50,7,33,54,69,39,35,21,72,9,67,16,92,47,65,89,20,77,34,85,24,87,3,49,62,2,81,17,49,31,41,29,80,18,63,2,70,18,96,31,53,70,24,37,78,59,20,74,8,67,93,29,24,71,19,23,28,90,10,21,34,49,18,14,48,90,13,54,93,4,96,95,23,26,85,3,3,99,24,43,8,72,19,50,17,58,94,5,50,16,12,91,25,68,68,42,27,54,49,2,44,47,31,3,35,66,36,67,2,84,74,14,3,5,63,95,21,23,47,22,61,25,28,69,3,50,13,74,96,53,9,32,21,90,8,8,34,66,49,18,34,63,28,90,37,14,43,33,97,12,39,96,31,23,76,14,16,12,74,43,10,63,14,20,95,73,1,59,5,40,97,42,47,29,54,64,17,73,44,10,44,43,42,53,37,37,29,48,9,10,18,28,69,62,25,50,53,29,15,60,10,74,1,83,21,21,49,19,61,35,30,99,87,10,42,17,4,67,87,6,89,2,21,56,1,80,24,1,64,24,42,95,20,95,77,23,29,84,39,5,91,65,16,39,46,36,57,23,30,49,70,21,7,92,22,90,1,25,41,20,35,59,54,98,88,40,23,33,99,5,95,28,73,15,72,76,8,2,11,86,23,31,6,69,13,23,93,86,59,24,16,90,23,32,41,11,50,84,58,28,40,3,71,12,86,33,45,34,33,81,23,10,33,53,28,81,68,15,96,4,68,3,54,19,73,27,3,21,99,5,47,77,26,28,49,35,92,4,18,1,66,16,1,28,28,66,56,26,23,45,53,20,55,32,26,57,67,5,86,73,9,70,2,87,16,75,93,31,78,66,14,76,4,64,24,80,20,45,15,75,17,54,85,16,16,28,45,20,85,34,7,2,82,59,25,15,58,92,36,88,46,22,78,6,71,15,23,67,14,71,60,33,56,10,61,7,40,79,37,59,58,37,34,59,17,80,10,90,11,89,95,9,37,9,45,60,10,29,73,4,95,42,29,54,49,21,36,65,34,21,94,70,37,86,33,92,84,15,18,72,82,28,12,12,25,91,40,68,2,8,83,59,62,4,29,75,79,34,21,99,24,90,79,13,22,92,62,73,19,9,84,46,11,88,32,92,35,58,79,31,4,30,90,21,93,14,76,55,48,23,43,13,89,13,67,33,90,86,70,32,65,15,77,32,48,25,61,27,58,2,81,36,59,10,77,5,95,35,41,50,88,0,0,21,21,1,10,1,0,0,0,0,0,0];


var grid = {
  0: {
    0: 'S'
  }
};
var tree = {
  'parent': null,
  'children': [],
  'value': 'S',
  'xy': [0, 0]
};
var lastForwardTreeElement = tree;
var curX = 0;
var curY = 0;
var currentPathDirections = []
var reverseMode = false;

const render = grid => {
  const tableDomNode = document.getElementById("gameTable");
  while (tableDomNode.firstChild) {
    tableDomNode.removeChild(tableDomNode.firstChild);
  }

  const xSize = 50;
  const ySize = 50;
  // console.log("xSize", xSize);
  // console.log("ySize", ySize);

  for (let y = (ySize/2)*(-1); y < (ySize/2); y++) {
    const tr = document.createElement("tr");
    tableDomNode.append(tr);

    for (let x = (xSize/2)*(-1); x < (xSize/2); x++) {
      if(x == curX && y == curY) {
        const td = document.createElement("td");
        td.style.cssText = "width: 3px; height: 3px;";
        td.style["background-color"] = "red";
        tr.appendChild(td);
      } else if(x == 0 && y == 0) {
        const td = document.createElement("td");
        td.style.cssText = "width: 3px; height: 3px;";
        td.style["background-color"] = "yellow"; // center
        tr.appendChild(td);
      } else if(grid.hasOwnProperty(x) && grid[x].hasOwnProperty(y)) {

        const gridValue = grid[x][y];
        
  
        const td = document.createElement("td");
        td.style.cssText = "width: 3px; height: 3px;";
  
        if (gridValue == 'W') {
          td.style["background-color"] = "gray"; // wall
        } else if (gridValue == 'S') {
          td.style["background-color"] = "lightgreen"; // space
        } else if (gridValue == 'O') {
          td.style["background-color"] = "blue"; // oxygen
        }
        tr.appendChild(td);
      } else {
        // blank space
        const td = document.createElement("td");
        td.style.cssText = "width: 3px; height: 3px;";
        tr.appendChild(td);
      }
    }
  }
  // Object.keys(grid).forEach(x => {
  //   Object.keys(grid[x]).forEach(y => {});
  // });
};


const findUnexplored = (x, y) => {
  const retUnexplored = [];
  if(!grid.hasOwnProperty(x+1) || !(grid[x+1].hasOwnProperty(y))) {
    retUnexplored.push(4); // retUnexplored.push([x+1, y]);
  }
  if(!grid.hasOwnProperty(x-1) || !(grid[x-1].hasOwnProperty(y))) {
    retUnexplored.push(3); // retUnexplored.push([x-1, y]);
  }

  if(!(grid[x].hasOwnProperty(y+1))) {
    retUnexplored.push(1); // retUnexplored.push([x, y+1]);
  }
  if(!(grid[x].hasOwnProperty(y-1))) {
    retUnexplored.push(2); // retUnexplored.push([x, y-1]);
  }
  return retUnexplored;
}






var pad = function(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};



const setGridPlace = (x, y, direction, value) => {
  let retX = x;
  let retY = y;

  if(direction === 1) { // north
    if(!grid[x]) {
      grid[x] = {};
    }
    grid[x][y+1] = value;
    retY = y+1;
  } else if(direction === 2) { // south
    if(!grid[x]) {
      grid[x] = {};
    }
    grid[x][y-1] = value;
    retY = y-1;
  } else if(direction === 3) { // west
    if(!grid[x-1]) {
      grid[x-1] = {};
    }
    grid[x-1][y] = value;
    retX = x-1;
  } else if(direction === 4) { // east
    if(!grid[x+1]) {
      grid[x+1] = {};
    }
    grid[x+1][y] = value;
    retX = x+1;
  }

  // render(grid);

  // return new location
  return [retX, retY];
}

const intCode = (inn, a) => {
  var input = [...inn]; // clone
  var currentLocation = 0;
  var relativeBase = 0;


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
  var a = 1;
  var lastDirectionTry = a;
  var done = false;
  while (input[currentLocation] !== 99 && done === false && count < 100000) {
    const c = document.getElementById('count');
    c.innerHTML = count;

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
      const output = getParam(1);
      if(output === 0) {
        // wall!
        setGridPlace(curX, curY, lastDirectionTry, 'W');
        // a = (lastDirectionTry % 4) +1;
        // lastDirectionTry = a;
      } else if (output === 1) {
        // The repair droid has moved one step in the requested direction.
        [curX, curY] = setGridPlace(curX, curY, lastDirectionTry, 'S');

        if(!reverseMode) {
          currentPathDirections.push(lastDirectionTry);
          const newNode = {
            parent: lastForwardTreeElement,
            children: [],
            value: 'S',
            xy: [curX, curY]
          };
          lastForwardTreeElement.children.push(newNode);
          lastForwardTreeElement = newNode;
        } else {
          // we are in reverse mode so update the tree
          lastForwardTreeElement = lastForwardTreeElement.parent;
        }
        
      } else if (output === 2) {
        // The repair droid has moved one step in the requested direction; its new position is the location of the oxygen system
        [curX, curY] = setGridPlace(curX, curY, lastDirectionTry, 'O');
        currentPathDirections.push(lastDirectionTry);
        const newNode = {
          parent: lastForwardTreeElement,
          children: [],
          value: 'O',
          xy: [curX, curY]
        };
        lastForwardTreeElement.children.push(newNode);
        lastForwardTreeElement = newNode;

      } else {
        console.error('ERROR - should not be here. ouput:', output);
      }
      // use grid to find how many unexplored spaces are around us. (ignore came-from direction).
      // if none, move back to camefrom direction.
      const unexplored = findUnexplored(curX, curY);
      if(unexplored.length > 0) {
        reverseMode = false;
        a = unexplored[0];
      } else {
        reverseMode = true;

        if(curX == 0 && curY == 0) {
          // back to orgin - done
          done = true;
          render(grid);
        } else {
          // use currentPathDirections to "reverse" us out of here
          const lastValid = currentPathDirections.pop();
          if(lastValid === 4) {
            a = 3;
          } else if (lastValid === 3) {
            a = 4;
          } else if (lastValid === 2) {
            a = 1;
          } else if (lastValid === 1) {
            a = 2;
          }
        }
      }
      lastDirectionTry = a;



      // return getParam(1);
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


  //
  //
  //
  // go through tree, breadth-first-search
  console.log('todo - go through tree: ', tree);
  // let queue = [];
  let found = false;
  let curNodes = [tree];
  let depth = 0;
  while(found == false) {
    depth = depth + 1;
    const foundItems = curNodes.find((node) => {
      return node.value == 'O';
    });
    if(foundItems) {
      found = true;
      console.log('FOUND: depth:', depth);
    } else {
      // queue the children of all current nodes
      for(let i = 0; i < curNodes.length; i++) {
        curNodes = curNodes.concat(curNodes[0].children);
        curNodes.shift();
      }
    }
  }
  return depth; // built grid is output!
};

console.log("RESULT: ", intCode(input));