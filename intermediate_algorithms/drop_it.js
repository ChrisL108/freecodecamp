function dropElements(arr, func) {
  var newArr;
  
//   start at second index
  for (var i = 1; i < arr.length; i++) {
//   if last index is false and current is true - 
//    return rest of array, not including the last false
    if (!func(arr[i-1]) && func(arr[i])) {
      newArr = arr.splice(i);
    } 
//   If the first item is true - return original array
    else if (func(arr[i-1])) {
      newArr = arr;
    } 
//  If no conditions are true - return empty array
    else {
      return [];
    }
  }
        
    return newArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});