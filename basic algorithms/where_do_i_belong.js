function where(arr, num) {

  var sorted = arr.sort(function(a, b){
    return a - b;
  });
  
  var slot = 99;
  
  for(var i=0; i<sorted.length; i++){
    if(num>sorted[i]){
      continue;
    }
    if(num<=sorted[i]){
      return i;
    }
  }
  slot = i;
  return slot;
}

where([40, 60], 50);