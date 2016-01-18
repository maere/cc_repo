function largestOfFour(arr) {
  var finalArr = [];
  
  for(var i=0; i<arr.length; i++){
    var currArr = arr[i];
    var greatest = currArr[0];
    
      for(var j=1; j<currArr.length; j++){

        if(currArr[j]>greatest){
          greatest = currArr[j];
        }

      }
    finalArr.push(greatest);
  }

  
  return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
