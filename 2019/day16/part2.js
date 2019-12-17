// prettier-ignore
const input = '59738476840592413842278931183278699191914982551989917217627400830430491752064195443028039738111788940383790187992349338669216882218362200304304999723624146472831445016914494176940890353790253254035638361091058562936884762179780957079673204210602643442603213181538626042470133454835824128662952579974587126896226949714610624975813583386749314141495655816215568136392852888525754247201021383516228214171660111826524421384758783400220017148022332694799323429711845103305784628923350853888186977670136593067604033507812932778183786479207072226236705355778245701287481396364826358903409595200711678577506495998876303181569252680220083046665757597971122614';

// prettier-ignore
// const input = '69317163492948606335995924319873';

const getPhaseDigit = (inputString, n) => {
  // const charArray = inputString.split('');
  let sum = 0;
  for(let j = 1; j <= inputString.length/n; j = j+4) {
    for(let k = (j * n); k <= ((j + 1) * n) - 1; k++) {
      if(k <= inputString.length) {
        const digit = parseInt(inputString.charAt(k-1));
        sum = sum + digit;
      }
    }
  }

  for(let j = 3; j <= inputString.length/n; j = j+4) {
    for(let k = (j * n); k <= ((j + 1) * n) - 1; k++) {
      if(k <= inputString.length) {
        const digit = parseInt(inputString.charAt(k-1));
        sum = sum - digit;
      }
    }
  }

   // take only the ones digit 
  const onesDigit = String(sum).charAt(String(sum).length-1);
  return onesDigit;
}

const getPhase = (inputString) => {
  let retString = '';
  for(let i = 1; i <= inputString.length; i++) {
    retString = `${retString}${getPhaseDigit(inputString, i)}`
  }
  // console.log('retString', retString);
  return retString;
}
const runProgram = (inp, numPhases, digits) => {
  // let curResult = input;
  // for(let i = 0; i < numPhases; i++) {
  //   curResult = getPhase(curResult);
  // }
  // return curResult;
  let inputString = '';
  for(let i = 0; i < 10000; i++) { 
    inputString = `${inputString}${inp}`;
  }

  let curResult = inputString;
  for(let i = 0; i < numPhases; i++) {
    var currdatetime = new Date();
    console.log('running phase: ', i);
    console.log(currdatetime);
    curResult = getPhase(curResult);
  }
  return curResult;
};
console.log("RESULT: ", runProgram(input, 100, 8));
