function rot13(str) { // LBH QVQ VG!
  var message = "";
  var decoded;
  
  for(var i = 0; i<str.length; i++){
    var current = str.charCodeAt(i);
  
    if(current>=78){
        decoded = String.fromCharCode(current - 13);
    }

    //else inverse, -1
    else{
       decoded = String.fromCharCode(current + 13);
    }
 
    var punctuation = /[ !,.?()\']/;
    var found = str[i].match(punctuation);
   
    if(found!==null){//current===32 
      decoded = String.fromCharCode(current);
    }
    
    message += decoded;
  }
  return message;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");