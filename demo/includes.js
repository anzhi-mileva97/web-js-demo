const _ = require("lodash");
/*
Проверка дали елемент е включен в масив
Lodash:
 */

const numbers = [1, 2, 3, 4, 5];
const value = 3;

const lodash_containsValue = _.includes(numbers, value);

console.log(lodash_containsValue); // true

//Без Lodash:

const containsValue = numbers.includes(value);

console.log(containsValue); // true

//https://youmightnotneed.com/lodash