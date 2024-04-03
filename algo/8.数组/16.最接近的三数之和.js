/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = Infinity,
    n = nums.length;
  for (let k = 0; k < n - 2; k++) {
    let i = k + 1,
      j = n - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (Math.abs(sum - target) <= Math.abs(res - target)) {
        res = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        j--;
      } else {
        i++;
      }
    }
  }
  return res;
};

// @lc code=end
