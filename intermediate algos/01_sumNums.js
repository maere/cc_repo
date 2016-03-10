

function sumAll(arr) {

var expandedArray = [];
var sum;

//find lowest number & find greatest number
//need to convert array to args, bc math min only take integers, not arrays
var mm = Math.min.apply(null, arr);
var mx = Math.max.apply(null, arr);

//create new array, lowest to highest and in between
for(var i=mm; i<mx+1; i++){
    expandedArray.push(i);
}

//do reduce operation to return sum
sum = expandedArray.reduce(function(acc, next){
  return acc + next;
});

  return sum;

}
