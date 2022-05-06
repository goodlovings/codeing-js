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
        return Array.isArray(cur) ? [...pre, ...myFlatRecursion(cur)] : [...pre, cur]
    }, []);
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
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

// 递归和迭代区别（百度）