function myNew(Fn, ...args) {
    //1.创建一个空对象，并将对象的__proto__指向构造函数的prototype 这里我两步一起做了
    const obj = Object.create(Fn.prototype);
    //2.将构造函数中的this指向obj，执行构造函数代码,获取返回值 
    const res = Fn.apply(obj, args);
    //3.判断返回值类型 
    return res instanceof Object ? res : obj
}