/**
 * @file：获取一个数组最深有多少层嵌套
 */

/**
 * 获取数组层数
 * @param {*} arr 
 * @returns 
 */
function getArrayDeep(arr) {
    // stack记录当前数组的层数，maxDeep记录最大层数
    let stack = 0, maxDeep = 0;
    // 将数组转为字符串类型
    let temp = JSON.stringify(arr);
    // 遍历字符串的每个元素
    for (let index = 0; index < temp.length; index++) {
        // 当元素为“[”，说明存在一层，当前层数加1
        if (temp[index] === '[') {
            stack++
        }
        // 当元素为“]”，说明当前子数组遍历完了，当前层数减1
        if (temp[index] === ']') {
            stack--
        }
        // 遍历每个元素的时候都进行取最大值计算
        maxDeep = Math.max(maxDeep, stack);
    }
    // 返回最大层数
    return maxDeep;
}

// 实例
let arr = [1, [2], [3, [4, [5], [6, [11, [12]]]], [8, [7, 9, [10]]]]]
console.log(getArrayDeep(arr));