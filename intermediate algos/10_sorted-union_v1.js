
//https://www.freecodecamp.org/challenges/sorted-union

/*jshint esversion: 6 */

function uniteUnique(arr) {

  var arrayFromArgs = [];

  for(var i = 0; i<arguments.length; i++){
    var subArray = arguments[i];
    subArray.forEach(function(element){
      arrayFromArgs.push(element);
    });
  }

  var result = [];

  for(var currentVal of arrayFromArgs){
      let isFound = result.indexOf(currentVal);
      if(isFound === -1){
          result.push(currentVal);
      }
  }
  return result;
}

//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
