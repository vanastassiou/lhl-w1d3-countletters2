function countLetters(input) {
  var result = { };
  // Using "in" forces "input" to be treated as an object by convention
  for (var index in input) {
    var letter = input[index];
    if (letter !== " ") {
      if (!(letter in result)) {
        result[letter] = [];
      }
      result[letter].push(index) ;
    }
  }
  return result;
}
