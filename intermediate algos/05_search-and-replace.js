//https://www.freecodecamp.org/challenges/search-and-replace
function myReplace(str, before, after) {

  var regexPattern = RegExp('[A-Z]');
  var firstChar = before.split()[0];

  if(regexPattern.test(firstChar)){

    var tempArray = after.split('');
    var newUpperChar = tempArray[0].toUpperCase();
    tempArray.splice(0,1,newUpperChar);
    after = tempArray.join('').toString();
  }
  return str.replace(before, after);
}

//myReplace("His name is Tom", "Tom", "john");
