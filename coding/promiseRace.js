/**
 * @file 手写Promise.race方法：返回一个Promise，其结果为一个Promise数组的执行输出的第一个结果，
 */

/**
 * 手写Promise.racel方法
 * @param {*} promises Promise的数组
 * @returns 返回一个接受结果的Promise
 */
function promiseRace(promises) {
    // 返回一个Promise对象实例
    return new Promise((resolve, reject) => {
        // 遍历传入的promise数组并执行
        for (const p of promises) {
            // 用Promise.resolve将每个promise转为promise实例执行
            Promise.resolve(p)
            // 一旦有一个执行完，直接输出
            .then(res => {
                resolve(res);
            })
            // 一旦有一个执行错误，直接输出
            .catch(err => {
                reject(err)
            })
        }
    })
}