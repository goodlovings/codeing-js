/**
 * @file flat数组扁平化
 * 实现一个方法使多维数组变成一维数组
 */

/**
 * 数组去重（调用Array的flat方法）
 * @param {*} arr 多维数组
 */
function myFlat1(arr) {
    // 调用js中Array的api，输入参数为需要打平的层数，不传默认只打平一层，Infinity最大值，打平为一维数组；
    return arr.flat(Infinity);
}

/**
 * 使用递归方式打平数组
 * @param {*} arr
 */
function myFlatRecursion(arr) {
    if (arr.length === 0) {
        return;
    };
    return arr.reduce((pre, cur) => {
        // 如果当前元素是数组，调用递归函数本身，如果不是数组，组合在一起
        return Array.isArray(cur) ? [...pre, ...myFlatRecursion(cur)] : [...pre, cur]
    }, []); // 默认第一个元素为空数组
}

/**
 * 使用迭代方式打平数组
 * @param {*} arr
 * @returns
 */
function myFlatIterate(arr){
    if(!arr.length){
        return;
    }
    // 当arr数组中存在数组元素，一遍一遍判断和打平
    while(arr.some(item => Array.isArray(item))){
        // 打平当前层，返回打平一层后的数组arr
        arr = [].concat(...arr);
    }
    return arr;
}

// 递归和迭代区别（百度）