function chunk(arr, size) {

  var multiArray = [];
  var i=0;
  while(i<arr.length){ 
        multiArray.push(arr.slice(i, i+size));
    
    i+=size;
  }

  return multiArray;
}

chunk(["a", "b", "c", "d"], 2);
