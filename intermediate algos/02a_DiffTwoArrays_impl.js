function diff(arr1, arr2) {
  var tempArr = [];
  var newArr = [];
  var current;
  var result;
  //
  for(var i=0; i<arr1.length; i++){
    current = arr1[i];
    result = arr2.indexOf(current);
      if(result===-1){
        newArr.push(current);
      }

  }
  console.log("uniq from from array1 " + newArr )

 for(var j=0; j<arr2.length; j++){
   current = arr2[j];
   result = arr1.indexOf(current);
   if(result===-1){
     tempArr.push(current);
   }
 console.log("uniq from array2: " + tempArr);
 }
 var finalArray = newArr.concat(tempArr);

  console.log(finalArray);
}

//helper function
