// prettier-ignore
const input = '59738476840592413842278931183278699191914982551989917217627400830430491752064195443028039738111788940383790187992349338669216882218362200304304999723624146472831445016914494176940890353790253254035638361091058562936884762179780957079673204210602643442603213181538626042470133454835824128662952579974587126896226949714610624975813583386749314141495655816215568136392852888525754247201021383516228214171660111826524421384758783400220017148022332694799323429711845103305784628923350853888186977670136593067604033507812932778183786479207072226236705355778245701287481396364826358903409595200711678577506495998876303181569252680220083046665757597971122614';

const getPhaseDigit = (inputString, digitNumber) => {
  const charArray = inputString.split('');
  const basePattern = [0, 1, 0, -1];
  const fullPhase = basePattern.reduce((acc, cur) => {
    let arr = [];
    for(let i = 0; i < digitNumber+1; i++) {
      arr.push(cur);
    }
    return acc.concat(arr);
  }, []);
  
  // start with the full phase but offset by one:
  let phase = [...fullPhase];
  phase.shift();

  // now add on "fullPhases" until we have enough:
  while(phase.length < charArray.length) {
    phase = phase.concat(fullPhase);
  }
  // console.log('phase:', phase);

  // multiply each digit by each phase num
  let retString = '';
  const partsToBeAdded = charArray.map((digit, i) => {
    return parseInt(digit) * phase[i];
  });

  // add them all up:
  const total = partsToBeAdded.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // take only the ones digit 
  const onesDigit = String(total).charAt(String(total).length-1);

  return onesDigit;
}

const getPhase = (inputString) => {
  let retString = '';
  for(let i = 0; i < inputString.length; i++) {
    retString = `${retString}${getPhaseDigit(inputString, i)}`
  }
  console.log('retString', retString);
  return retString;
}
const runProgram = (input, numPhases, digits) => {
  let curResult = input;
  for(let i = 0; i < numPhases; i++) {
    curResult = getPhase(curResult);
  }
  return curResult;
};
console.log("RESULT: ", runProgram(input, 100, 8));
