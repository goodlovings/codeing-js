function promiseRacr(promises) {
    return new Promise((resolve, reject) => {
        for (const p of promises) {
            Promise.resolve(p).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
        }
    })
}