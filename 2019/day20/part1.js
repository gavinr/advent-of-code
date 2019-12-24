import Graph from './Graph.js';

const getInput = async (fileName) => {
  let response = await fetch(fileName);
  const textResponse = await response.text();
  const splitResponse = textResponse.split('\n').map(l => l.split(''));
  return splitResponse;
}

const isMazeName = (character) => {
  return character.match(/^[A-Z]*$/);
}

const checkCross = (value, x, y) => {
  if(isMazeName(grid[y-1][x]) ) {
    // up 
    return {
      location: [x, y],
      name: `${grid[y-1][x]}${value}`
    }
  } else if(isMazeName(grid[y][x+1])) {
    // right
    return {
      location: [x, y],
      name: `${value}${grid[y][x+1]}`
    }
  } else if (isMazeName(grid[y-1][x])) {
    // down
    return {
      location: [x, y],
      name: `${value}${grid[y][x+1]}`
    }
  } else if (isMazeName(grid[y][x-1])) {
    // left
  } else {
    console.error('ERROR', value, x, y);
  }
}

let mazeArr;

const runProgram = async (inputFileName) => {
  mazeArr = await getInput(inputFileName);

  const portals = [];

  for (let y = 0; y < mazeArr.length; y++) {
    for (let x = 0; x < mazeArr[y].length; x++) {
      const value = mazeArr[y][x];
      if(isMazeName(value)) {
        console.log('get entry', value);
        const fullValue = checkCross(value, x, y);
        portals.push(fullValue);
      } else {
        console.log('not an entry', value);
      }
    }
  }

  console.log('portals: ', portals);

  return 'todo: implement';
};
console.log("RESULT: ", runProgram('input1.txt'));
