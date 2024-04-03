/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxContainer = 0;
  // 方法一：暴力循环
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     let h = Math.min(height[i], height[j]);
  //     let w = j - i;
  //     maxContainer = Math.max(maxContainer, h * w);
  //   }
  // }
  // 方法二：双指针
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    maxContainer = Math.max(
      maxContainer,
      (right - left) * Math.min(height[left], height[right])
    );
    height[left] > height[right] ? (right -= 1) : (left += 1);
  }
  return maxContainer;
};
// @lc code=end
