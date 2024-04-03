/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [],
    n = nums.length;
  if (n < 3) return res;
  nums.sort((a, b) => a - b);
  for (let k = 0; k < n - 2; k++) {
    if (nums[k] > 0 || nums[k] === nums[k - 1]) {
      continue;
    }
    let i = k + 1,
      j = n - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum > 0) {
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[i + 1]) {
          i++;
        }
        while (i < j && nums[j] === nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      }
    }
  }
  return res;
};
// @lc code=end
