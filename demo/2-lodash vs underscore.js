const _ = require("lodash");
const u = require('underscore');

//Lodash:
const object = {a: 1, b: 2, c: 3};

const lodash_array = _.map(object, (value, key) => ({key, value}));

console.log(lodash_array);

//underscore

const array = u.map(_.keys(object), (key) => ({key, value: object[key]}));

console.log(array);

/*
Lodash's map function can directly iterate over an object'skey-value pairs,
while Underscore.js's map function requires first extracting the keys of the object using keys.
 This is a minor difference, but it highlights the fact that the APIs of Lodash and Underscore.js can
 differ in subtle ways.
 */

