/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let flag = (m + n) % 2 === 0; //奇偶性
  let mid = (m + n) >> 1;
  let i = 0,
    j = 0,
    count = 0,
    res = 0;
  while (i < m || j < n) {
    let temp = 0;
    if (i >= m || j >= n) {
      if (i >= m) {
        temp = nums2[j];
        j++;
      } else {
        temp = nums1[i];
        i++;
      }
    } else {
      if (nums1[i] < nums2[j]) {
        temp = nums1[i];
        i++;
      } else {
        temp = nums2[j];
        j++;
      }
    }
    if (flag) {
      if (count == mid) {
        res = (temp + res) / 2;
        break;
      } else {
        res = temp;
      }
    } else {
      if (count == mid) {
        res = temp;
        break;
      }
    }
    count++;
  }
  return res;
};
// @lc code=end
