function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(falseyFilter);
  
}

function falseyFilter(value){
 if(value){
   return value;
 }
}

bouncer([7, "ate", "", false, 9]);