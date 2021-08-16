//1
import {name,age,func} from "./a.js";
//运行，浏览器报跨域错误，需要已web方式运行
console.info(name)

console.info(age)

func();

//2 跟第一中导入方式没有任何区别，唯一区别就是导出时不一样
import {title} from './a.js';

console.info(title)
//3 导入默认函数
import myFunc from './a.js'
console.info(myFunc(4,2))

//4. 全导入
import * as a from "./a.js"

console.info(a.name)
console.info(a.age)

