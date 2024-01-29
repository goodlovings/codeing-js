/*
 * @Author: haolian
 * @Date: 2024-01-28 21:04:31
 * @LastEditTime: 2024-01-29 15:28:33
 * @LastEditors: haolian
 * @Description: 在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对，找出数组中逆序对的
 * @FilePath: /codeing-js/algo/4.递归/inversePair.js
 */

function process(arr, left, right) {
  if (left === right) {
    return 0;
  }
  let mid = left + ((right - left) >> 1);

  return process(arr, left, mid) + process(arr, mid + 1, right) + getInversePair(arr, left, mid, right);
}

function getInversePair(arr, left, mid, right) {
  let count = 0;
  let l = left,
    r = mid + 1,
    helper = [];
  while (l <= mid && r <= right) {
    if (arr[l] <= arr[r]) {
      count += r - mid - 1;
      helper.push(arr[l]);
      l++;
    } else {
      helper.push(arr[r]);
      r++;
    }
  }
  if (l <= mid) {
    count += (mid - l + 1) * (r - mid - 1);
  }

  while (l <= mid) {
    helper.push(arr[l++]);
  }

  while (r <= right) {
    helper.push(arr[r++]);
  }

  for (let i = left; i <= right; i++) {
    arr[i] = helper[i - left];
  }
  return count;
}

let arr = [3, 2, 4, 6, 0, 2, 7, 5, 1];
let sum = process(arr, 0, arr.length - 1);
console.log(sum);
