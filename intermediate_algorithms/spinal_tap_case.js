function spinalCase(str) {
  
                      // If capital - make sure whitespace is before it
    var spinalCase = str.replace(/([A-Z])/g, " $1")
                      // replace all whitespace with hyphen
                      .replace(/\s/g,"-")
                      // replace double -- with -
                      .replace(/([-]{2})/g, "-")
                      // remove underscores
                      .replace(/_/g,"")
                      // lowercase
                      .toLowerCase()
                      // remove leading hyphens
                      .replace(/([-]){0,1}/ ,""); 
  
    return spinalCase;
}

spinalCase("The_Andy_Griffith_Show");