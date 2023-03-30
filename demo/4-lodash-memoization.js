const _ = require("lodash");

const expensiveCalculation = (n) => {
    console.log(`Performing expensive calculation for ${n}`);
    return n * 2;
};

const memoizedCalculation = _.memoize(expensiveCalculation);

console.log(memoizedCalculation(5));
console.log(memoizedCalculation(5));
console.log(memoizedCalculation(10));
console.log(memoizedCalculation(10));

/*
In this example, we define an expensive calculation function that simply multiplies a number by 2. We then create a
 memoized version of this function using Lodash's _.memoize() method.
 This memoized function caches the results of previous function calls, so that if we call it again with the same argument,
  it simply returns the cached result instead of performing the expensive calculation again.

In the console output, we can see that the first time we call memoizedCalculation(5) and memoizedCalculation(10),
 the expensive calculation is performed and the result is logged to the console.
 However, when we call these functions again with the same arguments, the expensive calculation is not performed,
  and the cached result is returned instead. This can significantly improve the performance of functions
   that are called repeatedly with the same arguments.
 */