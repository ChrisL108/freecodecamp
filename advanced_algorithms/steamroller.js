function steamrollArray(arr) {
  // empty array to hold flattened array
  var newArr = [];
    //   create function to loop through
    //   nested arrays
  var steamroller = function(elem) {
    if (Array.isArray(elem)) {
      //   recursively check for nested arrays
      for (var i in elem) {
        steamroller(elem[i]);
      }
    // if not an array - push
    } else {  
      newArr.push(elem);
    }
  };
  
  arr.forEach(steamroller);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);