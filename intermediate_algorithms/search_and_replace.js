function myReplace(str, before, after) {

//   More effecient way using .replace() at the bottom,
//   although this implementation will replace
//   all instances of 'before' (param) inside of 'str' (param)
  
  // variables to hold characters
  var letter, firstLetter;
  
  var newStr = str
  
      .split(" ")
  
      .map(function(word) {
       
       // once 'word' (var) matches 'before' (param)
       if (word == before) { 
          //  loop through characters in word (var)
          for (var i = 0; i<word.length;i++) {
            // store each letter in a variable throughout loop
            letter = word.charAt(i);
            
            if (letter === letter.toUpperCase()) {
              // preserve case of the original word:
              // 1) split off letter to make uppercase,
              // 2) then concat back together
              firstLetter = after.split("")[i].toUpperCase();
              return firstLetter + after.slice(1) ;

            } else {

              return after;
            }
          }


       } else {return word;}  

      });
  
  return newStr.join(" ");
}

myReplace("His name is Tom Tom", "Tom", "john");



//   ~~~~~ Different implementation ~~~~~

//   var index = str.indexOf(before);

//   if (str[index] === str[index].toUpperCase()) {
  
//     after = after.charAt(0).toUpperCase() + after.slice(1);

//   }

//   str = str.replace(before, after);

//   return str;

  
  
//   console.log(newStr.join(" "));