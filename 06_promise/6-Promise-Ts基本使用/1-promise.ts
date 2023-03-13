//1.配合await，直接得到resolve的数据
async function test1() {
  let result = await new Promise((resolve, reject) => {
    resolve('得到了数据')
  })
  console.log(result)
  return result
}

//2.研究promise和then一起使用时的返回值

async function test2() {
  let result = await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000)
  }).then(() => {
    console.log('then');
    return 'aaa';
  })
  console.log(result);
}

//test1()
test2();
