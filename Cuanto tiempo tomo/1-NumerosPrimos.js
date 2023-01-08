Number.prototype.isPrime = function() {
    let raizCuadrada = Math.sqrt(this)
    for( let i=2; i<= raizCuadrada; i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 10,000th prime number is 104729
// This took 122.80489999055862 milliseconds to run

// The 100,000th prime number is 1299709
// This took 3545.743499994278 milliseconds to run

// The 1,000,000th prime number is 15485863
// This took 116320.08880001307 milliseconds to run