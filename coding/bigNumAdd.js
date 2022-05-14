/**
 * @file 两大数相加：当大数相加超过js限制的大小时，不能使用Number的加法进行操作，此时使用字符串进行处理
 */

/**
 * 大数相加
 * @param {*} a 字符串形式大数a
 * @param {*} b 字符串形式大数b
 * @returns 返回相加后的大数字符串
 */
function bigNumAdd(a, b) {
    // 计算两个大数的最大长度
    let maxLen = Math.max(a.length, b.length);
    // 将两个大数补充为最大长度，便于下面的操作
    a = padStart(maxLen, "0");
    b = padStart(maxLen, "0");

    // 存放两个大数对应位上数字相加之和
    let t = 0;
    // 存放两个大数对应位上数字相加之后的进位数
    let f = 0;
    // 大数相加的结果
    let sum = '';
    // 从右往左进行循环计算（从个位开始计算）
    for (let index = maxLen - 1; index >= 0; index--) {
        // 两个大数对应位上数字相加之和 加上 上一位计算的进位数的结果
        t = parseInt(a[index]) + parseInt(b[index]) + f;
        // 当前是否需要向前进一位
        f = Math.floor(t / 10);
        // 结果存放
        sum = (t % 10) + sum;
    }

    // 循环结束后判断最大位数相加是否 进一位了
    if (f === 1) {
        sum = "1" + sum;
    }
    // 输出大数相加的字符串结果
    return sum;
}