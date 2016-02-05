var accumulator =0;
var numInMem = 0;
//var operator - can't pass an operator as argument, but can use as a key,
//and use function as the corresponding value


//numbers

$('#zero').click(function(){
  accumulator = accumulator*10+0;
  $('#nums-display').val(accumulator);
});

$('#one').click(function(){
   //entry = $(this).text();
     accumulator = accumulator*10+1;
   $('#nums-display').val(accumulator);
});

$('#two').click(function(){
     accumulator = accumulator*10+2;
      $('#nums-display').val(accumulator);
});

$('#three').click(function(){
     accumulator = accumulator*10+3;
      $('#nums-display').val(accumulator);
});

$('#four').click(function(){
   accumulator = accumulator*10+4;
   $('#nums-display').val(accumulator);
});

$('#five').click(function(){
   accumulator = accumulator*10+5;
   $('#nums-display').val(accumulator);
});

$('#six').click(function(){
   accumulator = accumulator*10+6;
   $('#nums-display').val(accumulator);
});

$('#seven').click(function(){
   accumulator = accumulator*10+7;
   $('#nums-display').val(accumulator);
});

$('#eight').click(function(){
   accumulator = accumulator*10+8;
   $('#nums-display').val(accumulator);
});

$('#nine').click(function(){
   accumulator = accumulator*10+9;
   $('#nums-display').val(accumulator);
});

//operations

$('#add').click(function(){
  numInMem = accumulator;
  accumulator = 0;
    //internal callback waiting for the equals sign to execute the addition operation
});

$('#multiply').click(function(){
});

$('#subtract').click(function(){
});

$('#divide').click(function(){
});


//other
$('#clear').click(function(){
   accumulator = 0;
   $('#nums-display').val(accumulator);
});

$('#percent').click(function(){
   accumulator = accumulator/100;
   $('#nums-display').val(accumulator);
});

$('#ce').click(function(){

});

$('#period').click(function(){

});

// $('#equals').click(function(){
//
// });
