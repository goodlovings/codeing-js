/**
 * @file bind函数，修改函数的指向，并且需要执行的函数
 */

/**
 * bind方法参数有n个：
 * 1、执行上线文（可选）
 * 2、其余为方法的参数
 */
Function.prototype.myBind = function () {
    // 绑定执行上下文，有参数默认是第一个参数，无参数则根据环境不同指向不同：浏览器指向window，node指向global
    let context = arguments[0] || window;
    // 将调用的方法绑定到执行上下文中
    context.fn = this;
    // 处理参数
    let args = [];
    for (let index = 0; index < arguments.length; index++) {
        index > 0 && args.push(this.arguments[index]);
    }

    // 需要执行的函数（闭包原理）
    let f = function () {
        // 添加额外的参数
        for (let index = 0; index < arguments.length; index++) {
            args.push(this.arguments[index]);
        }
        // 执行方法
        context.fn(...args);
        // 执行完后删除绑定的方法
        delete context.fn;
    }
    // 返回需要执行的函数
    return f;
}

// 可参考：http://www.wawow.xyz/#/md-render?bid=7