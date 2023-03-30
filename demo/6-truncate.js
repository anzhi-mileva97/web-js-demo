const _ = require("lodash");
/*
Съкращаване на string
Lodash:
 */
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const lodash_string = _.truncate(longString, { length: 20 });

console.log(lodash_string);

// Без Lodash:
const maxLength = 17;

let truncatedString = longString;

if (longString.length > maxLength) {
    truncatedString = longString.slice(0, maxLength) + '...';
}

console.log(truncatedString);
