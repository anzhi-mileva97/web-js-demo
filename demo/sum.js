const _ = require("lodash");
/*
Сумиране на елементи на масив
Lodash:
 */
const numbers = [1, 2, 3, 4, 5];

const lodash_sum = _.sum(numbers);

console.log(lodash_sum); // 15

//Без Lodash:

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // 15
