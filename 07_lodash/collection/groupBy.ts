import _ from 'lodash';

let result = _.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
console.log(result)