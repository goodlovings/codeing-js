/**
 * @file 柯里化：柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * 例如：add(1,2,3,4) =》 curry(add)(1)(2)(3)(4)
 */

function curry(fn) {
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn(...args.concat(Array.from(arguments)));
            };
        }
        return fn(...args);
    };
}

function add(x, y) {
    return x + y;
}

let sum = curry(add)(1)(2)
console.log(sum);