/**
 * @file 发布订阅模式
 * 实现一个发布订阅模式拥有 on emit once off 方法：
    on： 用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
    emit： 取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
    off： 可以根据 event 值取消订阅（取消订阅）
    once: 只监听一次，调用完毕后删除缓存函数（订阅一次）
 */

class EventEmitter {
    constructor () {
        this.events = {};
    }

    // “注册”回调函数：通过on将回调函数放到同name的数组中“缓存”，供其他方法调用；
    on(name, callBack) {
        // 如果存在同name，说明该name下已经有回调函数，直接放在数组中就行；
        if(this.events[name]){
            this.events[name].push(callBack)
        }
        // 否则，说明原来的“缓存”中没有改name回调函数，直接生成数组；
        else {
            this.events[name] = [callBack];
        }
    };

    // 立即执行（触发）指定name的函数，args为传入的参数；
    emit(name, ...args){
        // 存在name数组，说明已经“注册”过函数，执行改name下“注册”的所有回调函数；
        if(this.events[name]){
            this.events[name].forEach(fn => {
                fn.call(this, ...args); // 【执行上下文】指定上下文到顶层this
            });
        }
    }

    // 指定name的函数触发时只执行一次，执行后，剩余的直接销毁掉；
    once(name, callBack){
        // 新写一个函数，执行callBack一次后，剩余的name下的回调函数销毁
        function runOnce(){
            // 执行一次
            callBack();
            // 销毁改name下的相同的callBack函数
            this.off(name, callBack) // 【执行上下文】非箭头函数写法中，此时this指向的是runOnce本身，当在emit中执行时，容易出现找不到off的报错
        }
        // 把构造的只执行一次函数“注册”到name下
        this.on(name, runOnce);

    };

    // 销毁函数：改name下相同的callBack都删除
    off(name, callBack){
        if(this.events[name]){
            // 同name“缓存”中值存在非callBck的其余函数
            this.events[name] = this.events[name].filter(fn => {
                return fn !== callBack;
            })
        } else {
            return;
        }
    }


    // 涉及到this指向问题的写法（执行上下文）
    // 立即执行（触发）指定name的函数，args为传入的参数；
    emit1(name, ...args) {
        // 存在name数组，说明已经“注册”过函数，执行改name下“注册”的所有回调函数；
        if(this.events[name]){
            this.events[name].forEach(fn => {
                fn(...args); // 直接执行函数
            });
        }
    }

    // 指定name的函数触发时只执行一次，执行后，剩余的直接销毁掉；
    once1(name, callBack) {
        // 新写一个函数，执行callBack一次后，剩余的name下的回调函数销毁
        const runOnce = () => {
            // 执行一次
            callBack();
            // 销毁改name下的相同的callBack函数
            this.off(name, callBack)  // runOnce函数为箭头函数写法，说以此时this指向的就是顶层执行上下文，所以this.off可以找到
        }
        // 把构造的只执行一次函数“注册”到name下
        this.on(name, runOnce);
    };
}