https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/
function sumFibs(num) {

  var fibArray = [];
  fibArray.push(1);
  fibArray.push(1);

  if(num<=1){
      return fibArray[num];
   }

  for(var i=2; i<=num; i++){
    var currFibValue = fibArray[i-1] + fibArray[i-2];
    fibArray[i] = currFibValue;
  }

  var summedNums = 0;
  for(var j=0; fibArray[j]<=num; j++){
    var currentVal = fibArray[j];
    if(fibArray[j]%2!=0){
      summedNums = summedNums + currentVal;
    }
  }
  return summedNums;
}

sumFibs(4);
