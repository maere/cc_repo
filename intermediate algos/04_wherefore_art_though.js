//https://www.freecodecamp.org/challenges/wherefore-art-thou
function whatIsInAName(collection, source) {

  var arr = [];
  var queryKey = Object.keys(source).pop();
  var queryValue = source[queryKey];

    for(var i =0; i<collection.length; i++){
      var currentObj = collection[i];

      if(currentObj.hasOwnProperty(queryKey) && currentObj[queryKey]==queryValue){
          arr.push(currentObj);
      }
    }
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

