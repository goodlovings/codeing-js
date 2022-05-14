/**
 * @file instanceof，判断实例对象是否是指向某构造函数
 */

/**
 * 手写instanceof
 * @param {*} left 进行判断的实例
 * @param {*} right 指向的构造函数
 * @returns 返回判断结果
 */
function myInstanceof(left, right) {
    // 默认无返回情况下一直进行循环判断
    while (true) {
        // 如果实例为null，直接返回false
        if (left === null) {
            return false;
        }
        // 如果实例的__proto__指向了构造函数的prototype，说明指向正确，返回true
        if (left.__proto__ === right.prototype) {
            return true;
        }
        // 如果无返回，根据原型链一层一层向上寻找
        left = left.__proto__;
    }
}