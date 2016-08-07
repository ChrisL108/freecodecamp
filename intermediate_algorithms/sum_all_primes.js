function sumPrimes(num) {
    // Use 'Sieve of Eratosthenes' implementation
    var sieve = [], i, j, primes = [];
  
    for (i = 2; i <= num; ++i) {
      
      if (!sieve[i]) {
       
        primes.push(i);
        for (j = i << 1; j <= num; j += i) {
          
          sieve[j] = true;
        }
      }
    }
    console.log(primes);
    return primes.reduce( (a, b) => {return a + b;} );
  }

sumPrimes(10);