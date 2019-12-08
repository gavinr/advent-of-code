// inputs:
var min = 372304;
var max = 847060;

// Return true if there is a "group" of two digits in the input number that are not part of a larger "group"
var twoDigitsSameAndNotPartOfLarger = (input) => {
  var characters = String(input).split('');
  return characters.some((character, i) => {
    // the group of 2 is valid if it has other digits on either side, or at ends
    if(i === 0) {
      // beginning, special case
      return (character === characters[i + 1]) && (character !== characters[i + 2]);
    } else if (i === characters.length-2) {
      // second-to-end, special case
      return (character === characters[i + 1]) && (character !== characters[i - 1]);
    } else if (i === characters.length-1) {
      // end, special case
      return false;
    } else {
      return (character === characters[i + 1]) && (character !== characters[i - 1]) && (character !== characters[i + 2]);
    }
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

var partB = (min, max) => {
  console.log('total:', max - min + 1);
  var matching = [];
  for (var i = min; i <= max; i++) {
    if (twoDigitsSameAndNotPartOfLarger(i) && digitsNeverDecrease(i)) {
      matching.push(i);
    }
  }
  return matching.length;
}

console.log("Solution to part 2:", partB(min, max));