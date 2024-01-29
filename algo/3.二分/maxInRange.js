/*
 * @Author: haolian
 * @Date: 2024-01-28 15:23:35
 * @LastEditTime: 2024-01-28 16:08:01
 * @LastEditors: haolian
 * @Description: 返回数组中l和r之间的最大值
 * @FilePath: /codeing-js/algo/3.二分/maxInRange.js
 */
function getMax(arr, l, r) {
  if (l === r || l === r - 1) {
    return Math.max(arr[l], arr[r]);
  }
  let mid = l + ((r - l) >> 1);
  let left = getMax(arr, l, mid);
  let right = getMax(arr, mid + 1, r);
  return Math.max(left, right);
}

console.log(getMax([91, 6, 7, 26, 7, 9, 0, 1, 4, 3], 0, 9));
