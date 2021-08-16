var name = '小明'
var age = 18
var func = function(){
    console.info('aaaaaa')
}
//1 统一导出
export {name,age,func}
//2 生命变量时，就导出，函数也可以
export var title = '哈哈哈'
//3 默认导出，函数或变量不需要命名，且一个文件中只有有一个默认导出
export default  function(a,b){
    return a+b;
}
