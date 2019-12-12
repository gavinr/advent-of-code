const input = [
  [-5, 6, -11],
  [-8, -4, -2],
  [1, 16, 4],
  [11, 11, -4]
];

const applyGravity = (planets, pos) => {
  planets.forEach(planet => {
    planets.forEach(altPlanet => {
      if (planet !== altPlanet) {
        if (altPlanet[pos] > planet[pos]) {
          planet[pos + "Vel"] = planet[pos + "Vel"] + 1;
        } else if (altPlanet[pos] < planet[pos]) {
          planet[pos + "Vel"] = planet[pos + "Vel"] - 1;
        }
      }
    });
  });
};

const applyVelocity = (planets, pos) => {
  planets.forEach(planet => {
    planet[pos] = planet[pos] + planet[pos + "Vel"];
  });
};

const findFirstPatternIndex = (planets, pos) => {
  // loop through moving forward until we find a pattern in the
  const history = new Set();
  let foundRepeat = false;
  let index = 0;
  while (foundRepeat === false) {
    applyGravity(planets, pos);
    applyVelocity(planets, pos);
    index = index + 1;
    const pk = planets.reduce((acc, cur) => {
      return `${acc}${cur[pos]}${cur[pos + "Vel"]}`;
    }, "");
    if (history.has(pk)) {
      foundRepeat = true;
      break;
    }
    history.add(pk);
  }
  return index - 1;
};

const runProgram = (input, steps) => {
  const planets = input.map(planetArr => {
    return {
      x: planetArr[0],
      y: planetArr[1],
      z: planetArr[2],

      xVel: 0,
      yVel: 0,
      zVel: 0
    };
  });
  const firstPatternIndexes = ["x", "y", "z"].map(pos => {
    return findFirstPatternIndex(planets, pos);
  });
  console.log("firstPatternIndexes:", firstPatternIndexes);
  return firstPatternIndexes;
};
console.log(
  "RESULT (take the LCM of this (use wolfram alpha? :) ): ",
  runProgram(input)
);
