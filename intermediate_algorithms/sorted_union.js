function uniteUnique(arr) {
  // create empty array to store values
  // from all arrays in arr (param) to be
  // later checked for duplicates
  var united = [],
      // put all arr (param) arguments in a usable array
      args = Array.prototype.slice.call(arguments);

    // use reduce to check 2 arrays simultaneously
    args.reduce(function(prev, curr, index) {
      
      // check first set
      // if number is not in untied (array), 
      // push to united (array)
      for (var num in prev) {
        if (prev && united.indexOf(prev[num]) === -1) {
          united.push(prev[num]);
        }
      }
      //check the rest
      // if number is not in untied (array), 
      // push to united (array)
      for (var num2 in curr) {
        if (united.indexOf(curr[num2]) === -1) {
          united.push(curr[num2]);
        }
      }
  });
  
  return united;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);