/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [],
    len = s.length;
  const changefn = (str, index) => {
    if (index >= len) {
      res.push(str);
      return;
    }
    let char = s[index];
    if (/[A-Za-z]/.test(char)) {
      changefn(str + char.toUpperCase(), index + 1);
      changefn(str + char.toLowerCase(), index + 1);
    } else {
      changefn(str + char, index + 1);
    }
  };
  changefn("", 0);
  return res;
};
// @lc code=end
