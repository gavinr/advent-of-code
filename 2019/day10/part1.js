const input = ['#.#.##..#.###...##.#....##....###',
'...#..#.#.##.....#..##.#...###..#',
'####...#..#.##...#.##..####..#.#.',
'..#.#..#...#..####.##....#..####.',
'....##...#.##...#.#.#...#.#..##..',
'.#....#.##.#.##......#..#..#..#..',
'.#.......#.....#.....#...###.....',
'#.#.#.##..#.#...###.#.###....#..#',
'#.#..........##..###.......#...##',
'#.#.........##...##.#.##..####..#',
'###.#..#####...#..#.#...#..#.#...',
'.##.#.##.........####.#.#...##...',
'..##...#..###.....#.#...#.#..#.##',
'.#...#.....#....##...##...###...#',
'###...#..#....#............#.....',
'.#####.#......#.......#.#.##..#.#',
'#.#......#.#.#.#.......##..##..##',
'.#.##...##..#..##...##...##.....#',
'#.#...#.#.#.#.#..#...#...##...#.#',
'##.#..#....#..##.#.#....#.##...##',
'...###.#.#.......#.#..#..#...#.##',
'.....##......#.....#..###.....##.',
'........##..#.#........##.......#',
'#.##.##...##..###.#....#....###.#',
'..##.##....##.#..#.##..#.....#...',
'.#.#....##..###.#...##.#.#.#..#..',
'..#..##.##.#.##....#...#.........',
'#...#.#.#....#.......#.#...#..#.#',
'...###.##.#...#..#...##...##....#',
'...#..#.#.#..#####...#.#...####.#',
'##.#...#..##..#..###.#..........#',
'..........#..##..#..###...#..#...',
'.#.##...#....##.....#.#...##...##'];

const inputToLocations = (inputArray) => {
  const retArr = [];
  inputArray.forEach((rowString, i) => {
    for(let j = 0; j < rowString.length; j++) {
      if(rowString.charAt(j) === '#') {
        retArr.push([j, i]);
      }
    }
  });
  return retArr;
}

const getAngle = (location1, location2) => {
  // console.log('getAngle', location1, location2);
  const xDiff = location1[0] - location2[0];
  const yDiff = location1[1] - location2[1];
  return Math.atan2(yDiff, xDiff);
};

const maxDetected = (inputLocation, inputLocations) => {
  // find unique angles between inputLocation and all inputLocations
  console.log('maxDetected', inputLocation, inputLocations);

  const allAngles = inputLocations.map((location) => {
    return getAngle(inputLocation, location);
  });

  console.log('allAngles', allAngles);
  let unique = [...new Set(allAngles)]; 
  console.log('unique', unique.length);
  return unique.length;

}

const runProgram = (input) => {
  const locationsArray = inputToLocations(input);
  const maxLocationForEach = locationsArray.map((location) => {
    return [location, maxDetected(location, locationsArray)];
  });

  maxLocationForEach.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log('maxLocationForEach sorted', maxLocationForEach);

  return maxLocationForEach[0];
};
console.log("RESULT: ", runProgram(input));
