function convert(num){

  var places = [];

  var divisor = 10;
  var tensPlace;
  var remainder;
  var romanNum = [];
  var result = '';

  while(num>0){
    tensPlace = num%divisor;
    places.push(tensPlace);
    num = num - tensPlace;
    divisor = divisor*10;
  }


result = checkPlace(places[3], 1000, ["M", "^", ">"]);
romanNum.push(result);


result = checkPlace(places[2], 100, ["C", "D", "M"]);
romanNum.push(result);


result = checkPlace(places[1], 10, ["X", "L", "C"]);
romanNum.push(result);

//result = checkOnes(places[0]);
result = checkPlace(places[0], 1, ["I", "V", "X"]);
romanNum.push(result);


//console.log(romanNum.join(""));
return romanNum.join("");

}


function checkPlace(number, multiplier, array){

var romanString = "";
//count 5s, 50s, 500s
  if(number >= 5*multiplier){
    romanString = array[1];
    number = number % (5*multiplier);
  }
//counts 1s, 10s, etc.
  if(number<=3*multiplier){
      while(number<=3*multiplier && number>0){
        romanString += array[0];
        number -= 1*multiplier;
      }
  }
//4 or 9
  if((number > 3*multiplier) && (number < 5*multiplier)){
    if(romanString!==array[1]){
      romanString = array[0] + array[1];
    }else{
      romanString = array[0] + array[2];
    }
      number = 0;
  }
  return romanString;
}
