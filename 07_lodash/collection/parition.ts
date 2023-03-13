import _ from 'lodash'

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

let r1 = _.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
let r2 = _.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
let r3 = _.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
let r4 = _.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
console.log('r1:',r1)
console.log('r2:',r2)
console.log('r3:',r3)
console.log('r4:',r4)
