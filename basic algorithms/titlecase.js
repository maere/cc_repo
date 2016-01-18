function titleCase(str) {
  
  var arr = str.split(" ");
  var newArr = [];
  
  for(var i=0; i<arr.length; i++){
    var currWord = arr[i];
    var newWord = currWord[0].toUpperCase() + currWord.substr(1).toLowerCase();
    newArr.push(newWord);
  }
  
  return newArr.join(" ");
  
}

titleCase("I'm a little tea pot");