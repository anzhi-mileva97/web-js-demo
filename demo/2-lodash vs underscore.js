const _ = require("lodash");
const u = require('underscore');

//Lodash:
const object = {a: 1, b: 2, c: 3};

const lodash_array = _.map(object, (value, key) => ({key, value}));

console.log(lodash_array);

//underscore

const array = u.map(_.keys(object), (key) => ({key, value: object[key]}));

console.log(array);

