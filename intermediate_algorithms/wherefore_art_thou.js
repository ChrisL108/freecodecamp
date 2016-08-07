function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // create variable to hold number of
  // 'source' (param) properties
  var numSourceProps = 0;
  for (var props in source) {
    ++numSourceProps;
  }
  
  // loop through 'collection' (param)
  for (var i = 0; i < collection.length; i++) {

    // counter for number of matching properties
    // between 'collection' (param) and 'source' (param)
    var counter = 0;

    for (var objProp in collection[i]) {

      for (var sourceProp in source)  {
        // if current 'collection' (param) object has 
        // the current 'source' (param) property
        // AND their values match
        if (collection[i].hasOwnProperty(sourceProp) &&
          collection[i][objProp] === source[sourceProp]){
          // add to counter
          ++counter;
          // if all of the 'source' (param) properties
          // have been looped through
          if (counter == numSourceProps) {
              // push current 'collection' (param) object
              arr.push(collection[i]);
          }
        }
      }
    }
  }
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });