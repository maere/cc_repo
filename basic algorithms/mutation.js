
//trick with this one was to use indexOf to return -1 for false result
//if it makes it through the string testing each letter and 
//never hitting a false result for an indexValue for a letter
//will be able to exit the loop and return true
function mutation(arr) {
  //grab items arr[0], arr[1]    //to lowercase (both)
  var search = arr[0].toLowerCase();
  var source = arr[1].toLowerCase();
  //for each item in arr[1], check arr[0]--if found next, if not return false
  for(var i=0; i<source.length; i++){
    var currentLetter = source[i];
    
    var result = search.indexOf(currentLetter);
    
    if(result===-1){
      return false;
    }
    
  }
  return true; 
}
mutation(["hello", "hey"]);




//NOTE: this version doesn't pass first and last test
// function mutation(arr) {
//   //grab items arr[0], arr[1]    //to lowercase (both)
//   var search = arr[0].toLowerCase();
//   var source = arr[1].toLowerCase().split("");
//   //for each item in arr[1], check arr[0]--if found next, if not return false
//   source.forEach(function(element){
//     for(var i=0; i<search.length; i++){
//       console.log(element + ":" + search[i]);
//       if(search[i]===element){
//         return false;
//       }
//       i++;
//     }
//   });
//   return true;
// }
// mutation(["hello", "hey"]);

//NOTE: now this one passes first and last test, but not the in between as the one above does!
// function mutation(arr) {
//   //grab items arr[0], arr[1]    //to lowercase (both)
//   var search = arr[0].toLowerCase();
//   var source = arr[1].toLowerCase();
//   //for each item in arr[1], check arr[0]--if found next, if not return false
//   for(var i=0; i<search.length; i++){
//     var currLetter = source[i];
//     if(search.indexOf(currLetter==-1)){
//       return false;
//     }
//    return true; 
    
//   }
  

// }
// mutation(["hello", "hey"]);