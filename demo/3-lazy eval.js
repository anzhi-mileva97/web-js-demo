const _ = require("lodash");

const result = _.chain([1, 2, 3, 4])
    .filter(num => {
        console.log(`filtering ${num}`);
        return num % 2 === 0;
    })
    .map(num => {
        console.log(`mapping ${num}`);
        return num * 2;
    })
    .take(2)
    ;

console.log(result);
console.log(result.value());
