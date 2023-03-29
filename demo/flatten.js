const _ = require("lodash");
/*
Сплескване на масив
Lodash:
 */
const nestedArray = [[1, 2], [3, 4], [5]];

const lodash_flattenedArray = _.flatten(nestedArray);

console.log(lodash_flattenedArray);

//Без Lodash:
const flattenedArray = [];

for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
    }
}

console.log(flattenedArray);
