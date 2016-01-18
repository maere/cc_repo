function repeat(str, num) {
  // Repeat a given string (first argument) n times (second argument). 
  // Return an empty string if n is a negative number.
  var resultStr = "";
  
  if(num<0){
    return resultStr;
  }
  while(num>0){
    resultStr +=str;
    num--;
  }
  
  return resultStr;
}

repeat("abc", 3);
