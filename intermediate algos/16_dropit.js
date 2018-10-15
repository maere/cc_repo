https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/

function dropElements(arr, func) {

  while(arr.length>=0){
    if(func(arr[0])===false){
      arr.shift();
    }
    else {
      return arr;
    }
  }
  return arr;
}
