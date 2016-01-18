function findLongestWord(str) {
  var arr = str.split(" ");
  var longest = arr[0];
  
  for(var i=1; i<arr.length; i++){
    var currLength = arr[i].length;
    if(currLength>longest.length){
      longest = arr[i];
    }
    
  }
  
  
  return longest.length;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
