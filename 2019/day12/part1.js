const input = [
  [-5,6,-11],
  [-8,-4,-2],
  [1,16,4],
  [11,11,-4]
];

const applyGravity = (planets) => {
  ['x', 'y', 'z'].forEach((pos) => {
    planets.forEach((planet) => {
      planets.forEach((altPlanet) => {
        if(planet !== altPlanet) {
          if(altPlanet[pos] > planet[pos]) {
            planet[pos + 'Vel'] = planet[pos + 'Vel'] + 1;
          } else if (altPlanet[pos] < planet[pos]) {
            planet[pos + 'Vel'] = planet[pos + 'Vel'] - 1;
          }
        }
      });
    });
  })
};

const applyVelocity = (planets) => {
  planets.forEach((planet) => {
    planet.x = planet.x + planet.xVel;
    planet.y = planet.y + planet.yVel;
    planet.z = planet.z + planet.zVel;
  });
}

const calculateEnergy = (planet) => {
  const pot = Math.abs(planet.x) + Math.abs(planet.y) + Math.abs(planet.z);
  const kin = Math.abs(planet.xVel) + Math.abs(planet.yVel) + Math.abs(planet.zVel);
  return pot * kin;
}

const runProgram = (input, steps) => {
  const planets = input.map((planetArr) => {
    return {
      x: planetArr[0], 
      y: planetArr[1],
      z: planetArr[2],

      xVel: 0,
      yVel: 0,
      zVel: 0
    };
  });
  for(let i = 0; i < steps; i++) {
    applyGravity(planets);
    applyVelocity(planets);
  }

  const energyOfEachPlanet = planets.map((planet) => {
    return calculateEnergy(planet);
  });

  const totalEnergy = energyOfEachPlanet.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log('totalEnergy', totalEnergy);
  return totalEnergy;
};
console.log("RESULT: ", runProgram(input, 1000));
