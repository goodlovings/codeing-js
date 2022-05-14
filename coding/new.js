/**
 * @file 手写new方法，新建构造函数实例
 */

/**
 * 
 * @param {*} Fn 构造函数
 * @param  {...any} args 传入的参数
 * @returns 返回新建的实例
 */
function myNew(Fn, ...args) {
    //1.创建一个空对象，并将对象的__proto__指向构造函数的prototype
    const obj = Object.create(Fn.prototype);
    //2.将构造函数中的this指向obj，执行构造函数代码，获取返回值 
    const res = Fn.apply(obj, args);
    //3.判断返回值类型，如果是对象，直接返回，非对象返回创建的空对象
    return res instanceof Object ? res : obj
}