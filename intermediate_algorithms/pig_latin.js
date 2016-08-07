function translatePigLatin(str) {
  
  //   vowels
  var vowels = ["a", "e", "i", "o", "u"];
  //   consonants
  var consonants  = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", 
                     "n", "p", "q", "r", "s", "t", "v", "x", "z"];
  
  //   If the string starts with vowel, just add 'way'
  if (vowels.indexOf(str.charAt(0)) !== -1 ) {
    return str + "way";
  }
  
  var count= 0;
  
  //   Check how many characters in string before a vowel is reached
  for (var i = 0;i < str.length; i++) {
    
    //   Add 1 to count until a non-consonant is reached
    if (consonants.indexOf(str[i]) > -1) {
      
      count++;
    
    } else { break; }
     
  }
  //    Use .substr() to piece up and put back together
  //    (pig-latin-style).. then append 'ay'
  str = str.substr(count) + str.substr(0, count) + "ay";
  
  return str;
}

translatePigLatin("glove");