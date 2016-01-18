function factorialize(num) {
  var product = 1;
  
  while(num>0){
    product = product*num;
    console.log(product);
    num--;
  }
  
  return product;
}

factorialize(5);