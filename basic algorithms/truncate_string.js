function truncate(str, num) {
  
  var resultString = "";
  
  var ellipsis = "...";
  //If the num is less than or equal to 3, not added
  if(num<=3){
   return str.slice(0,num) + ellipsis;
  }
  
  // Truncate if it is longer than second argument
  if(str.length>num){
    resultString = str.slice(0, num-3) + ellipsis;  
  }
  
  if(str.length<=num){
    resultString = str;
  }
  

  return resultString;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);