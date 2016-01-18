function reverseString(str) {
  array = str.split("");
  array.reverse();
  newStr = array.join("");
  
  return newStr;
}

reverseString("hello");
