function diff(arr1, arr2) {
  var tempArr = [];
  var newArr = [];
  var current;
  var result;

  newArr = arr1.filter(function(current){
    result = arr2.indexOf(current);
    return result===-1;
  });

tempArr = arr2.filter(function(current){
  result = arr1.indexOf(current);
  return result===-1;
});

 }
  return newArr.concat(tempArr);
}
