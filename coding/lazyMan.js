/**
 * @file 懒人
 * 实现一个LazyMan，可以按照以下方式调用:
    LazyMan(“Hank”)输出:
    Hi! This is Hank!
     
    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~
     
    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~
     
    LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
     
    以此类推。
 */

class _LazyMan {
    constructor (name) {
        this.name = name;
        this.task = [];
        this.count = 0;
        this.sayHi();
    }

    // 执行下一个操作
    next() {
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
            // 执行task队列里的事件
            for (let i = 0; i < this.task.length; i++) {
                await this.task[i]();
            }
        });
        return this;
    }

    // 打招呼
    sayHi() {
        this.task.push(() => {
            console.log(`Hi! This is ${this.name}!`);
        });
        return this.next();
    }
    // 吃饭
    eat(food) {
        this.task.push(() => {
            console.log(`Eat ${food}~`);
        });
        return this.next();
    }

    // 等到sleep结束后返回
    sleepPromise(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('wake up after ' + delay);
                resolve();
            }, delay * 1000);
        })
    }

    // 睡觉
    sleep(delay) {
        this.task.push(() => {
            this.sleepPromise(delay);
        })
        return this.next();
    }

    // 先睡觉
    sleepFirst(delay) {
        this.task.unshift(() => {
            this.sleepPromise(delay);
        })
        return this.next();
    }
}

function LazyMan(name) {
    return new _LazyMan(name);
}


LazyMan('JACK').sleepFirst(2).eat('dinner').sleep(5)