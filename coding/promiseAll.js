
function promiseAll(promises) {
    let result = [];
    let count = 0;
    let len = promises.length;
    return new Promise((resolve, reject) => {
        for (const i in promises) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                count++
                if (count === len) {
                    resolve(result);
                }
            })
            .catch(err => {
                reject(err)
            })
        }
    })
}