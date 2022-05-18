/**
 * @file 使用setTimeout模拟实现setInterval：定时循环器
 */

/**
 * 实现setInterrval
 * @param {*} fn 定时执行的函数
 * @param {*} delay 定时时长
 */
function myInteral(fn, delay){
    // 定时器，规定delay时间后执行内部代码
    setTimeout(() => {
        // 执行传入的函数，也可以使用改变其执行上下文    fn.call(this)
        fn()
        // 执行后，自己调用自己，再来一遍，如此反复
        myInteral(fn, delay)
    }, delay);
}


// 实例
let fn = ()=>{
    console.log(8888);
}

myInteral(fn, 2000);