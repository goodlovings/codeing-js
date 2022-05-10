/**
 * @file 节流：短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
 */

/**
 * 节流
 * @param {*} fn 需要进行节流处理的函数
 * @param {*} delay 规定需要等待的时间
 */
function throttle(fn, delay = 0) {
    // 计时器
    let timer;
    return function () {
        // 当已经执行过一次，后面不能执行；否则短浅时间段内说明还没执行过
        if (timer) {
            return;
        }
        // 获取参数
        let args = arguments;
        // 当前时间段内第一次执行
        fn.apply(this, args);
        // 执行完后定时，在delay时间内timer一直存在，所以不可能再次执行fn
        timer = setTimeout(() => {
            // 当delay时间过后，删除timer，fn又可以继续执行了
            clearTimeout(timer)
        }, delay);
    }
}


// 例子
// 变量定义防抖函数
let fn = throttle(() => {
    console.log(77777);
}, 3000);

// for循环模拟多次触发
for (let index = 0; index < 5; index++) {
    fn(index)
}