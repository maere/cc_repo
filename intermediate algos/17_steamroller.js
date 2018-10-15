https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {

  return arr.flat(5);
}

steamrollArray([1, [2], [3, [[4]]]]);