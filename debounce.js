/**
 * @file 防抖：当持续触发事件时，在规定的时间内该事件没有被再次调用，事件处理函数就会执行一次，
 * 如果在规定时间内事件再次被调用，重新开始计时，以最后一次触发时间为开始计时时间
 */

/**
 * 
 * @param {*} fn 需要进行防抖处理的函数
 * @param {*} delay 规定需要等待的时间
 */
function debounce(fn, delay = 0) {
    // 计时器
    let timer;
    //返回一个定义的函数，利用闭包
    return function () {
        // 获取函数调用时的实参
        let args = arguments;
        // 如果已经执行中，需要重置
        if (timer) {
            clearTimeout(timer)
        }
        // 重置/初次 在delay时间之后执行传入的fn
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

// 例子
// 变量定义防抖函数
let fn = debounce(()=>{
    console.log(77777);
}, 3000);

// for循环模拟多次触发
for (let index = 0; index < 5; index++) {
    fn(index)
}
