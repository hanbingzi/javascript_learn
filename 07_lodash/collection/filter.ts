import _ from 'lodash'


let users = [
  {'user': 'barney', 'age': 36, 'active': true},
  {'user': 'fred', 'age': 40, 'active': false}
];

let r1 = _.filter(users, function (o) {
  return !o.active;
});
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
let r2 = _.filter(users, {'age': 36, 'active': true});
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
let r3 = _.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
let r4 = _.filter(users, 'active');
// => objects for ['barney']
console.log('r1:',r1)
console.log('r2:',r2)
console.log('r3:',r3)
console.log('r4:',r4)