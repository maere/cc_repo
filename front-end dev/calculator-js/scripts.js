


//global variables
var accumulator = 0;
var numInMem = 0;
var result;

var operator;

//numbers

$('#zero').click(function(){
  accumulator = accumulator*10+0;
  $('#acc-display').val(accumulator);
});

$('#one').click(function(){
   //entry = $(this).text();
     accumulator = accumulator*10+1;
   $('#acc-display').val(accumulator);
});

$('#two').click(function(){
     accumulator = accumulator*10+2;
      $('#acc-display').val(accumulator);
});

$('#three').click(function(){
     accumulator = accumulator*10+3;
      $('#acc-display').val(accumulator);
});

$('#four').click(function(){
   accumulator = accumulator*10+4;
   $('#acc-display').val(accumulator);
});

$('#five').click(function(){
   accumulator = accumulator*10+5;
   $('#acc-display').val(accumulator);
});

$('#six').click(function(){
   accumulator = accumulator*10+6;
   $('#acc-display').val(accumulator);
});

$('#seven').click(function(){
   accumulator = accumulator*10+7;
   $('#acc-display').val(accumulator);
});

$('#eight').click(function(){
   accumulator = accumulator*10+8;
   $('#acc-display').val(accumulator);
});

$('#nine').click(function(){
   accumulator = accumulator*10+9;
   $('#acc-display').val(accumulator);
});


//var operator - can't pass an operator as argument, but can use as a key, and use function as the corresponding value
var myCalculator = {
    "add" : function (operand1, operand2) {
        return operand1 + operand2;
    },
    "subtract" : function (operand1, operand2) {
        return operand1 - operand2;
    },
    "multiply" : function (operand1, operand2) {
        return operand1 * operand2;
    },
    "divide" : function (operand1, operand2) {
        return operand1 / operand2;
    }
};


//operations

$('#add').click(function(){
  //assign operator to key that will call approriate function
  operator = myCalculator.add;
  //store current value of number in display
  numInMem = accumulator; //should have some kind of sign - aflash on the display screen?
  //clear out accumulator
  accumulator = 0;
  //now need to fetch another number, the accumulator begins anew

    //internal callback waiting for the equals sign in order to execute the addition operation
    //

});


$('#equals').click(function(){
  result = operator(numInMem, accumulator);
  accumulator = 0;
  $('#acc-display').val(result);
});


$('#multiply').click(function(){
  operator = myCalculator.multiply;
  numInMem = accumulator;
  accumulator = 0;
});

$('#subtract').click(function(){
  operator = myCalculator.subtract;
  numInMem = accumulator;
  accumulator = 0;
});

$('#divide').click(function(){
  operator = myCalculator.divide;
  numInMem = accumulator;
  accumulator = 0;
});


//other
$('#clear').click(function(){
   accumulator = 0;
   $('#acc-display').val(accumulator);
});

$('#percent').click(function(){
   accumulator = accumulator/100;
   $('#acc-display').val(accumulator);
});

$('#ce').click(function(){

});

$('#period').click(function(){

});






//----
//myCalculator object with member variables and methods
//var myCalc = {var memory: 0, var accumulator, var addFunction, etc.}

//numbe click handler will  myCal.accumulate(num);
//add click handler will myCalc.add(num);
//and end of each gen handler type will need to call "installCallbackHandler"
  //function to update display- takes a single argument(numToDisplay)



  //while(typeof entry === 'number'){
  //strRep += entry.toString();
  //num1 = parseFloat(strRep);
