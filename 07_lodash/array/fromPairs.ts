import _ from 'lodash'
function test(){
  let result = _.fromPairs([['fred', 30], ['barney', 40]])
  console.log(result)
}
test()