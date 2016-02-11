//global variables
var accumulator = 0;
var numInMem = 0;
var result;

var operator;

//numbers
$('#zero').parent().click(function(){
  accumulator = accumulator*10+0;
  $('#acc-display').val(accumulator);
});

$('#one').parent().click(function(){
   //entry = $(this).text();
     accumulator = accumulator*10+1;
   $('#acc-display').val(accumulator);
});

$('#two').parent().click(function(){
     accumulator = accumulator*10+2;
      $('#acc-display').val(accumulator);
});

$('#three').parent().click(function(){
     accumulator = accumulator*10+3;
      $('#acc-display').val(accumulator);
});

$('#four').parent().click(function(){
   accumulator = accumulator*10+4;
   $('#acc-display').val(accumulator);
});

$('#five').parent().click(function(){
   accumulator = accumulator*10+5;
   $('#acc-display').val(accumulator);
});

$('#six').parent().click(function(){
   accumulator = accumulator*10+6;
   $('#acc-display').val(accumulator);
});

$('#seven').click(function(){
   accumulator = accumulator*10+7;
   $('#acc-display').val(accumulator);
});

$('#eight').parent().click(function(){
   accumulator = accumulator*10+8;
   $('#acc-display').val(accumulator);
});

$('#nine').parent().click(function(){
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

$('#add').parent().click(function(){
  //assign operator to key that will call approriate function
  operator = myCalculator.add;
  //store current value of number in display
  numInMem = accumulator;
  //clear out accumulator
  accumulator = 0;
  //should have some kind of sign that a + key has been pressed - aflash on the display screen?
  operatorHighlight();

});


$('#equals').parent().click(function(){
  result = operator(numInMem, accumulator);
  accumulator = 0;
  $('#acc-display').val(result);
});


$('#multiply').parent().click(function(){
  operator = myCalculator.multiply;
  numInMem = accumulator;
  accumulator = 0;
  operatorHighlight();
});

$('#subtract').parent().click(function(){
  operator = myCalculator.subtract;
  numInMem = accumulator;
  accumulator = 0;
  operatorHighlight();
});

$('#divide').parent().click(function(){
  operator = myCalculator.divide;
  numInMem = accumulator;
  accumulator = 0;
  operatorHighlight();
});


//other
$('#clear').parent().click(function(){
   accumulator = 0;
   $('#acc-display').val(accumulator);
});

$('#percent').parent().click(function(){
   accumulator = accumulator/100;
   $('#acc-display').val(accumulator);
});

$('#ce').parent().click(function(){

});

$('#period').parent().click(function(){

});

//jquery color animation

function operatorHighlight(){
  $( "#acc-display" ).animate({
    backgroundColor: "#F5F549",
  }, 100 );

  $( "#acc-display" ).animate({
    backgroundColor: "#fff",
  }, 100 );
}
