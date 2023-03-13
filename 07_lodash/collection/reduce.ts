import _ from 'lodash'

let r1 = _.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

let r2 = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)


console.log('r1:',r1)
console.log('r2:',r2)


let a = [1,4,7];
let r3 = a.reduce((previousValue, currentValue, currentIndex, array) => {
  return previousValue + currentValue;
})

console.log('r3:',r3)