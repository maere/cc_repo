function end(str, target) {
  // second arg needs to be measured, then the length used to slice off end of first arg, then the two are compared, return bool
  var subLength = target.length;
  var lastNletters = str.substr(str.length-subLength);
  
  if(lastNletters===target){
    return true;
  }
return false;
}

end("Bastian", "n");