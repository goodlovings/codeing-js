/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [],
    len = nums.length;
  if (len < 4) return res;
  nums.sort((a, b) => a - b);
  for (let s = 0; s < len - 3; s++) {
    if (nums[s] === nums[s - 1]) {
      continue;
    }
    for (let k = s + 1; k < len - 2; k++) {
      if (k - 1 > s && nums[k] === nums[k - 1]) {
        continue;
      }
      let i = k + 1,
        j = len - 1;
      while (i < j) {
        let sum = nums[s] + nums[k] + nums[i] + nums[j];
        if (sum === target) {
          res.push([nums[s], nums[k], nums[i], nums[j]]);
          while (i < j && nums[i] === nums[i + 1]) {
            i++;
          }
          while (i < j && nums[j] === nums[j - 1]) {
            j--;
          }
          i++;
          j--;
        } else if (sum > target) {
          j--;
        } else {
          i++;
        }
      }
    }
  }
  return res;
};
// @lc code=end
