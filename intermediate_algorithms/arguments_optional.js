function addTogether(a, b) {

    //   check if 'a' (param) is a number 
    if (+a !== a) return undefined;

    // if 'b' parameter was provided, check
    // that it's a number, then return sum of a + b
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