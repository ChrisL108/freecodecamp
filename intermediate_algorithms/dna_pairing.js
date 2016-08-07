function pairElement(str) {
  
  var pairs = [["A","T"],["C","G"]],
      newStr = str.split(""),
      newPairs = [];
  
  // Loop through DNA string
  for (var i=0; i<newStr.length; i++) {
    //  Loop through the 2 sets of pairs
    for (var pair in pairs) {

      //    if theres a match to pair[0], append
      //    pair[1] and push the new paired elements
       if (pairs[pair][0].indexOf(newStr[i]) > -1 ) {
         newPairs.push([ newStr[i] , pairs[pair][1] ]);
       }

      //    if theres a match to pair[1], append
      //    pair[0] and push the new paired elements
      if (pairs[pair][1].indexOf(newStr[i]) > -1 ) {
         newPairs.push([ newStr[i] , pairs[pair][0] ]);
       }
       
    }
   
  }
  
  return newPairs;
}

pairElement("CTCTA");