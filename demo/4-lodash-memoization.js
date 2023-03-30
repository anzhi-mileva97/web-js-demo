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