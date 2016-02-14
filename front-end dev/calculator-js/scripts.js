//global variables
var displayNum = 0;
var numInMem = 0;
var numberHolder = [];
var keyPress;
var operator = function(){
};
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


//covers any key
$(".key").click(function(){
  keyPress =  $(this).find('span').text();

  switch (keyPress) {
    case "0":
      displayNum = displayNum*10+0;
      $('#acc-display').val(displayNum);
      break;
    case "1":
      displayNum = displayNum*10+1;
      $('#acc-display').val(displayNum);
      break;
    case "2":
      displayNum = displayNum*10+2;
      $('#acc-display').val(displayNum);
      break;
    case "3":
      displayNum = displayNum*10+3;
      $('#acc-display').val(displayNum);
      break;
    case "4":
      displayNum = displayNum*10+4;
      $('#acc-display').val(displayNum);
      break;
    case "5":
      displayNum = displayNum*10+5;
      $('#acc-display').val(displayNum);
      break;
    case "6":
      displayNum = displayNum*10+6;
      $('#acc-display').val(displayNum);
      break;
    case "7":
      displayNum = displayNum*10+7;
      $('#acc-display').val(displayNum);
      break;
    case "8":
      displayNum = displayNum*10+8;
      $('#acc-display').val(displayNum);
      break;
    case "9":
      displayNum = displayNum*10+9;
      $('#acc-display').val(displayNum);
      break;

    case "+":
      operator = myCalculator.add;
      recordNumToMem();
      if(numberHolder.length===2){
        calculate();
        }
        break;
    case "–":
      operator = myCalculator.subtract;
          recordNumToMem();
          if(numberHolder.length===2){
            calculate();
            }
            break;

    case "/":
      operator = myCalculator.divide;
          recordNumToMem();
          if(numberHolder.length===2){
            calculate();
            }
            break;

    case "X":
      operator = myCalculator.multiply;
          recordNumToMem();
          if(numberHolder.length===2){
            calculate();
            }
            break;


    case "AC":
      displayNum = 0;
      numInMem = 0;
      numberHolder = [];
      operator = function(){};
     $('#acc-display').val(displayNum);
      break;

    case "=":

      numInMem = displayNum;
      numberHolder.push(displayNum);

      if(numberHolder.length<2){
          $('#acc-display').val(numberHolder[0]);
          operator = function(){};
      }
      else if(numberHolder.length===2){
        //do calculation & push result to  numberHolder[0] - this is basically equals function
        numberHolder[0] = operator(numberHolder[0], numberHolder[1]);
        //operator should get replaced on the fly with the next calcuation
        numberHolder.pop();
        $('#acc-display').val(numberHolder[0]);
      }
      break;

    default:
      console.log('This is not valid.');
    }
  });

function recordNumToMem(){
  //UI indicator that a + key has been pressed - a flash on the display screen
  operatorHighlight();
  numInMem = displayNum;
  numberHolder.push(numInMem);
  displayNum = 0;
  //numInMem = 0;
}

function calculate(){
  //do calculation & push result to  numberHolder[0] - this is basically equals function
  numberHolder[0] = operator(numberHolder[0], numberHolder[1]);
  numberHolder.pop();
  //operator should get replaced on the fly with the next calcuation
  $('#acc-display').val(numberHolder[0]);
}





//
// $('#equals').parent().click(function(){
//   numberHolder[0] = operator(numberHolder[0], numberHolder[1]);
//   $('#acc-display').val(numberHolder[0]);
//   numberHolder.pop();
//   //operator should get replaced on the fly with the next calcuation
// });


//operations

// $('#add').parent().click(function(){
//   //assign operator to key that will call approriate function
//   operator = myCalculator.add;
//   //store current value of number in display
//   numInMem = displayNum;
//   //clear out displayNum
//   displayNum = 0;
//   //should have some kind of sign that a + key has been pressed - aflash on the display screen?
//   operatorHighlight();
//
// });


$('#multiply').parent().click(function(){
  operator = myCalculator.multiply;
  numInMem = displayNum;//these will change to push to array
  displayNum = 0; //resets
  operatorHighlight();
});

$('#subtract').parent().click(function(){
  operator = myCalculator.subtract;
  numInMem = displayNum;
  displayNum = 0;
  operatorHighlight();
});

$('#divide').parent().click(function(){
  operator = myCalculator.divide;
  numInMem = displayNum;
  displayNum = 0;
  operatorHighlight();
});


//other
// $('#clear').parent().click(function(){
//     displayNum = 0;
//     numInMem = 0;
//     numberHolder = [];
//    $('#acc-display').val(displayNum);
//    //should clear out whole array
// });

$('#percent').parent().click(function(){
   displayNum = displayNum/100;
   $('#acc-display').val(displayNum);
});

$('#ce').parent().click(function(){
  //this should clear our the last item entered and return the previous item in the array
});

$('#period').parent().click(function(){
  //this should take whatever is in the display, turn it into a string, add the ., to float, then display
  //needs to return num and combine it with after 10ths places....
  //but should put any numbers entered after it into the 1/10, 1/100 etc. places...starts dividing by 10 vs. multipying once . is hit
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
