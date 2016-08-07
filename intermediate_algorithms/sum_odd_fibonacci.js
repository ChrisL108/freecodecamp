function sumFibs(num) {

  //   variables for fibonacci loop
  var a = 1, b = 1, 
  //   start w/ 2 for fibonacci loop
  temp = 2, 
  // all fibonacci arrays will start with [1, 1]
  fibArr = [1, 1];
  
  //   loop through all numbers from 2 to num (param)
  for (var i = 2; b < num; i++) {
    //  store sum of 'a' and 'b'
    //  in temp variable so 'a' and 'b'
    //  can be modified before check
    temp = a + b;
    a = b;
    b = temp;
    //  if NOT odd and less then/equal to num (param) provided
    if (b % 2 !== 0 && b <= num) fibArr.push(b);
  }
  
  //   return sum of all fibonacci array elements
  return fibArr.reduce((prev, curr) => prev + curr);;

}

sumFibs(75025);