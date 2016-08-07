function sym(args) {
  
  //  convert arguments object to a usable array
  var argsArr = Array.prototype.slice.call(arguments), 
      result;
  
  //  call buildSymArray w/ first 2 arrays
  result = buildSymArray(argsArr[0], argsArr[1]) ;
  
  //  if there are more than 2 arrays in arguments
  //  call buildSysArray for each, with the last call's result
  //  as the first parameter
  if (argsArr.length > 2) {
    for (let i = 2; i <argsArr.length; i++) {
      result = buildSymArray(result, argsArr[i]);
    }
  }
  
  //  filter out duplicates
  result = result.filter((val, i) => result.indexOf(val) == i);
  
  return result;
}

//  function to compare the symmetric 
//  difference of two arrays
function buildSymArray(a, b) {
  var syms = [];
  //   check if array 'b' holds any values from array 'a'
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      syms.push(a[i]);
    }
  }
  //   check if array 'a' holds any values from array 'b'
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      syms.push(b[i]);
    }
  }
  //   return sorted symetric array
  return syms.sort();
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
