import _ from 'lodash'

_.forEach({'a': 1, 'b': 2}, function (value, key) {
  console.log('key:', key, ';value:', value);
});