/**
 * @file 手写Promise.all方法：返回一个Promise，其结果为一个Promise数组的执行结果，
 * 结果的顺序和传入的Promise数组一致，一旦有一个promise执行reject，输出reject
 */

/**
 * 手写Promise.all方法
 * @param {*} promises Promise的数组
 * @returns 返回一个接受结果的Promise
 */
function promiseAll(promises) {
    // 接受每个promise执行的resolve结果
    let result = [];
    // 计算执行了的Promise的个数
    let count = 0;
    // 计算出入的promise数组长度
    let len = promises.length;
    // 返回一个Promise对象实例
    return new Promise((resolve, reject) => {
        // 遍历传入的promise数组并执行
        for (const i in promises) {
            // 用Promise.resolve将每个promise转为promise实例执行
            Promise.resolve(promises[i])
            // 执行成功
            .then(res => {
                // 结果收集
                result[i] = res;
                // 计数加1
                count++
                // 当计数等于传入的promise数组长度，说明所有的promise都执行完，可以将结果输出
                if (count === len) {
                    resolve(result);
                }
            })
            // 一旦有一个promise执行报错，直接输出错误
            .catch(err => {
                reject(err)
            })
        }
    })
}