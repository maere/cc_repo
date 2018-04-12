//https://www.freecodecamp.org/challenges/missing-letters

function fearNotLetter(str) {

  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var startCode = str.charCodeAt(0);
  var checkFromLetter = String.fromCharCode(startCode);
  var index = alphabet.indexOf(checkFromLetter);

  var currentAlphabet;
  var currentStr;
    for(var j = 0; j<str.length; j++){

      currentAlphabet = alphabet[index + j];
      currentStr = str[j];
      if(currentAlphabet!=currentStr){
        return currentAlphabet;
      }
    }
    //return undefined (when there is no missing lettter, per instructions)
}

fearNotLetter("abce");
//fearNotLetter("bcd") should return undefined.
