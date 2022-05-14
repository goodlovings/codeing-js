/**
 * @file apply函数，修改函数的指向，并且输出执行结果
 */

/**
 * apply方法参数有两个：
 * 1、执行上线文（可选）
 * 2、参数数组（可选）
 */
Function.prototype.myApply = function () {
    // 绑定执行上下文，有参数默认是第一个参数，无参数则根据环境不同指向不同：浏览器指向window，node指向global
    let context = arguments[0] || window || global;
    // 将调用的方法绑定到执行上下文中
    context.fn = this;
    // 处理参数
    let args = arguments.length > 1 ? arguments[1] : [];
    // 执行方法
    context.fn(...args);
    // 执行完后删除绑定的方法
    delete context.fn;
}

// 可参考：http://www.wawow.xyz/#/md-render?bid=7