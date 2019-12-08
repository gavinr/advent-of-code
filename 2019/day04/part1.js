var min = 372304;
var max = 847060;

// Return true if there is a "group" of two digits in the input number
var twoDigitsSame = (input) => {
  var characters = String(input).split('');
  return characters.some((character, i) => {
    if (characters[i + 1]) {
      return character === characters[i + 1];
    }
    return false;
  });
}

// Return true if the digits of the input number never decrease.
var digitsNeverDecrease = (input) => {
  var digits = String(input).split('').map((character) => {
    return parseInt(character);
  });
  return digits.every((character, i) => {
    if (digits[i - 1]) {
      return character >= digits[i - 1];
    }
    return true;
  });
}

var partA = (min, max) => {
  console.log('total:', max - min + 1);
  var matching = [];
  for (var i = min; i <= max; i++) {
    if (twoDigitsSame(i) && digitsNeverDecrease(i)) {
      matching.push(i);
    }
  }
  return matching.length;
}

console.log("Solution to part 1:", partA(min, max));