import _ from 'lodash'

function test() {
  var users = [
    {'user': 'barney', 'active': false},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': true}
  ];

  const r1 = _.dropWhile(users, function (o) {
    return !o.active;
  });
  //console.log(r1)
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
const r2 =   _.dropWhile(users, {'user': 'barney', 'active': false});
console.log(r2)
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
  _.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
  _.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
}

test()