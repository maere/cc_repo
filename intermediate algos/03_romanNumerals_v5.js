function convert(num){

  var places = [];

  var divisor = 10;
  var tensPlace;
  var remainder;
  var romanNum = [];
  var result = '';
  var symbols = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M", "^", ">"]];


  while(num>0){
    tensPlace = num%divisor;
    places.push(tensPlace);
    num = num - tensPlace;
    divisor = divisor*10;
  }

  for(var i=0; i<places.length; i++){
    result = checkPlace(places[i], (Math.pow(10, i)), symbols[i]);
    romanNum.unshift(result);
  }
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
