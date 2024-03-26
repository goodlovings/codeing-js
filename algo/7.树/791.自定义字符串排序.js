/*
 * @lc app=leetcode.cn id=791 lang=javascript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let len = s.length,
    n = order.length;
  let res = new Array(n + 1).fill("");
  for (let i = 0; i < len; i++) {
    const char = s[i];
    let ind = order.indexOf(char);
    if (ind > -1) {
      res[ind] += char;
    } else {
      res[n] += char;
    }
  }
  return res.join("");
};
// @lc code=end
