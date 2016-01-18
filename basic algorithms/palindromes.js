function palindrome(str) {
 //remove all non-alphanumeric characters (punctuation, spaces and symbols) //turn everything lower case in order to check for palindromes.
  var lower = str.toLowerCase(); //must set to new string--bc JS strings r immutable
  var regPattern = /[^\s,.?';;!\—\-\_()\\\/]/gi;
  var clean = lower.match(regPattern);
  
  var i=0;

  while(i<clean.length/2){

    if((clean[i]!==clean[clean.length-i-1])){ 
     return false;  
    }
    else{
      i++;
    }  
  }
  return true;
}



palindrome("nope");
