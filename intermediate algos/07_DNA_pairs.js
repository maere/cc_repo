
//https://www.freecodecamp.org/challenges/dna-pairing

function pairElement(str) {

const dnaMap = {'G': "C", 'C': "G", 'A': "T", 'T': "A"};
var outerArray = [];

var chars = str.split("");

  for(var i = 0; i<chars.length; i++){
    let parter = dnaMap[chars[i]];
    let innerArray = [];
    innerArray.push(chars[i], parter);
    outerArray.push(innerArray);
  }
  return outerArray;
}

pairElement("GCG");
