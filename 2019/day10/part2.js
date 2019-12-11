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

// const input = ['.#....#####...#..',
// '##...##.#####..##',
// '##...#...#.#####.',
// '..#.....#...###..',
// '..#.#.....#....##'];

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
  const result = Math.atan2(yDiff, xDiff) * (180/Math.PI);
  return result;
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

const getNthVaporized = (inputLocations, origin) => {
  const allAnglesWithLocations = inputLocations.map((location) => {
    return [getAngle(origin, location), location];
  });

  const workingObj = {};
  allAnglesWithLocations.forEach(([angle, location]) => {
    if(!workingObj.hasOwnProperty(angle)) {
      workingObj[angle] = {
        locations: [],
        count: 0
      };
    }
    workingObj[angle]['count'] = workingObj[angle]['count'] + 1;
    (workingObj[angle]['locations']).push(location);
  });
  console.log('workingObj', workingObj);

  const newWorkingObj = {};
  
  for(key in workingObj) {
    let newIndex = parseFloat(key) + 270.0;
    if(newIndex >= 360.0) {
      newIndex = newIndex - 360.0;
    }
    newWorkingObj[newIndex] = workingObj[key];
    // if(key === 90.0 || key === 180.0) {
    //   newWorkingObj[key-90.0] = workingObj[key];
    // } else if (key === 0 || key === -90.0) {
    //   newWorkingObj[key + 270.0] = workingObj[key];
    // } else if (key > 90.0) {
    //   newWorkingObj[key-90.0] = workingObj[key];
    // } else if (key < 0) {
    //   newWorkingObj[key + 270.0] = workingObj[key];
    // } else if (key < 90.0 && key > 0) {

    // }
  }

  const sortedAngles = [...Object.keys(newWorkingObj)].sort((a, b) => {
    return a-b;
  });
  console.log('sortedAngles', sortedAngles);
  let lastPointObj = undefined;
  let count = 0;
  let i = 0;
  // todo - loop around 90->180, -179->0, 0->89.9
  while(count < 200) {
    // loop through 200 times
    const sortedAnglesIndex = i % sortedAngles.length;
    const angle = sortedAngles[sortedAnglesIndex];
    const pointObj = newWorkingObj[angle];
    lastPointObj = pointObj; // save to use later

    if(pointObj.count > 0) {
      count++;
      pointObj.count--;
    }
    i++;
  }
  console.log('last point obj:', lastPointObj);
  return lastPointObj.locations;
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

  // part 1 is above, part 2 is below:
  const nthVaporized = getNthVaporized(locationsArray, maxLocationForEach[0][0]);
  console.log('use closest to point of these: ', nthVaporized); // ans: [16,23]
};
console.log("RESULT: ", runProgram(input));
