//https://www.freecodecamp.org/challenges/pig-latin

function translatePigLatin(str) {

  var regex = new RegExp('[^aieou]');
  var strArray = str.split('');

  var consonantCluster = '';
    var i = 0;
    while(regex.test(strArray[i])){
      consonantCluster = consonantCluster + strArray[i];
      i++;
    }

  if(consonantCluster==''){
    strArray.push('way');
    return strArray.join('');
  }

  strArray.push(consonantCluster, 'ay');
  var result = strArray.join('');
  var loppedString = result.substr(i);
  return loppedString;
}




translatePigLatin("calfiornia");
//"aliforniacay"
translatePigLatin("eight");
//eightway
translatePigLatin("glove")
//should return "oveglay".
