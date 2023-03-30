const _ = require("lodash");
/*
Групиране на обекти
Lodash:
 */
const data = [
    {name: 'John', age: 30},
    {name: 'Mary', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Jane', age: 25}
];

const lodash_groupedData = _.groupBy(data, 'age');

console.log(lodash_groupedData);

//Без Lodash:
const groupedData = {};

for (let i = 0; i < data.length; i++) {
    const age = data[i].age;

    if (!groupedData[age]) {
        groupedData[age] = [];
    }

    groupedData[age].push(data[i]);
}

console.log(groupedData);
