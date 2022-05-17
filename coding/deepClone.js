/**
 * @file 深拷贝：拷贝过的数据无论哪个层级都和原数据无共用地址
 */

/**
 * 深拷贝
 * @param {*} obj 需要进行深拷贝的数据
 * @returns 返回深拷贝后的数据
 */
function deepClone(obj) {
    // 判断为null的对象时需要对对象进行深拷贝
    if (typeof obj === 'object' && obj !== null) {
        // 判断结果是数组还是对象
        let result = Array.isArray(obj) ? [] : {};
        // forin 循环遍历每个元素
        for (const key in obj) {
            // 当子元素也是引用类型时，执行深拷贝函数
            if (typeof obj[key] === 'object') {
                // 接收深拷贝的结果
                result[key] = deepClone(obj[key])
            } else {
                // 基础类型直接赋值
                result[key] = obj[key];
            }
        }
        // 返回深拷贝的结果
        return result;
    }
    // 基础类型和null，直接返回
    else {
        return obj;
    }
}

// 实例
let obj = {
    a: true,
    b: {
        c: 1123,
        d: 'hhh'
    },
    e: [
        {
            f: null
        },
        888
    ]
}

let dc = deepClone(obj)
console.log(dc);
console.log(dc === obj); // false