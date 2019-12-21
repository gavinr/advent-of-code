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

const runProgram = async (inputFileName) => {
  const mazeArr = await getInput(inputFileName);

  const portals = {};

  for (let y = 0; y < mazeArr.length; y++) {
    for (let x = 0; x < mazeArr[y].length; x++) {
      const value = mazeArr[y][x];
      if(isMazeName(value)) {
        console.log('get entry', value);
      } else {
        console.log('not an entry', value);
      }
    }
  }

  return 'todo: implement';
};
console.log("RESULT: ", runProgram('input1.txt'));
