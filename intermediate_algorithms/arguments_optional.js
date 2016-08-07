function addTogether(a, b) {
//   check for 'type = Number' before all returns
  
    if (+a !== a) return undefined;

    // if 'b' parameter was provided, return sum
    if (b) {
        if(+b !== b) return undefined;
        return a + b;
    }

    // if just 'a' parameter given, return function
    return function(b) {
        if(+b !== b) return undefined;
        return a + b;
    };
}

addTogether(2,"3");